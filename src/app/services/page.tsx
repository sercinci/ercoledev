import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Websites } from "@/components/Websites";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ogImageServices } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Work With Me | Freelance AI, Cloud & Web Engineering",
  },
  description:
    "Hire Federico Ercole, senior software engineer in Vienna. Freelance AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Work With Me | Freelance AI, Cloud & Web Engineering",
    description:
      "Freelance AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price, from €1.200.",
    images: [ogImageServices],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With Me | Freelance AI, Cloud & Web Engineering",
    description:
      "Freelance AI voice agents, agentic automation, cloud architecture reviews and Next.js business sites. Fixed scope and fixed price, from €1.200.",
    images: [ogImageServices],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for freelance projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Freelance engineering at a <span className="text-primary">fixed price</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              AI voice agents, agentic automation, cloud architecture reviews and business websites.
              I own the whole build, from the product decisions down to the cloud it runs on.
              Real-time AI voice for thousands of live users, 60+ microservices in production, and
              startups taken from zero to launch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                See Offers & Prices
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground border border-white/10 hover:bg-white/5 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Websites />
      <Portfolio />
      <Contact variant="project" />
      <Footer />
    </main>
  );
}
