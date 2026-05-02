"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { Play, TrendingUp, Sparkles, ArrowRight, Disc, ChevronRight } from "lucide-react";

export function Divisions({ dict, locale }: { dict: any; locale: Locale }) {
  const divisions = [
    {
      title: "Curious Media",
      desc: "India's #1 creator monetisation platform. We help creators grow faster and earn smarter across every platform.",
      icon: <TrendingUp className="w-5 h-5" />,
      image: "/images/divisions/media.png",
      gradient: "from-blue-600 to-blue-400",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      accentText: "text-blue-600",
      accentBadge: "bg-blue-100 text-blue-700",
      href: `/${locale}/media`,
      num: "01",
      tag: "Creator Growth",
    },
    {
      title: "Curious Studios",
      desc: "Premium content production — from concept to viral. We amplify offline stories into digital phenomena.",
      icon: <Play className="w-5 h-5" />,
      image: "/images/divisions/studio.png",
      gradient: "from-indigo-600 to-blue-400",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-200",
      accentText: "text-indigo-600",
      accentBadge: "bg-indigo-100 text-indigo-700",
      href: `/${locale}/studio`,
      num: "02",
      tag: "Content Production",
    },
    {
      title: "Curious Music",
      desc: "Discovering talent, building artists, creating stars. Your sound, amplified to millions.",
      icon: <Disc className="w-5 h-5" />,
      image: "/images/divisions/records.png",
      gradient: "from-violet-600 to-indigo-400",
      accentBg: "bg-violet-50",
      accentBorder: "border-violet-200",
      accentText: "text-violet-600",
      accentBadge: "bg-violet-100 text-violet-700",
      href: `/${locale}/records`,
      num: "03",
      tag: "Music & Artists",
    },
    {
      title: "Curious Products",
      desc: "Building the future of digital commerce. Innovative products that bridge audiences and brands.",
      icon: <Sparkles className="w-5 h-5" />,
      image: "/images/divisions/products.png",
      gradient: "from-sky-600 to-blue-400",
      accentBg: "bg-sky-50",
      accentBorder: "border-sky-200",
      accentText: "text-sky-600",
      accentBadge: "bg-sky-100 text-sky-700",
      href: `/${locale}/products`,
      num: "04",
      tag: "Innovation",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8FAFF] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
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
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">The Ecosystem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
            >
              The Curious<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400">Ecosystem.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-blue-800/65 font-medium max-w-sm md:text-right leading-relaxed"
          >
            Discover our specialized divisions powering the next generation of digital storytelling and audience monetization.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {divisions.map((div, i) => (
            <Link key={div.title} href={div.href} className="group cursor-pointer block h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                className="h-full flex flex-col bg-white rounded-3xl border border-blue-100 overflow-hidden
                  shadow-[0_4px_24px_rgba(11,46,168,0.06)]
                  hover:shadow-[0_20px_60px_rgba(11,46,168,0.14)]
                  hover:-translate-y-2 transition-all duration-400"
              >
                {/* Image */}
                <div className={`relative h-52 ${div.accentBg} overflow-hidden`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                    style={{ backgroundImage: `url(${div.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />

                  {/* Number badge */}
                  <div className={`absolute top-4 left-4 text-[10px] font-black tracking-[0.25em] uppercase ${div.accentBadge} px-3 py-1.5 rounded-full`}>
                    {div.num}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${div.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {div.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Tag */}
                  <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${div.accentText} mb-3`}>
                    {div.tag}
                  </span>
                  <h3 className="text-xl font-black font-heading tracking-tight text-[#0B2EA8] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {div.title}
                  </h3>
                  <p className="text-sm text-blue-800/60 leading-relaxed flex-1">
                    {div.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-blue-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-800/40 uppercase tracking-widest">Explore</span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${div.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <ArrowRight className="w-3.5 h-3.5" />
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
