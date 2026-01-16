import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import {domainNameWithHTTPS} from "@/app/Constants";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
	title: "Delay Repay Calculator | UK Rail Compensation",
	description: "Independent UK Delay Repay calculator with guidance on operators, season tickets, cancellations, and claim steps.",
	metadataBase: new URL(domainNameWithHTTPS),
	alternates: {canonical: "/"},
	icons: {
		icon: [
			{url: "/favicon.ico", sizes: "48x48"},
			{url: "/favicon-192.png", type: "image/png", sizes: "192x192"}
		]
	}
};

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en-GB">
		<head>
			<Script
				id="fc"
				strategy="beforeInteractive"
				src={`https://fundingchoicesmessages.google.com/i/pub-3326383816496310?ers=1`}
			/>
			<Script id="fc-present" strategy="beforeInteractive">
				{`(function(){function s(){if(!window.frames['googlefcPresent']){if(document.body){const i=document.createElement('iframe');i.style='width:0;height:0;border:0;display:none';i.name='googlefcPresent';document.body.appendChild(i);}else{setTimeout(s,0);}}}s();})();`}
			</Script>

			<Script
				id="adsbygoogle"
				strategy="afterInteractive"
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3326383816496310"
				crossOrigin="anonymous"
			/>
		</head>
		<body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
		<header className="bg-blue-900 text-white shadow-sm">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
				<div className="text-xl font-semibold tracking-tight">
					<Link href="/" className="no-underline text-white">
						Delay Repay Calculator
					</Link>
				</div>
				<nav className="flex flex-wrap items-center gap-4 text-sm">
					<Link className="hover:underline" href="/">Home</Link>
					<Link className="hover:underline" href="/delay-repay-explained">Delay Repay guide</Link>
					<Link className="hover:underline" href="/operators">Operators</Link>
					<Link className="hover:underline" href="/delay-repay-season-tickets">Season tickets</Link>
					<Link className="hover:underline" href="/about">About</Link>
				</nav>
			</div>
		</header>
		<main className="flex-1">
			<div className="mx-auto max-w-6xl px-4 py-10">
				{children}
				<Analytics />
			</div>
		</main>
		<Footer/>
		</body>
		</html>
	);
}
