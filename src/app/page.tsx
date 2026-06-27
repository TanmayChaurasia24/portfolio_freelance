"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";
import Link from "next/link";
import { Ripple } from "@/components/magicui/ripple";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaJenkins,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiHono,
  SiGoland,
  SiFirebase,
  SiMongodb,
  SiKubernetes,
  SiRedis,
  SiPostgresql,
  SiApachekafka,
  SiNginx,
} from "react-icons/si";
import ServiceCard from "@/components/service-card";
import PortfolioGrid from "@/components/portfolio-grid";
import PortfolioModal from "@/components/portfolio-modal";
import ProcessTimeline from "@/components/process-timeline";

const BLUR_FADE_DELAY = 0.04;

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Hono", icon: <SiHono /> },
      { name: "Golang", icon: <SiGoland /> },
      { name: "Kafka", icon: <SiApachekafka /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Jenkins", icon: <FaJenkins /> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  },
];

export default function Page() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <main className="flex flex-col w-full justify-center items-center">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 shadow-lg space-y-8 p-6"
      >
        <div className="z-10 whitespace-pre-wrap text-center space-y-4 max-w-3xl">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <p className="text-gray-400 text-lg font-medium tracking-wide uppercase">
              Freelance Developer
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">I Build Apps That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Grow Businesses
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Full-Stack Web &amp; Mobile App Development — from idea to
              production-ready product.
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="#portfolio"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 bg-white/5 text-gray-300 rounded-full font-semibold text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>
            </div>
          </BlurFade>
        </div>

        <Ripple />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="services" className="w-full py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What I Offer
            </motion.h2>
            <span className="block h-[3px] w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
            <motion.p
              className="text-gray-400 mt-4 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              End-to-end development services to bring your digital product to
              life.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DATA.services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PORTFOLIO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="portfolio" className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Portfolio
            </motion.h2>
            <span className="block h-[3px] w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
            <motion.p
              className="text-gray-400 mt-4 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A showcase of web and mobile applications I&apos;ve built for
              clients and personal projects.
            </motion.p>
          </div>

          <PortfolioGrid
            projects={portfolioProjects}
            onProjectClick={setSelectedProject}
          />
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ═══════════════════════════════════════════════════════
          TECH STACK SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="skills" className="w-full py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Toolbox
            </motion.h2>
            <span className="block h-[3px] w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
            <motion.p
              className="text-gray-400 mt-4 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I use modern, battle-tested technologies to build reliable
              products.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 p-[1px] rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gray-900 p-6 rounded-xl h-full w-full">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center bg-black/50 px-3 py-2 rounded-lg hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-xl mr-2">{skill.icon}</span>
                        <span className="text-sm">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROCESS / HOW I WORK SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="process" className="w-full py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How I Work
            </motion.h2>
            <span className="block h-[3px] w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
            <motion.p
              className="text-gray-400 mt-4 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A transparent, collaborative process from initial idea to final
              launch.
            </motion.p>
          </div>

          <ProcessTimeline steps={DATA.process} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />

          {/* Decorative blurs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative text-center py-16 px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Bring Your Idea to Life?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Let&apos;s discuss your project and build something amazing
              together. No commitment, just a conversation.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-base hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 cta-glow"
            >
              Get In Touch →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="contact" className="w-full py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Left - Contact Text */}
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="max-w-[500px] text-gray-400 text-lg leading-relaxed">
                  Have an idea for a web or mobile app? I&apos;d love to hear
                  about it. Reach out through any of these channels and
                  I&apos;ll get back to you within 24 hours.
                </p>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center gap-3 md:justify-start justify-center">
                    <span className="text-blue-400">✉</span>
                    <span>{DATA.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3 md:justify-start justify-center">
                    <span className="text-blue-400">📞</span>
                    <span>{DATA.contact.tel}</span>
                  </div>
                </div>
                <div className="flex gap-3 md:justify-start justify-center pt-2">
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                      aria-label={name}
                    >
                      <social.icon className="w-4 h-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Right - Profile Image */}
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-50 blur-md" />
                  <img
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
                  />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Bottom spacer for dock navbar */}
      <div className="h-20" />
    </main>
  );
}
