import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useGenerateResume from './use-generate-resume';

describe('useGenerateResume', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGenerateResume());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
