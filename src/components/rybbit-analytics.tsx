"use client";

import * as React from "react";
import Script from "next/script";
import { getConsent } from "@/lib/consent";

export function RybbitAnalytics() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    setEnabled(getConsent() === "accepted");

    const handler = () => {
      setEnabled(getConsent() === "accepted");
    };

    window.addEventListener("analytics-consent-updated", handler);
    return () =>
      window.removeEventListener("analytics-consent-updated", handler);
  }, []);

  if (!enabled) return null;

  return (
    <Script
      src="/metrics/script.js"
      strategy="afterInteractive"
      data-site-id="48696813a5d3"
    />
  );
}
