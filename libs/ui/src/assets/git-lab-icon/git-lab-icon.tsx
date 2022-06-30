import styled from '@emotion/styled';
import { SVGProps } from 'react';

/* eslint-disable-next-line */
export interface GitLabIconProps extends SVGProps<SVGSVGElement> {}

const StyledGitLabIcon = styled.svg`
  // color: pink;
  width: 1em;
  height: 1em;
`;

export function GitLabIcon(props: GitLabIconProps) {
  return (
    <StyledGitLabIcon
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <title>gitlab</title>
      <path
        fill="currentColor"
        d="M1.625 11.031l12.375 15.859-13.563-9.844c-0.375-0.281-0.531-0.766-0.391-1.203l1.578-4.813zM8.844 11.031h10.313l-5.156 15.859zM5.75 1.469l3.094 9.562h-7.219l3.094-9.562c0.172-0.484 0.859-0.484 1.031 0zM26.375 11.031l1.578 4.813c0.141 0.438-0.016 0.922-0.391 1.203l-13.563 9.844 12.375-15.859zM26.375 11.031h-7.219l3.094-9.562c0.172-0.484 0.859-0.484 1.031 0z"
      ></path>
    </StyledGitLabIcon>
  );
}

export default GitLabIcon;