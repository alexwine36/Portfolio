import {
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { renderPDF } from '@portfolio/markdown-to-pdf';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { parseResumeData } from '../../utilities/pdf-constants';

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
    <Link href="/static/resume.pdf">View PDF</Link>
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

  const { doc } = parseResumeData(data);
  // const previewEl = document.getElementById('preview');
  const preview = React.createRef<HTMLObjectElement>();
  useEffect(() => {
    if (doc && preview) {
      renderPDF(doc).then((url) => {
        if (preview && preview.current) {
          preview.current.data = url;
        }
      });
    }
  }, [preview, doc]);
  if (matches) {
    return <PdfLink />;
  } else {
    return (
      <StyledPDFDisplay
      // sx={{
      //   visibility: matches ? 'hidden' : 'visible',
      // }}
      >
        <StyledPDF ref={preview} id="preview" type="application/pdf">
          <PdfLink />
        </StyledPDF>
      </StyledPDFDisplay>
    );
  }
}

export default PDFDisplay;
