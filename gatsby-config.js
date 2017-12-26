module.exports = {
    siteMetadata: {
        title: `PostCode`,
        description: `Rudimentary 'Today I Learned' log.`,
        siteUrl: `https://nicholaspretorius.github.io`

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
        {
            resolve: `gatsby-plugin-feed`
        },
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`
    ],
}