import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-stone-950 flex flex-col items-center justify-center text-center p-6"
    >
      <div className="space-y-6 relative max-w-sm">
        {/* Animated Background Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="w-16 h-16 rounded-full border border-dashed border-gold-400/20 absolute -top-4 -left-4 pointer-events-none"
        />

        {/* Central Logo Motif */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="w-14 h-14 rounded-full border border-gold-400/40 flex items-center justify-center bg-stone-900/60 shadow-[0_0_30px_rgba(185,118,36,0.15)] relative">
            <span className="font-display font-black text-xl text-gold-400 tracking-wider">A</span>
            <Sparkles className="w-4 h-4 text-gold-300 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </motion.div>

        {/* Brand Text */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-serif font-black tracking-widest text-lg uppercase"
          >
            Angela Ogechi Mba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-stone-400 text-[9px] font-mono uppercase tracking-widest"
          >
            Technology • African Craft • Heritage
          </motion.p>
        </div>

        {/* Golden loading bar indicator */}
        <div className="w-40 h-[1.5px] bg-stone-900 rounded-full overflow-hidden mx-auto mt-6">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent w-1/2 relative"
          />
        </div>
      </div>
    </motion.div>
  );
}
