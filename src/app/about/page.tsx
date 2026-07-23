import type { Metadata } from "next";
import Image from "next/image";
import { about, site } from "@/lib/content";
import { media } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "TribeSystems is revolutionising fan engagement — connecting brands with their most passionate fans through technology and data-driven personalisation.",
};

export default function AboutPage() {
  return (
    <>
      <header className="relative overflow-clip bg-ink pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="absolute inset-x-0 top-0 h-[60vh] opacity-40">
          <Image
            src={media.aboutTexture}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
              About us
            </p>
          </Reveal>
          <SplitHeading
            as="h1"
            mode="char"
            className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-cream text-balance sm:text-7xl"
          >
            {about.headline}
          </SplitHeading>
          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">
              {about.mission}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <Reveal>
            <p className="max-w-3xl text-xl leading-relaxed text-cream/80">
              {about.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream text-navy">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
              What we stand for
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-clip rounded-2xl bg-navy/10 sm:grid-cols-2">
            {about.values.map((value, i) => (
              <Reveal key={value.name} delay={i * 0.05}>
                <div className="group h-full bg-cream p-8 transition-colors duration-500 hover:bg-navy sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-navy transition-colors duration-500 group-hover:text-cream">
                    {value.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70 transition-colors duration-500 group-hover:text-cream/70">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
          <Reveal>
            <p className="font-mono text-sm tracking-[0.2em] text-cream/50">
              Talk to the team —{" "}
              <a href={`mailto:${site.email}`} className="text-ember hover:text-cream">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
