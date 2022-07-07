import { render } from '@testing-library/react';

import PDFDisplay from './pdf-display';

describe('PDFDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PDFDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
