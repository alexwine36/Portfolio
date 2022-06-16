import { render } from '@testing-library/react';

import GenerateMeteorBackground from './generate-meteor-background';

describe('GenerateMeteorBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateMeteorBackground />);
    expect(baseElement).toBeTruthy();
  });
});
