import { render } from '@testing-library/react';

import DetailListDisplay from './detail-list-display';

describe('DetailListDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailListDisplay bullets={['sample']} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render chips successfully', () => {
    const { baseElement } = render(
      <DetailListDisplay bullets={['sample']} chips={true} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render nested items successfully', () => {
    const { baseElement } = render(
      <DetailListDisplay bullets={['sample', ['sample 2']]} chips={true} />
    );
    expect(baseElement).toBeTruthy();
  });
});
