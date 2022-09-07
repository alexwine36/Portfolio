import { render } from '@testing-library/react';

import CoverLetter from './index';

describe('CoverLetter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoverLetter />);
    expect(baseElement).toBeTruthy();
  });
});
