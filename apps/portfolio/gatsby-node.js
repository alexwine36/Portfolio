/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query CreatePage {
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      projects: allMdx(filter: { fields: { source: { eq: "projects" } } }) {
        nodes {
          slug
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const projects = result.data.projects.nodes;
  const projectTemplate = path.resolve(
    'src/components/pages/projects/index.tsx'
  );
  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: projectTemplate,
      context: {
        slug: project.slug,
      },
    });
  });
  const tags = result.data.tags.group;
  const tagTemplate = path.resolve('src/components/pages/tags/index.tsx');

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
