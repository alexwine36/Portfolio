import { render } from '@testing-library/react';

import ParallaxBackground from './parallax-background';

describe('ParallaxBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ParallaxBackground />);
    expect(baseElement).toBeTruthy();
  });
});
