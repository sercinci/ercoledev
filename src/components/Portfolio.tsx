"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "xcore.gg",
    description:
      "Create your unified gaming profile. One identity for all your games across Steam, Xbox, PlayStation, and more. Connect with gamers worldwide.",
    tags: ["Next.js", "Node.js", "AWS", "Prisma", "PostgreSQL"],
    link: "https://xcore.gg",
  },
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
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

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

              <div className="flex gap-6 mt-auto">
                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10"
                  >
                    <ExternalLink size={20} /> Check it out
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
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

              <div className="flex gap-4 mt-auto">
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
