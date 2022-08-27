import { render } from '@testing-library/react';

import SectionInfo from './index';

describe('SectionInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionInfo />);
    expect(baseElement).toBeTruthy();
  });
});
