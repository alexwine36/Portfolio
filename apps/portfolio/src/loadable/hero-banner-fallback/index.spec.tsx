import { render } from '@testing-library/react';
import React from 'react';
import { ImageTestData } from '../../components/hero-banner-implementation/hero-banner-implementation.spec';
import HeroBannerFallback from './index';

const { mtns, bkg } = ImageTestData;
describe('HeroBannerFallback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HeroBannerFallback mtns={mtns} bkg={bkg} />
    );
    expect(baseElement).toBeTruthy();
  });
});
