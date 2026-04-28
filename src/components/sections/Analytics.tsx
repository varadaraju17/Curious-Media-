"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity } from "lucide-react";

export function Analytics({ dict }: { dict: any }) {
  const bars = [40, 65, 45, 80, 55, 90, 100];

  return (
    <section className="py-32 md:py-48 relative z-10 bg-[#040D21] overflow-hidden">
      {/* Section glow */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-blue-600/12 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/6 blur-[180px] rounded-full pointer-events-none" />
      {/* Top/bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm mb-10">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">Data-Driven Execution</span>
              </div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black font-heading mb-8 tracking-tighter leading-[0.9] text-white">
                {dict.home?.analytics?.title || "Proven Results."}
              </h2>
              <p className="text-xl md:text-2xl text-white/45 mb-16 max-w-lg font-medium tracking-tight leading-snug">
                {dict.home?.analytics?.subtitle || "We translate deep analytics into unprecedented digital growth."}
              </p>

              <div className="grid grid-cols-2 gap-8 lg:gap-12 border-t border-white/8 pt-14">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-blue-400 w-4 h-4" />
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Global Reach</p>
                  </div>
                  <h4 className="text-6xl md:text-[80px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 leading-none">
                    4.2B<span className="text-3xl md:text-4xl text-white/30 ml-1">+</span>
                  </h4>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="text-blue-400 w-4 h-4" />
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Avg. ROI</p>
                  </div>
                  <h4 className="text-6xl md:text-[80px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 leading-none">
                    14.5<span className="text-3xl md:text-4xl text-white/30 ml-1">x</span>
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — chart */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] p-6 md:p-10 overflow-hidden border border-blue-400/12 shadow-[0_30px_100px_rgba(4,13,33,0.8)]"
            >
              {/* Card BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] via-[#071428] to-[#040D21]" />
              {/* Internal grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              {/* Glow corners */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/12 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/8 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex justify-between items-end mb-14 pb-8 border-b border-white/8">
                <div>
                  <p className="text-white/35 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Performance Index</p>
                  <p className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-white">
                    +1,240%
                    <span className="text-white/35 text-sm tracking-normal font-sans ml-3">Δ Growth</span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/15" />
                  <span className="w-2 h-2 rounded-full bg-blue-400/50" />
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                </div>
              </div>

              {/* Bar chart */}
              <div className="h-56 flex items-end justify-between gap-2.5 relative z-10">
                {bars.map((height, index) => (
                  <div key={index} className="w-full h-full relative group/bar flex items-end">
                    <div className="absolute bottom-0 w-full h-full bg-blue-900/20 rounded-t-sm" />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                      className="absolute bottom-0 w-full rounded-t-md overflow-hidden group-hover/bar:brightness-125 transition-all"
                      style={{ background: `linear-gradient(to top, rgba(37,99,235,0.3), rgba(59,130,246,0.7), rgba(96,165,250,1))` }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-300 shadow-[0_0_12px_rgba(96,165,250,1)]" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
