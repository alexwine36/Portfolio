import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { usePage } from '../../hooks/use-pages/use-pages';
import ParallaxSectionDisplay from './index';

describe('ParallaxSectionDisplay', () => {
  it('should render successfully', () => {
    const page = usePage('work');
    const { baseElement } = render(
      <HelmetProvider>
        <ParallaxSectionDisplay page={page}>
          <div>Sample</div>
        </ParallaxSectionDisplay>
      </HelmetProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
