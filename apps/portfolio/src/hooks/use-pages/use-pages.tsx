import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { PredefinedBackgrounds } from '@portfolio/ui';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UsePage {
  name: string;

  icon?: React.ReactElement;
  background?: PredefinedBackgrounds;
  gridSize?: number;
  sub?: boolean;
  // chips?: boolean;
}

type PageKeys = 'home' | 'work' | 'skills' | 'projects' | 'education';

const pages: Record<PageKeys, UsePage> = {
  home: {
    name: 'Home',
    icon: <HomeIcon />,
  },
  work: {
    name: 'Experience',
    icon: <WorkIcon />,

    background: 'meteor',
  },
  skills: {
    name: 'Skills',
    gridSize: 6,
    icon: <FactCheckIcon />,
    background: 'planet',
  },
  projects: {
    name: 'Projects',
    icon: <LibraryBooksIcon />,
    background: 'circuit',
  },
  education: {
    name: 'Education',
    icon: <SchoolIcon />,
    background: 'soundwave',
  },
};

export function usePage(page: PageKeys): UsePage {
  return pages[page];
}

export function usePages() {
  return Object.entries(pages).map(([key, obj]) => ({
    ...obj,
    id: key,
    href: `/${key === 'home' ? '' : key}`,
  }));
}
