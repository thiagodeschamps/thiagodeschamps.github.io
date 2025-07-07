import React, { useEffect, useState } from "react";
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

export default function Education() {
  const isMobile = useIsMobile();
  return (
    <section id="education" className="py-10 px-4 sm:py-16 w-full max-w-screen-md mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="section-title mb-4 text-2xl sm:text-3xl md:text-4xl">Education & Languages</h2>
        <p className="text-textLightSecondary dark:text-textDarkSecondary max-w-2xl mx-auto text-base sm:text-lg">
          Strong academic foundation in computer engineering with specialized focus on data science and distributed systems. Fluent in multiple languages, enabling effective communication in global enterprise environments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Education */}
        <div className="card p-5 sm:p-6 flex flex-col gap-4 bg-cardLight/80 dark:bg-cardDark/80 rounded-2xl shadow-md border border-borderLight/20 dark:border-borderDark/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-textLight dark:text-textDark">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={edu.degree} className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base sm:text-lg text-textLight dark:text-textDark">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-semibold text-sm sm:text-base">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs sm:text-sm text-textLightSecondary dark:text-textDarkSecondary">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-textLightSecondary dark:text-textDarkSecondary mt-2 leading-relaxed text-xs sm:text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="card p-5 sm:p-6 flex flex-col gap-4 bg-cardLight/80 dark:bg-cardDark/80 rounded-2xl shadow-md border border-borderLight/20 dark:border-borderDark/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-textLight dark:text-textDark">Languages</h3>
          </div>
          <div className="space-y-4">
            {languages.map((lang, idx) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.icon}</span>
                    <div>
                      <h4 className="font-semibold text-textLight dark:text-textDark text-sm sm:text-base">
                        {lang.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-accent font-medium">{lang.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-xs sm:text-sm font-medium text-textLightSecondary dark:text-textDarkSecondary">
                      {lang.proficiency}%
                    </span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-accentHover h-2 rounded-full"
                    style={{ width: `${lang.proficiency}%`, transition: 'width 1s' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
