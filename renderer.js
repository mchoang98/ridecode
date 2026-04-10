/**
 * renderer.js — Markdown rendering, Mermaid diagrams, code blocks, TOC generation.
 */

const Renderer = (() => {
  let currentHeadings = [];

  /**
   * Configure marked.js
   */
  function initMarked() {
    marked.setOptions({
      gfm: true,
      breaks: true,
      highlight(code, lang) {
        // We'll let CSS handle code styling; mermaid blocks are special-cased later
        return code;
      },
    });

    // Custom renderer to add IDs to headings for scroll-spy & TOC
    const renderer = new marked.Renderer();
    renderer.heading = (text, level, raw) => {
      const id = raw
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return `<h${level} id="${id}">${text}</h${level}>`;
    };
    marked.setOptions({ renderer });
  }

  /**
   * Render markdown string to HTML.
   */
  function renderMarkdown(md) {
    currentHeadings = [];
    const html = marked.parse(md);

    // Extract headings for TOC
    const temp = document.createElement('div');
    temp.innerHTML = html;
    temp.querySelectorAll('h1, h2, h3, h4').forEach((h) => {
      currentHeadings.push({
        id: h.id,
        text: h.textContent,
        level: parseInt(h.tagName[1], 10),
      });
    });

    return html;
  }

  /**
   * After inserting rendered markdown into the DOM, post-process:
   *  - Render Mermaid diagrams
   *  - Add copy buttons to code blocks
   */
  async function postProcess(container) {
    await renderMermaid(container);
    addCopyButtons(container);
  }

  /**
   * Find ```mermaid blocks and render them with mermaid.js
   */
  async function renderMermaid(container) {
    const codeBlocks = container.querySelectorAll('pre code.language-mermaid');
    if (codeBlocks.length === 0) return;

    for (const block of codeBlocks) {
      const pre = block.parentElement;
      const graphDefinition = block.textContent;
      const wrapper = document.createElement('div');
      wrapper.className = 'mermaid';
      wrapper.textContent = graphDefinition;
      pre.replaceWith(wrapper);
    }

    try {
      await mermaid.run({ nodes: container.querySelectorAll('.mermaid') });
    } catch (err) {
      console.warn('Mermaid rendering error:', err);
    }
  }

  /**
   * Add a "Copy" button to every <pre><code> block.
   */
  function addCopyButtons(container) {
    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach((code) => {
      const pre = code.parentElement;
      if (pre.querySelector('.copy-btn')) return; // already added

      const btn = document.createElement('button');
      btn.className =
        'copy-btn absolute top-2 right-2 p-1.5 rounded text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 bg-gray-700 dark:bg-gray-600 text-gray-300 hover:text-white hover:bg-gray-600';
      btn.innerHTML =
        '<i class="fa fa-clipboard" aria-hidden="true"></i> Copy';
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          btn.innerHTML =
            '<i class="fa fa-check" aria-hidden="true"></i> Copied!';
          setTimeout(() => {
            btn.innerHTML =
              '<i class="fa fa-clipboard" aria-hidden="true"></i> Copy';
          }, 2000);
        } catch {
          btn.innerHTML =
            '<i class="fa fa-times" aria-hidden="true"></i> Failed';
        }
      });

      pre.classList.add('relative', 'group');
      pre.appendChild(btn);
    });
  }

  /**
   * Generate Table of Contents HTML from currentHeadings.
   */
  function generateTOC() {
    if (currentHeadings.length === 0) return '';

    let html = '<nav id="toc" class="toc"><ul>';
    let prevLevel = 1;

    currentHeadings.forEach((h) => {
      while (h.level > prevLevel) {
        html += '<ul>';
        prevLevel++;
      }
      while (h.level < prevLevel) {
        html += '</ul>';
        prevLevel--;
      }
      html += `<li><a href="#${h.id}" class="toc-link" data-id="${h.id}">${h.text}</a></li>`;
    });

    while (prevLevel > 1) {
      html += '</ul>';
      prevLevel--;
    }
    html += '</ul></nav>';
    return html;
  }

  /**
   * Scroll spy: highlight the TOC link corresponding to the heading currently in view.
   */
  function initScrollSpy(contentEl) {
    const headings = contentEl.querySelectorAll('h1, h2, h3, h4');
    const tocLinks = document.querySelectorAll('.toc-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach((link) => {
              link.classList.toggle(
                'toc-active',
                link.dataset.id === id
              );
            });
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    headings.forEach((h) => observer.observe(h));
  }

  return {
    initMarked,
    renderMarkdown,
    postProcess,
    generateTOC,
    initScrollSpy,
  };
})();
