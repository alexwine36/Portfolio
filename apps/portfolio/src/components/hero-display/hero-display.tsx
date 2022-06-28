import styled from '@emotion/styled';
import { HeroDisplay as BaseHeroDisplay } from '@portfolio/ui';
/* eslint-disable-next-line */
export interface HeroDisplayProps {
  title?: string;
}

const StyledHeroDisplay = styled.div`
  // color: pink;
  background-image: url(/polygon.svg);
  background-position: right;
  background-size: cover;
  // height: 90vh;
`;

export function HeroDisplay(props: HeroDisplayProps) {
  return (
    <StyledHeroDisplay>
      <BaseHeroDisplay hideSvg />
    </StyledHeroDisplay>
  );
}

export default HeroDisplay;
