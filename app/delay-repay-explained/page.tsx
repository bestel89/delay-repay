import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "How is Delay Repay calculated? | UK train delay compensation",
	description:
		"See how Delay Repay is calculated using arrival delays, ticket type, and fare basis for UK train delay compensation claims, thresholds, and estimates.",
	alternates: {canonical: "https://delayrepaycalc.co.uk/delay-repay-explained"},
};

export default function DelayRepayExplainedPage() {
	const faqs = [
		{
			question: "Is compensation based on ticket price or the journey?",
			answer:
				"Most operators apply the percentage to the fare you paid for the affected leg. For returns they often treat each direction as half the return fare unless the rules say otherwise.",
		},
		{
			question: "Do I still get Delay Repay if I arrived eventually?",
			answer:
				"Yes. Delay Repay is based on the delay to your arrival time compared with the timetable, even if you were carried to your destination on a later service.",
		},
		{
			question: "If I miss a connection, what delay counts?",
			answer:
				"Operators usually measure the delay at your final destination on a through itinerary. Include planned and actual times for every leg so the final delay is clear.",
		},
		{
			question: "Do Advance tickets qualify?",
			answer:
				"Generally yes if the train you booked was delayed or cancelled. If you were told to board another service, explain that in the claim so it is treated as valid travel.",
		},
		{
			question: "What if I abandon my journey?",
			answer:
				"If you were advised not to travel or a cancellation prevented completion, you can normally claim a refund or compensation. Say where you stopped and why.",
		},
		{
			question: "Do I claim from the operator I booked with or the operator that delayed me?",
			answer:
				"Claim from the operator that caused the delay to the journey, not the retailer. If multiple operators were involved, use the one responsible for the disruption.",
		},
		{
			question: "Can I claim if I used Rail Replacement buses?",
			answer:
				"Yes, replacement buses count as part of the journey. Use the scheduled times provided and record the actual arrival so the delay can be measured.",
		},
		{
			question: "Cash vs vouchers: what’s the difference?",
			answer:
				"Cash or bank transfer gives you money back; vouchers or e-vouchers may lock you to future travel and sometimes exceed 100% for longer delays depending on the operator.",
		},
		{
			question: "How long do I have to claim (time limits)?",
			answer:
				"Many operators require claims within 28 days, some allow longer. Submit as soon as possible and keep proof of submission.",
		},
		{
			question: "What evidence do I need?",
			answer:
				"Keep your ticket or booking confirmation and note actual arrival time. Screenshots of live boards, emails, or staff advice help if timings are disputed.",
		},
	];

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};

	return (
		<main>
			<article className="prose max-w-none">
				<header className="prose max-w-none">
					<p className="badge badge-primary">Updated for {new Date().getFullYear()}</p>
					<h1 className="mb-0">How is Delay Repay calculated?</h1>
					<p className="text-lg text-neutral-700">
						Delay Repay is the UK rail scheme that pays compensation when trains arrive late or
						are cancelled. This page focuses on how Delay Repay is calculated and points you to
						the right <Link href="/operators">train operators</Link> for scheme details.
					</p>
					<p className="text-base text-neutral-700">
						Here’s the calculation logic most people need before submitting a claim.
					</p>
					<ul className="list-disc pl-5 text-neutral-700">
						<li>Delay is measured at your destination arrival time.</li>
						<li>Compare scheduled vs actual arrival time.</li>
						<li>Compensation is usually based on the affected single fare.</li>
						<li>Returns are often treated as two singles (half fare).</li>
						<li>Ticket type and operator scheme can change thresholds.</li>
						<li>Season tickets may use a per-journey value.</li>
					</ul>
					<p className="text-base text-neutral-700">
						Use the calculator: <Link href="/">Delay Repay calculator</Link>
					</p>
					<h2 className="card-title">Quick summary</h2>
					<ul className="not-prose space-y-2">
						<li>Most operators pay from 15 minutes late; longer delays pay higher percentages.</li>
						<li>Measure the delay at your final destination if you missed a connection.</li>
						<li>Keep tickets, booking proof, and a note of actual arrival time.</li>
						<li>Use the calculator for instant estimates and links to official claim forms.</li>
					</ul>
				</header>
				<div className="divider"></div>
				<section id="worked-example-simple">
					<div className="space-y-3">
						<h2>Worked example (simple)</h2>
						<p>
							A £30 single delayed 35 minutes hits the 30–59 band, so compensation is based on the £30 fare.
							For a £60 return, the delayed leg is often treated as a £30 single before the band applies.
							Exact amounts depend on your operator’s scheme and ticket.
						</p>
					</div>
				</section>
				<div className="divider"></div>
				<section id="thresholds" className="mt-10">
					<div>
						<h2>Typical Delay Repay thresholds</h2>
						<div className="overflow-x-auto">
							<table className="table table-zebra">
								<thead>
								<tr>
									<th>Delay band</th>
									<th>Usual payout</th>
									<th>Notes</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>15–29 minutes</td>
									<td>Often 25% of single fare</td>
									<td>Some operators start at 30 minutes.</td>
								</tr>
								<tr>
									<td>30–59 minutes</td>
									<td>Often 50% of single fare</td>
									<td>Advance tickets usually included.</td>
								</tr>
								<tr>
									<td>60–119 minutes</td>
									<td>Often 100% of single fare</td>
									<td>Returns typically split into each direction.</td>
								</tr>
								<tr>
									<td>120+ minutes</td>
									<td>Often 100%+, sometimes vouchers at higher rates</td>
									<td>Check operator pages for enhanced offers.</td>
								</tr>
								</tbody>
							</table>
						</div>
						<p className="text-sm text-neutral-600">
							Exact thresholds and payout methods vary by operator; see <Link href="/delay-repay-bands">Delay
							Repay bands and amounts</Link>.
						</p>
					</div>
				</section>
				<div className="divider"></div>
				<section id="missed-connections" className="mt-10">
					<div className="space-y-3">
						<h2>Missed connections and re-routes</h2>
						<p>
							If a late first leg makes you miss a train, the delay is usually calculated at your final
							destination. Include planned and actual times for every leg, any acceptance onto other
							operators, and who advised the change.
						</p>
						<div className="alert alert-success">
							<div>
								<span className="font-semibold">Practical tip:</span> Take a quick photo of the departure board
								showing the late arrival
								and write down the time you actually boarded your replacement service.
							</div>
						</div>
					</div>
				</section>
				<div className="divider"></div>
				<section id="season-tickets" className="mt-10">
					<div className="space-y-3">
						<h2>Season tickets and Flexi products</h2>
						<p>
							Season, flexi, and carnet tickets are converted to a per-journey value before applying the delay band.
							Operators use industry formulas (weekly, monthly, annual) and may round differently.
						</p>
						<p>
							For Flexi Season tickets, keep the specific tap-in or activation records; these prove which days were
							used and avoid disputes over which journey the delay applies to.
						</p>
					</div>
				</section>
				<div className="divider"></div>
				<section id="what-you-need" className="mt-10">
					<div className="space-y-3">
						<h2>What you need to submit a claim</h2>
						<ul className="list-disc pl-5">
							<li>Ticket or booking confirmation (paper, barcode, or e-ticket reference).</li>
							<li>Actual arrival time compared with the timetable or replacement timetable.</li>
							<li>Evidence such as departure board photos, journey planner screenshots, or email/text alerts.</li>
							<li>Bank details if you want cash; select voucher options if preferred.</li>
							<li>Short explanation of what happened, including staff advice if you changed trains.</li>
						</ul>
					</div>
				</section>
				<div className="divider"></div>
				<section id="when-you-cant-claim" className="mt-10">
					<div className="space-y-3">
						<h2>When you can’t claim</h2>
						<p className="text-neutral-700">Common exclusions where compensation may be refused:</p>
						<div className="grid gap-3 md:grid-cols-2">
							<div className="alert alert-warning">
								<div>
									Industrial action or strikes that were pre-announced and offered alternative travel.
								</div>
							</div>
							<div className="alert alert-warning">
								<div>
									Extreme weather or events outside rail control where the operator’s terms limit payouts.
								</div>
							</div>
							<div className="alert alert-warning">
								<div>
									Travelling without a valid ticket for the disrupted service or outside the allowed route.
								</div>
							</div>
							<div className="alert alert-warning">
								<div>
									Claims submitted after the operator’s deadline (often 28 days).
								</div>
							</div>
						</div>
						<p className="text-sm text-neutral-600">
							Always check the operator’s terms and <Link href="/delay-repay-claim-time-limits">claim time
							limits</Link>
							before submitting.
						</p>
					</div>
				</section>
				<div className="divider"></div>
				<section id="faqs" className="mt-10">
					<div className="space-y-4">
						<h2>Most common questions</h2>
						<div className="space-y-3">
							{faqs.map((faq) => (
								<div key={faq.question} className="collapse collapse-arrow border border-base-200 bg-base-200">
									<input type="checkbox"/>
									<div className="collapse-title text-lg font-semibold">{faq.question}</div>
									<div className="collapse-content text-neutral-700">
										<p>{faq.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
				></script>
			</article>
		</main>
	);
}
