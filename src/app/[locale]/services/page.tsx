"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Play, Disc, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "media",
      title: "Curious Media",
      desc: "Grow faster. Earn smarter.",
      extended: "Data-driven strategies and premium ad network capabilities powering massive scale and consistent monetization for the world's leading digital creators.",
      icon: <TrendingUp className="w-14 h-14" />,
      gradient: "from-blue-600 to-blue-400",
      glowColor: "rgba(37,99,235,0.35)",
      textGrad: "from-blue-400 to-sky-300",
    },
    {
      id: "studios",
      title: "Curious Studios",
      desc: "Offline to digital, amplified with ads.",
      extended: "High-end content production facilities bridging the gap between traditional broadcasting and the modern digital consumption ecosystem.",
      icon: <Play className="w-14 h-14" />,
      gradient: "from-indigo-500 to-purple-400",
      glowColor: "rgba(99,102,241,0.35)",
      textGrad: "from-indigo-400 to-purple-300",
    },
    {
      id: "records",
      title: "Curious Music",
      desc: "Discovering talent. Building artists. Creating stars.",
      extended: "A dedicated label focused on unearthing raw musical talent and transforming them into global superstars through unrivaled promotion and production.",
      icon: <Disc className="w-14 h-14" />,
      gradient: "from-violet-500 to-pink-400",
      glowColor: "rgba(139,92,246,0.35)",
      textGrad: "from-violet-400 to-pink-300",
    },
    {
      id: "products",
      title: "Curious Products",
      desc: "Today we are building for the future.",
      extended: "Engineering the next generation of creator tools, analytics platforms, and immersive digital tech to redefine how audiences interact online.",
      icon: <Sparkles className="w-14 h-14" />,
      gradient: "from-sky-500 to-cyan-400",
      glowColor: "rgba(14,165,233,0.35)",
      textGrad: "from-sky-400 to-cyan-300",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
      {/* Page glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/15 blur-[220px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-800/8 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">The Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-black font-heading tracking-tighter mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40"
          >
            OUR SERVICES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/40 max-w-3xl font-medium tracking-tight leading-relaxed"
          >
            Four specialized divisions. One unified vision. Discover how Curious Media powers the future of digital storytelling.
          </motion.p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-8 md:gap-12">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`group flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 p-8 md:p-12 lg:p-16 rounded-[3rem] border border-blue-400/10 relative overflow-hidden transition-all duration-600 hover:border-blue-400/25`}
              style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #071428 60%, #040D21 100%)", boxShadow: "0 20px 80px rgba(4,13,33,0.7)" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"
                style={{ background: `radial-gradient(ellipse at ${idx % 2 !== 0 ? '80%' : '20%'} 50%, ${svc.glowColor} 0%, transparent 70%)` }}
              />
              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon side */}
              <div className="w-full lg:w-5/12 flex items-center justify-center relative z-10">
                <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-gradient-to-br ${svc.gradient} p-[2px] group-hover:scale-105 transition-transform duration-700`}
                  style={{ boxShadow: `0 0 80px ${svc.glowColor}` }}
                >
                  <div className="w-full h-full rounded-[calc(3rem-2px)] bg-[#071428] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: `linear-gradient(135deg, ${svc.glowColor} 0%, transparent 70%)` }}
                    />
                    <div className={`text-transparent bg-clip-text bg-gradient-to-br ${svc.textGrad} relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                      {svc.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-7/12 flex flex-col text-center lg:text-left relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                  {svc.title}
                </h2>
                <h3 className={`text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${svc.textGrad} mb-6 tracking-tight`}>
                  {svc.desc}
                </h3>
                <p className="text-base md:text-lg text-white/40 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0 group-hover:text-white/60 transition-colors duration-500">
                  {svc.extended}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-white font-bold tracking-widest uppercase transition-all hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-r ${svc.gradient}`} />
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-white/10" />
                    <span className="relative z-10 text-xs md:text-sm">Learn More</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
