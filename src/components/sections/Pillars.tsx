"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pillars } from "@/lib/content";
import { media } from "@/lib/assets";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pillarImage = (key: string) =>
  media.pillars[key as keyof typeof media.pillars];

export default function Pillars() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
          const stage = section.current?.querySelector("[data-stage]");
          if (!stage) return;
          const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", stage as HTMLElement);
          const images = gsap.utils.toArray<HTMLElement>("[data-panel-image]", stage as HTMLElement);

          // Initial: only the first pillar visible
          panels.forEach((p, i) => gsap.set(p, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 44 }));
          images.forEach((im, i) =>
            gsap.set(im, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.06 }),
          );

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: "+=220%",
              pin: true,
              scrub: 0.7,
              anticipatePin: 1,
            },
          });

          for (let i = 1; i < panels.length; i++) {
            tl.to(panels[i - 1], { autoAlpha: 0, y: -44, duration: 0.45 }, `step${i}`)
              .to(images[i - 1], { autoAlpha: 0, scale: 0.98, duration: 0.45 }, `step${i}`)
              .to(panels[i], { autoAlpha: 1, y: 0, duration: 0.45 }, `step${i}+=0.18`)
              .to(images[i], { autoAlpha: 1, scale: 1, duration: 0.45 }, `step${i}+=0.18`)
              .to("[data-rail-fill]", { scaleY: (i + 1) / panels.length, duration: 0.45 }, `step${i}`);
          }
          gsap.set("[data-rail-fill]", { scaleY: 1 / panels.length });
        },
      );
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative bg-ink" id="platform">
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 md:pt-36">
        <SectionHeading
          index="01"
          kicker="The Platform"
          title="The Tribe advantage: hyper-personalisation at scale."
          className="max-w-3xl"
        />
      </div>

      {/* Desktop: pinned crossfade stage */}
      <div
        data-stage
        className="relative mx-auto hidden h-screen max-w-7xl items-center px-8 md:flex"
      >
        {/* Progress rail */}
        <div className="absolute left-8 top-1/2 h-40 w-px -translate-y-1/2 bg-cream/15">
          <div
            data-rail-fill
            className="absolute inset-x-0 top-0 h-full origin-top bg-ember"
            style={{ transform: "scaleY(0.33)" }}
          />
        </div>

        <div className="grid w-full grid-cols-2 items-center gap-20 pl-12">
          {/* Copy panels (stacked) */}
          <div className="relative min-h-[420px]">
            {pillars.map((p, i) => (
              <div
                key={p.slug}
                data-panel
                className="absolute inset-0 flex flex-col justify-center"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
                  {String(i + 1).padStart(2, "0")} / {p.label}
                </p>
                <h3 className="mt-5 font-display text-4xl font-bold leading-tight text-cream lg:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
                  {p.summary}
                </p>
                <p className="mt-8 font-display text-5xl font-bold text-ember">
                  <CountUp value={p.stat.value} suffix={p.stat.suffix} />
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                  {p.stat.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Image stack */}
          <div className="relative aspect-[4/5] max-h-[70vh] overflow-clip rounded-2xl">
            {pillars.map((p) => (
              <div key={p.slug} data-panel-image className="absolute inset-0">
                <Image
                  src={pillarImage(p.image)}
                  alt={p.label}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="space-y-14 px-5 pb-10 pt-14 md:hidden">
        {pillars.map((p, i) => (
          <Reveal key={p.slug} className="space-y-5">
            <div className="relative aspect-[4/5] overflow-clip rounded-xl">
              <Image
                src={pillarImage(p.image)}
                alt={p.label}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
              {String(i + 1).padStart(2, "0")} / {p.label}
            </p>
            <h3 className="font-display text-3xl font-bold text-cream">{p.title}</h3>
            <p className="text-cream/70">{p.summary}</p>
            <p className="font-display text-4xl font-bold text-ember">
              <CountUp value={p.stat.value} suffix={p.stat.suffix} />
              <span className="ml-3 align-middle font-mono text-xs font-normal uppercase tracking-[0.2em] text-cream/50">
                {p.stat.caption}
              </span>
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <Link
            href="/platform"
            className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-ember"
          >
            Deep-dive the platform
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
