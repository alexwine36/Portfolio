// const esModules = ["@types/react__router", "ngx-bootstrap"].join("|")
/* eslint-disable */
export default {
  displayName: 'portfolio',
  preset: '../../jest.preset.js',
  moduleNameMapper: {
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-plugin-utils/(.*)$': [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ], // Workaround for https://github.com/facebook/jest/issues/9771
  },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': '<rootDir>/jest-preprocess.js',
  },
  transformIgnorePatterns: [`../../node_modules/(?!(gatsby)/)`],
  // transformIgnorePatterns: [`../../node_modules/(?!${esModules})`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // globals: {
  //   "babel-jest": {
  //     "babel-config": "babelrc.test.js",
  //   },
  // },
  coverageDirectory: '../../coverage/apps/portfolio',
};
