/**
 * ui.js — Sidebar, theme toggle, breadcrumbs, mobile sidebar, search UI.
 */

const UI = (() => {
  let currentLessonPath = null;
  let expandedSubjects = new Set();

  // DOM refs
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /**
   * Initialize all UI event listeners.
   */
  function init(onLessonClick, onSearch) {
    // Theme toggle
    $('#theme-toggle').addEventListener('click', toggleTheme);
    initTheme();

    // Mobile sidebar toggle
    $('#mobile-menu-btn').addEventListener('click', () => {
      $('#sidebar').classList.toggle('-translate-x-full');
      $('#overlay').classList.toggle('hidden');
    });
    $('#overlay').addEventListener('click', () => {
      $('#sidebar').classList.add('-translate-x-full');
      $('#overlay').classList.add('hidden');
    });

    // Search input
    const searchInput = $('#search-input');
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        onSearch(e.target.value);
      }, 150);
    });

    // Close search results on Escape
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        $('#search-results').classList.add('hidden');
        searchInput.value = '';
      }
    });

    // Store lesson click handler
    window._onLessonClick = onLessonClick;
  }

  /**
   * Render the sidebar from the docs tree.
   */
  function renderSidebar(tree) {
    const container = $('#sidebar-nav');
    container.innerHTML = buildSidebarHTML(tree);
    attachSidebarEvents(container);
  }

  function buildSidebarHTML(nodes, depth = 0) {
    if (!nodes || nodes.length === 0) return '';

    let html = '<ul class="sidebar-list">';

    nodes.forEach((node) => {
      if (node.type === 'subject' || node.children) {
        const isExpanded = expandedSubjects.has(node.path);
        html += `
          <li class="sidebar-item">
            <div class="sidebar-subject flex items-center justify-between px-3 py-2 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                 data-path="${node.path}">
              <div class="flex items-center gap-2 truncate">
                <i class="fa fa-folder${isExpanded ? '-open' : ''} text-amber-500 dark:text-amber-400 text-sm transition-all subject-icon" data-path="${node.path}"></i>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">${node.name}</span>
              </div>
              <i class="fa fa-chevron-down text-xs text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-0' : '-rotate-90'}" data-chevron="${node.path}"></i>
            </div>
            ${isExpanded ? `<div class="sidebar-children ml-4 mt-1 border-l border-gray-200 dark:border-gray-700 pl-2">${buildSidebarHTML(node.children, depth + 1)}</div>` : ''}
          </li>`;
      } else if (node.type === 'lesson') {
        const isActive = currentLessonPath === node.path;
        html += `
          <li>
            <a class="sidebar-lesson block px-3 py-1.5 text-sm rounded-md transition-colors duration-150 truncate ${
              isActive
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200'
            }"
               data-path="${node.path}"
               href="#${node.path}"
               onclick="event.preventDefault(); window._onLessonClick('${node.path}');">
              <i class="fa fa-file-text-o mr-1.5 opacity-60"></i>${node.name}
            </a>
          </li>`;
      } else {
        // Fallback: node with children but no explicit type
        const isExpanded = expandedSubjects.has(node.path);
        html += `
          <li class="sidebar-item">
            <div class="sidebar-subject flex items-center justify-between px-3 py-2 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                 data-path="${node.path}">
              <div class="flex items-center gap-2 truncate">
                <i class="fa fa-folder${isExpanded ? '-open' : ''} text-amber-500 dark:text-amber-400 text-sm transition-all subject-icon" data-path="${node.path}"></i>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">${node.name}</span>
              </div>
              <i class="fa fa-chevron-down text-xs text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-0' : '-rotate-90'}" data-chevron="${node.path}"></i>
            </div>
            ${isExpanded ? `<div class="sidebar-children ml-4 mt-1 border-l border-gray-200 dark:border-gray-700 pl-2">${buildSidebarHTML(node.children, depth + 1)}</div>` : ''}
          </li>`;
      }
    });

    html += '</ul>';
    return html;
  }

  function attachSidebarEvents(container) {
    // Subject expand/collapse
    container.querySelectorAll('.sidebar-subject').forEach((el) => {
      el.addEventListener('click', () => {
        const path = el.dataset.path;
        if (expandedSubjects.has(path)) {
          expandedSubjects.delete(path);
        } else {
          expandedSubjects.add(path);
        }
        // Re-render sidebar from stored tree
        if (window._docsTree) {
          renderSidebar(window._docsTree);
        }
      });
    });
  }

  /**
   * Mark a lesson as active in the sidebar.
   */
  function setActiveLesson(path) {
    currentLessonPath = path;
    $$('.sidebar-lesson').forEach((el) => {
      const isActive = el.dataset.path === path;
      el.classList.toggle(
        'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium',
        isActive
      );
      el.classList.toggle(
        'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-200',
        !isActive
      );
    });
  }

  /**
   * Update breadcrumb display.
   */
  function updateBreadcrumb(path) {
    const parts = path.split('/');
    const bc = $('#breadcrumb');
    bc.innerHTML = parts
      .map((p, i) => {
        const isLast = i === parts.length - 1;
        const label = p.replace(/\.md$/i, '');
        if (isLast) {
          return `<span class="text-gray-500 dark:text-gray-400">${label}</span>`;
        }
        return `<span class="text-gray-400 dark:text-gray-500">${label}</span> <span class="text-gray-300 dark:text-gray-600 mx-1">/</span>`;
      })
      .join('');
  }

  /**
   * Render search results dropdown.
   */
  function renderSearchResults(results, onResultClick) {
    const container = $('#search-results');
    if (results.length === 0) {
      container.innerHTML =
        '<div class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No results found</div>';
      container.classList.remove('hidden');
      return;
    }

    container.innerHTML = results
      .map(
        (r) => `
      <a href="#${r.path}"
         class="search-result-item block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
         data-path="${r.path}">
        <div class="text-sm font-medium text-gray-800 dark:text-gray-200">${r.name}</div>
        ${r.excerpt ? `<div class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${r.excerpt}</div>` : ''}
      </a>`
      )
      .join('');

    container.querySelectorAll('.search-result-item').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        onResultClick(el.dataset.path);
        container.classList.add('hidden');
        $('#search-input').value = '';
      });
    });

    container.classList.remove('hidden');
  }

  /**
   * Dark/Light theme
   */
  function initTheme() {
    const stored = localStorage.getItem('docs-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    updateThemeIcon(isDark);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('docs-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
  }

  function updateThemeIcon(isDark) {
    const icon = $('#theme-toggle i');
    icon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
  }

  return {
    init,
    renderSidebar,
    setActiveLesson,
    updateBreadcrumb,
    renderSearchResults,
  };
})();
