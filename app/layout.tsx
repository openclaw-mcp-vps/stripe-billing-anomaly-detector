import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Billing Anomaly Detector",
  description: "Detect unusual patterns in Stripe billing data. Monitor transactions for failed payment spikes, unusual refund patterns, and subscription churn signals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="01eb5b3a-8ede-426d-8256-7ec1d40eab49"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
