import { render } from '@testing-library/react';

import GanttChartExample from './index';

describe('GanttChartExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GanttChartExample />);
    expect(baseElement).toBeTruthy();
  });
});
