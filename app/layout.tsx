import React from "react";
import type {Metadata} from 'next';
import './globals.css';
import Footer from "@/components/Footer";
import Link from "next/link";
import {domainNameWithHTTPS} from "@/app/Constants";

export const metadata: Metadata = {
	title: 'Delay Repay Estimator',
	description: 'Estimate UK train delay compensation and jump to the claim page.',
	metadataBase: new URL(domainNameWithHTTPS),
	alternates: {canonical: '/'},
};

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<head>
			<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3326383816496310"
							crossOrigin="anonymous"></script>
		</head>
		<body style={{
			fontFamily: 'system-ui, sans-serif',
			margin: 0,
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column'
		}}>
		<div className="navbar bg-blue-900 shadow-sm">
			<div className="navbar-start"/>
			<div className="navbar-center prose">
				<h1>
					<Link href="/" passHref className="text-blue-50 no-underline">
						Delay Repay Calculator
					</Link>
				</h1>
			</div>
			<div className="navbar-end"/>
		</div>
		<div style={{maxWidth: 800, margin: '0 auto', padding: '16px', flex: 1}}>
			{children}
		</div>
		<Footer/>
		</body>
		</html>
	);
}
