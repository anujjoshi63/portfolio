import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  display: "swap",
});
export const metadata: Metadata = {
  icons: "/favicon.ico",
  metadataBase: new URL("https://anujjoshi.me/"),
  title: "Anuj Joshi | Portfolio",
  description: "Software Engineer | Loves to code | Open Source",
  creator: "Anuj Joshi",
  publisher: "Anuj",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Fresher",
    "internship",
    "developer",
    "full stack",
    "frontend",
  ],
  openGraph: {
    title: "Anuj Joshi",
    description: "Software Engineer | Loves to code | Open Source",
    url: "https://anujjoshi.me/",
    siteName: "Anuj Joshi",
    images: [
      {
        url: "https://anujjoshi.me/og-image.png",
        alt: "Anuj is 1. student at asu, 2. skilled in react, js, ts, python, 3. looking for software engineering summer internship",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    images: "https://anujjoshi.me/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
