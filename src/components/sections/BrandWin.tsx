"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Eye, Heart, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;

      const isFloat = target.includes(".");
      setDisplay(isFloat ? current.toFixed(1) : Math.floor(current).toString());

      if (frame >= totalFrames) {
        clearInterval(timer);
        setDisplay(target);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function BrandWin({ dict }: { dict: any }) {
  const commitments = [
    {
      value: "Reach.",
      icon: <Eye className="w-6 h-6" />,
      desc: "Guaranteed viewership delivered to your exact target audience, every single time.",
      gradient: "from-white via-blue-100 to-cyan-400",
      iconBg: "bg-blue-600",
      stat: "4.2B+",
      statRaw: "4.2",
      statSuffix: "B+",
      statLabel: "Total Views Delivered",
      num: "01",
    },
    {
      value: "Engagement.",
      icon: <Heart className="w-6 h-6" />,
      desc: "Real, authentic interactions that build brand love and community — not just numbers.",
      gradient: "from-white via-blue-100 to-cyan-400",
      iconBg: "bg-blue-500",
      stat: "5%+",
      statRaw: "5",
      statSuffix: "%+",
      statLabel: "Avg. Engagement Rate",
      num: "02",
    },
    {
      value: "Viewership.",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "We over-deliver — always. Our track record speaks in millions of verified views.",
      gradient: "from-white via-blue-100 to-cyan-400",
      iconBg: "bg-blue-400",
      stat: "110M+",
      statRaw: "110",
      statSuffix: "M+",
      statLabel: "Views on Best Campaign",
      num: "03",
    },
  ];

  return (
    <section className="min-h-screen py-12 md:py-16 bg-[#0A1A4E] relative overflow-hidden flex flex-col justify-center">
      {/* Premium Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none -ml-48 -mb-48" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1300px] relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400">Performance Guarantee</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-5xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.9] text-white mb-4 uppercase"
          >
            How Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-400">
              Win With Us.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg md:text-xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We don&apos;t just promise results — we contractually commit to them. <br className="hidden md:block" />
            Every campaign is backed by our performance guarantee.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2.5rem] border border-white/20 overflow-hidden bg-white/10 backdrop-blur-md
                hover:bg-white/[0.15] hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-default p-6 md:p-8 shadow-2xl"
            >
              {/* Highlight line top */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-white/10">{item.num}</span>
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
              </div>

              {/* Commit label */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-400/80">
                  WE Commit
                </p>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-black font-heading tracking-tighter leading-none mb-4 text-white uppercase">
                {item.value}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 min-h-[3rem]">
                {item.desc}
              </p>

              {/* Stat block */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-3xl md:text-4xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-400">
                  <CountUp target={item.statRaw} suffix={item.statSuffix} />
                </p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-2">
                  {item.statLabel}
                </p>
              </div>

              {/* Glowing Corner */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
