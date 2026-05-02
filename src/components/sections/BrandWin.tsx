"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Eye, Heart, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const isFloat = target.includes(".");
    const duration = 1800;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay(isFloat ? current.toFixed(1) : Math.floor(current).toString());
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function BrandWin({ dict }: { dict: any }) {
  const commitments = [
    {
      value: dict.brand_win.reach.title,
      icon: <Eye className="w-6 h-6" />,
      desc: dict.brand_win.reach.desc,
      gradient: "from-blue-600 to-cyan-400",
      glowBg: "rgba(11,46,168,0.18)",
      iconGradient: "from-blue-500 to-cyan-400",
      borderColor: "border-blue-500/30",
      stat: "4.2B+",
      statRaw: "4.2",
      statSuffix: "B+",
      statLabel: dict.brand_win.reach.stat_label,
      num: "01",
    },
    {
      value: dict.brand_win.engagement.title,
      icon: <Heart className="w-6 h-6" />,
      desc: dict.brand_win.engagement.desc,
      gradient: "from-indigo-500 to-violet-400",
      glowBg: "rgba(99,102,241,0.18)",
      iconGradient: "from-indigo-500 to-violet-400",
      borderColor: "border-indigo-500/30",
      stat: ">5%",
      statRaw: "5",
      statSuffix: "%+",
      statLabel: dict.brand_win.engagement.stat_label,
      num: "02",
    },
    {
      value: dict.brand_win.viewership.title,
      icon: <TrendingUp className="w-6 h-6" />,
      desc: dict.brand_win.viewership.desc,
      gradient: "from-violet-600 to-fuchsia-400",
      glowBg: "rgba(139,92,246,0.18)",
      iconGradient: "from-violet-500 to-fuchsia-400",
      borderColor: "border-violet-500/30",
      stat: "110M+",
      statRaw: "110",
      statSuffix: "M+",
      statLabel: dict.brand_win.viewership.stat_label,
      num: "03",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(11,46,168,0.06),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1300px] relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.brand_win.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-black font-heading tracking-tighter leading-[0.92] text-[#0B2EA8] mb-5"
          >
            {dict.brand_win.title_1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400">
              {dict.brand_win.title_2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-base md:text-lg text-blue-800/60 font-medium max-w-lg mx-auto leading-relaxed"
          >
            {dict.brand_win.description}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl border ${item.borderColor} overflow-hidden
                bg-white
                shadow-[0_4px_24px_rgba(11,46,168,0.07)]
                hover:shadow-[0_20px_60px_rgba(11,46,168,0.14)]
                hover:-translate-y-2
                transition-all duration-500 cursor-default`}
              style={{ boxShadow: `0 8px 40px ${item.glowBg}` }}
            >
              {/* Top accent bar */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${item.gradient}`} />

              <div className="p-7 md:p-8">

                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-black tracking-[0.3em] text-blue-800/20 uppercase">{item.num}</span>
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.iconGradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Commit label */}
                <p className="text-[9px] font-black uppercase tracking-[0.35em] text-blue-800/30 mb-2">
                  {dict.brand_win.commit}
                </p>

                {/* Title */}
                <h3 className={`text-3xl md:text-4xl font-black font-heading tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                  {item.value}
                </h3>

                {/* Description */}
                <p className="text-sm text-blue-800/55 leading-relaxed mb-7 group-hover:text-blue-800/80 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Stat block */}
                <div className={`rounded-2xl bg-blue-50 border border-blue-100 p-4 flex items-end justify-between`}>
                  <div>
                    <p className={`text-3xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                      <CountUp target={item.statRaw} suffix={item.statSuffix} />
                    </p>
                    <p className="text-[9px] font-bold text-blue-800/40 uppercase tracking-widest mt-1">
                      {item.statLabel}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`}>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Hover inner glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${item.glowBg}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
