"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { nav, site } from "@/lib/content";
import { logo } from "@/lib/assets";
import Magnetic from "@/components/motion/Magnetic";
import { useScrollTo } from "@/components/motion/SmoothScroll";

export default function Nav() {
  const pathname = usePathname();
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const contactClick = () => {
    setOpen(false);
    if (pathname === "/") scrollTo("#contact");
  };

  return (
    <header
      style={{ viewTransitionName: "site-nav" }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cream/10 bg-navy/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="TribeSystems home">
          <Image src={logo.main} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight text-cream">
            Tribe<span className="text-ember">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:text-ember",
                pathname === item.href ? "text-ember" : "text-cream/80",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Magnetic>
            {pathname === "/" ? (
              <button
                onClick={contactClick}
                className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-cream hover:text-navy"
              >
                Get in touch
              </button>
            ) : (
              <Link
                href="/#contact"
                className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-cream hover:text-navy"
              >
                Get in touch
              </Link>
            )}
          </Magnetic>
        </div>

        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={clsx(
              "h-0.5 w-6 bg-cream transition-transform duration-300",
              open && "translate-y-1 rotate-45",
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-6 bg-cream transition-transform duration-300",
              open && "-translate-y-1 -rotate-45",
            )}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-lg transition-opacity duration-400 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="space-y-6">
          {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
            <li
              key={item.href}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
              className={clsx(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              <Link
                href={item.href}
                className="font-display text-4xl font-bold text-cream hover:text-ember"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
            className={clsx(
              "pt-4 transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <Link
              href="/#contact"
              onClick={contactClick}
              className="inline-block rounded-full bg-ember px-7 py-3.5 font-semibold text-ink"
            >
              Get in touch
            </Link>
          </li>
        </ul>
        <p className="absolute bottom-10 left-8 font-mono text-xs tracking-[0.25em] text-cream/40">
          {site.email}
        </p>
      </div>
    </header>
  );
}
