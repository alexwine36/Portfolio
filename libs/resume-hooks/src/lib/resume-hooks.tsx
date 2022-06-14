import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ResumeHooksProps {}

const StyledResumeHooks = styled.div`
  color: pink;
`;

export function ResumeHooks(props: ResumeHooksProps) {
  return (
    <StyledResumeHooks>
      <h1>Welcome to ResumeHooks!</h1>
    </StyledResumeHooks>
  );
}

export default ResumeHooks;
