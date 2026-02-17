import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Payzik | The Unified Payment Orchestration Layer",
  description: "Optimise payment success and manage multiple aggregators through a single integration. Built for scale, designed for reliability.",
  keywords: ["payment orchestration", "payment gateway", "fintech", "payment aggregation", "digital payments"],
  authors: [{ name: "Payzik Team" }],
  openGraph: {
    title: "Payzik - Payment Orchestration Platform",
    description: "Manage and optimize payments across multiple aggregators through a single integration.",
    url: "https://payzik.com",
    siteName: "Payzik",
    images: [
      {
        url: "/assets/payzik-logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payzik - Unified Payment Orchestration",
    description: "One integration, unlimited payment possibilities.",
    images: ["/assets/payzik-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
