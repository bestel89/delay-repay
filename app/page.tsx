import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
        title: "Delay Repay Calculator – Check UK Train Delay Compensation",
        description: "Use our Delay Repay calculator to estimate UK train delay compensation in minutes. Learn arrival-time bands, ticket types, and the refund you could claim.",
        alternates: { canonical: "/" },
};

type PageProps = {
        searchParams?: { operator?: string };
};

export default function Page({ searchParams }: PageProps) {
        const operatorFromUrl = searchParams?.operator && ["northern", "avanti"].includes(searchParams.operator)
                ? searchParams.operator
                : undefined;

        return (
                <main className="space-y-12">
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
                                <div className="relative mx-auto flex min-h-[32vh] max-w-6xl flex-col justify-center gap-5 px-6 py-12 md:min-h-[38vh] md:px-10">
                                        <h1 className="text-3xl font-bold leading-tight md:text-4xl">UK Train Delay Repay Calculator</h1>
                                        <p className="max-w-2xl text-lg leading-relaxed text-slate-100">
                                                Check UK train delay compensation instantly with our quick Delay Repay calculator.
                                        </p>
                                        <a className="btn btn-primary w-fit" href="#calculator">Calculate compensation</a>
                                        <p className="text-xs text-slate-200/80">
                                                Photo by {" "}
                                                <a className="underline" href="https://www.pexels.com/photo/red-train-at-birmingham-new-street-station-35432879/" rel="noopener noreferrer" target="_blank">
                                                        Robert Roberts (Pexels)
                                                </a>
                                        </p>
                                </div>
                        </section>

                        <section id="calculator" className="space-y-6">
                                <div className="space-y-3">
                                        <h2 className="text-2xl font-semibold text-slate-900">Estimate your Delay Repay</h2>
                                        <p className="text-slate-700">
                                                Enter the ticket price, ticket type, operator, and delay length. The estimator applies the operator’s published percentages. For season products we convert to a per-journey figure before applying the band.
                                        </p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
                                        <div className="space-y-3 text-slate-700">
                                                <h3 className="text-lg font-semibold text-slate-900">How is delay repay calculated?</h3>
                                                <p>
                                                        Delay Repay is based on your arrival delay, with operators paying a fare percentage once you cross bands like 15, 30, or 60 minutes. Season and Advance tickets can differ, so use the calculator for an estimate then read{" "}
                                                        <Link className="text-blue-700 underline" href="/delay-repay-explained">
                                                                how Delay Repay works
                                                        </Link>.
                                                </p>
                                                <ul className="list-disc space-y-2 pl-5">
                                                        <li>Delay bands often start at 15 or 30 minutes late.</li>
                                                        <li>Compensation is usually a percentage of the single fare paid.</li>
                                                        <li>Return tickets are calculated per affected leg of travel.</li>
                                                        <li>Delays are measured to your final destination, not departure time.</li>
                                                        <li>Keep tickets or booking confirmations plus proof of actual arrival.</li>
                                                </ul>
                                        </div>
                                </div>
                                <Calculator preselectedOperatorCode={operatorFromUrl} />
                                <p className="text-sm text-slate-600">Results are indicative only. Your train operator confirms eligibility and the final payment.</p>
                        </section>

                        <section className="rounded-2xl bg-white p-6 shadow-sm">
                                <h2 className="text-2xl font-semibold text-slate-900">Common scenarios</h2>
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                        <li>
                                                <Link className="text-blue-700 underline" href="/delay-repay-season-tickets">Season tickets</Link>
                                        </li>
                                        <li>
                                                <Link className="text-blue-700 underline" href="/delay-repay-cancelled-trains">Cancelled trains</Link>
                                        </li>
                                        <li>
                                                <Link className="text-blue-700 underline" href="/delay-repay-missed-connections">Missed connections</Link>
                                        </li>
                                </ul>
                        </section>

                        <section className="rounded-2xl bg-white p-6 shadow-sm">
                                <p className="text-slate-700">
                                        Looking for operator-specific rules?{" "}
                                        <Link className="text-blue-700 underline" href="/operators">Browse all operators</Link>.
                                </p>
                        </section>

                        <section className="rounded-2xl bg-white p-6 shadow-sm">
                                <h2 className="text-2xl font-semibold text-slate-900">FAQ (quick)</h2>
                                <div className="mt-4 space-y-4 text-slate-700">
                                        <div>
                                                <h3 className="text-lg font-semibold text-slate-900">When can I claim Delay Repay?</h3>
                                                <p>You can claim once your train arrives late and the delay meets your operator’s threshold.</p>
                                        </div>
                                        <div>
                                                <h3 className="text-lg font-semibold text-slate-900">What evidence do I need?</h3>
                                                <p>Keep your ticket or booking confirmation and note the actual arrival time.</p>
                                        </div>
                                        <div>
                                                <h3 className="text-lg font-semibold text-slate-900">How long do I have to claim?</h3>
                                                <p>Most operators allow a window of weeks or months after travel; check yours.</p>
                                        </div>
                                </div>
                                <p className="mt-4 text-slate-700">
                                        For full details, see{" "}
                                        <Link className="text-blue-700 underline" href="/delay-repay-explained">
                                                how Delay Repay works
                                        </Link>.
                                </p>
                        </section>
                </main>
        );
}
