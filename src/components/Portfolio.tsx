"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Picks & Bans",
    description:
      "Draft platform inspired by Dota 2's Captain's Mode for Age of Empires II team matches. Features match tracking, player history, leaderboards, and individual ranking progression.",
    tags: ["React", "Node.js", "Socket.io", "Sequelize", "OAuth"],
    link: "https://picknban.xyz",
  },
  {
    title: "Lupus Noctis",
    description:
      "Reimagining of the classic Werewolves party game with unique characters and a Progressive Web App. Perfect blend of smartphone convenience and board game social interaction with a perfect Lighthouse score.",
    tags: ["PWA", "Angular", "AWS Lambda", "DynamoDB", "Cognito"],
    link: "https://sercinci.github.io/lupusnoctislanding",
    github: "https://github.com/sercinci/lupusnoctislanding",
  },
  {
    title: "2BATTS",
    description:
      "Hacking Industry Camp 2018 winner (5 awards). Gives electric car batteries a second life as domestic photovoltaic storage with real-time monitoring and energy management.",
    tags: ["Python", "Node.js", "MongoDB", "IoT", "Raspberry Pi"],
  },
  {
    title: "Hansel & You",
    description:
      "Philips Challenge Winner at Inno{Hacks} 2017. Interactive Amazon Alexa Skill that brings audiobooks to life with user-driven narratives and decision-making.",
    tags: ["Alexa Skills", "Node.js", "Voice UI"],
    link: "https://devpost.com/software/hansel-you",
  },
  {
    title: "Nautiscuola Quiz",
    description:
      "Responsive web application for nautical license exam simulations and chapter-organized test preparation with optimized UX for different devices.",
    tags: ["JavaScript", "Responsive Design", "Web App"],
    link: "http://nautiscuola.it/quiz/",
  },
  {
    title: "BeEco",
    description:
      "3rd place at Accenture Hackathon. Rewarding platform incentivizing eco-sustainable commuting with points for achievements. Includes brand challenges and corporate competitions.",
    tags: ["Gamification", "Sustainability", "Mobile"],
  },
];

export const Portfolio = () => {
  return (
    <section id="projects" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 h-20">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 h-16">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Link
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
