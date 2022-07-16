import { render } from '@testing-library/react';

import ParallaxBackground, {
  PredefinedBackgrounds,
} from './parallax-background';

describe('ParallaxBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ParallaxBackground>
        <div>Sample </div>
      </ParallaxBackground>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render with elements', () => {
    const { baseElement } = render(
      <ParallaxBackground image={<div>Sample</div>}>
        <div>Sample </div>
      </ParallaxBackground>
    );
    expect(baseElement).toBeTruthy();
  });

  const data: PredefinedBackgrounds[] = [
    'circuit',
    'meteor',
    'planet',
    'polygon',
    'soundwave',
    'waves',
  ];

  const res = data.map((d) => ({ bg: d }));

  test.each(res)('given %p returns background', (d) => {
    const { baseElement } = render(
      <ParallaxBackground predefined={d.bg}>
        <div>Sample </div>
      </ParallaxBackground>
    );
    expect(baseElement).toBeTruthy();
  });

  // it('should render with predefined elements', () => {
  //
  // });
});
