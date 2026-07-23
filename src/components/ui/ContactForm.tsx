"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { site } from "@/lib/content";
import Button from "@/components/ui/Button";

type Status = "idle" | "pending" | "success" | "error";

const inputCls =
  "w-full rounded-lg border border-cream/15 bg-navy/60 px-4 py-3.5 text-cream placeholder:text-cream/35 transition-all duration-300 focus:border-ember focus:shadow-[0_0_24px_-6px_rgba(224,108,42,0.45)] focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.fallback) {
        // No delivery key configured — hand off to the user's mail app.
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nFan following: ${data.fanbase}\n\n${data.message}`,
        );
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          `Contact from ${data.name} (${data.company})`,
        )}&body=${body}`;
        setStatus("success");
        form.reset();
        return;
      }
      if (!res.ok) throw new Error(json.error ?? "Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ember/30 bg-navy/60 p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ember/15">
          <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-ember" fill="none" strokeWidth={2.5}>
            <path
              d="M4 12.5l5 5L20 6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="[stroke-dasharray:24] [stroke-dashoffset:0] motion-safe:animate-[check_0.6s_ease-out]"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-cream">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-sm text-cream/60">
          Your message is on its way to the Tribe team.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ember hover:text-cream"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot — real users never see or fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
            Name *
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="you@brand.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
            Company / Brand *
          </label>
          <input id="company" name="company" required className={inputCls} placeholder="Brand or organisation" />
        </div>
        <div>
          <label htmlFor="fanbase" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
            Worldwide fan following
          </label>
          <select id="fanbase" name="fanbase" defaultValue="" className={clsx(inputCls, "appearance-none")}>
            <option value="" disabled>
              Select a range
            </option>
            <option value="Under 100k">Under 100k</option>
            <option value="100k – 1M">100k – 1M</option>
            <option value="Above 1M">Above 1M</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputCls}
          placeholder="Tell us about your fans…"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-ember">
          Something went wrong — please email us directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
      <Button type="submit" disabled={status === "pending"} className="w-full sm:w-auto">
        {status === "pending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
