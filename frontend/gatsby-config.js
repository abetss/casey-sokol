const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log('activeEnv', JSON.stringify(activeEnv, null, 2));

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Casey Sokol`,
    subTitle: "",
    description: `Casey Sokol Teaching materials (to add more details)`,
    keywords: [`casey sokol`, `piano`, 'improvisation'],
    author: `Abtin Ghods`,
    siteUrl: `https://changethis.later`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: ["exercises", "tags"],
        singleTypes: [`home-page`, 'about-page', 'bio', 'philosophy'],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: false,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Aclonica`,
            variants: [`400`, `700`],
          },
          {
            family: `Merienda`,
            variants: [`400`, `700`],
          },
          {
            family: `IM Fell Double Pica`,
            variants: [`400`, `700`],
          },
          {
            family: `Spectral SC`,
            variants: [`400`, `700`],
          },
          {
            family: `Libre Baskerville`,
            variants: [`400`, `700`],
          },
          {
            family: `Simonetta`,
            variants: [`400`, `700`],
          }
        ],
      },
    },
  ],
}
