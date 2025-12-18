import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
        title: "Delay Repay for missed connections | UK guidance",
        description: "How Delay Repay treats missed rail connections in the UK, including through tickets, split tickets, evidence, and claim steps.",
        alternates: { canonical: "/delay-repay-missed-connections" },
};

export default function MissedConnectionsPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>Delay Repay for missed connections</h1>
                        <p>
                                If a late-running train causes you to miss a connection, you may be entitled to Delay Repay based on the delay at your final destination. This guide explains how operators assess these situations, what to record, and how to use the <Link href="/">Delay Repay calculator</Link> to see the likely compensation before you submit a claim.
                        </p>

                        <h2>Through tickets versus separate tickets</h2>
                        <p>
                                When all legs are on a single ticket or itinerary, most operators measure the delay at the endpoint of the journey. If you use split tickets, you can usually still claim based on the combined itinerary, but you should provide each ticket reference and explain the planned connections. Include both the scheduled and actual times for every leg so the case handler can follow the timeline.
                        </p>

                        <h2>How delay is measured</h2>
                        <p>
                                Operators calculate the delay by comparing your actual arrival time at the final destination with the timetable. If you were put on a later service, the delay includes the extra waiting time. If you were re-routed via a different path, note the revised arrival time. The percentage applied comes from the operator’s Delay Repay bands, which you can preview using the calculator by selecting the relevant operator and delay length.
                        </p>

                        <h2>When advice to re-route matters</h2>
                        <p>
                                If staff advised you to take an alternative route, include who advised you, where, and when. This supports why you boarded a different train or operator. If the alternative arrived earlier than waiting for the original connection, the delay may be shorter, but you should still present the full context. Some operators offer goodwill if you incurred extra costs; provide receipts where relevant.
                        </p>

                        <h2>Evidence to gather</h2>
                        <ul>
                                <li>Tickets or booking confirmations for all legs of the journey</li>
                                <li>Planned departure and arrival times, including the connection time</li>
                                <li>Actual times from departure boards, apps, or journey history</li>
                                <li>Notes of any staff advice or acceptance onto other operators</li>
                        </ul>
                        <p>
                                Clear, chronological evidence helps the operator see how the initial delay led to the missed connection and final arrival time.
                        </p>

                        <h2>Season tickets and regular commuters</h2>
                        <p>
                                Season ticket holders can claim for individual incidents even when travelling frequently. The calculator converts the pass to a per-journey value before applying the relevant percentage. Keep a simple log of dates, trains, and delays so you can support each claim without relying on memory. If the route suffers repeated missed connections, check whether the operator offers additional compensation beyond standard Delay Repay.
                        </p>

                        <h2>Impact of minimum connection times</h2>
                        <p>
                                Some stations have published minimum connection times. If your planned itinerary respected these, mention it in the claim. If the connection was tighter, explain why it was reasonable (for example, a short step-free walk between platforms). Providing context can prevent assumptions that the plan was unrealistic.
                        </p>

                        <h2>Submitting your claim</h2>
                        <p>
                                Use the calculator to select the operator, ticket type, and delay band that matches your arrival at the final destination. Click through to the operator’s form and present the journey as a single chain: origin, missed connection point, revised route, and final arrival time. Upload evidence for each leg and keep a copy of the submission confirmation.
                        </p>

                        <h2>If the outcome seems low</h2>
                        <p>
                                If the operator calculates a shorter delay than you expected, check whether they measured the arrival at a different point or excluded part of the itinerary. You can respond with clarifications and evidence, keeping the tone factual. Reference the actual arrival time at the final destination and any advice that led you to take a particular route.
                        </p>

                        <h2>Worked example</h2>
                        <p>
                                You planned to travel from Leeds to Brighton with a change at London St Pancras. The Leeds service arrived 35 minutes late, causing you to miss the onward train and arrive in Brighton 68 minutes after the timetable. In the calculator, select the operator responsible for the initial delay, choose the appropriate ticket type, and pick the 60–119 minute band. The estimate will reflect the full delay to Brighton, not just the first leg. Include both planned and actual times in your claim so the operator can verify the calculation.
                        </p>

                        <h2>Additional pointers for complex journeys</h2>
                        <ul>
                                <li>If multiple tickets cover one journey, label each ticket with the leg it covers when uploading.</li>
                                <li>Keep evidence of any acceptance onto other operators, such as messages from staff or platform announcements.</li>
                                <li>If you chose a longer route to keep moving, explain why it was reasonable (for example, it arrived earlier than waiting for the next direct train).</li>
                                <li>When travelling with others, note the number of passengers and ensure tickets for everyone are included.</li>
                        </ul>

                        <p>
                                If you are claiming for a journey that involved airports or onward connections such as ferries, state any knock-on impacts briefly. While Delay Repay focuses on the train delay itself, this context can help explain why a particular alternative route or timing mattered to you.
                        </p>

                        <h2>Next steps</h2>
                        <p>
                                Ready to estimate your claim? Open the <Link href="/">Delay Repay calculator</Link>. For related situations, see the <Link href="/delay-repay-cancelled-trains">cancelled trains guide</Link> and the <Link href="/delay-repay-claim-time-limits">claim time limits</Link> page. Operator-specific pages for <Link href="/delay-repay-avanti">Avanti</Link>, <Link href="/delay-repay-gwr">GWR</Link>, <Link href="/delay-repay-lner">LNER</Link>, <Link href="/delay-repay-northern">Northern</Link>, and <Link href="/delay-repay-southern">Southern</Link> provide extra detail on how each company applies Delay Repay to complex journeys.
                        </p>
                </article>
        );
}
