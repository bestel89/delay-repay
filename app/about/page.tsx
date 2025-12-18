import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, domainNameWithoutHTTPS } from "@/app/Constants";

export const metadata: Metadata = {
        title: "About DelayRepayCalc.co.uk | Independent UK Delay Repay help",
        description: "About this independent UK Delay Repay calculator and guidance site, how it is maintained, and why it focuses on consumer clarity.",
        alternates: { canonical: "/about" },
};

export default function AboutPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>About this site</h1>
                        <p>
                                {domainNameWithoutHTTPS} is an independent UK consumer information site focused on Delay Repay. It combines a fast, public calculator with plain-English guidance so rail passengers can check potential compensation before submitting a claim to their train operator.
                        </p>
                        <p>
                                The site is built and maintained in the UK. It prioritises accuracy, accessibility, and quick loading times. There are no affiliate links. All operator links go directly to official claim pages or help content so you can complete your application without distraction.
                        </p>

                        <h2>Why it exists</h2>
                        <p>
                                Delay Repay rules vary by operator and ticket type. Many passengers are unsure whether their delay meets the thresholds or how season tickets are calculated. This site provides one place to:
                        </p>
                        <ul>
                                <li>Estimate compensation in pounds based on published operator policies</li>
                                <li>Understand the steps involved in submitting a claim</li>
                                <li>Find operator-specific links without hunting across multiple websites</li>
                        </ul>
                        <p>
                                The aim is to reduce confusion and help passengers make informed, timely claims. Estimates remain guidance only; operators confirm eligibility once evidence is reviewed.
                        </p>

                        <h2>How the calculator is maintained</h2>
                        <p>
                                Operator policies are checked against publicly available sources. When a policy changes, the calculator bands are updated and a manual review ensures season-ticket conversions remain appropriate. If an operator does not participate in Delay Repay, the calculator signposts directly to the operator’s own refund or complaints route instead of showing an estimate.
                        </p>
                        <p>
                                If you spot an issue or a policy update, please email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with the operator name, route, and a link to the source. Corrections are normally applied quickly.
                        </p>

                        <h2>Editorial approach</h2>
                        <p>
                                Content is written in plain UK English with a calm, factual tone. Guidance is structured to mirror the real claim process: evidence gathering, eligibility checks, completing the operator form, and following up. The site does not provide legal advice and does not guarantee outcomes. Where rules differ between operators, that variance is highlighted and linked to a relevant guide.
                        </p>
                        <p>
                                Pages are designed to be crawlable without requiring scripts. Headings follow a clear hierarchy for readability and accessibility. Each guide links back to the calculator and to related topics so readers can move between scenarios without losing context.
                        </p>

                        <h2>Independence and funding</h2>
                        <p>
                                The site is independent and unaffiliated with UK train operating companies. Any advertising is kept separate from the calculator and guides so that core content remains clear and usable. There are no paid placements for operators or ticket retailers.
                        </p>
                        <p>
                                Independent information site. Not affiliated with any train operator or government body.
                        </p>

                        <h2>Contact</h2>
                        <p>
                                Questions, corrections, or media enquiries can be sent to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. If you need operator-specific support for a live claim, please use the official contact routes linked from the calculator.
                        </p>

                        <p>
                                Ready to estimate a journey? Head back to the <Link href="/">Delay Repay calculator</Link> or explore the <Link href="/delay-repay-explained">full guide on how Delay Repay works</Link>.
                        </p>
                </article>
        );
}
