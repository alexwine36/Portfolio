// const esModules = ["@types/react__router", "ngx-bootstrap"].join("|")
/* eslint-disable */
export default {
  displayName: "portfolio",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": "babel-jest",
  },

  // transformIgnorePatterns: [`../../node_modules/(?!${esModules})`],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  // globals: {
  //   "babel-jest": {
  //     "babel-config": "babelrc.test.js",
  //   },
  // },
  coverageDirectory: "../../coverage/apps/portfolio",
}
