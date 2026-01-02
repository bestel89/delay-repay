import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import CalculatorCallout from "@/components/CalculatorCallout";

export const metadata: Metadata = {
        title: "Avanti Delay Repay calculator and guide",
        description: "How Avanti West Coast handles Delay Repay: thresholds, evidence, season tickets, cancellations, and how to claim.",
        alternates: { canonical: "/delay-repay-avanti" },
};

export default function AvantiPage() {
        return (
                <article className="prose max-w-none">
                        <h1>Avanti West Coast Delay Repay</h1>
                        <p>
                                This page explains how Avanti West Coast applies Delay Repay and how to estimate compensation using the <Link href="/">Delay Repay calculator</Link>. It covers thresholds, ticket types, evidence, and practical steps to submit a complete claim.
                        </p>

                        <CalculatorCallout />

                        <h2>At a glance</h2>
                        <ul>
                                <li>Typical bands: 15–29, 30–59, 60–119, 120+ minutes</li>
                                <li>Eligible tickets: most singles, returns, and season tickets on Avanti-operated services</li>
                                <li>Submission: online claim form with ticket proof and arrival time</li>
                                <li>Payment methods: bank transfer, card refund, or vouchers depending on choice</li>
                        </ul>

                        <h2>Estimate a journey on Avanti</h2>
                        <p>
                                Use the calculator below with Avanti pre-selected to see an indicative payout in pounds. Enter your ticket price, ticket type, and delay length, then follow the link to the Avanti claim form.
                        </p>
                        <Calculator preselectedOperatorCode="avanti" />

                        <h2>Checking eligibility</h2>
                        <p>
                                Avanti participates in the standard Delay Repay scheme. If your train arrives late at your destination or you are advised not to travel due to disruption, you can usually claim. The delay is measured at the final destination, not an intermediate stop, so include the full itinerary in your claim. If part of the journey involves another operator, explain which legs Avanti operated and how the delay occurred.
                        </p>

                        <h2>Using the calculator</h2>
                        <p>
                                Select Avanti in the <Link href="/">calculator</Link>, enter your ticket price, choose the ticket type, and pick the delay band that matches your arrival. The calculator applies Avanti’s published percentages and converts season tickets to a per-journey value. Use the result as guidance before opening the Avanti claim form from the same screen.
                        </p>

                        <h2>Evidence to submit</h2>
                        <p>
                                Avanti asks for proof of travel (ticket, smartcard, or booking confirmation) and proof of delay. A photo of the station board, a screenshot from the Avanti app, or an email alert can demonstrate the actual arrival time. If staff advised you to take an alternative route, note the time, station, and name if possible.
                        </p>
                        <p>
                                Keep evidence legible. If the ticket is on your phone, take a screenshot in case the app updates. For split tickets, include all relevant references so the full fare is clear.
                        </p>

                        <h2>Season tickets on Avanti</h2>
                        <p>
                                Weekly, monthly, annual, and flexi season tickets are eligible when a qualifying delay occurs on an Avanti-operated leg. The calculator divides the ticket price by the standard factor (10, 40, 464, or 16) and applies the band percentage. On the claim form, state the validity dates and whether the ticket is loaded to a smartcard or mobile account.
                        </p>
                        <p>
                                Keep a log of journeys if you travel frequently, as Avanti may ask for confirmation of the specific date and service affected when multiple claims are submitted during the same period.
                        </p>

                        <h2>Advance and long-distance journeys</h2>
                        <p>
                                Many Avanti journeys are Advance fares tied to specific trains. If your booked train is cancelled or delayed, you can claim based on the actual arrival time of the service you used. If you boarded another operator with permission, explain this in the claim and include the new arrival time. Seat reservations can help show which train you intended to take.
                        </p>

                        <h2>Missed connections</h2>
                        <p>
                                If an Avanti delay causes you to miss a connection, the delay is usually measured at the final destination on your itinerary. Provide details of the planned connection, the train you missed, and the service you eventually took. If the connection involved a different operator, indicate whether Avanti staff authorised the change. For guidance on complex journeys, see the <Link href="/delay-repay-missed-connections">missed connections</Link> page.
                        </p>

                        <h2>Cancelled trains and not travelling</h2>
                        <p>
                                If your Avanti service is cancelled and you choose not to travel, you can normally request a refund from the retailer. If you travel on a later service, Delay Repay may apply based on the arrival delay. Use the calculator to estimate the band and include any advice received from Avanti about alternative routes. More detail is in the <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link>.
                        </p>

                        <h2>Time limits</h2>
                        <p>
                                Claims generally need to be submitted within the operator’s stated window, often around 28 days. Submit as soon as possible with clear evidence. If you are close to the deadline, prioritise the essentials: ticket proof, journey details, and actual arrival time. For tips, read the <Link href="/delay-repay-claim-time-limits">claim time limits guide</Link>.
                        </p>

                        <h2>How to submit</h2>
                        <p>
                                After estimating in the calculator, click through to the Avanti claim page. Provide your contact details, journey information, ticket references, bank details or voucher preference, and a concise description of what happened. Upload supporting images and keep the confirmation email as proof of submission.
                        </p>

                        <h2>What to expect after submitting</h2>
                        <p>
                                Avanti aims to review claims promptly, often within a couple of weeks. Payments are usually made by bank transfer, card refund, or voucher depending on your choice. If the outcome differs from the calculator estimate, check the reasoning: it might relate to evidence, the measured delay, or ticket eligibility. You can reply with further detail if needed.
                        </p>

                        <h2>Common pitfalls to avoid</h2>
                        <ul>
                                <li>Submitting without proof of the actual arrival time. A timestamped photo of the platform board or a journey history screenshot strengthens the case.</li>
                                <li>Leaving out railcard details on discounted fares. Note the railcard type so the fare paid is clear.</li>
                                <li>Skipping connection information when a delay started earlier in the journey. Describe the full itinerary to show how the delay accumulated.</li>
                                <li>Waiting until the deadline. Collect evidence on the day and submit soon after to avoid missing the claim window.</li>
                        </ul>

                        <h2>Related resources</h2>
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
