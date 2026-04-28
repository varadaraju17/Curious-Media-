"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const campaigns = [
  {
    title: "Space Gen",
    brand: "TVF",
    metrics: [
      { label: "Committed Views", value: "70M+" },
      { label: "Delivered Views", value: "110M+" },
      { label: "Engagement", value: "> 5%" },
    ],
    slug: "space-gen",
    color: "from-blue-600 to-sky-400",
    shadow: "rgba(56,189,248,0.4)",
  },
  {
    title: "Medical Dreams",
    brand: "Girliyapa",
    metrics: [
      { label: "Committed Views", value: "25M+" },
      { label: "Delivered Views", value: "70M+" },
      { label: "Engagement", value: "> 3%" },
    ],
    slug: "medical-dreams",
    color: "from-indigo-500 to-purple-400",
    shadow: "rgba(168,85,247,0.4)",
  },
  {
    title: "India Tour",
    brand: "Travis Scott",
    metrics: [
      { label: "Committed Views", value: "20M+" },
      { label: "Delivered Views", value: "100M+" },
      { label: "Engagement", value: "> 7%" },
    ],
    slug: "travis-scott-india",
    color: "from-violet-500 to-pink-400",
    shadow: "rgba(236,72,153,0.4)",
  },
  {
    title: "Pyaar ki Raahein",
    brand: "Balaji Telefilms",
    metrics: [
      { label: "Committed Views", value: "20M+" },
      { label: "Delivered Views", value: "45M+" },
      { label: "Engagement", value: "> 3%" },
    ],
    slug: "pyaar-ki-raahein",
    color: "from-blue-500 to-cyan-400",
    shadow: "rgba(34,211,238,0.4)",
  },
  {
    title: "Influencer Marketing",
    brand: "AstroTalk",
    metrics: [
      { label: "Influencers", value: "50+" },
      { label: "Delivered Views", value: "80M+" },
      { label: "CPV", value: "0.10p" },
    ],
    slug: "astrotalk-influencer",
    color: "from-fuchsia-500 to-rose-400",
    shadow: "rgba(251,113,133,0.4)",
  },
  {
    title: "Pink Sale",
    brand: "Nykaa",
    metrics: [
      { label: "Influencers", value: "50+" },
      { label: "Delivered Views", value: "55M+" },
      { label: "CPV", value: "0.15p" },
    ],
    slug: "nykaa-pink-sale",
    color: "from-pink-500 to-orange-400",
    shadow: "rgba(251,146,60,0.4)",
  },
  {
    title: "Motion Class Campaign",
    brand: "Motion Class",
    metrics: [
      { label: "Committed Views", value: "20M+" },
      { label: "Delivered Views", value: "35M+" },
      { label: "Engagement", value: "> 3%" },
    ],
    slug: "motion-class-campaign",
    color: "from-blue-600 to-indigo-400",
    shadow: "rgba(129,140,248,0.4)",
  },
  {
    title: "Collage Days",
    brand: "Alright",
    metrics: [
      { label: "Committed Views", value: "12M+" },
      { label: "Delivered Views", value: "20M+" },
      { label: "Engagement", value: "> 3%" },
    ],
    slug: "collage-days",
    color: "from-sky-500 to-blue-400",
    shadow: "rgba(96,165,250,0.4)",
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 md:py-40 bg-[#040D21] relative overflow-hidden border-t border-blue-400/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-indigo-900/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">Proven Impact</span>
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-[80px] font-black font-heading text-white tracking-tighter leading-none">
            Featured <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Campaigns.</span>
          </h3>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
          <p className="text-white/40 font-medium max-w-sm text-sm md:text-base md:text-right leading-relaxed">
            Explore how we've helped the world's most ambitious brands shatter their viewership and conversion goals.
          </p>
          <button className="group flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-blue-300 hover:text-white transition-colors mt-2">
            View All Work
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Edge-to-edge Carousel */}
      <div className="w-full relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 px-4 md:px-8 xl:px-[calc((100vw-1400px)/2+2rem)] pb-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[28vw] snap-center group perspective-1000"
            >
              <CampaignCard campaign={campaign} index={index} />
            </div>
          ))}
          {/* Spacer for right padding in scrolling */}
          <div className="flex-none w-[5vw] md:w-[10vw]" />
        </div>
      </div>
    </section>
  );
}

function CampaignCard({ campaign, index }: { campaign: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      className="relative h-[500px] md:h-[600px] rounded-[2.5rem] p-1 overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
    >
      {/* Animated gradient border container */}
      <div className="absolute inset-0 bg-blue-400/10 group-hover:bg-blue-400/30 transition-colors duration-500 rounded-[2.5rem]" />
      
      {/* Core Card */}
      <div className="absolute inset-[1px] bg-[#071428] rounded-[calc(2.5rem-1px)] overflow-hidden flex flex-col">
        
        {/* Top Image Half */}
        <div className="relative h-[55%] w-full overflow-hidden bg-[#040D21]">
          <img
            src={`/images/posters/${campaign.slug}.jpg`}
            alt={campaign.brand}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&q=80&w=600";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071428] via-[#071428]/40 to-transparent" />
          
          {/* Brand Tag */}
          <div className="absolute top-5 left-5 md:top-6 md:left-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#040D21]/60 backdrop-blur-md border border-white/10 shadow-lg">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${campaign.color} mr-2`} />
              <p className="text-white font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                {campaign.brand}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content Half */}
        <div className="relative flex flex-col flex-1 p-6 md:p-8 justify-between z-10 bg-gradient-to-b from-[#071428] to-[#040D21]">
          <h4 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tighter mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-colors duration-400">
            {campaign.title}
          </h4>

          {/* Metrics List (Mobile friendly left/right alignment) */}
          <div className="flex flex-col gap-3 md:gap-4 mt-auto relative z-10 w-full pr-0 md:pr-4">
            {campaign.metrics.map((metric: any, i: number) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <p className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold">
                  {metric.label}
                </p>
                <p className={`text-base md:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${campaign.color}`}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Hover Glow Effect */}
          <div 
            className="absolute bottom-0 right-0 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{ background: campaign.shadow }}
          />
        </div>

        {/* Floating Arrow CTA */}
        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-20">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${campaign.color} shadow-[0_5px_20px_${campaign.shadow}]`}>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
