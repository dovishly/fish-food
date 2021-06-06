module.exports = {
  siteMetadata: {
    title: "fish-food",
  },
  plugins: ["gatsby-plugin-sass", `gatsby-plugin-image`,
  `gatsby-plugin-sharp`, `gatsby-transformer-sharp`],
};

const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}