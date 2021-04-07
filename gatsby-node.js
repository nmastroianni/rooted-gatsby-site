const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("src/templates/blog-post-template.js")
  const res = await graphql(
    `
      {
        allContentfulBlogPost(
          filter: { published: { eq: true } }
          sort: { fields: date, order: DESC }
        ) {
          nodes {
            slug
          }
        }
      }
    `
  )

  res.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
