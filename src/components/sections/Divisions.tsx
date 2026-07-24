"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { Play, TrendingUp, Sparkles, ArrowUpRight, Disc, Music2, BarChart3, Film } from "lucide-react";

export function Divisions({ dict, locale }: { dict: any; locale: Locale }) {
  const divisions = [
    {
      title: dict.divisions.media.title,
      desc: dict.divisions.media.desc,
      icon: <TrendingUp className="w-5 h-5" />,
      statIcon: <BarChart3 className="w-3.5 h-3.5" />,
      stat: "500+ Campaigns",
      gradient: "from-[#0B2EA8] to-blue-500",
      accentText: "text-[#0B2EA8]",
      tagBg: "bg-blue-50 text-[#0B2EA8] border-blue-100/50",
      href: `/${locale}/creators`,
      num: "01",
      tag: dict.divisions.media.subtitle,
      comingSoon: false,
    },
    {
      title: dict.divisions.studio.title,
      desc: dict.divisions.studio.desc,
      icon: <Film className="w-5 h-5" />,
      statIcon: <Play className="w-3.5 h-3.5" />,
      stat: "4K Production",
      gradient: "from-indigo-700 to-violet-500",
      accentText: "text-indigo-600",
      tagBg: "bg-indigo-50 text-indigo-600 border-indigo-100/50",
      href: `/${locale}/studio`,
      num: "02",
      tag: dict.divisions.studio.subtitle,
      comingSoon: false,
    },
    {
      title: dict.divisions.music.title,
      desc: "media and artist",
      icon: <Music2 className="w-5 h-5" />,
      statIcon: <Disc className="w-3.5 h-3.5" />,
      stat: "coming soon -",
      gradient: "from-violet-700 to-fuchsia-500",
      accentText: "text-violet-600",
      tagBg: "bg-violet-50 text-violet-600 border-violet-100/50",
      href: `/${locale}/records`,
      num: "03",
      tag: "media and artist",
      comingSoon: true,
    },
    {
      title: dict.divisions.products.title,
      desc: "AI and tech",
      icon: <Sparkles className="w-5 h-5" />,
      statIcon: <BarChart3 className="w-3.5 h-3.5" />,
      stat: "coming soon -",
      gradient: "from-sky-600 to-cyan-400",
      accentText: "text-sky-600",
      tagBg: "bg-sky-50 text-sky-600 border-sky-100/50",
      href: `/${locale}/products`,
      num: "04",
      tag: "AI and tech",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Top / bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

        {/* ── Header ── */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tight leading-[0.95] text-[#0B2EA8] uppercase"
            >
              {dict.divisions.title_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">{dict.divisions.title_2}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-blue-800/60 font-medium max-w-sm md:text-right leading-relaxed"
          >
            {dict.divisions.description}
          </motion.p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {divisions.map((div, i) => {
            return (
              <Link key={div.title} href={div.href} className="group cursor-pointer block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 min-h-[360px] bg-white border-2 border-[#0B2EA8] hover:border-[#0A1A4E] shadow-[0_4px_24px_rgba(11,46,168,0.06)] hover:shadow-[0_16px_40px_rgba(11,46,168,0.14)] hover:-translate-y-2"
                >
                  <div className="relative z-10 flex flex-col h-full p-6">

                    {/* Top row: number + stat pill */}
                    <div className="flex items-center justify-between mb-auto">
                      <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 group-hover:text-slate-400 uppercase transition-colors duration-300">
                        {div.num}
                      </span>
                      {div.comingSoon ? (
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[10px] font-black uppercase text-[#0B2EA8] shadow-sm">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                          </span>
                          <span>coming soon -</span>
                        </div>
                      ) : (
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold ${div.tagBg} shadow-sm`}>
                          {div.statIcon}
                          <span>{div.stat}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    {div.comingSoon ? (
                      <div className="flex-1 flex flex-col items-center justify-center my-auto py-8 text-center">
                        <motion.div
                          animate={{ scale: [1, 1.08, 1], y: [0, -6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 text-white shadow-[0_12px_32px_rgba(11,46,168,0.35)] border border-white/20"
                        >
                          <span className="relative flex h-3 w-3 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-85" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                          </span>
                          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] font-heading drop-shadow-sm">
                            Coming Soon
                          </span>
                        </motion.div>
                        <p className="text-xs font-black text-[#0B2EA8]/80 mt-5 uppercase tracking-[0.2em]">
                          {div.tag}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-auto pt-4">
                        {/* Icon + tag row */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ${div.accentText} shadow-sm shrink-0`}>
                            {div.icon}
                          </div>
                          <span className={`text-[9px] font-black uppercase tracking-[0.22em] ${div.accentText}`}>
                            {div.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black font-heading tracking-tight text-[#0A1A4E] mb-2 leading-tight uppercase">
                          {div.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 group-hover:text-slate-700 transition-colors duration-300 font-medium">
                          {div.desc}
                        </p>

                        {/* CTA row */}
                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#0B2EA8] transition-colors duration-300">
                            Explore
                          </span>
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className={`w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center ${div.accentText} shadow-sm`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Animated bottom gradient accent bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${div.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
