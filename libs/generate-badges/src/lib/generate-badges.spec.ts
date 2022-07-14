import { generateBadges } from './generate-badges';

describe.skip('generateBadges', () => {
  it('should work', () => {
    expect(generateBadges('sample')).toEqual('malformed file found');
  });
});
