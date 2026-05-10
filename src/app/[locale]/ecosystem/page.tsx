"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";
import Image from "next/image";

export default function EcosystemPage() {
  return (
    <main className="flex-1 w-full bg-[#0A1A4E] min-h-screen relative flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Cinematic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen delay-1000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-400/30 bg-indigo-900/30 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <Network className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold tracking-widest uppercase text-cyan-100">Global Network</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-[120px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-100 to-indigo-900 leading-[0.9] mb-8"
        >
          CURIOUS<br/>ECOSYSTEM
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-xl md:text-2xl text-indigo-200/70 max-w-3xl font-medium tracking-tight mt-2 mb-16 leading-relaxed"
        >
           An interconnected digital infrastructure designed to amplify reach, optimize distribution, and build massive cultural influence.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="relative w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-indigo-500/20 shadow-[0_20px_80px_rgba(11,46,168,0.5)] group"
        >
          {/* Overlay gradient for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4E] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          
          <Image 
            src="/images/content/curious_ecosystem_1778392391717.png" 
            alt="Curious Ecosystem Network" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>
      </div>
    </main>
  );
}
