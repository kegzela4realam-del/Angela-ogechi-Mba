import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, Cpu, Layers, X, Sparkles, Check } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { ProjectItem } from "../types";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function FeaturedProjects({ isDarkMode }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950/40 border-white/5" : "bg-stone-50/60 border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
            Applied Cognitive Craft
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4 animate-fadeIn">
            Featured <span className="text-gradient-gold italic font-normal">Projects & Tech Assets</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
            A selection of software builds, cultural archives, and metric dashboards showing how I consolidate administrative operations, database alignment, and visual heritage string systems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-3xl overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                isDarkMode
                  ? "bg-stone-900/30 border-white/5 hover:border-gold-400/20 shadow-md"
                  : "bg-white border-stone-200 hover:border-gold-500/20 shadow-sm"
              }`}
            >
              <div>
                {/* Visual Image Banner stage */}
                <div className="aspect-[16/9] w-full overflow-hidden relative bg-stone-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20" />
                  
                  {/* Category label */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-[9px] font-mono tracking-wider uppercase text-gold-400 border border-white/5">
                    {project.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 md:p-8">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-600 dark:text-gold-400 flex items-center gap-1.5 mb-2">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    Interactive Case Study Overlay
                  </span>
                  
                  <h3 className={`text-xl font-serif font-bold group-hover:text-gold-500 transition-colors ${
                    isDarkMode ? "text-stone-100" : "text-stone-900"
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-xs md:text-sm leading-relaxed mt-2 line-clamp-3 ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Lower Stack Badges and CTAs */}
              <div className="p-6 md:p-8 pt-0 border-t border-dashed border-stone-500/10 mt-2">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono ${
                        isDarkMode
                          ? "bg-stone-800 text-stone-300 border border-white/5"
                          : "bg-stone-100 text-stone-600 border border-stone-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                      isDarkMode ? "bg-stone-800/50 text-stone-400" : "bg-stone-100 text-stone-500"
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className={`w-full py-3 rounded-xl text-center font-sans font-semibold text-xs tracking-wide border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isDarkMode
                      ? "border-white/10 hover:border-gold-400 hover:bg-white/5 text-stone-200"
                      : "border-stone-200 hover:border-gold-500 hover:bg-stone-50 text-stone-800"
                  }`}
                >
                  View Case Study Detail
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Project Lightbox details dialog */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/95 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className={`w-full max-w-2xl rounded-3xl overflow-hidden border max-h-[90vh] overflow-y-auto ${
                  isDarkMode ? "bg-stone-900 border-white/5" : "bg-white border-stone-300 shadow-2xl"
                }`}
                onClick={e => e.stopPropagation()}
              >
                {/* Backdrop Visual */}
                <div className="relative aspect-[16/7] w-full overflow-hidden bg-stone-950">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/80 hover:bg-white/10 text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Dialogue Content */}
                <div className="p-6 md:p-10 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400">
                      Case Study Project — {activeProject.category}
                    </span>
                    <h3 className={`text-2xl font-serif font-black tracking-tight mt-1 ${isDarkMode ? "text-white" : "text-stone-950"}`}>
                      {activeProject.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-600"}`}>
                      {activeProject.description}
                    </p>

                    {activeProject.projectDetail && (
                      <div className="p-5 rounded-2xl bg-stone-500/5 border border-dashed border-stone-500/10">
                        <h4 className={`text-xs font-mono uppercase tracking-wide mb-2 flex items-center gap-1.5 font-bold ${isDarkMode ? "text-gold-400" : "text-gold-600"}`}>
                          <Cpu className="w-4 h-4" />
                          Architecture / Impact Overview
                        </h4>
                        <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-600"}`}>
                          {activeProject.projectDetail}
                        </p>
                      </div>
                    )}

                    {/* Meta values */}
                    <div className="space-y-2">
                      <h4 className={`text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                        Technologies Configured
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map(tech => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-md text-[10px] font-mono ${
                              isDarkMode
                                ? "bg-stone-850 text-stone-300 border border-white/5"
                                : "bg-stone-100 text-stone-700 border border-stone-200"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-stone-500/10 flex items-center justify-end">
                    <button
                      onClick={() => setActiveProject(null)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-700 text-stone-950 font-sans font-semibold text-xs tracking-wide cursor-pointer"
                    >
                      Close Overview
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
