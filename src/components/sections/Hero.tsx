"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useRef } from "react";

export function Hero({ dict, locale }: { dict: any; locale: Locale }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={container} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background text-white selection:bg-white/30 pt-20">
      
      {/* Vercel-like Background grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)] pointer-events-none"></div>
      
      <motion.div style={{ y, opacity }} className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></motion.div>

      <div className="container relative z-10 px-4 md:px-8 mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Release Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Introducing Curious OS Release 2.0
            <ArrowRight className="w-4 h-4 text-white/60 ml-1" />
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[8vw] leading-[0.9] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-blue-900/40"
        >
          WHERE BRANDS<br/>
          MEET CREATORS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-xl md:text-3xl text-white/70 max-w-3xl leading-snug tracking-tight font-medium"
        >
          {dict.home?.subtitle || "A premium media-tech platform empowering digital storytelling and powerful collaborations."}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="mt-16 flex flex-col sm:flex-row items-center gap-6"
        >
           <Link 
             href={`/${locale}/media`} 
             className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-blue-600 font-bold tracking-wide transition-all hover:scale-105 hover:bg-blue-50"
           >
             {dict.home?.cta_explore || "Explore Our World"}
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>
           <Link 
             href={`/${locale}/studio`} 
             className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 glass px-8 py-4 font-bold text-white transition-all hover:bg-white/20 hover:border-white/30 select-none"
           >
             <PlayCircle className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
             Watch Showreel
           </Link>
        </motion.div>

      </div>

      {/* Extreme gradient fade at bottom to transition to Next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
