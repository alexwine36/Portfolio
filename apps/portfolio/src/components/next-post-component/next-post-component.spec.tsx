import { render } from '@testing-library/react';
import React from 'react';

import NextPostComponent from './next-post-component';

describe.skip('NextPostComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextPostComponent slug={'/marksystems-graphql-v2'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
