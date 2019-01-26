require('dotenv').config({
  path: `.env${process.env.NODE_ENV}`
});

console.log(process.env.GOOGLE_ANALYTICS_SECRET)

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
        trackingId: process.env.GOOGLE_ANALYTICS_SECRET,
        head: true, 
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `pub-2430408030851998`
      }
    }
  ],
  pathPrefix: "/Blog"
}
