import { render } from '@testing-library/react';

import GenerateCircuitBoardBackground from './generate-circuit-board-background';

describe('GenerateCircuitBoardBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateCircuitBoardBackground />);
    expect(baseElement).toBeTruthy();
  });
});
