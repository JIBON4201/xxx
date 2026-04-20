import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Private Video Platform (2026) – Instant Access",
  description:
    "Unlock exclusive private video content with instant, secure streaming. No signup required. Browse a curated library of premium videos with HD quality and privacy-first technology.",
  keywords: [
    "private video platform",
    "secure streaming",
    "premium video access",
    "no signup streaming",
    "instant video access",
    "private video library",
    "HD streaming",
    "adult video platform",
    "exclusive content",
    "2026 video platform",
  ],
  authors: [{ name: "VaultStream" }],
  openGraph: {
    title: "Private Video Platform (2026) – Instant Access",
    description:
      "Unlock exclusive private video content with instant, secure streaming. No signup required. HD quality guaranteed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Video Platform (2026) – Instant Access",
    description:
      "Exclusive private video content. Instant access, no signup. Secure HD streaming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
