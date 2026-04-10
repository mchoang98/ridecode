/**
 * search.js — Full-text search across all markdown content using Fuse.js.
 */

const Search = (() => {
  let fuse = null;
  let allContent = []; // { path, name, content }

  /**
   * Initialize Fuse.js index from fetched content.
   */
  function indexContent(contentArray) {
    allContent = contentArray;
    fuse = new Fuse(contentArray, {
      keys: ['name', 'content'],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }

  /**
   * Search and return results array.
   * Each result: { path, name, excerpt, matches[] }
   */
  function search(query) {
    if (!fuse || !query.trim()) return [];

    const raw = fuse.search(query);
    return raw.slice(0, 15).map((item) => {
      const match = item.matches?.[0];
      let excerpt = '';
      if (match) {
        const snippet = getSnippet(item.item.content, match.indices, query);
        excerpt = highlight(snippet, query);
      }
      return {
        path: item.item.path,
        name: item.item.name,
        excerpt,
        fullContent: item.item.content,
      };
    });
  }

  /**
   * Extract a short snippet around the first match.
   */
  function getSnippet(content, indices, query) {
    if (!indices || indices.length === 0) {
      return content.substring(0, 200);
    }
    const [start, end] = indices[0];
    const snippetLen = 150;
    const snippetStart = Math.max(0, start - snippetLen);
    const snippetEnd = Math.min(content.length, end + snippetLen);
    let snippet = content.substring(snippetStart, snippetEnd).trim();
    if (snippetStart > 0) snippet = '…' + snippet;
    if (snippetEnd < content.length) snippet += '…';
    return snippet;
  }

  /**
   * Highlight matched keywords in text.
   */
  function highlight(text, query) {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(
      regex,
      '<mark class="search-highlight">$1</mark>'
    );
  }

  return {
    indexContent,
    search,
  };
})();
