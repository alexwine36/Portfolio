/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query CreatePage {
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      projects: allMdx(
        filter: {
          fields: { source: { eq: "projects" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          slug
          frontmatter {
            tags
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

    // let summary = node.excerpt;
    // const toc = node.tableOfContents;
    // toc?.items.forEach((item) => {
    //   summary = summary.replace(item.title, '');
    //   summary = summary.trim();
    //   summary = summary.replace('  ', ' ');
    // });
    // console.log('EXCERPT', summary);
    // console.log(JSON.stringify(node, undefined, 2));
    createNodeField({ node, name: 'year', value: year });
    createNodeField({ node, name: 'month', value: month });
    createNodeField({ node, name: 'year-month', value: year_month });
    createNodeField({ node, name: 'day', value: day });
    // createNodeField({ node, name: 'summary', value: summary });
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        fs: 'empty',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
        process: require.resolve('process/browser'),
        zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
        buffer: require.resolve('buffer'),
        asset: require.resolve('assert'),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),

      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
  });
};
