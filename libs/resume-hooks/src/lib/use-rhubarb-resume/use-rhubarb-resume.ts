import dayjs from 'dayjs';
import { useState } from 'react';
import data from '../data/rhubarb';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface UseRhubarbResume {
//   count: number;
//   increment: () => void;
// }

const formatResume = () => {
  const { workExperience } = data;

  return {
    ...data,
    workExperience: workExperience.map((e) => {
      const { bullets } = e;
      const startDate = dayjs(e.startDate);
      const endDate = e.endDate ? dayjs(e.endDate) : null;
      const startDisplay = startDate.format('MMM YYYY');
      const endDisplay = endDate ? endDate.format('MMM YYYY') : 'Present';
      const dateDisplay = `${startDisplay} - ${endDisplay}`;
      return {
        ...e,
        startDate,
        endDate,
        bullets: bullets.map((bullet) => bullet.contents),
        dateDisplay,
      };
    }),
  };
};

export function useRhubarbResume() {
  const [resume] = useState(formatResume());

  // const increment = useCallback(() => setCount((x) => x + 1), []);
  return { resume };
}

export default useRhubarbResume;
