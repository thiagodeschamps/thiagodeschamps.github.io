import React, { useState, useEffect } from "react";
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
    if (companyShort === "Grupo Boticário") sizeClass = "w-30 h-30";
    if (companyShort === "Americanas S.A.") sizeClass = "w-12 h-12";
    if (companyShort === "IFF" || companyShort === "International Flavors & Fragrances") sizeClass = "w-14 h-14";
    return imgError || !src ? (
        <div className={`${sizeClass} rounded-full flex items-center justify-center text-accent font-bold text-lg select-none`}>
            {initials}
        </div>
    ) : (
        <img
            src={src}
            alt={alt}
            className={`${sizeClass} object-contain block`}
            onError={() => setImgError(true)}
            style={{ background: 'none', borderRadius: '0.75rem' }}
        />
    );
}

export default function Experience() {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHasAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="experience" className="py-20 bg-gradient-to-br from-violet-50 via-white to-orange-50 dark:from-bgDark dark:via-bgDark dark:to-bgDark">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-title mb-4">Professional Experience</h2>
                <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-3xl mx-auto">
                    Proven track record of building enterprise-grade data platforms and driving innovation across diverse industries.
                    Delivering measurable business impact through scalable, high-performance data solutions.
                </p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
                {jobs.map((job, idx) => (
                    <motion.div
                        key={job.company + job.date}
                        initial={{ opacity: 0, y: 30 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="group relative bg-white dark:bg-cardDark rounded-3xl shadow-xl overflow-hidden border border-borderLight/30 dark:border-borderDark/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Gradient Accent Bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accentHover to-purple-500" />

                        {/* Card Content */}
                        <div className="p-8 md:p-10">
                            {/* Header Row */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                                <div className="flex items-start gap-6">
                                    {/* Company Logo */}
                                    <div className="relative">
                                        <div className="w-16 h-16 flex items-center justify-center overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                                            <CompanyLogo src={job.logo} alt={job.companyShort} initials={job.initials} companyShort={job.companyShort} />
                                        </div>
                                    </div>

                                    {/* Job Details */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-textLight dark:text-textDark leading-tight mb-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Globe className="w-4 h-4 text-accent" />
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-accent font-semibold text-lg hover:text-accentHover transition-colors duration-200 flex items-center gap-1 group/link"
                                            >
                                                {job.company}
                                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-textLightSecondary dark:text-textDarkSecondary lg:justify-end">
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
                                <div className="space-y-6">
                                    {job.progression.map((role, roleIdx) => (
                                        <div key={roleIdx} className="relative">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-purple-500" />
                                                <h4 className="text-lg font-bold text-textLight dark:text-textDark">
                                                    {role.role}
                                                </h4>
                                                <span className="text-sm text-textLightSecondary dark:text-textDarkSecondary font-medium">
                                                    {role.period}
                                                </span>
                                            </div>
                                            <ul className="space-y-3 pl-5">
                                                {role.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-base text-textLightSecondary dark:text-textDarkSecondary leading-relaxed">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-purple-500 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                /* Regular Bullets */
                                <ul className="space-y-4 pl-2">
                                    {job.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-base md:text-lg text-textLightSecondary dark:text-textDarkSecondary leading-relaxed">
                                            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-accent to-purple-500 flex-shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
