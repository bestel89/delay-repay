// components/Faq.tsx (SERVER COMPONENT)
import Script from "next/script";

type QA = { q: string; a: string };

const faqs: QA[] = [
	{
		q: "When can I claim Delay Repay?",
		a: "Most UK operators pay from 15 minutes of delay, with higher bands at 30–59, 60–119 and 120+ minutes. Some have bespoke rules. Always check your operator’s policy on the claim page."
	},
	{
		q: "What evidence do I need?",
		a: "Keep your ticket or receipt and proof of the actual arrival time (photo of the departure board, email from the operator, or app timeline). Many forms ask for uploads."
	},
	{
		q: "How are season tickets handled?",
		a: "We convert the season ticket price to a per-journey equivalent using standard industry conventions, then apply the operator’s percentage for the delay band."
	},
	{
		q: "What if I missed a connection?",
		a: "If journeys were on one itinerary and the delay caused a missed connection, most operators assess the delay to your final destination. Provide the full itinerary in your claim."
	},
	{
		q: "Can I claim for split tickets or railcards?",
		a: "Usually yes, but payouts are based on the affected fare(s). Include details of all tickets and any railcard used so the operator can verify the price paid."
	},
	{
		q: "How long do I have to claim?",
		a: "Many operators set a window (often around 28 days), though some allow longer. Submit as soon as possible for the best outcome."
	},
	{
		q: "Is a cancellation treated the same as a delay?",
		a: "It depends. You may be entitled to a refund or a Delay Repay payment depending on when you were told and whether you travelled. The claim form explains the operator’s approach."
	},
	{
		q: "How long does payment take and how is it paid?",
		a: "Most operators respond within a couple of weeks and pay by bank transfer, card refund, vouchers, or points depending on policy."
	}
];

export default function Faq() {
	// JSON-LD derived from the same data so it stays in sync with visible content
	const faqLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((item) => ({
			"@type": "Question",
			"name": item.q,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": item.a
			}
		}))
	};

	return (
		<section aria-labelledby="faq" className="mt-12">
			<h2 id="faq">Delay Repay — Frequently Asked Questions</h2>
			<div className="mt-4 space-y-3">
				{faqs.map(({ q, a }, idx) => (
					<details key={idx} className="border rounded p-3">
						<summary className="font-medium cursor-pointer">{q}</summary>
						<p className="mt-2">{a}</p>
					</details>
				))}
			</div>

			{/* Structured data for rich results */}
			<Script
				id="faq-jsonld"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
			/>
		</section>
	);
}
