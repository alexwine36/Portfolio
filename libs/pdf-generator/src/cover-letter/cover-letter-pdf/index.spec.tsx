import { render } from '@testing-library/react';

import CoverLetterPDF from './index';

describe('CoverLetterPDF', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoverLetterPDF />);
    expect(baseElement).toBeTruthy();
  });
});
