import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
        title: "Delay Repay for season tickets | UK guidance",
        description: "Detailed guidance on Delay Repay for weekly, monthly, annual, and flexi season tickets in the UK, including worked examples and evidence tips.",
        alternates: { canonical: "/delay-repay-season-tickets" },
};

export default function SeasonTicketsPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>Delay Repay for season tickets</h1>
                        <p>
                                Season tickets are eligible for Delay Repay across most UK operators, but the compensation is calculated differently from single or return fares. This guide explains how per-journey values are derived, what evidence to provide, and how to use the <Link href="/">Delay Repay calculator</Link> to get an indicative payout before submitting a claim.
                        </p>

                        <h2>How operators calculate compensation</h2>
                        <p>
                                For season products, operators first convert the ticket price into a value per journey. They then apply the relevant Delay Repay percentage for the delay band. The calculator mirrors this approach using standard conversion factors: weekly tickets are divided by 10, monthly by 40, annual by 464, and flexi by 16. This ensures the estimate is realistic and comparable with operator calculations.
                        </p>
                        <p>
                                The per-journey value reflects average commuting patterns rather than an exact number of trips. It prevents over-claiming for long-term passes while still compensating regular passengers fairly when delays occur.
                        </p>

                        <h2>Weekly season tickets</h2>
                        <p>
                                Weekly tickets are typically divided by 10 to derive a notional single-journey value. If your train is delayed by 30–59 minutes, the Delay Repay percentage (often 50%) is applied to that derived value. When submitting a claim, note the start and end stations, the validity dates, and include a clear scan or photo of the ticket or smartcard confirmation.
                        </p>
                        <p>
                                If you travel less frequently than five return journeys in a week due to remote work, the operator will still use the standard conversion. Provide accurate travel dates in your claim so the context is clear.
                        </p>

                        <h2>Monthly season tickets</h2>
                        <p>
                                Monthly products use a divisor of 40 to reflect typical weekday commuting patterns. The calculator applies this automatically. If you experience multiple delays within the month, you can submit separate claims for each qualifying journey, provided each delay meets the operator’s threshold and sits within the time limit for submission.
                        </p>
                        <p>
                                Keep a record of the journeys you actually made. A simple log with dates, planned departure times, and actual arrival times can support your claims and may help if the operator queries frequency of travel.
                        </p>

                        <h2>Annual season tickets</h2>
                        <p>
                                Annual tickets are usually divided by 464 to reach a per-journey value. Because the ticket covers an entire year, maintaining clear records of individual delays is important. Many operators allow multiple claims during the year; some may also offer additional compensation for prolonged disruption. Check your operator’s policy via the calculator’s claim link to see whether they provide automatic renewals or discounts after a set number of successful Delay Repay claims.
                        </p>
                        <p>
                                If you renew early or switch routes, note the relevant dates in your submission so the claim handler can match the correct period to your evidence.
                        </p>

                        <h2>Flexi season tickets</h2>
                        <p>
                                Flexi products, often valid for eight passes within 28 days, are converted using a divisor of 16 to approximate single journeys. When you use a pass, keep a record of which day was activated and the service taken. Some operators treat unused passes differently if disruption is severe; the calculator focuses on the standard approach, so always read any operator-specific notes on the claim form.
                        </p>

                        <h2>Providing evidence</h2>
                        <p>
                                Evidence for season tickets usually includes the original purchase confirmation or a photo of the smartcard, along with proof of the delayed journey. Station gate logs are rarely provided to passengers, so personal records matter. Screenshots from National Rail Enquiries or operator apps that show disruption can support your claim. If your pass is tied to a specific route, make sure the claimed journey matches that route to avoid rejection.
                        </p>

                        <h2>Worked example</h2>
                        <p>
                                Imagine you hold a monthly season ticket costing £320. A morning train arrives 42 minutes late. Using the calculator, £320 is divided by 40 to get an £8 per-journey value. For a 30–59 minute delay, many operators pay 50%, resulting in an estimated £4. Enter the operator, ticket type, and delay band in the calculator to confirm the estimate and follow the link to the claim form.
                        </p>
                        <p>
                                For an annual ticket costing £3,200 with a 90-minute delay, the calculation is £3,200 divided by 464 (about £6.90) with 100% applied in many policies, giving roughly £6.90. The exact amount depends on the operator’s published bands.
                        </p>

                        <h2>Multiple delays and recurring disruption</h2>
                        <p>
                                You can normally submit claims for separate days when delays occur, provided each meets the threshold and is within the time limit. If your route experiences recurring disruption, consider keeping a simple spreadsheet with dates, train times, and references to any alerts received. Some operators may offer season ticket discounts or goodwill gestures during extended issues, but Delay Repay claims remain individual per incident unless stated otherwise.
                        </p>

                        <h2>Time limits and submission tips</h2>
                        <p>
                                Many operators require claims within around 28 days, though some allow longer. Submitting quickly reduces the risk of misplacing evidence. Use the <Link href="/delay-repay-claim-time-limits">time limits guide</Link> for a summary of typical windows. When completing the claim form, clearly state that you hold a season ticket, include the validity dates, and confirm whether the ticket is on a smartcard or mobile app.
                        </p>

                        <h2>Next steps</h2>
                        <p>
                                Start with an estimate on the <Link href="/">Delay Repay calculator</Link>, selecting the relevant season ticket type. Review operator-specific guidance via the links for <Link href="/delay-repay-avanti">Avanti</Link>, <Link href="/delay-repay-gwr">GWR</Link>, <Link href="/delay-repay-lner">LNER</Link>, <Link href="/delay-repay-northern">Northern</Link>, and <Link href="/delay-repay-southern">Southern</Link>. If you encounter a policy not reflected in the calculator, get in touch through the <Link href="/contact">contact page</Link> so it can be updated.
                        </p>
                </article>
        );
}
