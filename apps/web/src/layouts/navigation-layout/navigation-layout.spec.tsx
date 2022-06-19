import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import NavigationLayout from './navigation-layout';

describe('NavigationLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <NavigationLayout />
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
