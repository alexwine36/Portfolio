import { styled } from '@mui/material';
import { Background, Parallax } from 'react-parallax';
import { SizeMe } from 'react-sizeme';
/* eslint-disable-next-line */
export interface ParallaxBackgroundProps {
  image: React.ReactElement;
  children: React.ReactElement;
}

const Bg: any = Background;

const StyledParallaxBackground = styled('div')(
  (props) => `
// color: pink;

div > div.react-parallax-background-children {
  height: fill-available !important;
  width: 100%;
}
// div > div.react-parallax-background-children {
//   height: fill-available !important;
//   width: auto;
// }
`
);

const StyledBackground = styled('div')<{ height?: number | null }>(
  (props) => `
  display: flex;
  justify-content: center;
  overflow: auto;
> svg {
  height: ${props.height}px;
  overflow: unset;
}
`
);

export function ParallaxBackground(props: ParallaxBackgroundProps) {
  const { image, children } = props;

  return (
    <StyledParallaxBackground>
      <SizeMe monitorHeight>
        {({ size }) => {
          console.log('Parallax Size', size);

          return (
            <Parallax
            // bgStyle={{
            //   height: size.height,
            // }}
            >
              <Bg
                className="custom-bg"
                // style={{
                //   height: size.height,
                // }}
              >
                <StyledBackground height={size.height}>
                  {image}
                </StyledBackground>
              </Bg>
              {children}
            </Parallax>
          );
        }}
      </SizeMe>
    </StyledParallaxBackground>
  );
}

export default ParallaxBackground;
