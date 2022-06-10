import { render } from '@testing-library/react';

import DetailListDisplay from './detail-list-display';

describe('DetailListDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailListDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
