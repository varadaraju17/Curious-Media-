"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero({ dict, locale }: { dict: any; locale: Locale }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={container} className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#040D21] pt-28 pb-16">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.10)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <motion.div style={{ y, opacity }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-600/30 via-blue-800/15 to-transparent blur-[160px] rounded-full pointer-events-none"
      />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 -left-32 w-[450px] h-[450px] bg-blue-700/12 blur-[160px] rounded-full pointer-events-none animate-float" />
      <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 md:px-10 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-center justify-between">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[54%] text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(37,99,235,0.25)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,1)]" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-200">India&apos;s #1 Creator Monetisation Platform</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[13vw] sm:text-7xl md:text-8xl lg:text-[60px] xl:text-[76px] font-black font-heading tracking-tighter mb-6 leading-[0.88] w-full">
              <span className="text-white drop-shadow-2xl">DON&apos;T JUST<br/>CREATE.</span>
              <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 drop-shadow-[0_0_40px_rgba(96,165,250,0.5)]">
                MONETIZE WITH US.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/85 font-semibold mb-4 tracking-tight w-full">
              Turn your content into a scalable income.
            </p>
            <p className="text-base sm:text-lg text-white/40 mb-10 leading-relaxed max-w-xl font-medium w-full mx-auto lg:mx-0">
              Curious Media helps creators move beyond brand deals to earn consistently—across every platform.
            </p>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              id="hero-cta-primary"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-white font-black text-base md:text-lg tracking-wide overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.60)] hover:shadow-[0_0_65px_rgba(59,130,246,0.80)] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* ── RIGHT (VIDEO) ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full lg:w-[46%] flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[600px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3rem] relative overflow-hidden group border-2 border-blue-400/20 shadow-[0_30px_100px_rgba(4,13,33,0.9),0_0_80px_rgba(37,99,235,0.15)] hover:border-blue-400/50 hover:-translate-y-3 hover:shadow-[0_40px_120px_rgba(4,13,33,0.9),0_0_100px_rgba(37,99,235,0.30)] transition-all duration-700">
              
              {/* Playing Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-1000"
              >
                <source src="https://cdn.pixabay.com/video/2020/07/22/45314-442938804_large.mp4" type="video/mp4" />
              </video>

              {/* Edge Gradients / Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040D21] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-[3rem] pointer-events-none" />

              {/* Live Status Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                <span className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Live Stream</span>
              </div>

              {/* Overlay Text inside video container */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 shadow-xl">
                  <span className="text-white font-black uppercase tracking-[0.2em] text-[9px]">Global Network</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-xl">
                  Connecting Brands <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">With Audiences.</span>
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#040D21] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
