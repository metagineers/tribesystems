import type { Metadata } from "next";
import Image from "next/image";
import { verticals } from "@/lib/content";
import { media } from "@/lib/assets";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Tribe for professional sports & motorsports, live music & festivals, and eSports & gaming — fan engagement solutions for every arena.",
};

export default function SolutionsPage() {
  return (
    <>
      <header className="relative overflow-clip bg-ink pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
              Solutions
            </p>
          </Reveal>
          <SplitHeading
            as="h1"
            mode="char"
            className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-cream text-balance sm:text-7xl"
          >
            Wherever fans gather.
          </SplitHeading>
          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">
              Stadiums, race tracks, festival fields and arenas — Tribe adapts to
              the rhythms of every fanbase and turns passion into measurable
              revenue.
            </p>
          </Reveal>
        </div>
      </header>

      {verticals.map((vertical, i) => (
        <section key={vertical.slug} className={i % 2 === 1 ? "bg-navy" : "bg-ink"}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:gap-20">
            <div className={i % 2 === 1 ? "md:order-2" : undefined}>
              <SectionHeading
                index={String(i + 1).padStart(2, "0")}
                kicker={vertical.label}
                title={vertical.title}
              />
              <Reveal>
                <p className="mt-6 leading-relaxed text-cream/70">{vertical.detail}</p>
              </Reveal>
              <Reveal stagger={0.07} className="mt-8 space-y-3">
                {vertical.points.map((point) => (
                  <p key={point} className="flex items-start gap-3 text-sm text-cream/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    {point}
                  </p>
                ))}
              </Reveal>
            </div>
            <Reveal y={60} className={i % 2 === 1 ? "md:order-1" : undefined}>
              <div className="relative aspect-[3/2] overflow-clip rounded-2xl">
                <Image
                  src={media.verticals[vertical.image as keyof typeof media.verticals]}
                  alt={vertical.label}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
