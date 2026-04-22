import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Bookmark,
  BookOpen,
  BriefcaseBusiness,
  ChartPie,
  ChevronDown,
  Circle,
  Clock3,
  Crosshair,
  Files,
  Grid2x2,
  Search,
  Settings,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const iconComponents = {
  bell: Bell,
  gear: Settings,
  search: Search,
  grid: Grid2x2,
  star: Star,
  book: BookOpen,
  pie: ChartPie,
  briefcase: BriefcaseBusiness,
  users: Users,
  bookmark: Bookmark,
  chevronDown: ChevronDown,
  crosshair: Crosshair,
  trophy: Trophy,
  clock: Clock3,
  target: Target,
  files: Files,
  dot: Circle,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
};

export function Icon({ name, className = "" }) {
  const Component = iconComponents[name];

  if (!Component) {
    return null;
  }

  return <Component className={`icon ${className}`.trim()} aria-hidden="true" strokeWidth={1.75} />;
}
