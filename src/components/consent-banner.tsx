"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getConsentFromCookie,
  setConsentCookie,
  type AnalyticsConsent,
} from "@/lib/consent";

export function AnalyticsConsentBanner() {
  const [consent, setConsent] = React.useState<AnalyticsConsent | null>(null);

  React.useEffect(() => {
    setConsent(getConsentFromCookie());
  }, []);

  // If user already decided, don't show the banner
  if (consent) return null;

  function decide(value: AnalyticsConsent) {
    setConsentCookie(value);
    setConsent(value);
    // optional: notify other components in this tab
    window.dispatchEvent(new Event("analytics-consent-updated"));
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <Card className="mx-auto w-full max-w-3xl">
        <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">Analytics consent</p>
            <p className="text-sm text-muted-foreground">
              We use analytics to understand usage and improve the site. You can
              accept or reject.
            </p>
          </div>

          <div className="flex gap-2 sm:shrink-0">
            <Button variant="outline" onClick={() => decide("rejected")}>
              Reject
            </Button>
            <Button onClick={() => decide("accepted")}>Accept</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
