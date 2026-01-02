import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
        title: "UK Train Delay Compensation Explained Simply (2025 Guide) | Delay Repay Calculator",
        description:
                "Clear Delay Repay guidance for UK rail passengers: thresholds, missed connections, season tickets, what to submit, and when claims can be rejected.",
        alternates: { canonical: "https://delayrepaycalc.co.uk/delay-repay-explained" },
};

export default function DelayRepayExplainedPage() {
        const toc = [
                { id: "how-delay-repay-works", label: "How Delay Repay works" },
                { id: "thresholds", label: "Typical thresholds" },
                { id: "missed-connections", label: "Missed connections" },
                { id: "season-tickets", label: "Season tickets" },
                { id: "what-you-need", label: "What you need to claim" },
                { id: "when-you-cant-claim", label: "When you can’t claim" },
                { id: "faqs", label: "Most common questions" },
                { id: "examples", label: "Worked examples" },
                { id: "sources", label: "Sources / official references" },
        ];

        const faqs = [
                {
                        question: "Is compensation based on ticket price or the journey?",
                        answer:
                                "Most operators apply the percentage to the fare you paid for the affected leg. For returns they often treat each direction as half the return fare unless the rules say otherwise.",
                },
                {
                        question: "Do I still get Delay Repay if I arrived eventually?",
                        answer:
                                "Yes. Delay Repay is based on the delay to your arrival time compared with the timetable, even if you were carried to your destination on a later service.",
                },
                {
                        question: "If I miss a connection, what delay counts?",
                        answer:
                                "Operators usually measure the delay at your final destination on a through itinerary. Include planned and actual times for every leg so the final delay is clear.",
                },
                {
                        question: "Do Advance tickets qualify?",
                        answer:
                                "Generally yes if the train you booked was delayed or cancelled. If you were told to board another service, explain that in the claim so it is treated as valid travel.",
                },
                {
                        question: "What if I abandon my journey?",
                        answer:
                                "If you were advised not to travel or a cancellation prevented completion, you can normally claim a refund or compensation. Say where you stopped and why.",
                },
                {
                        question: "Do I claim from the operator I booked with or the operator that delayed me?",
                        answer:
                                "Claim from the operator that caused the delay to the journey, not the retailer. If multiple operators were involved, use the one responsible for the disruption.",
                },
                {
                        question: "Can I claim if I used Rail Replacement buses?",
                        answer:
                                "Yes, replacement buses count as part of the journey. Use the scheduled times provided and record the actual arrival so the delay can be measured.",
                },
                {
                        question: "Cash vs vouchers: what’s the difference?",
                        answer:
                                "Cash or bank transfer gives you money back; vouchers or e-vouchers may lock you to future travel and sometimes exceed 100% for longer delays depending on the operator.",
                },
                {
                        question: "How long do I have to claim (time limits)?",
                        answer:
                                "Many operators require claims within 28 days, some allow longer. Submit as soon as possible and keep proof of submission.",
                },
                {
                        question: "What evidence do I need?",
                        answer:
                                "Keep your ticket or booking confirmation and note actual arrival time. Screenshots of live boards, emails, or staff advice help if timings are disputed.",
                },
        ];

        const examples = [
                {
                        title: "Example 1: Single ticket, 37-minute delay",
                        detail:
                                "You paid £28.40 for a single. A 37-minute arrival delay falls in the 30–59 band. Many operators pay 50%: £28.40 × 50% ≈ £14.20.",
                },
                {
                        title: "Example 2: Return ticket, delay on the outward leg",
                        detail:
                                "Return fare £64.00. Operators often treat each direction as half (so £32.00 per leg). If the outward train is 55 minutes late, 50% of £32.00 is ~£16.00. Check the operator page to see if they handle returns differently.",
                },
                {
                        title: "Example 3: Season ticket (conceptual per-journey value)",
                        detail:
                                "For a monthly season ticket, operators derive a per-journey value using industry formulas (e.g., cost divided by an assumed number of journeys). The calculator applies these conversions so your claim estimate is in line with how handlers review season tickets.",
                },
                {
                        title: "Example 4: Missed connection, final arrival 72 minutes late",
                        detail:
                                "Your first train is 20 minutes late, you miss the planned connection and arrive 72 minutes after schedule. The 60–119 band usually pays 100% of the affected fare even though the first delay was shorter.",
                },
        ];

        const faqSchema = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer,
                        },
                })),
        };

        return (
                <main className="bg-base-200">
                        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
                                <article className="prose max-w-none">
                                        <header className="bg-base-100 shadow-lg rounded-box">
                                                <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                                                        <div className="space-y-3">
                                                                <p className="badge badge-primary">Updated for 2025</p>
                                                                <h1 className="mb-0">UK Train Delay Compensation Explained Simply (2025 Guide)</h1>
                                                                <p className="text-lg text-neutral-700">
                                                                        Delay Repay is the UK rail scheme that pays compensation when trains arrive late or
                                                                        are cancelled. This page distils the thresholds, evidence, and exceptions you need
                                                                        to know—remember that each operator can set its own detail.
                                                                </p>
                                                                <div className="flex flex-wrap gap-3">
                                                                        <Link href="/" className="btn btn-primary">Estimate with the calculator</Link>
                                                                        <Link href="/operators" className="btn btn-outline">Operator guides</Link>
                                                                </div>
                                                        </div>
                                                        <div className="card bg-base-200 shadow-inner lg:ml-auto lg:w-80">
                                                                <div className="card-body space-y-3">
                                                                        <h2 className="card-title">Quick summary</h2>
                                                                        <ul className="list-disc pl-5 text-sm">
                                                                                <li>Most operators pay from 15 minutes late; longer delays pay higher percentages.</li>
                                                                                <li>Measure the delay at your final destination if you missed a connection.</li>
                                                                                <li>Keep tickets, booking proof, and a note of actual arrival time.</li>
                                                                                <li>Use the calculator for instant estimates and links to official claim forms.</li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </header>

                                        <section className="grid gap-6 lg:grid-cols-[320px,1fr]">
                                                <div className="card bg-base-100 shadow">
                                                        <div className="card-body">
                                                                <h2 className="card-title">On this page</h2>
                                                                <ul className="not-prose space-y-2">
                                                                        {toc.map((item) => (
                                                                                <li key={item.id}>
                                                                                        <a className="link link-primary" href={`#${item.id}`}>
                                                                                                {item.label}
                                                                                        </a>
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                </div>
                                                <div className="card bg-base-100 shadow">
                                                        <div className="card-body">
                                                                <h2 className="card-title" id="how-delay-repay-works">How Delay Repay works</h2>
                                                                <p>
                                                                        Delay Repay compensates passengers when arrival times exceed the published timetable. The
                                                                        delay is measured at the destination you were ticketed to reach, including rail replacement
                                                                        legs. Most operators adopt the standard 15/30/60/120+ minute bands, while some vary percentages
                                                                        or require different evidence. Always claim from the operator responsible for the delay, not
                                                                        the retailer.
                                                                </p>
                                                                <div className="alert alert-info">
                                                                        <div>
                                                                                <span className="font-semibold">Key takeaway:</span> If disruption changes your route or connection, note who
                                                                                advised the change—claims teams rely on that to validate your timings.
                                                                        </div>
                                                                </div>
                                                                <p>
                                                                        Explore operator specifics: <Link href="/delay-repay-avanti">Avanti</Link>, <Link href="/delay-repay-gwr">GWR</Link>, <Link href="/delay-repay-lner">LNER</Link>, <Link href="/delay-repay-northern">Northern</Link>, <Link href="/delay-repay-southern">Southern</Link>.
                                                                </p>
                                                        </div>
                                                </div>
                                        </section>

                                <section id="thresholds" className="mt-10">
                                        <div className="card bg-base-100 shadow-lg">
                                                <div className="card-body">
                                                        <h2 className="card-title">Typical Delay Repay thresholds</h2>
                                                        <div className="overflow-x-auto">
                                                                <table className="table table-zebra">
                                                                        <thead>
                                                                                <tr>
                                                                                        <th>Delay band</th>
                                                                                        <th>Usual payout</th>
                                                                                        <th>Notes</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td>15–29 minutes</td>
                                                                                        <td>Often 25% of single fare</td>
                                                                                        <td>Some operators start at 30 minutes.</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>30–59 minutes</td>
                                                                                        <td>Often 50% of single fare</td>
                                                                                        <td>Advance tickets usually included.</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>60–119 minutes</td>
                                                                                        <td>Often 100% of single fare</td>
                                                                                        <td>Returns typically split into each direction.</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>120+ minutes</td>
                                                                                        <td>Often 100%+, sometimes vouchers at higher rates</td>
                                                                                        <td>Check operator pages for enhanced offers.</td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>
                                                        </div>
                                                        <p className="text-sm text-neutral-600">
                                                                Exact thresholds and payout methods vary by operator; check operator-specific pages.
                                                        </p>
                                                </div>
                                        </div>
                                </section>

                                <section id="missed-connections" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-3">
                                                        <h2 className="card-title">Missed connections and re-routes</h2>
                                                        <p>
                                                                If a late first leg makes you miss a train, the delay is usually calculated at your final
                                                                destination. Include planned and actual times for every leg, any acceptance onto other
                                                                operators, and who advised the change. The <Link href="/delay-repay-missed-connections">missed connections guide</Link> has deeper examples.
                                                        </p>
                                                        <div className="alert alert-success">
                                                                <div>
                                                                        <span className="font-semibold">Practical tip:</span> Take a quick photo of the departure board showing the late arrival
                                                                        and write down the time you actually boarded your replacement service.
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                <section id="season-tickets" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-3">
                                                        <h2 className="card-title">Season tickets and Flexi products</h2>
                                                        <p>
                                                                Season, flexi, and carnet tickets are converted to a per-journey value before applying the delay band. Operators use industry formulas (weekly, monthly, annual) and may round differently. The <Link href="/delay-repay-season-tickets">season ticket guidance</Link> explains the common conversions and how to enter them into the calculator.
                                                        </p>
                                                        <p>
                                                                For Flexi Season tickets, keep the specific tap-in or activation records; these prove which days were used and avoid disputes over which journey the delay applies to.
                                                        </p>
                                                </div>
                                        </div>
                                </section>

                                <section id="what-you-need" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-3">
                                                        <h2 className="card-title">What you need to submit a claim</h2>
                                                        <ul className="list-disc pl-5">
                                                                <li>Ticket or booking confirmation (paper, barcode, or e-ticket reference).</li>
                                                                <li>Actual arrival time compared with the timetable or replacement timetable.</li>
                                                                <li>Evidence such as departure board photos, journey planner screenshots, or email/text alerts.</li>
                                                                <li>Bank details if you want cash; select voucher options if preferred.</li>
                                                                <li>Short explanation of what happened, including staff advice if you changed trains.</li>
                                                        </ul>
                                                        <p>
                                                                Use the <Link href="/">Delay Repay calculator</Link> first to check the estimated payout and jump straight to the operator’s claim form.
                                                        </p>
                                                </div>
                                        </div>
                                </section>

                                <section id="when-you-cant-claim" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-3">
                                                        <h2 className="card-title">When you can’t claim</h2>
                                                        <p className="text-neutral-700">Common exclusions where compensation may be refused:</p>
                                                        <div className="grid gap-3 md:grid-cols-2">
                                                                <div className="alert alert-warning">
                                                                        <div>
                                                                                Industrial action or strikes that were pre-announced and offered alternative travel.
                                                                        </div>
                                                                </div>
                                                                <div className="alert alert-warning">
                                                                        <div>
                                                                                Extreme weather or events outside rail control where the operator’s terms limit payouts.
                                                                        </div>
                                                                </div>
                                                                <div className="alert alert-warning">
                                                                        <div>
                                                                                Travelling without a valid ticket for the disrupted service or outside the allowed route.
                                                                        </div>
                                                                </div>
                                                                <div className="alert alert-warning">
                                                                        <div>
                                                                                Claims submitted after the operator’s deadline (often 28 days).
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <p className="text-sm text-neutral-600">Always check the operator’s terms—some still pay goodwill in severe disruption.</p>
                                                </div>
                                        </div>
                                </section>

                                <section id="faqs" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-4">
                                                        <h2 className="card-title">Most common questions</h2>
                                                        <div className="space-y-3">
                                                                {faqs.map((faq) => (
                                                                        <div key={faq.question} className="collapse collapse-arrow border border-base-200 bg-base-200">
                                                                                <input type="checkbox" />
                                                                                <div className="collapse-title text-lg font-semibold">{faq.question}</div>
                                                                                <div className="collapse-content text-neutral-700">
                                                                                        <p>{faq.answer}</p>
                                                                                </div>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                <section id="examples" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-4">
                                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                                <h2 className="card-title">Worked examples with numbers</h2>
                                                                <span className="badge badge-outline">Illustrative only</span>
                                                        </div>
                                                        <p className="text-neutral-700">Use these to sanity-check your claim before opening the official form.</p>
                                                        <div className="grid gap-4 md:grid-cols-2">
                                                                {examples.map((example) => (
                                                                        <div key={example.title} className="card bg-base-200 shadow-inner">
                                                                                <div className="card-body space-y-2">
                                                                                        <h3 className="card-title text-base">{example.title}</h3>
                                                                                        <p className="text-sm text-neutral-700 leading-relaxed">{example.detail}</p>
                                                                                </div>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                        <p className="text-sm text-neutral-600">These examples are illustrative; operator rules and evidence requirements can differ.</p>
                                                </div>
                                        </div>
                                </section>

                                <section id="sources" className="mt-10">
                                        <div className="card bg-base-100 shadow">
                                                <div className="card-body space-y-4">
                                                        <h2 className="card-title">Sources / official references</h2>
                                                        <p className="text-neutral-700">Use these to verify policy wording before submitting your claim.</p>
                                                        <ul className="list-disc pl-5">
                                                                <li><a className="link link-primary" href="https://www.nationalrail.co.uk/times_fares/delay_repay.aspx" target="_blank" rel="noopener noreferrer">National Rail – Delay Repay overview</a></li>
                                                                <li><a className="link link-primary" href="https://www.nationalrail.co.uk/times_fares/ticket_types/compensation_for_delays.aspx" target="_blank" rel="noopener noreferrer">National Rail – Compensation for delays</a></li>
                                                                <li><a className="link link-primary" href="https://www.avantiwestcoast.co.uk/help-and-support/delay-repay" target="_blank" rel="noopener noreferrer">Avanti West Coast – Delay Repay</a></li>
                                                                <li><a className="link link-primary" href="https://www.gwr.com/help-and-support/refunds-and-compensation/delay-repay" target="_blank" rel="noopener noreferrer">GWR – Delay Repay</a></li>
                                                                <li><a className="link link-primary" href="https://www.lner.co.uk/customer-service/delay-repay/" target="_blank" rel="noopener noreferrer">LNER – Delay Repay</a></li>
                                                        </ul>
                                                </div>
                                        </div>
                                </section>

                                <section className="card bg-base-100 shadow-lg mt-10">
                                        <div className="card-body space-y-3">
                                                <h2 className="card-title">Ready to claim?</h2>
                                                <p>
                                                        Use the calculator to estimate your payout and jump straight to the operator’s form. If you travel
                                                        regularly, bookmark the operator guides to keep up with policy changes.
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                        <Link href="/" className="btn btn-primary">Open calculator</Link>
                                                        <Link href="/operators" className="btn btn-outline">Browse operator pages</Link>
                                                </div>
                                        </div>
                                </section>

                                <script
                                        type="application/ld+json"
                                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                                />
                        </article>
                </main>
        );
}
