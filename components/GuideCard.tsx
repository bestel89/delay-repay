import Link from "next/link";
import type { ReactNode } from "react";

type GuideCardProps = {
        title: string;
        description: string;
        href: string;
        icon?: ReactNode;
};

export default function GuideCard({ title, description, href, icon }: GuideCardProps) {
        return (
                <Link
                        aria-label={`${title} guide`}
                        className="group block rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
                        href={href}
                >
                        <div className="flex items-start gap-4">
                                {icon ? <div className="text-slate-500">{icon}</div> : null}
                                <div className="flex-1 space-y-2">
                                        <div className="flex items-start justify-between gap-3">
                                                <div>
                                                        <p className="text-base font-semibold text-slate-900">{title}</p>
                                                        <p className="text-sm leading-relaxed text-slate-700">{description}</p>
                                                </div>
                                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition group-hover:bg-slate-100 group-focus-visible:bg-slate-100">
                                                        <ChevronIcon />
                                                </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-slate-900">
                                                <span className="uppercase tracking-wide text-xs text-slate-500">Read guide</span>
                                                <ChevronIcon className="h-3.5 w-3.5" />
                                        </div>
                                </div>
                        </div>
                </Link>
        );
}

function ChevronIcon({ className = "h-4 w-4" }: { className?: string }) {
        return (
                <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
        );
}
