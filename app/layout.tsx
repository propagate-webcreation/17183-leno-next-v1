import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "leno inc. | International Medical Transport from Japan",
  description:
    "Japan-based 24/7 international medical transport and air ambulance service. Bedside-to-bedside patient transfers, commercial medical escort, and hospital coordination across Japan and worldwide.",
  openGraph: {
    title: "leno inc. | International Medical Transport from Japan",
    description:
      "24/7 international medical transport, commercial medical escort, and hospital coordination. Operated from Gifu, Japan.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base text-text antialiased">
<Script src="/scripts/ga4-cta-tracking.js" strategy="afterInteractive" />
<Script src="/tracker.js" strategy="afterInteractive" />{children}</body>
    </html>
  );
}
