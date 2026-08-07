import { CtaLink } from "@/client/components/ui/CtaLink";
import { ImageWithFallback } from "@/client/components/ui/ImageWithFallback";
import { cn } from "@/client/components/ui/cn";
import type { PitchCardContent } from "@/types/home.types";

export interface PitchCardProps {
  content: PitchCardContent;
}

const TONE_CLASSES: Record<PitchCardContent["tone"], string> = {
  dark: "bg-forest text-ivory",
  light: "bg-linen text-charcoal",
};

const BODY_TONE_CLASSES: Record<PitchCardContent["tone"], string> = {
  dark: "text-ivory/85",
  light: "text-taupe",
};

/**
 * One pitch's text-then-image pair, rendered as two flush flex siblings
 * (no wrapping element of its own) so `PitchSection` can lay all four
 * blocks from both pitches — text, image, text, image — out as one
 * unbroken row.
 */
export default function PitchCard({ content }: PitchCardProps) {
  return (
    <>
      <div
        className={cn(
          "flex flex-col justify-center gap-4 p-6 sm:p-8 lg:flex-1 lg:p-10",
          TONE_CLASSES[content.tone],
        )}
      >
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
          {content.eyebrow}
        </p>
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">{content.headline}</h3>
        <p className={cn("font-body text-base", BODY_TONE_CLASSES[content.tone])}>
          {content.body}
        </p>
        <CtaLink
          href={content.ctaHref}
          tone={content.tone}
          disablePlaceholderNav={content.ctaHref === "#"}
          className="self-start"
        >
          {content.ctaLabel}
        </CtaLink>
      </div>
      <div className="relative aspect-4/3 w-full lg:aspect-auto lg:min-h-64 lg:flex-1">
        <ImageWithFallback
          src={content.imageUrl}
          alt={content.imageAlt}
          fallbackLabel={content.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
        />
      </div>
    </>
  );
}
