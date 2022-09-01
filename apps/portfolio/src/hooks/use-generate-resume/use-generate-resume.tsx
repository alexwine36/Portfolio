import { usePDF } from '@react-pdf/renderer';
import { graphql, useStaticQuery } from 'gatsby';
import { Resume } from '../../../../../libs/pdf-generator/src';
import { parseResumeData } from '../../utilities/pdf-constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface UseGenerateResume {
//   count: number;
//   increment: () => void;
// }

export function useGenerateResume() {
  // const [count, setCount] = useState(0);

  const data = useStaticQuery<Queries.ResumeHookDataQuery>(graphql`
    query ResumeHookData {
      work: allMdx(
        filter: { fields: { source: { eq: "work" } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "MMM YYYY")
            company
            shortName
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
            shortName
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

  const { parsedData } = parseResumeData(data);
  const document = <Resume data={parsedData} />;
  const [instance, update] = usePDF({ document });

  // const increment = useCallback(() => setCount((x) => x + 1), []);
  // return { count, increment };

  return { parsedData, instance, document };
}

export default useGenerateResume;
