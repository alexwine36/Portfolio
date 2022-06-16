import { render } from '@testing-library/react';

import GenerateWavesBackground from './generate-waves-background';

describe('GenerateWavesBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateWavesBackground />);
    expect(baseElement).toBeTruthy();
  });
});
