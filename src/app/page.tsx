import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pathways } from "@/components/Pathways";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MovedSectionRedirect } from "@/components/MovedSectionRedirect";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Federico Ercole | Senior Software & Product Engineer in Vienna",
  },
  description:
    "Federico Ercole, senior software and product engineer in Vienna. Ten years building real-time AI voice, distributed systems on AWS and full-stack products. Available for freelance projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Federico Ercole | Senior Software & Product Engineer in Vienna",
    description:
      "Ten years building real-time AI voice, distributed systems on AWS and full-stack products. Work with me or read the full CV.",
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <MovedSectionRedirect />
      <Header />
      <Hero />
      <About />
      <Pathways />
      <Contact />
      <Footer />
    </main>
  );
}
