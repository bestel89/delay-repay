import type {Metadata} from "next";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Link from "next/link";

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
	title: 'Delay Repay Estimator',
	description: 'Estimate UK train delay compensation and jump to the claim page.',
	alternates: {canonical: '/'},
};

export default function Page() {
	return (
		<main>
			<article className={"prose"}>
				<p>
					Use our Delay Repay Calculator to understand how much you could claim back from the relevant rail company for
					a train delay.
				</p>
				<p>Enter ticket price, type, operator, and delay. We’ll estimate compensation and take you to the correct claim
					form</p>

				{/* Handy cross-link */}
				<p className="mt-2">
					Not sure about your operator’s rules?{" "}
					<Link href="/operators" className="no-underline">
						See which operators use standard vs different rules
					</Link>
					.
				</p>

				<Calculator/>
				<section aria-labelledby="about-delay-repay" className="mt-10">
					<h2 id="about-delay-repay">How Delay Repay works (UK, 2025)</h2>
					<p>
						Delay Repay is a compensation scheme run by most UK train operating companies. If your train is delayed
						beyond a published threshold (often from <strong>15 minutes</strong>), you can claim a percentage of your
						ticket price back. Thresholds and payout bands vary by operator and by ticket type, which is why this
						calculator asks for operator, ticket details, and the delay length.
					</p>
					<p>
						This tool gives you an <em>indicative</em> payout based on the information you provide. We keep operator rules
						up to date and link you straight to the official claim pages so you can submit your evidence quickly.
						Remember: only the train company can approve the final amount after reviewing your claim.
					</p>

					<aside
						aria-labelledby="methodology-heading"
						className="not-prose mt-6 border-l-4 border-blue-600 bg-blue-50 p-4 rounded"
						role="note"
					>
						<h3 id="methodology-heading" className="font-semibold mb-2">Methodology &amp; data</h3>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<strong>Bands &amp; overrides:</strong> We start with common Delay Repay bands (e.g., 15–29, 30–59, 60–119,
								120+) and apply <em>operator-specific overrides</em> where their policy differs.
							</li>
							<li>
								<strong>Ticket handling:</strong> Singles/returns use the face value you enter. For season tickets, we convert
								to a <em>per-journey</em> equivalent using standard industry conventions so compensation is comparable to a
								single journey.
							</li>
							<li>
								<strong>Edge cases:</strong> If an operator doesn’t participate in Delay Repay or uses a bespoke scheme, the
								calculator will direct you to the correct claim page rather than showing an estimate.
							</li>
							<li>
								<strong>Last updated:</strong> <time dateTime="2025-08-28">28 August 2025</time>
							</li>
						</ul>
						<p className="mt-2 text-sm">
							<strong>Sources:</strong> operator-published Delay Repay policies and claim pages. Where an operator’s policy
							is ambiguous, we default to the conservative interpretation and flag it in the UI.
						</p>
					</aside>

					<h3 className="mt-8">How the estimator works</h3>
					<p>
						Enter your ticket price, choose the ticket type, pick your operator, and select the delay band that matches your
						journey. The estimator calculates an indicative refund percentage for that band. If your operator has a unique
						rule (for example, different percentages for returns or special treatment of flexi season tickets), we apply that
						rule automatically.
					</p>
					<p>
						For season products (weekly, monthly, annual, flexi), we derive a per-journey value first and then apply the
						compensation percentage to that figure. This avoids over- or under-estimating compared to single-journey tickets.
					</p>

					<h3>Assumptions &amp; limitations</h3>
					<ul>
						<li>
							<strong>Evidence matters:</strong> Operators typically require proof of travel and delay (ticket/receipt,
							photos, or booking confirmation). Without evidence, claims are usually rejected.
						</li>
						<li>
							<strong>Different thresholds:</strong> Some operators pay from 15 minutes; a few use different bands or
							handle cancellations/missed connections differently. We reflect known overrides where available.
						</li>
						<li>
							<strong>Special fares:</strong> Promotional fares, railcards, split tickets, or goodwill gestures may be
							treated differently and can produce outcomes that differ from the estimate.
						</li>
						<li>
							<strong>Final decision:</strong> Your operator makes the final call. Consider this tool a guide, not a
							guarantee.
						</li>
					</ul>

					<h3>Worked example</h3>
					<p>
						You bought a <strong>single</strong> ticket for <strong>£42.50</strong>. Your train arrived
						<strong> 38 minutes</strong> late. Your operator’s policy for the <strong>30–59 minutes</strong> band is
						<strong> 50%</strong> of the ticket value.
					</p>
					<p>
						Estimated compensation: £42.50 × 50% = <strong>£21.25</strong>.
					</p>
					<p>
						If you had a <strong>monthly season</strong> instead, we first convert the monthly cost to a per-journey value,
						then apply the same percentage. The estimator does this conversion automatically; you don’t need to change the
						percentage yourself.
					</p>

					<h3>Practical tips to maximise approval odds</h3>
					<ul>
						<li>
							<strong>Record the actual arrival time:</strong> snap a photo of the platform board or keep a GPS timeline.
						</li>
						<li>
							<strong>Submit fast:</strong> many operators set a claim window (e.g., 28 days). Don’t wait.
						</li>
						<li>
							<strong>One journey, one claim:</strong> Avoid bundling unrelated trips into a single submission.
						</li>
						<li>
							<strong>Be consistent:</strong> Names, dates, and ticket references should match across all documents.
						</li>
						<li>
							<strong>Keep it simple:</strong> Use the operator’s official form (linked from the button above) and attach
							only relevant files.
						</li>
					</ul>

					<h3>What happens next?</h3>
					<p>
						When you click <em>Claim with [Operator]</em>, you’ll be taken to the official claim page. Most forms take
						5–10 minutes if you have your evidence ready. Operators typically respond by email and pay via bank transfer,
						card refund, or vouchers depending on policy.
					</p>

					<p className="text-sm text-neutral-600">
						This site is independent and unaffiliated with UK train operating companies. The estimator is provided for
						guidance only.
					</p>
				</section>

				<Faq />

			</article>
		</main>
	);
}
