// const esModules = ["@types/react__router", "ngx-bootstrap"].join("|")
/* eslint-disable */

// const { compilerOptions } = require('./tsconfig.json');
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const paths = pathsToModuleNameMapper(compilerOptions.paths, {
//   prefix: '<rootDir>/',
// });

export default {
  displayName: 'portfolio',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': '<rootDir>/jest-preprocess.js',
  },

  // transformIgnorePatterns: [`../../node_modules/(?!${esModules})`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // globals: {
  //   "babel-jest": {
  //     "babel-config": "babelrc.test.js",
  //   },
  // },
  moduleNameMapper: {
    // ...paths,
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-plugin-utils/(.*)$': [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ],
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby|gatsby-script|gatsby-link|gatsby-plugin-mdx|reach__router)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  // testURL: `http://localhost`,
  // setupFiles: [`<rootDir>/loadershim.js`],
  coverageDirectory: '../../coverage/apps/portfolio',
};
