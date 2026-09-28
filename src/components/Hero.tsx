"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { email, githubUrl, linkedinUrl } from "@/lib/links";

const highlights = [
  { value: "10", label: "years shipping production software" },
  { value: "60+", label: "microservices run in production on AWS" },
  { value: "1000s", label: "live users on real-time AI voice" },
  { value: "5", label: "languages spoken" },
];

const socials = [
  { name: "Email", href: `mailto:${email}`, icon: Mail },
  { name: "LinkedIn", href: linkedinUrl, icon: Linkedin },
  { name: "GitHub", href: githubUrl, icon: Github },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for freelance projects
              <ArrowRight size={14} />
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Federico <span className="text-primary">Ercole</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              Senior software and product engineer in Vienna.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              I build products end to end, from the first product decision down to the cloud they
              run on. Ten years of real-time AI voice, large distributed systems on AWS and startups
              taken from zero to launch.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Work with me <ArrowRight size={18} />
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary text-secondary-foreground border border-white/10 hover:bg-white/5 transition-colors"
              >
                <FileText size={18} /> Read my CV
              </Link>
            </div>
            <div className="flex gap-3">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              <Image
                src="/images/ED-512.png"
                alt="Federico Ercole Logo"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
        >
          {highlights.map(item => (
            <div
              key={item.label}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
