import { styled } from '@mui/material';
import { Background, Parallax } from 'react-parallax';
import { SizeMe } from 'react-sizeme';
import GenerateCircuitBoardBackground from '../../assets/generate-circuit-board-background/generate-circuit-board-background';
import GenerateMeteorBackground from '../../assets/generate-meteor-background/generate-meteor-background';
import GeneratePlanetBackground from '../../assets/generate-planet-background/generate-planet-background';
import GenerateSoundwaveBackground from '../../assets/generate-soundwave-background/generate-soundwave-background';
import GenerateWavesBackground from '../../assets/generate-waves-background/generate-waves-background';

export type PredefinedBackgrounds =
  | 'planet'
  | 'meteor'
  | 'soundwave'
  | 'circuit'
  | 'waves';
/* eslint-disable-next-line */

export interface ParallaxBackgroundProps {
  image?: React.ReactElement;
  // planet?: boolean;
  predefined?: PredefinedBackgrounds;
  children: React.ReactElement;
  // meteor?: boolean;
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

const GeneratePredefined = (props: {
  width?: number;
  height?: number;
  predefined: PredefinedBackgrounds;
}) => {
  const { width, height, predefined } = props;

  switch (predefined) {
    case 'meteor':
      return <GenerateMeteorBackground />;
    case 'planet':
      return (
        <GeneratePlanetBackground
          dimensions={{
            width: width || 560,
            height: height || 560,
          }}
        />
      );
    case 'circuit':
      return <GenerateCircuitBoardBackground width={width} height={height} />;
    case 'waves':
      return <GenerateWavesBackground width={width} height={height} />;
    case 'soundwave':
      return <GenerateSoundwaveBackground width={width} height={height} />;
    default:
      return <span></span>;
  }
};

export function ParallaxBackground(props: ParallaxBackgroundProps) {
  const { image, children, predefined } = props;

  return (
    <StyledParallaxBackground>
      <SizeMe monitorHeight>
        {({ size }) => {
          console.log('Parallax Size', size);

          return (
            <Parallax
              strength={300}
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
                  {predefined && (
                    <GeneratePredefined
                      predefined={predefined}
                      width={size.width || undefined}
                      height={size.height || undefined}
                    />
                  )}

                  {image && image}
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
