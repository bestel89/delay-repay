import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
        title: "Southern Delay Repay calculator and guide",
        description: "How Southern Railway applies Delay Repay: thresholds, ticket types, cancellations, season tickets, and claim steps.",
        alternates: { canonical: "/delay-repay-southern" },
};

export default function SouthernPage() {
        return (
                <article className="prose max-w-none">
                        <h1>Southern Delay Repay</h1>
                        <p>
                                Southern runs commuter and airport services across the South East. This guide shows how Southern applies Delay Repay and how to estimate compensation using the <Link href="/">Delay Repay calculator</Link> before submitting a claim.
                        </p>

                        <h2>Overview</h2>
                        <ul>
                                <li>Delay bands typically start at 15–29 minutes with higher percentages at 30–59, 60–119, and 120+ minutes</li>
                                <li>Singles, returns, and season tickets on Southern-operated services are generally eligible</li>
                                <li>Claims are made through the Southern online form with evidence of travel and delay</li>
                                <li>Payments are usually offered by bank transfer, card refund, or vouchers</li>
                        </ul>

                        <h2>Estimate a Southern journey</h2>
                        <p>
                                Use the calculator with Southern pre-selected to see an indicative payout in pounds. Enter the ticket price, ticket type, and delay length, then follow the claim link from the result.
                        </p>
                        <Calculator preselectedOperatorCode="southern" />

                        <h2>Eligibility on Southern services</h2>
                        <p>
                                If your Southern train arrives late at your destination, you can normally claim Delay Repay. If your itinerary involves other operators, explain which legs Southern operated and how the delay occurred. If advised not to travel due to disruption, note who provided the advice and when, as this can affect whether a refund or Delay Repay is more appropriate.
                        </p>

                        <h2>Estimating with the calculator</h2>
                        <p>
                                Select Southern in the <Link href="/">calculator</Link>, enter your ticket price, choose the ticket type, and select the delay length. The calculator applies Southern’s published percentages and converts season tickets to a per-journey value. Use the estimate as guidance before opening the Southern claim form from the same page.
                        </p>

                        <h2>Evidence to include</h2>
                        <p>
                                Provide proof of travel (ticket, smartcard, or booking confirmation) and proof of the actual arrival time. Photos of station boards, app screenshots, or email alerts are useful. If staff re-routed you, include who authorised it and the train you took. For split tickets or railcards, include all references and note the railcard used.
                        </p>

                        <h2>Season tickets on Southern</h2>
                        <p>
                                Weekly, monthly, annual, and flexi season tickets are eligible when a qualifying delay occurs on a Southern-operated leg. The calculator divides the ticket price by the standard factor (10, 40, 464, or 16) before applying the band percentage. In the claim form, include validity dates and whether the ticket is on a smartcard or mobile app. Keep a simple log if you submit multiple claims over time.
                        </p>

                        <h2>Airport and Thameslink connections</h2>
                        <p>
                                Southern services often connect to Gatwick Airport and link with Thameslink. If a Southern delay affects a flight connection or a Thameslink leg, describe the full itinerary and the arrival time at your final destination. If you were accepted onto another operator to minimise disruption, include that detail. Compensation is generally based on the delay at the final destination, not just the Southern leg.
                        </p>

                        <h2>Missed connections</h2>
                        <p>
                                When a Southern delay causes a missed connection, the delay is measured at the final destination. Provide the planned connection time, the service missed, and the train you eventually boarded. If the connection involved a different operator, state whether Southern staff authorised the change. For more examples, see the <Link href="/delay-repay-missed-connections">missed connections guide</Link>.
                        </p>

                        <h2>Cancelled trains</h2>
                        <p>
                                If a Southern service is cancelled and you do not travel, you can usually request a refund. If you travel on a later service, Delay Repay may apply based on the arrival delay. Keep cancellation notices and any advice from staff. More detail is available in the <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link>.
                        </p>

                        <h2>Time limits</h2>
                        <p>
                                Claims should be submitted within Southern’s stated timeframe, often around 28 days. Submit promptly with clear evidence. If you are close to the deadline, prioritise ticket proof, journey details, and arrival time, and keep a copy of the submission confirmation. For wider tips, read the <Link href="/delay-repay-claim-time-limits">time limits guide</Link>.
                        </p>

                        <h2>Submitting your claim</h2>
                        <p>
                                After estimating in the calculator, follow the Southern claim link. Provide your contact information, journey details, ticket references, preferred payment method, and a concise account of the delay. Upload clear evidence and keep the confirmation email for your records.
                        </p>

                        <h2>After submission</h2>
                        <p>
                                Southern aims to review claims quickly, though response times can vary during busy periods. Payments are made via the method you choose. If the outcome differs from the calculator estimate, review the explanation and reply with any additional evidence if necessary.
                        </p>

                        <h2>Extra pointers for Southern commuters</h2>
                        <ul>
                                <li>Keep screenshots of live departure boards at busy hubs such as London Victoria or Gatwick Airport, as these often show the clearest timestamps.</li>
                                <li>If your journey involves Thameslink, state which legs were Southern-operated so the delay can be attributed correctly.</li>
                                <li>For regular commuters, consider a weekly review to submit any claims within the time limit rather than waiting until the end of the month.</li>
                                <li>Check spam folders for confirmation emails to ensure your submission reference is stored safely.</li>
                        </ul>

                        <p>
                                When travelling in groups, include all ticket references so compensation is calculated for everyone affected. If you were offered alternative routes that were unsuitable—for example because of luggage for an airport trip—mention this briefly to explain your chosen path through disruption.
                        </p>

                        <p>
                                If your journey combined Southern with another operator, note which legs each company operated and where the delay began. This helps the claim reach the correct team without extra processing time.
                        </p>

                        <h2>Helpful links</h2>
                        <ul>
                                <li><Link href="/">Delay Repay calculator</Link></li>
                                <li><Link href="/delay-repay-explained">How Delay Repay works</Link></li>
                                <li><Link href="/delay-repay-season-tickets">Season ticket guidance</Link></li>
                                <li><Link href="/delay-repay-missed-connections">Missed connections</Link></li>
                                <li><Link href="/delay-repay-cancelled-trains">Cancelled trains</Link></li>
                        </ul>
                </article>
        );
}
