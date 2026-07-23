"use client";

import Link from "next/link";
import { about } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

export default function AboutTeaser() {
  const marqueeItems = [...about.values, ...about.values];

  return (
    <section className="relative overflow-clip rounded-t-[2.5rem] bg-cream text-navy md:rounded-t-[4rem]">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
            03 / Who we are
          </p>
        </Reveal>
        <SplitHeading
          as="h2"
          mode="char"
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-navy text-balance sm:text-7xl"
        >
          {about.headline}
        </SplitHeading>
        <Reveal>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/75">
            {about.mission}
          </p>
        </Reveal>
        <Reveal>
          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-navy transition-colors hover:text-ember"
          >
            Our story
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Values marquee — pauses on hover, static under reduced motion */}
      <div className="border-t border-navy/10 py-6">
        <div className="flex overflow-clip hover:[&>div]:[animation-play-state:paused]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {marqueeItems.map((value, i) => (
              <span
                key={`${value.name}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap"
              >
                <span className="font-display text-2xl font-bold text-navy">
                  {value.name}
                </span>
                <span aria-hidden className="h-2 w-2 rounded-full bg-ember" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
