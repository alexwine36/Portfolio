import { styled, Typography, useTheme } from '@mui/material';
import GradientText, { generateGradient } from '../gradient-text/gradient-text';

/* eslint-disable-next-line */
export interface TextHeaderDisplayProps {
  title: string;
  subtitle?: string;
  variant?: 'h5' | 'h6';
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
  const { title, subtitle, variant = 'h5' } = props;
  const theme = useTheme();
  const gradientColor = theme.palette.error.main;
  return (
    <StyledTextHeaderDisplay>
      <TextBoxFormat>
        <GradientText color={gradientColor} variant={variant}>
          {title}
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

      <div
        style={{
          backgroundImage: generateGradient(theme, {
            color: gradientColor,
          }),
          height: 1,
          position: 'relative',
          top: variant === 'h6' ? '-.5rem' : '-1.17rem',
          // top: '-1.17rem';
          zIndex: -1,
          opacity: 0.7,
        }}
      ></div>
      {/* <h1>Welcome to TextHeaderDisplay!</h1> */}
    </StyledTextHeaderDisplay>
  );
}

export default TextHeaderDisplay;
