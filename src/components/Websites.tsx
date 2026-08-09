"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { websites } from "@/lib/websites";

/**
 * Hides itself when the file is missing, so a card still reads correctly before its screenshot
 * has been added. The mount check matters: a broken image fails before React hydrates, so onError
 * alone never fires.
 */
const Screenshot = ({ src, alt }: { src: string; alt: string }) => {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      ref={node => {
        if (node?.complete && node.naturalWidth === 0) setFailed(true);
      }}
      className="w-full border-b border-white/10 object-cover object-top max-h-64"
    />
  );
};

export const Websites = () => {
  return (
    <section id="websites" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Websites You Can Visit</h2>
          <p className="text-lg text-muted-foreground">
            Open them, click around, run them through a speed test. This is what a site from me
            looks like once it is live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {websites.map((site, index) => (
            <motion.a
              key={site.domain}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-background border border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
            >
              {site.screenshot && (
                <Screenshot
                  src={site.screenshot}
                  alt={`Screenshot of the ${site.domain} website`}
                />
              )}

              <div className="flex flex-col flex-grow p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {site.domain}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-primary/80 mt-1">
                      {site.role}
                      {site.isThisSite && " · you are on it"}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                  />
                </div>

                <p className="text-muted-foreground mb-4 flex-grow">{site.description}</p>

                {site.caveat && (
                  <p className="text-sm text-muted-foreground/80 italic mb-4">{site.caveat}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  {site.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10">
          Want one like these for your business?{" "}
          <a href="#services" className="text-primary font-medium hover:underline">
            The package is €1.200.
          </a>
        </p>
      </div>
    </section>
  );
};
