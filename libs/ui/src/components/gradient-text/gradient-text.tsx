import { styled, Theme, Typography } from '@mui/material';
import { analogue } from 'simpler-color';
/* eslint-disable-next-line */
export interface GradientTextProps {}

export const generateGradient = (theme: Theme, props: GradientProps) => {
  const { primary, secondary, color } = props;
  let end = theme.palette.primary.light;
  if (color) {
    end = color;
  }
  if (primary) {
    // return `linear-gradient(${theme.palette.primary.light} 25%, ${theme.palette.primary.main} 100%)`;
    end = theme.palette.primary.light;
    const start = analogue(end, 1);
    return `linear-gradient(${start} 25%, ${end} 100%)`;
  }
  // if (secondary) {
  //   return `linear-gradient(${theme.palette.secondary.light} 25%, ${theme.palette.secondary.main} 100%)`;
  // }
  if (secondary) {
    end = theme.palette.secondary.light;
    const start = analogue(end, 1);
    return `linear-gradient(${start} 25%, ${end} 100%)`;
  }
  const start = analogue(end, 1);
  return `linear-gradient(${start} 25%, ${end} 100%)`;
  // return `linear-gradient(${theme.palette.primary.light} 25%, ${theme.palette.secondary.main} 100%)`;
};

interface GradientProps {
  primary?: boolean;
  secondary?: boolean;
  color?: string;
}

/**
 * @category Styles
 */
const GradientText = styled(Typography)<GradientProps>(
  ({ theme, ...rest }) => `
  background-image: ${generateGradient(theme, rest)};
  background-clip: text;
  text-fill-color: transparent;
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
