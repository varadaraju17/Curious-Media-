"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    { name: "Alexandra Reed", role: "Founder & CEO", initials: "AR" },
    { name: "Michael Chen", role: "Head of Studio", initials: "MC" },
    { name: "Sophia Martinez", role: "VP of Talent", initials: "SM" },
    { name: "James Wilson", role: "Chief Product Officer", initials: "JW" },
    { name: "Emily Clark", role: "Brand Director", initials: "EC" },
    { name: "David Osei", role: "Technical Lead", initials: "DO" },
  ];

  const stats = [
    { label: "Creators Managed", value: "250+" },
    { label: "Global Reach", value: "2B+" },
    { label: "Campaigns Run", value: "1.2K" },
    { label: "Average ROI", value: "12x" },
  ];

  return (
    <main className="flex-1 w-full bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50/50 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">About Curious</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black font-heading tracking-tighter leading-[0.85] text-[#0A1A4E] uppercase mb-8">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500">Culture.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed">
              Founded in 2024, Curious Media was born from a simple thesis: the creator economy requires enterprise-grade infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A1A4E] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-6xl font-black text-white mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-blue-300/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Glow effect for dark section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full" />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-slate-100 overflow-hidden relative border border-blue-50 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-32 h-32 text-[#0A1A4E]/10" />
                 </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-3xl shadow-2xl border border-blue-50 p-6 flex flex-col justify-center items-center">
                <Zap className="w-8 h-8 text-cyan-500 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">High Velocity</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-heading text-[#0A1A4E] uppercase mb-8 tracking-tighter">
                Our <span className="text-[#0B2EA8]">Mission.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
                To elevate the art of digital storytelling by removing friction between raw talent and global scale. We bridge the gap between creative freedom and corporate precision.
              </p>
              <div className="space-y-6">
                {[
                  "Enterprise-grade creator infrastructure",
                  "Data-driven brand integration strategies",
                  "Cinematic-quality production standards",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0B2EA8]" />
                    </div>
                    <span className="text-lg font-bold text-[#0A1A4E]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 px-4 bg-slate-50/50">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black font-heading text-[#0A1A4E] uppercase tracking-tighter mb-4">
                The <span className="text-[#0B2EA8]">Architects.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium italic">Meet the leadership team driving the Curious Media evolution.</p>
            </div>
            <Link 
              href="/en/contact"
              className="group flex items-center gap-4 px-8 py-4 bg-[#0A1A4E] text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-blue-900/10"
            >
              Join Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-[0_20px_60px_rgba(11,46,168,0.05)] hover:shadow-[0_40px_80px_rgba(11,46,168,0.1)] transition-all group cursor-pointer"
              >
                <div className="aspect-square bg-blue-50 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2EA8]/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                  <span className="text-7xl font-black font-heading text-[#0B2EA8]/10 group-hover:text-[#0B2EA8]/20 transition-colors">{member.initials}</span>
                </div>
                <h3 className="text-2xl font-black text-[#0A1A4E] group-hover:text-[#0B2EA8] transition-colors">{member.name}</h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
