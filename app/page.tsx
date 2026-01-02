import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Link from "next/link";
import Image from "next/image";

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
                        <section className="relative isolate overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm">
                                <Image
                                        alt="UK passenger train at a station platform"
                                        className="object-cover"
                                        fill
                                        priority
                                        sizes="(min-width: 1280px) 1200px, 100vw"
                                        src="/pexels-robert-roberts-2158500590-35432879.jpg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/40" />
                                <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-center gap-6 px-6 py-14 md:px-10">
                                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">Independent UK guide</p>
                                        <h2 className="text-3xl font-bold leading-tight md:text-4xl">Official Delay Repay Calculator for UK Train Delays</h2>
                                        <p className="max-w-2xl text-lg leading-relaxed text-slate-100">
                                                Get an instant estimate for compensation on delayed or cancelled UK train journeys. Check eligibility, understand the bands, and jump straight to the calculator with confidence.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                                <a className="btn btn-primary" href="#calculator">Calculate compensation</a>
                                                <Link className="btn btn-ghost border border-white/30 text-white hover:border-white" href="/delay-repay-explained">
                                                        Learn how Delay Repay works
                                                </Link>
                                        </div>
                                        <p className="text-xs text-slate-200/80">
                                                Photo by {" "}
                                                <a className="underline" href="https://www.pexels.com/photo/red-train-at-birmingham-new-street-station-35432879/" rel="noopener noreferrer" target="_blank">
                                                        Robert Roberts (Pexels)
                                                </a>
                                        </p>
                                </div>
                        </section>

                        <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
                                <div className="space-y-4">
                                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Independent UK guide</p>
                                        <h1 className="text-4xl font-bold leading-tight text-slate-900">Delay Repay Calculator</h1>
                                        <p className="text-lg leading-relaxed text-slate-700">
                                                Check how much Delay Repay you might receive for a delayed or cancelled UK rail journey. The calculator uses published operator policies and converts season tickets to a per-journey value so you can claim with confidence.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                                <a className="btn btn-primary" href="#calculator">Estimate your Delay Repay</a>
                                                <Link className="btn btn-outline" href="/delay-repay-explained">Learn how Delay Repay works</Link>
                                        </div>
                                        <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-700">
                                                <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-800">Used by UK rail passengers</span>
                                                <span className="rounded-full bg-green-50 px-3 py-1 text-green-800">Based on published operator policies</span>
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">Independent and unaffiliated</span>
                                        </div>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-6 text-sm leading-relaxed text-slate-800">
                                        <h2 className="text-xl font-semibold text-slate-900">What this page is for</h2>
                                        <p className="mt-2">
                                                Delay Repay is a consumer compensation scheme. This site keeps the calculator front and centre, but also provides plain-English guidance on the process, evidence, and time limits so you can submit a complete claim to your train operator.
                                        </p>
                                        <ul className="mt-4 list-disc space-y-2 pl-5">
                                                <li>Fast estimate in pounds, before you visit the operator claim form</li>
                                                <li>Operator differences highlighted so you know when rules change</li>
                                                <li>Links to deeper guides on season tickets, missed connections, and cancellations</li>
                                        </ul>
                                        <p className="mt-4 text-xs text-slate-600">Guidance only. Final decisions rest with the operator after they review your evidence.</p>
                                </div>
                        </section>

                        <section id="calculator" className="space-y-6">
                                <div className="space-y-3">
                                        <h2 className="text-2xl font-semibold text-slate-900">Estimate your Delay Repay</h2>
                                        <p className="text-slate-700">
                                                Enter the ticket price, ticket type, operator, and delay length. The estimator applies the operator’s published percentages. For season products we convert to a per-journey figure before applying the band.
                                        </p>
                                </div>
                                <Calculator preselectedOperatorCode={operatorFromUrl} />
                                <p className="text-sm text-slate-600">Results are indicative only. Your train operator confirms eligibility and the final payment.</p>
                        </section>

                        <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-3">
                                <div className="space-y-2">
                                        <h2 className="text-xl font-semibold text-slate-900">How Delay Repay works</h2>
                                        <p className="text-slate-700">Quick overview before you claim. Full details are in the dedicated guide.</p>
                                        <Link className="text-blue-700 underline" href="/delay-repay-explained">Read the full Delay Repay guide</Link>
                                </div>
                                <div className="md:col-span-2">
                                        <ol className="grid gap-4 md:grid-cols-2">
                                                <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                                        <p className="text-sm font-semibold text-blue-800">Step 1</p>
                                                        <p className="font-medium text-slate-900">Check your eligibility</p>
                                                        <p className="mt-2 text-sm text-slate-700">Most operators pay from 15 minutes of delay. Confirm your operator participates and whether they have any exclusions for your ticket type.</p>
                                                </li>
                                                <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                                        <p className="text-sm font-semibold text-blue-800">Step 2</p>
                                                        <p className="font-medium text-slate-900">Gather evidence</p>
                                                        <p className="mt-2 text-sm text-slate-700">Keep your ticket or booking confirmation and note the actual arrival time. Photos of station boards or app notifications are useful.</p>
                                                </li>
                                                <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                                        <p className="text-sm font-semibold text-blue-800">Step 3</p>
                                                        <p className="font-medium text-slate-900">Use the calculator</p>
                                                        <p className="mt-2 text-sm text-slate-700">Select operator, ticket, and delay band to see the indicative payout in pounds. We highlight when an operator uses different bands.</p>
                                                </li>
                                                <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                                        <p className="text-sm font-semibold text-blue-800">Step 4</p>
                                                        <p className="font-medium text-slate-900">Submit the claim</p>
                                                        <p className="mt-2 text-sm text-slate-700">Follow the link to the official operator form. Upload evidence, check the time limit, and keep a copy of your submission for reference.</p>
                                                </li>
                                        </ol>
                                </div>
                        </section>

                        <section className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
                                <div className="space-y-3">
                                        <h2 className="text-2xl font-semibold text-slate-900">Who can claim and common scenarios</h2>
                                        <p className="text-slate-700">Delay Repay covers most ticket types when the train is delayed or cancelled. These guides explain the nuances.</p>
                                </div>
                                <div className="grid gap-3">
                                        <Link className="flex items-start justify-between rounded border border-slate-200 p-4 hover:bg-slate-50" href="/delay-repay-season-tickets">
                                                <div>
                                                        <p className="font-semibold text-slate-900">Season tickets</p>
                                                        <p className="text-sm text-slate-700">Weekly, monthly, annual, and flexi products converted to per-journey estimates.</p>
                                                </div>
                                                <span className="text-blue-700">Read guide</span>
                                        </Link>
                                        <Link className="flex items-start justify-between rounded border border-slate-200 p-4 hover:bg-slate-50" href="/delay-repay-cancelled-trains">
                                                <div>
                                                        <p className="font-semibold text-slate-900">Cancelled trains</p>
                                                        <p className="text-sm text-slate-700">What happens when the service never runs or you are advised not to travel.</p>
                                                </div>
                                                <span className="text-blue-700">Read guide</span>
                                        </Link>
                                        <Link className="flex items-start justify-between rounded border border-slate-200 p-4 hover:bg-slate-50" href="/delay-repay-missed-connections">
                                                <div>
                                                        <p className="font-semibold text-slate-900">Missed connections</p>
                                                        <p className="text-sm text-slate-700">How delay is measured to the final destination and what evidence to include.</p>
                                                </div>
                                                <span className="text-blue-700">Read guide</span>
                                        </Link>
                                        <Link className="flex items-start justify-between rounded border border-slate-200 p-4 hover:bg-slate-50" href="/delay-repay-claim-time-limits">
                                                <div>
                                                        <p className="font-semibold text-slate-900">Claim time limits</p>
                                                        <p className="text-sm text-slate-700">Typical submission windows and what to do if you are close to the deadline.</p>
                                                </div>
                                                <span className="text-blue-700">Read guide</span>
                                        </Link>
                                </div>
                        </section>

                        <section className="space-y-4">
                                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                        <div>
                                                <h2 className="text-2xl font-semibold text-slate-900">Operator coverage</h2>
                                                <p className="text-slate-700">Rules are set by each train company. Start with these major operators or browse the full list.</p>
                                        </div>
                                        <Link className="text-blue-700 underline" href="/operators">See all operators</Link>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                        <Link className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300" href="/delay-repay-avanti">
                                                <p className="font-semibold text-slate-900">Avanti West Coast</p>
                                                <p className="text-sm text-slate-700">Long-distance West Coast services.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300" href="/delay-repay-gwr">
                                                <p className="font-semibold text-slate-900">Great Western Railway</p>
                                                <p className="text-sm text-slate-700">Intercity and regional routes in the West and Wales.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300" href="/delay-repay-lner">
                                                <p className="font-semibold text-slate-900">LNER</p>
                                                <p className="text-sm text-slate-700">East Coast Main Line services.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300" href="/delay-repay-northern">
                                                <p className="font-semibold text-slate-900">Northern</p>
                                                <p className="text-sm text-slate-700">Local and regional services across the North.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300" href="/delay-repay-southern">
                                                <p className="font-semibold text-slate-900">Southern</p>
                                                <p className="text-sm text-slate-700">Commuter and airport services in the South East.</p>
                                        </Link>
                                        <Link className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300" href="/delay-repay-explained">
                                                <p className="font-semibold text-slate-900">All operator guidance</p>
                                                <p className="text-sm text-slate-700">Understand how policies differ before you submit.</p>
                                        </Link>
                                </div>
                        </section>

                        <Faq />
                </main>
        );
}
