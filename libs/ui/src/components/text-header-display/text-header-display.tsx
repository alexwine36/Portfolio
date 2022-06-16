import { styled, Typography, TypographyProps, useTheme } from '@mui/material';
import GradientText, { generateGradient } from '../gradient-text/gradient-text';

type VariantTypes = TypographyProps['variant'];

/* eslint-disable-next-line */

export interface TextHeaderDisplayProps {
  title: string;
  pretitle?: string;
  subtitle?: string;
  variant?: VariantTypes;
  hideDivider?: boolean;
  gradientColor?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'error'
    | 'success';
  color?: string;
}

const StyledTextHeaderDisplay = styled('div')`
  // color: pink;
`;

const TextBoxFormat = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export function TextHeaderDisplay(props: TextHeaderDisplayProps) {
  const {
    title,
    pretitle,
    subtitle,
    variant = 'h5',
    hideDivider,
    gradientColor: baseColor,
    color,
  } = props;
  const theme = useTheme();
  let gradientColor = theme.palette.error.main;

  if (baseColor) {
    const palette = theme.palette;
    if (baseColor in palette) {
      gradientColor = palette[baseColor].main;
    }
  }
  if (color) {
    gradientColor = color;
  }

  return (
    <StyledTextHeaderDisplay>
      <TextBoxFormat>
        <GradientText color={gradientColor} variant={variant}>
          {title}
          {pretitle && (
            <GradientText
              sx={{
                fontWeight: '400',
              }}
              color="#fafafa"
              as="span"
            >
              {pretitle}
            </GradientText>
          )}
        </GradientText>
        <Typography
          sx={{
            // lineHeight: 1.1,
            paddingBottom: 1,
          }}
          variant="overline"
        >
          {subtitle}
        </Typography>
      </TextBoxFormat>
      {!hideDivider && (
        <div
          style={{
            backgroundImage: generateGradient(theme, {
              color: gradientColor,
            }),
            height: 1,
            position: 'relative',
            top: variant === 'h5' ? '-.5rem' : '-1.17rem',
            // top: '-1.17rem';
            zIndex: -1,
            opacity: 0.7,
          }}
        ></div>
      )}
      {/* <h1>Welcome to TextHeaderDisplay!</h1> */}
    </StyledTextHeaderDisplay>
  );
}

export default TextHeaderDisplay;
