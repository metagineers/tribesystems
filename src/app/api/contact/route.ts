import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content";

// Trivial in-memory rate limit — resets on cold start, good enough for a
// marketing contact form behind Vercel's platform-level protections.
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill every field — silently accept and drop.
  if (typeof data.website === "string" && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const fanbase = String(data.fanbase ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if ([name, email, company, fanbase].some((v) => v.length > 200) || message.length > 5000) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No delivery configured — tell the client to fall back to mailto.
    return NextResponse.json({ ok: true, fallback: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "TribeSystems <onboarding@resend.dev>",
      to: [site.email],
      replyTo: email,
      subject: `Contact from ${name} (${company})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company/Brand: ${company}`,
        `Fan following: ${fanbase || "not specified"}`,
        "",
        message || "(no message)",
      ].join("\n"),
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
