"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Carousel from "@/components/carousel";

import { DATA } from "@/data/resume";
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
import Image from "next/image";
import { Span } from "next/dist/trace";

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
  return (
    <main className="flex flex-col w-[100%] justify-center items-center space-y-8">
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border shadow-lg space-y-6 p-6">
        <div className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent space-y-2">
          <p className="text-white">Hello, I&apos;m</p>
          <p>{DATA.name}</p>
          <p className="text-neutral-300">Full Stack Deverloper</p>
        </div>

        {/* Ripple Effect */}
        <Ripple />
      </div>

      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="skills" className="py-16 text-white">
        <div className="flex flex-col items-center space-y-6">
          {/* Title with Animation */}
          <motion.h2
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Toolbox
          </motion.h2>
          <span className="block h-[3px] w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-2 rounded-full"></span>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-6">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-400 p-[1px] rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg h-full w-full">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center bg-black bg-opacity-50 px-3 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="text-lg">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 text-white">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <span className="block h-[3px] w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-2 rounded-full"></span>
        </div>

        <div className="space-y-16 px-6">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 h-80 overflow-hidden">
                <Carousel
                  images={project.images}
                  alt={project.title}
                />
              </div>

              {/* Project Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-gray-300 mt-4">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-center md:justify-start gap-4">
                  {project.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="text-blue-400 hover:underline flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="w-4 h-4">{link.icon}</span>
                      {link.type}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact" className="w-full py-16 ">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left - Contact Text */}
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[500px] text-muted-foreground text-lg">
                  Want to chat? Just shoot me a DM{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on Twitter
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
                <div className="max-w-[500px] text-muted-foreground text-sm flex flex-col justify-start">
                  <div>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    kuamrchaurasiatanmay@gmail.com
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      Phone Number:
                    </span>{" "}
                    +91 7985764433
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Right - Profile Image */}
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="flex justify-center">
                <img
                  src={DATA.avatarUrl} // Replace with your actual image path
                  alt="Your Name"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}
