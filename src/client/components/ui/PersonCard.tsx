import { cn } from "./cn";
import { ImageWithFallback } from "./ImageWithFallback";
import { PlaceholderImage } from "./PlaceholderImage";
import { InstagramIcon } from "@/client/components/layout/icons";

export interface PersonCardProps {
  name: string;
  title: string;
  photoUrl?: string;
  bio?: string;
  instagramUrl?: string;
  /** Opts into rendering `bio`/`instagramUrl` below the title (e.g. the
   *  About page's team section). Defaults to `false` so the homepage's
   *  compact grid stays unchanged even once director data carries a bio. */
  showBio?: boolean;
  className?: string;
}

/**
 * A photo + name + title tile, used by the Founding Directors grid.
 * When `photoUrl` is set but the file hasn't been uploaded yet,
 * `ImageWithFallback` degrades gracefully to a placeholder.
 */
export function PersonCard({
  name,
  title,
  photoUrl,
  bio,
  instagramUrl,
  showBio = false,
  className,
}: PersonCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {photoUrl ? (
        <ImageWithFallback
          src={photoUrl}
          alt={name}
          fallbackLabel={`Photo of ${name}`}
          width={200}
          height={200}
          className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40"
        />
      ) : (
        <PlaceholderImage
          label={`Photo of ${name}`}
          className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40"
        />
      )}
      <p className="mt-4 font-display text-lg text-charcoal">{name}</p>
      <p className="font-body text-xs uppercase tracking-wide text-taupe">{title}</p>
      {showBio && bio && (
        <p className="mt-3 font-body text-sm italic text-taupe">{bio}</p>
      )}
      {showBio && instagramUrl && (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on Instagram`}
          className="mt-3 text-taupe transition-colors hover:text-gold"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}
