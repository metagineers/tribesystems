import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Master Prize Draw Terms and Conditions — TribeSystems",
  description:
    "Master Prize Draw Terms and Conditions for every prize draw promoted by Tribe Ltd in connection with the Kolab app.",
};

function Clause({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex gap-3">
      <span className="shrink-0 font-mono text-sm text-zinc-500 pt-[2px] w-12">{n}</span>
      <span className="flex-1">{children}</span>
    </p>
  );
}

function Heading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-white mt-12 mb-5 flex gap-3">
      <span className="shrink-0 font-mono w-12">{n}</span>
      <span className="flex-1">{children}</span>
    </h2>
  );
}

const addendumRows: [string, string][] = [
  ["Draw name", "[Full name as it will appear in all advertising]"],
  ["Draw reference", "[KD-YYYY-NNN]"],
  [
    "Promoter",
    "Tribe Ltd, [company number], [registered office], Jersey [postcode] — or name the alternative promoter",
  ],
  ["Third-party prize supplier", '[Name and registered address, or "None"]'],
  ["Opens", "[dd/mm/yyyy] at [hh:mm] [timezone]"],
  ["Closes", "[dd/mm/yyyy] at [hh:mm] [timezone]"],
  ["Territories", '[List each country. Do not write "worldwide".]'],
  [
    "Minimum age",
    "18 — vary only with legal sign-off and only where an age-appropriate mechanic has been approved",
  ],
  ["Prize", "[Full description, including what is and is not included]"],
  ["Number of prizes", "[n]"],
  ["Approximate retail value", "[£ per prize, and total]"],
  [
    "Prize conditions",
    "[Travel dates, blackout periods, transferability, supplier terms, any documentation the winner must hold]",
  ],
  ["Cash alternative", "None — or state the alternative"],
  [
    "Entry routes",
    "In-App / Online at [URL] / Postal — list all that are open, and all must be free",
  ],
  ["Postal entry address", "[Draw name], Kolab Prize Draws, [full address including postcode]"],
  ["Draw date", "[dd/mm/yyyy]"],
  [
    "Selection method",
    "Random selection from all valid entries by [independent person or verifiably random process], supervised by [name or role]",
  ],
  ["Winner notified by", "[Email / telephone] within [n] days of the draw date"],
  ["Claim period", "Winner must respond within [n] days of first contact"],
  [
    "Result published",
    "First initial and county of winner, at [URL] and in the App, for [n] weeks from [date]",
  ],
  [
    "Variations to Master Terms",
    '[State any, or "None". Clauses 3, 4, 5, 6 and 8 may not be varied.]',
  ],
  ["Legal sign-off", "Name: [ ]   Date: [ ]"],
  ["Checklist completed", "Name: [ ]   Date: [ ]"],
];

export default function PrizeDrawPage() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0A1F]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Tribe" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">Tribe</span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#e06c2a] mb-3">Part A</p>
        <h1 className="text-4xl font-bold mb-6">Master Prize Draw Terms and Conditions</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          These terms apply to every prize draw promoted by Tribe in connection with the Kolab app.
          They should be read with the Addendum for the particular draw you are entering.
        </p>

        <div className="max-w-none space-y-4 text-zinc-300 leading-relaxed">
          <Heading n="1.">These terms and the Addendum</Heading>
          <Clause n="1.1">
            These Master Prize Draw Terms (&quot;Master Terms&quot;) apply to each prize draw promoted
            by Tribe Ltd in connection with the Kolab app (each a &quot;Draw&quot;).
          </Clause>
          <Clause n="1.2">
            Each Draw also has an Addendum which states the details of that Draw, including its
            opening and closing dates, the territories in which it is open, the prize, the entry
            routes available and the postal address for free postal entry (the &quot;Addendum&quot;).
          </Clause>
          <Clause n="1.3">
            The Master Terms and the Addendum for a Draw together form the rules of that Draw. Where
            the Addendum expressly varies a provision of these Master Terms for that Draw, the
            Addendum prevails for that Draw only. The Addendum may not vary clauses 3, 4, 5, 6 or 8.
          </Clause>
          <Clause n="1.4">
            By entering a Draw you accept the Master Terms and the applicable Addendum.
          </Clause>
          <Clause n="1.5">
            These Master Terms are published permanently at www.tribesystems.io and within the Legal
            Documents found in Profile in the App. The Addendum for each Draw is published in the same
            places before that Draw opens and remains available until the Draw closes and the result
            is announced. Both are available without holding a Kolab account and without logging in.
          </Clause>
          <Clause n="1.6">
            These Master Terms and the Addendum for a Draw form a separate agreement between you and
            Tribe relating to that Draw. They apply whether or not you hold a Kolab account and
            whether or not you have accepted the Kolab Terms and Conditions. Where you do hold a
            Kolab account, these Master Terms prevail over the Kolab Terms and Conditions in relation
            to a Draw.
          </Clause>

          <Heading n="2.">Who is running the Draw</Heading>
          <Clause n="2.1">
            The promoter is Tribe Ltd, Beauport House, L&rsquo;Avenue de la Commune, St Peter, Jersey
            JE3 7BY 142759, (&quot;Tribe&quot;, &quot;we&quot;, &quot;us&quot;), unless the Addendum
            names a different promoter.
          </Clause>
          <Clause n="2.2">
            No Draw is promoted, operated, endorsed or administered by Equals Money, by Apple, by
            Google, or by any brand, club, series, team or creator featured in the App, unless the
            Addendum expressly says otherwise. Where a third party supplies a prize, that is stated in
            the Addendum, and clause 12 applies.
          </Clause>
          <Clause n="2.3">
            Each Draw is independent of the Kolab Rewards Programme described in Schedule 5 of the
            Kolab Terms and Conditions. Nothing in the Rewards Programme forms part of a Draw.
          </Clause>

          <Heading n="3.">Free to enter — no purchase, no payment</Heading>
          <Clause n="3.1">
            <strong className="font-semibold text-white">
              No purchase or payment of any kind is necessary to enter a Draw or to win a prize.
            </strong>
          </Clause>
          <Clause n="3.2">
            You do not need to be a Kolab subscriber to enter. You do not need to hold a Kolab account
            to enter. You do not need to have spent any money with us or with anyone else.
          </Clause>
          <Clause n="3.3">
            We do not charge for entry, and we do not accept payment for entry. No part of the price of
            any Kolab subscription, product or service is attributable to, or reflects, the opportunity
            to enter a Draw. The price of every Kolab plan is set by reference to the benefits of that
            plan alone, and would be the same if no Draw were ever run.
          </Clause>
          <Clause n="3.4">
            Entering by post costs no more than an ordinary first class stamp. Entering online or in the
            App costs no more than your ordinary cost of accessing the internet. We do not use premium
            rate telephone numbers or premium rate text messaging for entry.
          </Clause>

          <Heading n="4.">One entry per person</Heading>
          <Clause n="4.1">
            <strong className="font-semibold text-white">
              You may enter each Draw once. Every eligible entrant has exactly one entry in the Draw
              and therefore exactly the same chance of winning as every other entrant.
            </strong>
          </Clause>
          <Clause n="4.2">
            This applies however you enter and whoever you are. Additional entries received from the
            same person, whether through different routes, different accounts, different email
            addresses or different postal entries, will be consolidated into a single entry.
          </Clause>
          <Clause n="4.3">
            Bulk, automated or third-party entries are not accepted, and entries made through any
            agency, syndicate or entry service are void.
          </Clause>

          <Heading n="5.">Payment and status confer no advantage</Heading>
          <Clause n="5.1">
            <strong className="font-semibold text-white">
              None of the following gives you any additional entry, any better chance of winning, any
              earlier entry, or any advantage of any kind in a Draw:
            </strong>
          </Clause>
          <div className="pl-12 space-y-2">
            <p>(a)&nbsp;&nbsp;holding a Kolab subscription, or the Plan you hold (Everyday, Premium or Ultra);</p>
            <p>(b)&nbsp;&nbsp;your Level (Pit-Lane, Podium or Champion);</p>
            <p>(c)&nbsp;&nbsp;the number of X-Points or K-Points you hold or have ever earned;</p>
            <p>
              (d)&nbsp;&nbsp;any spend through the Kolab Wallet, any Cashback earned, or any purchase
              from us or from any partner;
            </p>
            <p>(e)&nbsp;&nbsp;how long you have held an account, or how frequently you use the App.</p>
          </div>
          <Clause n="5.2">
            The system that selects the winner does not record, receive or distinguish between entrants
            by subscription status, Plan, Level, points balance, spend or entry route.
          </Clause>
          <Clause n="5.3">
            Benefits of a paid Kolab plan are allocated by the published criteria for that plan and are
            never allocated by chance. Where a plan or Level gives priority in an allocation — for
            example a ticket ballot operated under the Rewards Service Terms — that allocation is made
            under its own published rules and is not a Draw under these Master Terms.
          </Clause>

          <Heading n="6.">Who can enter</Heading>
          <Clause n="6.1">
            A Draw is open to individuals who, at the time of entry, are aged 18 or over and are
            resident in a territory listed in the Addendum.
          </Clause>
          <Clause n="6.2">
            The following may not enter: employees, officers and directors of Tribe and of any company
            in its group; employees of any promoter, prize supplier, agency or partner named in the
            Addendum; and members of the immediate household or immediate family of any of them.
          </Clause>
          <Clause n="6.3">
            You must enter in your own name. Entries on behalf of another person are void.
          </Clause>
          <Clause n="6.4">
            The Addendum may state additional eligibility requirements where a prize requires them —
            for example a valid passport or driving licence for a travel prize. Those requirements are
            stated before the Draw opens and never added afterwards.
          </Clause>
          <Clause n="6.5">
            We may require a winner to provide proof of identity, age and residence before a prize is
            awarded.
          </Clause>

          <Heading n="7.">How to enter</Heading>
          <Clause n="7.1">
            Each Addendum lists the entry routes available for that Draw. Every route is free, and every
            route carries exactly one entry and exactly the same chance of winning. You may use
            whichever route you prefer.
          </Clause>
          <Clause n="7.2">
            <span className="text-white font-medium">In-App route.</span> Open the App, go to the Draw
            and select &quot;Enter&quot;. No subscription and no points balance is required, and nothing
            is deducted from your account.
          </Clause>
          <Clause n="7.3">
            <span className="text-white font-medium">Online route.</span> Complete the entry form at the
            web address given in the Addendum. No Kolab account is required.
          </Clause>
          <Clause n="7.4">
            <span className="text-white font-medium">Postal route.</span> Send your full name, date of
            birth, postal address, email address and telephone number, together with the name of the
            Draw, on an unenclosed postcard or a single sheet of paper, by ordinary first or second class
            post to the address in the Addendum. One entry per envelope. Postal entries must be received
            by the closing time; we are not responsible for entries lost, delayed or damaged in the post.
          </Clause>
          <Clause n="7.5">
            All routes are promoted together and with equal prominence wherever a Draw is advertised.
          </Clause>
          <Clause n="7.6">
            An entry is valid only if it is complete, legible and received within the entry period stated
            in the Addendum. Incomplete or illegible entries are void.
          </Clause>

          <Heading n="8.">How the winner is chosen</Heading>
          <Clause n="8.1">
            The winner or winners are selected at random from all valid entries, by an independent person
            or by a verifiably random process supervised by an independent person, on the draw date
            stated in the Addendum.
          </Clause>
          <Clause n="8.2">
            <strong className="font-semibold text-white">
              The selection process treats every valid entry identically and does not distinguish
              between entry routes or between entrants in any way.
            </strong>
          </Clause>
          <Clause n="8.3">
            Where the Addendum provides for more than one prize, the process for allocating each prize
            is stated in the Addendum.
          </Clause>
          <Clause n="8.4">
            The result is final. We do not enter into correspondence about the outcome of a Draw, except
            under the complaints process in clause 17.
          </Clause>

          <Heading n="9.">The prize</Heading>
          <Clause n="9.1">
            The prize for each Draw is described in the Addendum, together with the number of prizes
            available and anything the prize does not include.
          </Clause>
          <Clause n="9.2">
            There is no cash alternative to a prize and prizes are not transferable, unless the Addendum
            states otherwise.
          </Clause>
          <Clause n="9.3">
            If a prize becomes unavailable for reasons outside our reasonable control, we may substitute
            a prize of equal or greater value. We will tell the winner if we do.
          </Clause>
          <Clause n="9.4">
            Prizes are subject to availability and to any conditions stated in the Addendum, including
            travel dates, blackout periods, minimum age or health requirements and the terms of any
            third-party supplier.
          </Clause>
          <Clause n="9.5">
            Any cost associated with a prize which is not expressly stated in the Addendum as included
            is the winner&rsquo;s responsibility.
          </Clause>

          <Heading n="10.">Telling the winner and claiming the prize</Heading>
          <Clause n="10.1">
            We will contact the winner using the details provided with their entry, by the method and
            within the period stated in the Addendum.
          </Clause>
          <Clause n="10.2">
            A winner must respond and, where required, confirm eligibility within the claim period stated
            in the Addendum. If a winner cannot be contacted after reasonable attempts, or does not
            respond within the claim period, or is ineligible, we may select an alternative winner from
            the remaining valid entries by the same process.
          </Clause>
          <Clause n="10.3">
            We will make all reasonable efforts to contact a winner and will make at least two attempts
            using at least two of the contact details provided.
          </Clause>

          <Heading n="11.">Announcing the result</Heading>
          <Clause n="11.1">
            We will publish the first initial and county or region of each winner, and the name of the
            Draw, in the App and at www.tribesystems.io/prize_draw/results for at least six weeks after
            the draw date, and will provide the same information free of charge to anyone who asks in writing at
            the address in clause 17 within that period.
          </Clause>
          <Clause n="11.2">
            We will not publish a winner&rsquo;s full name, full address or contact details without their
            separate consent. A winner may ask us not to publish any information identifying them, and we
            will withhold it, keeping only what we are required to make available.
          </Clause>
          <Clause n="11.3">
            Where the Addendum contemplates publicity involving a winner, participation in that publicity
            is optional and is never a condition of receiving a prize.
          </Clause>

          <Heading n="12.">Prizes supplied by third parties</Heading>
          <Clause n="12.1">
            Where a prize is supplied by a third party, that party is named in the Addendum. The prize is
            provided on that supplier&rsquo;s own terms, which are made available to the winner before the
            prize is accepted.
          </Clause>
          <Clause n="12.2">
            We remain responsible for running the Draw and for awarding the prize. We are not responsible
            for the acts or omissions of a third-party supplier in providing the prize itself, except
            where we are liable under applicable law. Nothing in this clause affects your statutory
            rights.
          </Clause>

          <Heading n="13.">Entries we may reject</Heading>
          <Clause n="13.1">
            We may reject an entry, disqualify an entrant or withdraw a prize where we reasonably believe
            that a person has entered more than once, entered in another person&rsquo;s name, used a bot,
            script or automated means, used multiple accounts or identities, tampered with the entry
            process, or otherwise acted fraudulently or in bad faith.
          </Clause>
          <Clause n="13.2">
            We will tell the person concerned and the reason, unless we are prevented from doing so by
            law, and they may challenge the decision under clause 17.
          </Clause>
          <Clause n="13.3">
            We will act proportionately. Where the issue affects only one entry, we will not withdraw any
            other entitlement the person has under their Kolab account.
          </Clause>

          <Heading n="14.">If we have to change or cancel a Draw</Heading>
          <Clause n="14.1">
            We may change these Master Terms or an Addendum, or suspend or cancel a Draw, only where it
            is necessary for reasons outside our reasonable control, including where the Draw cannot be
            run as planned because of a technical failure, fraud, or a change in law or regulation.
          </Clause>
          <Clause n="14.2">
            If we do, we will publish the change in the App as soon as we reasonably can, and we will not
            disadvantage anyone who has already validly entered any more than is necessary.
          </Clause>
          <Clause n="14.3">
            If a Draw is cancelled after entries have opened, we will say so and explain why, and no
            entrant will be worse off financially, since no entrant will have paid anything.
          </Clause>

          <Heading n="15.">What we are and are not responsible for</Heading>
          <Clause n="15.1">
            We are not responsible for entries that are lost, delayed, corrupted or not received for
            reasons outside our reasonable control, including postal delay and network or device failure.
          </Clause>
          <Clause n="15.2">
            Nothing in these Master Terms excludes or limits our liability for death or personal injury
            caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that
            cannot lawfully be excluded or limited.
          </Clause>
          <Clause n="15.3">
            Subject to clause 15.2, we are not liable for any loss arising from participation in a Draw or
            from the use of a prize which was not reasonably foreseeable.
          </Clause>

          <Heading n="16.">Your personal information</Heading>
          <Clause n="16.1">
            We use the information you provide with your entry to run the Draw, verify eligibility, select
            and contact the winner, award the prize and meet our record-keeping obligations. We do not use
            it for marketing unless you separately consent.
          </Clause>
          <Clause n="16.2">
            We keep entry data only for as long as we need it to run the Draw, deal with any query about it
            and meet our legal obligations, and then delete it.
          </Clause>
          <Clause n="16.3">
            <strong className="font-semibold text-white">
              Where you enter without holding a Kolab account, we do not create an account for you and do
              not add you to any marketing list.
            </strong>
          </Clause>
          <Clause n="16.4">
            Full details are in the Privacy Notice at{" "}
            <a href="/privacy" className="text-[#e06c2a] hover:underline">
              www.tribesystems.io/privacy
            </a>
          </Clause>

          <Heading n="17.">Complaints</Heading>
          <Clause n="17.1">
            If you are unhappy with anything about a Draw, contact us at{" "}
            <a href="mailto:support@tribe.fan" className="text-[#e06c2a] hover:underline">
              support@tribe.fan
            </a>{" "}
            or write to the address above. We will acknowledge within 5 business days and aim to respond
            within 14 business days.
          </Clause>
          <Clause n="17.2">
            If you remain dissatisfied you may refer the matter to Tribe&rsquo;s Alternative Dispute
            Resolution (ADR) Service provider, at{" "}
            <a
              href="https://disputeresolutionservices.org/jersey-dispute-resolution-service/"
              className="text-[#e06c2a] hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://disputeresolutionservices.org/jersey-dispute-resolution-service/
            </a>{" "}
            Nothing in these Master Terms affects your right to bring court proceedings.
          </Clause>

          <Heading n="18.">How these Draws are structured</Heading>
          <Clause n="18.1">
            Each Draw is designed and operated as a free draw. No payment is required to enter, entry is
            open to persons who are not Kolab subscribers and who do not hold a Kolab account, every
            entrant has one entry, and no payment or status improves any entrant&rsquo;s chance of winning.
          </Clause>
          <Clause n="18.2">
            No Draw involves any stake, wager or bet, and no Draw is decided by the outcome of any race,
            competition or other event.
          </Clause>
          <Clause n="18.3">
            Prediction games, polls and other participation features in the App are not Draws, are free to
            take part in, confer no monetary stake, and are governed by their own published rules.
          </Clause>

          <Heading n="19.">Governing law</Heading>
          <Clause n="19.1">
            These Master Terms and each Addendum, and any dispute arising out of or in connection with a
            Draw, are governed by the laws of Jersey, and you and Tribe submit to the jurisdiction of the
            courts of Jersey.
          </Clause>
          <Clause n="19.2">
            If you are resident in the United Kingdom or in a member state of the European Union, you keep
            the benefit of any mandatory protections of the law of your country of residence which cannot
            be excluded by agreement, and you may bring proceedings in the courts of that country.
          </Clause>
        </div>

        {/* Part B */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#e06c2a] mb-3">Part B</p>
          <h2 className="text-3xl font-bold mb-6">Draw Addendum — Template</h2>
          <p className="text-zinc-400 mb-8">
            Complete every field. A field that does not apply is marked &quot;Not applicable&quot; rather
            than left blank. Publish before the Draw opens. Do not open a Draw with an incomplete
            Addendum.
          </p>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.04]">
                  <th className="text-left font-semibold text-white px-4 py-3 border-b border-white/10 w-[38%]">
                    Field
                  </th>
                  <th className="text-left font-semibold text-white px-4 py-3 border-b border-white/10">
                    Entry
                  </th>
                </tr>
              </thead>
              <tbody>
                {addendumRows.map(([field, entry]) => (
                  <tr key={field} className="border-b border-white/5 last:border-b-0 align-top">
                    <td className="px-4 py-3 text-white font-medium">{field}</td>
                    <td className="px-4 py-3 text-zinc-400">{entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Tribe" width={24} height={24} className="rounded-md" />
            <span className="text-sm font-semibold">TribeSystems</span>
          </a>
          <p className="text-xs text-zinc-600">© 2026 TribeSystems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
