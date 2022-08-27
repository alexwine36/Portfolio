import { render } from '@testing-library/react';

import SectionDetail from './index';

describe('SectionDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionDetail />);
    expect(baseElement).toBeTruthy();
  });
});
