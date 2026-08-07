import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "./cn";

export interface IconTileProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  className?: string;
  /** Extra content rendered under the description, e.g. a CtaLink — shares
   *  this tile's column/row alignment instead of needing manual offsets. */
  children?: ReactNode;
  /** Icon/text alignment below the `md:` row breakpoint. Defaults to
   *  centered (the Resources/Mission strips); "left" keeps everything
   *  left-aligned even while stacked (Contact's "other ways to reach us"). */
  align?: "center" | "left";
}

const ALIGN_CLASSES: Record<NonNullable<IconTileProps["align"]>, string> = {
  center: "items-center text-center",
  left: "items-start text-left",
};

/** An icon + label + description tile, used by the Resources strip. */
export function IconTile({ Icon, label, description, className, children, align = "center" }: IconTileProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 md:flex-row md:items-center md:text-left",
        ALIGN_CLASSES[align],
        className,
      )}
    >
      <Icon aria-hidden="true" className="h-12 w-12 shrink-0 text-forest" />
      <div className="min-w-0">
        <p className="font-display text-lg text-charcoal">{label}</p>
        <p className="mt-1 font-body text-sm text-taupe">{description}</p>
        {children}
      </div>
    </div>
  );
}
