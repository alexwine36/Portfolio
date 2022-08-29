import {
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import useGenerateResume from '../../hooks/use-generate-resume/use-generate-resume';
/* eslint-disable-next-line */
export interface PDFDisplayProps {
  link?: boolean;
}

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

const PdfLink = () => {
  // const { document } = props;
  const { instance } = useGenerateResume();
  return (
    <Typography>
      <Link target="_blank" rel="noopener" href={instance.url}>
        View PDF
      </Link>
    </Typography>
  );
};

export function PDFDisplay(props: PDFDisplayProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const { instance } = useGenerateResume();
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
        <StyledPDF data={instance.url}>
          <PdfLink />
        </StyledPDF>
        {/* <StyledPDF
          // ref={preview}
          data="/static/resume.pdf"
          id="preview"
          type="application/pdf"
        >
          <PdfLink />
        </StyledPDF> */}
      </StyledPDFDisplay>
    );
  }
}

export default PDFDisplay;
