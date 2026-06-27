"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PortfolioProject } from "@/data/portfolio";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  onProjectClick: (project: PortfolioProject) => void;
}

const filters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
] as const;

export default function PortfolioGrid({
  projects,
  onProjectClick,
}: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => onProjectClick(project)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-gray-900/50 border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full font-medium uppercase tracking-wider ${
                      project.category === "web"
                        ? "bg-blue-500/15 text-blue-400"
                        : "bg-emerald-500/15 text-emerald-400"
                    }`}
                  >
                    {project.category === "web" ? "Web" : "Mobile"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white/5 text-gray-400 rounded-md text-[11px] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-gray-500 text-[11px]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
