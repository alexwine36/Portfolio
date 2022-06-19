import styled from '@emotion/styled';
import { FooterDisplay } from '@portfolio/ui';
import { Outlet } from 'react-router-dom';
import NavigationLayout from '../navigation-layout/navigation-layout';
/* eslint-disable-next-line */
export interface PageLayoutProps {
  // children: React.ReactElement | React.ReactElement[];
}

const StyledPageLayout = styled.div`
  // color: pink;
`;

export function PageLayout(props: PageLayoutProps) {
  return (
    <StyledPageLayout>
      <NavigationLayout />
      {/* <h1>Welcome to PageLayout!</h1> */}
      <Outlet />

      <FooterDisplay
        links={[
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
    </StyledPageLayout>
  );
}

export default PageLayout;
