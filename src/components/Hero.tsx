import { motion } from "motion/react";
import { Sparkles, ArrowRight, Phone, Award } from "lucide-react";
import { PORTRAIT_IMAGE } from "../data";

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 lg:px-8 bg-grid-pattern"
    >
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-800/10 blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Embedded Floating Sacred SVG Adinkra Patterns */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none w-24 h-24 animate-spin-slow" style={{ animationDuration: '60s' }}>
        {/* Gye Nyame Symbol */}
        <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-500">
          <path d="M50 0 C40 8, 40 20, 48 30 C30 32, 10 42, 12 60 C14 75, 30 88, 50 100 C70 88, 86 75, 88 60 C90 42, 70 32, 52 30 C60 20, 60 8, 50 0 Z M50 20 C54 26, 54 34, 50 40 C46 34, 46 26, 50 20 Z" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 opacity-5 pointer-events-none w-20 h-20 animate-float" style={{ animationDuration: '10s' }}>
        {/* Sankofa Bird Symbol Symbolism */}
        <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-500">
          <path d="M50,10 C45,15 45,25 50,30 C60,40 55,60 40,65 C30,68 20,62 18,50 C16,40 25,28 35,32 L35,22 C20,18 5,30 5,48 C5,70 25,85 50,90 C75,85 95,70 95,48 C95,30 80,18 65,22 L65,32 C75,28 84,40 82,50 C80,62 70,68 60,65 C45,60 40,40 50,30 C55,25 55,15 50,10 Z" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-center lg:self-start items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-xs font-mono uppercase tracking-wider text-gold-500"
          >
            <Award className="w-3.5 h-3.5 text-gold-400" />
            Ghana-Based Tech Professional & Craft Pioneer
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-black tracking-tight"
            >
              <span className={isDarkMode ? "text-stone-100" : "text-stone-900"}>Angela </span>
              <span className="text-gradient-gold block lg:inline">Ogechi Mba</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm md:text-md lg:text-lg font-mono font-medium tracking-wide uppercase text-emerald-600 dark:text-gold-300"
            >
              Data Annotator <span className="text-stone-400">•</span> African Bead Artist <span className="text-stone-400">•</span> Creative Entrepreneur
            </motion.p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`text-base md:text-lg font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-600"}`}
          >
            Blending technology, creativity, culture, and craftsmanship into meaningful experiences. Translating structured machine datasets for global AI systems, while manually weaving Krobo glass beads with traditional ancestral significance in Accra, Ghana.
          </motion.p>

          {/* Premium CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("showcase")}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-sm tracking-wide bg-gradient-to-r from-gold-500 to-amber-700 text-stone-950 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(185,118,36,0.4)] overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-stone-100/10 skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-medium text-sm tracking-wide border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                isDarkMode
                  ? "border-white/10 hover:border-gold-400 text-white hover:bg-white/5"
                  : "border-stone-300 hover:border-gold-500 text-stone-800 hover:bg-stone-50"
              }`}
            >
              <Phone className="w-4 h-4 text-gold-400 animate-pulse" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Cinematic Portrait Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[360px]">
            {/* Background decoration frame */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold-600 via-emerald-800 to-amber-800 opacity-20 blur-xl pointer-events-none" />
            
            {/* Elegant double border */}
            <div className="absolute inset-0 rounded-2xl border border-gold-400/30 -rotate-3 scale-102 pointer-events-none transition-transform hover:rotate-0 duration-500" />
            <div className="absolute inset-0 rounded-2xl border border-emerald-500/20 rotate-2 pointer-events-none transition-transform hover:rotate-0 duration-500" />

            {/* Main Picture Wrapper */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-white/10 group">
              <img
                src={PORTRAIT_IMAGE}
                alt="Angela Ogechi Mba Portrait"
                className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating micro info tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-stone-900/40 backdrop-blur-md border border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-200">
                  Located in Accra, Ghana
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bounce Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none hidden md:flex flex-col items-center gap-1.5 opacity-60">
        <span className={`text-[9px] font-mono uppercase tracking-widest ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
          Scroll Down
        </span>
        <div className={`w-5 h-8 rounded-full border flex justify-center py-1 bg-stone-500/5 ${isDarkMode ? "border-stone-500/50" : "border-stone-300"}`}>
          <div className={`w-1 h-2 rounded-full bg-gold-400 animate-scroll-down`} />
        </div>
      </div>
    </section>
  );
}
