"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type SplitHeadingProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** char = cinematic rise per character; line = softer per-line reveal */
  mode?: "char" | "line";
  delay?: number;
};

/**
 * Splits a heading and staggers it into view. Waits for fonts to load
 * before splitting so line breaks are measured correctly. With reduced
 * motion (or no JS) the heading simply renders as-is.
 */
export default function SplitHeading({
  children,
  as: Tag = "h2",
  className,
  mode = "line",
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let split: SplitText | undefined;
      document.fonts.ready.then(
        contextSafe!(() => {
          const el = ref.current;
          if (!el) return;
          split = SplitText.create(el, {
            type: mode === "char" ? "lines,words,chars" : "lines",
            linesClass: "overflow-clip",
            autoSplit: true,
            aria: "auto",
            onSplit: (self) => {
              const targets = mode === "char" ? self.chars : self.lines;
              return gsap.from(targets, {
                yPercent: 112,
                duration: mode === "char" ? 0.9 : 1.1,
                ease: "power4.out",
                stagger: mode === "char" ? 0.016 : 0.09,
                delay,
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              });
            },
          });
        }),
      );
      return () => split?.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
