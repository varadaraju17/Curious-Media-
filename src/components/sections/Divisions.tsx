"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { Play, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export function Divisions({ dict, locale }: { dict: any; locale: Locale }) {
  const divisions = [
    {
      title: dict.nav.media,
      desc: dict.home.divisions.media_desc,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      href: `/${locale}/media`,
    },
    {
      title: dict.nav.studio,
      desc: dict.home.divisions.studio_desc,
      icon: <Play className="w-6 h-6 text-white" />,
      href: `/${locale}/studio`,
    },
    {
      title: dict.nav.products,
      desc: dict.home.divisions.products_desc,
      icon: <Sparkles className="w-6 h-6 text-white" />,
      href: `/${locale}/products`,
    }
  ];

  return (
    <section className="py-32 md:py-48 relative z-10 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">The Ecosystem</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-heading mb-8 tracking-tighter leading-[0.9]"
          >
            {dict.home.divisions.title.split(' ')[0]}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-black/30">
              {dict.home.divisions.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-white/50 max-w-3xl font-medium tracking-tight"
          >
            {dict.home.divisions.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {divisions.map((div, i) => (
            <Link key={div.title} href={div.href} className="group cursor-pointer">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-10 md:p-14 h-full flex flex-col rounded-[40px] overflow-hidden bg-[#050505] border border-white/10 group-hover:-translate-y-4 group-hover:border-white/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(255,255,255,0.05)]"
              >
                {/* Internal Hover Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center mb-12 group-hover:bg-white group-hover:border-transparent transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]">
                    <div className="group-hover:invert transition-all duration-500">
                      {div.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-black font-heading tracking-tighter mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                    {div.title}
                  </h3>
                  
                  <p className="text-white/60 text-lg flex-1 mb-12 font-medium tracking-tight group-hover:text-white/80 transition-colors">
                    {div.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                     <span className="text-white font-bold uppercase tracking-widest text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                       {dict.home.divisions.explore}
                     </span>
                     <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-white/30 group-hover:bg-white/10 transition-all group-hover:translate-x-2">
                       <ArrowRight className="w-4 h-4 text-white" />
                     </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
