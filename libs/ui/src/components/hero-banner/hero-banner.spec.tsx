import { render } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax';

import HeroBanner from './hero-banner';

describe('HeroBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ParallaxProvider>
        <HeroBanner />
      </ParallaxProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
