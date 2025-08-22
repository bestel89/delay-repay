import {NextResponse} from "next/server";
import {domainNameWithHTTPS} from "@/app/Constants";

export async function GET() {
	return new NextResponse(
	`User-agent: *
Allow: /
Sitemap: ${domainNameWithHTTPS}/sitemap.xml
`, {
			headers: {
				"Content-Type": "text/plain"
			}
		})
}