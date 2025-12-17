import type { Metadata } from 'next';
import {domainNameWithoutHTTPS} from "@/app/Constants";

export const metadata: Metadata = {
	title: 'Legal Disclaimer | Delay Repay Estimator',
	description: `Important limitations and disclaimers for ${domainNameWithoutHTTPS}`,
	alternates: { canonical: '/legal' },
};

export default function LegalPage() {
	return (
		<article className="prose max-w-none">
			<h1>Legal Disclaimer</h1>
			<p><em>Last updated: 22 Aug 2025</em></p>

			<h2>Estimates Only</h2>
			<p>
				All figures shown by the calculator are estimates. Final compensation is determined solely
				by the relevant train operating company under its Delay Repay policy.
			</p>

			<h2>No Warranties</h2>
			<p>
				We make no representations or warranties, express or implied, regarding the accuracy,
				completeness, or reliability of any information on this site.
			</p>

			<h2>Accuracy and Updates</h2>
			<p>
				We aim to keep rules and rates current, but policies may change and there may be delays
				before updates appear here.
			</p>

			<h2>Limitation of Liability</h2>
			<p>
				To the maximum extent permitted by law, {domainNameWithoutHTTPS} shall not be liable for any
				loss or damage arising from reliance on information or estimates provided by the Service.
			</p>

			<h2>External Links</h2>
			<p>
				Links to operator claim pages are provided for convenience. We do not control or endorse
				those sites and are not responsible for their content or policies.
			</p>
		</article>
	);
}
