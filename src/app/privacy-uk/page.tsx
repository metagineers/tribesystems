import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy (UK) — TribeSystems",
  description: "Tribe UK Privacy Policy",
};

export default function PrivacyUKPage() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0A1F]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e06c2a] to-[#202a37] flex items-center justify-center">
              <span className="text-white font-bold text-base">T</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy (UK)</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          At Tribe, we take your privacy seriously. Read our policy to find out how we use your personal details and keep them safe.
        </p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Who are we?</h2>
            <p>
              Tribe and Tribe Systems are trading styles of Tribe Ltd (registered in Jersey No. 142759). Tribe Ltd is part of the Quorum Group of companies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">What personal information do we collect?</h2>
            <p>
              Most personal data is collected directly through the application process. Any personal data collected indirectly will be mentioned in this statement. Whether or not you become a customer, we may ask you for (but are not limited to) your:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Title</li>
              <li>Name</li>
              <li>Nationality</li>
              <li>Current address</li>
              <li>Date of birth</li>
              <li>Email address</li>
              <li>Mobile phone number</li>
              <li>Home phone number</li>
              <li>Personal data about other cardholders</li>
            </ul>
            <p>
              You must have the authority of other Directors, shareholders, and cardholders to provide their personal data to us and share this privacy policy with them beforehand. You are free to withdraw your consent at any time, though this may result in us being unable to perform certain services for you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How do we use your information?</h2>
            <p>
              The way we collect and use data is always lawful. We use your personal data to provide information on the services you have requested or products you have ordered. Data is collected and used on a lawful basis where our interests do not outweigh your interests.
            </p>
            <p>We use your data to:</p>
            <p className="font-medium text-white">Provide our products and services to you under contract:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Take steps prior to entering into a contract</li>
              <li>Decide whether to enter a contract</li>
              <li>Manage and perform a contract</li>
              <li>Make sure our records are up to date</li>
            </ul>
            <p className="font-medium text-white">Fulfil our legal obligations:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>When you exercise your rights under GDPR and make requests</li>
              <li>For compliance with legal and regulatory requirements, and related disclosures</li>
              <li>For the establishment and defence of legal rights</li>
              <li>For activities relating to the prevention, detection, and investigation of crime</li>
              <li>To verify your identity and prevent fraud and money laundering</li>
              <li>To monitor communications and activities on your account</li>
            </ul>
            <p className="font-medium text-white">Carry out our legitimate interests:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>For good governance, accounting, managing, and auditing our business</li>
              <li>For market research, analysis, and developing statistics</li>
              <li>To detect, prevent, and investigate fraud, money laundering, and other crimes</li>
            </ul>
            <p className="font-medium text-white">With your consent, we:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Send you marketing communications</li>
              <li>Disclose your personal data to other people or organisations when you ask us to</li>
              <li>Process any special categories of personal data at your request</li>
              <li>Provide cookie information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How long do we hold on to your information?</h2>
            <p>We keep your data whether you become a customer or not:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>For as long as it takes to deal with your query</li>
              <li>For as long as you might legally bring a claim against us</li>
              <li>After your account has been closed or otherwise come to an end, based on our legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">What are your rights?</h2>
            <p>Under GDPR (General Data Protection Regulation), you have:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>The right to be informed</li>
              <li>The right of access</li>
              <li>The right of rectification</li>
              <li>The right of erasure</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object</li>
              <li>Rights in relation to automated decision-making and profiling</li>
            </ul>
            <p>
              If you would like further information about data protection, you can visit the Information Commissioner&apos;s Office (ICO) at{" "}
              <a href="https://ico.org.uk" className="text-[#e06c2a] hover:underline">ico.org.uk</a>.
              The ICO is the UK&apos;s independent authority set up to uphold information rights in the public interest and data privacy for individuals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Fraud prevention and money laundering checks</h2>
            <p>
              We may use your personal details in order to conduct identity checks as required by law as a measure to prevent money laundering.
            </p>
            <p>
              The personal information we have collected from you will be shared with fraud prevention agencies who will use it to prevent fraud and money laundering and to verify your identity. If fraud is detected, you could be refused certain services, finance, or employment. Further details can be found by visiting{" "}
              <a href="https://www.cifas.org.uk/fpn" className="text-[#e06c2a] hover:underline">www.cifas.org.uk/fpn</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Automated decision making</h2>
            <p>
              We may process your personal data without human intervention to evaluate your personal situation, such as transactional history and account-opening anniversary events. We may do this to decide what marketing communications might be suitable for you, to analyse statistics, and to assess risks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Sharing your information</h2>
            <p>We will not sell, share, or rent your information to others except as set out in this policy. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Organisations that provide operational services relating to the performance of cards or services that you use</li>
              <li>Suppliers, such as card producers, when it is necessary in order to fulfil our obligations to you</li>
              <li>The purchaser of the company or its assets in the event of a sale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Transferring your information overseas</h2>
            <p>
              We might transfer your personal data outside of the UK and EEA (European Economic Area). In this event, we will always take all necessary steps to ensure the data is held securely and processed in line with applicable laws in the UK.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Use of cookies</h2>
            <p>
              Our website uses cookies. A cookie is a piece of data stored on your computer&apos;s hard drive that identifies your computer while you are using our site. Cookies have a number of uses including enabling you to sign in and out of our website, analytics, and tracking interests to enhance your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How to contact us</h2>
            <p>
              You can write to the Data Protection Officer (DPO) regarding accessing your personal data or any part of this privacy policy by writing to:
            </p>
            <p className="text-white font-medium">
              Tribe Ltd<br />
              Beauport Tribe House<br />
              L&apos;Avenue de la Commune<br />
              St Peter<br />
              JE3 7BY Jersey
            </p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@tribesystems.io" className="text-[#e06c2a] hover:underline">
                privacy@tribesystems.io
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#e06c2a] to-[#202a37] flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="text-sm font-semibold">TribeSystems</span>
          </a>
          <p className="text-xs text-zinc-600">
            © 2026 TribeSystems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
