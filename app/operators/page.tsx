import type { Metadata } from "next";
import { supabaseServer } from "@/lib/supabase.server";
import type { Operator } from "@/definitions/operator";
import { contactEmail } from "@/app/Constants";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Operators — Which rules apply • Delay Repay Calculator",
	description:
		"See which UK train operators use the standard Delay Repay bands and which have different rules.",
	alternates: { canonical: "/operators" },
};

export default async function Page() {
	const supabase = supabaseServer();

	const { data: opsData, error } = await supabase
		.from("operators")
		.select("code,name,claim_url,delay_repay,active")
		.eq("active", true)
		.eq("delay_repay", true)
		.order("name");

	const operators: Operator[] = (opsData ?? []) as Operator[];
	const routeMap: Record<string, string> = {
		northern: "/delay-repay-northern",
		avanti: "/delay-repay-avanti",
		gwr: "/delay-repay-gwr",
		lner: "/delay-repay-lner",
		southern: "/delay-repay-southern",
	};

	return (
		<main>
			<article className="prose">
				<h1>Operators — which rules apply</h1>
				<p>
					We flag whether each operator follows the <em>standard Delay Repay bands</em> or whether{" "}
					<em>different rules apply</em>. Use the calculator for a personalised estimate; this page
					doesn’t go into the details.
				</p>

				{error ? (
					<p>We couldn’t load operators right now. Please try again shortly.</p>
				) : operators.length === 0 ? (
					<p>No operators available right now.</p>
				) : (
					<ul className="not-prose divide-y">
						{operators.map((op) => {
							const route = routeMap[op.code as keyof typeof routeMap];
							const externalLink = !route && op.claim_url ? op.claim_url : null;
							return (
								<li key={op.code} className="py-4">
									<div className="flex items-start justify-between gap-4">
										<div>
											<h2 className="m-0">{op.name}</h2>
											<p className="mt-1 text-sm text-neutral-700">
												Active Delay Repay operator with published compensation bands.
											</p>
										</div>
										<div className="flex items-center gap-2">
											<span className="badge badge-success">Delay Repay</span>
											{route ? (
												<Link className="btn btn-primary no-underline" href={route}>
													Calculator guide
												</Link>
											) : externalLink ? (
												<a
													href={externalLink}
													target="_blank"
													rel="noopener noreferrer"
													className="btn btn-primary no-underline"
												>
													Claim page
												</a>
											) : null}
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				)}

				<p className="mt-8">
					Want an estimate?{" "}
					<Link href="/" className="no-underline">
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
