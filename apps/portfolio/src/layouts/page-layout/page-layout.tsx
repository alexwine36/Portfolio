import styled from '@emotion/styled';

import loadable from '@loadable/component';
import NavigationLayout from '../navigation-layout/navigation-layout';
const FooterComponent = loadable(
  () => import('../../components/footer-component')
);

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
      <FooterComponent />
    </StyledPageLayout>
  );
}

export default PageLayout;
