import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** The element/component to render as. Defaults to "div". */
  as?: ElementType;
}

/**
 * Shared padding wrapper (`mx-auto px-6 md:px-10`) used across page
 * sections and by `Header`, so side padding stays consistent in one
 * place. Unbounded by default — sections that should stay a fixed
 * width (e.g. Hero, Mission, Upcoming Events, Founding Directors) opt
 * in via `className="max-w-7xl"`.
 */
export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("mx-auto px-6 md:px-10", className)}>
      {children}
    </Component>
  );
}
