'use client';

import { useMemo, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { DEFAULT_RULES, toPerJourney, type TicketType, type DelayBand } from '@/lib/rules';

type Operator = {
	code: string;
	name: string;
	claim_url: string;
	active: boolean;
	delay_repay: boolean;
};

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Calculator() {
	const [operators, setOperators] = useState<Operator[]>([]);
	const [opCode, setOpCode] = useState<string>('');
	const [ticket, setTicket] = useState<TicketType>('single');
	const [band, setBand] = useState<DelayBand>('15-29');
	const [price, setPrice] = useState('');

	useEffect(() => {
		async function loadOperators() {
			const { data, error } = await supabase
				.from('operators')
				.select('code,name,claim_url,delay_repay,active')
				.eq('active', true)
				.order('name');

			if (error) {
				console.error('Failed to load operators', error);
				return;
			}
			setOperators(data || []);
			if (data && data.length > 0) {
				setOpCode(data[0].code);
			}
		}
		loadOperators();
	}, []);

	const selectedOp = useMemo(
		() => operators.find(o => o.code === opCode),
		[operators, opCode]
	);
	const isManual = selectedOp ? !selectedOp.delay_repay : false;

	const estimate = useMemo(() => {
		if (!selectedOp || isManual) return null;
		const p = parseFloat(price || '0');
		if (!p || p <= 0) return null;
		const perJourney = toPerJourney(ticket, p);
		const pct = DEFAULT_RULES[ticket][band];
		const amount = Math.round(perJourney * (pct / 100) * 100) / 100;
		return amount;
	}, [selectedOp, isManual, ticket, band, price]);

	async function onClaim() {
		if (!selectedOp) return;
		const dest = selectedOp.claim_url || '#';
		try {
			fetch('/api/click', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ operator_code: opCode, dest_url: dest }),
				keepalive: true
			});
		} catch {}
		window.open(dest, '_blank', 'noopener,noreferrer');
	}

	return (
		<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
			{operators.length === 0 ? (
				<div>Loading operators…</div>
			) : (
				<div style={{ display: 'grid', gap: 12 }}>
					<label>
						<div style={{ fontSize: 14 }}>Operator</div>
						<select
							value={opCode}
							onChange={e => setOpCode(e.target.value)}
							style={{ width: '100%', padding: 8 }}
						>
							{operators.map(o => (
								<option key={o.code} value={o.code}>
									{o.name}
								</option>
							))}
						</select>
					</label>

					{isManual ? (
						<div style={{ marginTop: 16, fontSize: 14 }}>
							This operator doesn’t use Delay Repay. You’ll need to claim
							directly via their official page.
							<button
								onClick={onClaim}
								style={{
									marginTop: 8,
									padding: '8px 12px',
									border: '1px solid #ccc',
									borderRadius: 6,
									background: '#fff',
									cursor: 'pointer'
								}}
							>
								Go to claim page
							</button>
						</div>
					) : (
						<>
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
								<select
									value={ticket}
									onChange={e => setTicket(e.target.value as TicketType)}
									style={{ width: '100%', padding: 8 }}
								>
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
								<select
									value={band}
									onChange={e => setBand(e.target.value as DelayBand)}
									style={{ width: '100%', padding: 8 }}
								>
									<option value="15-29">15–29 minutes</option>
									<option value="30-59">30–59 minutes</option>
									<option value="60-119">60–119 minutes</option>
									<option value="120+">120+ minutes</option>
								</select>
							</label>

							<div style={{ paddingTop: 8 }}>
								<div style={{ color: '#555', fontSize: 13 }}>
									Estimated compensation
								</div>
								<div style={{ fontSize: 24, fontWeight: 600 }}>
									{estimate === null ? '—' : `£${estimate.toFixed(2)}`}
								</div>
								<button
									onClick={onClaim}
									disabled={!estimate}
									style={{
										marginTop: 8,
										padding: '8px 12px',
										border: '1px solid #ccc',
										borderRadius: 6,
										background: '#fff',
										cursor: estimate ? 'pointer' : 'not-allowed'
									}}
								>
									Claim with {selectedOp?.name || "this operator"}
								</button>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}
