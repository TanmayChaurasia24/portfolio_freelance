"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: readonly string[];
  index: number;
}

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Gradient border wrapper */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/5">
        {/* Icon */}
        <div className="text-5xl mb-5">{icon}</div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
