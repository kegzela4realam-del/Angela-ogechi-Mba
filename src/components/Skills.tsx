import { useState } from "react";
import { motion } from "motion/react";
import { Database, BrainCircuit, Target, Paintbrush, Clock, Sparkles, FolderLock, HeartHandshake, Check } from "lucide-react";
import { SKILLS_DATA } from "../data";

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | "Technical" | "Professional" | "Creative">("All");

  const categories = [
    { id: "All", label: "All Skills" },
    { id: "Technical", label: "Tech & Data" },
    { id: "Professional", label: "Professional" },
    { id: "Creative", label: "Creative Art" },
  ] as const;

  const filteredSkills = activeCategory === "All"
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  // Helper to map icons to skill names
  const getSkillIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-gold-500Group shadow-inner";
    if (name.includes("Annotation")) return <Database className="w-5 h-5 text-gold-400 shrink-0" />;
    if (name.includes("AI Training")) return <BrainCircuit className="w-5 h-5 text-emerald-500 shrink-0" />;
    if (name.includes("Attention")) return <Target className="w-5 h-5 text-gold-400 shrink-0" />;
    if (name.includes("Bead")) return <Paintbrush className="w-5 h-5 text-amber-500 shrink-0" />;
    if (name.includes("Time")) return <Clock className="w-5 h-5 text-emerald-500 shrink-0" />;
    if (name.includes("Entrepreneurship") || name.includes("Creativity")) return <Sparkles className="w-5 h-5 text-gold-400 shrink-0" />;
    if (name.includes("Office") || name.includes("Sheets")) return <FolderLock className="w-5 h-5 text-stone-500 shrink-0" />;
    return <HeartHandshake className="w-5 h-5 text-emerald-500 shrink-0" />;
  };

  return (
    <section
      id="skills"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950/40 border-white/5" : "bg-stone-50/60 border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
              Symmetric Strengths
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4">
              My Versatile <span className="text-gradient-gold italic font-normal">Skill Ecosystem</span>
            </h2>
            <p className={`text-sm md:text-base ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
              I have curated a powerful combination of modern technological capabilities, strict operational excellence, and authentic cultural craftsmanship over years.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border self-start md:self-end ${
            isDarkMode ? "bg-stone-900/60 border-white/5" : "bg-stone-100 border-stone-200"
          }`}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? isDarkMode
                      ? "bg-gold-500 text-stone-950 shadow-lg"
                      : "bg-stone-950 text-white shadow-md"
                    : isDarkMode
                      ? "text-stone-400 hover:text-white"
                      : "text-stone-600 hover:text-stone-950"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                isDarkMode
                  ? "bg-stone-900/30 border-white/5 hover:border-gold-400/20"
                  : "bg-white border-stone-200 hover:border-gold-500/20 shadow-sm"
              }`}
            >
              <div>
                {/* Header Indicator */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    isDarkMode ? "bg-stone-900 border-white/5" : "bg-stone-50 border-stone-100"
                  }`}>
                    {getSkillIcon(skill.name)}
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-gold-500">
                      {skill.percentage}%
                    </span>
                    <span className={`block text-[9px] font-mono uppercase tracking-widest ${
                      isDarkMode ? "text-stone-500" : "text-stone-400"
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className={`font-serif font-bold text-base leading-tight mb-2 ${
                  isDarkMode ? "text-stone-200" : "text-stone-800"
                }`}>
                  {skill.name}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  isDarkMode ? "text-stone-400" : "text-stone-600"
                }`}>
                  {skill.description}
                </p>
              </div>

              {/* Animated Progress Meter */}
              <div className="mt-6 pt-4 border-t border-dashed border-stone-500/10">
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                  isDarkMode ? "bg-stone-800" : "bg-stone-100"
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-gold-500 via-amber-600 to-emerald-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom micro-statement */}
        <div className={`mt-12 text-center text-xs font-mono tracking-widest ${
          isDarkMode ? "text-stone-500" : "text-stone-400"
        }`}>
          ◆ SYSTEMATIC LEARNER ◆ METICULOUS ARTISAN ◆ CONSTANT METABOLISM FOR COMPLEXITY ◆
        </div>

      </div>
    </section>
  );
}
