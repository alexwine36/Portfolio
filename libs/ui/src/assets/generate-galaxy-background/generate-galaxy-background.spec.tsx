import { render } from '@testing-library/react';

import GenerateGalaxyBackground from './generate-galaxy-background';

describe('GenerateGalaxyBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateGalaxyBackground />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with props', () => {
    const { baseElement } = render(
      <GenerateGalaxyBackground
        background="blue"
        density={0.2}
        starColor="yellow"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
