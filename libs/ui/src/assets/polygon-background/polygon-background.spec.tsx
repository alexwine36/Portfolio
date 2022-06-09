import { render } from '@testing-library/react';

import PolygonBackground from './polygon-background';

describe('PolygonBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PolygonBackground />);
    expect(baseElement).toBeTruthy();
  });
});
