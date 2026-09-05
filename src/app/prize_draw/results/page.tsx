import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prize Draw Results — TribeSystems",
  description: "Prize draw winner announcements from Tribe.",
};

export default function PrizeDrawResultsPage() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-[#0F0A1F]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Tribe" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#e06c2a] mb-3">
          Prize Draws
        </p>
        <h1 className="text-4xl font-bold mb-6">Results</h1>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          <p className="text-xl leading-relaxed text-zinc-300">
            We shall announce winners as soon as they are drawn - check back soon
          </p>
        </div>
        <a
          href="/prize_draw"
          className="inline-flex mt-8 text-sm text-[#e06c2a] hover:underline"
        >
          View Master Prize Draw Terms and Conditions
        </a>
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
