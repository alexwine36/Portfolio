import { render } from '@testing-library/react';

import DetailCardDisplay from './detail-card-display';

describe('DetailCardDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailCardDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
