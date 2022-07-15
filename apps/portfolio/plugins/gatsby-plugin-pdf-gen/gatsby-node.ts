import fs from 'fs';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { parseResumeData } from '../../src/utilities/pdf-constants';
export const createPages: GatsbyNode['createPages'] = async ({
  // actions,
  graphql,
  reporter,
}) => {
  reporter.info('Running Generate PDF');
  // actions.
  const result = await graphql<Queries.ResumeGenerateQuery>(`
    query ResumeGenerate {
      ...ResumeResult
    }

    fragment ResumeResult on Query {
      work: allMdx(
        filter: { fields: { source: { eq: "work" } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "MMM YYYY")
            company
            position
            endDate(formatString: "MMM YYYY")
          }
          mdxAST
        }
      }
      education: allMdx(
        filter: { fields: { source: { eq: "education" } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "YYYY")
            school
            study
            endDate(formatString: "YYYY")
          }
          mdxAST
        }
      }
      skills: allSkillsYaml(sort: { fields: rating, order: DESC }) {
        group(field: category) {
          edges {
            node {
              skill
              rating
            }
          }
          fieldValue
        }
      }
    }
  `);
  // reporter.info(JSON.stringify(result, undefined, 2));
  reporter.info('Retrieved Data');
  const { doc } = parseResumeData(result.data);
  const outputPath = path.join(process.cwd(), `public`, `static`, 'resume.pdf');
  doc.pipe(fs.createWriteStream(outputPath));
  await doc.end();
};
