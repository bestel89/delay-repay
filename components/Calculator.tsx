'use client';

import {useEffect, useMemo, useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {type DelayBand, type TicketType, toPerJourney} from '@/lib/rules'; // keep only toPerJourney + types

type Operator = {
	code: string;
	name: string;
	claim_url: string;
	active: boolean;
	delay_repay: boolean;
};

type RuleRow = {
	ticket: TicketType;
	band: DelayBand;
	percent: number;
};

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// helper to build a stable key
const k = (ticket: TicketType, band: DelayBand) => `${ticket}|${band}` as const;

export default function Calculator() {
	const [operators, setOperators] = useState<Operator[]>([]);
	const [opCode, setOpCode] = useState<string>('');

	// maps of rules: `${ticket}|${band}` -> percent
	const [defaultRules, setDefaultRules] = useState<Map<string, number>>(new Map());
	const [overrideRules, setOverrideRules] = useState<Map<string, number>>(new Map());

	const [ticket, setTicket] = useState<TicketType>('single');
	const [band, setBand] = useState<DelayBand>('15-29');
	const [price, setPrice] = useState('');

	// 1) Load operators
	useEffect(() => {
		let cancelled = false;
		(async () => {
			const { data, error } = await supabase
				.from('operators')
				.select('code,name,claim_url,delay_repay,active')
				.eq('active', true)
				.order('name');
			if (error) {
				console.error('Failed to load operators', error);
				return;
			}
			if (cancelled) return;
			setOperators(data || []);
			if (data?.length) setOpCode(data[0].code);
		})();
		return () => { cancelled = true; };
	}, []);

	// 2) Load default rules once
	useEffect(() => {
		let cancelled = false;
		(async () => {
			const { data, error } = await supabase
				.from('rules_default')
				.select('ticket,band,percent');
			if (error) {
				console.error('Failed to load rules_default', error);
				return;
			}
			if (cancelled) return;
			const map = new Map<string, number>();
			(data as RuleRow[]).forEach(r => map.set(k(r.ticket, r.band), Number(r.percent)));
			setDefaultRules(map);
		})();
		return () => { cancelled = true; };
	}, []);

	// 3) Load overrides when operator changes
	useEffect(() => {
		if (!opCode) return;
		let cancelled = false;
		(async () => {
			// fetch only rows for this operator
			const { data, error } = await supabase
				.from('rules_override')
				.select('ticket,band,percent')
				.eq('operator_code', opCode);
			if (error) {
				console.error('Failed to load rules_override', error);
				return;
			}
			if (cancelled) return;
			const map = new Map<string, number>();
			(data as RuleRow[]).forEach(r => map.set(k(r.ticket, r.band), Number(r.percent)));
			setOverrideRules(map);
		})();
		return () => { cancelled = true; };
	}, [opCode]);

	const selectedOp = useMemo(
		() => operators.find(o => o.code === opCode),
		[operators, opCode]
	);

	const isManual = selectedOp ? !selectedOp.delay_repay : false;

	// 4) Lookup %: override -> default
	const percent = useMemo(() => {
		if (!selectedOp || isManual) return null;
		const key = k(ticket, band);
		if (overrideRules.has(key)) return overrideRules.get(key)!;
		if (defaultRules.has(key)) return defaultRules.get(key)!;
		return null; // no rule found -> no estimate
	}, [selectedOp, isManual, ticket, band, overrideRules, defaultRules]);

	// 5) Compute estimate
	const estimate = useMemo(() => {
		if (percent === null) return null;
		const p = parseFloat(price || '0');
		if (!p || p <= 0) return null;
		const perJourney = toPerJourney(ticket, p);
		return Math.round(perJourney * (percent / 100) * 100) / 100;
	}, [ticket, price, percent]);

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
		<div className="border p-4 rounded shadow-sm">
			{operators.length === 0 ? (
				<div>Loading operators…</div>
			) : (
				<div>
					<fieldset className="fieldset mb-4">
						<legend>Operator</legend>
						<select
							value={opCode}
							onChange={e => setOpCode(e.target.value)}
							className="select"
						>
							{operators.map(o => (
								<option key={o.code} value={o.code}>
									{o.name}
								</option>
							))}
						</select>
					</fieldset>

					{isManual ? (
						<div>
							This operator doesn’t use Delay Repay. You’ll need to claim directly via their official page.
							<div className="mt-2">
								<button onClick={onClaim} className="btn btn-primary">
									Go to claim page
								</button>
							</div>
						</div>
					) : (
						<>
							<fieldset className="fieldset mb-4">
								<legend>Ticket price (£)</legend>
								<input
									value={price}
									onChange={e => setPrice(e.target.value)}
									placeholder="e.g. 42.50"
									inputMode="decimal"
									className="input"
								/>
							</fieldset>

							<fieldset className="fieldset mb-4">
								<legend>Ticket type</legend>
								<select
									value={ticket}
									onChange={e => setTicket(e.target.value as TicketType)}
									className="select"
								>
									<option value="single">Single</option>
									<option value="return">Return</option>
									<option value="season_weekly">Season — Weekly</option>
									<option value="season_monthly">Season — Monthly</option>
									<option value="season_annual">Season — Annual</option>
									<option value="season_flexi">Season — Flexi</option>
								</select>
							</fieldset>

							<fieldset className="fieldset mb-4">
								<legend>Delay length</legend>
								<select
									value={band}
									onChange={e => setBand(e.target.value as DelayBand)}
									className="select"
								>
									<option value="15-29">15–29 minutes</option>
									<option value="30-59">30–59 minutes</option>
									<option value="60-119">60–119 minutes</option>
									<option value="120+">120+ minutes</option>
								</select>
							</fieldset>

							<p>What you might be able to claim:</p>
							<p className={'prose-sm'}>
								<em><b>Important!</b></em> Estimates only. Final payout is determined by your operator. Season tickets are converted to a per-journey
								value.
							</p>
							<label className="input mb-4">
								<span className="label">£</span>
								<input
									type="text"
									readOnly
									placeholder="What you might be able to claim"
									value={estimate === null ? '' : `${estimate.toFixed(2)}`}
								/>
							</label>

							<div>
								<button
									onClick={onClaim}
									disabled={!estimate && !selectedOp?.claim_url}
									className="btn btn-primary"
								>
									Claim with {selectedOp?.name || 'this operator'}
								</button>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}
