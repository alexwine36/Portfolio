import { render } from '@testing-library/react';

import HomePage from './home-page';

describe.skip('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
