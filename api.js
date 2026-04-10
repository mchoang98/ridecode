/**
 * api.js — GitHub API integration layer.
 * Fetches folder structures and raw markdown files from GitHub.
 * Implements simple in-memory caching with TTL.
 */

const API = (() => {
  const { owner, repo, branch, docsPath } = window.DOCS_CONFIG.github;
  const BASE_RAW = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
  const BASE_API = `https://api.github.com/repos/${owner}/${repo}/contents`;

  // Simple cache with TTL
  const cache = new Map();

  function cacheKey(key) {
    return `cache:${key}`;
  }

  function getCache(key) {
    const entry = cache.get(cacheKey(key));
    if (entry && Date.now() - entry.ts < window.DOCS_CONFIG.cacheTTL) {
      return entry.data;
    }
    cache.delete(cacheKey(key));
    return null;
  }

  function setCache(key, data) {
    cache.set(cacheKey(key), { data, ts: Date.now() });
  }

  /**
   * Fetch a directory listing from GitHub API.
   * Returns array of { name, path, type } for files/folders.
   */
  async function fetchDir(dirPath = '') {
    const key = cacheKey(`dir:${dirPath}`);
    const cached = getCache(key);
    if (cached) return cached;

    const fullPath = docsPath ? `${docsPath}/${dirPath}` : dirPath;
    const url = `${BASE_API}/${fullPath}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch directory: ${url} (${res.status})`);

    const data = await res.json();
    const items = data
      .filter((item) => item.type === 'file' || item.type === 'dir')
      .map((item) => ({
        name: item.name,
        path: item.path.replace(`${docsPath}/`, ''),
        type: item.type, // 'file' or 'dir'
      }));

    setCache(`dir:${dirPath}`, items);
    return items;
  }

  /**
   * Fetch raw markdown content for a given file path.
   */
  async function fetchFile(filePath) {
    const key = cacheKey(`file:${filePath}`);
    const cached = getCache(key);
    if (cached) return cached;

    const url = `${BASE_RAW}/${docsPath}/${filePath}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch file: ${url} (${res.status})`);

    const text = await res.text();
    setCache(`file:${filePath}`, text);
    return text;
  }

  /**
   * Recursively build the docs tree from the /docs root.
   * Returns: [
   *   { name: 'subject', path: 'subject', lessons: [
   *     { name: 'lesson.md', path: 'subject/lesson.md' },
   *     ...nested folders...
   *   ]}
   * ]
   */
  async function buildTree(dirPath = '') {
    const items = await fetchDir(dirPath);
    const tree = [];

    // Separate dirs and files
    const dirs = items.filter((i) => i.type === 'dir');
    const mdFiles = items.filter(
      (i) => i.type === 'file' && i.name.endsWith('.md')
    );

    // Add dirs as subjects (recursively)
    for (const dir of dirs) {
      const children = await buildTree(dir.path);
      tree.push({
        name: dir.name,
        path: dir.path,
        type: 'subject',
        children,
      });
    }

    // Add md files as lessons
    for (const file of mdFiles) {
      tree.push({
        name: file.name.replace(/\.md$/i, ''),
        path: file.path,
        type: 'lesson',
      });
    }

    return tree;
  }

  /**
   * Fetch all markdown content and index for search.
   * Returns array of { path, name, content }.
   */
  async function fetchAllContent(tree) {
    const results = [];

    async function walk(nodes) {
      for (const node of nodes) {
        if (node.type === 'lesson') {
          try {
            const content = await fetchFile(node.path);
            results.push({
              path: node.path,
              name: node.name,
              content,
            });
          } catch {
            // Skip files that fail to load
          }
        }
        if (node.children) {
          await walk(node.children);
        }
      }
    }

    await walk(tree);
    return results;
  }

  return {
    fetchDir,
    fetchFile,
    buildTree,
    fetchAllContent,
  };
})();
