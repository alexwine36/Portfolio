import styled from '@emotion/styled';
import { HeroBanner } from '@portfolio/ui';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroBannerQuery } from '../../../graphql-types';
/* eslint-disable-next-line */
export interface HeroBannerImplementationProps {}

const StyledHeroBannerImplementation = styled.div`
  // color: pink;
`;

const formatSrcSet = (d: string) => {
  const data = d.split('\n');
  return data
    .map((s) => {
      const [url, size] = s.split(' ');

      return `url(${url}) ${size.replace(',', '')}`;
    })
    .join(',\n');
  // console.log(data)
};
// Duotone
// duotone: { highlight: "#49afe2", shadow: "#b11733" }
export function HeroBannerImplementation(props: HeroBannerImplementationProps) {
  const { mtns, bkg } = useStaticQuery<HeroBannerQuery>(graphql`
    query HeroBanner {
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
      fixed(
        jpegProgressive: true
        width: 2500
        pngQuality: 50
        jpegQuality: 50
      ) {
        src
        srcSet
        width
        # ...GatsbyImageSharpFixed
      }
    }
  `);

  console.log(bkg);

  return (
    <StyledHeroBannerImplementation>
      <HeroBanner
        // fg={{
        //   srcSet: formatSrcSet(mountains.childImageSharp.fixed.srcSet),
        //   src: mountains.childImageSharp.fixed.src,
        // }}
        fgChild={
          // <BackgroundImage
          //   style={{
          //     height: '100%',
          //   }}
          //   fluid={(mtns as any).childImageSharp.fluid}
          // ></BackgroundImage>
          <GatsbyImage
            alt="Mountains"
            style={{
              height: '100%',
            }}
            image={mtns.childImageSharp.gatsbyImageData}
          ></GatsbyImage>
        }
        bgChild={
          // <BackgroundImage
          //   style={{
          //     height: '100%',
          //   }}
          //   fluid={(bkg as any).childImageSharp.fluid}
          // ></BackgroundImage>
          <GatsbyImage
            alt="Background Sky"
            style={{
              height: '100%',
            }}
            image={bkg.childImageSharp.gatsbyImageData}
          ></GatsbyImage>
        }
        // bg={{
        //   srcSet: formatSrcSet(background.childImageSharp.fixed.srcSet),
        //   src: background.childImageSharp.fixed.src,
        // }}
      />
    </StyledHeroBannerImplementation>
  );
}

export default HeroBannerImplementation;
