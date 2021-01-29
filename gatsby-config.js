module.exports = {
  siteMetadata: {
    title: `Southport Technology Group`,
    description: `We build products that grow your business`,
    author: `Nicholas Evans`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `southport-technology-group`,
        short_name: `stg`,
        start_url: `/`,
        icon: `src/images/stg.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
