import { render } from '@testing-library/react';

import GenerateLowPolyBackground from './generate-low-poly-background';

describe('GenerateLowPolyBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateLowPolyBackground />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with props', () => {
    const { baseElement } = render(
      <GenerateLowPolyBackground width={400} height={700} />
    );
    expect(baseElement).toBeTruthy();
  });
});
