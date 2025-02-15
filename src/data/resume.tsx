import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Kumar Chaurasia",
  initials: "TKC",
  url: "C:\Users\kuamr\Downloads\dillionverma-portfolio-bb8dd0a\dillionverma-portfolio-bb8dd0a\public\Profile Photo.png",
  location: "Kanpur, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Freelance Full Stack Web Developer | open source contributor | Devops",
  summary:
    "Crafting Scalable Solutions with Code and Innovation I am Tanmay Kumar Chaurasia, a passionate and skilled Web Developer What I Bring to the Table: 👉Proficient in JavaScript and TypeScript for robust and scalable development. 👉Expertise in MERN Stack and Next.js for building responsive and efficient web applications. 👉Experience with Firebase, PostgreSQL, and Docker for seamless integration, database management, and containerization.I thrive in fast-paced environments and love taking on challenges that push me out of my comfort zone. Let's connect and explore opportunities where I can contribute to your organization's growth and innovation!",
  avatarUrl: "./ProfilePhoto.png",
  skills: [
    "c++",
    "javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Monorepo",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Hono",
    "Golang",
    "supabase",
    "Firebase",
    "MongoDB",
    "Docker",
    "Kubernates",
    "Jenkkins",
    "Linux",
    "Computer Networks",
    "Operating system",


  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
  ],
  education: [
    {
      school: "Graphic Era Deemed To be University",
      href: "",
      degree: "Bachelor's in Technology (Computer Science)",
      logoUrl: "data:image/png;base64,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",
      start: "2022",
      end: "2026",
    },
 
  ],
  projects: [
    {
      title: "Fundme",
      href: "",
      dates: "June 2024 - Present",
      active: true,
      description:
        "CrowdFunding website which help Developers to fund their projects by there fans.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Razorpay",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/TanmayChaurasia24/FundMe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fundme.png",
      video:
        "",
    },
    {
      title: "Bright Minds",
      href: "",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Platform for students where they can read articles for different subjects and can learn things",
      technologies: [
        "React.js",
        "Typescript",
        "Express.js",
        "MongoDB",
        "WebSockets",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/TanmayChaurasia24/edutech",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/brightminds.png",
      video: "",
    },


  ],
  // hackathons: [
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
