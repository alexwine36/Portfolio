import styled from '@emotion/styled';
import { FooterDisplay } from '@portfolio/ui';
import useGenerateResume from '../../hooks/use-generate-resume/use-generate-resume';
import NavigationLayout from '../navigation-layout/navigation-layout';

/* eslint-disable-next-line */
export interface PageLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const StyledPageLayout = styled.div`
  // color: pink;
`;

export function PageLayout(props: PageLayoutProps) {
  const { children } = props;
  const { instance } = useGenerateResume();
  return (
    <StyledPageLayout>
      <NavigationLayout />
      {children}
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
    </StyledPageLayout>
  );
}

export default PageLayout;
