import { render } from '@testing-library/react';

import { ListItem } from './index';

describe('List', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItem>sample</ListItem>);
    expect(baseElement).toBeTruthy();
  });
});
