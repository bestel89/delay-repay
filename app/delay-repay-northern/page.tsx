import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
        title: "Northern Delay Repay Calculator | DelayRepayCalc",
        description: "Estimate Northern Delay Repay payouts, learn the thresholds, and jump to the claim form with clear evidence tips.",
        alternates: { canonical: "/delay-repay-northern" },
};

export default function NorthernPage() {
        return (
                <article className="prose max-w-none">
                        <h1>Northern Delay Repay</h1>
                        <p>
                                Use this Northern rail delay repay calculator to estimate compensation before you submit a claim. Northern operates a large commuter and regional network, and this guide explains how Northern handles Delay Repay so you can start in the <Link href="/">delay repay calculator</Link> with confidence.
                        </p>

                        <h2>Headline facts</h2>
                        <ul>
                                <li>Delay bands usually at 15–29, 30–59, 60–119, and 120+ minutes</li>
                                <li>Most singles, returns, and season tickets on Northern services are eligible</li>
                                <li>Claims are submitted via Northern’s online form with supporting evidence</li>
                                <li>Payments may be offered by bank transfer, card refund, or vouchers</li>
                        </ul>

                        <h2>Estimate a Northern journey</h2>
                        <p>
                                Start with the calculator below, pre-set to Northern. Enter your ticket price, ticket type, and delay length to see an indicative payout before opening the claim form.
                        </p>
                        <Calculator preselectedOperatorCode="northern" />

                        <h2>Eligibility across the network</h2>
                        <p>
                                If your Northern service arrives late at your destination, you can generally claim under Delay Repay. If your journey includes another operator, identify which legs Northern operated and how the delay occurred. If the train was cancelled and you chose not to travel, a refund may be appropriate instead; note any advice received from staff.
                        </p>

                        <h2>Estimating with the calculator</h2>
                        <p>
                                Choose Northern in the <Link href="/">calculator</Link>, enter your ticket price, select the ticket type, and pick the delay band that matches your arrival. The calculator uses Northern’s published percentages and converts season tickets to a per-journey value. Use the result as guidance, then click through to Northern’s claim form.
                        </p>

                        <h2>Evidence Northern looks for</h2>
                        <p>
                                Provide proof of travel (ticket, smartcard, or booking reference) and proof of the actual arrival time. Photos of departure boards, screenshots from journey apps, or email alerts are useful. If staff re-routed you or accepted your ticket on another operator, note who authorised it and when.
                        </p>
                        <p>
                                For split tickets or railcard discounts, include all ticket references and note the railcard used. Clear evidence helps avoid follow-up requests and speeds up payment.
                        </p>

                        <h2>Season tickets on Northern</h2>
                        <p>
                                Weekly, monthly, annual, and flexi season tickets are eligible when a qualifying delay occurs on a Northern-operated leg. The calculator divides the ticket price by the standard factor (10, 40, 464, or 16) and applies the band percentage. On the claim form, include the validity dates and whether the ticket is on a smartcard or mobile app.
                        </p>
                        <p>
                                Regular commuters may submit multiple claims over time. Keeping a simple log of dates, services, and delays can help respond quickly if Northern requests clarification.
                        </p>

                        <h2>Advance fares and local routes</h2>
                        <p>
                                Advance fares are less common on shorter regional routes but do exist. If an Advance train is cancelled or delayed, you can claim based on the actual arrival time of the service you used. If you were advised to take a different operator, explain the circumstances and provide the arrival time of the alternative service.
                        </p>

                        <h2>Missed connections</h2>
                        <p>
                                If a Northern delay causes you to miss a connection, compensation is usually based on the delay at the final destination. Provide the planned connection time, the service missed, and the train you eventually boarded. If the connection involved another operator, state whether Northern staff authorised the change. More guidance is available in the <Link href="/delay-repay-missed-connections">missed connections guide</Link>.
                        </p>

                        <h2>Cancelled trains</h2>
                        <p>
                                If your Northern train is cancelled and you do not travel, you can normally request a refund. If you travel on a later service, Delay Repay may apply based on the arrival delay. Keep screenshots of cancellation notices and any advice from staff. Detailed steps are in the <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link>.
                        </p>

                        <h2>Time limits</h2>
                        <p>
                                Claims should be submitted within Northern’s stated window, often around 28 days. Submit promptly with clear evidence. If you are close to the deadline, focus on the essentials—ticket proof, journey details, and actual arrival time—and keep a copy of the submission confirmation. For more tips, see the <Link href="/delay-repay-claim-time-limits">time limits guide</Link>.
                        </p>

                        <h2>Submitting your claim</h2>
                        <p>
                                After estimating in the calculator, follow the Northern claim link. Provide contact details, journey specifics, ticket references, and your preferred payment method. Upload clear images of tickets and evidence, then keep the confirmation email for reference.
                        </p>

                        <h2>After submission</h2>
                        <p>
                                Northern aims to process claims quickly, though response times can vary. Payments are issued via the method you choose. If the amount differs from the calculator estimate, review the reason given and reply with any additional evidence if needed.
                        </p>

                        <h2>Checklist for Northern claims</h2>
                        <ul>
                                <li>Ticket proof is clear and shows the route and date.</li>
                                <li>Arrival time evidence is attached, even if it is a simple photo of the departure board.</li>
                                <li>Any re-routing advice from staff is noted with time and location.</li>
                                <li>Separate claims are prepared for separate days to keep evidence organised.</li>
                        </ul>

                        <p>
                                If you travel with children or in a group, list each ticket reference so the claim reflects the full party. Where accessibility considerations meant certain replacement routes were unsuitable, explain this briefly. Operators appreciate concise context and it can prevent the need for further clarification.
                        </p>

                        <p>
                                If your itinerary involved another operator, state clearly which leg Northern operated and where the delay started. Clear attribution helps avoid the claim being redirected and keeps processing times down.
                        </p>

                        <h2>Related pages</h2>
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
