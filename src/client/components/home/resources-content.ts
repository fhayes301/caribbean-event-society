import { BookOpenIcon, LeafIcon, PeopleIcon, SunIcon } from "@/client/components/layout/icons";
import type { ResourceHighlight } from "@/types/home.types";

export const RESOURCE_HIGHLIGHTS: ResourceHighlight[] = [
  {
    id: "industry-resources",
    label: "Industry Resources",
    description:
      "Templates, guides, tools, and practical insights to help event professionals strengthen their businesses.",
    Icon: LeafIcon,
  },
  {
    id: "professional-development",
    label: "Professional Development",
    description:
      "Workshops, mentorship opportunities, professional development content, and continuing advancement.",
    Icon: BookOpenIcon,
  },
  {
    id: "member-directory",
    label: "Member Directory",
    description: "Connect with trusted professionals across multiple disciplines throughout the Caribbean.",
    Icon: PeopleIcon,
  },
  {
    id: "news-and-insights",
    label: "News & Insights",
    description: "Industry trends, member stories, opportunities, and updates from around the region.",
    Icon: SunIcon,
  },
];
