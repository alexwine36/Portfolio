import { render } from '@testing-library/react';

import GeneratePlanetBackground from './generate-planet-background';

describe('GeneratePlanetBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeneratePlanetBackground />);
    expect(baseElement).toBeTruthy();
  });
});
