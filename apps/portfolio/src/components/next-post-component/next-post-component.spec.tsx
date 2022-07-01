import { render } from '@testing-library/react';

import NextPostComponent from './next-post-component';

describe('NextPostComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextPostComponent />);
    expect(baseElement).toBeTruthy();
  });
});
