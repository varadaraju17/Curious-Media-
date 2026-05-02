"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials({ dict }: { dict: any }) {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO, TechNova",
      company: "TechNova",
      quote: "Curious Media completely transformed our creator monetization strategy. Their analytics and distribution network helped us 5X our engagement in just 3 months.",
      rating: 5,
      gradient: "from-blue-600 to-sky-400",
      initials: "SJ",
      tagColor: "bg-blue-50 text-blue-700",
    },
    {
      name: "Marcus Aurelius",
      role: "Lead Creator, MA Vlogs",
      company: "MA Vlogs",
      quote: "Before Curious, I didn't know how to scale beyond simple sponsorships. Now, I have a dedicated ecosystem that treats my brand like a real business.",
      rating: 5,
      gradient: "from-indigo-600 to-blue-400",
      initials: "MA",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
    {
      name: "Priya Sharma",
      role: "VP Marketing, Global Brands",
      company: "Global Brands",
      quote: "The sheer premium quality and seamless execution Curious brought to our campaign was unmatched. They handle creators with incredible precision and deliver beyond expectations.",
      rating: 5,
      gradient: "from-sky-600 to-cyan-400",
      initials: "PS",
      tagColor: "bg-sky-50 text-sky-700",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

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
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.testimonials.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
          >
            {dict.testimonials.title_1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">{dict.testimonials.title_2}</span>
          </motion.h2>
        </div>

        </div>
      {/* Horizontal Scroll Testimonials */}
      <div className="w-full relative z-10">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(idx * 0.1, 0.3), duration: 0.6, ease: "easeOut" }}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] snap-center group relative flex flex-col bg-white/80 backdrop-blur-md rounded-[32px] border border-blue-100/50 p-8 md:p-10 overflow-hidden
                shadow-[0_8px_32px_rgba(11,46,168,0.04)]
                hover:shadow-[0_24px_64px_rgba(11,46,168,0.12)]
                hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />

              {/* Quote icon */}
              <div className="mb-6">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#0B2EA8]/80 text-lg md:text-xl italic leading-relaxed mb-auto grow font-medium tracking-tight">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-blue-50 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[#0B2EA8] font-black text-base leading-tight truncate tracking-tight">{t.name}</h4>
                  <p className="text-blue-600/60 text-xs font-bold uppercase tracking-wider mt-0.5 truncate">{t.role}</p>
                </div>
                <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${t.tagColor} border border-current/20 shrink-0`}>
                  ✓ Verified
                </span>
              </div>

              {/* Hover glow */}
              <div className={`absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 blur-[40px] rounded-full transition-opacity duration-500`} />
            </motion.div>
          ))}
          <div className="flex-none w-4 md:w-8" />
        </div>
      </div>
    </section>
  );
}
