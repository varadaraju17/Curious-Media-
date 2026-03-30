"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="flex-1 w-full bg-black min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cinematic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[200px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen delay-1000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Sparkles className="w-4 h-4 text-white/70" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/70">Launching Soon</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-[140px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black/20 leading-[0.9] mb-8"
        >
          CURIOUS<br/>PRODUCTS
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-xl md:text-3xl text-white/50 max-w-2xl font-medium tracking-tight mt-6"
        >
           We are engineering the definitive software suite for top-tier creators. The future is loading.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="mt-16"
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </main>
  );
}
