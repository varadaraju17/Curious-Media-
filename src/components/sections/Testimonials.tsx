"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO, TechNova",
      quote: "Curious Media completely transformed our creator monetization strategy. Their analytics and distribution network helped us 5X our engagement in just 3 months.",
      rating: 5,
      gradient: "from-blue-600 to-sky-400",
      accentColor: "#60A5FA",
    },
    {
      name: "Marcus Aurelius",
      role: "Lead Creator, MA Vlogs",
      quote: "Before Curious, I didn't know how to scale beyond simple sponsorships. Now, I have a dedicated ecosystem that treats my brand like a real business.",
      rating: 5,
      gradient: "from-indigo-500 to-blue-400",
      accentColor: "#818CF8",
    },
    {
      name: "Priya Sharma",
      role: "VP Marketing, Global Brands",
      quote: "The sheer premium quality and seamless execution Curious brought to our campaign was unmatched. They handle creators with incredible precision.",
      rating: 5,
      gradient: "from-sky-500 to-cyan-400",
      accentColor: "#38BDF8",
    }
  ];

  return (
    <section className="py-24 md:py-36 relative z-10 bg-[#040D21] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-700/8 blur-[200px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-8 z-20 max-w-[1400px]">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">Client Experiences</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-black font-heading mb-4 tracking-tighter leading-[1.05]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              DON&apos;T JUST TAKE<br/>OUR WORD FOR IT.
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
              className="group relative flex flex-col h-full rounded-3xl p-8 lg:p-10 border border-blue-400/10 hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #071428 100%)", boxShadow: "0 10px 40px rgba(4,13,33,0.7)" }}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${t.accentColor}18` }} />

              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-400" />
              </div>

              <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-auto grow group-hover:text-white/85 transition-colors duration-400">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 pt-7 border-t border-white/8 group-hover:border-white/15 transition-colors duration-400 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-sm shrink-0 shadow-[0_0_15px_${t.accentColor}40]`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-white/35 text-xs font-medium">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
