"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Check, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pathway = {
  icon: LucideIcon;
  audience: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const pathways: Pathway[] = [
  {
    icon: Briefcase,
    audience: "For clients",
    title: "Commission a project",
    description:
      "Fixed scope and a fixed price, agreed before we start. I take on a small number of projects at a time and own each one from the first call to production.",
    points: [
      "AI voice agents and agentic automation",
      "Cloud architecture reviews",
      "Fast business websites you own outright",
      "Consultancy on systems you already run",
    ],
    cta: "See offers & prices",
    href: "/services",
    featured: true,
  },
  {
    icon: FileText,
    audience: "For recruiters and hiring teams",
    title: "Read the full CV",
    description:
      "Ten years at charles, Hero Journey Club, ImmobilienScout24 and a string of European startups, as an engineer, a tech lead and a CTO-level contributor.",
    points: [
      "Experience, role by role",
      "Searchable technical skills",
      "Projects and hackathon wins",
      "Mentoring and volunteering",
    ],
    cta: "Open the CV",
    href: "/cv",
  },
];

export const Pathways = () => {
  return (
    <section id="work-together" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Work Together</h2>
          <p className="text-lg text-muted-foreground">
            Hiring me for a project or for a role? Each one has its own page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={pathway.href}
                className={`group flex flex-col h-full p-6 sm:p-8 rounded-3xl bg-background transition-all hover:shadow-xl hover:shadow-primary/5 ${
                  pathway.featured
                    ? "border-2 border-primary/30 hover:border-primary/60"
                    : "border border-white/10 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                    <pathway.icon size={24} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                    {pathway.audience}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-muted-foreground mb-6">{pathway.description}</p>

                <ul className="space-y-2 mb-8">
                  {pathway.points.map(point => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all ${
                    pathway.featured
                      ? "bg-primary text-primary-foreground group-hover:opacity-90"
                      : "bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20"
                  }`}
                >
                  {pathway.cta}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
