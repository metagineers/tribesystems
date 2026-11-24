import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commerce Store Shipping & Delivery",
  description: "Shipping destinations, processing times, taxes and delivery information for the Commerce Store.",
};

const destinations = [
  {
    region: "Africa",
    countries: "Egypt, Kenya, Mauritius, Morocco, Namibia, South Africa, Tunisia",
  },
  {
    region: "Asia",
    countries: "Armenia, Bangladesh, Brunei, Cambodia, China, Georgia, Hong Kong SAR, India, Indonesia, Iraq, Japan, Kazakhstan, Malaysia, Maldives, Nepal, Pakistan, Philippines, Singapore, South Korea, Sri Lanka, Taiwan, Thailand, Türkiye, Uzbekistan, Vietnam",
  },
  {
    region: "Europe",
    countries: "Albania, Åland Islands, Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Estonia, Finland, France, Germany, Gibraltar, Greece, Guernsey, Hungary, Iceland, Ireland, Isle of Man, Italy, Jersey, Latvia, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom",
  },
  {
    region: "Middle East",
    countries: "Bahrain, Jordan, Kuwait, Lebanon, Oman, Qatar, United Arab Emirates",
  },
  {
    region: "North America",
    countries: "Barbados, Bermuda, Canada, Costa Rica, Dominican Republic, El Salvador, Guatemala, Honduras, Jamaica, Mexico, Nicaragua, Panama, United States",
  },
  {
    region: "Oceania",
    countries: "Australia, New Zealand",
  },
  {
    region: "South America",
    countries: "Argentina, Brazil, Chile, Colombia, Ecuador",
  },
];

export default function CommerceStoreShippingPage() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-400">
          <Link href="/terms" className="hover:text-[#e06c2a] focus-visible:underline">
            App Terms &amp; Conditions
          </Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span>Commerce Store</span>
        </nav>
        <h1 className="mb-4 text-4xl font-bold">Shipping &amp; Delivery</h1>
        <p className="mb-14 text-lg text-zinc-400">Commerce Store shipping information</p>

        <section aria-labelledby="destinations" className="border-t border-white/10 pt-9">
          <h2 id="destinations" className="mb-3 text-2xl font-semibold">Shipping Destinations</h2>
          <p className="mb-8 text-zinc-300">We ship to the following countries:</p>
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {destinations.map(({ region, countries }) => (
              <div key={region} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <dt className="font-semibold text-white">{region}</dt>
                <dd className="leading-relaxed text-zinc-300">{countries}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="updates" className="mt-14 border-t border-white/10 pt-9">
          <h2 id="updates" className="mb-5 text-2xl font-semibold">Order Confirmation &amp; Shipping Updates</h2>
          <p className="leading-relaxed text-zinc-300">
            Once your order has been placed, you will receive a confirmation email. A further shipping confirmation will follow once your order has been processed and dispatched from our warehouse. Please note that during busy periods, confirmation emails may be slightly delayed. All orders are shipped from the UK. If there are any issues with your order, we will contact you via email.
          </p>
        </section>

        <section aria-labelledby="taxes" className="mt-14 border-t border-white/10 pt-9">
          <h2 id="taxes" className="mb-7 text-2xl font-semibold">Taxes &amp; Duties</h2>
          <div className="space-y-9 leading-relaxed text-zinc-300">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">UK, EU, Canada &amp; USA</h3>
              <p>All orders shipping to the United Kingdom, European Union, Canada, and United States of America have taxes and duties included at checkout. The price you see in your cart is the final price you pay — no surprises on delivery.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Rest of the World</h3>
              <p>Customers outside the UK, EU, Canada, and USA may be subject to local customs fees, taxes, and/or duties upon receipt of their order. These charges are the responsibility of the customer and are payable on delivery.</p>
              <p>All international orders must pass through local customs inspection. We have no control over this process and are unable to estimate how long it may take.</p>
              <p>If your order hasn&apos;t arrived after 30 days, we recommend contacting your local post office to check whether it&apos;s being held. If it isn&apos;t, please email us with your order number and we&apos;ll look into it for you. If your tracking shows the parcel as delivered but you haven&apos;t received it, your local post office may be holding it.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="timing" className="mt-14 border-t border-white/10 pt-9">
          <h2 id="timing" className="mb-5 text-2xl font-semibold">Processing &amp; Delivery Times</h2>
          <p className="mb-5 leading-relaxed text-zinc-300">We aim to process all orders within 5 working days. Estimated delivery times following dispatch:</p>
          <dl className="grid max-w-xl gap-4 text-zinc-300 sm:grid-cols-2">
            <div className="border-l-2 border-[#e06c2a] pl-4">
              <dt className="font-semibold text-white">Domestic (UK)</dt>
              <dd>3–7 business days</dd>
            </div>
            <div className="border-l-2 border-[#e06c2a] pl-4">
              <dt className="font-semibold text-white">International</dt>
              <dd>7–14 business days</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="delivery" className="mt-14 border-t border-white/10 pt-9">
          <h2 id="delivery" className="mb-5 text-2xl font-semibold">Delivery Information</h2>
          <ul className="list-disc space-y-4 pl-6 leading-relaxed text-zinc-300 marker:text-[#e06c2a]">
            <li>A signature may be required on delivery. For this reason, we are unable to deliver to PO Box addresses or hotels.</li>
            <li>Please ensure your delivery address is entered correctly and uses standard English characters. We are unable to accept responsibility for non-delivery resulting from an incorrectly entered address.</li>
            <li>Products shipped to an address other than your card-registered address are at your own risk once delivered.</li>
            <li>Risk in the goods passes to you upon delivery. Title to the goods passes to you once payment has been received in full, including any applicable delivery charges.</li>
            <li>Your statutory rights are not affected.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
