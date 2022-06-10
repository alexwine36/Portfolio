import { render } from '@testing-library/react';

import SectionDisplay from './section-display';

describe('SectionDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
