"use client";

import { Button } from "@/components/ui/button";
import { getConsent, setConsent } from "@/lib/consent";
import * as React from "react";

export function AnalyticsConsentBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  function decide(value: "accepted" | "rejected") {
    setConsent(value);
    setVisible(false);
    window.dispatchEvent(new Event("analytics-consent-updated"));
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 p-4 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          This site uses privacy-friendly analytics to understand usage.
        </p>

        <div className="flex gap-2">
          <Button size="sm" onClick={() => decide("accepted")}>
            Accept
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => decide("rejected")}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
