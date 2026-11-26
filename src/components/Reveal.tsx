"use client";
import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Subtle rise-on-scroll for below-the-fold blocks.
 * Content is never hidden or offset in the server HTML or without JS, and the
 * effect is skipped entirely when the user prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible: no animation
    setState("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = state === "armed" ? { transform: "translateY(18px)" } : state === "shown" ? { transition: `transform 500ms ease-out ${delay}s` } : undefined;
  return createElement(as, { ref, className, style }, children);
}
