import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCoverLetter from './use-cover-letter';

describe('useCoverLetter', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCoverLetter());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
