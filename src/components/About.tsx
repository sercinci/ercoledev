"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a senior software and product engineer based in Vienna, Austria. Ten years of
            full-stack engineering on systems carrying real production traffic, at ImmobilienScout24
            and at Hero Journey Club, and as the technical lead who built the cloud infrastructure
            for a string of European startups.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I work across the frontend, the backend and the cloud with the same depth in each.
            Real-time AI voice pipelines, agents that do real work, hybrid search, Progressive Web
            Apps, event-driven systems and serverless architecture on AWS. I design the
            architecture, write the code and own the result in production.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a product engineer as well as a software engineer. I decide what gets built, what
            gets cut and what ships first, a habit built leading early-stage startups where the
            specification does not exist yet. xcore.gg, Picks & Bans and Sursk.it are my own
            products, each taken from an idea and a domain name to a live platform with real users.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am at my best around other builders. I mentor developers on system design, cloud
            architecture and AI-native workflows. At hackathons I bring the team spirit that makes a
            group click, and the prizes that come with it. I also run the digital presence of a
            cultural association in Northern Italy. I work in English, German and Italian.
          </p>

          <div className="mt-12 flex flex-col md:flex-row justify-center gap-12 md:gap-16">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <ul className="space-y-2 text-muted-foreground inline-block text-left">
                <li>🇮🇹 Italian</li>
                <li>🇬🇧 English</li>
                <li>🇩🇪 German</li>
                <li>🇷🇴 Romanian</li>
                <li>🇫🇷 French</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Beyond Code</h3>
              <ul className="space-y-2 text-muted-foreground inline-block text-left">
                <li>✈️ Travelling</li>
                <li>🎮 Gaming</li>
                <li>⚡ Electronics & IoT</li>
                <li>🏆 Hackathons</li>
                <li>⚽ Football player</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 transition-colors"
            >
              Read the full CV <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
