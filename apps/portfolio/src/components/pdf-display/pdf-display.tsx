import styled from '@emotion/styled';
import {
  generatePdfResume,
  parseResume,
  renderPDF,
} from '@portfolio/markdown-to-pdf';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { ResumeQueryQuery } from '../../../graphql-types';

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
  const { work, education, skills } = useStaticQuery<ResumeQueryQuery>(graphql`
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
      education: allMdx(
        filter: { fields: { source: { eq: "education" } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "MMM YYYY")
            school
            study
            endDate(formatString: "MMM YYYY")
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
        rawContent: mdxAST,
        // subtitle: displayDate,
      };
    }),
    education: education.nodes.map((d) => {
      const { frontmatter, mdxAST } = d;

      const displayDate = `${frontmatter.startDate} - ${
        frontmatter.endDate || 'Present'
      }`;
      return {
        title: frontmatter.school,
        subtitle: frontmatter.study,
        pretitle: displayDate,
        content: parseResume(mdxAST),
        rawContent: mdxAST,
        // subtitle: displayDate,
      };
    }),
    skills: skills.group.map((category) => ({
      category: category.fieldValue,
      skills: category.edges.map((sk) => sk.node.skill),
    })),
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
