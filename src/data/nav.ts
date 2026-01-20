export type NavItem = {
  label: string;
  href: string;
  match?: "exact" | "startsWith";
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", match: "exact" },
  { label: "Accreditations", href: "/accreditations", match: "exact" },
  { label: "Projects", href: "/projects", match: "exact" },
  { label: "Contact", href: "/contact", match: "exact" },
  { label: "C.V", href: "/cv", match: "exact" },
];
