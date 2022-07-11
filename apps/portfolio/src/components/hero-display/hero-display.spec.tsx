import { render } from '@testing-library/react';
import React from 'react';
import HeroDisplay from './hero-display';

describe('HeroDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
