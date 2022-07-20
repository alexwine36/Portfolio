import { styled } from '@mui/material';
import { PageBackground } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import HeroBannerImplementation from '../components/hero-banner-implementation/hero-banner-implementation';

/* eslint-disable-next-line */
interface HomePageProps extends PageProps<Queries.HomePageQuery> {
  // data: HomePageQuery;
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
