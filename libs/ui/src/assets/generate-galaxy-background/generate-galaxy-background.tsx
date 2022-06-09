import { styled } from '@mui/material';
import { SVGProps } from 'react';
/* eslint-disable-next-line */
export interface GenerateGalaxyBackgroundProps extends SVGProps<SVGSVGElement> {
  background?: string;
  density?: number;
  starColor?: string;
}

export function GenerateGalaxyBackground(props: GenerateGalaxyBackgroundProps) {
  const { background = 'none', density = 0.45, starColor = '#fff' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // width="600"
      // height="600"
      viewBox="0 0 150 150"
      {...props}
    >
      <filter id="i" x="0" y="0">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 0"
        />
      </filter>
      <filter id="n" x="0" y="0">
        <feTurbulence
          type="turbulence"
          baseFrequency=".7"
          result="fuzz"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feComposite
          in="SourceGraphic"
          in2="fuzz"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3={`-${160 - density * 145}`}
          k4=".01"
        />
      </filter>
      <rect width="102%" height="102%" fill={background} />
      <rect
        x="-1%"
        y="-1%"
        width="102%"
        height="102%"
        fill={starColor}
        filter="url(#n)"
        opacity="1"
      />
      <rect
        x="-1%"
        y="-1%"
        width="102%"
        height="102%"
        fill={background}
        filter="url(#i)"
        opacity="1"
      />
    </svg>
  );
}

export const StyledGenerateGalaxyBackground = styled(GenerateGalaxyBackground)`
  z-index: 0;
  position: absolute;
  height: fill-available;
`;

export default GenerateGalaxyBackground;
