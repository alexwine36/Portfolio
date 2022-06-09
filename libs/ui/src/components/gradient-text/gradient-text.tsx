import { styled, Theme, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface GradientTextProps {}

const generateGradient = (theme: Theme, primary?: boolean) => {
  if (primary) {
    return `linear-gradient(${theme.palette.primary.light} 25%, ${theme.palette.secondary.main} 100%)`;
  }
  return `linear-gradient(${theme.palette.primary.light} 25%, ${theme.palette.secondary.light} 100%)`;
};

interface GradientProps {
  primary?: boolean;
}

const GradientText = styled(Typography)<GradientProps>(
  ({ theme, primary }) => `
  background-image: ${generateGradient(theme, primary)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // background-image: linear-gradient(rgb(94, 162, 239) 25%, rgb(0, 114, 245) 100%);
  `
);

// export const GradientSpanText = styled('span')<GradientProps>(
//   ({ theme, primary }) => `
//   background-image: ${generateGradient(theme, primary)};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   // background-image: linear-gradient(rgb(94, 162, 239) 25%, rgb(0, 114, 245) 100%);
//   `
// );

// export function GradientText(props: GradientTextProps) {
//   return (
//     <StyledGradientText>
//       <h1>Welcome to GradientText!</h1>
//     </StyledGradientText>
//   );
// }

export default GradientText;
