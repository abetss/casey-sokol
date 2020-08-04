const crypto = require("crypto")
const path = require(`path`)

const createMdxNode = (contentType, contentProperty, { node, actions, createNodeId }) => {
  if (node.internal.type === contentType) {
    // console.log('^^^ node', node);
    const newContentType = `${contentType}${contentProperty}`

    const content = node[contentProperty][0] || " "
    console.log('^^^ content', content);

    const newNode = {
      id: createNodeId(`${newContentType}-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content,
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

const createExercisePages = async (actions, graphql) => {
  const { createPage } = actions

  // const result2 = await graphql(`
  //   {
  //     allStrapiArticle {
  //       edges {
  //         node {
  //           strapiId
  //           Slug
  //         }
  //       }
  //     }
  //   }
  // `)
  const result = await graphql(`
    {
      allStrapiExercises {
        nodes {
          Slug
          strapiId
        }
      }
    }
  `)

  result.data.allStrapiExercises.nodes.forEach((exercise) => {

    createPage({
      path: `/exercises/${exercise.Slug}`,
      component: path.resolve(`src/templates/exercise.js`),
      context: {
        strapiId: exercise.strapiId,
      },
    })
  })
}

module.exports.onCreateNode = async onCreateNodeProps => {
  // createMdxNode("StrapiArticle", "Footer", onCreateNodeProps)
  // createMdxNode("StrapiExercises", "Contents", onCreateNodeProps)
  // createMdxNode("StrapiArticle", "Summary", onCreateNodeProps)
}

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

exports.createPages = async ({ actions, graphql }) => {
  createExercisePages(actions, graphql)
}
