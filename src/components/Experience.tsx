import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, Sparkles, Database, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950 border-white/5" : "bg-white border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
            My Career & Evolution
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Professional <span className="text-gradient-gold italic font-normal">History & Milestones</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
            Integrating remote data operations with artisanal leadership. Discover how my commitment to quality, accuracy, and detail enhances technical intelligence and local craft ventures.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-gold-400 via-emerald-600 to-stone-500/20 transform md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:row-reverse" : ""
                  }`}
                >
                  {/* Outer circle indicator */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 border-gold-400 bg-stone-900 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                    <Briefcase className="w-3.5 h-3.5 text-gold-300" />
                  </div>

                  {/* Content Bubble Grid */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                        isDarkMode
                          ? "bg-stone-900/40 border-white/5 hover:border-gold-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                          : "bg-stone-50/70 border-stone-200 hover:border-gold-500/20 shadow-sm"
                      }`}
                    >
                      {/* Date & Location Group */}
                      <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-xs font-mono font-medium ${
                        isEven ? "md:justify-end" : ""
                      }`}>
                        <span className="text-gold-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="mb-4">
                        <h3 className={`text-lg md:text-xl font-serif font-bold leading-tight ${
                          isDarkMode ? "text-white" : "text-stone-900"
                        }`}>
                          {item.role}
                        </h3>
                        <p className="text-xs font-sans tracking-wide text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                          {item.company}
                        </p>
                      </div>

                      {/* Achievements List */}
                      <ul className={`space-y-3 mb-6 text-xs md:text-sm text-left ${
                        isDarkMode ? "text-stone-300" : "text-stone-600"
                      }`}>
                        {item.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Badges */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : ""}`}>
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wide ${
                              isDarkMode
                                ? "bg-stone-800/80 text-stone-300 border border-white/5"
                                : "bg-stone-100 text-stone-700 border border-stone-200"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                  {/* Empty divider for spacer grid alignment on desk */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
