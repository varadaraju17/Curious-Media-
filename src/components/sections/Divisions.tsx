"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { Play, TrendingUp, Sparkles, ArrowUpRight, Disc } from "lucide-react";

export function Divisions({ dict, locale }: { dict: any; locale: Locale }) {
  const divisions = [
    {
      title: "Curious Media",
      desc: "Grow faster. Earn smarter.",
      icon: <TrendingUp className="w-6 h-6" />,
      image: "/images/divisions/media.png",
      gradient: "from-blue-600 to-blue-400",
      glowColor: "rgba(37,99,235,0.40)",
      borderHover: "hover:border-blue-400/50",
      href: `/${locale}/media`,
      num: "01",
    },
    {
      title: "Curious Studios",
      desc: "Offline to digital, amplified with ads.",
      icon: <Play className="w-6 h-6" />,
      image: "/images/divisions/studio.png",
      gradient: "from-indigo-500 to-purple-400",
      glowColor: "rgba(99,102,241,0.40)",
      borderHover: "hover:border-indigo-400/50",
      href: `/${locale}/studio`,
      num: "02",
    },
    {
      title: "Curious Records",
      desc: "Discovering talent. Building artists. Creating stars.",
      icon: <Disc className="w-6 h-6" />,
      image: "/images/divisions/records.png",
      gradient: "from-violet-500 to-pink-400",
      glowColor: "rgba(139,92,246,0.40)",
      borderHover: "hover:border-violet-400/50",
      href: `/${locale}/records`,
      num: "03",
    },
    {
      title: "Curious Products",
      desc: "Today we are building for the future.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/images/divisions/products.png",
      gradient: "from-sky-500 to-cyan-400",
      glowColor: "rgba(14,165,233,0.40)",
      borderHover: "hover:border-sky-400/50",
      href: `/${locale}/products`,
      num: "04",
    },
  ];

  return (
    <section className="py-32 md:py-48 relative z-10 bg-[#040D21] overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] border border-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] border border-blue-400/8 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-800/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

        {/* Header */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-blue-200">The Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl lg:text-[100px] font-black font-heading mb-6 tracking-tighter leading-none"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/70">
              The Curious Ecosystem.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-white/40 max-w-3xl font-medium leading-snug px-4"
          >
            Discover our specialized divisions powering the next generation of digital storytelling and audience monetization.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {divisions.map((div, i) => (
            <Link key={div.title} href={div.href} className="group cursor-pointer block h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`h-full flex flex-col relative rounded-[2.5rem] p-3 border border-blue-400/10 ${div.borderHover} overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(4,13,33,0.8)]`}
                style={{
                  background: "linear-gradient(135deg, #0B1D3A 0%, #071428 100%)",
                }}
              >
                {/* Top glow overlay */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[60px]"
                  style={{ background: div.glowColor }}
                />

                {/* AI Image Section */}
                <div className="relative w-full h-[220px] md:h-[260px] rounded-[2rem] overflow-hidden bg-[#040D21] mb-6">
                  {/* Image scale on hover */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-screen"
                    style={{ backgroundImage: `url(${div.image})` }}
                  />
                  {/* Gradient overlay to smoothly blend image into the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/20 to-transparent" />
                  
                  {/* Floating Division Number */}
                  <div className="absolute top-5 left-6 text-[10px] font-black tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-400 uppercase z-10 bg-[#040D21]/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    {div.num}
                  </div>

                  {/* Icon Badge overlayed on image */}
                  <div className="absolute bottom-5 right-6 z-10">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${div.gradient} p-[1px] shadow-[0_10px_30px_rgba(4,13,33,0.5)]`}>
                      <div className="w-full h-full rounded-[calc(theme(borderRadius.2xl)-1px)] bg-[#071428] flex items-center justify-center text-white group-hover:bg-transparent transition-colors duration-400">
                        {div.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-5 pb-6 flex flex-col flex-1 relative z-10">
                  <h3 className="text-3xl lg:text-[32px] leading-none font-black font-heading tracking-tighter mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                    {div.title}
                  </h3>

                  <p className="text-white/45 text-sm flex-1 mb-8 font-medium group-hover:text-white/70 transition-colors duration-400 leading-relaxed pr-4">
                    {div.desc}
                  </p>

                  {/* Footer link */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5 group-hover:border-white/15 transition-colors duration-400">
                    <span className={`font-bold uppercase tracking-[0.2em] text-[10px] text-white/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${div.gradient} transition-all duration-400`}>
                      Explore Division
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:${div.gradient} group-hover:border-transparent transition-all duration-400 group-hover:scale-110 shadow-sm`}>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors duration-400" />
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
