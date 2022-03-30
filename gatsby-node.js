exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  console.log(actions)
  console.log("graphql")
  console.log(graphql)

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const projectTemplate = require.resolve(`./src/pages/i/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug,
              tags,
              glossary
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    console.log(result)


    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          tags: node.frontmatter.tags,
          glossary: node.frontmatter.glossary,
        },
      })
    })
  })
}
