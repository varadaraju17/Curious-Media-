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
      image: "/images/content/curious_media_1778392360428.png",
      gradient: "from-[#0B2EA8] to-blue-500",
      glowColor: "rgba(11,46,168,0.35)",
      borderGlow: "group-hover:shadow-[0_0_0_1px_rgba(11,46,168,0.4),0_32px_80px_rgba(11,46,168,0.25)]",
      accentText: "text-blue-300",
      tagBg: "bg-blue-500/20 text-blue-200 border-white/10",
      href: `/${locale}/creators`,
      num: "01",
      tag: dict.divisions.media.subtitle,
    },
    {
      title: dict.divisions.studio.title,
      desc: dict.divisions.studio.desc,
      icon: <Film className="w-5 h-5" />,
      statIcon: <Play className="w-3.5 h-3.5" />,
      stat: "4K Production",
      image: "/images/content/curious_studio_1778392924817.png",
      gradient: "from-indigo-700 to-violet-500",
      glowColor: "rgba(99,102,241,0.35)",
      borderGlow: "group-hover:shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_32px_80px_rgba(99,102,241,0.25)]",
      accentText: "text-indigo-300",
      tagBg: "bg-indigo-500/20 text-indigo-200 border-white/10",
      href: `/${locale}/studio`,
      num: "02",
      tag: dict.divisions.studio.subtitle,
    },
    {
      title: dict.divisions.music.title,
      desc: dict.divisions.music.desc,
      icon: <Music2 className="w-5 h-5" />,
      statIcon: <Disc className="w-3.5 h-3.5" />,
      stat: "Top Charts",
      image: "/images/content/curious_music_1778392942223.png",
      gradient: "from-violet-700 to-fuchsia-500",
      glowColor: "rgba(139,92,246,0.35)",
      borderGlow: "group-hover:shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_32px_80px_rgba(139,92,246,0.25)]",
      accentText: "text-violet-300",
      tagBg: "bg-violet-500/20 text-violet-200 border-white/10",
      href: `/${locale}/records`,
      num: "03",
      tag: dict.divisions.music.subtitle,
    },
    {
      title: dict.divisions.products.title,
      desc: dict.divisions.products.desc,
      icon: <Sparkles className="w-5 h-5" />,
      statIcon: <BarChart3 className="w-3.5 h-3.5" />,
      stat: "AI-Powered Tools",
      image: "/images/content/curious_products_1778392374896.png",
      gradient: "from-sky-600 to-cyan-400",
      glowColor: "rgba(14,165,233,0.35)",
      borderGlow: "group-hover:shadow-[0_0_0_1px_rgba(14,165,233,0.4),0_32px_80px_rgba(14,165,233,0.25)]",
      accentText: "text-sky-300",
      tagBg: "bg-sky-500/20 text-sky-200 border-white/10",
      href: `/${locale}/products`,
      num: "04",
      tag: dict.divisions.products.subtitle,
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

        {/* Header */}
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
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {divisions.map((div, i) => (
            <Link key={div.title} href={div.href} className="group cursor-pointer block h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full flex flex-col rounded-3xl overflow-hidden border border-white/10
                  shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                  ${div.borderGlow}
                  hover:-translate-y-2 transition-all duration-500`}
              >
                {/* Full-bleed image */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${div.image})` }}
                  />
                  {/* Dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                  {/* Accent color tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${div.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full min-h-[360px] p-6">

                  {/* Top row: number + stat */}
                  <div className="flex items-center justify-between mb-auto">
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
                      {div.num}
                    </span>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold ${div.tagBg} backdrop-blur-md`}>
                      {div.statIcon}
                      <span>{div.stat}</span>
                    </div>
                  </div>

                  {/* Bottom content block */}
                  <div className="mt-auto pt-4">
                    {/* Icon + tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${div.gradient} flex items-center justify-center text-white shadow-lg shrink-0`}>
                        {div.icon}
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-[0.22em] ${div.accentText}`}>
                        {div.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black font-heading tracking-tight text-white mb-2 leading-tight">
                      {div.title}
                    </h3>

                    {/* Description — reveals on hover */}
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-2 group-hover:text-white/75 transition-colors duration-300">
                      {div.desc}
                    </p>

                    {/* CTA row */}
                    <div className={`mt-5 pt-4 border-t border-white/10 flex items-center justify-between`}>
                      <span className="text-xs font-bold text-white/35 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-300">Explore</span>
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`w-9 h-9 rounded-full bg-gradient-to-br ${div.gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Animated bottom gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${div.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

}
