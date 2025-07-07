import React from "react";
import { Github, Linkedin, Mail, FileText, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-16 text-center relative z-10">
      {/* Profile Image with Enhanced Styling */}
      <motion.div
        className="relative"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative">
          <motion.img
            src="https://avatars.githubusercontent.com/u/4135063?v=4"
            alt="Thiago Deschamps"
            className="rounded-full border-4 border-accent shadow-2xl w-36 h-36 md:w-40 md:h-40 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl" />
        </div>
      </motion.div>

      {/* Name with Enhanced Gradient */}
      <motion.h1
        className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", delay: 0.25, duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Thiago Deschamps
      </motion.h1>

      {/* Title with Better Typography */}
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-textLightSecondary dark:text-textDarkSecondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", delay: 0.4, duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Data (Platform) Engineer
      </motion.h2>

      {/* Description with Enhanced Styling */}
      <motion.p
        className="max-w-3xl mt-4 text-lg text-textLightSecondary dark:text-textDarkSecondary leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", delay: 0.5, duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        I'm a data engineer who loves building data platforms from the ground up. My day-to-day is all about connecting systems, making sure data is reliable, and keeping everything running smoothly—whether it's integration, quality, governance, or DevOps for data. If you're curious about how this all works or need help with your own data setup, just ask!
      </motion.p>

      {/* Enhanced Social Links */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", delay: 0.65, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.a 
          href="mailto:thiago.desch@gmail.com" 
          title="Email" 
          className="btn-hero group" 
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        >
          <Mail className="w-5 h-5" />
          <span className="hidden sm:inline">Email</span>
        </motion.a>

        <motion.a 
          href="https://github.com/thiagodeschamps" 
          title="GitHub" 
          className="btn-hero group" 
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        >
          <Github className="w-5 h-5" />
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>

        <motion.a 
          href="https://linkedin.com/in/thiago-deschamps" 
          title="LinkedIn" 
          className="btn-hero group" 
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        >
          <Linkedin className="w-5 h-5" />
          <span className="hidden sm:inline">LinkedIn</span>
        </motion.a>

        <motion.a 
          href="cv_thiagodeschamps_en.pdf" 
          title="Download CV" 
          className="btn-hero group" 
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        >
          <Download className="w-5 h-5" />
          <span className="hidden sm:inline">CV</span>
        </motion.a>

        <motion.span 
          className="btn-hero group cursor-default" 
          title="São Paulo, Brazil"
          whileHover={{ y: -2 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        >
          <MapPin className="w-5 h-5 text-blue-500" />
          <span className="hidden sm:inline">São Paulo, BR</span>
        </motion.span>
      </motion.div>
    </section>
  );
}
