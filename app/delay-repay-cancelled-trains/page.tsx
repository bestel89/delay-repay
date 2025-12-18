import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
        title: "Delay Repay for cancelled trains | What to expect",
        description: "Understand how Delay Repay applies to cancelled trains in the UK, including when refunds or compensation are paid and what evidence to provide.",
        alternates: { canonical: "/delay-repay-cancelled-trains" },
};

export default function CancelledTrainsPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>Delay Repay for cancelled trains</h1>
                        <p>
                                A cancelled train can trigger Delay Repay, a refund, or both, depending on when you were informed and whether you travelled. This guide explains the scenarios operators consider, the evidence they look for, and how to use the <Link href="/">Delay Repay calculator</Link> to set expectations before you submit a claim.
                        </p>

                        <h2>When Delay Repay applies to cancellations</h2>
                        <p>
                                Many operators treat a cancellation that causes you to arrive late as a qualifying delay. If you board a later train or an alternative service, the delay is measured at the time you reach your planned destination. If you decide not to travel after being advised not to, you may be entitled to a refund instead of a Delay Repay payment. The operator’s claim form usually asks whether you travelled and why.
                        </p>

                        <h2>Refunds versus Delay Repay</h2>
                        <p>
                                If you did not make the journey because the train was cancelled, you can normally request a full refund from the retailer or operator. If you travelled on a later service, Delay Repay may apply instead, based on the arrival delay. Some operators allow you to choose between a refund and Delay Repay where both would be possible; others default to the most appropriate option. Explain clearly whether you travelled and what alternative was offered.
                        </p>

                        <h2>Evidence to include</h2>
                        <p>
                                Provide proof of your ticket and any notifications about the cancellation. Screenshots of journey planner updates, station departure boards, or emails from the operator can show when you were informed. If staff advised a specific route or told you not to travel, mention this and, if possible, include the time and location of the advice.
                        </p>
                        <p>
                                If you were re-routed, note the train times and operators you used. This helps the case handler measure the delay correctly and prevents confusion over which service was cancelled.
                        </p>

                        <h2>Season tickets and cancellations</h2>
                        <p>
                                Season ticket holders can claim Delay Repay for individual cancelled journeys when the delay thresholds are met. The calculator converts the ticket price to a per-journey value before applying the relevant percentage. If widespread cancellations occur, some operators may also offer additional compensation or goodwill; check the claim form and operator updates for any special arrangements.
                        </p>

                        <h2>Advance tickets</h2>
                        <p>
                                Advance tickets tied to a specific train are usually refundable if that train is cancelled. If you travel on an alternative service with the same operator, you may still be eligible for Delay Repay if the arrival is delayed. Keep the original booking reference and any seat reservations to show the train you intended to catch.
                        </p>

                        <h2>Replacement transport</h2>
                        <p>
                                If a rail replacement bus or arranged taxi is provided, the delay is measured by the time you arrive at the destination. Include the departure and arrival times of the replacement transport in your claim. If the replacement was significantly delayed or did not run, make this clear so the operator can apply the correct band.
                        </p>

                        <h2>Practical steps when a train is cancelled</h2>
                        <ul>
                                <li>Check live information and ask staff whether to wait, re-route, or not travel</li>
                                <li>Keep notes of advice received and times of any replacement services</li>
                                <li>Retain tickets and take photos of screens or announcements where possible</li>
                                <li>Use the <Link href="/">calculator</Link> to estimate compensation before submitting the claim</li>
                        </ul>

                        <h2>Submitting the claim</h2>
                        <p>
                                Go to the calculator, choose your operator, and click through to the official claim form. Clearly state that the train was cancelled, whether you travelled on another service, and the arrival time. If you did not travel, indicate whether you are seeking a refund or Delay Repay. Upload supporting images and keep a copy of the submission confirmation.
                        </p>

                        <h2>Follow-up and appeals</h2>
                        <p>
                                If the operator offers a different amount than expected, check the reason given. It may relate to the measured delay, the ticket type, or the chosen remedy. You can usually reply to the decision with additional evidence. Be factual and keep the focus on the timeline and the advice you received.
                        </p>

                        <h2>Pre-submission checklist</h2>
                        <ul>
                                <li>List the trains you planned to take, including times and service numbers if available.</li>
                                <li>Capture screenshots of any alerts or emails showing when the cancellation was announced.</li>
                                <li>State whether you travelled, were re-routed, or chose not to travel; include any staff advice.</li>
                                <li>Upload clear photos of all tickets, smartcards, or booking confirmations for your party.</li>
                                <li>Note any additional costs such as taxis or hotels and keep receipts if you plan to raise them separately.</li>
                        </ul>

                        <p>
                                Travelling as a group? Make sure every passenger’s ticket or booking reference is included. If you have mobility needs or required assistance during disruption, mention this briefly so the operator understands why certain alternatives were or were not suitable. Clarity around these points can prevent unnecessary back-and-forth.
                        </p>

                        <h2>Where to learn more</h2>
                        <p>
                                For missed connections caused by cancellations, see the <Link href="/delay-repay-missed-connections">missed connections guide</Link>. For deadlines, read the <Link href="/delay-repay-claim-time-limits">claim time limits</Link> page. When you are ready to proceed, return to the <Link href="/">Delay Repay calculator</Link> to estimate the likely payment and reach the correct operator form.
                        </p>
                </article>
        );
}
