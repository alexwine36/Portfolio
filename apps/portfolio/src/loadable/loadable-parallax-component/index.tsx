import styled from '@emotion/styled';
import { ParallaxBackground } from '../../../../../libs/ui/src';
import { UsePage } from '../../hooks/use-pages/use-pages';

/* eslint-disable-next-line */
export interface LoadableParallaxComponentProps {
  page: UsePage;
  children: React.ReactElement;
}

const StyledLoadableParallaxComponent = styled.div`
  /* color: pink; */
`;

export function LoadableParallaxComponent(
  props: LoadableParallaxComponentProps
) {
  const { page, children } = props;
  return (
    <ParallaxBackground predefined={page.background}>
      {children}
    </ParallaxBackground>
  );
}

export default LoadableParallaxComponent;
