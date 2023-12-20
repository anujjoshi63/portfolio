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
    images: "/og-image.png",
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
    </html>
  );
}
