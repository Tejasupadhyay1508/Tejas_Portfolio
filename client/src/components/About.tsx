import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 scroll-mt-20"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card/50 border border-card-border rounded-2xl p-8 md:p-12">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              {/* Introduction */}
              <p>
                I'm <span className="text-green-400 font-semibold">Tejas Upadhyay</span>.{" "}
                <br />
                Final year <span className="font-semibold text-foreground">Computer Science & Information Technology</span> student at{" "}
                <span className="font-semibold text-foreground">Institute of Engineering & Science, IPS Academy, Indore</span>.
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Tech Stack & Problem Solving:</span> Proficient in the MERN stack, Next.js, PostgreSQL, and AI Integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Full-Stack & AI:</span> Developed Prepster, an AI-powered interview assistant, and optimized MongoDB architectures to reduce query latency by 25%
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Autonomous Engineering:</span> Contributed to the eBAJA team, collaborating from the ground up to build an autonomous vehicle
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Hackathons & Leadership:</span> Competed in 3+ hackathons, leading a team to a Top 18 finish in the Smart India Hackathon
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Versatility:</span> Active in multiple interdisciplinary competitions and technical workshops, balancing high-impact projects with academic consistency
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
