import { removeTrailingSlash } from '.';

describe('remove-trailing-slash', () => {
  test('should remove trailing slash', () => {
    const link = '/sample/';

    const res = removeTrailingSlash(link);
    expect(res).toBe('/sample');
  });
});
