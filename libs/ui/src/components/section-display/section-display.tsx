import { Container, styled, useTheme } from '@mui/material';
import TextHeaderDisplay from '../text-header-display/text-header-display';

/* eslint-disable-next-line */
export interface SectionDisplayProps {
  title: string;
  children?: React.ReactNode;
  id?: string;
}

const StyledSectionDisplay = styled('section')(
  ({ theme }) => `
// padding-top: ${theme.spacing(2)};
// margin-bottom: ${theme.spacing(2)};
// min-height: 50vh;
padding-top: ${theme.spacing(3)};
min-height: 100vh;
display: flex;
align-items: center;
`
);

const StyledSectionChildrenDisplay = styled('div')(
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

// padding-top: ${theme.spacing(2)};
// padding-bottom: ${theme.spacing(2)};
`
);

export function SectionDisplay(props: SectionDisplayProps) {
  const { title, children, id } = props;
  const theme = useTheme();
  const gradientColor = theme.palette.error.main;
  return (
    <StyledSectionDisplay>
      <Container>
        <TextHeaderDisplay
          id={id}
          variant="h4"
          hideDivider
          title={title}
        ></TextHeaderDisplay>
        <StyledSectionChildrenDisplay>{children}</StyledSectionChildrenDisplay>
      </Container>
    </StyledSectionDisplay>
  );
}

export default SectionDisplay;
