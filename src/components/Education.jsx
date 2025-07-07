import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Globe, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor in Computer Engineering",
    institution: "Federal University of São Carlos",
    period: "2018–2022",
    location: "São Carlos, Brazil",
    description: "Specialized in software engineering, data science fundamentals, and distributed systems. Graduated with honors, focusing on scalable architecture design and modern software development practices.",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

const languages = [
  {
    name: "Portuguese",
    level: "Native",
    proficiency: 100,
    icon: "🇧🇷"
  },
  {
    name: "English",
    level: "Fluent",
    proficiency: 95,
    icon: "🇺🇸"
  }
];

export default function Education() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="section-title mb-4">Education & Languages</h2>
        <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-3xl mx-auto">
          Strong academic foundation in computer engineering with specialized focus on data science and distributed systems. 
          Fluent in multiple languages, enabling effective communication in global enterprise environments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-textLight dark:text-textDark">
              Education
            </h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-textLight dark:text-textDark">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-textLightSecondary dark:text-textDarkSecondary">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-textLightSecondary dark:text-textDarkSecondary mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-textLight dark:text-textDark">
              Languages
            </h3>
          </div>

          <div className="space-y-4">
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.icon}</span>
                    <div>
                      <h4 className="font-semibold text-textLight dark:text-textDark">
                        {lang.name}
                      </h4>
                      <p className="text-sm text-accent font-medium">{lang.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-textLightSecondary dark:text-textDarkSecondary">
                      {lang.proficiency}%
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-accent to-accentHover h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    transition={{ delay: 0.5 + (idx * 0.1), duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
