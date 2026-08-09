import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Websites } from "@/components/Websites";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "ErcoleDev | Freelance AI, Cloud & Web Engineering",
  },
  description:
    "Federico Ercole, Senior Software Engineer in Vienna. Freelance AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "ErcoleDev | Freelance AI, Cloud & Web Engineering",
    description:
      "Freelance AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price, from €1.200.",
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Websites />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
