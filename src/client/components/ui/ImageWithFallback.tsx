"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "./cn";
import { PlaceholderImage } from "./PlaceholderImage";

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  /** Shown via `PlaceholderImage` if `src` fails to load — e.g. because the
   *  file hasn't been uploaded to `public/` yet. */
  fallbackLabel: string;
  shape?: "rect" | "circle";
  className?: string;
  /** Fills the nearest `relative`-positioned parent, e.g. for full-bleed
   *  backgrounds. Mutually exclusive with `width`/`height`. */
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** `"cover"` (default) crops to fill the box; `"contain"` shows the
   *  whole image, letterboxed, uncropped. */
  fit?: "cover" | "contain";
}

/**
 * Renders a real image at `src`, falling back to `PlaceholderImage` if it
 * fails to load. Lets components reference the real, final asset path now
 * — once a file is uploaded to that exact path, it starts rendering with
 * no code change required.
 */
export function ImageWithFallback({
  src,
  alt,
  fallbackLabel,
  shape = "rect",
  className,
  fill = false,
  width,
  height,
  sizes,
  priority,
  fit = "cover",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // `fill` normally makes next/image's underlying <img> absolutely fill its
    // positioned parent — a behavior baked into next/image itself, not
    // something a className can request. PlaceholderImage is a plain <div>,
    // so that positioning has to be recreated by hand here or the fallback
    // collapses to its own content size instead of covering the parent.
    return (
      <PlaceholderImage
        label={fallbackLabel}
        shape={shape}
        className={cn(fill && "absolute inset-0 h-full w-full", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn(
        shape === "circle" && "rounded-full",
        fit === "contain" ? "object-contain" : "object-cover",
        "object-center",
        className,
      )}
    />
  );
}
