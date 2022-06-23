import styled from '@emotion/styled';
import { useTheme } from '@mui/material';

/* eslint-disable-next-line */
export interface GenerateSoundwaveBackgroundProps {
  width?: number;
  height?: number;
}

const StyledGenerateSoundwaveBackground = styled.div`
  color: pink;
`;

export function GenerateSoundwaveBackground(
  props: GenerateSoundwaveBackgroundProps
) {
  const theme = useTheme();
  const { width = 1440, height = 560 } = props;
  const max = Math.max(width, height);
  const secondary = theme.palette.secondary.main;
  const primary = theme.palette.primary.main;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={max}
      height={max}
      // preserveAspectRatio="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1037")' fill="none">
        <g transform="translate(0, 0)" strokeLinecap="round">
          <path
            d="M270 210.39 L270 349.61"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M290 123.65 L290 436.36"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M310 248.97 L310 311.02"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M330 173.37 L330 386.63"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M350 217.49 L350 342.51"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M370 196.28 L370 363.73"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M390 156.21 L390 403.79"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M410 147.63 L410 412.38"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M430 111.41 L430 448.59"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M450 134.19 L450 425.81"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M470 211.51 L470 348.49"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M490 190.19 L490 369.81"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M510 169.53 L510 390.47"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M530 197.38 L530 362.62"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M550 182.39 L550 377.61"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M570 221.68 L570 338.32"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M590 218.18 L590 341.82"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M610 202.44 L610 357.56"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M630 258.27 L630 301.73"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M650 248.1 L650 311.89"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M670 162.25 L670 397.75"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M690 156.18 L690 403.82"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M710 209.19 L710 350.81"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M730 130.51 L730 429.49"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M750 254.94 L750 305.06"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M770 139.56 L770 420.44"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M790 241.08 L790 318.92"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M810 164.45 L810 395.55"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M830 192.97 L830 367.03"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M850 253.42 L850 306.58"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M870 131.72 L870 428.27"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M890 134.41 L890 425.6"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M910 126.25 L910 433.75"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path d="M930 205 L930 355" strokeWidth="15" stroke={primary}></path>
          <path
            d="M950 158.57 L950 401.43"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M970 237.11 L970 322.89"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M990 141.46 L990 418.54"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M1010 184.03 L1010 375.98"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M1030 128.6 L1030 431.39"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M1050 213.14 L1050 346.86"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M1070 256.98 L1070 303.02"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M1090 247.6 L1090 312.4"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M1110 227.66 L1110 332.35"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M1130 213.56 L1130 346.44"
            strokeWidth="15"
            stroke={secondary}
          ></path>
          <path
            d="M1150 175.99 L1150 384.01"
            strokeWidth="15"
            stroke={primary}
          ></path>
          <path
            d="M1170 116.44 L1170 443.56"
            strokeWidth="15"
            stroke={primary}
          ></path>
        </g>
      </g>
      <defs>
        <mask id="SvgjsMask1037">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
}

export default GenerateSoundwaveBackground;
