"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";

const skills = [
  // Preferred
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "Serverless",
  "Event-Driven Systems",
  "AI",
  "Prisma",

  // Frontend
  "JavaScript",
  "PWA",
  "Tailwind CSS",
  "Storybook",
  "HTML",
  "CSS",
  "SASS",
  "SCSS",

  // Libraries
  "React Query",
  "MUI",
  "Zod",
  "React Hook Form",

  // Backend
  "NestJS",
  "REST APIs",
  "GraphQL",
  "Socket.io",
  "Sequelize",
  "OAuth",
  "Supabase",
  "PHP",
  "Wordpress",
  "Swagger",

  // Databases
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "ElasticSearch",
  "DynamoDB",
  "MySQL",

  // Cloud & DevOps
  "Lambda",
  "S3",
  "SNS",
  "SQS",
  "MSK",
  "EC2",
  "VPC",
  "CDK",
  "CloudFormation",
  "API Gateway",
  "EventBridge",
  "RDS",
  "ElastiCache",
  "CloudFront",
  "Route 53",
  "IAM",
  "CloudWatch",
  "Step Functions",
  "Cognito",
  "Secrets Manager",
  "ECS",
  "EKS",
  "Fargate",
  "Vercel",
  "CI/CD",
  "GitHub Actions",
  "Jenkins",
  "Docker",

  // Architecture
  "Microservices",
  "Distributed Systems",

  // Realtime & AI
  "Streaming pipelines",
  "Speech-to-Text",
  "Text-to-Speech",
  "OpenAI",

  // Testing & Tools
  "Jest",
  "React Testing Library",
  "Cypress",
  "Playwright",
  "GIT",
  "Python",
  "Prettier",

  // Hardware/IoT
  "IoT",
  "Raspberry Pi",
  "Arduino",
  "Electronics",
];

export const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredSkills = useMemo(() => {
    if (!searchTerm.trim()) return skills;
    return skills.filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const skillsToShow = isExpanded ? filteredSkills : filteredSkills.slice(0, 12); // 3 rows × 4 columns = 12 items
  const hiddenSkillsCount = filteredSkills.length - skillsToShow.length;

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>

        {/* Search Box */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search
                size={20}
                className="text-muted-foreground group-focus-within:text-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-background/80 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid or No Results Message */}
        {filteredSkills.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillsToShow.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-background/80 border border-border text-center font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {hiddenSkillsCount > 0 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      Show less
                      <span className="text-sm opacity-75">(-{hiddenSkillsCount})</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm opacity-75">{hiddenSkillsCount} more...</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl bg-background/80 border border-border"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Federico doesn't know yet that skill or perhaps forgot to add it to the list.
                <a
                  href="#contact"
                  className="block mt-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Ask him directly!
                </a>
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
