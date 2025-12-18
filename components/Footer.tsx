"use client";

import Link from "next/link";
import { domainNameWithoutHTTPS } from "@/app/Constants";

export default function Footer() {
        return (
                <footer className="mt-12 border-t border-base-300 bg-base-100">
                        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-start md:justify-between">
                                <div className="space-y-2 text-sm text-base-content/80">
                                        <p className="font-semibold text-base-content">{domainNameWithoutHTTPS}</p>
                                        <p>Independent UK site providing Delay Repay guidance and estimates.</p>
                                        <p className="text-xs text-base-content/70">Guidance only. Final decisions rest with train operators.</p>
                                        <p className="text-xs text-base-content/70">Independent information site. Not affiliated with any train operator or government body.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
                                        <div className="space-y-2">
                                                <h3 className="font-semibold text-base-content">Information</h3>
                                                <ul className="space-y-1">
                                                        <li><Link href="/about" className="link link-hover">About</Link></li>
                                                        <li><Link href="/contact" className="link link-hover">Contact</Link></li>
                                                        <li><Link href="/operators" className="link link-hover">Operators</Link></li>
                                                </ul>
                                        </div>
                                        <div className="space-y-2">
                                                <h3 className="font-semibold text-base-content">Policies</h3>
                                                <ul className="space-y-1">
                                                        <li><Link href="/privacy" className="link link-hover">Privacy Policy</Link></li>
                                                        <li><Link href="/cookies" className="link link-hover">Cookie Policy</Link></li>
                                                        <li><Link href="/legal" className="link link-hover">Disclaimer</Link></li>
                                                </ul>
                                        </div>
                                        <div className="space-y-2">
                                                <h3 className="font-semibold text-base-content">Tools</h3>
                                                <ul className="space-y-1">
                                                        <li><Link href="/" className="link link-hover">Delay Repay calculator</Link></li>
                                                        <li><Link href="/delay-repay-explained" className="link link-hover">How Delay Repay works</Link></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                        <div className="border-t border-base-300 bg-base-200 px-4 py-4 text-center text-xs text-base-content/70">
                                © {new Date().getFullYear()} {domainNameWithoutHTTPS}. Independent and unaffiliated with train operating companies.
                        </div>
                </footer>
        );
}
