"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export type Segment = { text: string; accent?: boolean };

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Slide-in + typewriter reveal.
 *
 * The text is rendered once, in full, in the HTML (character spans), so search engines and screen readers
 * always read the complete sentence and visitors without JavaScript or with reduced-motion see it immediately.
 * In the browser the characters are hidden and revealed one by one (no re-rendering), with a blinking caret
 * while typing. The caret is removed when finished, so nothing keeps animating afterwards.
 */
export function Typewriter({ segments, delay = 0, speed = 35, className = "" }: { segments: Segment[]; delay?: number; speed?: number; className?: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const start = delay + 250; // typing begins as the slide-in is under way

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = Array.from(el.querySelectorAll<HTMLElement>("[data-c]"));
    chars.forEach((c) => (c.style.opacity = "0"));
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "translateX(-28px)";

    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        el.style.transition = "opacity 600ms ease-out, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.opacity = "1";
        el.style.transform = "none";
      }, delay),
    );

    let i = 0;
    let prev: HTMLElement | null = null;
    const tick = () => {
      prev?.classList.remove("tw-caret");
      const c = chars[i];
      c.style.opacity = "1";
      if (i < chars.length - 1) c.classList.add("tw-caret");
      prev = c;
      i += 1;
      if (i < chars.length) timers.push(window.setTimeout(tick, speed));
    };
    if (chars.length) timers.push(window.setTimeout(tick, start));

    return () => {
      timers.forEach(window.clearTimeout);
      chars.forEach((c) => { c.style.opacity = ""; c.classList.remove("tw-caret"); });
      el.style.opacity = "";
      el.style.transform = "";
      el.style.transition = "";
    };
  }, [delay, speed, start]);

  // Underline of an accent word draws after the word has been typed.
  let index = 0;
  return (
    <span ref={root} className={`block ${className}`}>
      {segments.map((seg, si) => {
        const first = index;
        const chars = Array.from(seg.text).map((ch, ci) => <span key={ci} data-c="">{ch}</span>);
        index += seg.text.length;
        return seg.accent ? (
          <span key={si} className="accent" style={{ animationDelay: `${start + (first + seg.text.length) * speed}ms` }}>{chars}</span>
        ) : (
          <span key={si}>{chars}</span>
        );
      })}
    </span>
  );
}
