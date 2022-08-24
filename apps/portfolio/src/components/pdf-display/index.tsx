import {
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/* eslint-disable-next-line */
export interface PDFDisplayProps {}

const StyledPDFDisplay = styled('div')`
  // color: pink;
  // width: 100%;
  // height: 100vh;
`;

const StyledPDF = styled('object')`
  // color: pink;
  width: 60vw;
  max-width: 100%;
  height: 100vh;
`;

const PdfLink = () => (
  <Typography>
    <Link href="/static/resume.pdf" rel="noopener" target="_blank">
      View PDF
    </Link>
  </Typography>
);

export function PDFDisplay(props: PDFDisplayProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  // const previewEl = document.getElementById('preview');
  // const preview = React.createRef<HTMLObjectElement>();
  // useEffect(() => {
  //   if (doc && preview) {
  //     renderPDF(doc).then((url) => {
  //       if (preview && preview.current) {
  //         preview.current.data = url;
  //       }
  //     });
  //   }
  // }, [preview]);
  if (matches) {
    return <PdfLink />;
  } else {
    return (
      <StyledPDFDisplay
      // sx={{
      //   visibility: matches ? 'hidden' : 'visible',
      // }}
      >
        <StyledPDF
          // ref={preview}
          data="/static/resume.pdf"
          id="preview"
          type="application/pdf"
        >
          <PdfLink />
        </StyledPDF>
      </StyledPDFDisplay>
    );
  }
}

export default PDFDisplay;
