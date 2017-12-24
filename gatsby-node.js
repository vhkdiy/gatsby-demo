const path = require('path')

exports.createPages = ({ boundActionCreators }) => {
    const { createPage } = boundActionCreators
    const slugs = ['page1', 'page2']
    slugs.forEach(slug => {
        createPage({
            path: slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug
            }
        })
    })
}