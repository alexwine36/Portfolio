import { render } from '@testing-library/react';
import React from 'react';
import LoadableParallaxComponent from './index';

describe('LoadableParallaxComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LoadableParallaxComponent
        page={{
          name: 'Sample',
          background: 'circuit',
        }}
      >
        <div>Sample Kiddo</div>
      </LoadableParallaxComponent>
    );
    expect(baseElement).toBeTruthy();
  });
});
