import { Card, CardHeader, styled, useTheme } from '@mui/material';
import GradientText from '../gradient-text/gradient-text';

/* eslint-disable-next-line */
export interface SectionDisplayProps {}

const StyledSectionDisplay = styled(Card)(
  ({ theme }) => `
// color: pink;
background-image: linear-gradient(
  to bottom right,
  rgba(255, 255, 255, 0.2),
  rgba(255, 255, 255, 0)
);
backdrop-filter: 'blur(10px)';
box-shadow: 10px 10px 10px rgba(30, 30, 30, 0.5);
border: 1px solid ${theme.palette.divider};
`
);

export function SectionDisplay(props: SectionDisplayProps) {
  const theme = useTheme();
  return (
    <StyledSectionDisplay>
      {/* <h1>Welcome to SectionDisplay!</h1> */}
      <CardHeader
        title={
          <GradientText color={theme.palette.error.main} variant="h5">
            Education
          </GradientText>
        }
      ></CardHeader>
    </StyledSectionDisplay>
  );
}

export default SectionDisplay;
