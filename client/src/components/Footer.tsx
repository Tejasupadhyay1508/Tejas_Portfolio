import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { personalInfo } from "@/data/portfolioData";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: personalInfo.socials.linkedin,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    href: personalInfo.socials.github,
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card/50" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-xl font-bold text-foreground inline-block mb-4"
              data-testid="link-footer-logo"
            >
              <span className="text-primary">&lt;</span>
              Tejas
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              {personalInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  data-testid={`link-footer-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1" data-testid="text-copyright">
            &copy; {currentYear} {personalInfo.name}. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
