import { render } from '@testing-library/react';

import GenerateLowPolyBackground from './generate-low-poly-background';

describe('GenerateLowPolyBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateLowPolyBackground />);
    expect(baseElement).toBeTruthy();
  });
});
