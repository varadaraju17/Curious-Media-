"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap } from "lucide-react";

export function BrandWin({ dict }: { dict: any }) {
  const commitments = [
    {
      label: dict.brand_win.commit,
      value: dict.brand_win.reach.title,
      icon: <Zap className="w-5 h-5" />,
      desc: dict.brand_win.reach.desc,
      gradient: "from-blue-600 to-sky-400",
      accentBg: "bg-blue-50",
      iconBg: "bg-blue-600",
      stat: "4.2B+",
      statLabel: dict.brand_win.reach.stat_label,
    },
    {
      label: dict.brand_win.commit,
      value: dict.brand_win.engagement.title,
      icon: <Award className="w-5 h-5" />,
      desc: dict.brand_win.engagement.desc,
      gradient: "from-indigo-600 to-blue-400",
      accentBg: "bg-indigo-50",
      iconBg: "bg-indigo-600",
      stat: ">5%",
      statLabel: dict.brand_win.engagement.stat_label,
    },
    {
      label: dict.brand_win.commit,
      value: dict.brand_win.viewership.title,
      icon: <CheckCircle2 className="w-5 h-5" />,
      desc: dict.brand_win.viewership.desc,
      gradient: "from-violet-600 to-indigo-400",
      accentBg: "bg-violet-50",
      iconBg: "bg-violet-600",
      stat: "110M+",
      statLabel: dict.brand_win.viewership.stat_label,
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(11,46,168,0.05),transparent)] pointer-events-none" />

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
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.brand_win.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-5xl md:text-7xl lg:text-[84px] font-black font-heading tracking-tighter leading-[0.9] text-[#0B2EA8]"
          >
            {dict.brand_win.title_1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">{dict.brand_win.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-blue-800/60 font-medium max-w-xl mx-auto leading-relaxed"
          >
            {dict.brand_win.description}
          </motion.p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative rounded-3xl bg-white border border-blue-100 p-8 overflow-hidden
                shadow-[0_4px_24px_rgba(11,46,168,0.06)]
                hover:shadow-[0_20px_60px_rgba(11,46,168,0.14)]
                hover:-translate-y-2 transition-all duration-400 cursor-default"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center text-white mb-7 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-800/40 mb-2">
                {item.label}
              </p>

              {/* Value */}
              <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-[#0B2EA8] mb-4 leading-none">
                {item.value}
              </h3>

              {/* Description */}
              <p className="text-sm text-blue-800/60 leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* Stat */}
              <div className={`rounded-2xl ${item.accentBg} p-4 border border-blue-100`}>
                <p className={`text-2xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                  {item.stat}
                </p>
                <p className="text-[10px] font-bold text-blue-800/50 uppercase tracking-widest mt-0.5">
                  {item.statLabel}
                </p>
              </div>

              {/* Hover background glow */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 blur-[40px] rounded-full transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
