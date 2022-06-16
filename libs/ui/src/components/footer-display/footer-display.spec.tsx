import { render } from '@testing-library/react';

import FooterDisplay from './footer-display';

describe('FooterDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
