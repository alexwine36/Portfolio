module.exports = {
  changelog: true,
  // npm: true,
  github: true,
  ci: false,
  repositoryUrl: 'https://github.com/alexwine36/Portfolio',
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  gitAssets: ['${PROJECT_DIR}/CHANGELOG.md', '${PROJECT_DIR}/package.json'],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      {
        type: 'chore',
        section: 'Others',
        hidden: false,
      },
      {
        type: 'revert',
        section: 'Reverts',
        hidden: false,
      },
      {
        type: 'feat',
        section: 'Features',
        hidden: false,
      },
      {
        type: 'fix',
        section: 'Bug Fixes',
        hidden: false,
      },
      {
        type: 'improvement',
        section: 'Feature Improvements',
        hidden: false,
      },
      {
        type: 'docs',
        section: 'Docs',
        hidden: false,
      },
      {
        type: 'style',
        section: 'Styling',
        hidden: false,
      },
      {
        type: 'refactor',
        section: 'Code Refactoring',
        hidden: false,
      },
      {
        type: 'perf',
        section: 'Performance Improvements',
        hidden: false,
      },
      {
        type: 'test',
        section: 'Tests',
        hidden: false,
      },
      {
        type: 'build',
        section: 'Build System',
        hidden: false,
      },
      {
        type: 'ci',
        section: 'CI',
        hidden: false,
      },
    ],
  },
};
