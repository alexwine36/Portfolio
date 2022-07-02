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
          frontmatter {
            tags
            series
          }
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
        tags: project.frontmatter.tags,
        series: project.frontmatter.series,
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

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const date = new Date(node.frontmatter.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const year_month = `${year}-${month}`;
    const day = date.getDate();

    createNodeField({ node, name: 'year', value: year });
    createNodeField({ node, name: 'month', value: month });
    createNodeField({ node, name: 'year-month', value: year_month });
    createNodeField({ node, name: 'day', value: day });
  }
};
