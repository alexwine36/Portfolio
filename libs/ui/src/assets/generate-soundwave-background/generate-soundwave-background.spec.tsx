import { render } from '@testing-library/react';

import GenerateSoundwaveBackground from './generate-soundwave-background';

describe('GenerateSoundwaveBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateSoundwaveBackground />);
    expect(baseElement).toBeTruthy();
  });
});
