import { render } from '@testing-library/react';

import StarBackground from './star-background';

describe('StarBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StarBackground />);
    expect(baseElement).toBeTruthy();
  });
});
