import styled from '@emotion/styled';
import { graphql, PageProps } from 'gatsby';
import SectionDataDisplay, {
  SectionDataDisplayProps,
} from '../../components/display/section-data-display';
import ParallaxSectionDisplay from '../../components/parallax-section-display';
import { usePage } from '../../hooks/use-pages/use-pages';

/* eslint-disable-next-line */
export interface EducationPageProps
  extends PageProps<Queries.EducationPageQuery> {}

const StyledEducationPage = styled.div``;

export function EducationPage(props: EducationPageProps) {
  const data = props.data.allMdx.edges;
  const page = usePage('education');
  const parsedData: SectionDataDisplayProps = {
    items: data.map((d) => {
      const { frontmatter, body } = d.node;

      const displayDate = `${frontmatter.startDate} - ${
        frontmatter.endDate || 'Present'
      }`;
      return {
        title: frontmatter.school,
        pretitle: frontmatter.study,
        content: body,
        subtitle: displayDate,
      };
    }),
  };

  return (
    <StyledEducationPage>
      <ParallaxSectionDisplay page={page}>
        <SectionDataDisplay {...parsedData} />
      </ParallaxSectionDisplay>
    </StyledEducationPage>
  );
}

export const pageQuery = graphql`
  query EducationPage {
    allMdx(
      filter: { fields: { source: { eq: "education" } } }
      sort: { fields: frontmatter___endDate, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            startDate(formatString: "YYYY")
            school
            study
            endDate(formatString: "YYYY")
          }
          fields {
            source
          }
          body
          excerpt
        }
      }
    }
  }
`;

export default EducationPage;
