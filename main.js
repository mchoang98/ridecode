/**
 * main.js — Application entry point.
 * Ties together API, Renderer, Search, and UI modules.
 */

(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);

  // State
  let docsTree = [];
  let isLoading = false;

  /**
   * Boot sequence
   */
  async function boot() {
    showLoading(true);

    try {
      // 1. Initialize marked.js
      Renderer.initMarked();

      // 2. Initialize UI event listeners
      UI.init(handleLessonClick, handleSearch);

      // 3. Fetch docs tree from GitHub
      docsTree = await API.buildTree();
      window._docsTree = docsTree; // Store for sidebar re-render

      // 4. Render sidebar
      UI.renderSidebar(docsTree);

      // 5. Fetch all content for search index (lazy, in background)
      lazyIndexContent();

      // 6. Load first available lesson or hash
      handleInitialRoute();

      // 7. Handle browser back/forward
      window.addEventListener('hashchange', handleHashChange);
    } catch (err) {
      console.error('Failed to boot docs site:', err);
      $('#content').innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-center p-8">
          <i class="fa fa-exclamation-triangle text-5xl text-amber-500 mb-4"></i>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Failed to Load Documentation</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-4 max-w-md">${err.message}</p>
          <p class="text-sm text-gray-400 dark:text-gray-500">Make sure the GitHub repo and docs path in <code class="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">config.js</code> are correct.</p>
        </div>
      `;
    } finally {
      showLoading(false);
    }
  }

  /**
   * Lazy-load all content for search after initial paint.
   */
  async function lazyIndexContent() {
    try {
      const content = await API.fetchAllContent(docsTree);
      Search.indexContent(content);
    } catch (err) {
      console.warn('Failed to index content for search:', err);
    }
  }

  /**
   * Handle initial route: check URL hash or load first lesson.
   */
  function handleInitialRoute() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      loadLesson(decodeURIComponent(hash));
    } else {
      const first = findFirstLesson(docsTree);
      if (first) loadLesson(first);
    }
  }

  /**
   * Handle browser back/forward navigation.
   */
  function handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      loadLesson(decodeURIComponent(hash));
    }
  }

  /**
   * Find the first lesson in the tree (for default view).
   */
  function findFirstLesson(nodes) {
    for (const node of nodes) {
      if (node.type === 'lesson') return node.path;
      if (node.children) {
        const found = findFirstLesson(node.children);
        if (found) return found;
      }
    }
    return null;
  }

  /**
   * Load a lesson by path.
   */
  async function loadLesson(path) {
    if (isLoading) return;
    isLoading = true;

    showLoading(true);

    try {
      // Fetch markdown
      const md = await API.fetchFile(path);

      // Render
      const html = Renderer.renderMarkdown(md);

      // Update content area
      const contentEl = $('#content');
      contentEl.innerHTML = `
        <div class="prose-wrapper">
          <div id="prose-content">${html}</div>
        </div>
      `;

      // Post-process: mermaid, copy buttons
      await Renderer.postProcess(contentEl);

      // Render TOC
      const tocHTML = Renderer.generateTOC();
      $('#toc-container').innerHTML = tocHTML;

      // Init scroll spy
      Renderer.initScrollSpy(contentEl);

      // Update UI
      UI.setActiveLesson(path);
      UI.updateBreadcrumb(path);

      // Update URL hash without triggering hashchange
      if (window.location.hash !== `#${path}`) {
        history.replaceState(null, '', `#${path}`);
      }

      // Scroll to top
      contentEl.scrollTop = 0;

      // Close mobile sidebar
      $('#sidebar').classList.add('-translate-x-full');
      $('#overlay').classList.add('hidden');
    } catch (err) {
      console.error('Failed to load lesson:', err);
      $('#content').innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-center p-8">
          <i class="fa fa-file-text-o text-5xl text-gray-300 dark:text-gray-600 mb-4"></i>
          <h2 class="text-lg font-semibold text-gray-600 dark:text-gray-400">Lesson Not Found</h2>
          <p class="text-sm text-gray-400 dark:text-gray-500 mt-2">${path}</p>
        </div>
      `;
    } finally {
      isLoading = false;
      showLoading(false);
    }
  }

  /**
   * Handler for lesson clicks from sidebar.
   */
  function handleLessonClick(path) {
    loadLesson(path);
  }

  /**
   * Handler for search input.
   */
  function handleSearch(query) {
    const results = Search.search(query);
    if (query.trim()) {
      UI.renderSearchResults(results, (path) => loadLesson(path));
    } else {
      $('#search-results').classList.add('hidden');
    }
  }

  /**
   * Show/hide the loading overlay.
   */
  function showLoading(show) {
    const loader = $('#loading-overlay');
    if (show) {
      loader.classList.remove('hidden');
      loader.classList.add('flex');
    } else {
      loader.classList.add('hidden');
      loader.classList.remove('flex');
    }
  }

  // Start the app
  document.addEventListener('DOMContentLoaded', boot);
})();
