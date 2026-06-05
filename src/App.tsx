import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import BeadsShowcase from "./components/BeadsShowcase";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to luxury dark mode
    const cached = localStorage.getItem("theme");
    return cached ? cached === "dark" : true;
  });

  useEffect(() => {
    // Loader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Persist and synchronize tailwind class
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.style.backgroundColor = "#0c0a09"; // stone-950
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#fafaf9"; // stone-50
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans cursor-default antialiased overflow-x-hidden ${
        isDarkMode ? "bg-stone-950 text-stone-200" : "bg-stone-50 text-stone-800"
      }`}
    >
      {/* 1. Loading Screen Pre-loader */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* 2. Global Header & sticky Navigation bar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* 3. Main content stream */}
      <main className="relative">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <BeadsShowcase isDarkMode={isDarkMode} />
        <FeaturedProjects isDarkMode={isDarkMode} />
        <Testimonials isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* 4. Luxury Credit Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
