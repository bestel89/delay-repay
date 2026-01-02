import type { Metadata } from "next";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase.server";
import type { Tables } from "@/definitions/supabase";

export const metadata: Metadata = {
        title: "Avanti Delay Repay Calculator | DelayRepayCalc",
        description: "Estimate Avanti West Coast Delay Repay compensation with clear thresholds, evidence tips, and links to the official claim page.",
        alternates: { canonical: "/delay-repay-avanti" },
};

const faqItems = [
        {
                question: "Does Avanti West Coast use Delay Repay?",
                answer: "Avanti participates in Delay Repay for its operated services. You can usually claim when your Avanti leg arrives late at your final destination or if disruption meant you were advised not to travel.",
        },
        {
                question: "What are Avanti’s compensation thresholds?",
                answer: "Many UK operators follow Delay Repay 15 (15/30/60+). Always check the official claim page for any Avanti-specific updates.",
        },
        {
                question: "Which tickets are eligible with Avanti?",
                answer: "Most singles, returns, and season tickets are eligible when Avanti operated the delayed service. Include any railcard used so the paid fare is clear.",
        },
        {
                question: "How do I estimate Avanti Delay Repay?",
                answer: "Use the delay repay calculator with Avanti selected, enter your fare and delay length, and view a guidance payout before heading to the claim form.",
        },
        {
                question: "What evidence should I attach?",
                answer: "Provide ticket proof and evidence of the actual arrival time. Station board photos, app screenshots, or email alerts all help confirm the delay.",
        },
        {
                question: "How are missed connections handled?",
                answer: "Compensation is usually based on the delay at your final destination. List the planned connection, the train you missed, and the service you took instead.",
        },
        {
                question: "Can I claim if the Avanti train was cancelled?",
                answer: "If you did not travel, request a refund. If you travelled on a later service, Delay Repay is typically based on the eventual arrival time.",
        },
];

export default async function AvantiPage() {
        const supabase = supabaseServer();
        const { data, error } = await supabase
                .from("operators")
                .select("name,code,claim_url,website_url,delay_repay,active")
                .eq("code", "avanti")
                .maybeSingle();

        if (error || !data) {
                return (
                        <article className="prose max-w-none">
                                <h1>Avanti Delay Repay Calculator</h1>
                                <p>We couldn’t load Avanti details right now. Please use the <Link href="/">delay repay calculator</Link> and select Avanti manually.</p>
                        </article>
                );
        }

        const operator = data as Tables<"operators">;
        const faqJsonLd = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map((item) => ({
                        "@type": "Question",
                        name: item.question,
                        acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
        };

        return (
                <article className="prose max-w-none">
                        <h1>{operator.name} Delay Repay Calculator</h1>
                        <p>
                                Get an instant estimate for Avanti delays using the <Link href="/">delay repay calculator</Link>, then open the official claim form with your journey details to hand.
                        </p>
                        <div className="not-prose mb-6 flex flex-wrap gap-3">
                                <Link className="btn btn-primary" href={`/?operator=${operator.code}#calculator`}>
                                        Calculate compensation
                                </Link>
                                {operator.claim_url && (
                                        <a className="btn btn-outline" href={operator.claim_url} rel="noopener noreferrer" target="_blank">
                                                Official Avanti claim page
                                        </a>
                                )}
                                {operator.website_url && (
                                        <a className="btn btn-ghost" href={operator.website_url} rel="noopener noreferrer" target="_blank">
                                                Avanti website
                                        </a>
                                )}
                        </div>

                        <h2>How {operator.name} Delay Repay works</h2>
                        <p>
                                Avanti applies Delay Repay to most services it operates. Enter your fare and delay band to see the indicative payout, then submit the claim with ticket proof and arrival evidence. If your journey involves another operator, explain which legs Avanti ran and how the delay built up.
                        </p>

                        <h2>Compensation thresholds</h2>
                        <p>Many UK operators follow Delay Repay 15 (15/30/60+). Always check the official claim page.</p>
                        <p>Season tickets are converted to a per-journey value before the band percentage is applied.</p>

                        <h2>Examples</h2>
                        <ul>
                                <li>Advance single £35, 40-minute delay: commonly 50% of the fare.</li>
                                <li>Off-peak return £68, 70-minute delay: often 100% of the single-leg value.</li>
                                <li>Monthly season £420, 25-minute delay: calculator estimates using the per-journey conversion.</li>
                        </ul>

                        <h2>What you need to claim</h2>
                        <ul>
                                <li>Ticket proof (paper, e-ticket, or smartcard reference) plus any railcard used.</li>
                                <li>Proof of actual arrival time, such as a station board photo or app screenshot.</li>
                                <li>Notes on any rerouting permission if you travelled on a different service.</li>
                        </ul>

                        <h2>FAQs</h2>
                        <ul>
                                {faqItems.map((item) => (
                                        <li key={item.question}>
                                                <p className="font-semibold">{item.question}</p>
                                                <p>{item.answer}</p>
                                        </li>
                                ))}
                        </ul>

                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
                </article>
        );
}
