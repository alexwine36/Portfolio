import { render } from '@testing-library/react';

import PdfGenerator from './pdf-generator';

describe('PdfGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
