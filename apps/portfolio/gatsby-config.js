module.exports = {
  siteMetadata: {
    title: `portfolio`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-svgr",
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
    `gatsby-plugin-sharp`,
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
    "gatsby-plugin-mui-emotion",
    // `gatsby-transformer-remark`,
    "gatsby-plugin-mdx-source-name",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/content/work`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
