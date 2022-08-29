import { render } from '@testing-library/react';

import PDFLoadable from './index';

describe('PDFLoadable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PDFLoadable />);
    expect(baseElement).toBeTruthy();
  });
});
