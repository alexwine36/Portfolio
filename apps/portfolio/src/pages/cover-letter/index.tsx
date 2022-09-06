import styled from '@emotion/styled';
import { graphql, PageProps } from 'gatsby';
import { CoverLetterGenerator } from '../../../../../libs/cover-letter-generator/src';
import ParallaxSectionDisplay from '../../components/parallax-section-display';
import { usePage } from '../../hooks/use-pages/use-pages';

/* eslint-disable-next-line */
export interface CoverLetterProps extends PageProps<Queries.CoverLetterQuery> {}

const StyledCoverLetter = styled.div`
  /* color: pink; */
`;

export function CoverLetter(props: CoverLetterProps) {
  const data = props.data.site.siteMetadata;
  const page = usePage('home');
  return (
    <StyledCoverLetter>
      <ParallaxSectionDisplay page={page}>
        <CoverLetterGenerator
          formData={{ Personal: data, Company: {}, Strengths: {} }}
        />
      </ParallaxSectionDisplay>
    </StyledCoverLetter>
  );
}

export const pageQuery = graphql`
  query CoverLetter {
    site {
      siteMetadata {
        firstName
        lastName
        phone
        email
      }
    }
  }
`;

export default CoverLetter;
