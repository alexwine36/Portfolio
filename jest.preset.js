const nxPreset = require('@nrwl/jest/preset').default;
// const esModules = ['gatsby', 'gatsby-link', 'gatsby-script'].join('|');
module.exports = {
  ...nxPreset,
  // transformIgnorePatterns: [
  //   `<rootDir>/../../libs/(?!hex-rgb/)`,
  //   `<rootDir>/../../node_modules/(?!(${esModules})/)`
  // ],
  // testEnvironment: `jsdom`,
};
