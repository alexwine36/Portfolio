import styled from '@emotion/styled';
import useGenerateResume from '../../../hooks/use-generate-resume/use-generate-resume';

/* eslint-disable-next-line */
export interface ResumeContentPageProps {}

const StyledResumeContentPage = styled.div`
  /* color: pink; */
`;

export function ResumeContentPage(props: ResumeContentPageProps) {
  const { parsedData } = useGenerateResume();
  const { work } = parsedData;
  console.log(parsedData);

  return (
    <StyledResumeContentPage>
      {work.map((w) => {
        return (
          <div>
            <h5>
              {w.subtitle} {' | '}
              {w.title}
            </h5>
            <ul
              style={{
                listStyleType: 'none',
              }}
            >
              {w.content.map((c) => {
                return <li>- {c}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </StyledResumeContentPage>
  );
}

export default ResumeContentPage;
