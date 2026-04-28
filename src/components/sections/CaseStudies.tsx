"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const campaigns = [
  {
    title: "Space Gen",
    brand: "TVF",
    metrics: [
      { label: "Committed Viewership", value: "70 M+" },
      { label: "Delivered Viewership", value: "110 M+" },
      { label: "Engagement Rate", value: "Above 5%" },
    ],
    slug: "space-gen",
  },
  {
    title: "Medical Dreams",
    brand: "Girliyapa",
    metrics: [
      { label: "Committed Viewership", value: "25 M+" },
      { label: "Delivered Viewership", value: "70 M+" },
      { label: "Engagement Rate", value: "Above 3%" },
    ],
    slug: "medical-dreams",
  },
  {
    title: "India Tour",
    brand: "Travis Scott",
    metrics: [
      { label: "Committed Viewership", value: "20 M+" },
      { label: "Delivered Viewership", value: "100 M+" },
      { label: "Engagement Rate", value: "Above 7%" },
    ],
    slug: "travis-scott-india",
  },
  {
    title: "Pyaar ki Raahein",
    brand: "Balaji Telefilms",
    metrics: [
      { label: "Committed Viewership", value: "20 M+" },
      { label: "Delivered Viewership", value: "45 M+" },
      { label: "Engagement Rate", value: "Above 3%" },
    ],
    slug: "pyaar-ki-raahein",
  },
  {
    title: "Influencer Marketing",
    brand: "AstroTalk",
    metrics: [
      { label: "No. of Influencers", value: "50+ (Pan India)" },
      { label: "Committed Viewership", value: "80 M" },
      { label: "CPV", value: "0.10p - 0.20p" },
    ],
    slug: "astrotalk-influencer",
  },
  {
    title: "Pink Sale",
    brand: "Nykaa",
    metrics: [
      { label: "No. of Influencers", value: "50+ (South India)" },
      { label: "Committed Viewership", value: "55 M" },
      { label: "CPV", value: "0.10p - 0.20p" },
    ],
    slug: "nykaa-pink-sale",
  },
  {
    title: "Motion Class Campaign",
    brand: "Motion Class",
    metrics: [
      { label: "Committed Viewership", value: "20 M+" },
      { label: "Delivered Viewership", value: "35 M+" },
      { label: "Engagement Rate", value: "Above 3%" },
    ],
    slug: "motion-class-campaign",
  },
  {
    title: "Collage Days",
    brand: "Alright",
    metrics: [
      { label: "Committed Viewership", value: "12 M+" },
      { label: "Delivered Viewership", value: "20 M+" },
      { label: "Engagement Rate", value: "Above 3%" },
    ],
    slug: "collage-days",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white relative overflow-hidden border-t border-blue-100">
      {/* Decorative top gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20 container mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-200 bg-blue-50 mb-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-700">Proven Impact</span>
        </div>
        <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#0A1628] tracking-tighter">
          Featured Campaigns
        </h3>
      </motion.div>

      {/* Edge-to-edge carousel */}
      <div className="w-full relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 px-6 md:px-[10%] pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex-none w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[28vw] snap-center"
            >
              <CampaignCard campaign={campaign} index={index} />
            </div>
          ))}
          <div className="flex-none w-[10vw]" />
        </div>
      </div>
    </section>
  );
}

function CampaignCard({ campaign, index }: { campaign: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className="relative aspect-[3/4] rounded-3xl md:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-blue-100 shadow-[0_8px_32px_rgba(27,79,216,0.10)] hover:shadow-[0_20px_60px_rgba(27,79,216,0.20)] transform-gpu hover:-translate-y-1 transition-all duration-500"
    >
      {/* Poster Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`/images/posters/${campaign.slug}.jpg`}
          alt={campaign.brand}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.12]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&q=80&w=600";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent lg:group-hover:opacity-0 transition-opacity duration-500" />
      </div>

      {/* Default info */}
      <motion.div
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex flex-col justify-end h-full pointer-events-none"
      >
        <div className="inline-flex max-w-max items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-3 md:mb-4">
          <p className="text-white font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
            {campaign.brand}
          </p>
        </div>
        <h4 className="text-2xl md:text-3xl font-black text-white leading-[1.1] tracking-tight">
          {campaign.title}
        </h4>
        <div className="absolute top-6 right-6 lg:hidden w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center pointer-events-auto">
          <span className="text-white text-xs">+</span>
        </div>
      </motion.div>

      {/* Hover details — blue overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 z-20 bg-gradient-to-br from-blue-700/97 to-blue-900/95 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center gap-4 md:gap-8 border-[0.5px] border-white/20 rounded-3xl md:rounded-[2.5rem] ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="border-b border-white/20 pb-4 md:pb-6">
          <h4 className="text-lg md:text-xl xl:text-2xl font-black text-white/90">Campaign Metrics</h4>
        </div>
        <div className="space-y-4 md:space-y-6">
          {campaign.metrics.map((metric: any, i: number) => (
            <div
              key={i}
              className={`transform transition-all duration-500 translate-y-4 opacity-0 ${isHovered ? 'translate-y-0 opacity-100' : ''}`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <p className="text-blue-200/80 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-0.5 md:mb-1">
                {metric.label}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-6 right-6 lg:hidden w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <span className="text-white text-xs">−</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
