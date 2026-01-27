"use client";

import { motion } from "framer-motion";

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
            I am a Senior Software Engineer with a passion for Full Stack Web Development and
            innovation. Currently based in Vienna, Austria, I thrive in the tech community through
            active participation in hackathons and networking events. My journey has taken me from
            winning multiple hackathon awards to working with leading tech companies like
            ImmoScout24 Austria and Hero Journey Club.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in building scalable web applications using modern technologies, with a
            particular focus on creating exceptional user experiences. Leveraging AI-native development practices,
            whether it's implementing hybrid search solutions, developing Progressive Web Apps, or architecting
            serverless applications on AWS, I bring enthusiasm and expertise to every project.
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
        </motion.div>
      </div>
    </section>
  );
};
