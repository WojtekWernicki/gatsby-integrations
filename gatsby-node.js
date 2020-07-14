const path = require('path');
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allWordpressPost } = result.data;

  const postTemplate = path.resolve(`./src/pages/post.js`);
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        slug: edge.node.slug
      }
    })
  });
}
