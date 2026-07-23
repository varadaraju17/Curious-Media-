"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, TrendingUp, Users, Zap, RotateCw, ArrowLeft, ArrowRight, Award } from "lucide-react";

const campaigns = [
  {
    title: "Space Gen",
    brand: "TVF",
    metrics: [
      { label: "Committed views", value: "70M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "110M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: ">5%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "space-gen",
    images: [
      "/images/posters/space-gen.webp",
      "/images/campaigns/space-gen.webp",
      "/images/campaigns/influencer-marketing.webp"
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
      { label: "Committed views", value: "25M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "70M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "medical-dreams",
    images: [
      "/images/posters/medical-dreams.webp",
      "/images/campaigns/medical-dreams.webp",
      "/images/campaigns/motion-class.webp"
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
    award: true,
    metrics: [
      { label: "Committed views", value: "20M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "100M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: ">7%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "travis-scott-india",
    images: [
      "/images/posters/travis-scott-india.webp",
      "/images/campaigns/india-tour.webp",
      "/images/campaigns/redbull.webp"
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
      { label: "Committed views", value: "20M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "45M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "pyaar-ki-raahein",
    images: [
      "/images/posters/pyaar-ki-raahein.webp",
      "/images/campaigns/pyaar-ki-raahein.webp",
      "/images/campaigns/netflix.webp"
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
    brand: "AstroTalk",
    metrics: [
      { label: "Influencers delivered", value: "200+", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Committed views", value: "350M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "CPV", value: "₹0.10", icon: <TrendingUp className="w-3.5 h-3.5" /> },
    ],
    slug: "astrotalk-influencer",
    images: [
      "/images/posters/astrotalk-influencer.webp",
      "/images/campaigns/influencer-marketing.webp",
      "/images/campaigns/zomato.webp"
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
      { label: "Influencers delivered", value: "50+", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "55M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "CPV", value: "₹0.15", icon: <Eye className="w-3.5 h-3.5" /> },
    ],
    slug: "nykaa-pink-sale",
    images: [
      "/images/posters/nykaa-pink-sale.webp",
      "/images/campaigns/pink-sale.webp",
      "/images/campaigns/motion-class.webp"
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
      { label: "Committed views", value: "20M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "35M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "motion-class-campaign",
    images: [
      "/images/posters/motion-class-campaign.webp",
      "/images/campaigns/motion-class.webp",
      "/images/campaigns/redbull.webp"
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
      { label: "Committed views", value: "12M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Delivered views", value: "20M+", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: ">3%", icon: <Users className="w-3.5 h-3.5" /> },
    ],
    slug: "collage-days",
    images: [
      "/images/posters/collage-days.webp",
      "/images/campaigns/zomato.webp",
      "/images/campaigns/netflix.webp"
    ],
    gradient: "from-blue-500 to-indigo-400",
    glowColor: "rgba(59,130,246,0.4)",
    borderColor: "border-blue-400/50",
    accentText: "text-blue-300",
    tagBg: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    num: "08",
  },
  {
    title: "Made in India",
    brand: "Rusk Live",
    metrics: [
      { label: "Influencers delivered", value: "500+", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Delivered reach", value: "100M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: "3%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
    ],
    slug: "made-in-india",
    images: [
      "/images/posters/made-in-india.webp"
    ],
    gradient: "from-amber-500 to-orange-400",
    glowColor: "rgba(245,158,11,0.4)",
    borderColor: "border-amber-400/50",
    accentText: "text-amber-300",
    tagBg: "bg-amber-500/20 text-amber-200 border-amber-400/30",
    num: "09",
  },
  {
    title: "Sunburn Delhi",
    brand: "Black Coffee",
    metrics: [
      { label: "Influencers delivered", value: "100+", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Delivered reach", value: "30M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: "2%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
    ],
    slug: "sunburn-delhi",
    images: [
      "/images/posters/sunburn.webp"
    ],
    gradient: "from-teal-500 to-emerald-400",
    glowColor: "rgba(20,184,166,0.4)",
    borderColor: "border-teal-400/50",
    accentText: "text-teal-300",
    tagBg: "bg-teal-500/20 text-teal-200 border-teal-400/30",
    num: "10",
  },
  {
    title: "Skill India",
    brand: "MSDE",
    metrics: [
      { label: "Influencers delivered", value: "10", icon: <Users className="w-3.5 h-3.5" /> },
      { label: "Delivered reach", value: "30M+", icon: <Eye className="w-3.5 h-3.5" /> },
      { label: "Engagement rate", value: "3%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
    ],
    slug: "skill-india",
    images: [
      "/images/posters/skill-india.webp"
    ],
    gradient: "from-blue-400 to-cyan-300",
    glowColor: "rgba(56,189,248,0.4)",
    borderColor: "border-blue-300/50",
    accentText: "text-blue-200",
    tagBg: "bg-blue-400/20 text-blue-100 border-blue-300/30",
    num: "11",
  }
];

export function CaseStudies({ dict }: { dict: any }) {
  const isHindi = dict.case_studies.badge !== "Proven Impact";
  const translateText = (text: string) => {
    if (!isHindi) return text;
    const map: Record<string, string> = {
      // Labels
      "Committed views": "प्रतिबद्ध व्यूज़",
      "Delivered views": "वितरित व्यूज़",
      "Delivered reach": "वितरित पहुंच",
      "Engagement rate": "जुड़ाव दर",
      "Influencers delivered": "वितरित इन्फ्लुएंसर्स",
      "CPV": "सीपीवी (CPV)",

      // Values
      "🏆 Award-Winning Campaign": "🏆 पुरस्कार विजेता अभियान",

      // Brands
      "TVF": "टीवीएफ",
      "Girliyapa": "गिर्लियापा",
      "Travis Scott": "ट्रेविस स्कॉट",
      "Balaji Telefilms": "बालाजी टेलीफिल्म्स",
      "AstroTalk": "एस्ट्रोटॉक",
      "Nykaa": "नायका",
      "Motion Class": "मोशन क्लास",
      "Alright": "ऑलराइट",
      "Rusk Live": "रस्क लाइव",
      "Black Coffee": "ब्लैक कॉफी",
      "MSDE": "एमएसडीई (MSDE)",

      // Titles
      "Space Gen": "स्पेस जेन",
      "Medical Dreams": "मेडिकल ड्रीम्स",
      "India Tour": "इंडिया टूर",
      "Pyaar ki Raahein": "प्यार की राहें",
      "Influencer Marketing": "इन्फ्लुएंसर मार्केटिंग",
      "Pink Sale": "पिंक सेल",
      "Motion Class Campaign": "मोशन क्लास कैंपेन",
      "Collage Days": "कोलाज डेज़",
      "Made in India": "मेड इन इंडिया",
      "Sunburn Delhi": "सनबर्न दिल्ली",
      "Skill India": "स्किल इंडिया"
    };
    return map[text] || text;
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 24 : 400;
      // On mobile scroll 1 card, on desktop scroll 3
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 1 : 3;
      const scrollAmount = direction === "left" ? -cardWidth * count : cardWidth * count;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="campaigns" className="py-32 md:py-40 bg-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-5xl lg:text-[60px] font-black font-heading tracking-tighter leading-[0.95] text-[#0A1A4E] uppercase">
              {dict.case_studies.title_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">{dict.case_studies.title_2}</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
            <p className="text-lg text-slate-500 font-medium max-w-sm md:text-right leading-relaxed">
              {dict.case_studies.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll - Cinematic Posters with interactive click-swap */}
      <div className="w-full relative z-10">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-12 pt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {campaigns.map((campaign, i) => {
            const currentImg = campaign.images[0];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: Math.min(i * 0.07, 0.4), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex-none w-[85vw] sm:w-[55vw] md:w-[40vw] lg:w-[28vw] snap-center group select-none"
              >
                <div
                  className={`relative flex flex-col rounded-[2.5rem] border ${campaign.borderColor} overflow-hidden bg-[#0A1A4E]
                    shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                    hover:-translate-y-4 transition-all duration-700 min-h-[500px] md:min-h-[580px]`}
                  style={{ boxShadow: `0 20px 60px ${campaign.glowColor}`, WebkitTapHighlightColor: 'transparent' }}
                >
                  {/* Full-bleed image styled to prevent zooming/cropping */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 bg-[size:100%_auto] bg-no-repeat bg-top"
                      style={{ backgroundImage: `url(${currentImg})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4E]/95 via-[#0A1A4E]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-6 md:p-8 min-h-[500px] md:min-h-[580px]">

                    {/* Top row */}
                    <div className="flex flex-col gap-3 mb-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black tracking-[0.3em] text-white/40 uppercase font-heading">{campaign.num}</span>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-slate-950/85 text-white text-[11px] font-black uppercase tracking-widest backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.75)] group-hover:bg-slate-950 group-hover:border-white/40 transition-all duration-300">
                          <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${campaign.gradient} shadow-[0_0_12px_rgba(255,255,255,0.9)]`} />
                          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{translateText(campaign.brand)}</span>
                        </div>
                      </div>
                      {(campaign as any).award && (
                        <div className="self-end px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 backdrop-blur-md shadow-lg">
                          <span className="text-[9px] font-black uppercase tracking-widest text-amber-300">{translateText("🏆 Award-Winning Campaign")}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom content */}
                    <div className="mt-auto relative">

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-white mb-6 leading-none transition-transform duration-500 group-hover:-translate-y-1 drop-shadow-lg">
                        {translateText(campaign.title)}
                      </h3>

                      {/* Premium Glassmorphic Metrics */}
                      <div className={`rounded-3xl bg-white/25 border border-white/30 backdrop-blur-xl shadow-xl divide-y divide-white/10 mb-6 group-hover:bg-white/35 transition-all duration-500 overflow-hidden`}>
                        {campaign.metrics.map((metric, j) => (
                          <div
                            key={j}
                            className="flex items-center justify-between px-5 py-3.5 group-hover:bg-white/10 transition-colors duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`${campaign.accentText} bg-black/35 p-1.5 rounded-lg`}>{metric.icon}</span>
                              <span className="text-[10px] font-black text-white uppercase tracking-[0.15em]">{translateText(metric.label)}</span>
                            </div>
                            <span className="text-base font-black text-white filter drop-shadow-md">
                              {translateText(metric.value)}
                            </span>
                          </div>
                        ))}
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

        {/* Desktop Navigation Arrows - overlaid */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white border border-blue-100 items-center justify-center text-[#0B2EA8] shadow-2xl hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Previous Campaigns"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white border border-blue-100 items-center justify-center text-[#0B2EA8] shadow-2xl hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Next Campaigns"
        >
          <ArrowRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Mobile Navigation Arrows - bottom pill bar */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-2 pb-2">
          <button
            onClick={() => scroll("left")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2EA8] text-white shadow-lg active:scale-95 transition-all duration-200"
            aria-label="Previous Campaigns"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">Prev</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2EA8] text-white shadow-lg active:scale-95 transition-all duration-200"
            aria-label="Next Campaigns"
          >
            <span className="text-xs font-black uppercase tracking-widest">Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
