export type NavLink = {
  label: string;
  href: string;
};

const routes = {
  home: "/",
  delayRepayBands: "/delay-repay-bands",
  delayRepayCancelledTrains: "/delay-repay-cancelled-trains",
  delayRepayClaimTimeLimits: "/delay-repay-claim-time-limits",
  delayRepayExplained: "/delay-repay-explained",
  delayRepayMissedConnections: "/delay-repay-missed-connections",
  delayRepaySeasonTickets: "/delay-repay-season-tickets",
  operators: "/operators",
  avanti: "/delay-repay-avanti",
  gwr: "/delay-repay-gwr",
  lner: "/delay-repay-lner",
  northern: "/delay-repay-northern",
  southern: "/delay-repay-southern",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  cookies: "/cookies",
  legal: "/legal"
};

export const mainLinks: NavLink[] = [
  {label: "Home", href: routes.home}
];

export const explainerLinks: NavLink[] = [
  {label: "Delay Repay bands", href: routes.delayRepayBands},
  {label: "Cancelled trains", href: routes.delayRepayCancelledTrains},
  {label: "Claim time limits", href: routes.delayRepayClaimTimeLimits},
  {label: "Delay Repay explained", href: routes.delayRepayExplained},
  {label: "Missed connections", href: routes.delayRepayMissedConnections},
  {label: "Season tickets", href: routes.delayRepaySeasonTickets}
];

export const operatorLinks: NavLink[] = [
  {label: "All operators", href: routes.operators},
  {label: "Avanti", href: routes.avanti},
  {label: "GWR", href: routes.gwr},
  {label: "LNER", href: routes.lner},
  {label: "Northern", href: routes.northern},
  {label: "Southern", href: routes.southern}
];

export const utilityLinks: NavLink[] = [
  {label: "About", href: routes.about},
  {label: "Contact", href: routes.contact},
  {label: "Privacy", href: routes.privacy},
  {label: "Cookies", href: routes.cookies},
  {label: "Legal", href: routes.legal}
];
