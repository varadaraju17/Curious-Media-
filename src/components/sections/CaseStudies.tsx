"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, TrendingUp, Users, Zap, RotateCw } from "lucide-react";

const campaigns = [
  {
    title: "Space Gen",
    brand: "TVF",
    metrics: [
      { label: "Committed", value: "70M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "110M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement", value: ">5%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "space-gen",
    images: [
      "/images/posters/space-gen.jpg",
      "/images/campaigns/space-gen.png",
      "/images/campaigns/influencer-marketing.png"
    ],
    gradient: "from-blue-600 to-sky-400",
    glowColor: "rgba(11,46,168,0.4)",
    borderColor: "border-blue-400/50",
    accentText: "text-blue-300",
    tagBg: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    num: "01",
  },
  {
    title: "Medical Dreams",
    brand: "Girliyapa",
    metrics: [
      { label: "Committed", value: "25M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "70M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "medical-dreams",
    images: [
      "/images/posters/medical-dreams.jpg",
      "/images/campaigns/medical-dreams.png",
      "/images/campaigns/motion-class.png"
    ],
    gradient: "from-indigo-600 to-violet-400",
    glowColor: "rgba(99,102,241,0.4)",
    borderColor: "border-indigo-400/50",
    accentText: "text-indigo-300",
    tagBg: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30",
    num: "02",
  },
  {
    title: "India Tour",
    brand: "Travis Scott",
    metrics: [
      { label: "Committed", value: "20M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "100M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement", value: ">7%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "travis-scott-india",
    images: [
      "/images/posters/travis-scott-india.jpg",
      "/images/campaigns/india-tour.png",
      "/images/campaigns/redbull.png"
    ],
    gradient: "from-violet-600 to-fuchsia-400",
    glowColor: "rgba(139,92,246,0.4)",
    borderColor: "border-violet-400/50",
    accentText: "text-violet-300",
    tagBg: "bg-violet-500/20 text-violet-200 border-violet-400/30",
    num: "03",
  },
  {
    title: "Pyaar ki Raahein",
    brand: "Balaji Telefilms",
    metrics: [
      { label: "Committed", value: "20M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "45M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "pyaar-ki-raahein",
    images: [
      "/images/posters/pyaar-ki-raahein.jpg",
      "/images/campaigns/pyaar-ki-raahein.png",
      "/images/campaigns/netflix.png"
    ],
    gradient: "from-rose-500 to-pink-400",
    glowColor: "rgba(244,63,94,0.4)",
    borderColor: "border-rose-400/50",
    accentText: "text-rose-300",
    tagBg: "bg-rose-500/20 text-rose-200 border-rose-400/30",
    num: "04",
  },
  {
    title: "AstroTalk",
    brand: "Influencer Marketing",
    metrics: [
      { label: "Influencers", value: "50+", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "80M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "CPV", value: "₹0.10", icon: <Eye className="w-3.5 h-3.5" /> },
    ],
    slug: "astrotalk-influencer",
    images: [
      "/images/posters/astrotalk-influencer.jpg",
      "/images/campaigns/influencer-marketing.png",
      "/images/campaigns/zomato.png"
    ],
    gradient: "from-fuchsia-600 to-rose-400",
    glowColor: "rgba(192,38,211,0.4)",
    borderColor: "border-fuchsia-400/50",
    accentText: "text-fuchsia-300",
    tagBg: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/30",
    num: "05",
  },
  {
    title: "Pink Sale",
    brand: "Nykaa",
    metrics: [
      { label: "Influencers", value: "50+", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "55M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "CPV", value: "₹0.15", icon: <Eye className="w-3.5 h-3.5" /> },
    ],
    slug: "nykaa-pink-sale",
    images: [
      "/images/posters/nykaa-pink-sale.jpg",
      "/images/campaigns/pink-sale.png",
      "/images/campaigns/motion-class.png"
    ],
    gradient: "from-pink-500 to-orange-400",
    glowColor: "rgba(236,72,153,0.4)",
    borderColor: "border-pink-400/50",
    accentText: "text-pink-300",
    tagBg: "bg-pink-500/20 text-pink-200 border-pink-400/30",
    num: "06",
  },
  {
    title: "Motion Class Campaign",
    brand: "Motion Class",
    metrics: [
      { label: "Committed", value: "20M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "35M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "motion-class-campaign",
    images: [
      "/images/posters/motion-class-campaign.jpg",
      "/images/campaigns/motion-class.png",
      "/images/campaigns/redbull.png"
    ],
    gradient: "from-sky-600 to-cyan-400",
    glowColor: "rgba(14,165,233,0.4)",
    borderColor: "border-sky-400/50",
    accentText: "text-sky-300",
    tagBg: "bg-sky-500/20 text-sky-200 border-sky-400/30",
    num: "07",
  },
  {
    title: "Collage Days",
    brand: "Alright",
    metrics: [
      { label: "Committed", value: "12M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered", value: "20M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "collage-days",
    images: [
      "/images/posters/collage-days.jpg",
      "/images/campaigns/zomato.png",
      "/images/campaigns/netflix.png"
    ],
    gradient: "from-blue-500 to-indigo-400",
    glowColor: "rgba(59,130,246,0.4)",
    borderColor: "border-blue-400/50",
    accentText: "text-blue-300",
    tagBg: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    num: "08",
  },
];

export function CaseStudies({ dict }: { dict: any }) {
  // Store the active image index for each campaign card
  const [activeImageIndexes, setActiveImageIndexes] = useState<number[]>(new Array(campaigns.length).fill(0));

  const handleSwapImage = (cardIndex: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndexes((prev) => {
      const next = [...prev];
      const imageCount = campaigns[cardIndex].images.length;
      next[cardIndex] = (next[cardIndex] + 1) % imageCount;
      return next;
    });
  };

  return (
    <section className="py-32 md:py-40 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(11,46,168,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">{dict.case_studies.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black font-heading tracking-tighter leading-[0.95] text-[#0A1A4E] uppercase">
              {dict.case_studies.title_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">{dict.case_studies.title_2}</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
            <p className="text-lg text-slate-500 font-medium max-w-sm md:text-right leading-relaxed">
              {dict.case_studies.description}
            </p>
            <button className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#0B2EA8] bg-white rounded-full px-8 py-4 hover:bg-[#0B2EA8] hover:text-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(11,46,168,0.2)]">
              {dict.case_studies.cta} 
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll — Cinematic Posters with interactive click-swap */}
      <div className="w-full relative z-10">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-12 pt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {campaigns.map((campaign, i) => {
            const activeImageIndex = activeImageIndexes[i] ?? 0;
            const currentImg = campaign.images[activeImageIndex];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: Math.min(i * 0.07, 0.4), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex-none w-[85vw] sm:w-[55vw] md:w-[40vw] lg:w-[28vw] snap-center group cursor-pointer"
                onClick={(e) => handleSwapImage(i, e)}
              >
                <div
                  className={`relative flex flex-col rounded-[2.5rem] border ${campaign.borderColor} overflow-hidden bg-[#0A1A4E]
                    shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                    hover:-translate-y-4 transition-all duration-700 min-h-[500px] md:min-h-[580px]`}
                  style={{ boxShadow: `0 20px 60px ${campaign.glowColor}` }}
                >
                  {/* Full-bleed image with AnimatePresence for smooth swap */}
                  <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${currentImg})` }}
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4E]/95 via-[#0A1A4E]/45 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${campaign.gradient} mix-blend-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />
                  </div>

                  {/* Swap Indicator Badge */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-black text-cyan-300 uppercase tracking-widest backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: "3s" }} />
                    Swap Visual
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-6 md:p-8 min-h-[500px] md:min-h-[580px]">

                    {/* Top row */}
                    <div className="flex items-center justify-between mb-auto">
                      <span className="text-xs font-black tracking-[0.3em] text-white/40 uppercase font-heading">{campaign.num}</span>
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest ${campaign.tagBg} backdrop-blur-md shadow-lg`}>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${campaign.gradient} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                        {campaign.brand}
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="mt-auto relative">
                      
                      {/* Hover Glow Behind Text */}
                      <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-t ${campaign.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 pointer-events-none`} />

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-white mb-6 leading-none transition-transform duration-500 group-hover:-translate-y-1 drop-shadow-lg">
                        {campaign.title}
                      </h3>

                      {/* Premium Glassmorphic Metrics */}
                      <div className={`rounded-3xl bg-white/10 border ${campaign.borderColor} backdrop-blur-xl shadow-xl divide-y divide-white/10 mb-6 group-hover:bg-white/20 transition-colors duration-500 overflow-hidden`}>
                        {campaign.metrics.map((metric, j) => (
                          <div
                            key={j}
                            className="flex items-center justify-between px-5 py-3.5 group-hover:bg-white/5 transition-colors duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`${campaign.accentText} bg-black/20 p-1.5 rounded-lg`}>{metric.icon}</span>
                              <span className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.15em]">{metric.label}</span>
                            </div>
                            <span className="text-base font-black text-white filter drop-shadow-md">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA row */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 group/cta cursor-pointer">
                        <span className="text-xs font-black text-white/50 uppercase tracking-widest group-hover/cta:text-white transition-colors duration-300">Click Card to Cycle Image</span>
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${campaign.gradient} flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
                        >
                          <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${campaign.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
          <div className="flex-none w-12" />
        </div>
      </div>
    </section>
  );
}
