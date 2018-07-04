module.exports = {
  siteMetadata: {
    title: 'Ryan A. Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-121847358-1',
        head: false, 
        respectDNT: true
      }
    }
  ],
  pathPrefix: "/blog"
}
