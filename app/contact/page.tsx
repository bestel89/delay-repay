import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/app/Constants";

export const metadata: Metadata = {
        title: "Contact DelayRepayCalc.co.uk | Get in touch",
        description: "Contact the independent Delay Repay calculator team by email for corrections, press, or feedback.",
        alternates: { canonical: "/contact" },
};

export default function ContactPage() {
        return (
                <article className="prose max-w-3xl prose-headings:font-semibold prose-a:link prose-a:link-hover">
                        <h1>Contact</h1>
                        <p>
                                If you have spotted an error, need to flag an operator policy change, or want to share feedback on the calculator, please get in touch by email. This inbox is monitored in the UK and responses focus on site accuracy and usability.
                        </p>

                        <h2>Email</h2>
                        <p>
                                The best way to reach us is <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Include as much detail as possible, such as the operator name, journey date, and a link to any official source material if you are reporting a policy change.
                        </p>

                        <h2>What we can help with</h2>
                        <ul>
                                <li>Corrections to operator rules, claim links, or ticket handling</li>
                                <li>Accessibility or performance issues with the calculator</li>
                                <li>Media enquiries about Delay Repay guidance and consumer rights</li>
                        </ul>
                        <p>
                                We cannot intervene in individual claims or chase operators on your behalf. For claim-specific questions, please use the contact options provided on the operator claim pages linked from the calculator.
                        </p>

                        <h2>Useful links</h2>
                        <ul>
                                <li><Link href="/">Delay Repay calculator</Link></li>
                                <li><Link href="/delay-repay-explained">How Delay Repay works</Link></li>
                                <li><Link href="/delay-repay-season-tickets">Season ticket guidance</Link></li>
                                <li><Link href="/delay-repay-claim-time-limits">Claim time limits</Link></li>
                        </ul>
                </article>
        );
}
