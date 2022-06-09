import { render } from '@testing-library/react';

import CodeThinking from './code-thinking';

describe('CodeThinking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeThinking />);
    expect(baseElement).toBeTruthy();
  });
});
