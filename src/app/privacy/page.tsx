import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy — TribeSystems",
  description: "Tribe Privacy Policies",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#010101] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#010101]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tribe"
              width={36}
              height={36}
              className="rounded-lg "
            />
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-4">Privacy</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          At Tribe, we take your privacy seriously. Please select the privacy policy applicable to your region.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/privacy-uk"
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#e06c2a]/40 transition group"
          >
            <div className="text-3xl mb-4">🇬🇧</div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[#e06c2a] transition">
              UK Privacy Policy
            </h2>
            <p className="text-sm text-zinc-500">
              Tribe Ltd, registered in Jersey. Applicable to UK residents.
            </p>
          </Link>

          <Link
            href="/privacy-eu"
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#e06c2a]/40 transition group"
          >
            <div className="text-3xl mb-4">🇪🇺</div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[#e06c2a] transition">
              EU Privacy Policy
            </h2>
            <p className="text-sm text-zinc-500">
              Tribe Europe Ltd, registered in Ireland. Applicable to EU residents.
            </p>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Tribe"
              width={24}
              height={24}
              className="rounded-md "
            />
            <span className="text-sm font-semibold">TribeSystems</span>
          </a>
          <p className="text-xs text-zinc-600">
            © 2026 TribeSystems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
