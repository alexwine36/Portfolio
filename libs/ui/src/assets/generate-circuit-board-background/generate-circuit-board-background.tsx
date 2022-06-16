import styled from '@emotion/styled';
import { useTheme } from '@mui/material';

/* eslint-disable-next-line */
export interface GenerateCircuitBoardBackgroundProps {
  width?: number;
  height?: number;
}

const StyledGenerateCircuitBoardBackground = styled.div`
  color: pink;
`;

export function GenerateCircuitBoardBackground(
  props: GenerateCircuitBoardBackgroundProps
) {
  const { width = 1440, height = 1440 } = props;
  const max = Math.max(width, height);
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.success.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={max}
      height={max}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 1440"
    >
      <g mask='url("#SvgjsMask1073")' fill="none">
        <g mask='url("#SvgjsMask1074")'>
          <path
            d="M150.5 322.5L21.5 322.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M741.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM741.75 21.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M666.5 924.5L1139.5 451.5L1139.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M612.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 21.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M408.5 580.5L21.5 580.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M397.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1225.5 838.5L623.5 1440.5L408.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1214.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1268.5 666.5L1139.5 537.5L1139.5 494.5L1354.5 279.5L1440.5 279.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1257.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M107.5 1096.5L193.5 1182.5L838.5 1182.5L881.5 1139.5L881.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M96.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM870.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1440.5 623.5L1268.5 623.5L1182.5 537.5L1182.5 494.5L1354.5 322.5L1397.5 322.5L1440.5 365.5L1440.5 580.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1429.75 623.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1182.5 1268.5L1096.5 1354.5L752.5 1354.5L666.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1171.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M838.5 1268.5L1139.5 1268.5L1182.5 1225.5L1225.5 1225.5L1397.5 1397.5L1440.5 1397.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M827.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 795.5L408.5 881.5L365.5 881.5L150.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM139.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M322.5 193.5L21.5 193.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M311.75 193.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 193.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M365.5 365.5L365.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M354.75 365.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM354.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M236.5 1311.5L709.5 1311.5L795.5 1225.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M225.75 1311.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM784.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M752.5 1053.5L752.5 924.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M741.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM741.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1096.5 537.5L1440.5 881.5L1440.5 1096.5L1397.5 1139.5L1397.5 1354.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1085.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1386.75 1354.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1139.5 1397.5L1182.5 1354.5L1311.5 1354.5L1397.5 1440.5L1440.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1128.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M838.5 64.5L881.5 21.5L1225.5 21.5L1440.5 236.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M827.75 64.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 666.5L580.5 666.5L623.5 623.5L666.5 623.5L1096.5 193.5L1096.5 64.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1085.75 64.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1053.5 408.5L1096.5 365.5L1096.5 236.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1042.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1085.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M451.5 107.5L107.5 451.5L107.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M440.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM96.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M365.5 924.5L193.5 1096.5L193.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M354.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM182.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M838.5 1440.5L709.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M827.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM698.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1182.5 709.5L1053.5 580.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1171.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1042.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M537.5 924.5L494.5 881.5L451.5 881.5L236.5 1096.5L236.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M526.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1268.5 21.5L1440.5 193.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1257.75 21.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 193.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M150.5 64.5L236.5 150.5L365.5 150.5L451.5 64.5L537.5 64.5L666.5 193.5L666.5 408.5L580.5 494.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M139.75 64.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM569.75 494.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1311.5 193.5L1354.5 193.5L1397.5 236.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1300.75 193.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1386.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M365.5 623.5L21.5 623.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M354.75 623.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 623.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M623.5 580.5L451.5 408.5L408.5 408.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M612.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M752.5 795.5L494.5 1053.5L408.5 1053.5L322.5 1139.5L279.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M741.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM268.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M795.5 537.5L795.5 752.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M784.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM784.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M967.5 1440.5L1010.5 1397.5L1053.5 1397.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M956.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1042.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M924.5 537.5L838.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M913.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM827.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M365.5 752.5L408.5 795.5L408.5 838.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M354.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M193.5 666.5L193.5 838.5L279.5 924.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M182.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM268.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M580.5 279.5L451.5 279.5L408.5 322.5L408.5 365.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M569.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 365.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M623.5 967.5L451.5 1139.5L365.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M612.75 967.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM354.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M236.5 1225.5L21.5 1225.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M225.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M967.5 881.5L881.5 795.5L881.5 752.5L1010.5 623.5L1053.5 623.5L1397.5 967.5L1397.5 1096.5L1354.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M956.75 881.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1343.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M623.5 236.5L365.5 236.5L150.5 451.5L150.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M612.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM139.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1053.5 1225.5L1139.5 1225.5L1354.5 1010.5L1354.5 967.5L1268.5 881.5L1225.5 881.5L1053.5 1053.5L1053.5 1139.5L967.5 1225.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1042.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM956.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1053.5 795.5L1096.5 795.5L1139.5 838.5L1182.5 838.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1042.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1171.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1096.5 752.5L1139.5 795.5L1182.5 795.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1085.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1171.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M365.5 1354.5L365.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M354.75 1354.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM354.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M322.5 494.5L236.5 408.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M311.75 494.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1268.5 1225.5L1354.5 1225.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1257.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1343.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1053.5 451.5L838.5 666.5L838.5 709.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1042.75 451.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM827.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1182.5 365.5L1182.5 150.5L1225.5 107.5L1268.5 107.5L1311.5 150.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1171.75 365.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1300.75 150.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M838.5 107.5L881.5 64.5L1053.5 64.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M827.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1042.75 64.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1354.5 236.5L1225.5 236.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1343.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1214.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 1397.5L537.5 1354.5L666.5 1354.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 1354.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M150.5 967.5L193.5 924.5L193.5 881.5L21.5 709.5L21.5 666.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M139.75 967.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1268.5 537.5L1268.5 451.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1257.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1257.75 451.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M64.5 1397.5L107.5 1440.5L150.5 1440.5L193.5 1397.5L193.5 1268.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M53.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM182.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M322.5 1440.5L322.5 1354.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M311.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM311.75 1354.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M580.5 709.5L623.5 666.5L752.5 666.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M569.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM741.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1010.5 795.5L1096.5 881.5L1096.5 924.5L924.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M999.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM913.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M580.5 193.5L494.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M569.75 193.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM483.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M150.5 1397.5L150.5 1311.5L107.5 1268.5L21.5 1268.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M139.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M924.5 1182.5L1010.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M913.75 1182.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM999.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M451.5 494.5L494.5 494.5L580.5 580.5L580.5 623.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M440.75 494.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM569.75 623.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1225.5 1182.5L1354.5 1053.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1214.75 1182.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1343.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M193.5 64.5L236.5 107.5L279.5 107.5L322.5 64.5L408.5 64.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M182.75 64.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 64.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M193.5 537.5L193.5 451.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M182.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM182.75 451.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1010.5 408.5L1010.5 322.5L1053.5 279.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M999.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1042.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1397.5 580.5L1268.5 580.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1386.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1257.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M838.5 150.5L838.5 279.5L795.5 322.5L795.5 451.5L666.5 580.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M827.75 150.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M107.5 1311.5L107.5 1397.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M96.75 1311.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM96.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M881.5 279.5L838.5 322.5L838.5 408.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M870.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM827.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 1268.5L236.5 1268.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M752.5 1096.5L795.5 1139.5L838.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M741.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM827.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1225.5 709.5L1397.5 881.5L1397.5 924.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1214.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1386.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M967.5 967.5L795.5 967.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M956.75 967.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM784.75 967.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M21.5 795.5L64.5 795.5L150.5 881.5L150.5 924.5L21.5 1053.5L21.5 1182.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M10.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 1182.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M408.5 1010.5L322.5 1096.5L279.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M397.75 1010.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM268.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M881.5 193.5L881.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M870.75 193.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM870.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M322.5 322.5L365.5 322.5L408.5 279.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M311.75 322.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M64.5 1053.5L107.5 1010.5L193.5 1010.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M53.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM182.75 1010.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 1139.5L580.5 1139.5L623.5 1096.5L709.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM698.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M64.5 408.5L21.5 451.5L21.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M53.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M365.5 795.5L236.5 666.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M354.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1354.5 408.5L1311.5 451.5L1311.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1343.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1300.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M537.5 1225.5L279.5 1225.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M526.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM268.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1096.5 1182.5L1096.5 1053.5L1225.5 924.5L1268.5 924.5L1311.5 967.5L1311.5 1010.5L1139.5 1182.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1085.75 1182.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1128.75 1182.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M279.5 752.5L365.5 838.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M268.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM354.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M193.5 150.5L21.5 150.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M182.75 150.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 150.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M924.5 1440.5L881.5 1440.5L838.5 1397.5L752.5 1397.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M913.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM741.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M967.5 451.5L924.5 494.5L881.5 494.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M956.75 451.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM870.75 494.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M150.5 107.5L21.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M139.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1010.5 838.5L924.5 752.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M999.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM913.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M580.5 752.5L623.5 752.5L666.5 709.5L752.5 709.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M569.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM741.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M451.5 451.5L408.5 494.5L408.5 537.5L494.5 623.5L537.5 623.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M440.75 451.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM526.75 623.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M623.5 1053.5L580.5 1053.5L537.5 1096.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M612.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM526.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M580.5 1268.5L666.5 1268.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M569.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 1268.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M21.5 838.5L107.5 924.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M10.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM96.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M924.5 279.5L924.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M913.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM913.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1440.5 709.5L1397.5 752.5L1397.5 795.5L1440.5 838.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1429.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M537.5 795.5L537.5 881.5L580.5 924.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M526.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM569.75 924.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M752.5 451.5L666.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M741.75 451.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M924.5 881.5L1010.5 967.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M913.75 881.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM999.75 967.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M666.5 1053.5L666.5 967.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M655.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 967.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M881.5 1053.5L838.5 1010.5L795.5 1010.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M870.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM784.75 1010.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1053.5 107.5L967.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1042.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM956.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1311.5 1397.5L1182.5 1397.5L1139.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1300.75 1397.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1128.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M580.5 795.5L623.5 795.5L666.5 838.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M569.75 795.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM655.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M193.5 1440.5L236.5 1397.5L236.5 1354.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M182.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 1354.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M795.5 150.5L795.5 279.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M784.75 150.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM784.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 408.5L494.5 365.5L451.5 322.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 408.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM440.75 322.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M107.5 365.5L21.5 365.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M96.75 365.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 365.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M279.5 838.5L279.5 795.5L236.5 752.5L236.5 709.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M268.75 838.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM225.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1268.5 1311.5L1182.5 1311.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1257.75 1311.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1171.75 1311.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M64.5 1096.5L64.5 1182.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M53.75 1096.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM53.75 1182.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1311.5 666.5L1311.5 709.5L1354.5 752.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1300.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1343.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M537.5 580.5L494.5 537.5L451.5 537.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M526.75 580.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM440.75 537.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M666.5 21.5L709.5 64.5L709.5 150.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M655.75 21.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM698.75 150.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1440.5 1311.5L1440.5 1225.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1429.75 1311.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1429.75 1225.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M150.5 236.5L107.5 279.5L21.5 279.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M139.75 236.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M967.5 709.5L1010.5 666.5L1053.5 666.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M956.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1042.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1311.5 279.5L1225.5 279.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1300.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1214.75 279.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M795.5 21.5L795.5 107.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M784.75 21.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM784.75 107.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M64.5 1354.5L21.5 1397.5L21.5 1440.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M53.75 1354.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM10.75 1440.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M408.5 709.5L365.5 666.5L279.5 666.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M397.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM268.75 666.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M494.5 709.5L451.5 709.5L408.5 752.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M483.75 709.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM397.75 752.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
          <path
            d="M1139.5 1053.5L1139.5 1139.5"
            stroke-width="7.17"
            stroke={primary}
          ></path>
          <path
            d="M1128.75 1053.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0zM1128.75 1139.5 a10.75 10.75 0 1 0 21.5 0 a10.75 10.75 0 1 0 -21.5 0z"
            fill={secondary}
          ></path>
        </g>
      </g>
      <defs>
        <mask id="SvgjsMask1073">
          <rect width="1440" height="1440" fill="#ffffff"></rect>
        </mask>
        <mask id="SvgjsMask1074">
          <rect width="1440" height="1440" fill="white"></rect>
          <path
            d="M145.12 322.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 322.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M747.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM747.12 21.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M661.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1134.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M618.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 21.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M403.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1220.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1263.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M102.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM876.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1435.12 623.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1177.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M833.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM145.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M317.12 193.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 193.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M360.12 365.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM360.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M231.12 1311.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM790.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M747.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM747.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1091.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1392.12 1354.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1134.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M833.12 64.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1091.12 64.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1048.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1091.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M446.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM102.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M360.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM188.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M833.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM704.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1177.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1048.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M532.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1263.12 21.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 193.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M145.12 64.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM575.12 494.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1306.12 193.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1392.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M360.12 623.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 623.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M618.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M747.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM274.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M790.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM790.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M962.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1048.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M919.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM833.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M360.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M188.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM274.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M575.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 365.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M618.12 967.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM360.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M231.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M962.12 881.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1349.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M618.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM145.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1048.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM962.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1048.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1177.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1091.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1177.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M360.12 1354.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM360.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M317.12 494.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1263.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1349.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1048.12 451.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM833.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1177.12 365.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1306.12 150.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M833.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1048.12 64.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1349.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1220.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 1354.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M145.12 967.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1263.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1263.12 451.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M59.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM188.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M317.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM317.12 1354.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M575.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM747.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1005.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM919.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M575.12 193.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM489.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M145.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M919.12 1182.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1005.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M446.12 494.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM575.12 623.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1220.12 1182.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1349.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M188.12 64.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 64.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M188.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM188.12 451.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1005.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1048.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1392.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1263.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M833.12 150.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M102.12 1311.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM102.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M876.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM833.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M747.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM833.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1220.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1392.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M962.12 967.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM790.12 967.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M16.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 1182.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M403.12 1010.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM274.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M876.12 193.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM876.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M317.12 322.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M59.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM188.12 1010.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM704.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M59.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M360.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1349.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1306.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M532.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM274.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1091.12 1182.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1134.12 1182.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M274.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM360.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M188.12 150.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 150.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M919.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM747.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M962.12 451.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM876.12 494.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M145.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1005.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM919.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M575.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM747.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M446.12 451.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM532.12 623.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M618.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM532.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M575.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 1268.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M16.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM102.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M919.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM919.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1435.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M532.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM575.12 924.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M747.12 451.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M919.12 881.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1005.12 967.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M661.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 967.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M876.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM790.12 1010.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1048.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM962.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1306.12 1397.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1134.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M575.12 795.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM661.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M188.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 1354.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M790.12 150.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM790.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 408.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM446.12 322.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M102.12 365.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 365.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M274.12 838.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM231.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1263.12 1311.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1177.12 1311.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M59.12 1096.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM59.12 1182.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1306.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1349.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M532.12 580.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM446.12 537.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M661.12 21.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM704.12 150.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1435.12 1311.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1435.12 1225.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M145.12 236.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M962.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1048.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1306.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1220.12 279.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M790.12 21.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM790.12 107.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M59.12 1354.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM16.12 1440.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M403.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM274.12 666.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M489.12 709.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM403.12 752.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
          <path
            d="M1134.12 1053.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0zM1134.12 1139.5 a5.38 5.38 0 1 0 10.76 0 a5.38 5.38 0 1 0 -10.76 0z"
            fill="black"
          ></path>
        </mask>
      </defs>
    </svg>
  );
}

export default GenerateCircuitBoardBackground;
