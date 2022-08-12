import { render } from '@testing-library/react';

import RemarkLink from './index';

describe('RemarkLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RemarkLink />);
    expect(baseElement).toBeTruthy();
  });
});
