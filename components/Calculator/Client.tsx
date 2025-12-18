// components/Calculator/Client.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { type DelayBand, type TicketType, toPerJourney } from "@/lib/rules";

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

const k = (ticket: TicketType, band: DelayBand) => `${ticket}|${band}` as const;

export default function Client(props: {
	initialOperators: Operator[];
	initialOpCode: string;
	initialDefaultRules: RuleRow[];
	initialOverrideRules: RuleRow[];
}) {
	// Seed from server props so the first paint is complete
	const [operators] = useState<Operator[]>(props.initialOperators);
	const [opCode, setOpCode] = useState<string>(
		props.initialOpCode || props.initialOperators[0]?.code || ""
	);

	const [defaultRules] = useState<Map<string, number>>(
		() =>
			new Map(
				(props.initialDefaultRules || []).map((r) => [k(r.ticket, r.band), Number(r.percent)])
			)
	);

	const [overrideRules, setOverrideRules] = useState<Map<string, number>>(
		() =>
			new Map(
				(props.initialOverrideRules || []).map((r) => [k(r.ticket, r.band), Number(r.percent)])
			)
	);

	// So we don't refetch overrides for the SSR'd operator
	const hydratedForOp = useRef<string | null>(props.initialOpCode || null);

	const [ticket, setTicket] = useState<TicketType>("single");
	const [band, setBand] = useState<DelayBand>("15-29");
	const [price, setPrice] = useState("");

	const selectedOp = useMemo(
		() => operators.find((o) => o.code === opCode),
		[operators, opCode]
	);

	const isManual = selectedOp ? !selectedOp.delay_repay : false;

	// Fetch overrides when operator changes (skip the one we already hydrated)
	useEffect(() => {
		if (!opCode) return;
		if (hydratedForOp.current === opCode && overrideRules.size > 0) return;

		let cancelled = false;
		(async () => {
			const { data, error } = await supabase
				.from("rules_override")
				.select("ticket,band,percent")
				.eq("operator_code", opCode);

			if (cancelled || error) return;
			const map = new Map<string, number>();
			(data as RuleRow[]).forEach((r) => map.set(k(r.ticket, r.band), Number(r.percent)));
			setOverrideRules(map);
			hydratedForOp.current = opCode;
		})();

		return () => {
			cancelled = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [opCode]);

	const percent = useMemo(() => {
		if (!selectedOp || isManual) return null;
		const key = k(ticket, band);
		if (overrideRules.has(key)) return overrideRules.get(key)!;
		if (defaultRules.has(key)) return defaultRules.get(key)!;
		return null;
	}, [selectedOp, isManual, ticket, band, overrideRules, defaultRules]);

	const estimate = useMemo(() => {
		if (percent === null) return null;
		const p = parseFloat(price || "0");
		if (!p || p <= 0) return null;
		const perJourney = toPerJourney(ticket, p);
		return Math.round(perJourney * (percent / 100) * 100) / 100;
	}, [ticket, price, percent]);

	async function onClaim() {
		if (!selectedOp) return;
		const dest = selectedOp.claim_url || "#";
		try {
			fetch("/api/click", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ operator_code: opCode, dest_url: dest }),
				keepalive: true,
			});
		} catch {}
		window.open(dest, "_blank", "noopener,noreferrer");
	}

        return (
                <div className="card bg-base-100 shadow-sm border border-base-300">
                        <div className="card-body space-y-4">
                        {/* No loading state: operators are present from SSR */}
                        {operators.length === 0 ? (
                                <div className="alert alert-warning">Couldn’t load operators. Please refresh.</div>
                        ) : (
                                <div>
                                        <fieldset className="fieldset mb-4">
                                                <legend className="text-sm font-semibold text-base-content">Operator</legend>
                                                <select
                                                        value={opCode}
                                                        onChange={(e) => setOpCode(e.target.value)}
                                                        className="select select-bordered w-full"
                                                >
                                                        {operators.map((o) => (
                                                                <option key={o.code} value={o.code}>
									{o.name}
								</option>
							))}
						</select>
					</fieldset>

                                        {isManual ? (
                                                <div className="alert alert-info mt-4">
                                                        This operator doesn’t use Delay Repay. You’ll need to claim directly via their official page.
                                                        <div className="mt-3">
                                                                <button onClick={onClaim} className="btn btn-accent">
                                                                        Go to claim page
                                                                </button>
                                                        </div>
                                                </div>
                                        ) : (
                                                <>
                                                        <fieldset className="fieldset mb-4 space-y-2">
                                                                <legend className="text-sm font-semibold text-base-content">Ticket price (£)</legend>
                                                                <input
                                                                        value={price}
                                                                        onChange={(e) => setPrice(e.target.value)}
                                                                        placeholder="e.g. 42.50"
                                                                        inputMode="decimal"
                                                                        className="input input-bordered w-full"
                                                                />
                                                        </fieldset>

                                                        <fieldset className="fieldset mb-4 space-y-2">
                                                                <legend className="text-sm font-semibold text-base-content">Ticket type</legend>
                                                                <select
                                                                        value={ticket}
                                                                        onChange={(e) => setTicket(e.target.value as TicketType)}
                                                                        className="select select-bordered w-full"
                                                                >
                                                                        <option value="single">Single</option>
                                                                        <option value="return">Return</option>
                                                                        <option value="season_weekly">Season — Weekly</option>
                                                                        <option value="season_monthly">Season — Monthly</option>
                                                                        <option value="season_annual">Season — Annual</option>
                                                                        <option value="season_flexi">Season — Flexi</option>
                                                                </select>
                                                        </fieldset>

                                                        <fieldset className="fieldset mb-4 space-y-2">
                                                                <legend className="text-sm font-semibold text-base-content">Delay length</legend>
                                                                <select
                                                                        value={band}
                                                                        onChange={(e) => setBand(e.target.value as DelayBand)}
                                                                        className="select select-bordered w-full"
                                                                >
                                                                        <option value="15-29">15–29 minutes</option>
                                                                        <option value="30-59">30–59 minutes</option>
                                                                        <option value="60-119">60–119 minutes</option>
                                                                        <option value="120+">120+ minutes</option>
                                                                </select>
                                                        </fieldset>

                                                        <div className="space-y-2">
                                                                <p className="text-sm font-semibold text-base-content">What you might be able to claim</p>
                                                                <p className="text-sm text-base-content/80">
                                                                        <strong>Important:</strong> Estimates only. Final payout is determined by your operator. Season tickets are converted to a per-journey value.
                                                                </p>
                                                                <label className="input input-bordered flex items-center gap-2">
                                                                        <span className="font-semibold text-base-content">£</span>
                                                                        <input
                                                                                type="text"
                                                                                readOnly
                                                                                className="w-full bg-transparent"
                                                                                placeholder="What you might be able to claim"
                                                                                value={estimate === null ? "" : `${estimate.toFixed(2)}`}
                                                                        />
                                                                </label>
                                                        </div>

                                                        <div>
                                                                <button
                                                                        onClick={onClaim}
                                                                        disabled={!estimate && !selectedOp?.claim_url}
                                                                        className="btn btn-accent"
                                                                >
                                                                        Claim with {selectedOp?.name || "this operator"}
                                                                </button>
                                                        </div>
                                                </>
                                        )}
                                </div>
                        )}
                        </div>
                </div>
        );
}
