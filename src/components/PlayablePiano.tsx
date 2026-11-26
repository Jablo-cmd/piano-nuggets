"use client";
import { useCallback, useRef, useState } from "react";

type Key = { midi: number; name: string; black: boolean; whiteIndex: number };

const NAMES = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
function buildKeys(): Key[] {
  const keys: Key[] = [];
  let white = 0;
  for (let midi = 60; midi < 84; midi++) {
    const n = midi % 12;
    const black = [1, 3, 6, 8, 10].includes(n);
    keys.push({ midi, name: `${NAMES[n]}${Math.floor(midi / 12) - 1}`, black, whiteIndex: black ? white - 1 : white });
    if (!black) white++;
  }
  return keys;
}
const KEYS = buildKeys();
const WHITE_COUNT = KEYS.filter((k) => !k.black).length;

/** A small playable keyboard. Sound is generated in the browser only after the visitor presses a key. Nothing is recorded or sent. */
export function PlayablePiano() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [last, setLast] = useState<string>("");

  const play = useCallback((k: Key) => {
    try {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      const ctx = (ctxRef.current ??= new AC());
      if (ctx.state === "suspended") void ctx.resume();
      const f = 440 * Math.pow(2, (k.midi - 69) / 12);
      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.32, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
      gain.connect(ctx.destination);
      [[f, "triangle", 1], [f * 2, "sine", 0.35], [f * 3, "sine", 0.12]].forEach(([freq, type, mul]) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = type as OscillatorType;
        o.frequency.value = freq as number;
        g.gain.value = mul as number;
        o.connect(g).connect(gain);
        o.start(now);
        o.stop(now + 1.7);
      });
    } catch {
      /* audio unavailable: keys still highlight */
    }
    setActive(k.midi);
    setLast(k.name);
    window.setTimeout(() => setActive((a) => (a === k.midi ? null : a)), 220);
  }, []);

  const whiteW = 100 / WHITE_COUNT;
  return (
    <div>
      <div className="relative mx-auto h-44 w-full max-w-4xl select-none sm:h-60" role="group" aria-label="Playable piano keyboard, two octaves from middle C">
        {KEYS.filter((k) => !k.black).map((k) => (
          <button
            key={k.midi}
            type="button"
            aria-label={`Play ${k.name}`}
            onPointerDown={(e) => { e.preventDefault(); play(k); }}
            onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !e.repeat) { e.preventDefault(); play(k); } }}
            className={`absolute bottom-0 top-0 rounded-b-xl border border-brand-ink/30 text-[10px] font-bold text-brand-ink/50 transition-colors duration-100 sm:text-xs ${active === k.midi ? "bg-brand-honey" : "bg-white hover:bg-brand-mist"}`}
            style={{ left: `${k.whiteIndex * whiteW}%`, width: `${whiteW}%` }}
          >
            <span className="absolute inset-x-0 bottom-2">{k.name.startsWith("C") && !k.name.includes("♯") ? k.name : ""}</span>
          </button>
        ))}
        {KEYS.filter((k) => k.black).map((k) => (
          <button
            key={k.midi}
            type="button"
            aria-label={`Play ${k.name}`}
            onPointerDown={(e) => { e.preventDefault(); play(k); }}
            onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !e.repeat) { e.preventDefault(); play(k); } }}
            className={`absolute top-0 z-10 h-[62%] rounded-b-lg border border-black transition-colors duration-100 ${active === k.midi ? "bg-brand-honey" : "bg-brand-ink hover:bg-[#3A2220]"}`}
            style={{ left: `${(k.whiteIndex + 1) * whiteW - whiteW * 0.3}%`, width: `${whiteW * 0.6}%` }}
          />
        ))}
      </div>
      <p className="mt-5 text-center text-sm text-white/70" aria-live="polite">
        {last ? <>You played <strong className="text-brand-honey">{last}</strong>. </> : null}
        Tap, click or tab to a key and press Enter. Sound plays on your device only.
      </p>
    </div>
  );
}
