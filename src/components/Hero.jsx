import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function checkMobile() {
      // Use matchMedia for more reliable detection
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
}

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center gap-8 py-10 px-4 sm:py-16 sm:gap-10 text-center relative z-10 w-full max-w-screen-sm mx-auto">
      {/* Profile Image */}
      <motion.div
        className="relative flex justify-center w-full"
        initial={isMobile ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
        whileInView={isMobile ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src="/imgs/profile.png"
          alt="Thiago Deschamps"
          className="rounded-full border-4 border-accent shadow-lg w-28 h-28 sm:w-36 sm:h-36 object-cover mx-auto"
          loading="lazy"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent break-words leading-tight w-full"
        initial={isMobile ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        whileInView={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: 0.25, duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Thiago Deschamps
      </motion.h1>

      {/* Title */}
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl font-semibold text-textLightSecondary dark:text-textDarkSecondary mt-2"
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: 0.4, duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Data (Platform) Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-xl mt-2 sm:mt-4 text-base sm:text-lg text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mx-auto"
        initial={isMobile ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        whileInView={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: 0.5, duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        I'm a data engineer who loves building data platforms from the ground up. My day-to-day is all about connecting systems, making sure data is reliable, and keeping everything running smoothly—whether it's integration, quality, governance, or DevOps for data. If you're curious about how this all works or need help with your own data setup, just ask!
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8 w-full"
        initial={isMobile ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        whileInView={isMobile ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: 0.65, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <a
          href="mailto:thiago.desch@gmail.com"
          title="Email"
          className="btn-hero group w-14 h-14 flex items-center justify-center rounded-xl bg-cardLight/60 dark:bg-cardDark/60 hover:bg-accent/10 transition text-accent text-xl shadow-md"
          target="_blank"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/thiagodeschamps"
          title="GitHub"
          className="btn-hero group w-14 h-14 flex items-center justify-center rounded-xl bg-cardLight/60 dark:bg-cardDark/60 hover:bg-accent/10 transition text-accent text-xl shadow-md"
          target="_blank"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/thiago-deschamps"
          title="LinkedIn"
          className="btn-hero group w-14 h-14 flex items-center justify-center rounded-xl bg-cardLight/60 dark:bg-cardDark/60 hover:bg-accent/10 transition text-accent text-xl shadow-md"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="cv_thiagodeschamps_en.pdf"
          title="Download CV"
          className="btn-hero group w-14 h-14 flex items-center justify-center rounded-xl bg-cardLight/60 dark:bg-cardDark/60 hover:bg-accent/10 transition text-accent text-xl shadow-md"
          target="_blank"
          aria-label="Download CV"
        >
          <Download className="w-6 h-6" />
        </a>
        <span
          className="btn-hero group w-14 h-14 flex items-center justify-center rounded-xl bg-cardLight/60 dark:bg-cardDark/60 text-blue-500 text-xl shadow-md cursor-default"
          title="São Paulo, Brazil"
        >
          <MapPin className="w-6 h-6" />
        </span>
      </motion.div>
    </section>
  );
}
