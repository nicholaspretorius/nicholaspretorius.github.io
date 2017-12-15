const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `).then(result => {
            //console.log(JSON.stringify(result, null, 4))
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/post.js`),
                    context: {
                        slug: node.fields.slug
                    },
                })
            })
            resolve()
        })
    })
}