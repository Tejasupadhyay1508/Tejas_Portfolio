import { motion } from "framer-motion";
import { Briefcase, Award, Calendar } from "lucide-react";
import { experiences, achievements } from "@/data/portfolioData";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 scroll-mt-20"
      data-testid="section-experience"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" data-testid="text-experience-title">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and notable accomplishments.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-8 flex items-center gap-3 text-foreground"
          >
            <Briefcase className="w-5 h-5 text-primary" />
            Work Experience
          </motion.h3>

          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-10 pb-10 last:pb-0"
                data-testid={`experience-${exp.id}`}
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground" data-testid={`text-experience-role-${exp.id}`}>
                        {exp.role}
                      </h4>
                      <p className="text-primary font-medium" data-testid={`text-experience-company-${exp.id}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                        data-testid={`text-experience-desc-${exp.id}-${idx}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-8 flex items-center gap-3 text-foreground"
          >
            <Award className="w-5 h-5 text-primary" />
            Achievements
          </motion.h3>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card border border-card-border rounded-xl p-6 shadow-lg"
                data-testid={`achievement-${achievement.id}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2" data-testid={`text-achievement-title-${achievement.id}`}>
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`text-achievement-desc-${achievement.id}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
