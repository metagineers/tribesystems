import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import Verticals from "@/components/sections/Verticals";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  logo: `${site.domain}/logo.png`,
  description: site.description,
  email: site.email,
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Pillars />
      <Verticals />
      <AboutTeaser />
      <ContactSection />
    </>
  );
}
