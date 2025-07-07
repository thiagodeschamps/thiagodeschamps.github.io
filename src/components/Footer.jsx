import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer className="py-10 mt-16 border-t border-borderLight/50 dark:border-borderDark/50 bg-black/40 backdrop-blur-sm w-full">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center space-y-6 text-white">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="mailto:thiago.desch@gmail.com"
              className="p-4 rounded-xl glass-effect hover:scale-110 transition-all duration-200 text-textLightSecondary dark:text-textDarkSecondary hover:text-accent w-14 h-14 flex items-center justify-center text-xl"
              target="_blank"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/thiagodeschamps"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-effect hover:scale-110 transition-all duration-200 text-textLightSecondary dark:text-textDarkSecondary hover:text-accent w-14 h-14 flex items-center justify-center text-xl"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/thiago-deschamps"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-effect hover:scale-110 transition-all duration-200 text-textLightSecondary dark:text-textDarkSecondary hover:text-accent w-14 h-14 flex items-center justify-center text-xl"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-textLightSecondary dark:text-textDarkSecondary text-sm sm:text-base">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>&copy; {new Date().getFullYear()} Thiago Deschamps</span>
              <span className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using React & Tailwind</span>
              </span>
            </p>
            <p className="text-xs mt-2 opacity-80">
              Data Platform Engineer • São Paulo, Brazil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
