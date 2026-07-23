import type { Metadata } from "next";
import { ViewTransition } from "react";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CursorGlow from "@/components/motion/CursorGlow";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/content";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "TribeSystems — Technology for Brands to engage Fans",
    template: "%s — TribeSystems",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.domain,
    title: "TribeSystems — Technology for Brands to engage Fans",
    description: site.description,
    images: [{ url: "/card.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TribeSystems — Technology for Brands to engage Fans",
    description: site.description,
    images: ["/card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <body className="bg-ink font-body text-cream antialiased">
        <SmoothScroll>
          <CursorGlow />
          <Nav />
          <ViewTransition>
            <main>{children}</main>
          </ViewTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
