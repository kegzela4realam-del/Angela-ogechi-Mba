import { Sparkles, Heart, RefreshCw, Layers, Compass, GraduationCap } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950/40 border-white/5" : "bg-stone-50/60 border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
            My Sacred Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
            <span className={isDarkMode ? "text-stone-100" : "text-stone-900"}>The Intersection of </span>
            <span className="text-gradient-gold font-normal italic">High-Tech & Ancient Heritage</span>
          </h2>
          <p className={`text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
            My life is a story of continuous self-directed growth, family support, and cultural pride. By day, I build high-quality context classifications for remote AI modules. By evening, I immerse myself in the tactile rhythm of crafting glass bead designs in Accra.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Narrative Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className={`text-xl font-serif font-bold ${isDarkMode ? "text-white" : "text-stone-900"}`}>
                Bridging Data Annotation and Traditional Craftsmanship
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-700"}`}>
                Growing up in Ghana, I discovered that every bead carries a secret conversation — a historical message of social status, protection, maturity, and personal alignment. To assemble these fragments is to build order out of complexity. 
              </p>
              <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-700"}`}>
                This direct cognitive focus led me naturally into the field of **Data Annotation**. In the remote AI landscape, tagging datasets, evaluation of models, and contextual alignment require the exact same intensive patience, extreme attention to detail, and systemic classification as sorting thousands of authentic Ghanaian Krobo micro beads.
              </p>
            </div>

            {/* Emotional copy on balance and growth */}
            <div className={`p-6 md:p-8 rounded-2xl border ${
              isDarkMode 
                ? "bg-stone-900/60 border-white/5 shadow-inner" 
                : "bg-white border-stone-200 shadow-sm"
              }`}
            >
              <h4 className="font-serif font-bold text-md text-gold-500 mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-500" />
                Confidence, Resilience, and Balancing Life
              </h4>
              <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-stone-300" : "text-stone-600"}`}>
                Building a business while working in tech and dedicating times to personal growth has not been a simple process. It has demanded absolute focus and time-management strategies, and above all, deep resilience. 
              </p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-600"}`}>
                Each milestone has taught me to show up with confidence, trusting in my competence and the value of my perspective. This is the energy I carry into global remote tech teams as a collaborator who operates with dignity and an unrelenting drive to learn.
              </p>
            </div>

            {/* Quote of Empowerment */}
            <div className="border-l-2 border-gold-400 pl-4 py-1">
              <p className={`italic text-sm font-sans font-medium ${isDarkMode ? "text-gold-200" : "text-stone-800"}`}>
                &ldquo;True empowerment is not choosing between technology or culture; it is weaving them together to fuel a sustainable, modern African future.&rdquo;
              </p>
              <span className={`text-[10px] font-mono tracking-wider uppercase block mt-1 ${isDarkMode ? "text-stone-500" : "text-stone-500"}`}>
                — Angela Ogechi Mba
              </span>
            </div>
          </div>

          {/* Quick Pillars Panel (Right Hand Side) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Pillar 1 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode ? "bg-stone-900/40 border-white/5 hover:border-gold-400/20" : "bg-white border-stone-200 hover:border-gold-500/20 shadow-sm"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 text-gold-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className={`font-serif font-bold text-base mb-2 ${isDarkMode ? "text-stone-200" : "text-stone-800"}`}>
                Extreme Attention & Quality
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
                A standard 99.4% data validation score isn't an accident. It comes from the rigorous visual and metadata precision practiced every day in bead alignments.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode ? "bg-stone-900/40 border-white/5 hover:border-emerald-400/20" : "bg-white border-stone-200 hover:border-emerald-500/20 shadow-sm"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className={`font-serif font-bold text-base mb-2 ${isDarkMode ? "text-stone-200" : "text-stone-800"}`}>
                Sacred Cultural Authenticity
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
                All my creative bead designs use premium Krobo glass, supporting organic family makers and expanding regional Ghanaian history and craft.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode ? "bg-stone-900/40 border-white/5 hover:border-gold-400/20" : "bg-white border-stone-200 hover:border-gold-500/20 shadow-sm"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 text-gold-500">
                <RefreshCw className="w-5 h-5 animate-spin-slow" style={{ animationDuration: '25s' }} />
              </div>
              <h4 className={`font-serif font-bold text-base mb-2 ${isDarkMode ? "text-stone-200" : "text-stone-800"}`}>
                Agile Learning & Adapting
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
                Constantly learning. From new LLM annotation prompt models to building digital spreadsheet systems for inventory, I dive head-first into complex tasks.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
