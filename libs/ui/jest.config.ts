/* eslint-disable */

export default {
  displayName: 'ui',
  preset: '../../jest.preset.js',
  transform: {
    // '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.[tj]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    // ...paths,
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '^gatsby-plugin-utils/(.*)$': [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ],
  },
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`,
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui',
  testEnvironment: './custom-test-env.js',
};
