"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye, TrendingUp, Users } from "lucide-react";

const campaigns = [
  {
    title: "Space Gen",
    brand: "TVF",
    metrics: [
      { label: "Committed", value: "70M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered", value: "110M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: ">5%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "space-gen",
    image: "/images/posters/space-gen.jpg",
    gradient: "from-blue-600 to-sky-400",
    glowColor: "rgba(11,46,168,0.35)",
    borderColor: "border-blue-500/30",
    accentText: "text-blue-300",
    tagBg: "bg-blue-500/20 text-blue-200 border-white/10",
    num: "01",
  },
  {
    title: "Medical Dreams",
    brand: "Girliyapa",
    metrics: [
      { label: "Committed", value: "25M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered", value: "70M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "medical-dreams",
    image: "/images/posters/medical-dreams.jpg",
    gradient: "from-indigo-600 to-violet-400",
    glowColor: "rgba(99,102,241,0.35)",
    borderColor: "border-indigo-500/30",
    accentText: "text-indigo-300",
    tagBg: "bg-indigo-500/20 text-indigo-200 border-white/10",
    num: "02",
  },
  {
    title: "India Tour",
    brand: "Travis Scott",
    metrics: [
      { label: "Committed", value: "20M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered", value: "100M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: ">7%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "travis-scott-india",
    image: "/images/posters/travis-scott-india.jpg",
    gradient: "from-violet-600 to-fuchsia-400",
    glowColor: "rgba(139,92,246,0.35)",
    borderColor: "border-violet-500/30",
    accentText: "text-violet-300",
    tagBg: "bg-violet-500/20 text-violet-200 border-white/10",
    num: "03",
  },
  {
    title: "Pyaar ki Raahein",
    brand: "Balaji Telefilms",
    metrics: [
      { label: "Committed", value: "20M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered", value: "45M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "pyaar-ki-raahein",
    image: "/images/posters/pyaar-ki-raahein.jpg",
    gradient: "from-rose-500 to-pink-400",
    glowColor: "rgba(244,63,94,0.3)",
    borderColor: "border-rose-500/30",
    accentText: "text-rose-300",
    tagBg: "bg-rose-500/20 text-rose-200 border-white/10",
    num: "04",
  },
  {
    title: "Influencer Marketing",
    brand: "AstroTalk",
    metrics: [
      { label: "Influencers", value: "50+", icon: <Users className="w-3 h-3" /> },
      { label: "Delivered", value: "80M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "CPV", value: "₹0.10", icon: <Eye className="w-3 h-3" /> },
    ],
    slug: "astrotalk-influencer",
    image: "/images/posters/astrotalk-influencer.jpg",
    gradient: "from-fuchsia-600 to-rose-400",
    glowColor: "rgba(192,38,211,0.3)",
    borderColor: "border-fuchsia-500/30",
    accentText: "text-fuchsia-300",
    tagBg: "bg-fuchsia-500/20 text-fuchsia-200 border-white/10",
    num: "05",
  },
  {
    title: "Pink Sale",
    brand: "Nykaa",
    metrics: [
      { label: "Influencers", value: "50+", icon: <Users className="w-3 h-3" /> },
      { label: "Delivered", value: "55M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "CPV", value: "₹0.15", icon: <Eye className="w-3 h-3" /> },
    ],
    slug: "nykaa-pink-sale",
    image: "/images/posters/nykaa-pink-sale.jpg",
    gradient: "from-pink-500 to-orange-400",
    glowColor: "rgba(236,72,153,0.3)",
    borderColor: "border-pink-500/30",
    accentText: "text-pink-300",
    tagBg: "bg-pink-500/20 text-pink-200 border-white/10",
    num: "06",
  },
  {
    title: "Motion Class Campaign",
    brand: "Motion Class",
    metrics: [
      { label: "Committed", value: "20M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered", value: "35M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "motion-class-campaign",
    image: "/images/posters/motion-class-campaign.jpg",
    gradient: "from-sky-600 to-cyan-400",
    glowColor: "rgba(14,165,233,0.3)",
    borderColor: "border-sky-500/30",
    accentText: "text-sky-300",
    tagBg: "bg-sky-500/20 text-sky-200 border-white/10",
    num: "07",
  },
  {
    title: "Collage Days",
    brand: "Alright",
    metrics: [
      { label: "Committed", value: "12M+", icon: <Eye className="w-3 h-3" /> },
      { label: "Delivered", value: "20M+", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Engagement", value: ">3%", icon: <Users className="w-3 h-3" /> },
    ],
    slug: "collage-days",
    image: "/images/posters/collage-days.jpg",
    gradient: "from-blue-500 to-indigo-400",
    glowColor: "rgba(59,130,246,0.3)",
    borderColor: "border-blue-400/30",
    accentText: "text-blue-300",
    tagBg: "bg-blue-500/20 text-blue-200 border-white/10",
    num: "08",
  },
];

export function CaseStudies({ dict }: { dict: any }) {
  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(11,46,168,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.case_studies.badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase">
              {dict.case_studies.title_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-sky-400">{dict.case_studies.title_2}</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
            <p className="text-base text-blue-800/60 font-medium max-w-xs md:text-right leading-relaxed">
              {dict.case_studies.description}
            </p>
            <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0B2EA8] border border-blue-200 bg-white rounded-full px-5 py-2.5 hover:bg-[#0B2EA8] hover:text-white hover:border-[#0B2EA8] transition-all duration-300">
              {dict.case_studies.cta} <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll — Divisions-style cards */}
      <div className="w-full relative z-10">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-5 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: Math.min(i * 0.07, 0.4), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none w-[78vw] sm:w-[48vw] md:w-[36vw] lg:w-[25vw] snap-center group"
            >
              <div
                className={`relative flex flex-col rounded-3xl border ${campaign.borderColor} overflow-hidden
                  shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                  group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_32px_80px_rgba(0,0,0,0.5)]
                  hover:-translate-y-2 transition-all duration-500 min-h-[420px]`}
                style={{ boxShadow: `0 8px 40px ${campaign.glowColor}` }}
              >
                {/* Full-bleed image */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${campaign.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${campaign.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-5 min-h-[420px]">

                  {/* Top row */}
                  <div className="flex items-center justify-between mb-auto">
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/25 uppercase">{campaign.num}</span>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold ${campaign.tagBg} backdrop-blur-md`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${campaign.gradient}`} />
                      {campaign.brand}
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="mt-auto">
                    {/* Title */}
                    <h3 className="text-2xl font-black font-heading tracking-tight text-white mb-4 leading-tight">
                      {campaign.title}
                    </h3>

                    {/* Metrics */}
                    <div className={`rounded-2xl bg-white/5 border ${campaign.borderColor} backdrop-blur-sm divide-y divide-white/10 mb-4`}>
                      {campaign.metrics.map((metric, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between px-4 py-2.5 group-hover:bg-white/5 transition-colors duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`${campaign.accentText}`}>{metric.icon}</span>
                            <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.15em]">{metric.label}</span>
                          </div>
                          <span className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${campaign.gradient}`}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:text-white/55 transition-colors duration-300">View Campaign</span>
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${campaign.gradient} flex items-center justify-center text-white shadow-lg`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${campaign.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-8" />
        </div>
      </div>
    </section>
  );
}
