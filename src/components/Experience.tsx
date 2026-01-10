"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Hero Journey Club",
    period: "Sept 2024 - Present",
    description:
      "Designing, developing, and maintaining multiple products using Next.js and NestJS, deployed on Vercel and AWS. Implementing real-time voice communication systems, AI context management flows, and real-time event systems integrating various AWS services.",
  },
  {
    role: "Full Stack Developer",
    company: "ErcoleDev",
    period: "Jan 2019 - Present",
    description:
      "Developing custom web platforms and solutions using React, Node.js, and AWS for clients worldwide.",
  },
  {
    role: "Senior Software Engineer",
    company: "ImmoScout24 Austria",
    period: "Aug 2019 - Aug 2024",
    description:
      "Developed and maintained core features for Austria's leading real estate platform using Node.js, React, TypeScript, GraphQL, and Elasticsearch, focusing on scalability and exceptional user experience.",
  },
  {
    role: "Front End Web Developer",
    company: "Juniper XS",
    period: "Apr 2016 - Jun 2018",
    description:
      "Development of ENDU, events aggregator, results provider and social network for athletes in endurance sports.",
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
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
