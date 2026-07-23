"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { media } from "@/lib/assets";
import { site } from "@/lib/content";
import VideoAsset from "@/components/ui/VideoAsset";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/motion/Magnetic";
import SplitHeading from "@/components/motion/SplitHeading";
import { useMotionOK } from "@/components/motion/useMotionOK";
import { useScrollTo } from "@/components/motion/SmoothScroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ParticleField = dynamic(() => import("@/components/motion/ParticleField"), {
  ssr: false,
});

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const motionOK = useMotionOK();
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Content drifts up + fades as the next section arrives; media zooms subtly.
        gsap.to("[data-hero-content]", {
          yPercent: -18,
          autoAlpha: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to("[data-hero-media]", {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to("[data-hero-cue]", {
          autoAlpha: 0,
          scrollTrigger: {
            trigger: section.current,
            start: "2% top",
            end: "12% top",
            scrub: true,
          },
        });
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="relative flex min-h-[100svh] items-center justify-center overflow-clip"
    >
      <div data-hero-media className="absolute inset-0">
        <VideoAsset
          src={media.heroVideo}
          poster={media.heroPoster}
          alt="Fans celebrating in a stadium at night"
          priority
          className="h-full w-full"
        />
        {/* Text-protecting scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-navy/55 to-ink" />
      </div>

      {motionOK && (
        <div className="absolute inset-0 hidden md:block">
          <ParticleField />
        </div>
      )}

      <div
        data-hero-content
        className="relative z-10 mx-auto max-w-5xl px-5 pt-24 pb-16 text-center sm:px-8"
      >
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-ember">
          The fan economy, operated
        </p>
        <SplitHeading
          as="h1"
          mode="char"
          className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Technology for Brands to engage{" "}
          <span className="text-ember">Fans.</span>
        </SplitHeading>
        <p className="mx-auto mt-8 max-w-xl font-mono text-sm leading-relaxed tracking-wide text-cream/70">
          {site.subline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Button onClick={() => scrollTo("#contact")}>Get in touch</Button>
          </Magnetic>
          <Button href="/platform" variant="ghost">
            Explore the platform
          </Button>
        </div>
      </div>

      <div
        data-hero-cue
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cream/50">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-clip bg-cream/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[cue_1.6s_ease-in-out_infinite] bg-ember" />
        </span>
      </div>
    </section>
  );
}
