import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Award, Globe, ArrowUpRight } from "lucide-react";

const jobs = [
    {
        title: "Data Platform Engineer Specialist",
        company: "GFT Technologies",
        companyShort: "GFT Technologies",
        companyUrl: "https://www.gft.com/",
        logo: "/imgs/gft.jpg",
        initials: "GFT",
        date: "2024–Present",
        location: "São Paulo, Brazil",
        type: "Full-time",
        bullets: [
            "Architected and deployed petabyte-scale data platform serving 1000+ concurrent users with 99.9% SLA uptime across AWS, Trino, and Delta Lake infrastructure.",
            "Implemented automated RAG data pipelines and LLM documentation systems using AWS Bedrock, achieving 80% improvement in data catalog efficiency and user adoption.",
            "Optimized query performance and reduced infrastructure costs by 45% through advanced query optimization, caching strategies, and resource management.",
            "Established comprehensive data governance framework using OpenMetadata, ensuring data lineage, quality monitoring, and compliance across all data assets."
        ]
    },
    {
        title: "Senior Data Platform Engineer",
        company: "Grupo Boticário",
        companyShort: "Grupo Boticário",
        companyUrl: "https://www.grupoboticario.com.br/",
        logo: "/imgs/boticario.png",
        initials: "GB",
        date: "2024",
        location: "São Paulo, Brazil",
        type: "Full-time",
        bullets: [
            "Designed and implemented secure API gateway for BigQuery integration, significantly improving security compliance scores from 60% to 98% across all data access points.",
            "Automated CI/CD pipelines and Looker deployment processes, reducing manual deployment workload by 80% and improving deployment frequency by 300%.",
            "Led cross-functional teams in data platform modernization initiatives, resulting in 40% faster data processing and improved data quality metrics."
        ]
    },
    {
        title: "Data Engineer",
        company: "International Flavors & Fragrances",
        companyShort: "IFF",
        companyUrl: "https://www.iff.com/",
        logo: "/imgs/iff.png",
        initials: "IFF",
        date: "2023–2024",
        location: "São Paulo, Brazil",
        type: "Full-time",
        bullets: [
            "Developed and deployed scalable ETL/ELT pipelines with dynamic schema evolution, processing data from 50+ global manufacturing plants with real-time monitoring.",
            "Built AutoGC analysis application using FastAPI, Kubernetes, and Snowflake, reducing data analysis time by 85% and improving decision-making speed across global operations.",
            "Implemented automated data quality monitoring and alerting systems, reducing data anomalies by 75% and improving overall data reliability."
        ]
    },
    {
        title: "Data Engineer",
        company: "Americanas S.A.",
        companyShort: "Americanas S.A.",
        companyUrl: "https://www.americanas.com.br/",
        logo: "/imgs/americanas.png",
        initials: "AM",
        date: "2021–2023",
        location: "São Paulo, Brazil",
        type: "Full-time",
        progression: [
            {
                role: "Data Engineer",
                period: "2022–2023",
                highlights: [
                    "Architected and deployed real-time data streaming platform processing 100M+ daily records using Kafka, Debezium, GCP, Python, and Go microservices.",
                    "Reduced data pipeline errors by 90% through comprehensive monitoring, alerting, and automated recovery mechanisms using Infrastructure as Code (Terraform).",
                    "Optimized data warehouse performance and reduced query costs by 60% through advanced indexing strategies and query optimization techniques."
                ]
            },
            {
                role: "Data Engineering Intern",
                period: "2021–2022",
                highlights: [
                    "Developed comprehensive data quality framework that reduced data anomalies by 75% and improved overall data reliability across multiple business units.",
                    "Optimized Airflow DAGs and SQL queries, achieving 60% reduction in data processing costs while maintaining data accuracy and processing speed.",
                    "Collaborated with cross-functional teams to implement data governance best practices and improve data accessibility for business stakeholders."
                ]
            }
        ],
        bullets: [
            "Architected and deployed real-time data streaming platform processing 100M+ daily records using Kafka, Debezium, GCP, Python, and Go microservices.",
            "Reduced data pipeline errors by 90% through comprehensive monitoring, alerting, and automated recovery mechanisms using Infrastructure as Code (Terraform).",
            "Optimized data warehouse performance and reduced query costs by 60% through advanced indexing strategies and query optimization techniques.",
            "Developed comprehensive data quality framework that reduced data anomalies by 75% and improved overall data reliability across multiple business units."
        ]
    },
];

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
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
}

export default function Experience() {
    const isMobile = useIsMobile();
    return (
        <section id="experience" className="py-10 px-4 sm:py-20 w-full max-w-screen-md mx-auto bg-gradient-to-br from-violet-50 via-white to-orange-50 dark:from-bgDark dark:via-bgDark dark:to-bgDark">
            <div className="text-center mb-8 sm:mb-16">
                <h2 className="section-title mb-4 text-2xl sm:text-3xl md:text-4xl">Professional Experience</h2>
                <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-2xl mx-auto text-base sm:text-lg">
                    Here's where I've worked and what I've done. If you want to know more about my experience or have any questions, just ask me.
                </p>
            </div>

            <div className="space-y-8 max-w-2xl mx-auto">
                {jobs.map((job, idx) => (
                    <div
                        key={job.company + job.date}
                        className="group relative bg-black/60 dark:bg-cardDark/80 rounded-2xl shadow-md backdrop-blur-md border border-white/10 overflow-hidden flex flex-col gap-4 p-5 sm:p-8"
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
                                        {job.title}
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
                                    <span className="font-medium">{job.type}</span>
                                </div>
                            </div>
                        </div>

                        {/* Progression for Americanas */}
                        {job.progression ? (
                            <div className="space-y-2">
                                {job.progression.map((prog, pidx) => (
                                    <div key={prog.role + prog.period} className="mb-2">
                                        <div className="font-semibold text-accent text-base sm:text-lg">{prog.role}</div>
                                        <div className="text-xs text-textLightSecondary dark:text-textDarkSecondary mb-1">{prog.period}</div>
                                        <ul className="list-disc pl-5 text-sm sm:text-base text-textLightSecondary dark:text-textDarkSecondary space-y-1">
                                            {prog.highlights.map((hl, hidx) => (
                                                <li key={hidx}>{hl}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : null}

                        {/* Bullets */}
                        <ul className="list-disc pl-5 text-sm sm:text-base text-textLightSecondary dark:text-textDarkSecondary space-y-1">
                            {job.bullets.map((bullet, bidx) => (
                                <li key={bidx}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
