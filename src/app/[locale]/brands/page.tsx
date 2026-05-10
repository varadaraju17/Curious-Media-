"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ArrowRight, BarChart3, Globe2, ShieldCheck, Zap, Rocket, Mail } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Marquee } from "@/components/sections/Marquee";

export default function BrandsPage() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const STATS = [
    { label: "Viewership Delivered in a Year", value: "10 Billion+", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Distribution Network PAN India", value: "900 Million+", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Influencers Network Pan India", value: "15,000+", icon: <Users className="w-5 h-5" /> },
  ];

  const COLLABS = [
    {
      id: 1,
      title: "Meme Marketing",
      subtitle: "Memes that live rent-free in minds.",
      desc: "We create memes that travel fast, hit hard, and stay in your audience’s mind—scaled across millions through our distribution engine.",
      metric: "Distribution Network – 900M+",
      color: "from-blue-600 to-indigo-600",
      bgBase: "bg-blue-50/50 text-[#0B2EA8]",
      hoverBase: "group-hover:bg-[#0B2EA8] group-hover:text-white"
    },
    {
      id: 2,
      title: "Influencer Marketing",
      subtitle: "Not just creators. Growth partners.",
      desc: "We match your brand with creators who don’t just talk—they influence, engage, and convert at scale.",
      metric: "Influencer Network – 15,000+ Pan India",
      color: "from-indigo-600 to-purple-600",
      bgBase: "bg-indigo-50/50 text-indigo-600",
      hoverBase: "group-hover:bg-indigo-600 group-hover:text-white"
    },
    {
      id: 3,
      title: "Content Marketing",
      subtitle: "Seamless storytelling that stays with your audience.",
      desc: "We craft unique, platform-native content that blends your brand naturally into what people love to watch.",
      metric: "Creator Reach – 100M+ Subscribers",
      color: "from-sky-600 to-blue-600",
      bgBase: "bg-sky-50/50 text-sky-600",
      hoverBase: "group-hover:bg-sky-600 group-hover:text-white"
    },
  ];

  return (
    <main className="flex-1 w-full bg-white min-h-screen relative overflow-hidden">
      
      {/* ─── HERO SECTION (Premium Light Mode) ─── */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
          <motion.div 
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-30"
            style={{
              backgroundImage: "linear-gradient(rgba(11,46,168,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full mix-blend-multiply animate-pulse" />
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-sky-100/30 blur-[140px] rounded-full mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-[#0B2EA8]" />
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Brands & Agencies</span>
            </motion.div>

            <h1 className="flex flex-col gap-2 md:gap-4 mb-10">
              {["BE SEEN.", "BE HEARD.", "BE REMEMBERED."].map((text, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-6xl md:text-8xl lg:text-[110px] font-black font-heading tracking-tighter leading-none ${
                    i === 2 ? "text-shimmer" : "text-[#0A1A4E]"
                  }`}
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
            >
              We win when you win. Partner with India&apos;s largest distribution network to turn every campaign into a cultural phenomenon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#0A1A4E] text-white font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_12px_40px_rgba(10,26,78,0.25)]"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BRAND MARQUEE ─── */}
      <section className="bg-white pb-24 border-b border-slate-100">
        <Marquee type="brands" dict={{ marquee: { brands_badge: "Trusted By", brands_title_1: "Leading", brands_title_2: "Companies" } }} />
      </section>

      {/* ─── PREMIUM STATS SECTION ─── */}
      <section className="py-32 bg-slate-50/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel bg-white p-10 md:p-14 group hover:-translate-y-4 transition-all duration-500 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(11,46,168,0.15)] border-white/50"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/50 text-[#0B2EA8] flex items-center justify-center mx-auto mb-8 group-hover:from-[#0A1A4E] group-hover:to-[#0B2EA8] group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110">
                   {stat.icon}
                </div>
                <div className="flex flex-col gap-4">
                   <p className="text-5xl lg:text-7xl font-black font-heading text-[#0A1A4E] tracking-tighter leading-none group-hover:text-[#0B2EA8] transition-colors">
                     {stat.value}
                   </p>
                   <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 group-hover:text-[#0B2EA8]">
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Massive Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 shadow-sm"
              >
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-black tracking-[0.2em] uppercase text-emerald-600">Organic Growth First</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-6xl md:text-8xl lg:text-[100px] font-black font-heading text-[#0A1A4E] leading-[0.9] tracking-tighter"
              >
                REAL <br/> RESULTS. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">ZERO FLUFF.</span>
              </motion.h2>
            </div>

            {/* Right Side: Editorial Text */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 rounded-[2.5rem] bg-blue-50/30 border border-blue-100/50 backdrop-blur-md"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#0A1A4E] leading-tight mb-4">
                  No fancy decks or over-committement. Just the real impact delivered through Asia&apos;s largest network.
                </p>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  We integrate product messaging so smoothly it feels like organic content, ensuring your brand stays in the audience&apos;s mind forever.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pl-4"
              >
                <Link 
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-4 text-[#0B2EA8] font-black uppercase tracking-widest text-sm hover:gap-6 transition-all"
                >
                  <span className="pb-1 border-b-2 border-[#0B2EA8]">Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── STICKY EDITORIAL COLLABORATION ─── */}
      <section className="py-32 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* Sticky Left Sidebar */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                  <Zap className="w-4 h-4 text-[#0B2EA8]" />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">Methodology</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter mb-6 text-[#0A1A4E] leading-none uppercase">
                  WAYS TO <br/> COLLABORATE.
                </h2>
                <p className="text-slate-500 text-xl font-medium max-w-sm mb-10">
                  Three powerful, integrated methods designed to scale your brand reach and drive conversions.
                </p>
              </div>
            </div>

            {/* Scrolling Right Content */}
            <div className="lg:col-span-7 space-y-8">
              {COLLABS.map((collab) => (
                <motion.div
                  key={collab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel p-10 md:p-12 group hover:border-blue-200 transition-all duration-500 bg-white"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className={`w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center transition-colors duration-500 ${collab.bgBase} ${collab.hoverBase}`}>
                       <Rocket className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-[#0A1A4E] mb-3">{collab.title}</h3>
                      <p className="text-[#0B2EA8] font-black text-[11px] uppercase tracking-[0.2em] mb-6">{collab.subtitle}</p>
                      
                      <p className="text-slate-500 font-medium leading-relaxed mb-8 text-lg">
                        {collab.desc}
                      </p>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                         <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-[#0B2EA8] transition-colors">
                           {collab.metric}
                         </span>
                         <Link 
                           href={`/${locale}/contact`}
                           className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#0B2EA8] group-hover:text-white transition-all shadow-sm"
                         >
                           <ArrowRight className="w-5 h-5" />
                         </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── FINAL PREMIUM CTA ─── */}
      <section className="py-32 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 lg:p-24 rounded-[3rem] bg-[#0A1A4E] text-white relative overflow-hidden shadow-[0_20px_80px_rgba(10,26,78,0.3)] border border-blue-900/50"
          >
            {/* Background Orbs & Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48 mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48"></div>
            
            {/* Floating Graphic Accents */}
            <div className="absolute top-12 left-12 animate-pulse">
              <div className="w-3 h-3 rounded-full bg-blue-400/50"></div>
            </div>
            <div className="absolute bottom-24 right-24">
              <TrendingUp className="w-32 h-32 text-white/5 rotate-12" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Text Side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-100">Start Your Campaign</span>
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-6 tracking-tighter leading-none">
                  Ready to scale <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">your brand?</span>
                </h3>
                <p className="text-blue-200/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Join industry leaders and turn every campaign into a cultural phenomenon today.
                </p>
              </div>

              {/* Action Buttons Side */}
              <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mr-0">
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative flex items-center justify-between w-full p-6 rounded-2xl bg-white text-[#0A1A4E] hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-2xl uppercase tracking-tight">Partner With Us</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Start a conversation</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] group-hover:text-white transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>

                <a 
                  href="mailto:info@curiousmedia.in"
                  className="group flex items-center gap-6 w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-blue-200/70 uppercase tracking-widest">Email Us Directly</span>
                    <span className="font-bold text-xl text-white">info@curiousmedia.in</span>
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

