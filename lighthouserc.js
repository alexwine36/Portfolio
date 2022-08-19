module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      staticDistDir: './apps/portfolio/public',
      maxAutodiscoverUrls: 10,
      numberOfRuns: 2,
    },
  },
};
