import type { ComponentType, SVGProps } from "react";
import { cn } from "./cn";

export interface IconTileProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  className?: string;
}

/** An icon + label + description tile, used by the Resources strip. */
export function IconTile({ Icon, label, description, className }: IconTileProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Icon aria-hidden="true" className="h-12 w-12 shrink-0 text-forest" />
      <div>
        <p className="font-display text-lg text-charcoal">{label}</p>
        <p className="mt-1 font-body text-md text-taupe">{description}</p>
      </div>
    </div>
  );
}
