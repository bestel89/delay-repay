import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
        title: "Delay Repay Calculator | Estimate UK train compensation",
        description: "Estimate UK Delay Repay in pounds for your train delay. Independent guidance for season tickets, cancellations, and major operators.",
        alternates: { canonical: "/" },
};

type PageProps = {
        searchParams?: { operator?: string };
};

export default function Page({ searchParams }: PageProps) {
        const operatorFromUrl = searchParams?.operator;

        return (
                <main className="space-y-16">
                        <section className="grid gap-8 rounded-2xl bg-base-100 p-8 shadow-sm border border-base-300 md:grid-cols-2">
                                <div className="space-y-4">
                                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Independent UK guide</p>
                                        <h1 className="text-4xl font-semibold leading-tight text-base-content">Delay Repay Calculator</h1>
                                        <p className="text-lg leading-relaxed text-base-content/80">
                                                Check how much Delay Repay you might receive for a delayed or cancelled UK rail journey. The calculator uses published operator policies and converts season tickets to a per-journey value so you can claim with confidence.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                                <a className="btn btn-accent" href="#calculator">Estimate your Delay Repay</a>
                                                <Link className="btn btn-secondary" href="/delay-repay-explained">Learn how Delay Repay works</Link>
                                        </div>
                                        <div className="flex flex-wrap gap-3 pt-4 text-sm">
                                                <span className="badge badge-outline badge-primary">Used by UK rail passengers</span>
                                                <span className="badge badge-outline badge-secondary">Based on published operator policies</span>
                                                <span className="badge badge-outline">Independent and unaffiliated</span>
                                        </div>
                                </div>
                                <div className="rounded-xl bg-base-200 p-6 text-sm leading-relaxed text-base-content/80">
                                        <h2 className="text-xl font-semibold text-base-content">What this page is for</h2>
                                        <p className="mt-2">
                                                Delay Repay is a consumer compensation scheme. This site keeps the calculator front and centre, but also provides plain-English guidance on the process, evidence, and time limits so you can submit a complete claim to your train operator.
                                        </p>
                                        <ul className="mt-4 list-disc space-y-2 pl-5">
                                                <li>Fast estimate in pounds, before you visit the operator claim form</li>
                                                <li>Operator differences highlighted so you know when rules change</li>
                                                <li>Links to deeper guides on season tickets, missed connections, and cancellations</li>
                                        </ul>
                                        <p className="mt-4 text-xs text-base-content/70">Guidance only. Final decisions rest with the operator after they review your evidence.</p>
                                </div>
                        </section>

                        <section id="calculator" className="space-y-6">
                                <div className="space-y-3">
                                        <h2 className="text-2xl font-semibold text-base-content">Estimate your Delay Repay</h2>
                                        <p className="text-base-content/80">
                                                Enter the ticket price, ticket type, operator, and delay length. The estimator applies the operator’s published percentages. For season products we convert to a per-journey figure before applying the band.
                                        </p>
                                </div>
                                <Calculator preselectedOperatorCode={operatorFromUrl} />
                                <p className="text-sm text-base-content/70">Results are indicative only. Your train operator confirms eligibility and the final payment.</p>
                        </section>

                        <section className="grid gap-8 rounded-2xl bg-base-100 p-8 shadow-sm border border-base-300 md:grid-cols-3">
                                <div className="space-y-2">
                                        <h2 className="text-xl font-semibold text-base-content">How Delay Repay works</h2>
                                        <p className="text-base-content/80">Quick overview before you claim. Full details are in the dedicated guide.</p>
                                        <Link className="link link-hover text-info" href="/delay-repay-explained">Read the full Delay Repay guide</Link>
                                </div>
                                <div className="md:col-span-2">
                                        <ol className="grid gap-4 md:grid-cols-2">
                                                <li className="rounded-lg border border-base-300 bg-base-200 p-4">
                                                        <p className="text-sm font-semibold text-primary">Step 1</p>
                                                        <p className="font-medium text-base-content">Check your eligibility</p>
                                                        <p className="mt-2 text-sm text-base-content/80">Most operators pay from 15 minutes of delay. Confirm your operator participates and whether they have any exclusions for your ticket type.</p>
                                                </li>
                                                <li className="rounded-lg border border-base-300 bg-base-200 p-4">
                                                        <p className="text-sm font-semibold text-primary">Step 2</p>
                                                        <p className="font-medium text-base-content">Gather evidence</p>
                                                        <p className="mt-2 text-sm text-base-content/80">Keep your ticket or booking confirmation and note the actual arrival time. Photos of station boards or app notifications are useful.</p>
                                                </li>
                                                <li className="rounded-lg border border-base-300 bg-base-200 p-4">
                                                        <p className="text-sm font-semibold text-primary">Step 3</p>
                                                        <p className="font-medium text-base-content">Use the calculator</p>
                                                        <p className="mt-2 text-sm text-base-content/80">Select operator, ticket, and delay band to see the indicative payout in pounds. We highlight when an operator uses different bands.</p>
                                                </li>
                                                <li className="rounded-lg border border-base-300 bg-base-200 p-4">
                                                        <p className="text-sm font-semibold text-primary">Step 4</p>
                                                        <p className="font-medium text-base-content">Submit the claim</p>
                                                        <p className="mt-2 text-sm text-base-content/80">Follow the link to the operator form. Upload evidence, check the time limit, and keep a copy of your submission for reference.</p>
                                                </li>
                                        </ol>
                                </div>
                        </section>

                        <section className="grid gap-8 rounded-2xl bg-base-100 p-8 shadow-sm border border-base-300 md:grid-cols-2">
                                <div className="space-y-3">
                                        <h2 className="text-2xl font-semibold text-base-content">Who can claim and common scenarios</h2>
                                        <p className="text-base-content/80">Delay Repay covers most ticket types when the train is delayed or cancelled. These guides explain the nuances.</p>
                                </div>
                                <div className="grid gap-3">
                                        <Link className="flex items-start justify-between rounded border border-base-300 p-4 hover:bg-base-200" href="/delay-repay-season-tickets">
                                                <div>
                                                        <p className="font-semibold text-base-content">Season tickets</p>
                                                        <p className="text-sm text-base-content/80">Weekly, monthly, annual, and flexi products converted to per-journey estimates.</p>
                                                </div>
                                                <span className="text-info">Read guide</span>
                                        </Link>
                                        <Link className="flex items-start justify-between rounded border border-base-300 p-4 hover:bg-base-200" href="/delay-repay-cancelled-trains">
                                                <div>
                                                        <p className="font-semibold text-base-content">Cancelled trains</p>
                                                        <p className="text-sm text-base-content/80">What happens when the service never runs or you are advised not to travel.</p>
                                                </div>
                                                <span className="text-info">Read guide</span>
                                        </Link>
                                        <Link className="flex items-start justify-between rounded border border-base-300 p-4 hover:bg-base-200" href="/delay-repay-missed-connections">
                                                <div>
                                                        <p className="font-semibold text-base-content">Missed connections</p>
                                                        <p className="text-sm text-base-content/80">How delay is measured to the final destination and what evidence to include.</p>
                                                </div>
                                                <span className="text-info">Read guide</span>
                                        </Link>
                                        <Link className="flex items-start justify-between rounded border border-base-300 p-4 hover:bg-base-200" href="/delay-repay-claim-time-limits">
                                                <div>
                                                        <p className="font-semibold text-base-content">Claim time limits</p>
                                                        <p className="text-sm text-base-content/80">Typical submission windows and what to do if you are close to the deadline.</p>
                                                </div>
                                                <span className="text-info">Read guide</span>
                                        </Link>
                                </div>
                        </section>

                        <section className="space-y-4">
                                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                        <div>
                                                <h2 className="text-2xl font-semibold text-base-content">Operator coverage</h2>
                                                <p className="text-base-content/80">Rules are set by each train company. Start with these major operators or browse the full list.</p>
                                        </div>
                                        <Link className="link link-hover text-info" href="/operators">See all operators</Link>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                        <Link className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm hover:border-info" href="/delay-repay-avanti">
                                                <p className="font-semibold text-base-content">Avanti West Coast</p>
                                                <p className="text-sm text-base-content/80">Long-distance West Coast services.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm hover:border-info" href="/delay-repay-gwr">
                                                <p className="font-semibold text-base-content">Great Western Railway</p>
                                                <p className="text-sm text-base-content/80">Intercity and regional routes in the West and Wales.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm hover:border-info" href="/delay-repay-lner">
                                                <p className="font-semibold text-base-content">LNER</p>
                                                <p className="text-sm text-base-content/80">East Coast Main Line services.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm hover:border-info" href="/delay-repay-northern">
                                                <p className="font-semibold text-base-content">Northern</p>
                                                <p className="text-sm text-base-content/80">Local and regional services across the North.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm hover:border-info" href="/delay-repay-southern">
                                                <p className="font-semibold text-base-content">Southern</p>
                                                <p className="text-sm text-base-content/80">Commuter and airport services in the South East.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm hover:border-info" href="/delay-repay-explained">
                                                <p className="font-semibold text-base-content">All operator guidance</p>
                                                <p className="text-sm text-base-content/80">Understand how policies differ before you submit.</p>
                                        </Link>
                                </div>
                        </section>

                        <Faq />
                </main>
        );
}
