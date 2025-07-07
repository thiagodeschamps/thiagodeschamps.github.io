import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Default to dark mode if no preference is saved
      return true;
    }
    return true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blobsAnimated, setBlobsAnimated] = useState(false);
  const [lang, setLang] = useState("en");

  // Final positions for blobs
  const blob1Final = { x: -20, y: -10 };
  const blob2Final = { x: 10, y: 20 };
  const blob3Final = { x: -15, y: -20 };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    // Save preference to localStorage
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark');
    }
  }, []);

  // Only run the animation once on mount
  useEffect(() => {
    if (!blobsAnimated) {
      const timer = setTimeout(() => setBlobsAnimated(true), 3500);
      return () => clearTimeout(timer);
    }
  }, [blobsAnimated]);

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
  ];

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark transition-all duration-500">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main gradient layer */}
        <div className="absolute inset-0 gradient-bg opacity-90" />
        {/* Animated blobs only on first load, then static blobs */}
        {!blobsAnimated ? (
          <>
            <motion.div
              key="blob1"
              className="absolute top-[-8rem] left-[-8rem] w-[32rem] h-[32rem] rounded-full filter blur-3xl"
              style={{ background: dark ? 'radial-gradient(circle at 30% 30%, #7c3aed 0%, #312e81 100%)' : 'radial-gradient(circle at 30% 30%, #a5b4fc 0%, #f0abfc 100%)' }}
              animate={{ x: [0, 40, 60, 30, 0, -20], y: [0, 30, 60, 40, 0, -10] }}
              transition={{ duration: 3, ease: 'anticipate' }}
            />
            <motion.div
              key="blob2"
              className="absolute top-1/2 right-[-10rem] w-[28rem] h-[28rem] rounded-full filter blur-3xl"
              style={{ background: dark ? 'radial-gradient(circle at 70% 70%, #06b6d4 0%, #0e7490 100%)' : 'radial-gradient(circle at 70% 70%, #f472b6 0%, #facc15 100%)' }}
              animate={{ x: [0, -30, -50, -20, 0, 10], y: [0, -40, -20, 10, 0, 20] }}
              transition={{ duration: 3.5, ease: 'anticipate' }}
            />
            <motion.div
              key="blob3"
              className="absolute bottom-[-8rem] left-1/3 w-[30rem] h-[30rem] rounded-full filter blur-3xl"
              style={{ background: dark ? 'radial-gradient(circle at 50% 80%, #19bf7d 0%, #166534 100%)' : 'radial-gradient(circle at 50% 80%, #fcd34d 0%, #fbbf24 100%)' }}
              animate={{ x: [0, 20, 40, 10, 0, -15], y: [0, 25, 40, 10, 0, -20] }}
              transition={{ duration: 4, ease: 'anticipate' }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute top-[-8rem] left-[-8rem] w-[32rem] h-[32rem] rounded-full filter blur-3xl"
              style={{
                background: dark
                  ? 'radial-gradient(circle at 30% 30%, #7c3aed 0%, #312e81 100%)'
                  : 'radial-gradient(circle at 30% 30%, #a5b4fc 0%, #f0abfc 100%)',
                transform: 'translate(-20px, -10px)'
              }}
            />
            <div
              className="absolute top-1/2 right-[-10rem] w-[28rem] h-[28rem] rounded-full filter blur-3xl"
              style={{
                background: dark
                  ? 'radial-gradient(circle at 70% 70%, #06b6d4 0%, #0e7490 100%)'
                  : 'radial-gradient(circle at 70% 70%, #f472b6 0%, #facc15 100%)',
                transform: 'translate(10px, 20px)'
              }}
            />
            <div
              className="absolute bottom-[-8rem] left-1/3 w-[30rem] h-[30rem] rounded-full filter blur-3xl"
              style={{
                background: dark
                  ? 'radial-gradient(circle at 50% 80%, #19bf7d 0%, #166534 100%)'
                  : 'radial-gradient(circle at 50% 80%, #fcd34d 0%, #fbbf24 100%)',
                transform: 'translate(-15px, -20px)'
              }}
            />
          </>
        )}
      </div>

      {/* Enhanced Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-borderLight/50 dark:border-borderDark/50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.span 
              className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              TD
            </motion.span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 font-semibold">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-textLight dark:text-textDark hover:text-accent transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                className="p-3 rounded-xl glass-effect hover:scale-110 transition-all duration-300"
                onClick={() => setDark((v) => !v)}
                aria-label="Toggle dark mode"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {dark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="text-yellow-400 w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="text-blue-600 w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-3 rounded-xl glass-effect"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Language Switch */}
              <button
                onClick={() => setLang(lang === "en" ? "pt" : "en")}
                className="ml-4 px-3 py-1 rounded bg-accent text-white font-semibold transition hover:bg-accentHover"
              >
                {lang === "en" ? "Português" : "English"}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-3"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-textLight dark:text-textDark hover:text-accent transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Education lang={lang} />
      </main>
      
      <Footer lang={lang} />
    </div>
  );
}

export default App;
