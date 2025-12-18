// components/Faq.tsx (SERVER COMPONENT)
import Script from "next/script";

type QA = { q: string; a: string };

const faqs: QA[] = [
        {
                q: "When can I claim Delay Repay?",
                a: "Most UK train operators accept Delay Repay claims from 15 minutes of delay with higher compensation bands at 30–59, 60–119, and 120+ minutes. A few have bespoke thresholds or extra checks, so always read the operator guidance linked from the calculator before submitting your claim.",
        },
        {
                q: "What evidence do I need?",
                a: "Operators typically ask for the ticket or booking confirmation and evidence of the actual arrival time such as a photo of the departure board, an email or app notification, or a journey history screenshot. Clear evidence helps avoid back-and-forth and reduces the chance of rejection.",
        },
        {
                q: "How are season tickets handled?",
                a: "Season tickets are converted to a per-journey value using standard industry conventions before the delay percentage is applied. This keeps outcomes comparable to single or return tickets and avoids overstating claims for frequent travellers.",
        },
        {
                q: "What if I missed a connection?",
                a: "If your journeys were on a single itinerary and a delay caused you to miss a connection, most operators measure the delay to your final destination rather than the first late train. Include the full itinerary and timings so the operator can assess the claim in context.",
        },
        {
                q: "Can I claim for split tickets or railcards?",
                a: "Split tickets and railcard discounts are usually eligible, but compensation is calculated on the affected fare or fares you actually purchased. Provide each ticket reference and note any railcard used so the operator can verify the amounts paid.",
        },
        {
                q: "How long do I have to claim?",
                a: "Many operators set a time limit, often around 28 days from the date of travel, while some allow longer windows. Submitting the claim promptly with the right evidence gives the best chance of approval.",
        },
        {
                q: "Is a cancellation treated the same as a delay?",
                a: "A cancellation can lead to either a refund or a Delay Repay payment depending on when you were notified and whether you travelled. Operators set out their approach in the claim form and may ask whether you boarded an alternative service.",
        },
        {
                q: "How long does payment take and how is it paid?",
                a: "Most operators aim to respond within a couple of weeks. Payments are typically made by bank transfer, card refund, vouchers, or loyalty points depending on the operator’s policy and your choice during the claim.",
        },
];

export default function Faq() {
        const faqLd = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map((item) => ({
                        "@type": "Question",
                        "name": item.q,
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a,
                        },
                })),
        };

        return (
                <section aria-labelledby="faq" className="mt-16">
                        <h2 id="faq">Delay Repay — Frequently Asked Questions</h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                                {faqs.map(({ q, a }, idx) => (
                                        <div key={idx} className="rounded border border-slate-200 bg-white p-4 shadow-sm">
                                                <h3 className="text-lg font-semibold text-slate-900">{q}</h3>
                                                <p className="mt-2 text-sm leading-relaxed text-slate-700">{a}</p>
                                        </div>
                                ))}
                        </div>

                        <Script
                                id="faq-jsonld"
                                type="application/ld+json"
                                strategy="afterInteractive"
                                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
                        />
                </section>
        );
}
