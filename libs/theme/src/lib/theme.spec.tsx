import { theme } from './theme';

describe('Theme', () => {
  it('should render successfully', () => {
    expect(theme.palette.background).toBe('#000F08');
  });
});
