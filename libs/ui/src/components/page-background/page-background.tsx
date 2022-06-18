import { styled } from '@mui/material';
import React from 'react';
import GenerateGalaxyBackground from '../../assets/generate-galaxy-background/generate-galaxy-background';
import StarBackground from '../../assets/star-background/star-background';
import { generateBase64 } from '../../lib/utilities/functions/generateBase64';

/* eslint-disable-next-line */
export interface PageBackgroundProps {
  children: React.ReactElement | React.ReactElement[];
}

const StyledPageBackground = styled('div')(({ theme }) => {
  // const { dark, main } = theme.palette.secondary;
  const galaxyRes = generateBase64(<GenerateGalaxyBackground />);
  // const polygonRes = generateBase64(
  //   <PolygonBackground
  //     mainColor={dark}
  //     secondaryColor={dark}
  //     accentColor={main}
  //   />
  // );
  // console.log(polygonRes);

  return `
// color: pink;
// background-image: linear-gradient(
//   rgba(255, 255, 255, 0),
//   rgb(247, 250, 255, 0.2) 100%
// );
// height: 90vh;
background-color: transparent;
// background-image: url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);

// padding: ${theme.spacing(3)};
// background-image: url(backgrounds/galaxy.svg);
// background-image: url(${galaxyRes});
// background-size: cover;
// background-position: center;
`;
});

// export function PageBackground(props: PageBackgroundProps) {
//   return (
//     <StyledPageBackground>
//       <h1>Welcome to PageBackground!</h1>
//     </StyledPageBackground>
//   );
// }
/**
 * @category Styles
 */
export const PageBackground = (props: PageBackgroundProps) => {
  return (
    <StyledPageBackground>
      <StarBackground>{props.children}</StarBackground>
    </StyledPageBackground>
  );
};

export default PageBackground;
