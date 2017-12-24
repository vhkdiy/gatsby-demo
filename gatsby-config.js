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
        `gatsby-transformer-remark`,
    ]
}