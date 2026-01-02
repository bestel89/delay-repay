import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOperatorBySlug } from "@/lib/operators";
import CalculatorCallout from "@/components/CalculatorCallout";

type PageProps = {
        params: { slug: string };
};

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
        const operator = getOperatorBySlug(params.slug);

        if (!operator) {
            return {
                title: "Delay Repay Calculator | DelayRepayCalc",
                description: "Find operator-specific Delay Repay guidance and estimate UK train compensation.",
                alternates: { canonical: `/operators/${params.slug}` },
            };
        }

        return {
                title: `${operator.name} Delay Repay Calculator | DelayRepayCalc`,
                description: `Estimate ${operator.name} Delay Repay with operator-specific thresholds, examples, evidence checklists, and FAQs.`,
                alternates: { canonical: `/operators/${operator.slug}` },
        };
}

export default function OperatorLandingPage({ params }: PageProps) {
        const operator = getOperatorBySlug(params.slug);

        if (!operator) {
                notFound();
        }

        const isNorthern = operator.slug === "northern";
        const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: operator.faqs.map((faq) => ({
                        "@type": "Question",
                        name: faq.question,
                        acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                        },
                })),
        };

        const calculatorLink = `/?operator=${encodeURIComponent(operator.operatorCode)}`;

        return (
                <main>
                        <article className="prose max-w-none">
                                <h1>{operator.name} Delay Repay Calculator</h1>
                                <p>
                                        Use the{" "}
                                        <Link href="/" className="underline">
                                                delay repay calculator
                                        </Link>{" "}
                                        to estimate compensation for {operator.name} before opening the official claim form.{" "}
                                        {isNorthern ? (
                                                <>
                                                        This{" "}
                                                        <Link href="/operators/northern" className="underline">
                                                                northern rail delay repay calculator
                                                        </Link>{" "}
                                                        keeps Northern pre-selected and routes you straight into the estimation flow.
                                                </>
                                        ) : (
                                                <>
                                                        If you travel on Northern as well, the{" "}
                                                        <Link href="/operators/northern" className="underline">
                                                                northern rail delay repay calculator
                                                        </Link>{" "}
                                                        keeps that operator pre-selected so you can move quickly between routes.
                                                </>
                                        )}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                        <Link className="btn btn-primary" href={calculatorLink}>
                                                Calculate my Delay Repay
                                        </Link>
                                        <a className="btn btn-outline" href={operator.claimUrl} target="_blank" rel="noopener noreferrer">
                                                Official claim page
                                        </a>
                                </div>

                                <section>
                                        <h2>How {operator.name} Delay Repay works</h2>
                                        <p>{operator.intro}</p>
                                        <p>
                                                Start with the calculator using the operator pre-selected, then follow the claim link if the estimate looks right. The calculator mirrors published bands and converts season tickets to per-journey values so you have a realistic figure before submitting.
                                        </p>
                                        <CalculatorCallout variant={operator.slug === "northern" ? "northern" : "default"} />
                                </section>

                                <section>
                                        <h2>Compensation thresholds</h2>
                                        <div className="grid gap-4 md:grid-cols-2">
                                                {operator.thresholds.map((item) => (
                                                        <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm">
                                                                <p className="m-0 text-sm font-semibold text-blue-800">{item.label}</p>
                                                                <p className="mt-2 text-slate-800">{item.detail}</p>
                                                        </div>
                                                ))}
                                        </div>
                                        <p className="text-sm text-slate-600">
                                                Most UK operators use Delay Repay 15 (bands from 15 minutes). Always check the official form for any temporary changes during disruption.
                                        </p>
                                </section>

                                <section>
                                        <h2>Examples</h2>
                                        <div className="grid gap-4 md:grid-cols-3">
                                                {operator.examples.map((example) => (
                                                        <div key={example.title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                                                                <p className="m-0 text-sm font-semibold text-blue-800">{example.title}</p>
                                                                <p className="mt-2 text-slate-800">{example.description}</p>
                                                        </div>
                                                ))}
                                        </div>
                                        <p className="text-sm text-slate-600">
                                                Figures are illustrative and based on commonly published Delay Repay 15 percentages. Your operator&apos;s final decision may differ after reviewing evidence.
                                        </p>
                                </section>

                                <section>
                                        <h2>What you need to claim</h2>
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                                <p className="font-semibold text-slate-900">Evidence checklist</p>
                                                <ul>
                                                        {operator.evidenceChecklist.map((item) => (
                                                                <li key={item}>{item}</li>
                                                        ))}
                                                </ul>
                                                <p className="text-slate-800">
                                                        Claim window: {operator.claimWindow}
                                                </p>
                                                <p className="text-slate-800">Railcard and season ticket notes: {operator.railcardNotes}</p>
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                        <Link className="btn btn-primary btn-sm md:btn-md" href={calculatorLink}>
                                                                Estimate with the calculator
                                                        </Link>
                                                        <Link className="btn btn-outline btn-sm md:btn-md" href="/delay-repay-explained">
                                                                How Delay Repay works
                                                        </Link>
                                                        <Link className="btn btn-outline btn-sm md:btn-md" href="/delay-repay-claim-time-limits">
                                                                Check claim time limits
                                                        </Link>
                                                </div>
                                        </div>
                                </section>

                                <section>
                                        <h2>FAQs</h2>
                                        <div className="space-y-4">
                                                {operator.faqs.map((faq) => (
                                                        <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                                                                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                                                                        {faq.question}
                                                                </summary>
                                                                <p className="mt-2 text-slate-800">{faq.answer}</p>
                                                        </details>
                                                ))}
                                        </div>
                                </section>

                                <section>
                                        <h2>Stay on the right page</h2>
                                        <p>
                                                Use the{" "}
                                                <Link href="/" className="underline">
                                                        delay repay calculator
                                                </Link>{" "}
                                                to double-check your figures, then continue to the official claim form linked above. For more context, read the{" "}
                                                <Link href="/delay-repay-cancelled-trains" className="underline">
                                                        cancelled trains guidance
                                                </Link>{" "}
                                                and{" "}
                                                <Link href="/delay-repay-missed-connections" className="underline">
                                                        missed connections advice
                                                </Link>{" "}
                                                —both route you back to the calculator when you are ready to submit.
                                        </p>
                                </section>
                        </article>

                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                </main>
        );
}
