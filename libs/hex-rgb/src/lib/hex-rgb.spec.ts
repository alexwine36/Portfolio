import { hexRgb } from './hex-rgb';

describe('hexRgb', () => {
  it('should work', () => {
    const { red, green, blue } = hexRgb('#000', { format: 'object' });

    expect(red).toEqual(0);
    expect(green).toEqual(0);
    expect(blue).toEqual(0);
  });
  test('should return array vals', () => {
    const data = hexRgb('#000', { format: 'array' });

    expect(data[0]).toEqual(0);
    expect(data[1]).toEqual(0);
    expect(data[2]).toEqual(0);
  });
  test('should return css data', () => {
    const data = hexRgb('#000', { format: 'css' });

    expect(data).toBe('rgba(0,0,0,1)');
  });

  test('should return css alpha data', () => {
    const data = hexRgb('#000', { format: 'css', alpha: 0.5 });

    expect(data).toBe('rgba(0,0,0,0.5)');
  });

  test('should return alpha vals', () => {
    const { alpha } = hexRgb('#000', { alpha: 0 });
    expect(alpha).toBe(0);
  });
});
