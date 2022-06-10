import { Card, styled, useTheme } from '@mui/material';
import TextHeaderDisplay from '../text-header-display/text-header-display';

/* eslint-disable-next-line */
export interface SectionDisplayProps {
  title: string;
  children?: React.ReactNode;
}

const StyledSectionDisplay = styled(Card)(
  ({ theme }) => `
// color: pink;
// background-image: linear-gradient(
//   to bottom right,
//   rgba(255, 255, 255, 0.2),
//   rgba(255, 255, 255, 0)
// );
// backdrop-filter: 'blur(10px)';
// box-shadow: 10px 10px 10px rgba(30, 30, 30, 0.5);
// border: 1px solid ${theme.palette.divider};
`
);

export function SectionDisplay(props: SectionDisplayProps) {
  const { title, children } = props;
  const theme = useTheme();
  const gradientColor = theme.palette.error.main;
  return (
    <>
      <TextHeaderDisplay hideDivider title={title}></TextHeaderDisplay>
      <StyledSectionDisplay>
        {/* <h1>Welcome to SectionDisplay!</h1> */}
        {children}
        {/* <CardHeader
          title={

          }
        ></CardHeader> */}
      </StyledSectionDisplay>
    </>
  );
}

export default SectionDisplay;
