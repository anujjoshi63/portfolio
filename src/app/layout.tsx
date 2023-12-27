import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://anujjoshi.vercel.app/"),
  title: "Anuj Joshi",
  description: "Software Engineer | Loves to code | Open Source",
  creator: "Anuj Joshi",
  publisher: "Anuj on Vercel",
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
    url: "https://anujjoshi.vercel.app/",
    siteName: "Anuj Joshi",
    images: [
      {
        url: "https://anujjoshi.vercel.app/og-image.png",
        alt: "Anuj is 1. student at asu, 2. skilled in react, js, ts, python, 3. looking for software engineering summer internship",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    images: "https://anujjoshi.vercel.app/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
      <Analytics />
    </html>
  );
}
