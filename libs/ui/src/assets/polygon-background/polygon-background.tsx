import { useTheme } from '@mui/material';
import { SVGProps } from 'react';

import { hexToRgba } from '../../lib/utilities/hex-to-rgba';
// CREDIT TO https://bgjar.com

/* eslint-disable-next-line */
export interface PolygonBackgroundProps extends SVGProps<SVGSVGElement> {
  mainColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  // transparent
}

export function PolygonBackground(props: PolygonBackgroundProps) {
  const theme = useTheme();
  const {
    mainColor = theme.palette.primary.dark,
    secondaryColor = theme.palette.primary.main,
    accentColor = theme.palette.primary.light,
    ...rest
  } = props;

  // const secondaryColor = theme.palette.secondary.dark;
  // const accentColor = theme.palette.secondary.main;
  const transparentSecondaryColor = hexToRgba(secondaryColor, 0.25);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      {...rest}
    >
      <g mask='url("#a")' fill="none">
        <path
          d="m-77.56 405.45-8.73 154.46M-77.56 405.45l150.14-60.11M-77.56 405.45 63.18 508.69M-86.29 559.91l13.48 130.73M-86.29 559.91l149.47-51.22M-86.29 559.91l191.07 111.18M-86.29 559.91 72.58 345.34M-72.81 690.64l177.59-19.55M-72.81 690.64 63.18 508.69M-72.81 690.64l-4.75-285.19M-72.81 690.64l145.39-345.3M72.58 345.34l-9.4 163.35M72.58 345.34l178.21-7.46M72.58 345.34l276.44 30.56M63.18 508.69l41.6 162.4M104.78 671.09l279.13 14.34M104.78 671.09-77.56 405.45M104.78 671.09l-32.2-325.75M250.79 337.88l98.23 38.02M349.02 375.9l185.64 2.04M349.02 375.9l163.14 163.94M349.02 375.9l34.89 309.53M383.91 685.43l163.45-19.51M383.91 685.43l128.25-145.59M383.91 685.43l275.97-42.78M383.91 685.43l272.18-145.3M534.66 377.94l-22.5 161.9M512.16 539.84l35.2 126.08M512.16 539.84l143.93.29M547.36 665.92l112.52-23.27M547.36 665.92l108.73-125.79M547.36 665.92l247.87 5.1M677.83 256.62l29.58 147.88M677.83 256.62l127.79 99.06M677.83 256.62 534.66 377.94M677.83 256.62l-21.74 283.51M677.83 256.62 795.88 550.2M677.83 256.62 512.16 539.84M707.41 404.5l98.21-48.82M707.41 404.5l-51.32 135.63M707.41 404.5l88.47 145.7M656.09 540.13l3.79 102.52M656.09 540.13l139.79 10.07M659.88 642.65l135.35 28.37M795.88 550.2l-.65 120.82M795.88 550.2l152.88-9.38M795.88 550.2l-136 92.45M795.88 550.2l9.74-194.52M978.45-53.45l26.95 105.03M1005.4 51.58l110.28 21.41M1005.4 51.58l112.67-98.65M1005.4 51.58 1095.88 244M1005.4 51.58l244.64 26.23M1005.4 51.58l273.55-128.61M985.4 396.22l141.02-35.61M985.4 396.22l-36.64 144.6M985.4 396.22l-179.78-40.54M985.4 396.22 1095.88 244M985.4 396.22l119.34 158.31M985.4 396.22 795.88 550.2M948.76 540.82l13.5 147.95M962.26 688.77l-167.03-17.75M962.26 688.77l190.52-27.9M1118.07-47.07l-2.39 120.06M1118.07-47.07l-139.62-6.38M1118.07-47.07l160.88-29.96M1118.07-47.07l131.97 124.88M1118.07-47.07 1095.88 244M1115.68 72.99l134.36 4.82M1115.68 72.99 1095.88 244M1115.68 72.99 978.45-53.45M1115.68 72.99l163.27-150.02M1095.88 244l30.54 116.61M1095.88 244l205.49-39.14M1095.88 244l154.16-166.19M1126.42 360.61l153.52 31.14M1126.42 360.61l-21.68 193.92M1104.74 554.53l48.04 106.34M1104.74 554.53l153.13 6.83M1104.74 554.53l-155.98-13.71M1104.74 554.53 962.26 688.77M1152.78 660.87l105.09-99.51M1278.95-77.03l137.92-11.88M1278.95-77.03l-28.91 154.84M1278.95-77.03l132.52 148.61M1250.04 77.81l51.33 127.05M1250.04 77.81l161.43-6.23M1301.37 204.86l137.92 17.09M1301.37 204.86l110.1-133.28M1279.94 391.75l-22.07 169.61M1279.94 391.75l170.41-43.97M1279.94 391.75l21.43-186.89M1279.94 391.75l161.45 152.91M1279.94 391.75l159.35-169.8M1257.87 561.36l183.52-16.7M1257.87 561.36l161.77 140.89M1416.87-88.91l-5.4 160.49M1416.87-88.91l182.86 8.1M1416.87-88.91l139.19 142.54M1416.87-88.91 1250.04 77.81M1411.47 71.58l144.59-17.95M1411.47 71.58l27.82 150.37M1439.29 221.95l11.06 125.83M1439.29 221.95l165.16-2.35M1439.29 221.95l116.77-168.32M1450.35 347.78l156.56 57.55M1450.35 347.78l-8.96 196.88M1450.35 347.78l154.1-128.18M1450.35 347.78l-148.98-142.92M1441.39 544.66l-21.75 157.59M1441.39 544.66l159.53-18.75M1419.64 702.25l191.41-36.64M1419.64 702.25l181.28-176.34M1419.64 702.25l-266.86-41.38M1599.73-80.81l-43.67 134.44M1599.73-80.81 1411.47 71.58M1599.73-80.81l4.72 300.41M1556.06 53.63l48.39 165.97M1604.45 219.6l2.46 185.73M1604.45 219.6 1411.47 71.58M1606.91 405.33l-5.99 120.58M1606.91 405.33l-165.52 139.33M1611.05 665.61l-10.13-139.7"
          stroke={mainColor}
          strokeWidth={1.5}
        />
        <circle r={5} cx={-77.56} cy={405.45} fill={mainColor} />
        <circle r={5} cx={-86.29} cy={559.91} fill={mainColor} />
        <circle r={5} cx={-72.81} cy={690.64} fill={mainColor} />
        <circle r={5} cx={72.58} cy={345.34} fill={mainColor} />
        <circle r={5} cx={63.18} cy={508.69} fill={mainColor} />
        <circle r={5} cx={104.78} cy={671.09} fill={mainColor} />
        <circle r={5} cx={250.79} cy={337.88} fill={mainColor} />
        <circle r={5} cx={349.02} cy={375.9} fill={mainColor} />
        <circle r={5} cx={383.91} cy={685.43} fill={mainColor} />
        <circle r={5} cx={534.66} cy={377.94} fill={mainColor} />
        <circle r={5} cx={512.16} cy={539.84} fill={mainColor} />
        <circle r={5} cx={547.36} cy={665.92} fill={mainColor} />
        <circle r={5} cx={677.83} cy={256.62} fill={mainColor} />
        <circle r={5} cx={707.41} cy={404.5} fill={mainColor} />
        <circle r={5} cx={656.09} cy={540.13} fill={mainColor} />
        <circle r={5} cx={659.88} cy={642.65} fill={mainColor} />
        <circle r={5} cx={805.62} cy={355.68} fill={mainColor} />
        <circle r={5} cx={795.88} cy={550.2} fill={mainColor} />
        <circle r={5} cx={795.23} cy={671.02} fill={mainColor} />
        <circle r={5} cx={978.45} cy={-53.45} fill={mainColor} />
        <circle r={5} cx={1005.4} cy={51.58} fill={mainColor} />
        <circle r={5} cx={985.4} cy={396.22} fill={mainColor} />
        <circle r={5} cx={948.76} cy={540.82} fill={mainColor} />
        <circle r={5} cx={962.26} cy={688.77} fill={mainColor} />
        <circle r={5} cx={1118.07} cy={-47.07} fill={mainColor} />
        <circle r={5} cx={1115.68} cy={72.99} fill={mainColor} />
        <circle r={5} cx={1095.88} cy={244} fill={mainColor} />
        <circle r={5} cx={1126.42} cy={360.61} fill={mainColor} />
        <circle r={5} cx={1104.74} cy={554.53} fill={mainColor} />
        <circle r={5} cx={1152.78} cy={660.87} fill={mainColor} />
        <circle r={5} cx={1278.95} cy={-77.03} fill={mainColor} />
        <circle r={5} cx={1250.04} cy={77.81} fill={mainColor} />
        <circle r={5} cx={1301.37} cy={204.86} fill={mainColor} />
        <circle r={5} cx={1279.94} cy={391.75} fill={mainColor} />
        <circle r={5} cx={1257.87} cy={561.36} fill={mainColor} />
        <circle r={5} cx={1416.87} cy={-88.91} fill={mainColor} />
        <circle r={5} cx={1411.47} cy={71.58} fill={mainColor} />
        <circle r={5} cx={1439.29} cy={221.95} fill={mainColor} />
        <circle r={5} cx={1450.35} cy={347.78} fill={mainColor} />
        <circle r={5} cx={1441.39} cy={544.66} fill={mainColor} />
        <circle r={5} cx={1419.64} cy={702.25} fill={mainColor} />
        <circle r={5} cx={1599.73} cy={-80.81} fill={mainColor} />
        <circle r={5} cx={1556.06} cy={53.63} fill={mainColor} />
        <circle r={5} cx={1604.45} cy={219.6} fill={mainColor} />
        <circle r={5} cx={1606.91} cy={405.33} fill={mainColor} />
        <circle r={5} cx={1600.92} cy={525.91} fill={mainColor} />
        <circle r={5} cx={1611.05} cy={665.61} fill={mainColor} />
        <path
          d="m93.66 535.6 111.89 7.76M93.66 535.6 44.58 684.81M93.66 535.6l-175.12-10.79M93.66 535.6l141.62 142.15M93.66 535.6-69.98 703.83M396.15 503.56l121.76 45.28M396.15 503.56 375.1 657.83M396.15 503.56l-190.6 39.8M1089.9 538.3l-139.07 22.41M1089.9 538.3l151.32 10.52M1089.9 538.3l36.23 159.92M1089.9 538.3 966.31 689.7M1283.37 93.54l-34.91 98.92M1283.37 93.54l117.73 11.9M1283.37 93.54 1250.7-81.12M1283.37 93.54l137.28-165.48M1283.37 93.54l159.88 159.6M1283.37 93.54l289.68 3.07M1241.22 548.82l24.73-156.2M1443.25 253.14 1421.3 362.9M1443.25 253.14l141.42-49.95M1443.25 253.14l-42.15-147.7M1429.23 538.78l108.28-5.84M1429.23 538.78l124.76 113.17M1429.23 538.78l-7.93-175.88M1429.23 538.78l-188.01 10.04M1429.23 538.78l-122.74 169.48M1587.8-47.91l-14.75 144.52M1587.8-47.91l-167.15-24.03M1587.8-47.91l-186.7 153.35M-81.46 524.81l11.48 179.02M-81.46 524.81l126.04 160M-81.46 524.81l287.01 18.55M-81.46 524.81l316.74 152.94M-69.98 703.83l114.56-19.02M44.58 684.81l190.7-7.06M205.55 543.36l29.73 134.39M205.55 543.36 375.1 657.83M205.55 543.36 44.58 684.81M235.28 677.75l139.82-19.92M375.1 657.83l157.67 51.42M375.1 657.83l142.81-108.99M517.91 548.84l14.86 160.41M532.77 709.25l110.34-18.01M532.77 709.25l151.11-159.66M708.46 405.94l126.39-46.43M708.46 405.94l-24.58 143.65M708.46 405.94l100.27 135.15M708.46 405.94l-190.55 142.9M683.88 549.59l124.85-8.5M683.88 549.59l-40.77 141.65M683.88 549.59l-165.97-.75M643.11 691.24l-125.2-142.4M643.11 691.24l207.99-24.2M834.85 359.51l155.96 4.98M808.73 541.09l42.37 125.95M808.73 541.09l142.1 19.62M851.1 667.04l115.21 22.66M851.1 667.04l99.73-106.33M990.81 364.49l99.09 173.81M990.81 364.49l-39.98 196.22M990.81 364.49l-182.08 176.6M950.83 560.71l15.48 128.99M966.31 689.7l159.82 8.52M966.31 689.7 808.73 541.09M966.31 689.7l274.91-140.88M1126.13 698.22l180.36 10.04M1126.13 698.22l115.09-149.4M1250.7-81.12l169.95 9.18M1248.46 192.46l152.64-87.02M1265.95 392.62l155.35-29.72M1306.49 708.26l-65.27-159.44M1306.49 708.26l247.5-56.31M1306.49 708.26 1089.9 538.3M1420.65-71.94l-19.55 177.38M1420.65-71.94l152.4 168.55M1401.1 105.44l171.95-8.83M1401.1 105.44l183.57 97.75M1573.05 96.61l11.62 106.58M1573.05 96.61l-129.8 156.53M1584.67 203.19l-3.63 158.82M1581.04 362.01l-159.74.89M1537.51 532.94l16.48 119.01M1537.51 532.94l43.53-170.93M1537.51 532.94 1421.3 362.9M1537.51 532.94l-231.02 175.32M1553.99 651.95l27.05-289.94M1553.99 651.95 1421.3 362.9M1553.99 651.95l-312.77-103.13"
          stroke={secondaryColor}
          strokeWidth={1.5}
        />
        <circle r={25} cx={93.66} cy={535.6} fill="url(#b)" />
        <circle r={25} cx={396.15} cy={503.56} fill="url(#b)" />
        <circle r={25} cx={1089.9} cy={538.3} fill="url(#b)" />
        <circle r={25} cx={1283.37} cy={93.54} fill="url(#b)" />
        <circle r={25} cx={1241.22} cy={548.82} fill="url(#b)" />
        <circle r={25} cx={1443.25} cy={253.14} fill="url(#b)" />
        <circle r={25} cx={1429.23} cy={538.78} fill="url(#b)" />
        <circle r={25} cx={1587.8} cy={-47.91} fill="url(#b)" />
        <circle r={5} cx={-81.46} cy={524.81} fill={secondaryColor} />
        <circle r={5} cx={-69.98} cy={703.83} fill={secondaryColor} />
        <circle r={5} cx={44.58} cy={684.81} fill={secondaryColor} />
        <circle r={5} cx={205.55} cy={543.36} fill={secondaryColor} />
        <circle r={5} cx={235.28} cy={677.75} fill={secondaryColor} />
        <circle r={5} cx={375.1} cy={657.83} fill={secondaryColor} />
        <circle r={5} cx={517.91} cy={548.84} fill={secondaryColor} />
        <circle r={5} cx={532.77} cy={709.25} fill={secondaryColor} />
        <circle r={5} cx={708.46} cy={405.94} fill={secondaryColor} />
        <circle r={5} cx={683.88} cy={549.59} fill={secondaryColor} />
        <circle r={5} cx={643.11} cy={691.24} fill={secondaryColor} />
        <circle r={5} cx={834.85} cy={359.51} fill={secondaryColor} />
        <circle r={5} cx={808.73} cy={541.09} fill={secondaryColor} />
        <circle r={5} cx={851.1} cy={667.04} fill={secondaryColor} />
        <circle r={5} cx={990.81} cy={364.49} fill={secondaryColor} />
        <circle r={5} cx={950.83} cy={560.71} fill={secondaryColor} />
        <circle r={5} cx={966.31} cy={689.7} fill={secondaryColor} />
        <circle r={5} cx={1126.13} cy={698.22} fill={secondaryColor} />
        <circle r={5} cx={1250.7} cy={-81.12} fill={secondaryColor} />
        <circle r={5} cx={1248.46} cy={192.46} fill={secondaryColor} />
        <circle r={5} cx={1265.95} cy={392.62} fill={secondaryColor} />
        <circle r={5} cx={1306.49} cy={708.26} fill={secondaryColor} />
        <circle r={5} cx={1420.65} cy={-71.94} fill={secondaryColor} />
        <circle r={5} cx={1401.1} cy={105.44} fill={secondaryColor} />
        <circle r={5} cx={1421.3} cy={362.9} fill={secondaryColor} />
        <circle r={5} cx={1573.05} cy={96.61} fill={secondaryColor} />
        <circle r={5} cx={1584.67} cy={203.19} fill={secondaryColor} />
        <circle r={5} cx={1581.04} cy={362.01} fill={secondaryColor} />
        <circle r={5} cx={1537.51} cy={532.94} fill={secondaryColor} />
        <circle r={5} cx={1553.99} cy={651.95} fill={secondaryColor} />
      </g>
      <defs>
        <radialGradient id="b">
          <stop stopColor="#fff" offset={0.1} />
          <stop stopColor={accentColor} offset={0.2} />
          <stop stopColor={transparentSecondaryColor} offset={1} />
        </radialGradient>
        <mask id="a">
          <path fill={theme.palette.text.disabled} d="M0 0h1440v560H0z" />
        </mask>
      </defs>
    </svg>
  );
}

export default PolygonBackground;
