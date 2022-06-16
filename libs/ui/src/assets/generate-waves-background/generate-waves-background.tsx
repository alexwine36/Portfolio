import styled from '@emotion/styled';
import { useTheme } from '@mui/material';
import { generateGradientStep } from '../../lib/utilities/functions/generate-gradient';

/* eslint-disable-next-line */
export interface GenerateWavesBackgroundProps {
  width?: number;
  height?: number;
}

const StyledGenerateWavesBackground = styled.div`
  color: pink;
`;

export function GenerateWavesBackground(props: GenerateWavesBackgroundProps) {
  const theme = useTheme();
  const { width = 1440, height = 560 } = props;
  const max = Math.max(width, height);
  const secondary = theme.palette.secondary.main;
  const primary = theme.palette.primary.main;
  const shades = [...Array(3).keys()].map((i) => {
    const { start } = generateGradientStep(primary, -i);
    return start;
  });
  return (
    <svg
      // id="visual"
      viewBox="0 0 900 900"
      width={max}
      height={max}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <rect x="0" y="0" width="900" height="900" fill="none"></rect>
      <path
        d="M600 900L606 885C612 870 624 840 626.5 810C629 780 622 750 602.5 720C583 690 551 660 562.7 630C574.3 600 629.7 570 645.2 540C660.7 510 636.3 480 611 450C585.7 420 559.3 390 561.3 360C563.3 330 593.7 300 598.5 270C603.3 240 582.7 210 591.8 180C601 150 640 120 644.3 90C648.7 60 618.3 30 603.2 15L588 0L900 0L900 15C900 30 900 60 900 90C900 120 900 150 900 180C900 210 900 240 900 270C900 300 900 330 900 360C900 390 900 420 900 450C900 480 900 510 900 540C900 570 900 600 900 630C900 660 900 690 900 720C900 750 900 780 900 810C900 840 900 870 900 885L900 900Z"
        fill={shades[2]}
      ></path>
      <path
        d="M657 900L654.2 885C651.3 870 645.7 840 639.5 810C633.3 780 626.7 750 640.5 720C654.3 690 688.7 660 693.3 630C698 600 673 570 665.7 540C658.3 510 668.7 480 687.3 450C706 420 733 390 750.8 360C768.7 330 777.3 300 779.7 270C782 240 778 210 772 180C766 150 758 120 759.2 90C760.3 60 770.7 30 775.8 15L781 0L900 0L900 15C900 30 900 60 900 90C900 120 900 150 900 180C900 210 900 240 900 270C900 300 900 330 900 360C900 390 900 420 900 450C900 480 900 510 900 540C900 570 900 600 900 630C900 660 900 690 900 720C900 750 900 780 900 810C900 840 900 870 900 885L900 900Z"
        fill={shades[1]}
      ></path>
      <path
        d="M855 900L832.7 885C810.3 870 765.7 840 755.2 810C744.7 780 768.3 750 782.2 720C796 690 800 660 799.5 630C799 600 794 570 780.8 540C767.7 510 746.3 480 757.5 450C768.7 420 812.3 390 816.8 360C821.3 330 786.7 300 764.8 270C743 240 734 210 741.8 180C749.7 150 774.3 120 775.5 90C776.7 60 754.3 30 743.2 15L732 0L900 0L900 15C900 30 900 60 900 90C900 120 900 150 900 180C900 210 900 240 900 270C900 300 900 330 900 360C900 390 900 420 900 450C900 480 900 510 900 540C900 570 900 600 900 630C900 660 900 690 900 720C900 750 900 780 900 810C900 840 900 870 900 885L900 900Z"
        fill={shades[0]}
      ></path>
    </svg>
  );
}

export default GenerateWavesBackground;
