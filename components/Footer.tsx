"use client";

import Link from "next/link";
import { domainNameWithoutHTTPS } from "@/app/Constants";
import { routes, utilityLinks } from "@/lib/nav";

export default function Footer() {
        const infoLinks = utilityLinks.filter((link) => ["About", "Contact"].includes(link.label));
        const policyLinks = utilityLinks.filter((link) => ["Privacy", "Cookies", "Legal"].includes(link.label));

        return (
                <footer className="mt-12 border-t border-slate-200 bg-white">
                        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-start md:justify-between">
                                <div className="space-y-2 text-sm text-slate-700">
                                        <p className="font-semibold text-slate-900">{domainNameWithoutHTTPS}</p>
                                        <p>Independent UK site providing Delay Repay guidance and estimates.</p>
                                        <p className="text-xs text-slate-500">Guidance only. Final decisions rest with train operators.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
                                        <div className="space-y-2">
                                                <h3 className="font-semibold text-slate-900">Information</h3>
                                                <ul className="space-y-1">
                                                        {infoLinks.map((link) => (
                                                                <li key={link.href}>
                                                                        <Link href={link.href} className="hover:underline">
                                                                                {link.label}
                                                                        </Link>
                                                                </li>
                                                        ))}
                                                        <li><Link href={routes.operators} className="hover:underline">Operators</Link></li>
                                                </ul>
                                        </div>
                                        <div className="space-y-2">
                                                <h3 className="font-semibold text-slate-900">Policies</h3>
                                                <ul className="space-y-1">
                                                        {policyLinks.map((link) => (
                                                                <li key={link.href}>
                                                                        <Link href={link.href} className="hover:underline">
                                                                                {link.label === "Privacy" ? "Privacy Policy" : link.label === "Cookies" ? "Cookie Policy" : link.label === "Legal" ? "Disclaimer" : link.label}
                                                                        </Link>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                        <div className="space-y-2">
                                                <h3 className="font-semibold text-slate-900">Tools</h3>
                                                <ul className="space-y-1">
                                                        <li><Link href={routes.home} className="hover:underline">Delay Repay calculator</Link></li>
                                                        <li><Link href={routes.delayRepayExplained} className="hover:underline">How Delay Repay works</Link></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                        <div className="border-t border-slate-200 bg-slate-100 px-4 py-4 text-center text-xs text-slate-600">
                                © {new Date().getFullYear()} {domainNameWithoutHTTPS}. Independent and unaffiliated with train operating companies.
                        </div>
                </footer>
        );
}
