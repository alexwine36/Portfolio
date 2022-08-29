import styled from '@emotion/styled';
import { FooterDisplay } from '../../../../../libs/ui/src';
import useGenerateResume from '../../hooks/use-generate-resume/use-generate-resume';
import React from 'react'
/* eslint-disable-next-line */
export interface FooterComponentProps {}

const StyledFooterComponent = styled.div`
  color: pink;
`;

export function FooterComponent(props: FooterComponentProps) {
  const { instance } = useGenerateResume();
  return (
    <FooterDisplay
      links={[
        {
          display: 'Resume',
          link: instance.url,
        },
        // {
        //   display: 'Admin',
        //   link: '/admin',
        // },
        // {
        //   display: 'Documentation',
        //   link: 'https://alexwine36.github.io/Portfolio/',
        // },
      ]}
      social={[
        {
          link: 'https://github.com/alexwine36',
          provider: 'github',
        },
        {
          link: 'https://gitlab.com/alexwine',
          provider: 'gitlab',
        },
        {
          link: 'https://www.linkedin.com/in/alexwine/',
          provider: 'linkedin',
        },
        {
          link: 'https://stackoverflow.com/users/5237963/alex-wine',
          provider: 'stackoverflow',
        },
        // {
        //   link: '/admin',
        //   provider: 'admin',
        // },
      ]}
    ></FooterDisplay>
  );
}

export default FooterComponent;
