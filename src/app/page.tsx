"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
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
  SiSupabase,
  SiFirebase,
  SiMongodb,
  SiKubernetes,
  SiRedis,
  SiPostgresql,
  SiApachekafka,
  SiNginx,
} from "react-icons/si";

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
          <p className="text-white">Hello, I'm</p>
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
          <p className="text-muted-foreground md:text-xl mt-2">
            I've worked on a variety of projects, from simple websites to
            complex web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 h-[60vh] w-[100vw]">
          {DATA.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] animate-border h-[100%] w-[100%]">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                  
                  <div>
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center pl-10 pr-10">
                    {/* Project Details */}
                    <h3 className="text-xl font-semibold text-blue-400 mt-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Links */}
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:underline"
                      >
                        View Project →
                      </a>
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-gray-200"
                        >
                          Watch Video
                        </a>
                      )}
                    </div>
                  </div>
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
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="text-4xl ">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
    </main>
  );
}
