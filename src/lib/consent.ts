export type AnalyticsConsent = "accepted" | "rejected";

const COOKIE_NAME = "analytics_consent";

export function getConsentFromCookie(): AnalyticsConsent | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  const value = decodeURIComponent(match.split("=")[1] ?? "");
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setConsentCookie(value: AnalyticsConsent) {
  // 365 days
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    value,
  )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}
