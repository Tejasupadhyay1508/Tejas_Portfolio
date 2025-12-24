import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolioData";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/")) {
      // Route navigation
      setLocation(href);
    } else if (href.startsWith("#")) {
      // Anchor link navigation
      // If not on home page, go to home first
      if (location !== "/") {
        setLocation("/");
        // Scroll to section after navigation
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  function getDriveFileId(url: string) {
    const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (m && m[1]) return m[1];
    const q = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    return q ? q[1] : null;
  }

  function getDrivePreviewUrl(url: string) {
    const id = getDriveFileId(url);
    if (!id) return url;
    return `https://drive.google.com/file/d/${id}/preview`;
  }

  function getDriveDownloadUrl(url: string) {
    const id = getDriveFileId(url);
    if (!id) return url;
    return `https://drive.google.com/uc?export=download&id=${id}`;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="text-xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(59, 130, 246, 0), 0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)",
                  "0 0 10px rgba(59, 130, 246, 0), 0 0 20px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              data-testid="link-logo"
            >
              <span className="text-primary">&lt;</span>
              Tejas
              <span className="text-primary">/&gt;</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => navigateTo(link.href)}
                  className="px-4 py-2 text-muted-foreground transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  <span className="relative z-10 group-hover:text-foreground transition-colors">
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300"
                  />
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="secondary"
                className="gap-2"
                onClick={() => setIsPreviewOpen(true)}
                data-testid="button-preview-resume"
              >
                <Download className="w-4 h-4" />
                Preview Resume
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigateTo(link.href)}
                  className="text-2xl font-medium text-foreground"
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button
                  className="gap-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsPreviewOpen(true);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Preview Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsPreviewOpen(false)}
          />
          <div className="relative z-10 w-[90%] max-w-4xl h-[80%] bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b border-border">
              <h3 className="font-semibold">Resume Preview</h3>
              <div className="flex items-center gap-2">
                <a
                  href={getDriveDownloadUrl(personalInfo.resumeLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded bg-primary text-primary-foreground"
                >
                  Download
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-3 py-1 rounded bg-muted"
                >
                  Close
                </button>
              </div>
            </div>
            <iframe
              src={getDrivePreviewUrl(personalInfo.resumeLink)}
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}
