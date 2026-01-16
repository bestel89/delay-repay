"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {explainerLinks, mainLinks, routes, utilityLinks} from "@/lib/nav";

const baseLinkClasses = "rounded-md px-2 py-1 transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [explainerOpen, setExplainerOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isGroupActive = (links: {href: string}[]) => links.some((link) => link.href === pathname);

  const toggleMobile = () => {
    setMobileOpen((open) => !open);
  };

  return (
    <header className="bg-blue-900 text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center text-xl font-semibold tracking-tight">
          <Link href={routes.home} className="flex items-center text-white no-underline">
            <img src="/white_logo.png" alt="Delay Repay logo" className="mr-3 h-10 w-auto" />
            <span>Delay Repay Calculator</span>
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-white/30 px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="site-navigation"
          onClick={toggleMobile}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <nav className="hidden items-center gap-4 text-sm md:flex" aria-label="Primary">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseLinkClasses} ${isActive(link.href) ? "font-semibold underline underline-offset-4" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative group">
            <button
              type="button"
              className={`${baseLinkClasses} flex items-center gap-1 ${isGroupActive(explainerLinks) ? "font-semibold underline underline-offset-4" : ""}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explainers
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute left-0 z-20 mt-2 w-60 rounded-md bg-white py-2 text-slate-900 shadow-lg opacity-0 invisible transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="flex flex-col">
                {explainerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 text-sm hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none ${isActive(link.href) ? "bg-slate-100 font-semibold" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href={routes.operators}
            className={`${baseLinkClasses} ${isActive(routes.operators) ? "font-semibold underline underline-offset-4" : ""}`}
          >
            Operators
          </Link>
        </nav>
      </div>
      <nav
        id="site-navigation"
        className={`${mobileOpen ? "block" : "hidden"} border-t border-blue-800 bg-blue-900 px-4 pb-4 md:hidden`}
        aria-label="Mobile"
      >
        <div className="flex flex-col gap-2 pt-4 text-sm">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseLinkClasses} ${isActive(link.href) ? "bg-blue-800 font-semibold" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className={`flex items-center justify-between ${baseLinkClasses} ${isGroupActive(explainerLinks) ? "bg-blue-800 font-semibold" : ""}`}
            aria-expanded={explainerOpen}
            onClick={() => setExplainerOpen((open) => !open)}
          >
            Explainers
            <span aria-hidden="true">{explainerOpen ? "−" : "+"}</span>
          </button>
          {explainerOpen && (
            <div className="ml-3 flex flex-col gap-1">
              {explainerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2 py-1 text-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isActive(link.href) ? "bg-blue-800 font-semibold" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <Link
            href={routes.operators}
            className={`${baseLinkClasses} ${isActive(routes.operators) ? "bg-blue-800 font-semibold" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Operators
          </Link>
          <button
            type="button"
            className={`flex items-center justify-between ${baseLinkClasses} ${isGroupActive(utilityLinks) ? "bg-blue-800 font-semibold" : ""}`}
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen((open) => !open)}
          >
            More
            <span aria-hidden="true">{moreOpen ? "−" : "+"}</span>
          </button>
          {moreOpen && (
            <div className="ml-3 flex flex-col gap-1">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2 py-1 text-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isActive(link.href) ? "bg-blue-800 font-semibold" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
