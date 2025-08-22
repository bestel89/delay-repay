'use client';

import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-8">
			<nav className="grid grid-flow-col gap-4">
				<Link href="/privacy" className="link link-hover">Privacy Policy</Link>
				<Link href="/cookies" className="link link-hover">Cookie Policy</Link>
				<Link href="/legal" className="link link-hover">Legal Disclaimer</Link>
			</nav>
			<aside>
				<p>
					© {new Date().getFullYear()} delayrepaycalc.co.uk — All rights reserved.
				</p>
			</aside>
		</footer>
	);
}
