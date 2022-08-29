import { styled } from '@mui/material';
import { PageBackground } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { Suspense } from 'react';
import HeroBannerFallback from '../loadable/hero-banner-fallback';
const HeroBannerImplementation = React.lazy(
  () =>
    import(
      '../components/hero-banner-implementation/hero-banner-implementation'
    )
);

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
  const { mtns, bkg } = data;
  return (
    <PageBackground>
      <Suspense fallback={<HeroBannerFallback mtns={mtns} bkg={bkg} />}>
        <HeroBannerImplementation mtns={mtns} bkg={bkg} />
      </Suspense>
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
    mtns: file(name: { eq: "mountains" }) {
      childImageSharp {
        ...HeaderImageFragment
      }
    }
    bkg: file(name: { eq: "background-purp" }) {
      childImageSharp {
        ...HeaderImageFragment
      }
    }
  }
  fragment HeaderImageFragment on ImageSharp {
    # fluid(quality: 90, maxWidth: 1920) {
    #   ...GatsbyImageSharpFluid_withWebp
    # }
    gatsbyImageData(
      placeholder: BLURRED
      layout: FULL_WIDTH
      formats: [AUTO, WEBP]
    )
  }
  fragment ImageSharpFragment on ImageSharp {
    fixed(jpegProgressive: true, width: 2500, pngQuality: 50, jpegQuality: 50) {
      src
      srcSet
      width
      # ...GatsbyImageSharpFixed
    }
  }
`;

export default Index;
