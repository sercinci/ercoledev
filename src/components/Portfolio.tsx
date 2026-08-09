"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { VideoModal } from "./VideoModal";
import { clientProjects, projects, type Project } from "@/lib/projects";

type PortfolioProps = {
  /** "clients" shows only live client-grade work. "all" adds the hackathon wins and side projects. */
  variant?: "clients" | "all";
};

const copy = {
  clients: {
    heading: "Selected Work",
    intro: "Live platforms and sites I designed, built and shipped.",
  },
  all: {
    heading: "Projects & Hackathons",
    intro: "Client platforms, side projects and the hackathons I won along the way.",
  },
};

const ProjectLinks = ({
  project,
  onPlay,
  size = "sm",
}: {
  project: Project;
  onPlay: () => void;
  size?: "sm" | "lg";
}) => {
  const iconSize = size === "lg" ? 20 : 16;
  const textClass = size === "lg" ? "text-base" : "text-sm";

  return (
    <>
      {project.video && (
        <button
          onClick={onPlay}
          className={`flex items-center gap-2 ${textClass} font-medium hover:text-primary transition-colors cursor-pointer`}
        >
          <Play size={iconSize} /> Watch the demo
        </button>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${textClass} font-medium hover:text-primary transition-colors`}
        >
          <ExternalLink size={iconSize} /> Visit
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${textClass} font-medium hover:text-primary transition-colors`}
        >
          <Github size={iconSize} /> Code
        </a>
      )}
    </>
  );
};

export const Portfolio = ({ variant = "clients" }: PortfolioProps) => {
  const [activeVideo, setActiveVideo] = useState<Project["video"] | null>(null);

  const list = variant === "clients" ? clientProjects : projects;
  const [featuredProject, ...otherProjects] = list;
  const { heading, intro } = copy[variant];

  return (
    <section id="projects" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-muted-foreground">{intro}</p>
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="group relative flex flex-col md:flex-row p-8 rounded-3xl bg-background border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-bl-xl border-l border-b border-primary/20">
              FEATURED PROJECT
            </div>

            <div className="flex-1 flex flex-col z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl flex-grow">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1.5 rounded-md bg-primary/5 border border-primary/20 text-foreground whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 mt-auto">
                <ProjectLinks
                  project={featuredProject}
                  size="lg"
                  onPlay={() => setActiveVideo(featuredProject.video ?? null)}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl bg-background border border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 h-full"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <ProjectLinks
                  project={project}
                  onPlay={() => setActiveVideo(project.video ?? null)}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        videoSrc={activeVideo?.src ?? ""}
        title={activeVideo?.title}
        description={activeVideo?.description}
      />
    </section>
  );
};
