import { render } from '@testing-library/react';
import { generateShadows, Stars } from './generate-shadows';

import StarBackground from './star-background';

describe('StarBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StarBackground>
        <div>Sample</div>
      </StarBackground>
    );
    expect(baseElement).toBeTruthy();
  });
});

describe('Generate Shadows', () => {
  test('should generate shadows', () => {
    generateShadows(700, 1, {
      width: 200,
      height: 400,
    });
  });
  test('should generate shadows without dimension', () => {
    generateShadows(700, 1, {
      width: undefined,
      height: undefined,
    });
  });
});

describe('Stars', () => {
  test('should generate shadows', () => {
    const { baseElement } = render(<Stars dim={{}} size={1} value={700} />);
    expect(baseElement).toBeTruthy();
  });
  test('should generate shadows without dimension', () => {
    const { baseElement } = render(<Stars dim={{}} value={700} />);
    expect(baseElement).toBeTruthy();
  });
});
