import type { Metadata } from "next";
import Link from "next/link";
import {routes} from "@/lib/nav";

export const metadata: Metadata = {
	title: "Delay Repay Bands & Amounts – 15, 30 & 60 Minute Compensation",
	description:
		"A simple guide to Delay Repay bands and typical refund amounts for UK train delays, plus examples and links to claim.",
	alternates: { canonical: "/delay-repay-bands" },
};

export default function DelayRepayBandsPage() {
	return (
		<article className="prose max-w-none">
			<h1>Delay Repay bands and amounts</h1>
			<p>
				Delay Repay compensation is based on how late you arrive at your destination.
				Bands and thresholds vary by operator and ticket type.
			</p>

			<h2>Typical Delay Repay bands</h2>
			<table>
				<thead>
					<tr>
						<th>Delay to destination</th>
						<th>Typical refund</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>15+ minutes</td>
						<td>Often partial refund</td>
						<td>Some operators start at 15 minutes</td>
					</tr>
					<tr>
						<td>30+ minutes</td>
						<td>Often higher partial refund</td>
						<td>Common threshold</td>
					</tr>
					<tr>
						<td>60+ minutes</td>
						<td>Often 100% of a single fare</td>
						<td>Varies by scheme</td>
					</tr>
					<tr>
						<td>120+ minutes</td>
						<td>May be 100%+ or additional compensation</td>
						<td>Only on some schemes</td>
					</tr>
				</tbody>
			</table>
			<p>
				Exact thresholds and percentages depend on the operator’s Delay Repay scheme and your ticket. Use the calculator and
				check your operator’s page before claiming.
			</p>

			<h2>How Delay Repay amounts are worked out</h2>
			<ul>
				<li>Based on arrival delay at destination.</li>
				<li>Calculated against the affected single fare.</li>
				<li>For returns, often treated as two singles.</li>
				<li>Season tickets may use per-journey value.</li>
				<li>Keep tickets, receipts, and screenshots as evidence.</li>
			</ul>

			<h2>Example: Avanti Delay Repay amounts</h2>
			<p>
				Avanti journeys generally follow standard bands, but the exact percentages can differ by scheme. For the latest
				guidance on Avanti Delay Repay amounts, use the <Link href={routes.avanti}>Avanti Delay Repay</Link> page and the{" "}
				<Link href={routes.home}>Delay Repay calculator</Link>.
			</p>
			<ul>
				<li>Return tickets are often treated as two singles.</li>
				<li>Your arrival delay at destination sets the band.</li>
				<li>Keep ticket proof and journey screenshots.</li>
			</ul>

			<h2>How long you have to claim</h2>
			<p>
				Claim deadlines vary by operator, so acting quickly helps. See the{" "}
				<Link href={routes.delayRepayClaimTimeLimits}>claim time limits</Link> guide before you submit.
			</p>

			<h2>Next steps</h2>
			<ul>
				<li>
					<Link href={routes.home}>Delay Repay calculator</Link>
				</li>
				<li>
					<Link href={routes.operators}>train operators</Link>
				</li>
				<li>
					<Link href={routes.delayRepayExplained}>how Delay Repay works</Link>
				</li>
			</ul>
		</article>
	);
}
