import { render } from '@testing-library/react';

import ChipListDisplay from './chip-list-display';

describe('ChipListDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChipListDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
