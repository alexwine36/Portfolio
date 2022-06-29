import { renderHook } from '@testing-library/react';

import { usePage } from './use-pages';

describe('usePages', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => usePage('work'));

    expect(result.current.name).toBe('Experience');
  });
});
