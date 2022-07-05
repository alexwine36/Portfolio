import { render } from '@testing-library/react';
import React from 'react';
import { usePage } from '../../hooks/use-pages/use-pages';
import ParallaxSectionDisplay from './index';

describe.skip('ParallaxSectionDisplay', () => {
  it('should render successfully', () => {
    const page = usePage('work');
    const { baseElement } = render(
      <ParallaxSectionDisplay page={page}>
        <div>Sample</div>
      </ParallaxSectionDisplay>
    );
    expect(baseElement).toBeTruthy();
  });
});
