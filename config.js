/**
 * Global configuration for the documentation site.
 * Change GITHUB_OWNER, GITHUB_REPO, and GITHUB_BRANCH to match your repo.
 * DOCS_BASE_PATH is the path inside the repo where /docs lives.
 */
window.DOCS_CONFIG = {
  github: {
    owner: 'your-username',      // Replace with GitHub username/org
    repo: 'your-repo',           // Replace with repo name
    branch: 'main',              // Branch to fetch from
    docsPath: 'docs',            // Folder inside repo containing docs
  },
  // Cache TTL in milliseconds (5 minutes default)
  cacheTTL: 5 * 60 * 1000,
};
