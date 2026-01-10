"use client";

import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "DynamoDB",
  "Python",
  "Progressive Web Apps",
  "Serverless",
  "GitHub Actions",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "AI",
  "GraphQL",
  "Socket.io",
  "Sequelize",
  "OAuth",
  "GIT",
  "Storybook",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Playwright",
  "Tailwind CSS",
  "CSS",
  "SASS",
  "HTML",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-center font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
