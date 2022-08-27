import {
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Resume } from '@portfolio/pdf-generator';
import { PDFViewer } from '@react-pdf/renderer';
import { graphql, useStaticQuery } from 'gatsby';
import { parseResumeData } from '../../utilities/pdf-constants';
/* eslint-disable-next-line */
export interface PDFDisplayProps {}

const StyledPDFDisplay = styled('div')`
  // color: pink;
  // width: 100%;
  // height: 100vh;
`;

const StyledPDF = styled(PDFViewer)`
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

  const data = useStaticQuery<Queries.ResumeDataQuery>(graphql`
    query ResumeData {
      work: allMdx(
        filter: { fields: { source: { eq: "work" } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "MMM YYYY")
            company
            position
            endDate(formatString: "MMM YYYY")
          }
          mdxAST
        }
      }
      education: allMdx(
        filter: { fields: { source: { eq: "education" } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "YYYY")
            school
            study
            endDate(formatString: "YYYY")
          }
          mdxAST
        }
      }
      skills: allSkillsYaml(sort: { fields: rating, order: DESC }) {
        group(field: category) {
          edges {
            node {
              skill
              rating
            }
          }
          fieldValue
        }
      }
    }
  `);

  const { parsedData } = parseResumeData(data);
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
  console.log(parsedData);

  if (matches) {
    return <PdfLink />;
  } else {
    return (
      <StyledPDFDisplay
      // sx={{
      //   visibility: matches ? 'hidden' : 'visible',
      // }}
      >
        <StyledPDF>
          <Resume data={parsedData} />
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
