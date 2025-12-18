import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import { domainNameWithHTTPS } from "@/app/Constants";
import Script from "next/script";

export const metadata: Metadata = {
        title: "Delay Repay Calculator | UK Rail Compensation",
        description: "Independent UK Delay Repay calculator with guidance on operators, season tickets, cancellations, and claim steps.",
        metadataBase: new URL(domainNameWithHTTPS),
        alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
        return (
                <html lang="en-GB" data-theme="railAuthority">
                        <head>
                                <Script
                                        id="fc"
                                        strategy="beforeInteractive"
                                        src={`https://fundingchoicesmessages.google.com/i/pub-3326383816496310?ers=1`}
                                />
                                <Script id="fc-present" strategy="beforeInteractive">
                                        {`(function(){function s(){if(!window.frames['googlefcPresent']){if(document.body){const i=document.createElement('iframe');i.style='width:0;height:0;border:0;display:none';i.name='googlefcPresent';document.body.appendChild(i);}else{setTimeout(s,0);}}}s();})();`}
                                </Script>

                                <Script
                                        id="adsbygoogle"
                                        strategy="afterInteractive"
                                        async
                                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3326383816496310"
                                        crossOrigin="anonymous"
                                />
                        </head>
                        <body className="min-h-screen bg-base-200 text-base-content font-sans antialiased flex flex-col">
                                <header className="bg-primary text-primary-content shadow">
                                        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                                                <div className="text-xl font-semibold tracking-tight">
                                                        <Link href="/" className="no-underline text-primary-content">
                                                                Delay Repay Calculator
                                                        </Link>
                                                </div>
                                                <nav className="flex flex-wrap items-center gap-4 text-sm">
                                                        <Link className="link link-hover text-primary-content" href="/">Home</Link>
                                                        <Link className="link link-hover text-primary-content" href="/delay-repay-explained">Delay Repay guide</Link>
                                                        <Link className="link link-hover text-primary-content" href="/operators">Operators</Link>
                                                        <Link className="link link-hover text-primary-content" href="/delay-repay-season-tickets">Season tickets</Link>
                                                        <Link className="link link-hover text-primary-content" href="/about">About</Link>
                                                </nav>
                                        </div>
                                </header>
                                <main className="flex-1">
                                        <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
                                                {children}
                                        </div>
                                </main>
                                <Footer />
                        </body>
                </html>
        );
}
