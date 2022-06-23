import FactCheckIcon from "@mui/icons-material/FactCheck"
import HomeIcon from "@mui/icons-material/Home"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import { PredefinedBackgrounds } from "../../../../../libs/ui/src"
export type PageData = {
  name: string

  icon?: React.ReactElement
  background?: PredefinedBackgrounds
  gridSize?: number
  // chips?: boolean;
}

export const pages: { [key: string]: PageData } = {
  "": {
    name: "Home",
    icon: <HomeIcon />,
  },
  work: {
    name: "Experience",
    icon: <WorkIcon />,

    background: "meteor",
  },
  skills: {
    name: "Skills",
    gridSize: 6,
    icon: <FactCheckIcon />,
    background: "planet",
  },
  projects: {
    name: "Projects",
    icon: <LibraryBooksIcon />,
    background: "circuit",
  },
  education: {
    name: "Education",
    icon: <SchoolIcon />,
    background: "soundwave",
  },
}

export const pageArray = Object.entries(pages).map(([key, obj]) => ({
  ...obj,
  id: key,
  href: `/${key}`,
}))
