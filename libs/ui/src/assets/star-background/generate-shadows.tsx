import { styled } from '@mui/material';
import random from 'random';
export type Dimension = { width?: number | null; height?: number | null };

export const generateShadows = (val: number, size: number, dim: Dimension) => {
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

export const Stars = styled('div')<{
  value: number;
  size?: number;
  dim: Dimension;
}>(({ value, size, dim }) => {
  const s = size || 1;
  const shadows = generateShadows(value, s, dim);

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
});
