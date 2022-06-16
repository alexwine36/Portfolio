import { render } from '@testing-library/react';

import SocialIconButton from './social-icon-button';

describe('SocialIconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialIconButton />);
    expect(baseElement).toBeTruthy();
  });
});
