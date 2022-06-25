import { theme } from './theme';

describe('Theme', () => {
  it('should render successfully', () => {
    expect(theme.palette.background.default).toBe('#000F08');
  });
});
