import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TribeSystems — Fan Engagement Platform",
  description:
    "Connect brands with passionate fans through interactive experiences, spending rewards, and AI-powered hyper-personalisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-[Arial,_Helvetica,_sans-serif] antialiased">{children}</body>
    </html>
  );
}
