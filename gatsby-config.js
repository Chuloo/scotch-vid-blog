module.exports = {
    siteMetadata: {
        title: `Scotchy-Vid-Blog`,
      },
    plugins:[
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options:{
                name: `posts`,
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options:{
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
            resolve: `gatsby-mdx`,
            options: {
              defaultLayouts: {
                posts: require.resolve("./src/components/layout.js"),
                default: require.resolve("./src/components/layout.js")
              }
            }
        },
    ]
}