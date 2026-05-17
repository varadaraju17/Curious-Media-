"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Target, MessageSquare, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "Meme Marketing",
      subtitle: "Memes that live rent-free in minds.",
      desc: "We create memes that travel fast, hit hard, and stay in your audience’s mind—scaled across millions through our distribution engine.",
      metric: "900M+",
      metricLabel: "reach through distribution network",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-blue-600 to-cyan-400",
      accent: "blue",
    },
    {
      num: "02",
      title: "Influencer Marketing",
      subtitle: "Not just creators. Growth partners.",
      desc: "We match your brand with creators who don’t just talk—they influence, engage, and convert at scale.",
      metric: "15K+",
      metricLabel: "influencers across India",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-indigo-600 to-blue-400",
      accent: "indigo",
    },
    {
      num: "03",
      title: "Content Marketing",
      subtitle: "Seamless storytelling that stays with your audience.",
      desc: "We craft unique, platform-native content that blends your brand naturally into what people love to watch.",
      metric: "100M+",
      metricLabel: "subscribers in creator network",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-violet-600 to-indigo-400",
      accent: "violet",
    },
  ];

  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-24 md:pt-32">
      
      {/* ─── DYNAMIC BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          style={{
            backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 py-12 md:py-24">
        
        {/* ─── HEADER ─── */}
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-blue-100 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#0B2EA8]" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Our Capabilities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black font-heading tracking-tighter leading-[0.85] text-[#0A1A4E] uppercase mb-8">
            Expertise that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">Scales Brands.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just run campaigns; we build distribution engines that drive cultural impact and measurable growth.
          </p>
        </div>

        {/* ─── SERVICES GRID ─── */}
        <div className="grid grid-cols-1 gap-12 md:gap-20">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-blue-50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-10`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className={`w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-white shadow-2xl flex items-center justify-center text-[#0B2EA8]`}
                      >
                        {svc.icon}
                      </motion.div>
                      <div className="absolute -top-6 -right-6 w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-white border border-blue-50 shadow-xl flex items-center justify-center">
                        <Zap className="w-8 h-8 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white shadow-xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0B2EA8] mb-2">Impact Delivered</p>
                    <p className={`text-4xl md:text-5xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${svc.gradient}`}>
                      {svc.metric}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">
                      {svc.metricLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-black text-[#0B2EA8]/10">{svc.num}</span>
                  <div className="h-px w-12 bg-[#0B2EA8]/10" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#0B2EA8]">Service Profile</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter leading-none mb-4 text-[#0A1A4E] uppercase">
                  {svc.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B2EA8] mb-6 leading-tight">
                  {svc.subtitle}
                </h3>
                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                  {svc.desc}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <Link
                    href="/en/contact"
                    className={`group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-black uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/10`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${svc.gradient}`} />
                    <span className="relative z-10">Start Campaign</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <button className="text-[#0B2EA8] font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 md:py-32 bg-[#F8FAFF] relative overflow-hidden mt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-[#0A1A4E] uppercase mb-8">
            Ready to <span className="text-[#0B2EA8]">Dominate?</span>
          </h2>
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#0A1A4E] text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-2xl shadow-blue-900/20"
          >
            Get started now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </section>
    </main>
  );
}
