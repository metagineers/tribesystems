import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy (EU) — TribeSystems",
  description: "Tribe EU Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E8732A] to-[#D4621F] flex items-center justify-center">
              <span className="text-white font-bold text-base">T</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy (EU)</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          At Tribe, we take your privacy seriously. Read our policy to find out how we use your personal details and keep them safe.
        </p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Who are we?</h2>
            <p>
              Tribe and Tribe Systems are trading styles of Tribe Europe Ltd (registered in Ireland). Tribe Europe Ltd is part of the Quorum Group of companies. Tribe respects the privacy of both internet users and any other individuals concerned, in accordance with current legislation, particularly the Law of 30 July 2018, related to the protection of privacy and its implementing decrees.
            </p>
            <p>
              These privacy protection rules define the personal data we collect and establish how it is processed. They also aim to inform you about the entities with whom we share this data, as well as the rights and freedoms you may exercise concerning our use of this data. These rules also describe the measures we implement to protect the security of the data and inform you about how you can contact us to obtain information about our privacy protection practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">What data do we collect?</h2>
            <p>
              In the context of processing credit card transactions, we collect information about you. Similarly, you may decide to communicate personal data to us in the context of a direct relationship we establish with you.
            </p>
            <p>
              As a company processing credit card transactions and providing payment institution services, we collect information about you from financial institutions and other entities involved in processing our transactions. We may also collect information about you from companies that benefit from Tribe products or services, from public information systems, and commercial information services.
            </p>
            <p>Personal data collected includes:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Personal contact details (e.g., name, postal address, email address, and phone or fax number)</li>
              <li>Professional contact details (e.g., job title, department, and company name)</li>
              <li>Username and password</li>
              <li>Bank card information (stored in a PCI DSS environment)</li>
              <li>Financial information (e.g., financial account information and consumer credit report information)</li>
              <li>Identification number or access code</li>
              <li>Content provided by you</li>
              <li>Other information (purchase behaviour and preferences, language preferences, age, date of birth, gender, and family status)</li>
            </ul>
            <p>
              Some data is collected automatically, for example through cookies when you visit our websites. Among the data collected this way are the IP address, browser type, operating system, referral URLs, information about actions performed on a website, and the dates and times of visits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Cookies</h2>
            <p>
              The Tribe website uses &ldquo;cookies.&rdquo; These are small text files created by a program on the website server of Tribe and, under certain circumstances, are saved on your PC&apos;s hard drive. These &ldquo;cookies&rdquo; are technically necessary to ensure good communication between your PC and the Tribe website. They notably save the language you choose during your first site visit, so you will automatically be served in your chosen language the next time.
            </p>
            <p>
              If you do not want these cookies to be saved on your hard drive, you can configure your internet browser to deny access to the hard drive. In this case, Tribe cannot guarantee the correct functioning of the websites under its control. If desired, you can delete these &ldquo;cookies&rdquo; from your hard drive after each visit to the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How do we use the data we collect?</h2>
            <p>We may use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Offer protection against the risk of fraud and unauthorized transactions, avoid disputes or liabilities, and manage exposure to risk</li>
              <li>Process your credit card transactions (including for operations like authorization, clearing, settlement, chargebacks, and other dispute resolution activities)</li>
              <li>Create and manage your online account and respond to your requests</li>
              <li>Provide you with products, services, and promotions, and inform you about them</li>
              <li>Operate, evaluate, and improve our business activities</li>
              <li>Improve our interactive resources and monitor their use</li>
              <li>Implement our Terms of Use</li>
              <li>Comply with applicable law, industry standards, and our policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Fraud prevention and money laundering checks</h2>
            <p>
              The personal data we have collected from you at application, or any stage may be shared with fraud prevention agencies. We are required by law to review transactions and report any which may be suspected of being related to money laundering activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">What data do we share?</h2>
            <p>
              We do not sell or disclose your personal data collected by us, except as mentioned in these rules.
            </p>
            <p>
              We share the personal data we collect for the purpose of executing credit card transactions and other operations you request. We may share the personal data we collect with our group companies, financial institutions that issue credit cards or process credit card transactions, organisations active in preventing credit card fraud, and merchants.
            </p>
            <p>
              We may also share this data with providers who deliver services on our behalf. However, we do not allow these providers to exploit or disclose this data in a context other than performing certain services on our behalf or complying with the law.
            </p>
            <p>
              We may also disclose your personal data (i) if we have a legal or judicial obligation; (ii) to law enforcement authorities or other state agencies; or (iii) when we consider such disclosure necessary to prevent physical harm or financial loss, or in the context of an investigation into suspected or actual fraudulent or illegal activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">Your rights and freedoms</h2>
            <p>
              You can refuse the assignment of a unique cookie identifier to your computer to prevent the collection and analysis of data when you visit our websites. Most browsers allow you to block cookies, receive a notification when you receive a new cookie, and delete existing cookies.
            </p>
            <p>
              You can at any time object to our sending of promotional communications by email by clicking on the unsubscribe link placed in the messages you receive from us or by contacting us as indicated below.
            </p>
            <p>
              You can revoke a consent you have previously granted or exercise a right of opposition to the processing of your personal data. Subject to applicable law, you may have a right of access, a right to information, a right of rectification, and a right of opposition concerning personal data about you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How do we protect personal data?</h2>
            <p>
              We implement appropriate administrative, technical, and physical measures aimed at protecting the personal data you entrust to us against accidental, illegal, or unauthorised destruction, loss, alteration, access, disclosure, or use. Many of the websites from which we export personal data are protected by SSL encryption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">How to contact us</h2>
            <p>
              Anyone whose data is processed can exercise their rights of access, rectification, or, if justified, deletion. To do so, they send a letter with a copy of their identity card to the following address:
            </p>
            <p className="text-white font-medium">
              Tribe Europe Ltd<br />
              Second Floor, One Stephen Street Upper<br />
              Dublin 8, D08 DR9P
            </p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@tribesystems.io" className="text-[#D4621F] hover:underline">
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
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#E8732A] to-[#D4621F] flex items-center justify-center">
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
