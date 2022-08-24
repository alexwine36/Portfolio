import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import GradientText from '../../../../../libs/ui/src/components/gradient-text/gradient-text';

/* eslint-disable-next-line */
export interface HeroBannerFallbackProps {
  mtns: Queries.HomePageQuery['mtns'];
  bkg: Queries.HomePageQuery['bkg'];
}

const StyledHeroBannerFallback = styled.div`
  /* color: pink; */
  height: 100vh;
  margin-top: -10px;
`;
const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  bottom: 0;
  height: 100%;
  & > .gatsby-image-wrapper,
  .inset {
    /* position: absolute; */
    /* top: 0; */
    position: relative;
    scale: (1);
    transform: translateY(0%);
    &:nth-child(2) {
      transform: translateY(-100%);
    }
    &:nth-child(3) {
      height: 100%;
      transform: translateY(-200%);
    }

    &.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeroImages = (
  data: HeroBannerFallbackProps
): {
  fg: React.ReactElement;
  bg: React.ReactElement;
} => {
  const { mtns, bkg } = data;
  return {
    fg: (
      <GatsbyImage
        alt="Mountains"
        style={{
          height: '100%',
        }}
        image={mtns.childImageSharp.gatsbyImageData}
      ></GatsbyImage>
    ),
    bg: (
      <GatsbyImage
        alt="Background Sky"
        style={{
          height: '100%',
        }}
        image={bkg.childImageSharp.gatsbyImageData}
      ></GatsbyImage>
    ),
  };
};

export function HeroBannerFallback(props: HeroBannerFallbackProps) {
  const { mtns, bkg } = props;
  const { bg, fg } = HeroImages({ mtns, bkg });
  return (
    <StyledHeroBannerFallback>
      {/* <h1>Welcome to HeroBannerFallback!</h1> */}
      <StyledContainer>
        {bg}
        {fg}
        <div className="inset center text">
          {/* <h1 className="headline white">Hello World!</h1> */}
          <Typography variant="h3">
            Alex Wine |{' '}
            <GradientText
              primary
              // color={theme.palette.primary.main}
              as="span"
            >
              {'Portfolio'}
            </GradientText>
          </Typography>
        </div>
      </StyledContainer>
    </StyledHeroBannerFallback>
  );
}

export default HeroBannerFallback;
