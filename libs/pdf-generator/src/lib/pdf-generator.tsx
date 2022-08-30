import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PdfGeneratorProps {}

const StyledPdfGenerator = styled.div`
  color: pink;
`;

export function PdfGenerator(props: PdfGeneratorProps) {
  return (
    <StyledPdfGenerator>
      <h1>Welcome to PdfGenerator!</h1>
    </StyledPdfGenerator>
  );
}

export default PdfGenerator;
