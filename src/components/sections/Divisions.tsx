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
      // No image for cards 01 & 02 — uses solid white bg
      image: null as string | null,
      gradient: "from-[#0B2EA8] to-blue-500",
      glowColor: "rgba(11,46,168,0.35)",
      borderGlow: "group-hover:shadow-[0_20px_50px_rgba(11,46,168,0.08)]",
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
      image: null as string | null,
      gradient: "from-indigo-700 to-violet-500",
      glowColor: "rgba(99,102,241,0.35)",
      borderGlow: "group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)]",
      accentText: "text-indigo-600",
      tagBg: "bg-indigo-50 text-indigo-600 border-indigo-100/50",
      href: `/${locale}/studio`,
      num: "02",
      tag: dict.divisions.studio.subtitle,
      comingSoon: false,
    },
    {
      title: dict.divisions.music.title,
      desc: dict.divisions.music.desc,
      icon: <Music2 className="w-5 h-5" />,
      statIcon: <Disc className="w-3.5 h-3.5" />,
      stat: "Top Charts",
      // Cards 03 & 04 — show background image ONLY, no content overlay
      image: "/images/content/curious_music_coming_soon.png" as string | null,
      gradient: "from-violet-700 to-fuchsia-500",
      glowColor: "rgba(139,92,246,0.35)",
      borderGlow: "group-hover:shadow-[0_32px_80px_rgba(139,92,246,0.25)]",
      accentText: "text-violet-300",
      tagBg: "bg-violet-500/20 text-violet-200 border-white/10",
      href: `/${locale}/records`,
      num: "03",
      tag: dict.divisions.music.subtitle,
      comingSoon: true,
    },
    {
      title: dict.divisions.products.title,
      desc: dict.divisions.products.desc,
      icon: <Sparkles className="w-5 h-5" />,
      statIcon: <BarChart3 className="w-3.5 h-3.5" />,
      stat: "AI-Powered Tools",
      image: "/images/content/curious_product_coming_soon.png" as string | null,
      gradient: "from-sky-600 to-cyan-400",
      glowColor: "rgba(14,165,233,0.35)",
      borderGlow: "group-hover:shadow-[0_32px_80px_rgba(14,165,233,0.25)]",
      accentText: "text-sky-300",
      tagBg: "bg-sky-500/20 text-sky-200 border-white/10",
      href: `/${locale}/products`,
      num: "04",
      tag: dict.divisions.products.subtitle,
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-5"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.divisions.badge}</span>
            </motion.div>

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
            const isWhiteBg = !div.image;

            return (
              <Link key={div.title} href={div.href} className="group cursor-pointer block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 min-h-[360px] ${
                    isWhiteBg
                      ? `bg-white border border-slate-100 ${div.borderGlow} hover:border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:-translate-y-2`
                      : `border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${div.borderGlow} hover:-translate-y-2`
                  }`}
                >
                  {/* ── Background layer ── */}
                  <div className="absolute inset-0">
                    {div.image ? (
                      /* Cards 03 & 04: full-bleed photo */
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${div.image})` }}
                      />
                    ) : (
                      /* Cards 01 & 02: solid white background */
                      <div className="absolute inset-0 bg-white" />
                    )}
                  </div>

                  {/* ── Content (only cards 01 & 02) ── */}
                  {!div.comingSoon && (
                    <div className="relative z-10 flex flex-col h-full p-6">

                      {/* Top row: number + stat pill */}
                      <div className="flex items-center justify-between mb-auto">
                        <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 group-hover:text-slate-400 uppercase transition-colors duration-300">
                          {div.num}
                        </span>
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold ${div.tagBg} shadow-sm`}>
                          {div.statIcon}
                          <span>{div.stat}</span>
                        </div>
                      </div>

                      {/* Bottom block */}
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
                    </div>
                  )}

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
