const { resolve } = require(`path`);
module.exports = {
  pathPrefix: '/Portfolio',
  siteMetadata: {
    title: `portfolio`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    { resolve: `gatsby-plugin-sharp` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Wine | Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#000F08`,
        theme_color: `#1c9bdb`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    'gatsby-plugin-mui-emotion',
    // `gatsby-transformer-remark`,
    'gatsby-plugin-mdx-source-name',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/content/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `education`,
        path: `${__dirname}/content/education`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/content/skills`,
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],

        gatsbyRemarkPlugins: [
          'gatsby-remark-heading-slug',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-graph',
            options: {
              language: 'mermaid',
              theme: 'dark',
            },
          },

          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        // fileName: `./gatsby-graphql.ts`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-transition-link',
  ],
};
