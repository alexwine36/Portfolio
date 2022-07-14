import { render } from '@testing-library/react';

import CodeThinking from './code-thinking';

describe('CodeThinking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeThinking />);
    expect(baseElement).toBeTruthy();
  });
  it('should render successfully with new primary', () => {
    const { baseElement } = render(<CodeThinking primaryColor="#6C63FF" />);
    expect(baseElement).toBeTruthy();
  });
});
