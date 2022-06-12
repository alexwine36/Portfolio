import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GeneratePlanetBackgroundProps {}

const StyledGeneratePlanetBackground = styled.div`
  color: pink;
`;

export function GeneratePlanetBackground(props: GeneratePlanetBackgroundProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...{ 'xmlns:svgjs': 'http://svgjs.com/svgjs' }}
      // width="1440"
      // height="560"
      // preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g clip-path='url("#SvgjsClipPath1036")' fill="none">
        <circle
          r="24.36"
          cx="990.87"
          cy="34.13"
          fill="url(#SvgjsLinearGradient1037)"
        ></circle>
        <circle r="54.345" cx="1298.09" cy="333.11" fill="#43468b"></circle>
        <circle
          r="35.545"
          cx="289.05"
          cy="287.22"
          fill="url(#SvgjsLinearGradient1038)"
        ></circle>
        <circle
          r="15.06"
          cx="603.03"
          cy="185.54"
          fill="url(#SvgjsLinearGradient1039)"
        ></circle>
        <circle
          r="45.04"
          cx="756.65"
          cy="225.67"
          fill="url(#SvgjsLinearGradient1040)"
        ></circle>
        <circle r="24.335" cx="1070.08" cy="184.68" fill="#43468b"></circle>
        <circle
          r="46.855"
          cx="1205.2"
          cy="273.37"
          fill="url(#SvgjsLinearGradient1041)"
        ></circle>
        <circle
          r="15.025"
          cx="822.1"
          cy="215.97"
          fill="url(#SvgjsLinearGradient1042)"
        ></circle>
      </g>
      <defs>
        <clipPath id="SvgjsClipPath1036">
          <rect width="1440" height="560" x="0" y="0"></rect>
        </clipPath>
        <linearGradient
          x1="942.15"
          y1="34.13"
          x2="1039.59"
          y2="34.13"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1037"
        >
          <stop stop-color="#84b6e0" offset="0.1"></stop>
          <stop stop-color="#464a8f" offset="0.9"></stop>
        </linearGradient>
        <linearGradient
          x1="217.96"
          y1="287.22"
          x2="360.14"
          y2="287.22"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1038"
        >
          <stop stop-color="#32325d" offset="0.1"></stop>
          <stop stop-color="#424488" offset="0.9"></stop>
        </linearGradient>
        <linearGradient
          x1="572.91"
          y1="185.54"
          x2="633.15"
          y2="185.54"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1039"
        >
          <stop stop-color="#e298de" offset="0.1"></stop>
          <stop stop-color="#484687" offset="0.9"></stop>
        </linearGradient>
        <linearGradient
          x1="666.5699999999999"
          y1="225.66999999999996"
          x2="846.7299999999999"
          y2="225.66999999999996"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1040"
        >
          <stop stop-color="#f29b7c" offset="0.1"></stop>
          <stop stop-color="#7e6286" offset="0.9"></stop>
        </linearGradient>
        <linearGradient
          x1="1111.49"
          y1="273.37"
          x2="1298.91"
          y2="273.37"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1041"
        >
          <stop stop-color="#f29b7c" offset="0.1"></stop>
          <stop stop-color="#7e6286" offset="0.9"></stop>
        </linearGradient>
        <linearGradient
          x1="792.0500000000001"
          y1="215.97"
          x2="852.1500000000001"
          y2="215.97"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1042"
        >
          <stop stop-color="#84b6e0" offset="0.1"></stop>
          <stop stop-color="#464a8f" offset="0.9"></stop>
        </linearGradient>
      </defs>
    </svg>
    // <StyledGeneratePlanetBackground>
    //   <h1>Welcome to GeneratePlanetBackground!</h1>
    // </StyledGeneratePlanetBackground>
  );
}

export default GeneratePlanetBackground;
