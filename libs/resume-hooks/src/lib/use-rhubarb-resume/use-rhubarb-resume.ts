import dayjs from 'dayjs';
import { Bullets } from '../../../../ui/src';
import data from '../data/rhubarb';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface UseRhubarbResume {
//   count: number;
//   increment: () => void;
// }

interface MainData {
  startDate: string;
  endDate?: string | null;
  bullets?: {
    // id: string;
    // experience: string;
    // createdAt: string;
    // updatedAt: string;
    contents: string;
  }[];
}

type ReturnData<T> = Omit<T, 'bullets'> & {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs | null;
  bullets?: Bullets[];
  dateDisplay: string;
};

const formatInfo = <T extends MainData>(data: T[]): ReturnData<T>[] => {
  return data.map((e) => {
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
      bullets: bullets?.map((bullet) => bullet.contents),
      dateDisplay,
    };
  });
};

const formatResume = () => {
  const { workExperience, educationExperience, skillCategories } = data;

  return {
    ...data,
    workExperience: formatInfo(workExperience),
    educationExperience: formatInfo(educationExperience),
    skillCategories: skillCategories
      .sort((a, b) => a.order - b.order)
      .map((cat) => {
        const { skills } = cat;
        return {
          ...cat,
          bullets: skills.map((s) => s.name),
        };
      }),
  };
};

type ResumeKeys = keyof typeof data;

/**
 * Get resume using "fake" hook
 * @returns Parsed resume
 */
export function useRhubarbResume() {
  // const [resume] = useState(formatResume());
  const resume = formatResume();

  // const increment = useCallback(() => setCount((x) => x + 1), []);
  return { resume };
}

export default useRhubarbResume;
