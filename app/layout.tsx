import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Footprints In The Sand Recovery Center";
const siteUrl = "https://footprintsinthesand.org";
const siteDescription =
  "At Footprints In The Sand, our mission is to help people break free from the cycles that once controlled their lives with evidence-based PHP and IOP programming, relentless accountability, and multidisciplinary care.";
const ogImagePath = "/footprints-in-the-sand-minimal-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Footprints In The Sand",
    "addiction treatment",
    "PHP program",
    "IOP program",
    "dual diagnosis care",
    "trauma-informed therapy",
    "mental health recovery",
    "coastal rehab",
    "evidence-based recovery",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Mental Health & Addiction Recovery",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Footprints In The Sand minimal logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: ogImagePath,
    shortcut: ogImagePath,
    apple: ogImagePath,
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
