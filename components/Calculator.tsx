'use client';

import { useMemo, useState } from 'react';
import { DEFAULT_RULES, toPerJourney, type TicketType, type DelayBand } from '@/lib/rules';

const OPERATORS = [
	{ code: 'gwr', name: 'Great Western Railway', claimUrl: 'https://delayrepay.gwr.com/' },
	// Add more operators from your Supabase seed when ready, or keep it simple for MVP.
];

export default function Calculator() {
	const [op, setOp] = useState(OPERATORS[0].code);
	const [ticket, setTicket] = useState<TicketType>('single');
	const [band, setBand] = useState<DelayBand>('15-29');
	const [price, setPrice] = useState('');

	const estimate = useMemo(() => {
		const p = parseFloat(price || '0');
		if (!p || p <= 0) return null;
		const perJourney = toPerJourney(ticket, p);
		const pct = DEFAULT_RULES[ticket][band];
		const amount = Math.round(perJourney * (pct / 100) * 100) / 100;
		return amount;
	}, [ticket, band, price]);

	const claimUrl = OPERATORS.find(o => o.code === op)?.claimUrl ?? '#';

	async function onClaim() {
		try {
			fetch('/api/click', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ operator_code: op, dest_url: claimUrl }),
				keepalive: true
			});
		} catch {}
		window.open(claimUrl, '_blank', 'noopener,noreferrer');
	}

	return (
		<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
			<div style={{ display: 'grid', gap: 12 }}>
				<label>
					<div style={{ fontSize: 14 }}>Operator</div>
					<select value={op} onChange={e => setOp(e.target.value)} style={{ width: '100%', padding: 8 }}>
						{OPERATORS.map(o => <option key={o.code} value={o.code}>{o.name}</option>)}
					</select>
				</label>

				<label>
					<div style={{ fontSize: 14 }}>Ticket price (£)</div>
					<input
						value={price}
						onChange={e => setPrice(e.target.value)}
						placeholder="e.g. 42.50"
						inputMode="decimal"
						style={{ width: '100%', padding: 8 }}
					/>
				</label>

				<label>
					<div style={{ fontSize: 14 }}>Ticket type</div>
					<select value={ticket} onChange={e => setTicket(e.target.value as TicketType)} style={{ width: '100%', padding: 8 }}>
						<option value="single">Single</option>
						<option value="return">Return</option>
						<option value="season_weekly">Season — Weekly</option>
						<option value="season_monthly">Season — Monthly</option>
						<option value="season_annual">Season — Annual</option>
						<option value="season_flexi">Season — Flexi</option>
					</select>
				</label>

				<label>
					<div style={{ fontSize: 14 }}>Delay length</div>
					<select value={band} onChange={e => setBand(e.target.value as DelayBand)} style={{ width: '100%', padding: 8 }}>
						<option value="15-29">15–29 minutes</option>
						<option value="30-59">30–59 minutes</option>
						<option value="60-119">60–119 minutes</option>
						<option value="120+">120+ minutes</option>
					</select>
				</label>

				<div style={{ paddingTop: 8 }}>
					<div style={{ color: '#555', fontSize: 13 }}>Estimated compensation</div>
					<div style={{ fontSize: 24, fontWeight: 600 }}>
						{estimate === null ? '—' : `£${estimate.toFixed(2)}`}
					</div>
					<button
						onClick={onClaim}
						disabled={!estimate}
						style={{ marginTop: 8, padding: '8px 12px', border: '1px solid #ccc', borderRadius: 6, background: '#fff', cursor: estimate ? 'pointer' : 'not-allowed' }}
					>
						Claim with selected operator
					</button>
				</div>
			</div>
		</div>
	);
}
