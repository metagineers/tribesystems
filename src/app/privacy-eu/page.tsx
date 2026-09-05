import type { Metadata } from "next";
import Image from "next/image";
import privacyNotice from "./content.json";

export const metadata: Metadata = {
  title: "Privacy Notice — European Economic Area — TribeSystems",
  description: "Kolab privacy notice for users in the European Economic Area.",
};

export default function PrivacyEUPage() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0F0A1F]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Tribe" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <article
          className="text-zinc-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: privacyNotice.html }}
        />
      </main>

      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Tribe" width={24} height={24} className="rounded-md" />
            <span className="text-sm font-semibold">TribeSystems</span>
          </a>
          <p className="text-xs text-zinc-600">© 2026 TribeSystems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
