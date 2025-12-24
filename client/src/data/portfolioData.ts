export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  aboutMe?: string;
  resumeLink: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
    github: string;
    x?: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
  description?: string;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  bannerImage?: string;
  photos: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Tejas Upadhyay",
  role: "Full Stack Developer & Aspiring Software Engineer",
  tagline: "Crafting seamless digital experiences through code and creativity.",
  
  resumeLink:
    "https://drive.google.com/file/d/1mqZQjVaa2vAYsV0PV0rwR82HL_Gslpuh/view?usp=sharing",
  location: "India",
  // Updated contact email
  // When users submit the contact form, messages will be sent to this address (and to server EMAIL_TO if set)
  email: "tejasupadhyay48@gmail.com",
  phone: "+91-8378922958",
  socials: {
    linkedin: "https://www.linkedin.com/in/tejas-upadhyay-18013a22a/",
    github: "https://github.com/Tejasupadhyay1508",
    x: "https://x.com/Tejas1508",
  },
};

export const typewriterRoles = [
  "Full Stack Developer",
  "Software Engineer",
  "Tech Enthusiast",
  "backend developer"
];

export const skills: SkillCategory = {
  frontend: [
    { name: "React.js", icon: "react", description: "JavaScript library for building interactive user interfaces with reusable components" },
    { name: "Next.js", icon: "nextjs", description: "React framework with server-side rendering and static site generation capabilities" },
    { name: "HTML5", icon: "html", description: "Standard markup language for creating semantic web page structures" },
    { name: "CSS3", icon: "css", description: "Styling language for designing responsive and interactive web layouts" },
    { name: "ShadCN UI", icon: "shadcn", description: "Collection of accessible and customizable React components" },
    { name: "Tailwind", icon: "tailwind", description: "Utility-first CSS framework for rapid UI development" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", description: "JavaScript runtime for building scalable server-side applications" },
    { name: "Express.js", icon: "express", description: "Minimal web application framework for routing and middleware" },
    { name: "RESTful APIs", icon: "api", description: "Architectural style for designing networked applications using HTTP" },
    { name: "JWT", icon: "jwt", description: "Token-based authentication method for secure API communication" },
  ],
  database: [
    { name: "MongoDB", icon: "mongodb", description: "NoSQL database for flexible, document-based data storage" },
    { name: "PostgreSQL", icon: "postgresql", description: "Advanced open-source relational database with powerful features" },
    { name: "MySQL", icon: "mysql", description: "Reliable relational database system for web applications" },
  ],
  tools: [
    { name: "Git", icon: "git", description: "Distributed version control system for tracking code changes" },
    { name: "GitHub", icon: "github", description: "Cloud-based platform for code collaboration and repository hosting" },
    { name: "Postman", icon: "postman", description: "API development and testing platform with visual request builder" },
    { name: "Vercel", icon: "vercel", description: "Cloud platform for deploying Next.js and static websites" },
  ],
};

export const projects: Project[] = [
  {
    id: "prepster",
    title: "Prepster",
    shortDescription: "AI-Powered Interview Assistant for job seekers.",
    fullDescription:
      "A comprehensive full-stack platform designed to help job seekers prepare for interviews with AI-powered tools. The platform includes intelligent resume generation, ATS optimization, and interactive interview quizzes.",
    techStack: ["Next.js", "ShadCN UI", "Neon DB", "Node.js"],
    features: [
      "Integrated AI-based resume generation",
      "ATS optimization scoring and suggestions",
      "Interactive mock interview quizzes",
      "Personalized feedback and improvement tracking",
      "Real-time collaboration features",
    ],
    githubUrl: "https://github.com/Tejasupadhyay1508/Prepster-Ai-career-coach",
    liveUrl: "https://prepster-five.vercel.app/",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    bannerImage: "/images/projects/prepster-banner.png",
    photos: [
      "/images/projects/prepster-1.png",
      "/images/projects/prepster-2.png",
      "/images/projects/prepster-3.png",
    ],
  },
  {
    id: "crypto-tracker",
    title: "Real-Time Crypto Tracker",
    shortDescription: "Live cryptocurrency dashboard with dynamic charts.",
    fullDescription:
      "A real-time cryptocurrency tracking dashboard that provides live price updates, historical data visualization, and portfolio management features. Built with React and integrated with the CoinGecko API for accurate market data.",
    techStack: ["React.js", "Chart.js", "CoinGecko API"],
    features: [
      "Live cryptocurrency price tracking",
      "Dynamic charting with Chart.js",
      "Historical price data visualization",
      "Portfolio tracking and management",
      "Price alerts and notifications",
    ],
    githubUrl: "https://github.com/Tejasupadhyay1508/Blocktracker",
    liveUrl: "https://crypto-dashboard-jan-wine.vercel.app/",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    bannerImage: "/images/projects/crypto-banner.png",
    photos: [
      "/images/projects/crypto-1.png",
      "/images/projects/crypto-2.png",
      "/images/projects/crypto-3.png",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "ips-academy",
    role: "Backend Developer",
    company: "IPS Academy",
    duration: "Jan 2024 - Mar 2024",
    description: [
      "Spearheaded full-stack development initiatives for institutional projects",
      "Optimized MongoDB schemas and queries, reducing database latency by 25%",
      "Implemented RESTful APIs with proper authentication and authorization",
      "Collaborated with cross-functional teams to deliver scalable solutions",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "sih",
    title: "Team Lead - Smart India Hackathon",
    description: "Led a team to the Top 18 nationally in the prestigious Smart India Hackathon, showcasing innovative problem-solving skills.",
  },
  {
    id: "science-project",
    title: "1st Runner-up - Interdisciplinary Science Project Competition",
    description: "Secured 1st Runner-up position for an innovative interdisciplinary science project demonstrating technical excellence.",
  },
];
