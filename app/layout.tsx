import React from "react";
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Delay Repay Estimator',
	description: 'Estimate UK train delay compensation and jump to the claim page.',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body style={{fontFamily: 'system-ui, sans-serif', margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
			<div className="navbar bg-blue-900 shadow-sm">
				<div className="navbar-start" />
				<div className="navbar-center prose">
					<h1 className={'text-blue-50'}>Delay Repay Calculator</h1>
				</div>
				<div className="navbar-end" />
			</div>
			<div style={{maxWidth: 800, margin: '0 auto', padding: '16px', flex: 1}}>
				{children}
			</div>
			<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
				{/*<nav className="grid grid-flow-col gap-4">*/}
				{/*	<a className="link link-hover">About us</a>*/}
				{/*	<a className="link link-hover">Contact</a>*/}
				{/*	<a className="link link-hover">Jobs</a>*/}
				{/*	<a className="link link-hover">Press kit</a>*/}
				{/*</nav>*/}
				<aside>
					<p>Copyright © {new Date().getFullYear()} - All right reserved by delayrepaycalc.co.uk</p>
				</aside>
			</footer>
		</body>
		</html>
	);
}
