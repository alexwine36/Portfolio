// import styled from '@emotion/styled';
import { Grid, styled, Typography } from '@mui/material';
// import hexRgb from 'hex-rgb';
import PolygonBackground from '../../assets/polygon-background/polygon-background';
import { generateBackgroundUri } from '../../lib/utilities/functions/generateBase64';
import GradientText from '../gradient-text/gradient-text';

/* eslint-disable-next-line */
export interface HeroDisplayProps {}

const StyledHeroDisplay = styled('div')(({ theme }) => {
  // const { dark, main } = theme.palette.secondary;
  const polygonRes = generateBackgroundUri(<PolygonBackground />);
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
// background-image: ${polygonRes};
// background-size: cover;
// background-position: center;
height: 90vh;
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

export function HeroDisplay(props: HeroDisplayProps) {
  // const theme = useTheme();
  return (
    <StyledHeroDisplay>
      {/* <StyledPolygonBackground accentColor={theme.palette.primary.main} /> */}
      {/* <StyledGenerateGalaxyBackground /> */}
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3">
            Alex Wine |{' '}
            <GradientText primary as="span">
              Portfolio
            </GradientText>
          </Typography>
          {/* <GradientText variant="h3">Potfolio</GradientText> */}
        </Grid>
        <Grid item xs={6}>
          {/* <CodeThinking /> */}
          {/* <StyledBackground /> */}
        </Grid>
      </Grid>
    </StyledHeroDisplay>
  );
}

export default HeroDisplay;
