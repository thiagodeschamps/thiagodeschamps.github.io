import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Award, Globe, ArrowUpRight } from "lucide-react";

const jobs = [
    {
        title: {
            en: "Data Platform Engineer Specialist",
            pt: "Especialista em Engenharia de Plataforma de Dados"
        },
        company: "GFT Technologies",
        companyShort: "GFT Technologies",
        companyUrl: "https://www.gft.com/",
        logo: "/imgs/gft.jpg",
        initials: "GFT",
        date: "2024–Present",
        location: "São Paulo, Brazil",
        type: {
            en: "Full-time",
            pt: "Tempo integral"
        },
        bullets: {
            en: [
                "Architected and deployed petabyte-scale data platform serving 1000+ concurrent users with 99.9% SLA uptime across AWS, Trino, and Delta Lake infrastructure.",
                "Implemented automated RAG data pipelines and LLM documentation systems using AWS Bedrock, achieving 80% improvement in data catalog efficiency and user adoption.",
                "Optimized query performance and reduced infrastructure costs by 45% through advanced query optimization, caching strategies, and resource management.",
                "Established comprehensive data governance framework using OpenMetadata, ensuring data lineage, quality monitoring, and compliance across all data assets."
            ],
            pt: [
                "Arquetei e implantei plataforma de dados em escala petabyte atendendo 1000+ usuários simultâneos com 99.9% de SLA de uptime em infraestrutura AWS, Trino e Delta Lake.",
                "Implementei pipelines de dados RAG automatizados e sistemas de documentação LLM usando AWS Bedrock, alcançando 80% de melhoria na eficiência do catálogo de dados e adoção de usuários.",
                "Otimizei performance de consultas e reduzi custos de infraestrutura em 45% através de otimização avançada de consultas, estratégias de cache e gerenciamento de recursos.",
                "Estabeleci framework abrangente de governança de dados usando OpenMetadata, garantindo linhagem de dados, monitoramento de qualidade e conformidade em todos os ativos de dados."
            ]
        }
    },
    {
        title: {
            en: "Senior Data Platform Engineer",
            pt: "Engenheiro Sênior de Plataforma de Dados"
        },
        company: "Grupo Boticário",
        companyShort: "Grupo Boticário",
        companyUrl: "https://www.grupoboticario.com.br/",
        logo: "/imgs/boticario.png",
        initials: "GB",
        date: "2024",
        location: "São Paulo, Brazil",
        type: {
            en: "Full-time",
            pt: "Tempo integral"
        },
        bullets: {
            en: [
                "Designed and implemented secure API gateway for BigQuery integration, significantly improving security compliance scores from 60% to 98% across all data access points.",
                "Automated CI/CD pipelines and Looker deployment processes, reducing manual deployment workload by 80% and improving deployment frequency by 300%.",
                "Led cross-functional teams in data platform modernization initiatives, resulting in 40% faster data processing and improved data quality metrics."
            ],
            pt: [
                "Projetei e implementei gateway de API seguro para integração BigQuery, melhorando significativamente os scores de conformidade de segurança de 60% para 98% em todos os pontos de acesso a dados.",
                "Automatizei pipelines CI/CD e processos de deploy do Looker, reduzindo carga de trabalho manual de deploy em 80% e melhorando frequência de deploy em 300%.",
                "Liderei equipes multifuncionais em iniciativas de modernização da plataforma de dados, resultando em 40% de processamento de dados mais rápido e métricas de qualidade de dados melhoradas."
            ]
        }
    },
    {
        title: {
            en: "Data Engineer",
            pt: "Engenheiro de Dados"
        },
        company: "International Flavors & Fragrances",
        companyShort: "IFF",
        companyUrl: "https://www.iff.com/",
        logo: "/imgs/iff.png",
        initials: "IFF",
        date: "2023–2024",
        location: "São Paulo, Brazil",
        type: {
            en: "Full-time",
            pt: "Tempo integral"
        },
        bullets: {
            en: [
                "Developed and deployed scalable ETL/ELT pipelines with dynamic schema evolution, processing data from 50+ global manufacturing plants with real-time monitoring.",
                "Built AutoGC analysis application using FastAPI, Kubernetes, and Snowflake, reducing data analysis time by 85% and improving decision-making speed across global operations.",
                "Implemented automated data quality monitoring and alerting systems, reducing data anomalies by 75% and improving overall data reliability."
            ],
            pt: [
                "Desenvolvi e implantei pipelines ETL/ELT escaláveis com evolução dinâmica de schema, processando dados de 50+ plantas de manufatura globais com monitoramento em tempo real.",
                "Construí aplicação de análise AutoGC usando FastAPI, Kubernetes e Snowflake, reduzindo tempo de análise de dados em 85% e melhorando velocidade de tomada de decisão em operações globais.",
                "Implementei sistemas automatizados de monitoramento e alerta de qualidade de dados, reduzindo anomalias de dados em 75% e melhorando confiabilidade geral dos dados."
            ]
        }
    },
    {
        title: {
            en: "Data Engineer",
            pt: "Engenheiro de Dados"
        },
        company: "Americanas S.A.",
        companyShort: "Americanas S.A.",
        companyUrl: "https://www.americanas.com.br/",
        logo: "/imgs/americanas.png",
        initials: "AM",
        date: "2021–2023",
        location: "São Paulo, Brazil",
        type: {
            en: "Full-time",
            pt: "Tempo integral"
        },
        progression: [
            {
                role: {
                    en: "Data Engineer",
                    pt: "Engenheiro de Dados"
                },
                period: "2022–2023",
                highlights: {
                    en: [
                        "Architected and deployed real-time data streaming platform processing 100M+ daily records using Kafka, Debezium, GCP, Python, and Go microservices.",
                        "Reduced data pipeline errors by 90% through comprehensive monitoring, alerting, and automated recovery mechanisms using Infrastructure as Code (Terraform).",
                        "Optimized data warehouse performance and reduced query costs by 60% through advanced indexing strategies and query optimization techniques."
                    ],
                    pt: [
                        "Arquetei e implantei plataforma de streaming de dados em tempo real processando 100M+ registros diários usando Kafka, Debezium, GCP, Python e microsserviços Go.",
                        "Reduzi erros de pipeline de dados em 90% através de monitoramento abrangente, alertas e mecanismos de recuperação automatizada usando Infrastructure as Code (Terraform).",
                        "Otimizei performance do data warehouse e reduzi custos de consulta em 60% através de estratégias avançadas de indexação e técnicas de otimização de consultas."
                    ]
                }
            },
            {
                role: {
                    en: "Data Engineering Intern",
                    pt: "Estagiário de Engenharia de Dados"
                },
                period: "2021–2022",
                highlights: {
                    en: [
                        "Developed comprehensive data quality framework that reduced data anomalies by 75% and improved overall data reliability across multiple business units.",
                        "Optimized Airflow DAGs and SQL queries, achieving 60% reduction in data processing costs while maintaining data accuracy and processing speed.",
                        "Collaborated with cross-functional teams to implement data governance best practices and improve data accessibility for business stakeholders."
                    ],
                    pt: [
                        "Desenvolvi framework abrangente de qualidade de dados que reduziu anomalias de dados em 75% e melhorou confiabilidade geral dos dados em múltiplas unidades de negócio.",
                        "Otimizei DAGs do Airflow e consultas SQL, alcançando 60% de redução nos custos de processamento de dados mantendo precisão e velocidade de processamento.",
                        "Colaborei com equipes multifuncionais para implementar melhores práticas de governança de dados e melhorar acessibilidade de dados para stakeholders de negócio."
                    ]
                }
            }
        ],
        bullets: {
            en: [
                "Architected and deployed real-time data streaming platform processing 100M+ daily records using Kafka, Debezium, GCP, Python, and Go microservices.",
                "Reduced data pipeline errors by 90% through comprehensive monitoring, alerting, and automated recovery mechanisms using Infrastructure as Code (Terraform).",
                "Optimized data warehouse performance and reduced query costs by 60% through advanced indexing strategies and query optimization techniques.",
                "Developed comprehensive data quality framework that reduced data anomalies by 75% and improved overall data reliability across multiple business units."
            ],
            pt: [
                "Arquetei e implantei plataforma de streaming de dados em tempo real processando 100M+ registros diários usando Kafka, Debezium, GCP, Python e microsserviços Go.",
                "Reduzi erros de pipeline de dados em 90% através de monitoramento abrangente, alertas e mecanismos de recuperação automatizada usando Infrastructure as Code (Terraform).",
                "Otimizei performance do data warehouse e reduzi custos de consulta em 60% através de estratégias avançadas de indexação e técnicas de otimização de consultas.",
                "Desenvolvi framework abrangente de qualidade de dados que reduziu anomalias de dados em 75% e melhorou confiabilidade geral dos dados em múltiplas unidades de negócio."
            ]
        }
    },
];

const text = {
  en: {
    sectionTitle: "Professional Experience",
    sectionDesc: "Here's where I've worked and what I've done. If you want to know more about my experience or have any questions, just ask me.",
    date: "Date",
    location: "Location",
    type: "Type"
  },
  pt: {
    sectionTitle: "Experiência Profissional",
    sectionDesc: "Aqui estão os lugares onde trabalhei e o que já fiz. Se quiser saber mais sobre minha experiência ou tiver qualquer dúvida, é só perguntar.",
    date: "Período",
    location: "Local",
    type: "Tipo"
  }
};

function CompanyLogo({ src, alt, initials, companyShort }) {
    const [imgError, setImgError] = useState(false);
    let sizeClass = "w-12 h-12";
    if (companyShort === "Grupo Boticário") sizeClass = "w-24 h-24";
    if (companyShort === "Americanas S.A.") sizeClass = "w-12 h-12";
    if (companyShort === "IFF" || companyShort === "International Flavors & Fragrances") sizeClass = "w-14 h-14";
    return imgError || !src ? (
        <div className={`${sizeClass} rounded-full flex items-center justify-center text-accent font-bold text-lg select-none bg-cardLight/60 dark:bg-cardDark/60`}>
            {initials}
        </div>
    ) : (
        <img
            src={src}
            alt={alt}
            className={`${sizeClass} object-contain block rounded-xl bg-white`}
            onError={() => setImgError(true)}
            style={{ background: 'none', borderRadius: '0.75rem' }}
            loading="lazy"
        />
    );
}

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

export default function Experience({ lang }) {
    const isMobile = useIsMobile();
    const t = text[lang] || text.en;
    return (
        <section id="experience" className="py-10 px-4 sm:py-20 w-full max-w-screen-md mx-auto bg-gradient-to-br from-violet-50 via-white to-orange-50 dark:from-bgDark dark:via-bgDark dark:to-bgDark">
            <motion.div
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={isMobile ? undefined : { type: "tween", ease: "easeOut", duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center mb-8 sm:mb-16"
            >
                <h2 className="section-title mb-4 text-2xl sm:text-3xl md:text-4xl">{t.sectionTitle}</h2>
                <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-2xl mx-auto text-base sm:text-lg">
                    {t.sectionDesc}
                </p>
            </motion.div>

            <div className="space-y-8 max-w-2xl mx-auto">
                {jobs.map((job, idx) => (
                    <motion.div
                        key={job.company + job.date}
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={isMobile ? undefined : { type: "tween", ease: "easeOut", delay: idx * 0.1, duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className={`group relative bg-white/90 dark:bg-cardDark/80 rounded-2xl shadow-md ${!isMobile ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : ''} backdrop-blur-md border border-borderLight/20 dark:border-white/10 overflow-hidden flex flex-col gap-4 p-5 sm:p-8`}
                    >
                        {/* Gradient Accent Bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accentHover to-purple-500" />

                        {/* Card Content */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-4">
                            <div className="flex items-center gap-4 sm:gap-6">
                                {/* Company Logo */}
                                <div className="relative">
                                    <div className="w-16 h-16 flex items-center justify-center overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                                        <CompanyLogo src={job.logo} alt={job.companyShort} initials={job.initials} companyShort={job.companyShort} />
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div className="flex-1 text-left">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-textLight dark:text-textDark leading-tight mb-2">
                                        {job.title[lang]}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Globe className="w-4 h-4 text-accent" />
                                        <a
                                            href={job.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent font-semibold text-base sm:text-lg hover:text-accentHover transition-colors duration-200 flex items-center gap-1 group/link"
                                            style={{ minHeight: 44 }}
                                            aria-label={`Visit ${job.company}`}
                                        >
                                            {job.company}
                                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-textLightSecondary dark:text-textDarkSecondary sm:justify-end">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-full">
                                    <Calendar className="w-4 h-4 text-accent" />
                                    <span className="font-medium">{job.date}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    <span className="font-medium">{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full">
                                    <Award className="w-4 h-4 text-green-500" />
                                    <span className="font-medium">{job.type[lang]}</span>
                                </div>
                            </div>
                        </div>

                        {/* Progression for Americanas */}
                        {job.progression ? (
                            <div className="space-y-2">
                                {job.progression.map((prog, pidx) => (
                                    <div key={prog.role[lang] + prog.period} className="mb-2">
                                        <div className="font-semibold text-accent text-base sm:text-lg">{prog.role[lang]}</div>
                                        <div className="text-xs text-textLightSecondary dark:text-textDarkSecondary mb-1">{prog.period}</div>
                                        <ul className="list-disc pl-5 text-sm sm:text-base text-textLightSecondary dark:text-textDarkSecondary space-y-1">
                                            {prog.highlights[lang].map((hl, hidx) => (
                                                <li key={hidx}>{hl}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : null}

                        {/* Bullets */}
                        <ul className="list-disc pl-5 text-sm sm:text-base text-textLightSecondary dark:text-textDarkSecondary space-y-1">
                            {job.bullets[lang].map((bullet, bidx) => (
                                <li key={bidx}>{bullet}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
