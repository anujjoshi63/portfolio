import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";

const DynamicAnalytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false },
);
const DynamicSpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false },
);

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  display: "swap",
});
export const metadata: Metadata = {
  icons: "/favicon.ico",
  metadataBase: new URL("https://anujjoshi.me/"),
  title: "Anuj Joshi | Portfolio",
  description:
    "Anuj Joshi, a Computer Science Master's student at Arizona State University, specializes in JavaScript, React, Node.js, Git, Next.js, TypeScript, and Python. He led front-end development at KyloApps, focusing on creating great user experiences including performance optimizations. Anuj contributed to the notable open-source project Zeno, earning over 100 GitHub stars, and developed effective freelance solutions, emphasizing web and software efficiency.",
  creator: "Anuj Joshi",
  publisher: "Anuj",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Fresher",
    "student",
    "code",
    "internship",
    "developer",
    "full stack",
    "Anuj",
    "Joshi",
    "Anuj Joshi",
    "Software",
  ],
  openGraph: {
    title: "Anuj Joshi",
    description: "Software Engineer | Loves to code | Open Source",
    url: "https://anujjoshi.me/",
    siteName: "Anuj Joshi",
    images: [
      {
        url: "https://anujjoshi.me/og-image.png",
        alt: "Anuj is 1. student at asu, 2. skilled in react, js, ts, python, 3. looking for software engineering or applied ai roles for may 2025",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anuj Joshi",
              url: "https://anujjoshi.me/",
              jobTitle: "Software Engineer",
              alumniOf: "Arizona State University",
              knowsAbout: [
                "JavaScript",
                "React",
                "Node.js",
                "Next.js",
                "TypeScript",
                "Python",
                "LLMs",
                "OpenAI API",
              ],
            }),
          }}
        />
        <DynamicAnalytics />
        <DynamicSpeedInsights />
      </body>
    </html>
  );
}
