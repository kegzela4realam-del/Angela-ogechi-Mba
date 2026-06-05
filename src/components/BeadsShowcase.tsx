import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, X, Sparkles, MessageCircle, ArrowUpRight, Award, Layers } from "lucide-react";
import { BEADS_GALLERY } from "../data";
import { BeadProduct } from "../types";

interface ShowcaseProps {
  isDarkMode: boolean;
}

export default function BeadsShowcase({ isDarkMode }: ShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Waist Beads" | "Wrist Beads" | "Neck Beads" | "Special Sets">("All");
  const [activeItem, setActiveItem] = useState<BeadProduct | null>(null);

  const categories = ["All", "Waist Beads", "Wrist Beads", "Neck Beads", "Special Sets"] as const;

  const filteredItems = selectedCategory === "All"
    ? BEADS_GALLERY
    : BEADS_GALLERY.filter(item => item.category === selectedCategory);

  const handleWhatsAppInquiry = (item: BeadProduct) => {
    const message = `Hello Angela! I saw the gorgeous "${item.name}" (${item.category}) in your portfolio and wanted to inquire about custom fitting or purchase options in Accra.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/233500000000?text=${encoded}`, "_blank"); // Standard Ghana prefill
  };

  return (
    <section
      id="showcase"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950 border-white/5" : "bg-white border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
              Handmade Masterpieces
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4 animate-fadeIn">
              The Ghanaian <span className="text-gradient-gold italic font-normal">Bead Collection</span>
            </h2>
            <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
              Each bead is hand-paired in Accra using traditional methods of glass recycling, firing, and string tensioning. Explore their deep physical proportions, organic textures, and cultural meanings.
            </p>
          </div>

          {/* Filtering Sub-tabs */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border self-start lg:self-end ${
            isDarkMode ? "bg-stone-900/60 border-white/5" : "bg-stone-100 border-stone-200"
          }`}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-lg text-xs font-sans font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-gold-500 to-amber-700 text-stone-950 shadow-md font-bold"
                    : isDarkMode
                      ? "text-stone-400 hover:text-white"
                      : "text-stone-600 hover:text-stone-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group rounded-2xl overflow-hidden border cursor-pointer hover:-translate-y-1.5 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-stone-900/25 border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-white border-stone-200/60 shadow-sm"
                }`}
                onClick={() => setActiveItem(item)}
              >
                {/* Product Image Stage */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Layer */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-950/60 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-gold-400 border border-white/10">
                    {item.category}
                  </span>

                  {/* Pricing Badge */}
                  {item.price && (
                    <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                      {item.price.split("/")[0].trim()}
                    </span>
                  )}

                  {/* Info Hover Reveal Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-serif font-black text-lg mb-1 flex items-center gap-1.5">
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 text-gold-400" />
                    </p>
                    <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>
                </div>

                {/* Lower Information card */}
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className={`font-serif font-bold text-base group-hover:text-gold-500 transition-colors ${
                      isDarkMode ? "text-stone-100" : "text-stone-800"
                    }`}>
                      {item.name}
                    </h3>
                  </div>
                  <p className={`text-xs line-clamp-2 mb-4 leading-relaxed ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}>
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-mono tracking-wider text-gold-500 font-semibold uppercase">
                    <Info className="w-3.5 h-3.5 animate-pulse" />
                    Unveil Sacred Meaning & Materials
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed Immersive Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/95 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className={`w-full max-w-4xl rounded-3xl overflow-hidden border flex flex-col md:flex-row relative max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible ${
                  isDarkMode
                    ? "bg-stone-900 border-white/10"
                    : "bg-stone-50 border-stone-300 shadow-2xl"
                }`}
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-950/85 hover:bg-white/10 text-white transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Cinematic Luxury Visual Stage */}
                <div className="w-full md:w-1/2 relative bg-stone-950 flex flex-col justify-between">
                  {/* Big Image */}
                  <img
                    src={activeItem.image}
                    alt={activeItem.name}
                    className="w-full h-full object-cover min-h-[250px] md:min-h-[480px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent pointer-events-none" />
                  
                  {/* Category overlay */}
                  <span className="absolute bottom-6 left-6 px-4 py-1.5 rounded-full bg-gold-400/20 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-gold-400 border border-gold-400/30">
                    Handmade in Accra, Ghana
                  </span>
                </div>

                {/* Right Side: Deep Literary Story Content */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header Details */}
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        {activeItem.category} Collection
                      </span>
                      <h3 className={`text-2xl font-serif font-black leading-tight mt-1 ${isDarkMode ? "text-white" : "text-stone-950"}`}>
                        {activeItem.name}
                      </h3>
                      {activeItem.price && (
                        <p className="text-gold-500 font-mono text-sm font-semibold mt-1">
                          Est. Price: {activeItem.price}
                        </p>
                      )}
                    </div>

                    {/* Cultural Definition Card */}
                    <div className="p-4 rounded-xl bg-gold-400/5 border border-gold-400/20 space-y-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gold-500 font-bold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-gold-400" />
                        Cultural Meaning & Inspiration
                      </p>
                      <p className={`text-xs md:text-sm leading-relaxed italic ${isDarkMode ? "text-stone-300" : "text-stone-700"}`}>
                        &ldquo;{activeItem.meaning}&rdquo;
                      </p>
                    </div>

                    {/* Core Description */}
                    <div className="space-y-1">
                      <h4 className={`text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                        Artisanal Description
                      </h4>
                      <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-300" : "text-stone-600"}`}>
                        {activeItem.description}
                      </p>
                    </div>

                    {/* Materials Inventory Tags */}
                    <div className="space-y-2">
                      <h4 className={`text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                        Authentic Materials
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeItem.materials.map(mat => (
                          <span
                            key={mat}
                            className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${
                              isDarkMode
                                ? "bg-stone-800 text-stone-300 border border-white/5"
                                : "bg-stone-100 text-stone-700 border border-stone-200"
                            }`}
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-4 border-t border-stone-500/15 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => handleWhatsAppInquiry(activeItem)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      Inquire via WhatsApp
                    </button>
                    <button
                      onClick={() => setActiveItem(null)}
                      className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-sans font-medium hover:underline flex items-center justify-center ${
                        isDarkMode ? "text-stone-400 hover:text-white" : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      Back to Gallery
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
