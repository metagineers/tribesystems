import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 md:grid-cols-[1fr_1.2fr] md:py-36">
        <div>
          <SectionHeading
            index="04"
            kicker="Contact"
            title="Ready to activate your fans?"
          />
          <Reveal>
            <p className="mt-6 max-w-sm leading-relaxed text-cream/65">
              Tell us about your brand and your fanbase — we&apos;ll show you what
              Tribe can do with it.
            </p>
          </Reveal>
          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block font-mono text-sm tracking-[0.2em] text-ember hover:text-cream"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
        <Reveal y={28}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
