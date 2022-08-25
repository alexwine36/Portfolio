import styled from '@emotion/styled';
import { HeroBanner } from '@portfolio/ui';
import { HeroImages } from '../../loadable/hero-banner-fallback';
/* eslint-disable-next-line */
export interface HeroBannerImplementationProps {
  mtns: Queries.HomePageQuery['mtns'];
  bkg: Queries.HomePageQuery['bkg'];
}

const StyledHeroBannerImplementation = styled.div`
  // color: pink;
  margin-top: -10px;
`;

// Duotone
// duotone: { highlight: "#49afe2", shadow: "#b11733" }
export function HeroBannerImplementation(props: HeroBannerImplementationProps) {
  const { mtns, bkg } = props;

  const { bg, fg } = HeroImages({ mtns, bkg });

  return (
    <StyledHeroBannerImplementation>
      <HeroBanner
        // fg={{
        //   srcSet: formatSrcSet(mountains.childImageSharp.fixed.srcSet),
        //   src: mountains.childImageSharp.fixed.src,
        // }}
        fgChild={fg}
        bgChild={bg}
        // bg={{
        //   srcSet: formatSrcSet(background.childImageSharp.fixed.srcSet),
        //   src: background.childImageSharp.fixed.src,
        // }}
      />
    </StyledHeroBannerImplementation>
  );
}

export default HeroBannerImplementation;
