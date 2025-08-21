import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Delay Repay Estimator',
	description: 'Estimate UK train delay compensation and jump to the claim page.',
};

import './globals.css';

export default function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body style={{fontFamily: 'system-ui, sans-serif', margin: 0}}>
		<div style={{maxWidth: 800, margin: '0 auto', padding: '16px'}}>
			{children}
		</div>
		</body>
		</html>
	);
}
