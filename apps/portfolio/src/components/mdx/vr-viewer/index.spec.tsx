import { render } from '@testing-library/react';
import React from 'react';
import VRViewer from './index';

describe('VRViewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VRViewer />);
    expect(baseElement).toBeTruthy();
  });
});
