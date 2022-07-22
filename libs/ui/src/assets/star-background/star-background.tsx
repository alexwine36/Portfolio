import { css, keyframes } from '@emotion/react';
import { styled } from '@mui/material';
import { SizeMe } from 'react-sizeme';
import { Stars } from './generate-shadows';

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
