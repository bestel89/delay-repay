export type NavLink = {
  label: string;
  href: string;
};

export const mainLinks: NavLink[] = [
  {label: "Home", href: "/"}
];

export const explainerLinks: NavLink[] = [
  {label: "Delay Repay bands", href: "/delay-repay-bands"},
  {label: "Cancelled trains", href: "/delay-repay-cancelled-trains"},
  {label: "Claim time limits", href: "/delay-repay-claim-time-limits"},
  {label: "Delay Repay explained", href: "/delay-repay-explained"},
  {label: "Missed connections", href: "/delay-repay-missed-connections"},
  {label: "Season tickets", href: "/delay-repay-season-tickets"}
];

export const operatorLinks: NavLink[] = [
  {label: "All operators", href: "/operators"},
  {label: "Avanti", href: "/delay-repay-avanti"},
  {label: "GWR", href: "/delay-repay-gwr"},
  {label: "LNER", href: "/delay-repay-lner"},
  {label: "Northern", href: "/delay-repay-northern"},
  {label: "Southern", href: "/delay-repay-southern"}
];

export const utilityLinks: NavLink[] = [
  {label: "About", href: "/about"},
  {label: "Contact", href: "/contact"},
  {label: "Privacy", href: "/privacy"},
  {label: "Cookies", href: "/cookies"},
  {label: "Legal", href: "/legal"}
];
