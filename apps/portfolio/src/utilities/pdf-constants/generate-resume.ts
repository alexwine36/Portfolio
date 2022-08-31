import fs from 'fs';
import { parseResumeData } from '.';

/**
 * @deprecated
 * @param graphql
 */

export const generateResume = async (graphql: any) => {
  console.log('GENERATE RESUME');

  const result: { data: Queries.ResumeDataQuery } = await graphql(`
    query ResumeQuery {
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
  console.log('RESULT', result);

  const { doc } = parseResumeData(result.data);

  doc.pipe(fs.createWriteStream('output.pdf'));
  await doc.end();
};
