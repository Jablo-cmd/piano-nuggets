import Image from "next/image";
import { PianoKeys } from "./PianoKeys";

/**
 * Photography slot. Renders a real photograph when `src` is supplied
 * (store in /public/images, with meaningful alt text). Until approved photography
 * exists it shows a clean brand panel, never a stock or AI-generated stand-in.
 */
export function Photo({ src, alt, className = "", priority = false, sizes = "(min-width:1024px) 50vw, 100vw" }: { src?: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl3 ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-xl3 bg-brand-mist ${className}`} role="img" aria-label={alt}>
      <PianoKeys className="absolute inset-x-0 bottom-0 h-1/3 w-full opacity-90" />
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand-teal/70" />
      <div className="absolute left-8 top-10 h-16 w-16 rounded-full bg-brand-lilac" />
      <div className="absolute left-1/2 top-1/3 h-8 w-8 rounded-full bg-brand-peach" />
    </div>
  );
}
