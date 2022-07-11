const babelOptions = {
  presets: [
    [
      '@nrwl/react/babel',
      {
        runtime: 'automatic',
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],

    '@emotion/babel-preset-css-prop',

    `babel-preset-gatsby`,
    '@babel/preset-typescript',
    // ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    // '@emotion',
    'macros',
    '@babel/plugin-transform-runtime',
  ],
};

module.exports = require(`babel-jest`).default.createTransformer(babelOptions);
