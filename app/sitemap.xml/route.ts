import {NextResponse} from "next/server";
import {domainNameWithHTTPS} from "../Constants";
import {supabaseServer} from "@/lib/supabase.server";

type Operator = {
	code: string;
	updated_at?: string;
};

export async function GET() {
	const supabase = supabaseServer();
	const { data, error } = await supabase
		.from('operators')
		.select('code,name,claim_url,delay_repay,active')
		.eq('active', true)
		.order('name');

	const urls = [
		{loc: `${domainNameWithHTTPS}/`, lastmod: new Date().toISOString()},
		...(data ?? []).map((o: Operator) => ({
			loc: `${domainNameWithHTTPS}/operators/${o.code}`,
			lastmod: o.updated_at ?? new Date().toISOString(),
		})),
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
		.map(
			u =>
				`  <url><loc>${u.loc}</loc><lastmod>${new Date(
					u.lastmod
				).toISOString()}</lastmod></url>`
		)
		.join("\n")}
</urlset>`;

	return new NextResponse(xml, {
		headers: {"Content-Type": "application/xml"},
	});
}
