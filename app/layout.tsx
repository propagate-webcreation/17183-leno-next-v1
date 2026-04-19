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
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W98RVBKZ');`}
        </Script>
      
<Script src="/scripts/ga4-cta-tracking.js" strategy="afterInteractive" />
<Script src="/tracker.js" strategy="afterInteractive" />{children}</body>
    </html>
  );
}
