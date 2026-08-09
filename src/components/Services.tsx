"use client";

import { motion } from "framer-motion";
import { Mic, Cloud, Bot, Globe, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  price: string;
  timeline: string;
  deliverables: string[];
  addons?: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Mic,
    title: "AI Voice Agent PoC",
    tagline:
      "A working voice agent your team can talk to in the browser. I use the same speech-to-text and text-to-speech pipeline I built for a live product with thousands of users.",
    price: "€2.900",
    timeline: "3 weeks",
    deliverables: [
      "Working browser-based voice agent, deployed on a demo URL",
      "One use case of your choice (support, booking, onboarding, in-product NPC)",
      "Your own knowledge base wired into the agent",
      "Latency tuning and provider cost breakdown",
      "Handover doc + 60 min walkthrough call",
    ],
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud Architecture Review",
    tagline:
      "An independent review of your cloud setup by an engineer who has kept large systems running in production. I find where it breaks under load and where the money is going, then hand you a fix list in priority order. Your team keeps working while I do it.",
    price: "€1.400",
    timeline: "2 weeks",
    deliverables: [
      "Architecture diagram of your current infrastructure",
      "Written audit: cost, reliability, security, scalability",
      "Prioritised fix list, each scored by effort vs. impact",
      "90 min walkthrough call with your team",
    ],
  },
  {
    icon: Bot,
    title: "Agentic AI Enablement",
    tagline:
      "I get one agent running properly inside your own stack, and leave your team able to build the next one without me. Coding agents, custom skills, MCP tooling, workflow automation.",
    price: "€1.800",
    timeline: "2 to 3 weeks",
    deliverables: [
      "One production-ready agent or automation in your stack",
      "Custom skills, tools and prompt setup, versioned in your repo",
      "90 min team enablement session",
      "Runbook so your team can extend it without me",
    ],
  },
  {
    icon: Globe,
    title: "Business Landing Site",
    tagline:
      "A fast, modern site built to bring your business enquiries. Next.js under the hood, so it loads instantly and search engines index every word of it. You own the code outright, with no platform lock-in and no forced monthly fee. If you prefer to hand it off, I keep it maintained and updated for a competitive monthly rate.",
    price: "€1.200",
    timeline: "2 weeks",
    deliverables: [
      "One-page responsive site, up to 6 sections",
      "SEO metadata, sitemap, analytics",
      "Working contact form",
      "Deployment + your domain connected",
      "2 rounds of revisions",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work With Me</h2>
          <p className="text-lg text-muted-foreground">
            Fixed scope and a fixed price, both agreed before we start. I take on a small number of
            projects at a time, so every client gets my full attention and the timelines below are
            the real ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col p-8 rounded-3xl bg-background transition-all hover:shadow-xl hover:shadow-primary/5 ${
                service.featured
                  ? "border-2 border-primary/30 hover:border-primary/60"
                  : "border border-white/10 hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                  <service.icon size={24} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <div className="text-xs text-muted-foreground">{service.timeline}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.tagline}</p>

              <ul className="space-y-2 mb-6">
                {service.deliverables.map(item => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.addons && (
                <div className="mb-6 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary/80 mb-2">
                    Add-ons
                  </h4>
                  <ul className="space-y-1">
                    {service.addons.map(addon => (
                      <li key={addon} className="text-sm text-muted-foreground">
                        {addon}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={`#contact`}
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20 transition-colors"
              >
                Book this <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="p-4 rounded-xl bg-background border border-white/10">
            <span className="text-foreground font-medium">50% upfront</span>, 50% on delivery.
            Invoiced from the European Union.
          </div>
          <div className="p-4 rounded-xl bg-background border border-white/10">
            <span className="text-foreground font-medium">Everything in writing</span> before we
            start, so you know exactly what you are getting.
          </div>
          <div className="p-4 rounded-xl bg-background border border-white/10">
            <span className="text-foreground font-medium">Remote, EU timezone.</span> English,
            German or Italian.
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Need something that is not on this list?{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Describe it and I will quote it.
          </a>
        </p>
      </div>
    </section>
  );
};
