import { PeopleIcon, RingsIcon, SunIcon } from "@/client/components/layout/icons";
import type { ValueHighlight } from "@/types/about.types";

export const VALUE_HIGHLIGHTS: ValueHighlight[] = [
  {
    id: "elevate",
    label: "Elevate",
    description:
      "We champion excellence by encouraging continuous professional growth and raising industry standards.",
    Icon: PeopleIcon,
  },
  {
    id: "connect",
    label: "Connect",
    description:
      "We create opportunities for meaningful relationships that strengthen businesses and build a more connected Caribbean event community.",
    Icon: RingsIcon,
  },
  {
    id: "transform",
    label: "Transform",
    description:
      "We believe collaboration and shared knowledge have the power to transform careers, businesses, and the future of our industry.",
    Icon: SunIcon,
  },
];
