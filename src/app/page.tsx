"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0A1F]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C2BD9] to-[#00D4AA] flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold">TribeSystems</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#verticals" className="hover:text-white transition">Verticals</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 rounded-full bg-[#6C2BD9] hover:bg-[#8B5CF6] transition text-sm font-medium"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6C2BD9]/10 to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#6C2BD9]/5 blur-3xl" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
            Next-gen fan engagement
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Turn Fans Into
            <br />
            <span className="bg-gradient-to-r from-[#6C2BD9] to-[#00D4AA] bg-clip-text text-transparent">
              Superfans
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect brands with passionate fans through interactive experiences,
            spending rewards, and AI-powered hyper-personalisation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6C2BD9] to-[#8B5CF6] hover:opacity-90 transition font-medium text-base"
            >
              Request a Demo
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition font-medium text-base text-zinc-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Complete Fan Engagement Platform
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Real-time analytics, AI-driven personalisation, and integrated payments — all in one platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Hyper-Personalisation",
                desc: "AI-powered insights that understand every fan's unique preferences, behaviour patterns, and spending habits.",
              },
              {
                icon: "💳",
                title: "Integrated Payments",
                desc: "Seamless card-linked rewards that automatically trigger when fans spend at partner venues and retailers.",
              },
              {
                icon: "📊",
                title: "Real-Time Analytics",
                desc: "Deep fan intelligence combining engagement data with transactional insights for closed-loop attribution.",
              },
              {
                icon: "🏆",
                title: "Loyalty & Rewards",
                desc: "Gamified engagement that turns casual fans into loyal superfans through meaningful interactions and rewards.",
              },
              {
                icon: "🔗",
                title: "Brand Partnerships",
                desc: "Connect sponsors directly with engaged fan audiences. Prove ROI from fan engagement to purchase.",
              },
              {
                icon: "⚡",
                title: "White-Label Ready",
                desc: "Deploy branded fan experiences for teams, venues, and leagues — fully customisable to your brand.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#6C2BD9]/30 transition group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#00D4AA] transition">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Entertainment</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Purpose-built for the industries where fan passion drives everything.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚽",
                title: "Professional Sports",
                desc: "Match-day engagement, season ticket rewards, merchandise offers, and stadium experiences.",
              },
              {
                icon: "🎵",
                title: "Live Music & Festivals",
                desc: "Artist fan clubs, concert rewards, festival spending incentives, and exclusive content drops.",
              },
              {
                icon: "🎮",
                title: "eSports & Gaming",
                desc: "Viewer engagement, team support rewards, in-game partnerships, and streamer collaborations.",
              },
            ].map((vertical, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 text-center"
              >
                <div className="text-5xl mb-6">{vertical.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{vertical.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{vertical.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Talk</h2>
          <p className="text-zinc-400 mb-10">
            Ready to transform your fan engagement? Get in touch and we&apos;ll show you what&apos;s possible.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:hello@tribesystems.io?subject=Demo Request&body=Email: ${email}`;
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 focus:border-[#6C2BD9] focus:outline-none text-sm placeholder:text-zinc-600"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6C2BD9] to-[#8B5CF6] hover:opacity-90 transition font-medium text-sm whitespace-nowrap"
            >
              Request Demo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6C2BD9] to-[#00D4AA] flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="text-sm font-semibold">TribeSystems</span>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} TribeSystems. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <a href="https://tribesystems.ai" className="hover:text-white transition">
              tribesystems.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
