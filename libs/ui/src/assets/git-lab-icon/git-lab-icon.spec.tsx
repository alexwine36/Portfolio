import { render } from '@testing-library/react';

import GitLabIcon from './git-lab-icon';

describe('GitLabIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GitLabIcon />);
    expect(baseElement).toBeTruthy();
  });
});
