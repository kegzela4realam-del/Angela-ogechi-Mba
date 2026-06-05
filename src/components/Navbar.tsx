import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Gem } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background solid/opaque toggle
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "showcase", label: "Beads Gallery" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Growth" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-stone-950/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-white/85 backdrop-blur-md border-b border-stone-200/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-600 via-gold-400 to-amber-700 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 l:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold-400/30 overflow-hidden bg-gradient-to-br from-emerald-950/20 to-stone-900/10">
            <span className="font-display font-bold text-lg text-gold-400">A</span>
            <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <div className="font-display text-sm font-semibold tracking-wider text-gold-500 uppercase flex items-center gap-1">
              Angela Ogechi Mba
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            </div>
            <div className={`text-[10px] tracking-widest font-mono uppercase ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
              Annotator & Bead Artisan
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-sans tracking-wide transition-colors duration-200 hover:text-gold-400 cursor-pointer ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-stone-500/30 mx-2" />

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
              isDarkMode ? "hover:bg-white/5 text-gold-300" : "hover:bg-stone-100 text-stone-700"
            }`}
            title={isDarkMode ? "Unveil Light Aesthetic" : "Switch to Luxury Dark"}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 animate-spin-slow" style={{ animationDuration: '40s' }} /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode ? "text-gold-300 hover:bg-white/5" : "text-stone-700 hover:bg-stone-100"
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode ? "text-stone-200 hover:bg-white/5" : "text-stone-800 hover:bg-stone-100"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-full left-0 right-0 py-6 px-6 border-b shadow-xl space-y-4 animate-fadeIn lg:hidden ${
            isDarkMode ? "bg-stone-950 border-white/5" : "bg-white border-stone-200"
          }`}
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left py-2 font-sans text-base font-medium tracking-wide transition-colors ${
                    isDarkMode ? "text-stone-200 hover:text-gold-400" : "text-stone-800 hover:text-gold-500"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
