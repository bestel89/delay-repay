import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
        title: "LNER Delay Repay calculator and guide",
        description: "How LNER applies Delay Repay on the East Coast Main Line: thresholds, evidence, season tickets, cancellations, and claim tips.",
        alternates: { canonical: "/delay-repay-lner" },
};

export default function LnerPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>LNER Delay Repay</h1>
                        <p>
                                Learn how London North Eastern Railway (LNER) handles Delay Repay and use the <Link href="/">Delay Repay calculator</Link> to estimate compensation before you claim. This guide covers eligibility, ticket types, evidence, cancellations, and the steps to submit a strong application.
                        </p>

                        <h2>Policy snapshot</h2>
                        <ul>
                                <li>Delay bands typically at 15–29, 30–59, 60–119, and 120+ minutes</li>
                                <li>Applies to most LNER-operated services on the East Coast Main Line</li>
                                <li>Claims submitted through the LNER online form with supporting evidence</li>
                                <li>Payments usually offered by bank transfer, card refund, or vouchers</li>
                        </ul>

                        <h2>Estimate a journey on LNER</h2>
                        <p>
                                Use the calculator with LNER pre-selected to see an indicative payout. Enter your ticket price, ticket type, and delay length, then follow the link to the LNER claim form for submission.
                        </p>
                        <Calculator preselectedOperatorCode="lner" />

                        <h2>Eligibility on LNER</h2>
                        <p>
                                If an LNER service arrives late at your destination, you are normally eligible to claim under Delay Repay. If part of the journey involves another operator, clarify which sections were LNER-operated and how the delay arose. If advised not to travel due to disruption, record who provided the advice and the time.
                        </p>

                        <h2>Estimating your claim</h2>
                        <p>
                                In the <Link href="/">calculator</Link>, select LNER, enter your ticket price, pick the ticket type, and choose the delay band matching your arrival. The calculator applies LNER’s published percentages and converts season tickets to a per-journey value. Use the result to set expectations before opening the LNER claim form.
                        </p>

                        <h2>Evidence to include</h2>
                        <p>
                                Provide a clear copy of your ticket or booking confirmation and proof of the actual arrival time. Photos of station boards, screenshots from the LNER app, or email alerts all help. If you were re-routed or accepted on another operator, include who authorised it and when.
                        </p>
                        <p>
                                For split tickets or railcard discounts, include each ticket reference and note the railcard used so the fare can be verified. Make sure files are legible before submitting.
                        </p>

                        <h2>Season tickets and frequent travellers</h2>
                        <p>
                                LNER accepts Delay Repay claims for weekly, monthly, annual, and flexi season tickets when a qualifying delay occurs on an LNER-operated leg. The calculator divides the ticket price by the standard factor (10, 40, 464, or 16) before applying the band percentage. On the form, provide the validity dates and how the ticket is stored (smartcard or mobile).
                        </p>
                        <p>
                                If you commute regularly, keep a simple log of dates and services affected. This can speed up responses when multiple claims are submitted within the same period.
                        </p>

                        <h2>Advance fares and seat reservations</h2>
                        <p>
                                Many LNER journeys are booked as Advance fares with seat reservations. If your booked train is cancelled or delayed, you can claim based on the actual arrival time of the train you took. If you travelled on an alternative operator with permission, mention it and include the arrival time. Seat reservations help demonstrate the original plan if questions arise.
                        </p>

                        <h2>Missed connections</h2>
                        <p>
                                If a late LNER service leads to a missed connection, compensation is usually based on the delay at the final destination. Provide the planned connection times, the service missed, and the train you ultimately boarded. If the connection involved a different operator, state whether LNER staff authorised the change. See the <Link href="/delay-repay-missed-connections">missed connections guide</Link> for more scenarios.
                        </p>

                        <h2>Cancelled trains</h2>
                        <p>
                                If your LNER service is cancelled and you do not travel, you can generally obtain a refund. If you take a later service, Delay Repay may apply based on the arrival delay. Retain notifications of the cancellation and any advice received from staff. More detail is in the <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link>.
                        </p>

                        <h2>Time limits</h2>
                        <p>
                                LNER sets a submission window for claims, often around 28 days. Submit as soon as possible with clear evidence. If you are close to the deadline, prioritise ticket proof, journey details, and arrival time, then follow up with any extra information if requested. For general tips, read the <Link href="/delay-repay-claim-time-limits">time limits guide</Link>.
                        </p>

                        <h2>Submitting your claim</h2>
                        <p>
                                After estimating in the calculator, follow the LNER claim link. Provide your contact details, journey specifics, ticket references, and bank or voucher preference. Upload clear images and keep the confirmation email for your records.
                        </p>

                        <h2>After submission</h2>
                        <p>
                                LNER aims to process claims promptly, though busy periods can extend response times. Payments are usually made via your chosen method. If the amount differs from the calculator estimate, check the explanation in the decision and respond with additional evidence if needed.
                        </p>

                        <h2>Good habits for LNER claims</h2>
                        <ul>
                                <li>Save PDFs or screenshots of e-tickets and seat reservations as soon as you book.</li>
                                <li>Note the train reporting number or service time if you can, especially on busy days.</li>
                                <li>Submit one claim per journey so evidence stays linked to a specific delay.</li>
                                <li>If you often travel for work, keep a running log to avoid forgetting dates within the submission window.</li>
                        </ul>

                        <p>
                                If you travelled as a group or family, include the relevant references for everyone. Mention any assistance needs that limited your ability to take alternative routes during disruption. These details help the case handler understand why certain options were not suitable and can reduce follow-up queries.
                        </p>

                        <p>
                                If your itinerary mixed LNER with other operators, list which legs each company ran and where the initial delay occurred. Clear attribution helps the claim reach the right team the first time.
                        </p>

                        <h2>Useful links</h2>
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
