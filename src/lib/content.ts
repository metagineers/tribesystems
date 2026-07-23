/**
 * Single source of truth for all marketing copy.
 * Carried over from tribesystems.ai, adapted for tribesystems.io.
 */

export const site = {
  name: "TribeSystems",
  domain: "https://tribesystems.io",
  tagline: "Technology for Brands to engage Fans.",
  subline: "Tribe is the operating system for the fan economy.",
  description:
    "Connect brands with passionate fans through interactive experiences, spending rewards, and AI-powered hyper-personalisation.",
  email: "hello@tribesystems.io",
} as const;

export type Pillar = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  features: string[];
  stat: { value: number; suffix: string; caption: string };
  image: string;
};

export const pillars: Pillar[] = [
  {
    slug: "payments",
    label: "Payments Built In",
    title: "Every tap is a signal.",
    summary:
      "Payment capture is woven into the fan experience — personalised cards, digital wallets, instant rewards the moment fans spend.",
    detail:
      "Tribe puts payments at the centre of fan engagement. Fans spend with personalised cards and digital wallets, and every transaction becomes a moment to reward loyalty instantly — driving repeat business and deepening the relationship with every purchase.",
    features: [
      "Personalised cards & digital wallets",
      "Instant reward distribution at the point of spend",
      "Transaction-level fan insight",
      "Loyalty loops that drive repeat business",
    ],
    stat: { value: 100, suffix: "%", caption: "of spend captured as engagement data" },
    image: "pillar-payments",
  },
  {
    slug: "data",
    label: "Driven by Data",
    title: "Beyond static segments.",
    summary:
      "AI-driven analysis of spending patterns, viewing history and engagement — hyper-personalising sponsor offers in real time.",
    detail:
      "Static audience segments are dead. Tribe's AI analyses spending patterns, viewing history and platform engagement continuously, hyper-personalising sponsor offers and advertising in real time — so every fan sees what matters to them, the moment it matters.",
    features: [
      "Real-time AI analysis of fan behaviour",
      "Hyper-personalised sponsor offers",
      "Live engagement & revenue analytics",
      "Predictive signals, not stale segments",
    ],
    stat: { value: 24, suffix: "/7", caption: "always-on personalisation engine" },
    image: "pillar-data",
  },
  {
    slug: "engage",
    label: "Engage Fans & Drive Revenue",
    title: "Fans become the channel.",
    summary:
      "An entirely new marketing channel in the hands of your most passionate fans — social rewards, attendance incentives, viral loops.",
    detail:
      "Tribe places an entirely new, powerful marketing channel directly in the hands of your most passionate fans. Social rewards and attendance incentives turn engagement into advocacy — and advocacy into revenue — through viral loops your fans power themselves.",
    features: [
      "Social rewards & attendance incentives",
      "Fan-powered viral marketing loops",
      "Community engagement that compounds",
      "Engagement converted directly to revenue",
    ],
    stat: { value: 1, suffix: "M+", caption: "fan interactions ready to activate" },
    image: "pillar-engage",
  },
];

export type Vertical = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  image: string;
};

export const verticals: Vertical[] = [
  {
    slug: "sports",
    label: "Professional Sports & Motorsports",
    title: "Own the gameday.",
    summary:
      "From stadium fixtures to race weekends — reward the fans in the stands and trackside, and grow the spend around every event.",
    detail:
      "Tribe powers matchday and race-weekend activation end to end: ticket renewals, premium seat and paddock targeting, personalised sponsor messaging — while location-aware rewards grow secondary spend on concessions and merchandise while fans are still at the venue. Built for football clubs, motorsports series, cycling events and every fanbase that shows up in person.",
    points: [
      "Gameday & race-weekend activation",
      "Ticket renewals & premium seat targeting",
      "Personalised sponsor messaging",
      "Location-aware rewards for concessions & merch",
    ],
    image: "vertical-sports",
  },
  {
    slug: "music",
    label: "Live Music & Festivals",
    title: "Every fan, for life.",
    summary:
      "Capture the full lifecycle — pre-sale to merch stand — and maximise Lifetime Artist Value with VIP upgrades and exclusive content.",
    detail:
      "From pre-sale to the merch stand, Tribe captures the full fan lifecycle. VIP upgrades, exclusive content and personalised offers maximise Lifetime Artist Value (LAV) — turning one-night audiences into lifelong communities.",
    points: [
      "Full lifecycle capture: pre-sale → merch",
      "VIP upgrades & exclusive content",
      "Lifetime Artist Value (LAV) maximisation",
      "Festival-scale engagement, fan-level precision",
    ],
    image: "vertical-music",
  },
  {
    slug: "esports",
    label: "eSports & Gaming",
    title: "Viewers into subscribers.",
    summary:
      "Viewing-history analysis that converts passive viewers into paying subscribers — battle passes, micro-transactions, community.",
    detail:
      "Tribe analyses viewing history and engagement to convert passive viewers into paying subscribers. Personalised battle pass and micro-transaction promotion meets fans where they already are — in the stream, in the game, in the community.",
    points: [
      "Viewing-history analysis & segmentation",
      "Battle pass & micro-transaction adoption",
      "Passive viewers → paying subscribers",
      "Community-native engagement",
    ],
    image: "vertical-esports",
  },
];

export const about = {
  headline: "Hyper-personalisation at scale.",
  mission:
    "We're revolutionising fan engagement — connecting brands with their most passionate fans through innovative technology and data-driven personalisation.",
  body:
    "Tribe empowers sports teams, music artists, gaming organisations and entertainment brands with real-time analytics, AI-powered insights and payments built into the fan experience. We transform data into action — driving revenue and building fan relationships that last.",
  values: [
    {
      name: "Innovation",
      text: "We push fan engagement technology forward — never settling for how it's always been done.",
    },
    {
      name: "Data-driven",
      text: "Decisions from live signals, not static segments. The data leads, we follow fast.",
    },
    {
      name: "Fan-first",
      text: "Everything we build starts with the fan experience. Delighted fans build brands.",
    },
    {
      name: "Partnership",
      text: "We work as an extension of your team — your goals are our roadmap.",
    },
  ],
} as const;

export const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
] as const;
