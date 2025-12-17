import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
        title: "GWR Delay Repay calculator and guide",
        description: "How Great Western Railway applies Delay Repay: bands, ticket types, cancellations, season tickets, and how to claim.",
        alternates: { canonical: "/delay-repay-gwr" },
};

export default function GwrPage() {
        return (
                <article className="prose max-w-none">
                        <h1>Great Western Railway Delay Repay</h1>
                        <p>
                                Use this guide to understand how Great Western Railway (GWR) handles Delay Repay and to estimate compensation using the <Link href="/">Delay Repay calculator</Link>. It covers eligibility, ticket types, evidence, cancellations, and what to expect after submitting a claim.
                        </p>

                        <h2>Key points</h2>
                        <ul>
                                <li>Delay bands commonly start at 15–29 minutes with increasing percentages at 30–59, 60–119, and 120+ minutes</li>
                                <li>Claims are submitted through the GWR online form with supporting evidence</li>
                                <li>Singles, returns, and season tickets are generally eligible on GWR-operated services</li>
                                <li>Payments are typically made by bank transfer, card refund, or vouchers depending on your preference</li>
                        </ul>

                        <h2>Estimate a GWR journey</h2>
                        <p>
                                Start with the calculator to see an indicative payout for a GWR delay. The operator is pre-selected below—enter your ticket price, ticket type, and delay length to get a figure before opening the claim form.
                        </p>
                        <Calculator preselectedOperatorCode="gwr" />

                        <h2>Eligibility on GWR services</h2>
                        <p>
                                GWR participates in the Delay Repay scheme across its intercity and regional routes. If your train arrives late at your destination, you can normally claim. If part of your journey involves another operator, specify which legs were GWR-operated and how the delay occurred. If advised not to travel due to disruption, note who provided the advice and when.
                        </p>

                        <h2>Estimating with the calculator</h2>
                        <p>
                                Select GWR in the <Link href="/">calculator</Link>, add your ticket price, choose the ticket type, and pick the delay length. The calculator applies GWR’s published percentages and converts season tickets to a per-journey value. Use the estimate as guidance before opening the GWR claim form via the same page.
                        </p>

                        <h2>Evidence to provide</h2>
                        <p>
                                GWR asks for proof of travel (ticket, smartcard, or booking confirmation) and proof of the delay. Photos of station boards, screenshots from the GWR app, or National Rail alerts can demonstrate arrival times. If staff re-routed you or accepted your ticket on another operator, include those details.
                        </p>
                        <p>
                                For split tickets or railcard discounts, include each ticket reference and note the railcard used. This helps the case handler verify the fare paid.
                        </p>

                        <h2>Season tickets with GWR</h2>
                        <p>
                                Weekly, monthly, annual, and flexi season tickets are eligible when a qualifying delay happens on a GWR-operated leg. The calculator divides the ticket value by the standard factor and applies the band percentage. In the claim form, provide the validity dates and whether the ticket is on a smartcard or mobile app. Keep a record of journeys when submitting multiple claims in the same period.
                        </p>

                        <h2>Advance and long-distance journeys</h2>
                        <p>
                                Many GWR journeys use Advance fares. If your booked train is cancelled or delayed, you can claim based on the actual arrival time of the service you used. If you travelled on a different operator with permission, note this and supply the new arrival time. Seat reservations are helpful to show the original plan.
                        </p>

                        <h2>Missed connections</h2>
                        <p>
                                If a late GWR service causes you to miss a connection, compensation is usually based on the delay at the final destination. Provide the planned connection times, the service you missed, and the train you ultimately took. If the connection involved another operator, state whether GWR staff authorised the change. More scenarios are covered in the <Link href="/delay-repay-missed-connections">missed connections guide</Link>.
                        </p>

                        <h2>Cancelled trains</h2>
                        <p>
                                If your GWR service is cancelled and you do not travel, you can normally seek a refund. If you take a later service, Delay Repay may apply based on the arrival delay. Record any advice given not to travel and keep screenshots of cancellation notices. For detailed steps, visit the <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link>.
                        </p>

                        <h2>Claim time limits</h2>
                        <p>
                                Claims should be made within the timeframe stated on the GWR form, often around 28 days. Submit promptly with clear evidence to avoid delays. If you are close to the deadline, focus on the essentials and keep a copy of the submission confirmation. For more tips, see the <Link href="/delay-repay-claim-time-limits">time limits guide</Link>.
                        </p>

                        <h2>How to submit a claim</h2>
                        <p>
                                After using the calculator, follow the GWR claim link. Provide contact details, journey information, ticket references, and bank or voucher preference. Upload clear images of tickets and evidence. Keep the confirmation email for your records.
                        </p>

                        <h2>After you apply</h2>
                        <p>
                                GWR aims to process claims quickly, though busy periods can take longer. Payments are issued via your chosen method. If the amount differs from the calculator estimate, review the explanation in the decision. You can reply with additional evidence if necessary, keeping the tone factual and concise.
                        </p>

                        <h2>Tips for smoother GWR claims</h2>
                        <ul>
                                <li>Upload images that clearly show dates, times, and ticket references. Blurry photos are a common cause of delays.</li>
                                <li>Mention any railcard discount so the fare paid is understood.</li>
                                <li>If disruption covered multiple days, submit separate claims with evidence for each journey rather than combining them.</li>
                                <li>Keep a brief travel log if you are a regular commuter; it helps answer follow-up questions quickly.</li>
                        </ul>

                        <p>
                                Travelling with others? Include tickets or booking references for every passenger so the claim handler can see the full party. If accessibility needs affected the options you could take during disruption, explain this briefly to give context for any route you selected.
                        </p>

                        <p>
                                If you travelled on both GWR and another operator during the same disruption, make it clear which legs each company operated. This helps ensure the delay is attributed correctly and reduces the chance of your claim being redirected.
                        </p>

                        <h2>Related links</h2>
                        <ul>
                                <li><Link href="/">Delay Repay calculator</Link></li>
                                <li><Link href="/delay-repay-explained">Delay Repay explained</Link></li>
                                <li><Link href="/delay-repay-season-tickets">Season ticket guidance</Link></li>
                                <li><Link href="/delay-repay-missed-connections">Missed connections</Link></li>
                                <li><Link href="/delay-repay-cancelled-trains">Cancelled trains</Link></li>
                        </ul>
                </article>
        );
}
