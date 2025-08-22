import {NextResponse} from "next/server";
import {createClient} from "@supabase/supabase-js";

export async function GET() {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const {data: ops} = await supabase
		.from("operators")
		.select("code")
		.eq("active", true);

	const urls = (ops || []).map(
		o => `<url><loc>https://relayrepaycalc.co.uk/operators/${o.code}</loc></url>`
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://relayrepaycalc.co.uk/</loc></url>
  ${urls.join("\n")}
</urlset>`;

	return new NextResponse(xml, {
		headers: {"Content-Type": "application/xml"}
	});
}
