"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "./VideoModal";
import { Play } from "lucide-react";

export const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Open to new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Federico <span className="text-primary">Ercole</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
              Passionate Software Engineer who thrives on solving complex challenges and
              architecting cutting-edge solutions. Transforming ambitious ideas into robust,
              scalable systems with precision and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Let's Connect
              </a>
              <a
                href="#experiences"
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground border border-white/10 hover:bg-white/5 transition-colors"
              >
                My Experiences
              </a>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer"
              >
                <Play size={18} />
                Midnight Heist Demo
              </button>
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
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/Midnight Heist fast play through.mp4"
        title="Midnight Heist - Project Demo"
        description="Minecraft-based experience where players could interact with NPCs that had distinct personalities powered by large language models. I led the end-to-end implementation across Minecraft, web, and real-time voice pipeline, including live transcription and voice responses."
      />
    </>
  );
};
