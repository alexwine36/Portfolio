import { render } from '@testing-library/react';

import MasonryGridComponent from './masonry-grid-component';

describe('MasonryGridComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MasonryGridComponent>
        <div></div>
        <div></div>
      </MasonryGridComponent>
    );
    expect(baseElement).toBeTruthy();
  });
});
