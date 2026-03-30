"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection({ dict, locale }: { dict: any; locale: Locale }) {
  return (
    <section className="py-32 md:py-64 relative z-10 overflow-hidden bg-black border-t border-white/5">
      {/* Background Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-white/5 blur-[250px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Vercel Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="container relative mx-auto px-4 md:px-8 text-center z-20 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">Initiate Collaboration</span>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[100px] font-black font-heading leading-none tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black/20"
        >
          {dict.home.cta.title.split(' ')[0]}
          <br />
          {dict.home.cta.title.split(' ').slice(1).join(' ')}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl text-white/50 mb-16 max-w-2xl font-medium tracking-tight"
        >
          {dict.home.cta.subtitle}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href={`/${locale}/contact`}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-black font-black tracking-wide transition-all hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10 text-lg">{dict.home.cta.button}</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
