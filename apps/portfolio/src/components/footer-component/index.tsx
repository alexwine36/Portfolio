import { FooterDisplay } from '@portfolio/ui';

/* eslint-disable-next-line */
export interface FooterComponentProps {}

export function FooterComponent(props: FooterComponentProps) {
  return (
    <FooterDisplay
      links={[
        {
          display: 'Resume',
          link: '/static/resume.pdf',
        },
        {
          display: 'Admin',
          link: '/admin',
        },
        {
          display: 'Documentation',
          link: 'https://alexwine36.github.io/Portfolio/docs',
        },
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
      ]}
    ></FooterDisplay>
  );
}

export default FooterComponent;
