import type { Metadata } from "next";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase.server";
import type { Tables } from "@/definitions/supabase";

export const metadata: Metadata = {
        title: "Northern Delay Repay Calculator | DelayRepayCalc",
        description: "Estimate Northern rail Delay Repay compensation and learn the steps, evidence, and links you need to submit a claim.",
        alternates: { canonical: "/delay-repay-northern" },
};

const faqItems = [
        {
                question: "When can I claim Delay Repay with Northern?",
                answer: "You can usually claim when a Northern-operated leg arrives late at your final destination or if disruption meant you were advised not to travel. The delay is timed at the final stop on your ticket.",
        },
        {
                question: "What are Northern’s Delay Repay thresholds?",
                answer: "Many UK operators follow Delay Repay 15 (15/30/60+). Always check the official claim page for the latest Northern thresholds before submitting.",
        },
        {
                question: "Which tickets are eligible on Northern?",
                answer: "Most singles, returns, and season tickets are eligible when Northern operated the delayed service. Include the specific ticket reference and any railcard used.",
        },
        {
                question: "How do I get an estimate for Northern?",
                answer: "Use the delay repay calculator with Northern selected, enter your fare and delay length, and view the guidance payout before opening the claim form.",
        },
        {
                question: "What evidence should I include?",
                answer: "Attach proof of travel and proof of the actual arrival time. Photos of station boards, app screenshots, or email alerts work well.",
        },
        {
                question: "What about missed connections on Northern journeys?",
                answer: "Compensation is normally based on the delay at your final destination. List the planned connection, the service you missed, and the train you took instead.",
        },
        {
                question: "Can I claim for cancelled Northern trains?",
                answer: "If you did not travel, request a refund from the retailer. If you travelled on a later train, use Delay Repay based on the eventual arrival time.",
        },
];

export default async function NorthernPage() {
        const supabase = supabaseServer();
        const { data, error } = await supabase
                .from("operators")
                .select("name,code,claim_url,website_url,delay_repay,active")
                .eq("code", "northern")
                .maybeSingle();

        if (error || !data) {
                return (
                        <article className="prose max-w-none">
                                <h1>Northern Delay Repay Calculator</h1>
                                <p>We couldn’t load Northern details right now. Please use the <Link href="/">delay repay calculator</Link> and select Northern manually.</p>
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
                                Use this <Link href="/delay-repay-northern">northern rail delay repay calculator</Link> to get a quick estimate before opening the official claim form. The{" "}
                                <Link href="/">delay repay calculator</Link> preselects Northern so you can jump straight to the right guidance and payout bands.
                        </p>
                        <div className="not-prose mb-6 flex flex-wrap gap-3">
                                <Link className="btn btn-primary" href={`/?operator=${operator.code}#calculator`}>
                                        Calculate compensation
                                </Link>
                                {operator.claim_url && (
                                        <a className="btn btn-outline" href={operator.claim_url} rel="noopener noreferrer" target="_blank">
                                                Official Northern claim page
                                        </a>
                                )}
                                {operator.website_url && (
                                        <a className="btn btn-ghost" href={operator.website_url} rel="noopener noreferrer" target="_blank">
                                                Northern website
                                        </a>
                                )}
                        </div>

                        <h2>How {operator.name} Delay Repay works</h2>
                        <p>
                                Northern participates in the Delay Repay scheme for most services it operates. Estimate the payout with the calculator, then submit the claim with ticket proof and evidence of the arrival time. If your journey includes another operator, note which leg Northern ran and where the delay started.
                        </p>

                        <h2>Compensation thresholds</h2>
                        <p>Many UK operators follow Delay Repay 15 (15/30/60+). Always check the official claim page.</p>
                        <p>
                                The payout depends on the ticket type and delay band. Season tickets are converted to a per-journey value before the band is applied.
                        </p>

                        <h2>Examples</h2>
                        <ul>
                                <li>Single ticket £22, 35-minute delay: typically 50% of the fare.</li>
                                <li>Return ticket £48, 75-minute delay: often 100% of the single-leg value.</li>
                                <li>Weekly season £120, 20-minute delay: calculator converts to a per-journey value then applies the band.</li>
                        </ul>

                        <h2>What you need to claim</h2>
                        <ul>
                                <li>Ticket proof (paper, smartcard, or e-ticket reference) and any railcard used.</li>
                                <li>Evidence of actual arrival time, such as a station board photo or app screenshot.</li>
                                <li>Details of any rerouting approval if you were asked to use a different service.</li>
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
