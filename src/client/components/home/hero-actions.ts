import { PeopleIcon, SearchIcon } from "@/client/components/layout/icons";
import type { HeroAction } from "@/types/home.types";

export const HERO_ACTIONS: HeroAction[] = [
  {
    id: "professional",
    label: "I'm an Industry Professional",
    description: "Join our community",
    href: "#",
    Icon: PeopleIcon,
    tone: "dark",
  },
  {
    id: "looking-for-professional",
    label: "I'm Looking for a Professional",
    description: "Browse the directory",
    href: "/directory",
    Icon: SearchIcon,
    tone: "light",
  },
];
