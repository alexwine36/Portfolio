import { render } from '@testing-library/react';

import PgBackground from './index';

describe('PgBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PgBackground />);
    expect(baseElement).toBeTruthy();
  });
});
