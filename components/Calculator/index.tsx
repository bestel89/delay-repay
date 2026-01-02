// components/Calculator/index.tsx  (SERVER COMPONENT)
import Client from "./Client";
import {supabaseServer} from "@/lib/supabase.server";
import type {DelayBand, TicketType} from "@/lib/rules";
import {Operator} from "@/definitions/operator";

type RuleRow = {
	ticket: TicketType;
	band: DelayBand;
	percent: number;
};

export default async function Calculator({ preselectedOperatorCode }: { preselectedOperatorCode?: string }) {
        const supabase = supabaseServer();

	// 1) Operators (active, ordered)
	const {data: operators, error: opErr} = await supabase
		.from("operators")
		.select("code,name,claim_url,delay_repay,active")
		.eq("active", true)
		.order("name");

	if (opErr) {
		// Fail soft: render client with empty lists (still SSRs instantly)
		return (
			<Client
				initialOperators={[]}
				initialOpCode=""
				initialDefaultRules={[]}
				initialOverrideRules={[]}
			/>
		);
	}

        const ops = operators ?? [];
        const requested = preselectedOperatorCode ? preselectedOperatorCode.trim().toLowerCase() : "";
        const matched = requested ? ops.find((op) => op.code.toLowerCase() === requested)?.code ?? "" : "";
        const initialOpCode = matched || ops[0]?.code || "";

	// 2) Default rules (all)
	const {data: defaultRows} = await supabase
		.from("rules_default")
		.select("ticket,band,percent");

	// 3) Overrides for the initial operator (hydrate first paint fully)
	const {data: overrideRows} = initialOpCode
		? await supabase
			.from("rules_override")
			.select("ticket,band,percent")
			.eq("operator_code", initialOpCode)
		: {data: [] as RuleRow[]};

	return (
		<Client
			initialOperators={ops as Operator[]}
			initialOpCode={initialOpCode}
			initialDefaultRules={(defaultRows ?? []) as RuleRow[]}
			initialOverrideRules={(overrideRows ?? []) as RuleRow[]}
		/>
	);
}
