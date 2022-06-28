import styled from '@emotion/styled';
import { ParallaxBackground, SectionContainer } from '@portfolio/ui';
import { PageData } from '../../utilities/pages';
import { HeroDisplay } from '../hero-display/hero-display';
/* eslint-disable-next-line */
export interface ParallaxSectionDisplayProps {
  page: PageData;
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
      {!hideHeader && <HeroDisplay title={page.name}></HeroDisplay>}
      <ParallaxBackground predefined={page.background}>
        <SectionContainer>{children}</SectionContainer>
      </ParallaxBackground>
    </StyledParallaxSectionDisplay>
  );
}

export default ParallaxSectionDisplay;