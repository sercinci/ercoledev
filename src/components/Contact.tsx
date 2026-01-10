"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in my profile? I am always open to discussing new engineering challenges and
            opportunities.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:federico.ercole@proton.me"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={20} /> federico.ercole@proton.me
            </a>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/federicoercole"
                target="_blank"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/sercinci"
                target="_blank"
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
