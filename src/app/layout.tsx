import type { Metadata } from "next"
import dynamic from "next/dynamic"
import localFont from "next/font/local"

import "./globals.css"

const DynamicAnalytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics)
  // { ssr: false },
)
const DynamicSpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights)
  // { ssr: false },
)

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  display: "swap",
})
export const metadata: Metadata = {
  icons: "/favicon.ico",
  metadataBase: new URL("https://anujjoshi.me/"),
  title: "Anuj Joshi | Portfolio",
  description:
    "Anuj Joshi, Full-stack dev crafting AI-powered web solutions | Open to Software Engineering roles (June '25) 🚀 | ASU CS Master's student | Previously built tech @ HireBuddy & BodaInsights | Stack: React, Next.js, TypeScript, AWS ",
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
    "Anuj Joshi ASU",
    "anujjoshi",
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
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Arizona State University",
    "AWS",
    "Cloud Computing",
    "System Design",
    "OpenAI",
    "Software Development",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "ASU",
    "Computer Science",
    "Master's Student",
    "Software Engineering Intern",
    "HireBuddy",
    "BodaInsights",
    "Redis",
    "PostgreSQL",
    "DevOps",
  ],
  openGraph: {
    title: "Anuj Joshi",
    description: "Software Engineer | Loves to code | Open Source",
    url: "https://anujjoshi.me/",
    siteName: "Anuj Joshi",
    images: [
      {
        url: "https://anujjoshi.me/og-image.png",
        alt: "Anuj is 1. student at asu, 2. skilled in react, js, ts, python, 3. looking for software engineering or applied ai roles for june 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    images: "https://anujjoshi.me/og-image.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
              sameAs: [
                "https://github.com/anujjoshi63",
                "https://linkedin.com/in/thejoshi",
              ],
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Arizona State University",
                department: "Computer Science",
              },
              knowsAbout: [
                "Full Stack Development",
                "JavaScript",
                "React",
                "Node.js",
                "Next.js",
                "TypeScript",
                "Python",
                "AWS",
                "System Design",
                "AI Integration",
                "OpenAI API",
                "Cloud Computing",
                "Database Management",
              ],
              worksFor: {
                "@type": "Organization",
                name: "HireBuddy, Inc.",
                location: "Gilbert, AZ",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                addressCountry: "US",
              },
            }),
          }}
        />
        <DynamicAnalytics />
        <DynamicSpeedInsights />
      </body>
    </html>
  )
}
