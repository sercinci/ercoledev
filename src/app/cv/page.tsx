import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Volunteering } from "@/components/Volunteering";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ogImageCv } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "CV | Federico Ercole, Senior Software Engineer",
  },
  description:
    "Full CV of Federico Ercole. Senior full-stack engineering across real-time AI platforms, 60+ microservices on AWS and CTO-level work with startups.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    type: "profile",
    url: "/cv",
    title: "CV | Federico Ercole, Senior Software Engineer",
    description:
      "Ten years building real-time AI platforms, large distributed systems on AWS and full-stack products. Vienna, Austria.",
    images: [ogImageCv],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Federico Ercole, Senior Software Engineer",
    description:
      "Ten years building real-time AI platforms, large distributed systems on AWS and full-stack products. Vienna, Austria.",
    images: [ogImageCv],
  },
};

export default function Cv() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Curriculum Vitae
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Federico <span className="text-primary">Ercole</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Senior Software Engineer based in Vienna, Austria. Ten years building real-time AI
              platforms, large distributed systems on AWS and full-stack products, working as an
              engineer, as a tech lead and as a CTO-level contributor to European startups.
            </p>
            <p className="text-muted-foreground mb-8">
              🇮🇹 Italian, 🇬🇧 English, 🇩🇪 German, 🇷🇴 Romanian, 🇫🇷 French
            </p>
            <Link
              href="/#services"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Looking to hire me for a project?
            </Link>
          </div>
        </div>
      </section>

      <Experience />
      <Skills />
      <Portfolio variant="all" />
      <Volunteering />
      <Contact />
      <Footer />
    </main>
  );
}
