// import styled from '@emotion/styled';
import { styled, useTheme } from '@mui/material';
import random from 'random';
import { SVGProps } from 'react';
import seedrandom from 'seedrandom';
import { generateGradient } from '../../lib/utilities/functions/generate-gradient';
/* eslint-disable-next-line */
export interface GeneratePlanetBackgroundProps extends SVGProps<SVGSVGElement> {
  size?: {
    width: number;
    height: number;
  };
}

export const StyledGeneratePlanetBackground = styled(GeneratePlanetBackground)(
  ({ theme }) => `

`
);

export const StyledBackgroundContainer = styled('div')(
  ({ theme }) => `
  position: absolute;
  `
);

const randomize = (data: { min: number; max: number }, seed?: string) => {
  if (seed) {
    random.use((seedrandom as any)(seed));
  }
  const { min, max } = data;
  return random.float(min, max);
};
const randomItem = <T,>(arr: T[], seed?: string) => {
  if (seed) {
    random.use((seedrandom as any)(seed));
  }
  const max = arr.length;
  const index = random.int(0, max - 1);
  return arr[index];
};

export function GeneratePlanetBackground(props: GeneratePlanetBackgroundProps) {
  const size = 560;
  const count = random.int(4, 6);
  const baseSeed = randomize({
    min: 0,
    max: size,
  });

  const theme = useTheme();
  const circleArray = [...Array(count).keys()];

  const gradientCount = 6;

  const fillOptions: string[] = [
    // 'SvgjsLinearGradient1037',
    // 'SvgjsLinearGradient1038',
    // 'SvgjsLinearGradient1039',
    // 'SvgjsLinearGradient1040',
    // 'SvgjsLinearGradient1041',
    // 'SvgjsLinearGradient1042',
  ];

  const linearGradients = [...Array(gradientCount).keys()].map((key) => {
    const randomLoc = (seed: string) =>
      randomize({ min: 0, max: size }, `${baseSeed}-position-${key}-${seed}`);

    const colorOptions = [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.error.main,
      theme.palette.info.main,
    ];

    const { start, end } = generateGradient(
      randomItem(colorOptions, `${baseSeed}-${key}`)
    );

    const id = `SvgjsLinearGradient10${key}`;
    fillOptions.push(id);

    return {
      x1: randomLoc('x1'),
      y1: randomLoc('y1'),
      x2: randomLoc('x2'),
      y2: randomLoc('y2'),
      gradientUnits: 'userSpaceOnUse',
      id: id,
      color: {
        start,
        end,
      },
    };
    // return (
    //   <linearGradient
    //     x1={randomLoc('x1')}
    //     y1={randomLoc('y1')}
    //     x2={randomLoc('x2')}
    //     y2={randomLoc('y2')}
    //     gradientUnits="userSpaceOnUse"
    //     id={id}
    //   >
    //     <stop stopColor={start} offset="0.1"></stop>
    //     <stop stopColor={end} offset="0.9"></stop>
    //   </linearGradient>
    // );
  });

  const randomPosition = (idx: string, radius: number) =>
    randomize(
      { min: 0 + radius, max: size - radius },
      `${baseSeed}-position-${idx}`
    );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...{ 'xmlns:svgjs': 'http://svgjs.com/svgjs' }}
      // width="1440"
      // height="560"
      // preserveAspectRatio="none"
      viewBox={`0 0 ${size} ${size}`}
      {...props}
    >
      <g clipPath='url("#SvgjsClipPath1036")' fill="none">
        {circleArray.map((idx) => {
          const radius = randomize({
            min: size / (count * 4),
            max: size / (count * 2),
          });
          return (
            <circle
              key={idx}
              r={radius}
              cx={randomPosition(`${baseSeed}-${idx}-x`, radius)}
              cy={randomPosition(`${baseSeed}-${idx}-y`, radius)}
              fill={`url(#${randomItem(fillOptions)})`}
            ></circle>
          );
        })}
      </g>
      <defs>
        <clipPath id="SvgjsClipPath1036">
          <rect width={size} height={size} x="0" y="0"></rect>
        </clipPath>
        {linearGradients.map((gradient, idx) => {
          const { color, ...rest } = gradient;
          const { start, end } = color;
          return (
            <linearGradient {...rest} key={idx}>
              <stop stopColor={start} offset="0.1"></stop>
              <stop stopColor={end} offset="0.9"></stop>
            </linearGradient>
          );
        })}
      </defs>
    </svg>
    // <StyledGeneratePlanetBackground>
    //   <h1>Welcome to GeneratePlanetBackground!</h1>
    // </StyledGeneratePlanetBackground>
  );
}

export default GeneratePlanetBackground;
