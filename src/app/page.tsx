"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    fanFollowing: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ACompany: ${form.company}%0AEstimated Fan Following: ${form.fanFollowing}%0AMessage: ${form.message}`;
    window.location.href = `mailto:hello@tribesystems.io?subject=Contact from ${form.company}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#202a37] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#202a37]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-light.jpg"
              alt="Tribe"
              width={40}
              height={40}
              className="rounded-lg mix-blend-lighten"
            />
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#e06c2a] hover:bg-[#2d3f50] transition text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Fans celebrating"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#202a37]/80 via-[#202a37]/30 to-[#202a37]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          {/* Logo mark */}
          <div className="mb-10">
            <Image
              src="/logo-light.jpg"
              alt="Tribe"
              width={120}
              height={120}
              className="mx-auto rounded-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block">Technology for Brands</span>
            <span className="block">to engage{" "}
              <span className="text-[#e06c2a]">
                Fans.
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-12 font-light">
            Tribe is the operating system for the fan economy.
          </p>
          <a
            href="#contact"
            className="inline-flex px-10 py-4 rounded-full bg-[#e06c2a] hover:bg-[#2d3f50] transition font-semibold text-lg shadow-lg shadow-orange-900/30"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-zinc-400 text-lg">
              Tell us about your brand and fan community. We&apos;ll show you what Tribe can do.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold mb-2">Thanks!</h3>
              <p className="text-zinc-400">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#e06c2a] focus:outline-none focus:ring-1 focus:ring-[#e06c2a] text-sm placeholder:text-zinc-600 transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#e06c2a] focus:outline-none focus:ring-1 focus:ring-[#e06c2a] text-sm placeholder:text-zinc-600 transition"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                  Company / Brand *
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#e06c2a] focus:outline-none focus:ring-1 focus:ring-[#e06c2a] text-sm placeholder:text-zinc-600 transition"
                  placeholder="Your company or brand name"
                />
              </div>

              {/* Estimated Fan Following */}
              <div>
                <label htmlFor="fanFollowing" className="block text-sm font-medium text-zinc-300 mb-2">
                  Estimated worldwide fan following? *
                </label>
                <select
                  id="fanFollowing"
                  required
                  value={form.fanFollowing}
                  onChange={(e) => setForm({ ...form, fanFollowing: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#e06c2a] focus:outline-none focus:ring-1 focus:ring-[#e06c2a] text-sm text-zinc-300 transition appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#202a37]">Select range</option>
                  <option value="under-100k" className="bg-[#202a37]">Under 100,000</option>
                  <option value="100k-1m" className="bg-[#202a37]">100,000 – 1,000,000</option>
                  <option value="above-1m" className="bg-[#202a37]">Above 1 million</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#e06c2a] focus:outline-none focus:ring-1 focus:ring-[#e06c2a] text-sm placeholder:text-zinc-600 transition resize-none"
                  placeholder="Tell us about your fan community and what you're looking to achieve..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#e06c2a] hover:bg-[#2d3f50] transition font-semibold text-base shadow-lg shadow-orange-900/20"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-light.jpg"
              alt="Tribe"
              width={24}
              height={24}
              className="rounded-md mix-blend-lighten"
            />
            <span className="text-sm font-semibold">TribeSystems</span>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} TribeSystems. All rights reserved.
          </p>
          <a href="/privacy" className="text-xs text-zinc-500 hover:text-white transition">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
