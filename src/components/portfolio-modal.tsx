"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";
import Carousel from "@/components/carousel";
import { useEffect } from "react";

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function PortfolioModal({
  project,
  onClose,
}: PortfolioModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image Carousel */}
              <div className="w-full aspect-video bg-black/50">
                <Carousel images={project.images} alt={project.title} />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${
                      project.category === "web"
                        ? "bg-blue-500/15 text-blue-400"
                        : "bg-emerald-500/15 text-emerald-400"
                    }`}
                  >
                    {project.category === "web" ? "Web App" : "Mobile App"}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                      >
                        View Live →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-all"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
