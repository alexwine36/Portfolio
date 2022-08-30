import { render } from '@testing-library/react';

import SectionHeader from './index';

describe('SectionHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionHeader />);
    expect(baseElement).toBeTruthy();
  });
});
