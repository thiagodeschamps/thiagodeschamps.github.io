import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center gap-8 py-10 px-4 sm:py-16 sm:gap-10 text-center relative z-10 w-full max-w-screen-sm mx-auto">
      {/* Profile Image */}
      <div className="relative flex justify-center w-full">
        <img
          src="/imgs/profile.png"
          alt="Thiago Deschamps"
          className="rounded-full border-4 border-accent shadow-lg w-28 h-28 sm:w-36 sm:h-36 object-cover mx-auto"
          loading="lazy"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent break-words leading-tight w-full">
        Thiago Deschamps
      </h1>

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textLightSecondary dark:text-textDarkSecondary mt-2">
        Data (Platform) Engineer
      </h2>

      {/* Description */}
      <p className="max-w-xl mt-2 sm:mt-4 text-base sm:text-lg text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mx-auto">
        I'm a data engineer who loves building data platforms from the ground up. My day-to-day is all about connecting systems, making sure data is reliable, and keeping everything running smoothly—whether it's integration, quality, governance, or DevOps for data. If you're curious about how this all works or need help with your own data setup, just ask!
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8 w-full">
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
      </div>
    </section>
  );
}
