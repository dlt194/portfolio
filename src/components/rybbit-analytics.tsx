"use client";

import * as React from "react";
import Script from "next/script";
import { getConsentFromCookie } from "@/lib/consent";

export function RybbitAnalytics() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const current = getConsentFromCookie();
    setEnabled(current === "accepted");

    const handler = () => {
      const updated = getConsentFromCookie();
      setEnabled(updated === "accepted");
    };

    window.addEventListener("analytics-consent-updated", handler);
    return () =>
      window.removeEventListener("analytics-consent-updated", handler);
  }, []);

  if (!enabled) return null;

  /**
   * Replace the script src + config to match how you integrate Rybbit.
   * Typical patterns:
   * - hosted script: <script src="https://.../script.js" data-site-id="..."></script>
   * - inline init snippet after loading the script
   */
  return (
    <>
      <Script
        src="https://analytics.dlt.me.uk/api/script.js"
        data-site-id="48696813a5d3"
        defer
      />
    </>
  );
}
