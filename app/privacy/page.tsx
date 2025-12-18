import type { Metadata } from 'next';
import {contactEmail, domainNameWithoutHTTPS} from "@/app/Constants";

export const metadata: Metadata = {
	title: 'Privacy Policy | Delay Repay Estimator',
	description: `How ${domainNameWithoutHTTPS} collects and uses information.`,
	alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
	return (
		<article className="prose max-w-none">
			<h1>Privacy Policy</h1>
			<p><em>Last updated: 22 Aug 2025</em></p>

			<p>
				This Privacy Policy explains how {domainNameWithoutHTTPS} (“we”, “our”, “us”) collects,
				uses, and protects information when you use our website (the “Service”).
			</p>

			<h2>1. Information We Collect</h2>
			<p>We do not collect personal identifiers such as names, email addresses, or payment details.</p>
			<p>The only information you provide directly in the calculator is:</p>
			<ul>
				<li>Ticket price you enter</li>
				<li>Ticket type (e.g., single, return, season)</li>
				<li>Delay length band (e.g., 15–29 minutes)</li>
				<li>Operator selected</li>
			</ul>
			<p>When you click through to make a claim, we record a non-personal click event:</p>
			<ul>
				<li>Selected operator code</li>
				<li>Destination claim URL</li>
			</ul>
			<p>
				We query Supabase for operator data to power the calculator; this does not identify you.
			</p>

			<h2>2. How We Use Information</h2>
			<ul>
				<li>Provide delay compensation estimates</li>
				<li>Improve the calculator and operator coverage</li>
				<li>Measure outbound clicks to operator claim pages</li>
			</ul>
			<p>We do not sell or rent your information.</p>

			<h2>3. Sharing</h2>
			<p>
				We may share limited data with service providers strictly to operate and secure the Service
				(e.g., hosting, analytics). We may disclose information if required by law.
			</p>

			<h2>4. Cookies & Analytics</h2>
			<p>
				We may use essential cookies and privacy-respecting analytics to understand usage and improve performance.
				See our <a href="/cookies">Cookie Policy</a> for details.
			</p>

			<h2>5. Data Security</h2>
			<p>
				We use reasonable technical and organizational measures to protect data. No method is 100% secure,
				but the Service purposefully avoids collecting personal identifiers, reducing risk.
			</p>

			<h2>6. Data Retention</h2>
			<p>
				Non-personal usage and click data may be retained for as long as needed to operate the Service and
				for legitimate business purposes (e.g., troubleshooting, analytics).
			</p>

			<h2>7. Your Rights</h2>
			<p>
				If you have questions about how we handle data, contact us at
				{' '}<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
			</p>

			<h2>8. Changes</h2>
			<p>
				We may update this Policy. Changes will be posted here with a new “Last updated” date.
			</p>
		</article>
	);
}
