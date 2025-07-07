import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Database, Globe, BookOpen } from "lucide-react";

const projects = [
  {
    name: "Spatial Association Rules from Fuzzy Spatial Data",
    desc: "Research project developing advanced spatial analysis pipeline for NYC data using R, SQL, and Overleaf. Implemented novel algorithms for fuzzy spatial data processing and association rule mining.",
    icon: <Database className="w-6 h-6" />,
    link: "https://github.com/thiagodeschamps",
    category: "Research",
    tech: ["R", "SQL", "Overleaf", "Spatial Analysis", "Machine Learning"],
    featured: true
  },
  {
    name: "Enterprise Data Platform Architecture",
    desc: "Designed and implemented petabyte-scale data platform serving 1000+ concurrent users with 99.9% SLA uptime. Integrated AWS, Trino, Delta Lake, and real-time streaming capabilities.",
    icon: <Code className="w-6 h-6" />,
    link: "https://github.com/thiagodeschamps",
    category: "Data Engineering",
    tech: ["AWS", "Trino", "Delta Lake", "Python", "Kubernetes"],
    featured: true
  },
  {
    name: "Real-time Data Streaming Platform",
    desc: "Built high-performance streaming platform processing 100M+ daily records with sub-second latency. Implemented end-to-end data pipeline with Kafka, Debezium, and microservices architecture.",
    icon: <Globe className="w-6 h-6" />,
    link: "https://github.com/thiagodeschamps",
    category: "Data Engineering",
    tech: ["Kafka", "Debezium", "GCP", "Python", "Go"],
    featured: false
  },
  {
    name: "AutoGC Analysis Tool",
    desc: "Developed automated data analysis application reducing processing time by 85%. Built with FastAPI, Kubernetes, and Snowflake for enterprise-grade scalability and performance.",
    icon: <BookOpen className="w-6 h-6" />,
    link: "https://github.com/thiagodeschamps",
    category: "Automation",
    tech: ["FastAPI", "Kubernetes", "Snowflake", "Python"],
    featured: false
  },
];

const text = {
  en: {
    sectionTitle: "Projects & Publications",
    sectionDesc: "Here are some things I've built or worked on—real projects, real problems, and a lot of learning along the way. If you want to know more about any of these, just ask me."
  },
  pt: {
    sectionTitle: "Projetos & Publicações",
    sectionDesc: "Aqui estão alguns projetos e trabalhos que desenvolvi—problemas reais, soluções reais e muito aprendizado no caminho. Se quiser saber mais sobre algum deles, é só perguntar."
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

export default function Projects({ lang }) {
  const isMobile = useIsMobile();
  const t = text[lang] || text.en;
  return (
    <section id="projects" className="py-10 px-4 sm:py-16 w-full max-w-screen-md mx-auto">
      <motion.div
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="section-title mb-4 text-2xl sm:text-3xl md:text-4xl">{t.sectionTitle}</h2>
        <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-2xl mx-auto text-base sm:text-lg">
          {t.sectionDesc}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: idx * 0.1, duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`card p-5 sm:p-6 flex flex-col gap-4 bg-cardLight/80 dark:bg-cardDark/80 rounded-2xl shadow-md border border-borderLight/20 dark:border-borderDark/20`}
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent">
                {proj.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-textLight dark:text-textDark">
                  {proj.name}
                </h3>
                <span className="text-xs font-medium text-accent bg-accent/10 dark:bg-accent/20 px-2 py-1 rounded-full">
                  {proj.category}
                </span>
              </div>
              {proj.featured && (
                <span className="ml-auto text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full font-medium">
                  Featured
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-textLightSecondary dark:text-textDarkSecondary leading-relaxed text-base sm:text-lg">
              {proj.desc} If you want details or have questions, just ask me.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-cardLight/50 dark:bg-cardDark/50 text-textLightSecondary dark:text-textDarkSecondary px-2 py-1 rounded-md border border-borderLight/30 dark:border-borderDark/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accentHover transition-colors duration-200 group/link mt-2 text-base sm:text-lg"
              style={{ minHeight: 44 }}
              aria-label={`View ${proj.name} on GitHub`}
            >
              <Github className="w-5 h-5" />
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
