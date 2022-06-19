import { renderHook } from '@testing-library/react';

import { useSectionsHook } from './use-section-hook';

describe('useSectionHook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useSectionsHook());

    expect(result.current.sections).toBeTruthy();

    // act(() => {
    //   result.current.increment();
    // });

    // expect(result.current.count).toBe(1);
  });
});
