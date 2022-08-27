import { render } from '@testing-library/react';

import SectionDisplay from './index';

describe('SectionDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
