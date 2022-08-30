import { render } from '@testing-library/react';

import { SectionInfo } from '.';

describe('SectionInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionInfo title="Sample" />);
    expect(baseElement).toBeTruthy();
  });
});
