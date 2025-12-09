import { motion } from "framer-motion";
import { skills } from "@/data/portfolioData";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { Code2, Key, Layers } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  html: SiHtml5,
  css: SiCss3,
  shadcn: Layers,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  api: Code2,
  jwt: Key,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vercel: SiVercel,
};

interface SkillPillProps {
  name: string;
  icon: string;
}

function SkillPill({ name, icon }: SkillPillProps) {
  const Icon = iconMap[icon] || Code2;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-card-border whitespace-nowrap group cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50"
      data-testid={`skill-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
}

interface MarqueeRowProps {
  items: { name: string; icon: string }[];
  direction: "left" | "right";
  speed?: number;
}

function MarqueeRow({ items, direction, speed = 40 }: MarqueeRowProps) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 group">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className={`flex gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{
          width: "fit-content",
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <SkillPill key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const frontendAndTools = [...skills.frontend, ...skills.tools];
  const backendAndDatabase = [...skills.backend, ...skills.database];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 scroll-mt-20"
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" data-testid="text-skills-title">
            Tech Stack & Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life. Hover over any skill to pause and explore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div>
            <p className="text-sm text-muted-foreground mb-2 text-center">Frontend & Tools</p>
            <MarqueeRow items={frontendAndTools} direction="left" speed={35} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2 text-center">Backend & Databases</p>
            <MarqueeRow items={backendAndDatabase} direction="right" speed={30} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
