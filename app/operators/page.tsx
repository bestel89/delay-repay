import type {Metadata} from "next";
import {supabaseServer} from "@/lib/supabase.server";
import type {Operator} from "@/definitions/operator";
import {contactEmail} from "@/app/Constants";
import Link from "next/link";
import {routes} from "@/lib/nav";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Operators — Which rules apply • Delay Repay Calculator",
	description:
		"See which UK train operators use the standard Delay Repay bands and which have different rules.",
	alternates: {canonical: "/operators"},
};

type DefaultRow = { ticket: string; band: string; percent: number };
type OverrideRow = { operator_code: string; ticket: string; band: string; percent: number };

export default async function Page() {
	const supabase = supabaseServer();
	const operatorRoutes: Record<string, string> = {
		avanti: routes.avanti,
		gwr: routes.gwr,
		lner: routes.lner,
		northern: routes.northern,
		southern: routes.southern,
	};

	// 1) Operators
	const {data: opsData} = await supabase
		.from("operators")
		.select("code,name,claim_url,delay_repay,active")
		.eq("active", true)
		.order("name");

	const operators: Operator[] = (opsData ?? []) as Operator[];

	// 2) Defaults + Overrides (to detect real differences)
	const [{data: defaults}, {data: overrides}] = await Promise.all([
		supabase.from("rules_default").select("ticket,band,percent"),
		supabase.from("rules_override").select("operator_code,ticket,band,percent"),
	]);

	const defaultMap = new Map<string, number>();
	(defaults ?? []).forEach((r: DefaultRow) =>
		defaultMap.set(`${r.ticket}|${r.band}`, Number(r.percent))
	);

	// Operator codes where an override actually differs from default
	const hasDiffOverride = new Set<string>();
	(overrides ?? []).forEach((r: OverrideRow) => {
		const key = `${r.ticket}|${r.band}`;
		const def = defaultMap.get(key);
		if (def === undefined || Number(r.percent) !== def) {
			hasDiffOverride.add(r.operator_code);
		}
	});

	type Status = "standard" | "override" | "no-dr";
	const items = operators.map((op) => {
		const status: Status = op.delay_repay
			? hasDiffOverride.has(op.code)
				? "override"
				: "standard"
			: "no-dr";
		return {op, status};
	});

	return (
		<main>
			<article className="prose max-w-none">

				<h1>Operators — which rules apply</h1>
				<p>
					We flag whether each operator follows the <em>standard Delay Repay bands</em> or whether{" "}
					<em>different rules apply</em>. Use the calculator for a personalised estimate; this page
					doesn’t go into the details.
				</p>

				{items.length === 0 ? (
					<p>No operators available right now.</p>
				) : (
					<div className="not-prose overflow-x-auto">
						<table className="table w-full">
							<thead>
							<tr>
								<th>Operator</th>
								<th>Status</th>
								<th>Links</th>
							</tr>
							</thead>
							<tbody>
							{items.map(({op, status}) => {
								const badge =
									status === "standard"
										? {text: "Standard Delay Repay", cls: "badge-success"}
										: status === "override"
											? {text: "Different rules apply", cls: "badge-warning"}
											: {text: "No Delay Repay", cls: "badge-neutral"};

								const blurb =
									status === "standard"
										? "Uses the common banded percentages."
										: status === "override"
											? "This operator’s policy differs from the common bands."
											: "This operator doesn’t use the standard Delay Repay scheme.";

								const operatorRoute = operatorRoutes[op.code];

								return (
									<tr key={op.code}>
										<td>
											<div className="font-semibold">{op.name}</div>
											<div className="text-sm text-neutral-700">{blurb}</div>
										</td>
										<td>
											<span className={`badge ${badge.cls}`}>{badge.text}</span>
										</td>
										<td>
											<div className="flex flex-wrap items-center gap-2">
												{operatorRoute && (
													<Link href={operatorRoute} className="btn btn-ghost btn-sm no-underline">
														Operator guide
													</Link>
												)}
												{op.claim_url && (
													<a
														href={op.claim_url}
														target="_blank"
														rel="noopener noreferrer"
														className="btn btn-primary btn-sm no-underline"
													>
														Claim page
													</a>
												)}
											</div>
										</td>
									</tr>
								);
							})}
							</tbody>
						</table>
					</div>
				)}

				<p className="mt-8">
					Want an estimate?{" "}
					<Link href={routes.home} className="no-underline">
						Open the calculator
					</Link>
					.
				</p>

				<p className="text-sm text-neutral-600 mt-6">
					Policies change. If something looks wrong, email{" "}
					<a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
				</p>
			</article>
		</main>
	);
}
