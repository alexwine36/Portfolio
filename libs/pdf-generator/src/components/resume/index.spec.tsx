import { render } from '@testing-library/react';

import Resume from './index';

describe('Resume', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Resume />);
    expect(baseElement).toBeTruthy();
  });
});
