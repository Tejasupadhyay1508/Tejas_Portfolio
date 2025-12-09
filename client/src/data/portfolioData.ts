export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  resumeLink: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
    github: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
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
  tagline: "Building scalable web applications with Next.js and Node.js.",
  resumeLink: "/resume.pdf",
  location: "Indore, India",
  email: "tejasupadhyay48@gmail.com",
  phone: "+91-8378922958",
  socials: {
    linkedin: "https://linkedin.com/in/tejasupadhyay",
    github: "https://github.com/tejasupadhyay",
  },
};

export const typewriterRoles = [
  "Full Stack Developer",
  "Software Engineer",
  "Tech Enthusiast",
];

export const skills: SkillCategory = {
  frontend: [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "ShadCN UI", icon: "shadcn" },
    { name: "Tailwind", icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "RESTful APIs", icon: "api" },
    { name: "JWT", icon: "jwt" },
  ],
  database: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Postman", icon: "postman" },
    { name: "Vercel", icon: "vercel" },
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
    githubUrl: "https://github.com/tejasupadhyay/prepster",
    liveUrl: "https://prepster.vercel.app",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
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
    githubUrl: "https://github.com/tejasupadhyay/crypto-tracker",
    liveUrl: "https://crypto-tracker.vercel.app",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
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
