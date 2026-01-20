import type { Metadata } from "next";
import "./globals.css";
import { Topbar } from "@/components/topbar";
import { AnalyticsConsentBanner } from "@/components/consent-banner";
import { RybbitAnalytics } from "@/components/rybbit-analytics";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Dan Thomas",
  description: "Portfolio of Dan Thomas - dan@dlt.me.uk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background text-foreground ${inter.className}`}
      >
        <ThemeProvider>
          <Topbar />
          {children}
          <RybbitAnalytics />
          <AnalyticsConsentBanner />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
