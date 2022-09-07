import { render } from '@testing-library/react';

import ResumeContentPage from './index';

describe('ResumeContentPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeContentPage />);
    expect(baseElement).toBeTruthy();
  });
});
