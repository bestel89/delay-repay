import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
        title: "Delay Repay explained | UK train compensation guidance",
        description: "Plain-English guide to Delay Repay in the UK: eligibility, evidence, season tickets, cancellations, and how to submit a claim.",
        alternates: { canonical: "/delay-repay-explained" },
};

export default function DelayRepayExplainedPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>Delay Repay explained</h1>
                        <p>
                                Delay Repay is the UK scheme that lets rail passengers claim compensation when a train is delayed or cancelled. This guide walks through eligibility, evidence, ticket types, operator differences, and how to submit a claim without jargon. It complements the <Link href="/">Delay Repay calculator</Link>, which estimates what you might receive in pounds before you open the official claim form.
                        </p>

                        <h2>What Delay Repay covers</h2>
                        <p>
                                Most train operating companies in Great Britain participate in Delay Repay. The scheme usually applies when your train arrives late at your destination, you are advised not to travel due to disruption, or a cancellation forces you to abandon the journey. The exact trigger varies by operator but many pay from 15 minutes of delay with higher percentages at 30–59, 60–119, and 120+ minutes. If an operator does not use Delay Repay, they will have an alternative refund process; the calculator flags these cases so you do not waste time on the wrong form.
                        </p>

                        <h2>Eligibility and common thresholds</h2>
                        <p>
                                Eligibility is tied to the time your train actually arrives compared with the timetable or a published replacement timetable. Most operators treat 15–29 minutes as the first band. Some require a longer delay for certain ticket types or offer goodwill payments in disruption periods. If you changed trains because of advice from staff, include that detail in your claim so the operator knows why the original service was not taken. The <Link href="/delay-repay-claim-time-limits">claim time limits guide</Link> summarises how long you have to apply.
                        </p>

                        <h2>Evidence to keep</h2>
                        <p>
                                Operators expect proof of travel and proof of delay. Keep the ticket or booking confirmation, and note the actual arrival time. A quick photo of the departure board, a screenshot from a journey planner, or an email alert can all help. If you travelled on a mobile ticket, retain the barcode or reference number. Clear evidence reduces follow-up questions and speeds up payment.
                        </p>

                        <h2>Ticket types and how they are treated</h2>
                        <p>
                                Singles and returns are usually straightforward: the compensation percentage applies to the fare you paid. Season tickets need conversion to a per-journey value before applying the band. The calculator automatically applies industry-standard conversions for weekly, monthly, annual, and flexi products, so the estimate is aligned with how operators review claims. Split tickets and railcard discounts are typically eligible; enter the price paid for the affected portion and note any discounts in the claim form.
                        </p>
                        <p>
                                Advance tickets are normally eligible if the train you booked was delayed or cancelled. If you choose to travel on an alternative operator, check the terms carefully and explain why you boarded that service. When in doubt, provide full journey details so the case handler can see the sequence of events.
                        </p>

                        <h2>Missed connections and complex journeys</h2>
                        <p>
                                If you missed a connection because the first train was late, most operators measure the delay at the final destination on a through itinerary. Include all legs of the journey, planned departure and arrival times, and what actually happened. If you were re-routed or accepted on another operator, note that too. For more examples, see the <Link href="/delay-repay-missed-connections">missed connections guide</Link>.
                        </p>

                        <h2>Cancellations and being advised not to travel</h2>
                        <p>
                                A cancellation may lead to a refund, a Delay Repay payment, or both, depending on whether you travelled and whether you were advised not to travel. If you chose not to travel, keep evidence of the advice given. If you travelled on a different service, note the new times so the delay can be measured. The <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link> breaks down the typical outcomes for each scenario.
                        </p>

                        <h2>How to submit a claim</h2>
                        <p>
                                Claims are submitted directly to the operator that was responsible for the delay. Open the calculator, select the operator, and use the “Claim with” link to reach the official form. Typical fields include your contact details, journey information, ticket proof, bank details or voucher preference, and an explanation of what happened. Be concise and stick to the facts. Upload clear images and keep copies of everything you send.
                        </p>

                        <h2>Processing times and payouts</h2>
                        <p>
                                Many operators aim to respond within a couple of weeks, though busy periods can take longer. Payments may be made by bank transfer, card refund, vouchers, or loyalty points depending on the operator. If you receive a reduced amount, check the reason given: it may relate to evidence, eligibility, or the time limit. You can usually appeal by replying to the operator with additional information.
                        </p>

                        <h2>Staying within time limits</h2>
                        <p>
                                Delay Repay claims often need to be lodged within a set number of days from the journey date. Submit promptly, especially if you have paper tickets that might be discarded. Digital receipts and photos provide a back-up if you misplace the original. For a summary of typical windows and how to respond if you are close to the deadline, read the <Link href="/delay-repay-claim-time-limits">claim time limits guide</Link>.
                        </p>

                        <h2>Where to go next</h2>
                        <p>
                                Ready to estimate your journey? Open the <Link href="/">Delay Repay calculator</Link>. If you travel regularly, bookmark the <Link href="/delay-repay-season-tickets">season ticket guidance</Link> and check the operator-specific pages for <Link href="/delay-repay-avanti">Avanti</Link>, <Link href="/delay-repay-gwr">GWR</Link>, <Link href="/delay-repay-lner">LNER</Link>, <Link href="/delay-repay-northern">Northern</Link>, and <Link href="/delay-repay-southern">Southern</Link> to understand how each company applies the rules.
                        </p>
                </article>
        );
}
