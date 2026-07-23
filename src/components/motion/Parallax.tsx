"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Percent of element height to travel across the viewport pass. Negative = drifts up. */
  speed?: number;
};

/** Scrub-parallaxes its child as the wrapper crosses the viewport. */
export default function Parallax({ children, className, speed = 12 }: ParallaxProps) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!outer.current || !inner.current) return;
      const mm = gsap.matchMedia();
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
          gsap.fromTo(
            inner.current,
            { yPercent: -speed },
            {
              yPercent: speed,
              ease: "none",
              scrollTrigger: {
                trigger: outer.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        },
      );
    },
    { scope: outer },
  );

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
