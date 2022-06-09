import { render } from '@testing-library/react';

import GenerateGalaxyBackground from './generate-galaxy-background';

describe('GenerateGalaxyBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateGalaxyBackground />);
    expect(baseElement).toBeTruthy();
  });
});
