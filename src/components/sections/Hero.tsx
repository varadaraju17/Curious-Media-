"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

/* Particles config */
const particles = [
  { x: "12%",  y: "18%", size: 5,  delay: 0,    dur: 7  },
  { x: "80%",  y: "12%", size: 4,  delay: 1.5,  dur: 9  },
  { x: "65%",  y: "55%", size: 6,  delay: 0.8,  dur: 6  },
  { x: "28%",  y: "70%", size: 4,  delay: 2.2,  dur: 8  },
  { x: "90%",  y: "75%", size: 5,  delay: 0.4,  dur: 10 },
  { x: "50%",  y: "30%", size: 3,  delay: 1.8,  dur: 7  },
  { x: "18%",  y: "45%", size: 6,  delay: 3.0,  dur: 9  },
  { x: "72%",  y: "88%", size: 4,  delay: 0.6,  dur: 8  },
  { x: "38%",  y: "92%", size: 3,  delay: 2.6,  dur: 6  },
  { x: "55%",  y: "8%",  size: 5,  delay: 1.2,  dur: 11 },
  { x: "6%",   y: "80%", size: 4,  delay: 0.2,  dur: 8  },
  { x: "93%",  y: "38%", size: 5,  delay: 3.5,  dur: 7  },
];


export function Hero({ dict, locale }: { dict: any; locale: Locale }) {
  const floatingCards = [
    {
      icon: <TrendingUp className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
      label: dict.hero.cards.campaign,
      value: `+110M ${dict.hero.cards.views}`,
      valueColor: "text-[#0B2EA8]",
      delay: 0.55,
      pos: "left-0 sm:-left-6 top-8 sm:top-14",
      floatClass: "float-card",
    },
    {
      icon: <Zap className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      label: dict.hero.cards.roi,
      value: "14.5×",
      valueColor: "text-violet-600",
      delay: 0.65,
      pos: "right-0 sm:-right-4 top-4 sm:top-8",
      floatClass: "float-card-slow",
    },
    {
      icon: <Users className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-[#0B2EA8] to-blue-500",
      label: dict.hero.cards.network,
      value: `1000+ ${dict.hero.cards.active}`,
      valueColor: "text-[#0B2EA8]",
      delay: 0.75,
      pos: "left-0 sm:-left-6 bottom-8 sm:bottom-14",
      floatClass: "float-card",
    },
  ];
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ══════════════════════════════════
          MOTION GRAPHICS BACKGROUND
      ══════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
        
        {/* 1. Dynamic Panning Grid */}
        <motion.div 
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          style={{
            backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* 2. Abstract Flowing Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B2EA8" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M-200,600 C200,400 400,800 800,500 C1200,200 1400,400 1600,400"
            fill="none"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.path
            d="M-200,400 C200,600 600,200 1000,500 C1400,800 1500,600 1600,600"
            fill="none"
            stroke="url(#lineGrad2)"
            strokeWidth="3"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 1 }}
          />
        </svg>

        {/* 3. Floating Geometric Elements (Pluses and Circles) */}
        {[
          { top: '15%', left: '10%', size: 24, type: 'plus', color: 'text-blue-400/40', delay: 0 },
          { top: '25%', left: '85%', size: 32, type: 'circle', color: 'border-cyan-400/30', delay: 1 },
          { top: '65%', left: '15%', size: 16, type: 'circle', color: 'border-violet-400/40', delay: 2 },
          { top: '75%', left: '80%', size: 28, type: 'plus', color: 'text-blue-500/30', delay: 0.5 },
          { top: '40%', left: '50%', size: 20, type: 'plus', color: 'text-cyan-500/30', delay: 1.5 },
        ].map((el, i) => (
          <motion.div
            key={i}
            className={`absolute ${el.type === 'circle' ? `rounded-full border-[2px] ${el.color}` : el.color}`}
            style={{ 
              top: el.top, 
              left: el.left, 
              width: el.type === 'circle' ? el.size : 'auto', 
              height: el.type === 'circle' ? el.size : 'auto',
              fontSize: el.type === 'plus' ? el.size : 'inherit',
              fontWeight: 'bold',
              lineHeight: 1
            }}
            animate={{
              y: [0, -30, 0],
              rotate: el.type === 'plus' ? [0, 90, 180, 270, 360] : 0,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: el.delay
            }}
          >
            {el.type === 'plus' && '+'}
          </motion.div>
        ))}

        {/* 4. Cinematic Glowing Orbs */}
        <motion.div
          className="absolute rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.15] bg-[#3B82F6]"
          style={{ width: '45vw', height: '45vw', maxWidth: '600px', maxHeight: '600px', top: '-10%', left: '-10%' }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.12] bg-[#06B6D4]"
          style={{ width: '35vw', height: '35vw', maxWidth: '500px', maxHeight: '500px', top: '20%', right: '-5%' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.10] bg-[#8B5CF6]"
          style={{ width: '40vw', height: '40vw', maxWidth: '550px', maxHeight: '550px', bottom: '-20%', left: '20%' }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* 5. Minimalist Concentric Radar Rings */}
        <div className="absolute top-[20%] right-[20%] flex items-center justify-center opacity-40 pointer-events-none">
          <motion.div className="absolute border border-blue-400 rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div className="absolute border border-blue-400 rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.33 }}
          />
          <motion.div className="absolute border border-blue-400 rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2.66 }}
          />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full shadow-[0_0_12px_#3B82F6] animate-pulse" />
        </div>

      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center
          pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6"
        >

          {/* ═══ LEFT - Copy ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="inline-flex items-center gap-2 self-start mb-5 sm:mb-6
                rounded-full px-4 py-1.5
                bg-white border border-blue-200
                shadow-[0_2px_16px_rgba(11,46,168,0.10)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.20em] uppercase text-[#0B2EA8]">
                {dict.hero.badge}
              </span>
            </motion.div>

            {/* ── Headline ── */}
            <h1 className="font-black font-heading leading-[0.9] tracking-[-0.03em]
              text-[36px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[52px]"
            >
              {/* Line 1 */}
              <motion.span
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="block text-[#0A1A4E]"
              >
                {dict.hero.headline_line1}
              </motion.span>

              {/* Line 2 - with shimmer underline */}
              <motion.span
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                className="block relative text-[#0B2EA8] w-fit"
              >
                {dict.hero.headline_line2}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16,1,0.3,1] }}
                  className="absolute -bottom-1 left-0 h-[4px] sm:h-[5px] w-full origin-left rounded-full
                    bg-gradient-to-r from-[#0B2EA8] via-cyan-400 to-sky-300"
                />
              </motion.span>

              {/* Lines 3+4 - animated shimmer */}
              <motion.span
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.30, duration: 0.6 }}
                className="block mt-2"
              >
                <span className="text-shimmer">{dict.hero.headline_line3}</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38, duration: 0.6 }}
                className="block -mt-1 sm:-mt-2"
              >
                <span className="text-shimmer">{dict.hero.headline_line4}</span>
              </motion.span>
            </h1>

            {/* ── Sublines ── */}
            <div className="mt-4 sm:mt-6 max-w-2xl flex flex-col gap-1.5">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl font-black text-[#0B2EA8] leading-tight tracking-tight uppercase sm:whitespace-nowrap"
              >
                {dict.hero.subheading}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.50, duration: 0.6 }}
                className="text-sm sm:text-base md:text-[17px] text-slate-500 font-medium leading-relaxed"
              >
                {dict.hero.description}
              </motion.p>
            </div>

            {/* ── Features pills ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.6 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {dict.hero.features.map((feat: string) => (
                <div key={feat} className="inline-flex items-center gap-1.5 px-3.5 py-1.5
                  rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-[#0B2EA8]"
                >
                  <CheckCircle className="w-3 h-3 text-blue-400" />
                  {feat}
                </div>
              ))}
            </motion.div>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="mt-9 sm:mt-10 flex items-center gap-4 flex-wrap"
            >
              <Link
                href={`/${locale}/contact`}
                id="hero-cta-primary"
                className="group relative inline-flex items-center gap-2.5 rounded-full
                  px-7 sm:px-9 py-3.5 sm:py-4
                  text-white font-black text-sm sm:text-base tracking-wide overflow-hidden
                  shadow-[0_8px_28px_rgba(11,46,168,0.30)]
                  hover:shadow-[0_16px_48px_rgba(11,46,168,0.45)]
                  hover:scale-[1.03] transition-all duration-300"
              >
                {/* Animated gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8]
                  bg-[size:200%] hover:bg-right-center transition-all duration-700
                  group-hover:bg-[position:100%]" />
                <span className="relative z-10">{dict.hero.cta_primary}</span>
                <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

            </motion.div>

          </motion.div>

          {/* ═══ RIGHT - Phone ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative py-14 sm:py-16"
          >
            {/* Glow layers behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-full
                bg-gradient-to-br from-blue-200/50 via-cyan-100/30 to-violet-200/30 blur-[70px]" />
            </div>

            {/* Floating metric cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 1 ? 16 : -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: card.delay, duration: 0.65 }}
                className={`absolute ${card.pos} z-20 ${card.floatClass}`}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100
                  shadow-[0_8px_32px_rgba(11,46,168,0.12),0_2px_8px_rgba(0,0,0,0.06)]
                  px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 min-w-[130px] sm:min-w-[155px]"
                >
                  <div className={`w-8 h-8 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-md`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">{card.label}</p>
                    <p className={`text-xs sm:text-sm font-black ${card.valueColor}`}>{card.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Phone */}
            <div className="relative z-10 w-[185px] sm:w-[225px] md:w-[255px] lg:w-[245px] xl:w-[270px]">
              {/* Halo ring */}
              <div className="absolute -inset-4 rounded-[3.5rem]
                bg-gradient-to-br from-blue-300/30 via-cyan-200/20 to-violet-300/20 blur-[20px]" />
              {/* Device */}
              <div className="relative rounded-[2.6rem] border-[9px] sm:border-[10px] border-[#1a1a2e] bg-[#1a1a2e]
                shadow-[0_40px_90px_rgba(11,46,168,0.28),0_0_0_1px_rgba(0,0,0,0.15)] p-[3px]"
              >
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2
                  w-[30%] h-[20px] bg-[#1a1a2e] rounded-full z-30
                  flex items-center justify-center gap-1"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2a2a3e]" />
                </div>
                {/* Screen */}
                <div className="aspect-[9/19.5] rounded-[2.2rem] overflow-hidden relative bg-[#030918]">
                  <img
                    src="/images/hero-mobile-ui.webp"
                    alt="Curious Media App Interface"
                    className="absolute inset-0 w-full h-full object-contain object-top"
                    width="270"
                    height="585"
                    fetchPriority="high"
                  />
                  {/* Screen gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030918]/90 via-transparent to-transparent" />

                  {/* Floating screen widget */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="absolute bottom-4 left-3 right-3
                      rounded-2xl overflow-hidden
                      bg-white/10 backdrop-blur-xl border border-white/20
                      px-3 sm:px-4 py-3"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-cyan-300 font-black">{dict.hero.widget.badge}</p>
                    </div>
                    <h3 className="text-sm sm:text-[15px] font-black text-white leading-tight">
                      {dict.hero.widget.title}
                    </h3>
                    <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 opacity-60" />
                  </motion.div>
                </div>
              </div>
              {/* Ground shadow */}
              <div className="mt-2 mx-10 h-5 bg-blue-900/10 blur-xl rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Wave Divider ── */}
      <div className="w-full overflow-hidden leading-none -mt-2">
        <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-14">
          <path d="M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z" fill="#F8FAFF"/>
        </svg>
      </div>
    </section>
  );
}
