import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useRhubarbResume } from '@portfolio/resume-hooks';
import { Bullets, PredefinedBackgrounds } from '@portfolio/ui';

export type SectionHook = 'work' | 'education' | 'skills';

type SectionData = {
  name: string;
  id: string;
  icon?: React.ReactElement;
  background?: PredefinedBackgrounds;
  gridSize?: number;
  chips?: boolean;
  items?: {
    pretitle?: string;
    subtitle?: string;
    title?: string;
    bullets?: Bullets[];
  }[];
};

export function useSectionsHook() {
  const { resume } = useRhubarbResume();
  const { workExperience, educationExperience, skillCategories } = resume;

  const sections: Record<SectionHook, SectionData> = {
    work: {
      name: 'Experience',
      id: 'workExperience',
      icon: <WorkIcon />,
      items: workExperience.map((exp) => {
        return {
          pretitle: exp.role,
          title: exp.company.name,
          subtitle: exp.dateDisplay,
          bullets: exp.bullets,
        };
      }),
    },
    skills: {
      name: 'Skills',
      id: 'skills',
      gridSize: 6,
      chips: true,
      icon: <FactCheckIcon />,
      background: 'meteor',
      items: skillCategories.map((cat) => {
        return {
          title: cat.name,
          bullets: cat.bullets,
        };
      }),
    },
    education: {
      name: 'Education',
      id: 'education',
      icon: <SchoolIcon />,
      background: 'soundwave',
      items: educationExperience.map((exp) => {
        return {
          title: exp.institute,
          subtitle: exp.dateDisplay,
          bullets: exp.bullets,
        };
      }),
    },
  };
  return { sections };
}

export function useActionsHook(includeHome?: boolean) {
  const { sections } = useSectionsHook();
  const actions = Object.entries(sections).map(([id, section]) => {
    const { icon, name } = section;

    return {
      icon: icon || <WorkIcon />,
      name,
      href: `section/${id}`,
    };
  });

  return {
    actions: [
      ...(includeHome
        ? [
            {
              icon: <HomeIcon />,
              name: 'Home',
              href: '/',
            },
          ]
        : []),
      ...actions,
    ],
  };
}

export const useSectionHook = (key: SectionHook) => {
  const { sections } = useSectionsHook();

  return { section: sections[key] };
};

export default useSectionHook;
