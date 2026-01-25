"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Hero Journey Club",
    period: "2024 - 2026",
    description:
      "Real-time AI-driven mental health platform embedded in gaming ecosystems to support thousands of users. • Architected real-time AI voice communication platform using STT/TTS pipelines enabling live conversational experiences at scale • Designed event-driven AWS architecture orchestrating real-time web services and game plugins, including automated on-demand server provisioning • Led system architecture and scalability strategy, improving performance, fault tolerance, and cloud reliability across products • Delivered end-to-end full-stack systems using Next.js, NestJS, AWS, and Vercel in rapid iteration startup environment",
  },
  {
    role: "Senior Software Engineer",
    company: "ImmobilienScout24",
    period: "2019 - 2024",
    description:
      "• Led full-stack development across 60+ microservices powering a large-scale distributed platform on AWS • Built serverless event-driven systems handling high-traffic production workloads with high availability and horizontal scalability, supporting thousands of concurrent users • Improved CI/CD pipelines and system reliability across multi-team microservice environment • Contributed to long-term platform modernization and performance optimization initiatives",
  },
  {
    role: "Lead Engineer / Freelancer",
    company: "ErcoleDev",
    period: "2016 - 2019",
    description:
      "• Designed and scaled full cloud infrastructures for early-stage startups across fintech, AI, and streaming products • Served as technical lead and CTO-level contributor for multiple European startups • Built scalable frontends, backend systems, and cloud architectures end to end",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary" />

              <div className="md:grid md:grid-cols-3 gap-8 p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                  <div className="text-muted-foreground">
                    {exp.description.split("•").map((point, index) => {
                      if (point.trim() === "") return null;
                      return (
                        <div key={index} className="mb-2 last:mb-0">
                          {index > 0 && <span className="text-primary mr-2">•</span>}
                          {point.trim()}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
