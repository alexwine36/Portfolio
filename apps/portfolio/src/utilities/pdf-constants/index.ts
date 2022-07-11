/* eslint-disable */
import { generatePdfResume } from '../../../../../libs/markdown-to-pdf/src/lib/markdown-to-pdf';
import { parseResume } from '../../../../../libs/markdown-to-pdf/src/utilities/parse-mdast';

export const parseResumeData = (data: Queries.ResumeQueryQuery) => {
  const { work, education, skills } = data;
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
        content: parseResume(mdxAST as any),
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
        content: parseResume(mdxAST as any),
        rawContent: mdxAST,
        // subtitle: displayDate,
      };
    }),
    skills: skills.group.map((category) => ({
      category: category.fieldValue,
      skills: category.edges.map((sk) => sk.node.skill),
    })),
  };
  return { parsedData, doc: generatePdfResume(parsedData as any) };
};
