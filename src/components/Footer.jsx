import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const text = {
  en: {
    madeWith: "Made with",
    by: "by",
    copyright: "All rights reserved.",
    ask: "Have a question? Reach out!"
  },
  pt: {
    madeWith: "Feito com",
    by: "por",
    copyright: "Todos os direitos reservados.",
    ask: "Tem uma dúvida? Fale comigo!"
  }
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
}

export default function Footer({ lang }) {
  const isMobile = useIsMobile();
  const t = text[lang] || text.en;
  return (
    <footer className="py-10 mt-16 border-t border-borderLight/50 dark:border-borderDark/50 bg-black/40 backdrop-blur-sm w-full">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { type: "tween", ease: "easeOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-6 text-white"
        >
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
              <span>{t.madeWith} <span className="text-red-500">♥</span> {t.by} Thiago Deschamps</span>
              <span className="flex items-center gap-1">
                <span>using React & Tailwind</span>
              </span>
            </p>
            <p className="text-xs mt-2 opacity-80">
              Data Platform Engineer • São Paulo, Brazil
            </p>
            <p className="text-xs mt-2 opacity-80">{t.copyright}</p>
            <div className="mt-2 text-xs sm:text-sm font-medium text-accent dark:text-accentHover">{t.ask}</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
