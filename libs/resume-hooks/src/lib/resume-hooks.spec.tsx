import { render } from '@testing-library/react';

import ResumeHooks from './resume-hooks';

describe('ResumeHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeHooks />);
    expect(baseElement).toBeTruthy();
  });
});
