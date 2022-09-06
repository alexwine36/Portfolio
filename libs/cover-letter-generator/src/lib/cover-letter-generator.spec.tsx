import { render } from '@testing-library/react';

import CoverLetterGenerator from './cover-letter-generator';

describe('CoverLetterGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoverLetterGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
