import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";
import { logo } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={logo.main}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-bold text-cream">
                TribeSystems
              </span>
            </div>
            <p className="max-w-xs text-sm text-cream/50">{site.subline}</p>
            <a
              href={`mailto:${site.email}`}
              className="inline-block font-mono text-xs tracking-[0.2em] text-ember hover:text-cream"
            >
              {site.email}
            </a>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cream/40">
                Company
              </p>
              <ul className="space-y-2.5 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-cream/70 hover:text-ember">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/#contact" className="text-cream/70 hover:text-ember">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cream/40">
                Legal
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/privacy" className="text-cream/70 hover:text-ember">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-eu" className="text-cream/70 hover:text-ember">
                    Privacy (EU)
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-uk" className="text-cream/70 hover:text-ember">
                    Privacy (UK)
                  </Link>
                </li>
                <li>
                  <Link href="/prize_draw" className="text-cream/70 hover:text-ember">
                    Prize Draw Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} TribeSystems. All rights reserved.
          </p>
          <p className="font-mono tracking-[0.2em]">TRIBESYSTEMS.IO</p>
        </div>
      </div>
    </footer>
  );
}
