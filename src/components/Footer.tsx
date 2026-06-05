import { Sparkles } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "showcase", label: "Gallery" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Growth Journey" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer
      className={`border-t py-16 px-6 lg:px-8 relative z-10 ${
        isDarkMode
          ? "bg-stone-950 border-white/5 text-stone-400"
          : "bg-stone-900 border-stone-800 text-stone-300"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-10 text-center">
        
        {/* Cultural Logo Signature */}
        <div className="space-y-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="inline-flex items-center gap-2 group focus:outline-none"
          >
            <span className="font-display font-black text-2xl text-gold-400 uppercase tracking-widest">
              AOM
            </span>
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-xs font-serif italic text-gold-500 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Blending Technology, Culture, and Craftsmanship
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </div>
        </div>

        {/* Dynamic Nav link index */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-2xl">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-sans font-semibold tracking-wider uppercase hover:text-gold-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Decorative West West African Adinkra Graphic (Duafe - representative of femininity, beauty, care) */}
        <div className="opacity-15 w-8 h-8 fill-gold-500 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,20 L90,20 L90,40 L10,40 Z M20,40 L20,90 M35,40 L35,90 M50,40 L50,90 M65,40 L65,90 M80,40 L80,90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Sub copyright and tags */}
        <div className="space-y-2 pt-6 border-t border-stone-500/10 w-full max-w-xl text-[10px] font-mono tracking-widest uppercase">
          <p>
            &copy; {new Date().getFullYear()} Angela Ogechi Mba • Accra, Ghana. All Rights Reserved.
          </p>
          <p className="text-stone-500">
            Handcrafted with modern code & authentic traditional significance
          </p>
        </div>

      </div>
    </footer>
  );
}
