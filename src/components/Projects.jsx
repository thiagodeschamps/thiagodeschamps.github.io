import React, { useState, useEffect } from "react";
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

export default function Projects() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="section-title mb-4">Projects & Publications</h2>
        <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-3xl mx-auto">
          Showcasing innovative solutions and research in data engineering, from academic research to enterprise-scale implementations. 
          Each project demonstrates technical excellence and measurable business impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ type: "tween", ease: "easeOut", delay: idx * 0.1, duration: 0.7 }}
            className={`card p-6 group hover:shadow-xl transition-all duration-300 ${
              proj.featured ? 'ring-2 ring-accent/20' : ''
            }`}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent">
                    {proj.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-textLight dark:text-textDark">
                      {proj.name}
                    </h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 dark:bg-accent/20 px-2 py-1 rounded-full">
                      {proj.category}
                    </span>
                  </div>
                </div>
                {proj.featured && (
                  <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-textLightSecondary dark:text-textDarkSecondary leading-relaxed">
                {proj.desc}
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
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-accentHover transition-colors duration-300 group/link"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
              >
                <Github className="w-4 h-4" />
                <span>View Project</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
