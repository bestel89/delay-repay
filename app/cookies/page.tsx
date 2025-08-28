import type { Metadata } from 'next';
import {domainNameWithoutHTTPS} from "@/app/Constants";

robots: { index: false }

export const metadata: Metadata = {
	title: 'Cookie Policy | Delay Repay Estimator',
	description: `How ${domainNameWithoutHTTPS} uses cookies and similar technologies.`,
	alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
	return (
		<article className="prose max-w-none">
			<h1>Cookie Policy</h1>
			<p><em>Last updated: 22 Aug 2025</em></p>

			<h2>1. What Are Cookies?</h2>
			<p>
				Cookies are small text files stored on your device that help websites function and
				improve user experience.
			</p>

			<h2>2. How We Use Cookies</h2>
			<ul>
				<li><strong>Essential</strong>: basic functionality and security</li>
				<li><strong>Analytics (if enabled)</strong>: understand usage to improve the Service</li>
			</ul>
			<p>We do not use advertising or cross-site tracking cookies.</p>

			<h2>3. Third-Party Cookies</h2>
			<p>
				Our hosting/analytics providers (e.g., Supabase, privacy-respecting analytics) may set cookies
				to measure performance and reliability.
			</p>

			<h2>4. Managing Cookies</h2>
			<p>
				You can control or delete cookies in your browser settings. Blocking some cookies may impact
				calculator functionality.
			</p>

			<h2>5. Changes</h2>
			<p>
				We may update this Policy. Changes will be posted here with a new “Last updated” date.
			</p>
		</article>
	);
}
