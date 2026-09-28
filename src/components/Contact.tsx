"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { email, githubUrl, linkedinUrl } from "@/lib/links";

type ContactProps = {
  /** "project" asks for a scoped brief on the services page. "general" is the open door everywhere else. */
  variant?: "project" | "general";
};

const copy = {
  project: {
    heading: "Start a Project",
    intro:
      "Tell me what you need in a few lines. I reply within a day with a fixed price and a start date.",
    note: "Happy to have a short call first if you prefer.",
    subject: "Project enquiry from ercole.dev",
    body: [
      "Hi Federico,",
      "",
      "What I need:",
      "Which package (if any):",
      "Timeline:",
      "Budget:",
      "",
      "Thanks,",
    ],
  },
  general: {
    heading: "Get in Touch",
    intro:
      "A project, a role or a question about something I built. Write me a few lines and I reply within a day.",
    note: "Based in Vienna, working remotely across Europe.",
    subject: "Hello from ercole.dev",
    body: ["Hi Federico,", ""],
  },
};

export const Contact = ({ variant = "general" }: ContactProps) => {
  const { heading, intro, note, subject, body } = copy[variant];
  const mailtoHref =
    `mailto:${email}` +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body.join("\n"));

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg text-muted-foreground mb-4">{intro}</p>
          <p className="text-sm text-muted-foreground mb-8">{note}</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={mailtoHref}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={20} /> {email}
            </a>
            <div className="flex gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
