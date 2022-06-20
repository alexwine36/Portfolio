import styled from '@emotion/styled';
import { useTheme } from '@mui/material';
import { generateGradient } from '../../lib/utilities/functions/generate-gradient';
import { hexToRgba } from '../../lib/utilities/hex-to-rgba';

/* eslint-disable-next-line */
export interface GenerateMeteorBackgroundProps {}

const StyledGenerateMeteorBackground = styled.div`
  color: pink;
`;

export function GenerateMeteorBackground(props: GenerateMeteorBackgroundProps) {
  const theme = useTheme();

  const { start: primaryStartRaw, end: primaryEnd } = generateGradient(
    theme.palette.primary.main
  );

  const { start: secondaryStartRaw, end: secondaryEnd } = generateGradient(
    theme.palette.primary.dark
  );
  const secondaryStart = hexToRgba(secondaryStartRaw, 0);
  const primaryStart = hexToRgba(primaryStartRaw, 0);

  return (
    // <StyledGenerateMeteorBackground>
    //   <h1>Welcome to GenerateMeteorBackground!</h1>
    // </StyledGenerateMeteorBackground>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1440"
      height="1440"
      preserveAspectRatio="none"
      viewBox="0 0 1440 1440"
    >
      <g mask='url("#SvgjsMask1086")' fill="none">
        <path
          d="M221 970L1216 -25"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M597 294L1331 -440"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M47 330L666 -289"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1368 1226L2378 216"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1090)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M1203 511L2248 -534"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M689 959L-316 1964"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M108 133L673 -432"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M3 825L-520 1348"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M622 239L-244 1105"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M86 583L-525 1194"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1266 329L2138 -543"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M816 740L-43 1599"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M904 355L436 823"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1090)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M258 1042L1154 146"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M980 924L1885 19"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1144 820L753 1211"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M811 920L245 1486"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M406 1109L-611 2126"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M622 1260L-426 2308"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1289 19L371 937"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1180 145L1975 -650"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1090)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M483 1237L-391 2111"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M771 901L1670 2"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M527 1237L1559 205"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1090)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M901 1320L1598 623"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1096 26L1877 -755"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1108 749L1994 -137"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1090)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M396 219L-106 721"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M670 1095L1592 173"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M532 205L-201 938"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M104 817L969 -48"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M1415 329L1964 -220"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M828 45L-159 1032"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1109 392L1542 -41"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M830 404L1779 -545"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M925 887L1718 94"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M414 469L-284 1167"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1364 586L890 1060"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1090)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M495 1026L-203 1724"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M617 834L1128 323"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M639 1198L-261 2098"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1023 560L244 1339"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1088)"
          strokeLinecap="round"
          className="TopRight"
        ></path>
        <path
          d="M1019 36L1849 -794"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M671 13L1626 -942"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M440 1320L981 779"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M651 725L1568 -192"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1298 53L1919 -568"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M876 1190L1514 552"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1089)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1238 252L1790 -300"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M1093 1091L1642 542"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
        <path
          d="M232 1120L959 393"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1087)"
          strokeLinecap="round"
          className="BottomLeft"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1086">
          <rect width="1440" height="1440" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
          id="SvgjsLinearGradient1087"
        >
          <stop stopColor={primaryStart} offset="0"></stop>
          <stop stopColor={primaryEnd} offset="1"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          id="SvgjsLinearGradient1088"
        >
          <stop stopColor={primaryStart} offset="0"></stop>
          <stop stopColor={primaryEnd} offset="1"></stop>
        </linearGradient>
        <linearGradient
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
          id="SvgjsLinearGradient1089"
        >
          <stop stopColor={secondaryStart} offset="0"></stop>
          <stop stopColor={secondaryEnd} offset="1"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          id="SvgjsLinearGradient1090"
        >
          <stop stopColor={secondaryStart} offset="0"></stop>
          <stop stopColor={secondaryEnd} offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GenerateMeteorBackground;
