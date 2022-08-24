module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      staticDistDir: './apps/portfolio/public',
      maxAutodiscoverUrls: 10,
      numberOfRuns: 2,
      autodiscoverUrlBlocklist: [
        '/404.html',
        '_report.html',
        '/offline-plugin-app-shell-fallback/index.html',
        '/admin/index.html',
      ],
    },
  },
};
