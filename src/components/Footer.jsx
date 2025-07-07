import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="py-12 mt-16 border-t border-borderLight/50 dark:border-borderDark/50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-6 text-white"
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:thiago.desch@gmail.com"
              className="p-3 rounded-xl glass-effect hover:scale-110 transition-all duration-300 text-textLightSecondary dark:text-textDarkSecondary hover:text-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/thiagodeschamps"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-effect hover:scale-110 transition-all duration-300 text-textLightSecondary dark:text-textDarkSecondary hover:text-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/thiago-deschamps"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-effect hover:scale-110 transition-all duration-300 text-textLightSecondary dark:text-textDarkSecondary hover:text-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-textLightSecondary dark:text-textDarkSecondary">
            <p className="flex items-center justify-center gap-2">
              <span>&copy; {new Date().getFullYear()} Thiago Deschamps</span>
              <span className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using React & Tailwind</span>
              </span>
            </p>
            <p className="text-xs mt-2 opacity-70">
              Data Platform Engineer • São Paulo, Brazil
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
