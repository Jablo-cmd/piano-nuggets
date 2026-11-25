import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/** Official lockup. On dark backgrounds it sits on a white pill so the navy wordmark stays legible. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${site.name} home`}>
      <Image
        src="/images/logo-lockup.png"
        alt={site.name}
        width={960}
        height={300}
        priority
        className={light ? "h-11 w-auto rounded-xl bg-white px-3 py-1.5" : "h-11 w-auto"}
      />
    </Link>
  );
}
