import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import PageLayout from './page-layout';

describe('PageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter basename="/Portfolio/">
        <PageLayout />
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
