"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection({ dict, locale }: { dict: any; locale: Locale }) {
  return (
    <section className="py-32 md:py-64 relative z-10 overflow-hidden bg-background border-t border-white/5">
      {/* Background Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-[#0000FF]/25 blur-[250px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Vercel Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_15%,transparent_100%)] pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-8 text-center z-20 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/80 transition-all hover:bg-white/10 hover:scale-105 cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_#fff]"></span>
            Initiate Collaboration
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[90px] lg:text-[140px] font-black font-heading leading-[0.85] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-2xl"
        >
          {dict.home?.cta?.title?.split(' ')[0] || "READY."}
          <br />
          {dict.home?.cta?.title?.split(' ').slice(1).join(' ') || "SET. GROW."}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-3xl text-white/60 mb-16 max-w-3xl font-medium tracking-tight leading-snug"
        >
          {dict.home?.cta?.subtitle || "Step into the future of media storytelling with Curious Media."}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href={`/${locale}/contact`}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-12 py-6 text-[#0000FF] font-black tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] shadow-[0_20px_50px_rgba(0,0,255,0.2)]"
          >
            <span className="relative z-10 text-lg md:text-xl uppercase">{dict.home?.cta?.button || "Start Your Journey"}</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-[#0000FF]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
