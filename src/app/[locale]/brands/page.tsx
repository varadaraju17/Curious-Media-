"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { TrendingUp, Users, ArrowRight, BarChart3, Globe2, Zap, Rocket, Mail, Sparkles, Target, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Marquee } from "@/components/sections/Marquee";

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 3,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Intl.NumberFormat('en-IN').format(Math.floor(latest))}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

function CollabTabs({ collabs }: { collabs: any[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      {/* Tab Navigation */}
      <div className="w-full lg:w-5/12 flex flex-col gap-2 relative">
        <div className="absolute left-[27px] top-8 bottom-8 w-px bg-slate-200 hidden lg:block" />
        {collabs.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`text-left p-5 rounded-2xl transition-all duration-500 flex items-center gap-6 relative z-10 overflow-hidden group ${
              activeTab === i 
                ? "bg-[#0B2EA8] text-white shadow-[0_20px_40px_rgba(11,46,168,0.2)] scale-[1.02]" 
                : "bg-white text-slate-500 hover:bg-blue-50 border border-slate-100 hover:border-blue-200"
            }`}
          >
            {activeTab === i && (
              <motion.div 
                layoutId="collab-tab-bg" 
                className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] to-blue-600 z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-black relative z-10 transition-colors duration-300 ${
              activeTab === i ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-[#0B2EA8]"
            }`}>
              {i + 1}
            </div>
            <span className={`font-bold text-lg relative z-10 transition-colors duration-300 ${
              activeTab === i ? "text-white" : "text-[#0A1A4E]"
            }`}>
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full lg:w-7/12 flex lg:sticky top-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_80px_rgba(11,46,168,0.08)] border border-blue-50 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-50 to-blue-100 text-[#0B2EA8] rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-blue-200/50 shadow-inner">
                {collabs[activeTab].icon}
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#0A1A4E] mb-4 leading-tight tracking-tighter">
                {collabs[activeTab].title}
              </h3>
              <p className="text-[#0B2EA8] font-black text-xs uppercase tracking-[0.2em] mb-6">
                {collabs[activeTab].subtitle}
              </p>
              <p className="text-slate-500 text-xl leading-relaxed font-medium mb-10">
                {collabs[activeTab].desc}
              </p>

              <div className="pt-8 border-t border-slate-100 flex items-center">
                <span className="text-xs font-black uppercase tracking-widest text-[#0B2EA8] bg-blue-50 px-4 py-2 rounded-full">
                  {collabs[activeTab].metric}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function BrandsPage() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const STATS = [
    { label: "Viewership Delivered in a Year", num: 10, suffix: "+", unit: "Billion", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Distribution Network PAN India", num: 900, suffix: "+", unit: "Million", icon: <Globe2 className="w-6 h-6" /> },
    { label: "Influencers Network Pan India", num: 15000, suffix: "+", unit: "", icon: <Users className="w-6 h-6" /> },
  ];

  const COLLABS = [
    {
      id: 1,
      title: "Meme Marketing",
      subtitle: "Memes that live rent-free in minds.",
      desc: "We create memes that travel fast, hit hard, and stay in your audience’s mind—scaled across millions through our distribution engine.",
      metric: "Distribution Network – 900M+",
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      id: 2,
      title: "Influencer Marketing",
      subtitle: "Not just creators. Growth partners.",
      desc: "We match your brand with creators who don’t just talk—they influence, engage, and convert at scale.",
      metric: "Influencer Network – 15,000+ Pan India",
      icon: <Users className="w-10 h-10" />
    },
    {
      id: 3,
      title: "Content Marketing",
      subtitle: "Seamless storytelling that stays with your audience.",
      desc: "We craft unique, platform-native content that blends your brand naturally into what people love to watch.",
      metric: "Creator Reach – 100M+ Subscribers",
      icon: <Target className="w-10 h-10" />
    },
  ];

  return (
    <main className="flex-1 w-full bg-white min-h-screen relative overflow-x-hidden pt-24">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Abstract Grid & Glow */}
          <motion.div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 20%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 20%, transparent 100%)"
            }}
          />
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-300/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-300/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200 mb-12 shadow-[0_8px_16px_rgba(11,46,168,0.06)]"
            >
              <Zap className="w-5 h-5 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Brands & Agencies</span>
            </motion.div>

            <h1 className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-12 w-full">
              {["BE SEEN.", "BE HEARD.", "BE REMEMBERED."].map((text, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-black font-heading tracking-tighter leading-[0.85] uppercase drop-shadow-sm ${
                    i === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 pb-4" : "text-[#0A1A4E]"
                  }`}
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto mb-16 font-medium leading-relaxed"
            >
              We win when you win. Partner with India&apos;s largest distribution network to turn every campaign into a cultural phenomenon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-4 px-14 py-7 text-white font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all hover:scale-[1.03] shadow-[0_15px_30px_rgba(11,46,168,0.30)] hover:shadow-[0_20px_40px_rgba(11,46,168,0.45)] bg-[#0B2EA8]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] hover:bg-right-center transition-all duration-700 group-hover:bg-[position:100%]" />
                <span className="relative z-10">Get in touch</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BRAND MARQUEE ─── */}
      <section className="bg-white pb-32">
        <Marquee type="brands" dict={{ marquee: { brands_badge: "Trusted By", brands_title_1: "Leading", brands_title_2: "Companies" } }} />
      </section>

      {/* ─── PREMIUM STATS SECTION ─── */}
      <section className="py-40 bg-slate-50/80 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-[#0A1A4E] leading-none uppercase">
              The Scale of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                className="relative bg-white p-12 lg:p-16 rounded-[3rem] group hover:-translate-y-4 transition-all duration-500 text-center shadow-[0_20px_60px_rgba(11,46,168,0.06)] hover:shadow-[0_40px_80px_rgba(11,46,168,0.12)] border border-slate-100/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/50 text-[#0B2EA8] flex items-center justify-center mx-auto mb-10 group-hover:from-[#0A1A4E] group-hover:to-[#0B2EA8] group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110 relative z-10">
                   {stat.icon}
                </div>
                <div className="flex flex-col gap-4 relative z-10">
                   <div className="flex flex-col items-center justify-center gap-1">
                     <p className="text-5xl md:text-6xl lg:text-[80px] font-black font-heading text-[#0A1A4E] tracking-tighter leading-none group-hover:text-[#0B2EA8] transition-colors flex items-center justify-center flex-wrap gap-2">
                       <span><AnimatedNumber value={stat.num} suffix={stat.suffix} /></span>
                       {stat.unit && <span className="text-3xl md:text-4xl lg:text-5xl text-cyan-500">{stat.unit}</span>}
                     </p>
                   </div>
                   <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-[#0B2EA8] mt-4 leading-relaxed">
                     {stat.label}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPLIT EDITORIAL VALUE PROP ─── */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-50/60 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Massive Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-100 mb-10 shadow-sm"
              >
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-black tracking-[0.2em] uppercase text-emerald-600">Organic Growth First</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-[110px] font-black font-heading text-[#0A1A4E] leading-[0.9] tracking-tighter drop-shadow-sm"
              >
                REAL <br/> RESULTS. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500 pb-2">ZERO FLUFF.</span>
              </motion.h2>
            </div>

            {/* Right Side: Editorial Text */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-50/80 to-white border border-blue-100 shadow-[0_20px_60px_rgba(11,46,168,0.06)] backdrop-blur-md"
              >
                <p className="text-3xl md:text-4xl font-black text-[#0A1A4E] leading-tight mb-8">
                  No fancy decks or over-commitments. Just real impact delivered through Asia&apos;s largest network.
                </p>
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                  We integrate product messaging so smoothly it feels like organic content, ensuring your brand stays in the audience&apos;s mind forever.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pl-4"
              >
                <Link 
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-4 text-[#0B2EA8] font-black uppercase tracking-[0.2em] text-base hover:gap-6 transition-all"
                >
                  <span className="pb-2 border-b-2 border-[#0B2EA8]">Partner With Us</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── STICKY EDITORIAL COLLABORATION ─── */}
      <section className="py-24 md:py-40 bg-slate-50/80 border-t border-slate-100 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 mb-6 shadow-sm">
              <ZapIcon className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">Methodology</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black font-heading tracking-tighter mb-6 text-[#0A1A4E] leading-none uppercase">
              WAYS TO COLLAB.
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-8">
              Three powerful, integrated methods designed to scale your brand reach and drive conversions.
            </p>
          </div>

          <CollabTabs collabs={COLLABS} />
        </div>
      </section>

      {/* ─── FINAL PREMIUM CTA ─── */}
      <section className="py-40 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-12 md:p-16 lg:p-24 rounded-[4rem] bg-[#0A1A4E] text-white relative overflow-hidden shadow-[0_30px_100px_rgba(10,26,78,0.4)] border border-blue-900/50"
          >
            {/* Background Orbs & Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48 mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none -ml-48 -mb-48"></div>
            
            {/* Floating Graphic Accents */}
            <div className="absolute top-16 left-16 animate-pulse duration-1000">
              <div className="w-4 h-4 rounded-full bg-blue-400/80 shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
            </div>
            <div className="absolute bottom-24 right-24">
              <TrendingUp className="w-40 h-40 text-white/[0.03] rotate-12" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Text Side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs font-black tracking-[0.2em] uppercase text-blue-50">Start Your Campaign</span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-[80px] font-black font-heading mb-6 md:mb-8 tracking-tighter leading-[0.9]">
                  Ready to scale <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">your brand?</span>
                </h3>
                <p className="text-blue-100/80 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Join industry leaders and turn every campaign into a cultural phenomenon today.
                </p>
              </div>

              {/* Action Buttons Side */}
              <div className="flex flex-col gap-4 md:gap-6 w-full max-w-lg mx-auto lg:mr-0">
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative flex items-center justify-between w-full p-6 md:p-8 rounded-[2rem] bg-white text-[#0A1A4E] hover:bg-blue-50 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-2xl md:text-3xl uppercase tracking-tight mb-1">Partner With Us</span>
                    <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Start a conversation</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] group-hover:text-white transition-colors duration-500">
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="mailto:info@curiousmedia.in"
                  className="group flex items-center gap-4 md:gap-6 w-full p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-white/20"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs md:text-sm font-bold text-blue-200/70 uppercase tracking-widest mb-1">Email Us Directly</span>
                    <span className="font-bold text-lg md:text-2xl text-white break-all">info@curiousmedia.in</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

