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
    default: "ErcoleDev | Freelance AI, Cloud & Web Engineering",
    template: "%s | ErcoleDev",
  },
  description:
    "Federico Ercole, Senior Software Engineer in Vienna. Freelance AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price.",
  applicationName: "ErcoleDev",
  authors: [{ name: "Federico Ercole", url: siteUrl }],
  creator: "Federico Ercole",
  publisher: "Federico Ercole",
  keywords: [
    "freelance software engineer Vienna",
    "AI voice agent developer",
    "agentic AI consultant",
    "cloud architecture review",
    "AWS serverless consultant",
    "Next.js developer Vienna",
    "freelance AI engineer Europe",
    "workflow automation freelancer",
    "Federico Ercole",
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
    title: "ErcoleDev | Freelance AI, Cloud & Web Engineering",
    description:
      "Senior Software Engineer in Vienna. AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "ErcoleDev | Freelance AI, Cloud & Web Engineering",
    description:
      "Senior Software Engineer in Vienna. AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites.",
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
