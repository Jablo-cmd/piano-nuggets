import type { ReactNode } from "react";

/** One expressive word or short phrase inside a heading (serif italic with an aqua underline). */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="accent">{children}</span>;
}
