import { render } from '@testing-library/react';

import PageBackground from './page-background';

describe('PageBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageBackground />);
    expect(baseElement).toBeTruthy();
  });
});
