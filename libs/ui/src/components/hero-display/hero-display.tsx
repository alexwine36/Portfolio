/* eslint-disable-next-line */
import { Container, Grid, styled, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { SizeMe } from 'react-sizeme';

import GradientText from '../gradient-text/gradient-text';

const StyledPolygonBackground = React.lazy(() => import('../pg-background'));

/* eslint-disable-next-line */
export interface HeroDisplayProps {
  title?: string;
  hideSvg?: boolean;
}

const StyledHeroDisplay = styled('div')(({ theme }) => {
  // const { dark, main } = theme.palette.secondary;
  // const polygonRes = generateBackgroundUri(<PolygonBackground />);
  // const polygonRes = generateBase64(
  //   <PolygonBackground
  //     mainColor={dark}
  //     secondaryColor={dark}
  //     accentColor={main}
  //   />
  // );
  // console.log(polygonRes);

  return `
    //   background-color: transparent;

    // background-size: cover;
    // background-position: center;
    height: 50vh;
    max-height: 500px;
  `;
});

const formatRgba = (values: (number | string)[]) => {
  return `rgba(${values.map((v) => `${v}`).join(', ')})`;
};

// const makeBackground = (bgColor: string) => {
//   const res = `linear-gradient(to right, ${formatRgba(
//     hexRgb(bgColor, {
//       alpha: 0,
//       format: 'array',
//     })
//   )}, ${formatRgba(
//     hexRgb(bgColor, {
//       alpha: 1,
//       format: 'array',
//     })
//   )}), url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`;

//   return res;
// };

/**
 * @category Display
 * @param props
 * @returns
 */
export function HeroDisplay(props: HeroDisplayProps) {
  const { title, hideSvg } = props;
  // const theme = useTheme();
  return (
    <SizeMe monitorHeight>
      {({ size }) => {
        return (
          <StyledHeroDisplay>
            {!hideSvg && (
              <Suspense fallback={<div></div>}>
                <StyledPolygonBackground
                  sx={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </Suspense>
            )}
            {/* <StyledGenerateGalaxyBackground /> */}
            <Container
              sx={{
                padding: 3,
              }}
            >
              <Grid container>
                <Grid item sm={6}>
                  <Typography variant="h3">
                    Alex Wine |{' '}
                    <GradientText primary as="span">
                      {title || 'Portfolio'}
                    </GradientText>
                  </Typography>
                  {/* <GradientText variant="h3">Potfolio</GradientText> */}
                </Grid>
                <Grid item xs={6}>
                  {/* <CodeThinking /> */}
                  {/* <StyledBackground /> */}
                </Grid>
              </Grid>
            </Container>
          </StyledHeroDisplay>
        );
      }}
    </SizeMe>
  );
}

export default HeroDisplay;
