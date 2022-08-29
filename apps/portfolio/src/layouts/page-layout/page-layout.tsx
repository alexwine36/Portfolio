import styled from '@emotion/styled';
import React from 'react';
import NavigationLayout from '../navigation-layout/navigation-layout';

const FooterComponent = React.lazy(() => import('../footer-component'));

/* eslint-disable-next-line */
export interface PageLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const StyledPageLayout = styled.div`
  // color: pink;
`;

export function PageLayout(props: PageLayoutProps) {
  const { children } = props;

  return (
    <StyledPageLayout>
      <NavigationLayout />
      {children}
      <React.Suspense fallback={<div />}>
        <FooterComponent />
      </React.Suspense>
    </StyledPageLayout>
  );
}

export default PageLayout;
