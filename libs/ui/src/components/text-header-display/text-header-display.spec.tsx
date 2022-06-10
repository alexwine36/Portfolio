import { render } from '@testing-library/react';

import TextHeaderDisplay from './text-header-display';

describe('TextHeaderDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextHeaderDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
