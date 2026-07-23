"use client";

import Image from "next/image";
import Link from "next/link";
import { verticals } from "@/lib/content";
import { media } from "@/lib/assets";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import SplitHeading from "@/components/motion/SplitHeading";

const verticalImage = (key: string) =>
  media.verticals[key as keyof typeof media.verticals];

export default function Verticals() {
  return (
    <section className="bg-ink" id="solutions">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8">
        <SectionHeading
          index="02"
          kicker="Solutions"
          title="Wherever fans gather, Tribe works."
          className="max-w-3xl"
        />
      </div>

      {verticals.map((v, i) => (
        <article
          key={v.slug}
          className="relative flex min-h-[92svh] items-center overflow-clip"
        >
          {/* Parallax background */}
          <Parallax speed={10} className="absolute inset-[-12%_0]">
            <Image
              src={verticalImage(v.image)}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/30" />

          {/* Giant chapter numeral */}
          <span
            aria-hidden
            className="text-outline pointer-events-none absolute -right-4 top-8 select-none font-display text-[34vw] font-bold leading-none md:text-[22vw]"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
            <div className="max-w-xl space-y-6">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
                  {v.label}
                </p>
              </Reveal>
              <SplitHeading
                as="h3"
                mode="line"
                className="font-display text-4xl font-bold leading-[1.05] text-cream sm:text-6xl"
              >
                {v.title}
              </SplitHeading>
              <Reveal>
                <p className="text-lg leading-relaxed text-cream/75">{v.summary}</p>
              </Reveal>
              <Reveal stagger={0.08} className="space-y-3 pt-2">
                {v.points.map((point) => (
                  <p key={point} className="flex items-start gap-3 text-sm text-cream/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    {point}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </article>
      ))}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-ember"
          >
            See every solution
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
