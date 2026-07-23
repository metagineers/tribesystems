import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

/** Shared end-of-page call to action band used by subpages. */
export default function CtaBand() {
  return (
    <section className="border-t border-cream/10 bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-24 sm:px-8 md:flex-row md:items-center md:justify-between">
        <SplitHeading
          as="h2"
          mode="line"
          className="max-w-xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl"
        >
          Ready to activate your fans?
        </SplitHeading>
        <Reveal>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 font-semibold text-ink transition-colors duration-300 hover:bg-cream hover:text-navy"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
