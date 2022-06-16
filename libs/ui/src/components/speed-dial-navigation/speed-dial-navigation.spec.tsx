import { render } from '@testing-library/react';
import SpeedDialNavigation from './speed-dial-navigation';

describe('SpeedDialNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpeedDialNavigation actions={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
