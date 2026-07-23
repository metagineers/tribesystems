"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px */
  y?: number;
  delay?: number;
  /** Stagger children instead of animating the wrapper as one block */
  stagger?: number;
  duration?: number;
};

/**
 * Fades + rises content into view on scroll. Content is fully visible
 * without JS or with reduced motion (initial states are set by GSAP only).
 */
export default function Reveal({
  children,
  className,
  y = 40,
  delay = 0,
  stagger,
  duration = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets =
          stagger != null && el.children.length > 0
            ? Array.from(el.children)
            : el;
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            stagger: stagger ?? 0,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
