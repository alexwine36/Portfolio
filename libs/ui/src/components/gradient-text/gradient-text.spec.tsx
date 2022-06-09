import { render } from '@testing-library/react';

import GradientText from './gradient-text';

describe('GradientText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GradientText />);
    expect(baseElement).toBeTruthy();
  });
});
