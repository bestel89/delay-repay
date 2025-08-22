import {NextResponse} from "next/server";
import {createClient} from "@supabase/supabase-js";
import {domainNameWithHTTPS} from "../Constants";

export async function GET() {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const {data: ops} = await supabase
		.from("operators")
		.select("code, updated_at")
		.eq("active", true)
		.order("code");

	const urls = [
		{loc: `${domainNameWithHTTPS}/`, lastmod: new Date().toISOString()},
		...(ops ?? []).map(o => ({
			loc: `${domainNameWithHTTPS}/operators/${o.code}`,
			lastmod: (o as any).updated_at ?? new Date().toISOString(),
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
