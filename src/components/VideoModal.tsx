"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
  description?: string;
}

export const VideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  title = "Project Demo",
  description,
}: VideoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-4xl mx-4"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Video Container */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <video src={videoSrc} controls autoPlay className="w-full aspect-video" title={title}>
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Title */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              {description && (
                <p className="text-sm text-gray-300 mt-2 max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
