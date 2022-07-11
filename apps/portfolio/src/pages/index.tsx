import { styled } from '@mui/material';
import { PageBackground } from '@portfolio/ui';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import HeroBannerImplementation from '../components/hero-banner-implementation/hero-banner-implementation';

interface HomePageProps {
  data: Queries.HomePageQuery;
}

const StyledApp = styled('div')`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .markdown-body {
    max-width: 630px;
    h3 {
      text-transform: uppercase;
      text-align: justify;
    }
    p {
      font-size: 1.25em;
      text-align: justify;
    }
  }
`;

export function Index(props: HomePageProps) {
  const { data } = props;
  return (
    <PageBackground>
      <HeroBannerImplementation />
      {/* TODO: Add indicator for next section */}
      <StyledApp>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </StyledApp>
    </PageBackground>
  );
}

export const pageQuery = graphql`
  query HomePage {
    mdx(slug: { eq: "about/" }) {
      body
    }
  }
`;

export default Index;
