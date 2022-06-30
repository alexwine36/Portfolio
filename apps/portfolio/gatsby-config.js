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
        name: `portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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
      resolve: `gatsby-transformer-video`,
      options: {
        /**
         * Alternative directory for the video cache
         * Default: '.cache-video'
         */
        cacheDirectory: resolve('.cache', '.cache-video'),

        /**
         * Alternative directory for the ffmpeg binaries
         * Default: resolve(`.bin`, `gatsby-transformer-video`)
         */
        cacheDirectoryBin: resolve('.cache', '.cache-video-bin'),

        /**
         * Set if FFMPEG & FFPROBE should be downloaded if they are not found locally
         *
         * Downloaded binaries are stored in `.bin/gatsby-transformer-video/`
         *
         * Default: true
         */
        // downloadBinaries: false,

        /**
         * Pass your own FFMPEG && FFPROBE binaries
         *
         * Assumes you store your binaries in the following pattern:
         * ./bin/darwin/ffmpeg
         * ./bin/darwin/ffprobe
         * ./bin/linux/ffmpeg
         * ./bin/linux/ffprobe
         * ...
         *
         * Default: null
         */
        // ffmpegPath: resolve(__dirname, 'bin', platform(), 'ffmpeg'),
        // ffprobePath: resolve(__dirname, 'bin', platform(), 'ffprobe'),

        /**
         * Define custom profiles to convert videos with full fluent-ffmpeg access
         *
         * Learn more: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
         */
        // profiles: {
        //   sepia: {
        //     extension: `mp4`,
        //     converter: function({ ffmpegSession, videoStreamMetadata }) {
        //       // Example:
        //       // https://github.com/hashbite/gatsby-transformer-video/blob/main/packages/example/gatsby-config.js#L24-L55
        //     },
        //   },
        // },
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
