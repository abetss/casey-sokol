const crypto = require("crypto")
const path = require(`path`)

const createMdxNode = (contentType, contentProperty, { node, actions, createNodeId }) => {
  if (node.internal.type === contentType) {
    const newContentType = `${contentType}${contentProperty}`
    const newNode = {
      id: createNodeId(`${newContentType}-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node[contentProperty] || " ",
        type: newContentType,
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node[contentProperty] || " ")
          .digest("hex"),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }
}

// module.exports.onCreateNode = async onCreateNodeProps => {
//   createMdxNode("StrapiArticle", "Footer", onCreateNodeProps)
//   createMdxNode("StrapiArticle", "Content", onCreateNodeProps)
//   createMdxNode("StrapiArticle", "Summary", onCreateNodeProps)
// }

// const createArticlePages = async (actions, graphql) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     {
//       allStrapiArticle {
//         edges {
//           node {
//             strapiId
//             Slug
//           }
//         }
//       }
//     }
//   `)
//   result.data.allStrapiArticle.edges.forEach(({ node }) => {
//     createPage({
//       path: `/articles/${node.Slug}`,
//       component: path.resolve(`src/templates/article.js`),
//       context: {
//         id: node.strapiId,
//       },
//     })
//   })
// }


// exports.createPages = async ({ actions, graphql }) => {
//   createArticlePages(actions, graphql)
// }
