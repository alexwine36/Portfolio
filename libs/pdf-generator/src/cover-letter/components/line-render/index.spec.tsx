import { render } from '@testing-library/react';

import LineRender from './index';

describe('LineRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineRender />);
    expect(baseElement).toBeTruthy();
  });
});
