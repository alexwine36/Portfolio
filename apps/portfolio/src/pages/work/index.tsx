import styled from '@emotion/styled';
import { graphql, PageProps } from 'gatsby';

import SectionDataDisplay, {
  SectionDataDisplayProps,
} from '../../components/display/section-data-display';
import ParallaxSectionDisplay from '../../components/parallax-section-display';
import { usePage } from '../../hooks/use-pages/use-pages';

/* eslint-disable-next-line */
export interface WorkPageProps extends PageProps<Queries.WorkPageQuery> {}

const StyledWorkPage = styled.div`
  // color: pink;
`;

export const WorkPage = (props: WorkPageProps) => {
  const data = props.data.allMdx.edges;
  const page = usePage('work');
  const parsedData: SectionDataDisplayProps = {
    items: data.map((d) => {
      const { frontmatter, body } = d.node;

      const displayDate = `${frontmatter.startDate} - ${
        frontmatter.endDate || 'Present'
      }`;
      return {
        title: frontmatter.company,
        pretitle: frontmatter.position,
        content: body,
        subtitle: displayDate,
      };
    }),
  };
  return (
    <StyledWorkPage>
      <ParallaxSectionDisplay page={page}>
        <SectionDataDisplay {...parsedData} />
      </ParallaxSectionDisplay>
    </StyledWorkPage>
  );
};

export const pageQuery = graphql`
  query WorkPage {
    allMdx(
      filter: { fields: { source: { eq: "work" } } }
      sort: { fields: frontmatter___endDate, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            startDate(formatString: "MMM YYYY")
            company
            position
            endDate(formatString: "MMM YYYY")
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

export default WorkPage;
