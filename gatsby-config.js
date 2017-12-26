module.exports = {
    siteMetadata: {
        title: `PostCode`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`
    ],
}