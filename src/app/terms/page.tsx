import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App Terms & Conditions",
  description: "Terms and conditions for apps powered by TribeSystems.",
};

export default function AppTermsPage() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#e06c2a]">
          Legal
        </div>
        <h1 className="mb-4 text-4xl font-bold">App Terms &amp; Conditions</h1>
        <p className="mb-12 text-lg text-zinc-400">
          Select the app and region that apply to you.
        </p>
        <section aria-labelledby="kolab-app">
          <h2 id="kolab-app" className="mb-6 text-2xl font-semibold">Kolab from Veloce</h2>
          <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/terms/kolab/uk"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-[#e06c2a]/40"
          >
            <div className="mb-4 text-3xl" aria-hidden="true">🇬🇧</div>
            <h3 className="mb-2 text-xl font-semibold transition group-hover:text-[#e06c2a]">
              UK Terms &amp; Conditions
            </h3>
            <p className="text-sm text-zinc-400">
              Payment and card terms from Equals Money, plus Tribe app service schedules.
            </p>
          </Link>
          <Link
            href="/terms/kolab/shipping"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-[#e06c2a]/40"
          >
            <h3 className="mb-2 text-xl font-semibold transition group-hover:text-[#e06c2a]">
              Commerce Store — Shipping &amp; Delivery
            </h3>
            <p className="text-sm text-zinc-400">
              Where we ship, delivery estimates, and taxes and duties.
            </p>
          </Link>
          </div>
        </section>
        <p className="mt-12 text-sm text-zinc-500">
          Looking for privacy information?{" "}
          <Link href="/privacy" className="text-[#e06c2a] hover:underline">
            View our privacy notices
          </Link>
        </p>
      </main>
    </div>
  );
}
