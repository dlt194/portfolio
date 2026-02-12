export type AnalyticsConsent = "accepted" | "rejected";

const COOKIE_NAME = "analytics_consent";
const LS_KEY = "analytics_consent";

export function getConsent(): AnalyticsConsent | null {
  if (typeof window !== "undefined") {
    const ls = localStorage.getItem(LS_KEY);
    if (ls === "accepted" || ls === "rejected") return ls;
  }

  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  const value = decodeURIComponent(match.split("=")[1] ?? "");
  if (value === "accepted" || value === "rejected") return value;

  return null;
}

export function setConsent(value: AnalyticsConsent) {
  if (typeof window !== "undefined") {
    localStorage.setItem(LS_KEY, value);
  }

  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    value,
  )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}
