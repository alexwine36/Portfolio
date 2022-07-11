import { css, keyframes } from '@emotion/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, Typography, useTheme } from '@mui/material';
import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import { hexToRgba } from '../../lib/utilities/hex-to-rgba';
import GradientText from '../gradient-text/gradient-text';

type ImageProps = {
  srcSet?: string;
  src?: string;
};

/* eslint-disable-next-line */
export interface HeroBannerProps {
  title?: string;
  fg?: ImageProps;
  bg?: ImageProps;
  fgChild?: React.ReactElement;
  bgChild?: React.ReactElement;
}

export const StyledHeroBanner = styled('div')(
  ({ theme }) => `
// color: pink;
.headline {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 10vw;
}

.inset {
  position: absolute;
  inset: 0;
}
.white {
  color: white;
}
.gray {
  color: #446;
}

.full {
  height: 100vh;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient {
  background: linear-gradient(${hexToRgba(
    theme.palette.primary.dark,
    0.5
  )} 50%, ${theme.palette.background.default});
}
.image {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
}
`
);

const animBounce = keyframes`
0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-30px);}
            60% {transform: translateY(-15px);}
`;

const StyledArrowDownContainer = styled('div')(
  ({ theme }) => `
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: ${theme.spacing(6)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`
);

const StyledImage = styled('div')<{ data?: ImageProps }>(
  ({ theme, data }) => `
height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(${data?.src});
    background-image: image-set(${data?.srcSet});
`
);

export function HeroBanner(props: HeroBannerProps) {
  const { title, fg, bg, fgChild, bgChild } = props;
  const theme = useTheme();
  const background: BannerLayer = {
    // image:
    //   'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    children: bgChild || <StyledImage data={bg}></StyledImage>,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        {/* <h1 className="headline white">Hello World!</h1> */}
        <Typography variant="h3">
          Alex Wine |{' '}
          <GradientText
            primary
            // color={theme.palette.primary.main}
            as="span"
          >
            {title || 'Portfolio'}
          </GradientText>
        </Typography>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    // image: '/static/d407778d51249ba59807b0edebea6801/mountains.png',
    children: fgChild || <StyledImage data={fg}></StyledImage>,
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  const arrowDownLayer: BannerLayer = {
    children: (
      <StyledArrowDownContainer
        css={css`
          animation-name: ${animBounce};
        `}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '5rem',
          }}
          // fontSize="large"
        />
      </StyledArrowDownContainer>
    ),
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <StyledHeroBanner>
      {/* <h1>Welcome to HeroBanner!</h1>
       */}

      <ParallaxBanner
        layers={[
          background,
          foreground,
          headline,
          arrowDownLayer,
          gradientOverlay,
        ]}
        className="full"
      />
    </StyledHeroBanner>
  );
}

export default HeroBanner;
