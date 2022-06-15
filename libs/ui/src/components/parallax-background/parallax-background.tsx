import { styled } from '@mui/material';
import { Background, Parallax } from 'react-parallax';
import { SizeMe } from 'react-sizeme';
import GeneratePlanetBackground from '../../assets/generate-planet-background/generate-planet-background';
/* eslint-disable-next-line */
export interface ParallaxBackgroundProps {
  image?: React.ReactElement;
  planet?: boolean;
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
  const { image, children, planet } = props;

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
                  {planet ? (
                    <GeneratePlanetBackground
                      dimensions={{
                        width: size.width || 560,
                        height: size.height || 560,
                      }}
                    />
                  ) : (
                    image
                  )}
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
