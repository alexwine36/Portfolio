import { render } from '@testing-library/react';

import InfoTextDisplay from './info-text-display';

describe('InfoTextDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoTextDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
