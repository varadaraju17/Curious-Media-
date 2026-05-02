"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Eye, Users } from "lucide-react";

const campaigns = [
  {
    title: "Space Gen",
    brand: "TVF",
    metrics: [
      { label: "Committed Views", value: "70M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered Views", value: "110M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: "> 5%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "space-gen",
    image: "/images/campaigns/space-gen.png",
    color: "from-blue-600 to-sky-400",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    accentColor: "bg-blue-600",
  },
  {
    title: "Medical Dreams",
    brand: "Girliyapa",
    metrics: [
      { label: "Committed Views", value: "25M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered Views", value: "70M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: "> 3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "medical-dreams",
    image: "/images/campaigns/medical-dreams.png",
    color: "from-indigo-600 to-purple-400",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    accentColor: "bg-indigo-600",
  },
  {
    title: "India Tour",
    brand: "Travis Scott",
    metrics: [
      { label: "Committed Views", value: "20M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered Views", value: "100M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: "> 7%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "travis-scott-india",
    image: "/images/campaigns/india-tour.png",
    color: "from-violet-600 to-pink-400",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    accentColor: "bg-violet-600",
  },
  {
    title: "Pyaar ki Raahein",
    brand: "Balaji Telefilms",
    metrics: [
      { label: "Committed Views", value: "20M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered Views", value: "45M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: "> 3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "pyaar-ki-raahein",
    image: "/images/campaigns/pyaar-ki-raahein.png",
    color: "from-blue-500 to-cyan-400",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    accentColor: "bg-sky-600",
  },
  {
    title: "Influencer Marketing",
    brand: "AstroTalk",
    metrics: [
      { label: "Influencers", value: "50+", icon: <Users className="w-3 h-3" /> },
      { label: "Delivered Views", value: "80M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "CPV", value: "₹0.10", icon: <Eye className="w-3 h-3" /> },
    ],
    slug: "astrotalk-influencer",
    image: "/images/campaigns/influencer-marketing.png",
    color: "from-fuchsia-600 to-rose-400",
    tagColor: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    accentColor: "bg-fuchsia-600",
  },
  {
    title: "Pink Sale",
    brand: "Nykaa",
    metrics: [
      { label: "Influencers", value: "50+", icon: <Users className="w-3 h-3" /> },
      { label: "Delivered Views", value: "55M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "CPV", value: "₹0.15", icon: <Eye className="w-3 h-3" /> },
    ],
    slug: "nykaa-pink-sale",
    image: "/images/campaigns/pink-sale.png",
    color: "from-pink-500 to-orange-400",
    tagColor: "bg-pink-50 text-pink-700 border-pink-200",
    accentColor: "bg-pink-600",
  },
  {
    title: "Motion Class Campaign",
    brand: "Motion Class",
    metrics: [
      { label: "Committed Views", value: "20M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered Views", value: "35M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: "> 3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "motion-class-campaign",
    image: "/images/campaigns/motion-class.png",
    color: "from-blue-700 to-indigo-400",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    accentColor: "bg-blue-700",
  },
  {
    title: "Collage Days",
    brand: "Alright",
    metrics: [
      { label: "Committed Views", value: "12M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered Views", value: "20M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: "> 3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "collage-days",
    image: "/images/campaigns/space-gen.png",
    color: "from-sky-600 to-blue-400",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    accentColor: "bg-sky-600",
  },
];

export function CaseStudies({ dict }: { dict: any }) {
  return (
    <section className="py-24 md:py-36 bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 mb-14 md:mb-20"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.case_studies.badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase">
              {dict.case_studies.title_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">{dict.case_studies.title_2}</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <p className="text-base text-blue-800/65 font-medium max-w-xs md:text-right leading-relaxed">
              {dict.case_studies.description}
            </p>
            <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0B2EA8] border border-blue-200 bg-white rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              {dict.case_studies.cta} <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Horizontal Scroll */}
      <div className="w-full relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-4 md:px-8 xl:px-[calc((100vw-1400px)/2+2rem)] pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
              className="flex-none w-[85vw] sm:w-[50vw] md:w-[38vw] lg:w-[26vw] snap-center group"
            >
              <div className="relative h-full bg-white rounded-[2rem] border border-blue-100/60 overflow-hidden
                shadow-[0_4px_24px_rgba(11,46,168,0.04)]
                group-hover:shadow-[0_24px_50px_rgba(11,46,168,0.12)]
                group-hover:-translate-y-2 transition-all duration-500 ease-out z-10"
              >
                {/* Subtle overlay glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${campaign.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 z-0 pointer-events-none`} />

                {/* Image Section */}
                <div className="relative h-56 bg-[#040F30] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040F30] via-[#040F30]/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 z-10" />
                  
                  <img
                    src={`/images/posters/${campaign.slug}.jpg`}
                    alt={campaign.brand}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&q=80&w=600";
                    }}
                  />

                  {/* Top Bar - Brand Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${campaign.color} shadow-sm`} />
                      {campaign.brand}
                    </div>
                  </div>

                  {/* Arrow CTA - Floats in on hover */}
                  <div className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gradient-to-br ${campaign.color} flex items-center justify-center text-white 
                    translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_8px_16px_rgba(11,46,168,0.25)] hover:scale-110`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Title overlaying image for cinematic feel */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-black font-heading tracking-tight text-white leading-tight drop-shadow-md">
                      {campaign.title}
                    </h4>
                  </div>
                </div>

                {/* Content - Metrics */}
                <div className="p-5 pt-4 relative z-20 bg-white group-hover:bg-transparent transition-colors duration-500">
                  <div className="flex flex-col gap-1">
                    {campaign.metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between py-2.5 border-b border-blue-50/80 last:border-0
                          translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-50/80 group-hover:bg-white text-blue-400 group-hover:text-[#0B2EA8] transition-colors duration-300 shadow-sm border border-transparent group-hover:border-blue-100">
                            {metric.icon}
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">{metric.label}</span>
                        </div>
                        <span className={`text-[15px] font-black bg-gradient-to-r ${campaign.color} bg-clip-text text-[#0B2EA8] group-hover:text-transparent transition-all duration-300`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Animated progress line at bottom */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-in-out z-20">
                  <div className={`w-full h-full bg-gradient-to-r ${campaign.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-8" />
        </div>
      </div>
    </section>
  );
}
