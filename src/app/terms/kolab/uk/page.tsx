import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import currentTerms from "../../../../../public/legal/kolab/terms/uk/current.json";

export const metadata: Metadata = {
  title: "Kolab Terms & Conditions (UK)",
  description: "UK terms and conditions for the Kolab from Veloce app.",
};

export default function KolabTermsPage() {
  // Use the same versioned legal text that the app already references. Do not
  // retype or paraphrase legal clauses in this page.
  const terms = readFileSync(
    join(process.cwd(), "public", currentTerms.url.replace(/^\//, "")),
    "utf8",
  );

  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#e06c2a]">
          Kolab from Veloce
        </div>
        <h1 className="mb-4 text-4xl font-bold">Terms &amp; Conditions (UK)</h1>
        <p className="mb-3 text-zinc-400">
          Equals Money general terms and Tribe service schedules for the Kolab app.
        </p>
        <p className="mb-10 text-sm text-zinc-500">
          Version {currentTerms.version} · Effective {currentTerms.effectiveFrom} ·{" "}
          <a href={currentTerms.url} download className="text-[#e06c2a] hover:underline">
            Download the complete terms (text)
          </a>
        </p>
        <article aria-label="Complete Kolab UK terms and conditions" className="space-y-5 border-t border-white/10 pt-10 text-zinc-300">
          {terms.trim().split(/\n\s*\n/).map((paragraph, index) => (
            <p key={index} className="whitespace-pre-wrap break-words leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
        <p className="mt-12 text-sm text-zinc-500">
          <Link href="/privacy" className="text-[#e06c2a] hover:underline">
            Privacy notices
          </Link>
        </p>
      </main>
    </div>
  );
}
