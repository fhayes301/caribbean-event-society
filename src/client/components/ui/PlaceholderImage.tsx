import { cn } from "./cn";

export interface PlaceholderImageProps {
  /** Visible caption describing what real photo will eventually go here. */
  label: string;
  shape?: "rect" | "circle";
  className?: string;
}

function FrameGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M3 16l5-4 4 3 4-5 5 6" />
    </svg>
  );
}

/**
 * Styled stand-in rendered wherever a real photo/headshot doesn't exist
 * yet. A plain `<div>`, not an `<img>`, so there's never a broken-image
 * icon — swap the parent's conditional (`imageUrl ? <Image/> : <PlaceholderImage/>`)
 * for a real asset when one is uploaded.
 */
export function PlaceholderImage({ label, shape = "rect", className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-stone bg-stone/30 text-taupe",
        shape === "circle" && "rounded-full",
        className,
      )}
    >
      <FrameGlyph />
      <span className="px-4 text-center text-[11px] uppercase tracking-wide">{label}</span>
    </div>
  );
}
