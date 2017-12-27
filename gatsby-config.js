module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/data`,
              name: "markdown-pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-prismjs`
                ] 
            }
        },
        `gatsby-transformer-json`
    ]
}