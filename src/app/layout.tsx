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
  title: "Anuj Joshi - Software Development Engineer @ Amazon",
  description:
    "SDE1 at Amazon Customer Service Security. Full-stack engineer with expertise in React, Next.js, TypeScript, and AWS. ASU CS graduate.",
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
    "Anuj Joshi",
    "anujjoshi",
    "Amazon SDE",
    "Amazon Software Engineer",
    "Customer Service Security",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Full Stack Developer",
    "Software Engineer",
    "AWS",
    "Cloud Computing",
    "System Design",
    "Security Engineering",
    "Arizona State University",
    "ASU",
    "Computer Science",
    "HireBuddy",
    "BodaInsights",
    "PostgreSQL",
    "DevOps",
  ],
  openGraph: {
    title: "Anuj Joshi",
    description: "SDE1 @ Amazon · Customer Service Security | Full-stack engineer",
    url: "https://anujjoshi.me/",
    siteName: "Anuj Joshi",
    images: [
      {
        url: "https://anujjoshi.me/og-image.png",
        alt: "Anuj Joshi - SDE1 at Amazon Customer Service Security. Full-stack engineer skilled in React, TypeScript, Next.js, and AWS.",
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
              graduationYear: "2025",
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
                name: "Amazon",
                location: "Seattle, WA",
              },
              address: {
                "@type": "PostalAddress",
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
