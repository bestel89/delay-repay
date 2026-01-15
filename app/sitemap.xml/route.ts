import { NextResponse } from "next/server";
import { domainNameWithHTTPS } from "../Constants";
import { supabaseServer } from "@/lib/supabase.server";

type Operator = {
        updated_at: string | null;
        active: boolean;
};

type SitemapEntry = {
        loc: string;
        lastmod: string;
        changefreq?: "daily" | "weekly" | "monthly" | "yearly";
        priority?: number;
};

export async function GET() {
        const supabase = supabaseServer();

        // Only fetch what we need
        const { data } = await supabase
                .from("operators")
                .select("updated_at,active")
                .eq("active", true);

        // Compute lastmod for operator pages from most recent operator update
        const nowIso = new Date().toISOString();
        const latestMs = (data ?? [])
                .map((o: Operator) => (o.updated_at ? Date.parse(o.updated_at) : 0))
                .reduce((max, v) => (v > max ? v : max), 0);
        const operatorsLastMod = latestMs ? new Date(latestMs).toISOString() : nowIso;

	const guides: SitemapEntry[] = [
		{ loc: `${domainNameWithHTTPS}/delay-repay-bands`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/delay-repay-explained`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/delay-repay-season-tickets`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/delay-repay-claim-time-limits`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/delay-repay-cancelled-trains`, lastmod: nowIso },
		{ loc: `${domainNameWithHTTPS}/delay-repay-missed-connections`, lastmod: nowIso },
	].map((entry) => ({ ...entry, changefreq: "monthly", priority: 0.8 }));

        const operators: SitemapEntry[] = [
                { loc: `${domainNameWithHTTPS}/operators`, lastmod: operatorsLastMod },
                { loc: `${domainNameWithHTTPS}/delay-repay-avanti`, lastmod: operatorsLastMod },
                { loc: `${domainNameWithHTTPS}/delay-repay-gwr`, lastmod: operatorsLastMod },
                { loc: `${domainNameWithHTTPS}/delay-repay-lner`, lastmod: operatorsLastMod },
                { loc: `${domainNameWithHTTPS}/delay-repay-northern`, lastmod: operatorsLastMod },
                { loc: `${domainNameWithHTTPS}/delay-repay-southern`, lastmod: operatorsLastMod },
        ].map((entry) => ({ ...entry, changefreq: "monthly", priority: 0.8 }));

        const utilityPages: SitemapEntry[] = [
                { loc: `${domainNameWithHTTPS}/about`, lastmod: nowIso, priority: 0.5 },
                { loc: `${domainNameWithHTTPS}/contact`, lastmod: nowIso, priority: 0.5 },
                { loc: `${domainNameWithHTTPS}/privacy`, lastmod: nowIso, priority: 0.3 },
                { loc: `${domainNameWithHTTPS}/cookies`, lastmod: nowIso, priority: 0.3 },
                { loc: `${domainNameWithHTTPS}/legal`, lastmod: nowIso, priority: 0.3 },
        ].map((entry) => ({ ...entry, changefreq: "yearly" }));

        const urls: SitemapEntry[] = [
                { loc: `${domainNameWithHTTPS}/`, lastmod: nowIso, changefreq: "weekly", priority: 1.0 },
                ...guides,
                ...operators,
                ...utilityPages,
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
                (u) =>
                        `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod>${u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : ""}${
                                u.priority !== undefined ? `<priority>${u.priority.toFixed(1)}</priority>` : ""
                        }</url>`
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
