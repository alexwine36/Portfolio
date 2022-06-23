import { render } from '@testing-library/react';

import SectionContainer from './section-container';

describe('SectionContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionContainer />);
    expect(baseElement).toBeTruthy();
  });
});
