import { css, keyframes } from '@emotion/react';
import { styled } from '@mui/material';
import random from 'random';
import { SizeMe } from 'react-sizeme';

const animStar = keyframes`
from {
  transform: translateY(0px)
}
to {
  transform: translateY(-2000px)
}
`;
/* eslint-disable-next-line */
export interface StarBackgroundProps {
  children: React.ReactElement | React.ReactElement[];
}

const StyledStarBackground = styled('div')`
  // color: pink;
  overflow: hidden;
`;

type Dimension = { width?: number | null; height?: number | null };

const generateShadows = (val: number, size: number, dim: Dimension) => {
  // const {width = 2000, height = 2000} = dim;
  const w = Math.round(dim.width || 2000);
  const h = Math.round(dim.height || 2000);
  const shadows: string[] = [];
  for (let index = 0; index < val; index++) {
    const shadow = `${random.int(0, w)}px ${random.int(
      0,
      h
    )}px rgba(255,255,255, ${1 / size})`;
    // console.log(shadow);

    shadows.push(shadow);
  }

  return shadows.join(', ');
};
const Stars = styled('div')<{ value: number; size?: number; dim: Dimension }>(
  ({ value, size, dim }) => {
    const s = size || 1;
    const shadows = generateShadows(value, s, dim);
    console.log(shadows);
    console.log(animStar);

    return `


width: ${s}px;
height: ${s}px;
background: transparent;
box-shadow: ${shadows};


&:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: ${s}px;
  height: ${s}px;
  background: transparent;
  box-shadow: ${shadows};
}
`;
  }
);
export function StarBackground(props: StarBackgroundProps) {
  return (
    <SizeMe monitorHeight>
      {({ size }) => (
        <StyledStarBackground>
          {/* <h1>Welcome to StarBackground!</h1> */}
          <Stars
            dim={size}
            css={css`
              animation: ${animStar} ${1 * 50}s linear infinite;
            `}
            value={700}
          ></Stars>
          <Stars
            dim={size}
            value={200}
            size={2}
            css={css`
              animation: ${animStar} ${2 * 50}s linear infinite;
            `}
          ></Stars>
          <Stars
            dim={size}
            value={100}
            size={3}
            css={css`
              animation: ${animStar} ${3 * 50}s linear infinite;
            `}
          ></Stars>
          {props.children}
        </StyledStarBackground>
      )}
    </SizeMe>
  );
}

export default StarBackground;
