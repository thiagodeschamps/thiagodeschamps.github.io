import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: "Database" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", category: "Database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazondynamodb.svg", category: "Database" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", category: "Database" },
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
  { name: "Airbyte", icon: "https://avatars.githubusercontent.com/u/66407660", category: "Data" },
  { name: "Soda", icon: "https://avatars.githubusercontent.com/u/66360572", category: "Data" },
  { name: "Great Expectations", icon: "https://avatars.githubusercontent.com/u/32855585", category: "Data" },
  { name: "OpenMetadata", icon: "https://avatars.githubusercontent.com/u/72333247", category: "Data" },
  { name: "AWS Bedrock", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg", category: "AI/LLM" },
  { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg", category: "AI/LLM" },
  { name: "Gemini", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg", category: "AI/LLM" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "DevOps" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "DevOps" },
  { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", category: "DevOps" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg", category: "DevOps" },
];

const categoriesText = {
  en: ["Programming", "Data", "Cloud", "DevOps", "Database", "AI/LLM"],
  pt: ["Programação", "Dados", "Nuvem", "DevOps", "Banco de Dados", "IA/LLM"]
};

const text = {
  en: {
    title: "Technical Expertise",
    description:
      "Comprehensive expertise in modern data engineering technologies, cloud platforms, and enterprise-grade infrastructure. Proven track record of building scalable, high-performance data platforms with 99.9% uptime SLA."
  },
  pt: {
    title: "Conhecimento Técnico",
    description:
      "Experiência abrangente em tecnologias modernas de engenharia de dados, plataformas em nuvem e infraestrutura corporativa. Histórico comprovado de construção de plataformas de dados escaláveis e de alto desempenho com 99,9% de disponibilidade."
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

export default function Skills({ lang }) {
  const isMobile = useIsMobile();
  const t = text[lang] || text.en;
  const categories = categoriesText[lang] || categoriesText.en;
  return (
    <section id="skills" className="py-10 px-4 sm:py-16 w-full max-w-screen-md mx-auto">
      <motion.div
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="section-title mb-4 text-2xl sm:text-3xl md:text-4xl">{t.title}</h2>
        <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-2xl mx-auto text-base sm:text-lg">
          {t.description}
        </p>
      </motion.div>

      <div className="space-y-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="card p-5 sm:p-6 flex flex-col gap-4 bg-cardLight/80 dark:bg-cardDark/80 rounded-2xl shadow-md border border-borderLight/20 dark:border-borderDark/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-accent mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              {category}
            </h3>
            <div className="flex gap-3 flex-wrap">
              {skills
                .filter((skill) => {
                  // Map English categories to Portuguese for filtering
                  const catEn = categoriesText.en[idx];
                  return skill.category === catEn;
                })
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-cardLight/60 dark:bg-cardDark/60 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 gap-2 border border-borderLight/30 dark:border-borderDark/30 backdrop-blur-sm group-hover:border-accent/50 cursor-pointer"
                    style={{ minWidth: 64, minHeight: 64 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 filter dark:brightness-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="font-medium text-xs sm:text-sm text-textLight dark:text-textDark group-hover:text-accent transition-colors duration-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
