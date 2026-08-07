import type { ComponentType, SVGProps } from "react";

/** One tile in the About page's "Elevate / Connect / Transform" values row. */
export interface ValueHighlight {
  id: string;
  label: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
