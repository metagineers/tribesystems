"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Ember glow that trails the cursor and swells over interactive elements.
 * Desktop fine-pointer + motion-OK only; pure decoration (aria-hidden,
 * pointer-events none).
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ok = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!ok) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

    let shown = false;
    const onMove = (e: PointerEvent) => {
      if (!shown) {
        gsap.to(el, { autoAlpha: 1, duration: 0.4 });
        shown = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
      const interactive = (e.target as Element | null)?.closest?.(
        "a, button, input, textarea, select, [role='button']",
      );
      gsap.to(el, {
        scale: interactive ? 2.2 : 1,
        opacity: interactive ? 0.5 : 0.28,
        duration: 0.35,
      });
    };
    const onLeave = () => {
      gsap.to(el, { autoAlpha: 0, duration: 0.3 });
      shown = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-24 w-24 rounded-full opacity-30"
      style={{
        background:
          "radial-gradient(circle, rgba(224,108,42,0.55) 0%, rgba(224,108,42,0.12) 45%, transparent 70%)",
        filter: "blur(2px)",
      }}
    />
  );
}
