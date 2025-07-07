import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: "Database" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", category: "Programming" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg", category: "Cloud" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "DevOps" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
  { name: "Trino", icon: "https://trino.io/assets/trino-logo.svg", category: "Data" },
  { name: "Airflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg", category: "Data" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", category: "Data" },
  { name: "Delta Lake", icon: "https://deltalake.io/assets/logos/delta-lake-logo.svg", category: "Data" },
  { name: "Snowflake", icon: "https://assets.snowflake.com/image/upload/v1683830363/brand-assets/logo/snowflake-logo-blue.svg", category: "Data" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "DevOps" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "DevOps" },
  { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", category: "DevOps" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg", category: "DevOps" },
];

const categories = ["Programming", "Data", "Cloud", "DevOps", "Database"];

export default function Skills() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="section-title mb-4">Technical Expertise</h2>
        <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-3xl mx-auto">
          Comprehensive expertise in modern data engineering technologies, cloud platforms, and enterprise-grade infrastructure. 
          Proven track record of building scalable, high-performance data platforms with 99.9% uptime SLA.
        </p>
      </motion.div>

      <div className="space-y-8">
        {categories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: categories.indexOf(category) * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="card p-6"
          >
            <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              {category}
            </h3>
            <motion.div
              className="flex gap-3 flex-wrap"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.03 } },
              }}
            >
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { scale: 1, opacity: 1 },
                    }}
                  >
                    <div className="flex items-center px-4 py-3 bg-cardLight/50 dark:bg-cardDark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 gap-3 border border-borderLight/30 dark:border-borderDark/30 backdrop-blur-sm group-hover:border-accent/50">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6 filter dark:brightness-110" 
                        />
                      </div>
                      <span className="font-medium text-textLight dark:text-textDark group-hover:text-accent transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
