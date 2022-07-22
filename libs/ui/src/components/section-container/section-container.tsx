import { Container, styled } from '@mui/material';

/* eslint-disable-next-line */
export interface SectionContainerProps {}

const defaultSpacing = 5;

export const SectionContainer = styled(Container)(
  ({ theme }) => `
    // color: pink;

    margin-top: ${theme.spacing(defaultSpacing)};
    margin-bottom: ${theme.spacing(defaultSpacing)};
  `
);

// export function SectionContainer(props: SectionContainerProps) {
//   return (
//     <StyledSectionContainer>
//       <h1>Welcome to SectionContainer!</h1>
//     </StyledSectionContainer>
//   );
// }

export default SectionContainer;
