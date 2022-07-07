import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { ResumeQueryQuery } from '../../../graphql-types';
import {
  generatePdfResume,
  renderPDF,
} from '../../utilities/generate-pdf-resume';
import { parseResume } from '../../utilities/parse-resume';

/* eslint-disable-next-line */
export interface PDFDisplayProps {}

const StyledPDFDisplay = styled.div`
  // color: pink;
  width: 100%;
  height: 100vh;
`;

const StyledPDF = styled.object`
  // color: pink;
  width: 100%;
  height: 100vh;
`;

export function PDFDisplay(props: PDFDisplayProps) {
  const { work } = useStaticQuery<ResumeQueryQuery>(graphql`
    query ResumeQuery {
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
    }
  `);

  const parsedData = {
    work: work.nodes.map((d) => {
      const { frontmatter, mdxAST } = d;

      const displayDate = `${frontmatter.startDate} - ${
        frontmatter.endDate || 'Present'
      }`;
      return {
        subtitle: frontmatter.company,
        title: frontmatter.position,
        pretitle: displayDate,
        content: parseResume(mdxAST),
        // subtitle: displayDate,
      };
    }),
  };
  console.log(parsedData);

  // work.nodes.map((node) => {
  //   console.log(parseResume(node.mdxAST));
  // });
  const doc = generatePdfResume({
    ...parsedData,
  });
  // const previewEl = document.getElementById('preview');
  const preview = React.createRef<HTMLObjectElement>();
  useEffect(() => {
    renderPDF(doc).then((url) => {
      if (preview) {
        preview.current.data = url;
      }
    });
  });
  return (
    <StyledPDFDisplay>
      {/* <h1>Welcome to PDFDisplay!</h1> */}
      <StyledPDF ref={preview} id="preview" type="application/pdf">
        <p>
          This browser does not support PDFs. Sorry. Find out more about pdfjs
          at <a href="https://github.com/rkusa/pdfjs">Github</a>.
        </p>
      </StyledPDF>
    </StyledPDFDisplay>
  );
}

export default PDFDisplay;
