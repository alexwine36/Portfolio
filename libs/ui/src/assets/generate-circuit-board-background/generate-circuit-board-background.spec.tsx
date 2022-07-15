import { render } from '@testing-library/react';

import GenerateCircuitBoardBackground from './generate-circuit-board-background';

describe('GenerateCircuitBoardBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateCircuitBoardBackground />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with width and height', () => {
    const { baseElement } = render(
      <GenerateCircuitBoardBackground width={500} height={600} />
    );
    expect(baseElement).toBeTruthy();
  });
});
