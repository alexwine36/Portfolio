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
        entryPoints: ['libs/pdf-generator/src/index.ts'],
        tsconfig: 'libs/pdf-generator/tsconfig.json',
        out: 'pdf-generator',
        id: 'pdf-generator',
        sidebar: {
          categoryLabel: '@portfolio/pdf-generator',
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
          position: 20,
          fullNames: true,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['libs/theme/src/index.ts'],
        tsconfig: 'libs/theme/tsconfig.json',
        out: 'theme',
        id: 'theme',
        sidebar: {
          categoryLabel: '@portfolio/theme',
          position: 0,
          fullNames: true,
        },
      },
    ],

    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['libs/markdown-to-pdf/src/index.ts'],
        tsconfig: 'libs/markdown-to-pdf/tsconfig.json',
        out: 'markdown-to-pdf',
        id: 'markdown-to-pdf',
        sidebar: {
          categoryLabel: '@portfolio/markdown-to-pdf',
          position: 0,
          fullNames: true,
        },
      },
    ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     entryPoints: ['libs/generate-badges/src/index.ts'],
    //     tsconfig: 'libs/generate-badges/tsconfig.json',
    //     out: 'generate-badges',
    //     id: 'generate-badges',
    //     sidebar: {
    //       categoryLabel: '@portfolio/generate-badges',
    //       position: 0,
    //       fullNames: true,
    //     },
    //   },
    // ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     entryPoints: ['apps/portfolio/src'],
    //     entryPointStrategy: 'expand',
    //     tsconfig: 'apps/portfolio/tsconfig.json',
    //     out: 'portfolio',
    //     id: 'portfolio',
    //     sidebar: {
    //       categoryLabel: 'portfolio',
    //       position: 0,
    //       fullNames: true,
    //     },
    //   },
    // ],
  ],
  title: 'Portfolio Documentation',
  tagline: 'Displaying my resume and portfolio with ease',
  url: 'https://alexwine36.github.io',
  baseUrl: '/Portfolio/',
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
          editUrl:
            'https://github.com/alexwine36/Portfolio/tree/main/apps/docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/alexwine36/Portfolio/edit/main/apps/docs/blog/',
        // },
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
          // { to: '/blog', label: 'Blog', position: 'left' },
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
                to: 'https://alex-wine-portfolio.netlify.app/',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
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
