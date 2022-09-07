import { render } from '@testing-library/react';

import CoverLetterDisplay from './index';

describe('CoverLetterDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoverLetterDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
