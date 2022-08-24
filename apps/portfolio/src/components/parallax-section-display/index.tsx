import styled from '@emotion/styled';
import { SectionContainer } from '@portfolio/ui';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { Suspense } from 'react';
import { UsePage } from '../../hooks/use-pages/use-pages';
import { HeroDisplay } from '../display/hero-display/hero-display';
/* eslint-disable-next-line */

const LoadableParallaxComponent = React.lazy(
  () => import('../../loadable/loadable-parallax-component')
);
export interface ParallaxSectionDisplayProps {
  page: UsePage;
  children: React.ReactElement | React.ReactElement[];
  hideHeader?: boolean;
}

const StyledParallaxSectionDisplay = styled.div`
  // color: pink;
`;

const ParallaxFallback = styled.div({
  // display: 'flex',
  // justifyContent: 'center'
});

export function ParallaxSectionDisplay(props: ParallaxSectionDisplayProps) {
  const { page, children, hideHeader } = props;
  return (
    <StyledParallaxSectionDisplay>
      {!hideHeader && (
        <React.Fragment>
          <GatsbySeo title={page.name} />
          <HeroDisplay title={page.name}></HeroDisplay>
        </React.Fragment>
      )}
      <Suspense
        fallback={
          <ParallaxFallback>
            <SectionContainer>{children}</SectionContainer>
          </ParallaxFallback>
        }
      >
        <LoadableParallaxComponent
          page={page}
          // fallback={
          //   <ParallaxFallback>
          //     <SectionContainer>{children}</SectionContainer>
          //   </ParallaxFallback>
          // }
        >
          <SectionContainer>{children}</SectionContainer>
        </LoadableParallaxComponent>
      </Suspense>
    </StyledParallaxSectionDisplay>
  );
}

export default ParallaxSectionDisplay;
