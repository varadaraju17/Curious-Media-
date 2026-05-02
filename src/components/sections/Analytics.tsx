"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, BarChart3, Globe2 } from "lucide-react";

export function Analytics({ dict }: { dict: any }) {
  const bars = [40, 65, 45, 80, 55, 90, 100];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const stats = [
    { icon: <Globe2 className="w-4 h-4" />, label: "Global Reach", value: "4.2B+", sub: "Total audience" },
    { icon: <Activity className="w-4 h-4" />, label: "Avg. ROI", value: "14.5×", sub: "Per campaign" },
  ];

  const kpis = [
    { label: "Campaigns Delivered", value: "500+", color: "text-blue-600" },
    { label: "Brand Partners", value: "29+", color: "text-indigo-600" },
    { label: "Creator Network", value: "1000+", color: "text-sky-600" },
    { label: "Cities Covered", value: "15+", color: "text-violet-600" },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-5"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">Data-Driven Results</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8]"
          >
            {dict.home?.analytics?.title || "Proven"}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-blue-800/60 font-medium max-w-xl mx-auto"
          >
            {dict.home?.analytics?.subtitle || "We translate deep analytics into unprecedented digital growth."}
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT: Stat Cards + KPIs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 flex flex-col gap-5"
          >
            {/* Big stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl border border-blue-100 p-6
                  shadow-[0_4px_24px_rgba(11,46,168,0.06)]
                  hover:shadow-[0_12px_40px_rgba(11,46,168,0.12)] transition-shadow duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B2EA8] mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-800/40 mb-1">{stat.label}</p>
                  <h4 className="text-3xl md:text-4xl font-black font-heading tracking-tighter text-[#0B2EA8] leading-none">{stat.value}</h4>
                  <p className="text-xs text-blue-800/50 mt-1 font-medium">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((kpi, i) => (
                <div key={i} className="bg-[#F8FAFF] rounded-2xl border border-blue-100 p-5">
                  <h5 className={`text-2xl font-black font-heading tracking-tighter ${kpi.color} leading-none mb-1`}>{kpi.value}</h5>
                  <p className="text-[10px] font-bold text-blue-800/50 uppercase tracking-widest leading-tight">{kpi.label}</p>
                </div>
              ))}
            </div>

            {/* Performance badge */}
            <div className="bg-[#0B2EA8] rounded-3xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Performance Index</p>
                <h4 className="text-3xl font-black font-heading tracking-tighter text-white leading-none">
                  +1,240% <span className="text-white/40 text-base font-sans font-normal">Δ Growth</span>
                </h4>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-7/12"
          >
            <div className="h-full bg-white rounded-3xl border border-blue-100 p-8 md:p-10
              shadow-[0_4px_24px_rgba(11,46,168,0.06)]
              hover:shadow-[0_20px_60px_rgba(11,46,168,0.12)] transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-800/40 mb-1">Weekly Campaign Performance</p>
                  <h4 className="text-2xl font-black font-heading tracking-tighter text-[#0B2EA8]">Views Delivered</h4>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-1">+34% this week</span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="h-56 flex items-end justify-between gap-3 mb-4">
                {bars.map((height, index) => (
                  <div key={index} className="w-full h-full relative group/bar flex flex-col items-center justify-end gap-2">
                    {/* Hover value */}
                    <span className="text-[9px] font-bold text-blue-800/50 opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      {Math.round(height * 1.2)}M
                    </span>
                    {/* Background track */}
                    <div className="w-full h-full relative rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 bg-blue-50 rounded-t-lg" />
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                        className="absolute bottom-0 w-full rounded-t-lg overflow-hidden group-hover/bar:brightness-110 transition-all"
                        style={{ background: `linear-gradient(to top, #0B2EA8, #3B82F6, #7DD3FC)` }}
                      >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-sky-300/80 rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between gap-3">
                {days.map((day, i) => (
                  <span key={i} className="w-full text-center text-[9px] font-bold text-blue-800/30 uppercase tracking-widest">{day}</span>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-blue-50 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#0B2EA8] to-sky-400" />
                  <span className="text-[10px] font-bold text-blue-800/50">Delivered Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-100 border border-blue-200" />
                  <span className="text-[10px] font-bold text-blue-800/50">Committed Views</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
