import { renderHook } from '@testing-library/react';
import useRhubarbResume from './use-rhubarb-resume';

describe('useRhubarbResume', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useRhubarbResume());

    // expect(result.current.count).toBe(0);
    expect(result.current.resume).toBeTruthy();

    // act(() => {
    //   result.current.increment();
    // });

    // expect(result.current.count).toBe(1);
  });
});
