import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StructuredData } from "@/components/StructuredData";
import { ogImage, siteUrl } from "@/lib/seo";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Federico Ercole | Senior Software & Product Engineer in Vienna",
    template: "%s | Federico Ercole",
  },
  description:
    "Federico Ercole, senior software and product engineer in Vienna. Ten years building real-time AI voice, distributed systems on AWS and full-stack products. Available for freelance projects.",
  applicationName: "ErcoleDev",
  authors: [{ name: "Federico Ercole", url: siteUrl }],
  creator: "Federico Ercole",
  publisher: "Federico Ercole",
  keywords: [
    "Federico Ercole",
    "senior software engineer Vienna",
    "product engineer Vienna",
    "freelance software engineer Vienna",
    "AI voice agent developer",
    "agentic AI consultant",
    "cloud architecture review",
    "AWS serverless consultant",
    "Next.js developer Vienna",
    "freelance AI engineer Europe",
    "workflow automation freelancer",
    "ErcoleDev",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "ErcoleDev",
    locale: "en_GB",
    url: siteUrl,
    title: "Federico Ercole | Senior Software & Product Engineer in Vienna",
    description:
      "Ten years building real-time AI voice, distributed systems on AWS and full-stack products. Work with me or read the full CV.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Ercole | Senior Software & Product Engineer in Vienna",
    description:
      "Ten years building real-time AI voice, distributed systems on AWS and full-stack products. Work with me or read the full CV.",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/images/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/ED-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/ED-512.png", sizes: "512x512", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="0cred-verification" content="71308b8d-1604-4e7a-b3e8-fc49d5487664" />
        <StructuredData />
      </head>
      <body className={`${outfit.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
