import { render } from '@testing-library/react';

import FooterComponent from './index';

describe('FooterComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterComponent />);
    expect(baseElement).toBeTruthy();
  });
});
