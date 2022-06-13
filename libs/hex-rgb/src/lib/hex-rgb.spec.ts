import { hexRgb } from './hex-rgb';

describe('hexRgb', () => {
  it('should work', () => {
    const { red, green, blue } = hexRgb('#000', { format: 'object' });

    expect(red).toEqual(0);
    expect(green).toEqual(0);
    expect(blue).toEqual(0);
  });
});
