import { render } from '@testing-library/react';

import AnimationLink from './index';

describe('AnimationLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimationLink />);
    expect(baseElement).toBeTruthy();
  });
});
