import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import SectionPage from './section-page';

describe('SectionPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <SectionPage />
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
