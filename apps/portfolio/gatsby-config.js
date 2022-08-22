module.exports = {
  graphqlTypegen: true,
  pathPrefix: '/Portfolio',
  siteMetadata: {
    title: `Portfolio`,
    description: `Portfolio for developer and nerd, Alex Wine. `,
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
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        mode: 'async',
        preconnect: ['https://fonts.gstatic.com'],
        web: [
          {
            name: 'Material Icons',
            file: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          },
          {
            name: 'Amiri',
            file: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700',
          },
          {
            name: 'Libre Franklin',
            file: 'https://fonts.googleapis.com/css2?family=Libre+Franklin',
          },
          {
            name: 'Open Sans',
            file: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;800',
          },
        ],
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
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000F08`,
        display: `minimal-ui`,
        icon: `src/images/AW-Portfolio.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [
          '/',
          '/skills/',
          '/tags/*',
          '/projects/*',
          '/work',
          '/projects',
        ],
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-MFQNT70960', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        // plugins: [
        //   `gatsby-remark-images`,
        //   `gatsby-remark-images-medium-zoom`, // Important!
        // ],
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',
          {
            resolve: require.resolve('./plugins/gatsby-remark-mermaider'),
            options: {
              theme: 'dark',
              language: 'mermaid',
              viewport: {
                width: 1000,
                height: 1000,
              },
              mermaidOptions: {
                themeVariables: {
                  fontFamily: `Libre Franklin, sans-serif`,
                  fontSize: '16px',
                  themeCSS: `
                    :root{--mermaid-font-family:"Libre Franklin",sans-serif;}
                    .nodeLabel .label {font-size: 14px;}
                  `,
                  // darkMode: true,
                },
              },
              // themeCSS: `.nodeLabel {line-height: 1}`,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 800,
              // wrapperStyle: `
              //   max-width: unset;
              // `,
            },
          },

          // {
          //   resolve: require.resolve('./plugins/gatsby-remark-grapher'),
          //   // 'gatsby-remark-grapher',
          //   options: {
          //     language: 'mermaid',
          //     theme: 'dark',
          //   },
          // },
          {
            resolve: 'gatsby-remark-static-images',
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
          // {
          //   resolve: 'gatsby-remark-images-medium-zoom',
          //   options: {
          //     background: '#000F08',
          //   },
          // },
          {
            resolve: 'gatsby-remark-smartypants',
          },
          {
            resolve: 'gatsby-remark-external-links',
          },
          {
            resolve: 'gatsby-remark-acronyms',
            options: {
              acronyms: {
                CRM: 'Customer Relationship Management',
                ERP: 'Enterprise Resource Planning',
                'CI/CD': 'Continuous Integration and Continuous Deployment',
                CAD: 'Computer Aided Design',
                ORM: 'Object Relational Mapping',
                AWS: 'Amazon Web Services',
                MUI: 'Material UI',
                MDAST: 'Markdown Abstract Syntax Tree',
                WASM: 'WebAssembly',
              },
            },
          },
          {
            resolve: 'gatsby-remark-numbered-footnotes',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://alex-wine-portfolio.netlify.app/',
          site_name: 'Alex Wine | Portfolio',
        },
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-pdf-gen',
    'gatsby-generate-og',
  ],
};
