"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  readonly step: number;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

interface ProcessTimelineProps {
  steps: readonly ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative w-full">
      {/* Desktop: Horizontal layout */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30" />

        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Step number circle */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center mb-5 group-hover:border-blue-400 transition-colors">
              <span className="text-3xl">{step.icon}</span>
            </div>

            {/* Step number badge */}
            <div className="absolute top-0 right-1/2 translate-x-[2.5rem] -translate-y-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
              {step.step}
            </div>

            <h4 className="text-lg font-semibold text-white mb-2">
              {step.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Vertical layout */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            {/* Left: icon + line */}
            <div className="flex flex-col items-center">
              <div className="relative w-14 h-14 rounded-full bg-gray-900 border-2 border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{step.icon}</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold">
                  {step.step}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-[2px] h-full min-h-[40px] bg-gradient-to-b from-blue-500/30 to-transparent mt-2" />
              )}
            </div>

            {/* Right: content */}
            <div className="pb-2">
              <h4 className="text-lg font-semibold text-white mb-1">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
