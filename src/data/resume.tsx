import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Kumar Chaurasia",
  initials: "TKC",
  url: "https://tanmaychaurasia.dev",
  location: "Kanpur, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Kanpur",
  description:
    "I build high-performance web & mobile apps for businesses that want to stand out.",
  summary:
    "I'm a freelance full-stack developer specializing in building modern web applications and cross-platform mobile apps. From SaaS platforms and e-commerce stores to event management systems and social apps — I turn ideas into polished, production-ready products. I work with the latest technologies to deliver fast, scalable, and beautifully designed solutions that help businesses grow.",
  avatarUrl: "./ProfilePhoto.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Hono",
    "Golang",
    "Firebase",
    "Supabase",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Jenkins",
    "Linux",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "tanmaykumar.kanpur@gmail.com",
    tel: "+91 7985764433",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TanmayChaurasia24",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tanmay-kumar-chaurasia-851806245/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tanmayKumar2026",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@TomorrowTechCode",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },
  services: [
    {
      title: "Web App Development",
      icon: "🌐",
      description:
        "Custom web applications built with modern frameworks. From landing pages to complex SaaS platforms — pixel-perfect, responsive, and blazing fast.",
      features: [
        "Custom Web Applications & SaaS Platforms",
        "E-Commerce Stores & Marketplaces",
        "Admin Dashboards & Internal Tools",
        "Landing Pages & Marketing Websites",
        "API Development & Integration",
      ],
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description:
        "Cross-platform mobile applications that work flawlessly on iOS and Android. Native feel, smooth performance, and beautiful interfaces.",
      features: [
        "Cross-Platform Apps (iOS & Android)",
        "React Native & Expo Development",
        "App Store & Play Store Deployment",
        "Push Notifications & Real-time Features",
        "Offline Support & Local Storage",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Discovery & Planning",
      icon: "📋",
      description:
        "We start with understanding your vision, target audience, and business goals. I create a detailed roadmap and technical plan.",
    },
    {
      step: 2,
      title: "Design & Prototype",
      icon: "🎨",
      description:
        "I design clean, modern interfaces that your users will love. You get to review and approve before any code is written.",
    },
    {
      step: 3,
      title: "Development & Testing",
      icon: "💻",
      description:
        "Clean, scalable code built with best practices. Regular updates and demos so you always know the progress.",
    },
    {
      step: 4,
      title: "Launch & Support",
      icon: "🚀",
      description:
        "Smooth deployment to production. I provide post-launch support to ensure everything runs perfectly.",
    },
  ],
} as const;
