import { NextResponse } from "next/server";
import { domainNameWithHTTPS } from "../Constants";
import { supabaseServer } from "@/lib/supabase.server";

type Operator = {
	updated_at: string | null;
	active: boolean;
};

export async function GET() {
	const supabase = supabaseServer();

	// Only fetch what we need
	const { data, error } = await supabase
		.from("operators")
		.select("updated_at,active")
		.eq("active", true);

	// Compute lastmod for /operators from most recent operator update
	const nowIso = new Date().toISOString();
	const latestMs = (data ?? [])
		.map((o: Operator) => (o.updated_at ? Date.parse(o.updated_at) : 0))
		.reduce((max, v) => (v > max ? v : max), 0);
	const operatorsLastMod = latestMs ? new Date(latestMs).toISOString() : nowIso;

	const urls = [
		{ loc: `${domainNameWithHTTPS}/`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/operators`, lastmod: operatorsLastMod },
		{ loc: `${domainNameWithHTTPS}/privacy`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/cookies`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/legal`, lastmod: nowIso },
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
		.map(
			(u) =>
				`  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`
		)
		.join("\n")}
</urlset>`;

	return new NextResponse(xml, {
		headers: {
			"Content-Type": "application/xml; charset=UTF-8",
			"Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
		},
	});
}
