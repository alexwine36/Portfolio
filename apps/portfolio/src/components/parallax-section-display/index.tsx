import styled from '@emotion/styled';
import { ParallaxBackground, SectionContainer } from '@portfolio/ui';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { UsePage } from '../../hooks/use-pages/use-pages';
import { HeroDisplay } from '../hero-display/hero-display';
/* eslint-disable-next-line */
export interface ParallaxSectionDisplayProps {
  page: UsePage;
  children: React.ReactElement | React.ReactElement[];
  hideHeader?: boolean;
}

const StyledParallaxSectionDisplay = styled.div`
  // color: pink;
`;

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
      <ParallaxBackground predefined={page.background}>
        <SectionContainer>{children}</SectionContainer>
      </ParallaxBackground>
    </StyledParallaxSectionDisplay>
  );
}

export default ParallaxSectionDisplay;
