import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
        title: "Delay Repay claim time limits | UK deadlines",
        description: "Typical Delay Repay claim windows for UK train operators, what to do near the deadline, and how to keep evidence ready.",
        alternates: { canonical: "/delay-repay-claim-time-limits" },
};

export default function ClaimTimeLimitsPage() {
        return (
                <article className="prose max-w-none">
                        <h1>Delay Repay claim time limits</h1>
                        <p>
                                Delay Repay claims usually need to be submitted within a set number of days from the date of travel. This guide summarises common windows, how to prepare evidence quickly, and what to do if you are close to the deadline. Use it alongside the <Link href="/">Delay Repay calculator</Link> so you can submit a complete claim on time.
                        </p>

                        <h2>Typical claim windows</h2>
                        <p>
                                Many operators ask for claims within around 28 days of the affected journey. Some allow longer, especially for season tickets or complex cases, while a few set shorter windows during major disruption. Always check the operator’s claim form, which is linked directly from the calculator when you select the operator.
                        </p>
                        <p>
                                If you miss the stated window, you can still contact the operator with evidence, but approval is less likely. Providing a clear reason for the delay in submitting (for example, waiting for a retailer to confirm ticket details) may help, but it is better to submit promptly whenever possible.
                        </p>

                        <h2>Preparing evidence quickly</h2>
                        <ul>
                                <li>Photograph paper tickets immediately after travel</li>
                                <li>Save digital tickets or barcodes in a secure folder</li>
                                <li>Note actual arrival times and keep screenshots from journey apps</li>
                                <li>Record any staff advice, especially if told not to travel</li>
                        </ul>
                        <p>
                                Having evidence ready means you can submit within minutes rather than days, reducing the risk of missing the window.
                        </p>

                        <h2>Season tickets and multiple claims</h2>
                        <p>
                                Season ticket holders can submit multiple claims over the validity period. The time limit still applies to each individual delay. Keep a simple log with dates, planned services, and actual arrival times. The calculator converts season tickets to a per-journey value so you can estimate each claim quickly.
                        </p>

                        <h2>Retailer versus operator deadlines</h2>
                        <p>
                                If you bought your ticket from a retailer, the refund policy may differ from the operator’s Delay Repay policy. Delay Repay claims go to the operator responsible for the delay. If you seek a refund instead, check the retailer’s terms as well. When in doubt, submit the Delay Repay claim to the operator promptly to preserve your position.
                        </p>

                        <h2>Submitting near the deadline</h2>
                        <p>
                                If time is tight, prioritise a concise description and clear evidence. Provide the key facts: date, origin, destination, train times, actual arrival, and ticket proof. You can usually add more detail if the operator requests it later. Keep screenshots of your submission and any reference numbers as proof that you applied within the window.
                        </p>

                        <h2>Appeals and late evidence</h2>
                        <p>
                                If a claim is rejected due to timing but you believe you applied within the stated window, reply with your submission confirmation and timestamps. If you applied late for a good reason, state it briefly and supply whatever evidence you have. Outcomes vary by operator, but a polite, factual explanation gives the best chance of reconsideration.
                        </p>

                        <h2>Examples of operator expectations</h2>
                        <p>
                                While policies change, many operators including Avanti, GWR, LNER, Northern, and Southern set windows of around 28 days. Some commuter networks may allow slightly longer during major disruption, while others ask for faster submissions when disruption is widespread. Always check the live wording on the claim form linked from the <Link href="/">calculator</Link> so you follow the most current requirement.
                        </p>
                        <p>
                                If you travel infrequently, setting a reminder on the day of travel can help avoid missing the window. Frequent travellers may prefer a weekly routine: log delays as they occur and submit any qualifying claims at the end of the week so nothing slips through.
                        </p>

                        <h2>Organising your records</h2>
                        <ul>
                                <li>Create a dedicated folder on your phone or computer for ticket screenshots and delay evidence.</li>
                                <li>Use a simple spreadsheet to record date, service, planned arrival, actual arrival, and whether a claim has been submitted.</li>
                                <li>For season tickets, note the validity period and any days you did not travel due to disruption so you can explain patterns if asked.</li>
                        </ul>
                        <p>
                                Good organisation reduces the time needed to submit and makes it easier to respond quickly if the operator asks follow-up questions about timing or eligibility.
                        </p>

                        <h2>Checklist before you click submit</h2>
                        <ul>
                                <li>Ticket proof attached and legible</li>
                                <li>Actual arrival time recorded, ideally with a screenshot or photo</li>
                                <li>Journey details match the operator selected in the calculator</li>
                                <li>Claim submitted within the stated window and confirmation saved</li>
                                <li>Related guidance read if your situation involves <Link href="/delay-repay-season-tickets">season tickets</Link> or <Link href="/delay-repay-cancelled-trains">cancellations</Link></li>
                        </ul>

                        <p>
                                If you realise a detail was missed after submitting—such as an attachment failing to upload—reply to the operator with the missing information and your reference number as soon as possible. Prompt follow-up can keep the claim within the window even if the first attempt lacked an attachment.
                        </p>

                        <p>
                                If you are travelling during widespread disruption, check operator updates for any temporary extensions to claim windows; these are sometimes offered during major events but should not be relied upon without written confirmation.
                        </p>

                        <h2>Next steps</h2>
                        <p>
                                Estimate your compensation using the <Link href="/">Delay Repay calculator</Link>, then follow the operator link to submit before the deadline. For related guidance, read about <Link href="/delay-repay-season-tickets">season tickets</Link>, <Link href="/delay-repay-cancelled-trains">cancelled trains</Link>, and <Link href="/delay-repay-missed-connections">missed connections</Link>. Operator-specific pages for <Link href="/delay-repay-avanti">Avanti</Link>, <Link href="/delay-repay-gwr">GWR</Link>, <Link href="/delay-repay-lner">LNER</Link>, <Link href="/delay-repay-northern">Northern</Link>, and <Link href="/delay-repay-southern">Southern</Link> offer further detail.
                        </p>
                </article>
        );
}
