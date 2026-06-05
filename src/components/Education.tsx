import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Layers, CheckCircle } from "lucide-react";
import { EDUCATION_DATA } from "../data";

interface EducationProps {
  isDarkMode: boolean;
}

export default function Education({ isDarkMode }: EducationProps) {
  return (
    <section
      id="education"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950/40 border-white/5" : "bg-stone-50/60 border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
            Continuous Progression
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Education, Sourcing <span className="text-gradient-gold italic font-normal">& Apprenticeships</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
            I hold a deep respect for both formal training and tactile local learning systems. Explore my certifications in LLM optimization and traditional master-craft bead stringing.
          </p>
        </div>

        {/* Education Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                isDarkMode
                  ? "bg-stone-900/40 border-white/5 hover:border-emerald-500/25"
                  : "bg-white border-stone-200 hover:border-gold-500/25 shadow-sm"
              }`}
            >
              <div className="space-y-4">
                {/* Visual Category Icon Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className={`p-2.5 rounded-2xl border ${
                    isDarkMode ? "bg-stone-950 border-white/5" : "bg-stone-50 border-stone-150"
                  }`}>
                    {item.id.includes("1") || item.id.includes("2") ? (
                      <Award className="w-5 h-5 text-emerald-500" />
                    ) : item.id.includes("3") ? (
                      <Layers className="w-5 h-5 text-gold-500" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-stone-500 font-semibold uppercase">
                    {item.period}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-1">
                  <h3 className={`text-lg font-serif font-bold leading-snug ${
                    isDarkMode ? "text-stone-100" : "text-stone-950"
                  }`}>
                    {item.degree}
                  </h3>
                  <p className="text-xs font-sans tracking-wide font-semibold text-emerald-600 dark:text-gold-400">
                    {item.institution}
                  </p>
                </div>

                {/* Bullet Info */}
                <p className={`text-xs md:text-sm leading-relaxed ${
                  isDarkMode ? "text-stone-400" : "text-stone-600"
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-stone-500/10 flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#22c55e] uppercase">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified Competence
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic quotes on self improvement */}
        <div className={`mt-16 p-8 rounded-3xl border text-center relative max-w-4xl mx-auto overflow-hidden ${
          isDarkMode ? "bg-stone-950 border-white/5 shadow-inner" : "bg-stone-105 border-stone-200 shadow-sm"
        }`}>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold-400/5 blur-[50px] rounded-full pointer-events-none" />
          <h4 className="font-serif font-black text-md text-gold-500 mb-2 uppercase tracking-wide flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            Commitment to Growth & Self-Directed Knowledge
          </h4>
          <p className={`text-xs md:text-sm max-w-2xl mx-auto leading-relaxed italic ${isDarkMode ? "text-stone-300" : "text-stone-700"}`}>
            &ldquo;I believe that learning is an organic process. Whether I am examining neural validation rubrics on a monitor or tracing the historic origin of 18th-century trade beads in a village, education is the tool that expands my boundaries and allows me to serve my community.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
