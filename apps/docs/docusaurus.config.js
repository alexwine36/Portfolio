// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['libs/ui/src/index.ts'],
        tsconfig: 'libs/ui/tsconfig.json',
        out: 'ui',
        id: 'ui',
        sidebar: {
          categoryLabel: '@portfolio/ui',
          position: 0,
          fullNames: true,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['libs/hex-rgb/src/index.ts'],
        tsconfig: 'libs/hex-rgb/tsconfig.json',
        out: 'hex-rgb',
        id: 'hex-rgb',
        sidebar: {
          categoryLabel: '@portfolio/hex-rgb',
          position: 0,
          fullNames: true,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['libs/resume-hooks/src/index.ts'],
        tsconfig: 'libs/resume-hooks/tsconfig.json',
        out: 'resume-hooks',
        id: 'resume-hooks',
        sidebar: {
          categoryLabel: '@portfolio/resume-hooks',
          position: 0,
          fullNames: true,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['libs/resume-hooks/src/index.ts'],
        tsconfig: 'libs/resume-hooks/tsconfig.json',
        out: 'theme',
        id: 'theme',
        sidebar: {
          categoryLabel: '@portfolio/theme',
          position: 0,
          fullNames: true,
        },
      },
    ],
  ],
  title: 'Portfolio Documentation',
  tagline: 'Displaying my resume and portfolio with ease',
  url: 'https://alexwine36.github.io',
  baseUrl: '/Portfolio/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/alexwine36/Portfolio/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/alexwine36/Portfolio/edit/main/apps/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Portfolio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/alexwine36/Portfolio/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                to: 'https://alexwine36.github.io/Portfolio/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/alexwine36/Portfolio/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Portfolio, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
