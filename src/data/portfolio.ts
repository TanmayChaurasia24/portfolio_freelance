export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: "web" | "mobile";
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  // ─── Web Apps ───────────────────────────────────────────────
  {
    id: "tanforge",
    title: "TanForge",
    description:
      "A powerful developer tool platform with a sleek dark UI, enabling developers to forge and manage projects efficiently with built-in collaboration features.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    images: [
      "/freelance/web-apps/tanforge/tanforge-1.png",
      "/freelance/web-apps/tanforge/tanforge-2.png",
      "/freelance/web-apps/tanforge/tanforge-3.png",
      "/freelance/web-apps/tanforge/tanforge-4.png",
    ],
  },
  {
    id: "achiverr",
    title: "Achiverr",
    description:
      "An AI-powered goal tracking platform that helps users break down their goals into actionable steps, track progress, and stay accountable with smart reminders.",
    category: "web",
    technologies: [
      "React.js",
      "TypeScript",
      "Prisma",
      "TailwindCSS",
      "PostgreSQL",
      "Node.js",
    ],
    images: [
      "/freelance/web-apps/achiverr/achiverr-1.png",
      "/freelance/web-apps/achiverr/achiverr-2.png",
      "/freelance/web-apps/achiverr/achiverr-3.png",
      "/freelance/web-apps/achiverr/achiverr-4.png",
    ],
  },
  {
    id: "redefine",
    title: "Redefine",
    description:
      "A modern web application with a clean, minimal interface designed to redefine user experiences through intuitive navigation and responsive design.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
    images: [
      "/freelance/web-apps/redefine/redefine-1.png",
      "/freelance/web-apps/redefine/redefine-2.png",
      "/freelance/web-apps/redefine/redefine-3.png",
      "/freelance/web-apps/redefine/redefine-4.png",
      "/freelance/web-apps/redefine/redefine-5.png",
    ],
  },
  {
    id: "mangalam-events",
    title: "Mangalam Events",
    description:
      "A comprehensive event management platform for planning and coordinating events, featuring vendor management, guest lists, and real-time event tracking.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
    images: [
      "/freelance/web-apps/mangalam_events/mangalam_events-1.png",
      "/freelance/web-apps/mangalam_events/mangalam_events-2.png",
      "/freelance/web-apps/mangalam_events/mangalam_events-3.png",
      "/freelance/web-apps/mangalam_events/mangalam_events-4.png",
    ],
  },
  {
    id: "adytan",
    title: "Adytan",
    description:
      "A beautifully crafted web application featuring an elegant UI with smooth animations and a premium dark-themed design for an immersive user experience.",
    category: "web",
    technologies: ["React.js", "TypeScript", "TailwindCSS", "Node.js"],
    images: [
      "/freelance/web-apps/adytan/adytan-1.png",
      "/freelance/web-apps/adytan/adytan-2.png",
      "/freelance/web-apps/adytan/adytan-3.png",
    ],
  },
  {
    id: "interfere",
    title: "Interfere",
    description:
      "A feature-rich web platform with an interactive interface, built for seamless user engagement with real-time data handling and dynamic content rendering.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    images: [
      "/freelance/web-apps/interfere/interfere-1.png",
      "/freelance/web-apps/interfere/interfere-2.png",
      "/freelance/web-apps/interfere/interfere-3.png",
      "/freelance/web-apps/interfere/interfere-4.png",
    ],
  },
  {
    id: "vibely",
    title: "Vibely",
    description:
      "A vibrant social platform with a lively UI, connecting people through shared interests, events, and community-driven content with real-time interactions.",
    category: "web",
    technologies: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "Socket.io"],
    images: [
      "/freelance/web-apps/vibely/vibely-1.png",
      "/freelance/web-apps/vibely/vibely-2.png",
      "/freelance/web-apps/vibely/vibely-3.png",
      "/freelance/web-apps/vibely/vibely-4.png",
      "/freelance/web-apps/vibely/vibely-5.png",
      "/freelance/web-apps/vibely/vibely-6.png",
    ],
  },
  {
    id: "pizzaexpress",
    title: "Pizza Express",
    description:
      "A modern food ordering web app with an appetizing UI, featuring a full menu catalog, cart management, order tracking, and seamless checkout experience.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "Stripe"],
    images: [
      "/freelance/web-apps/pizzaexpress/pizzaexpress-1.png",
      "/freelance/web-apps/pizzaexpress/pizzaexpress-2.png",
      "/freelance/web-apps/pizzaexpress/pizzaexpress-3.png",
      "/freelance/web-apps/pizzaexpress/pizzaexpress-4.png",
    ],
  },
  {
    id: "pressery",
    title: "Pressery",
    description:
      "A content publishing platform with a clean editorial design, supporting rich text editing, media management, and seamless content distribution workflows.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    images: [
      "/freelance/web-apps/pressery/pressery-1.png",
      "/freelance/web-apps/pressery/pressery-2.png",
      "/freelance/web-apps/pressery/pressery-3.png",
      "/freelance/web-apps/pressery/pressery-4.png",
    ],
  },
  {
    id: "postspark",
    title: "PostSpark",
    description:
      "A social media management tool that helps creators and businesses schedule, design, and publish posts across multiple platforms with analytics insights.",
    category: "web",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    images: [
      "/freelance/web-apps/postspark/postspark-1.png",
      "/freelance/web-apps/postspark/postspark-2.png",
      "/freelance/web-apps/postspark/postspark-3.png",
      "/freelance/web-apps/postspark/postspark-4.png",
      "/freelance/web-apps/postspark/postspark-5.png",
      "/freelance/web-apps/postspark/postspark-6.png",
    ],
  },
  {
    id: "tam-fragrances",
    title: "Tam Fragrances",
    description:
      "A premium e-commerce storefront for a luxury fragrance brand, featuring an elegant product showcase, smooth animations, and a refined shopping experience.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "Firebase"],
    images: [
      "/freelance/web-apps/tamfragarences/tamfragarences-1.png",
      "/freelance/web-apps/tamfragarences/tamfragarences-2.png",
      "/freelance/web-apps/tamfragarences/tamfragarences-3.png",
      "/freelance/web-apps/tamfragarences/tamfragarences-4.png",
      "/freelance/web-apps/tamfragarences/tamfragarences-5.png",
    ],
  },

  // ─── Mobile Apps ────────────────────────────────────────────
  {
    id: "money-management",
    title: "Money Management",
    description:
      "A sleek mobile application for personal finance management, featuring expense tracking, budget planning, visual analytics, and smart spending insights.",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Firebase", "Expo"],
    images: [
      "/freelance/mobile-apps/money_management/money_management-1.png",
      "/freelance/mobile-apps/money_management/money_management-2.png",
      "/freelance/mobile-apps/money_management/money_management-3.png",
      "/freelance/mobile-apps/money_management/money_management-4.png",
      "/freelance/mobile-apps/money_management/money_management-5.png",
      "/freelance/mobile-apps/money_management/money_management-6.png",
    ],
  },
];

export const webApps = portfolioProjects.filter((p) => p.category === "web");
export const mobileApps = portfolioProjects.filter(
  (p) => p.category === "mobile"
);
