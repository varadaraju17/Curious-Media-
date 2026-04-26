"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Astrotalk", domain: "astrotalk.com", slug: "astrotalk" },
  { name: "Nykaa", domain: "nykaa.com", slug: "nykaa" },
  { name: "TVF", domain: "theviralfever.com", slug: "tvf" },
  { name: "Tira", domain: "tirabeauty.com", slug: "tira" },
  { name: "Girliyapa", domain: "girliyapa.com", slug: "girliyapa" }, 
  { name: "Viacom 18", domain: "viacom18.com", slug: "viacom18" },
  { name: "Plix", domain: "plixlife.com", slug: "plix" },
  { name: "Lenskart", domain: "lenskart.com", slug: "lenskart" },
  { name: "Wellbeing Nutrition", domain: "wellbeingnutrition.com", slug: "wellbeing-nutrition" },
  { name: "Zouk", domain: "zouk.co.in", slug: "zouk" },
  { name: "Rapido", domain: "rapido.bike", slug: "rapido" },
  { name: "Quack quack", domain: "quackquack.in", slug: "quackquack" },
  { name: "Himalaya", domain: "himalaya.com", slug: "himalaya" },
  { name: "Plantex", domain: "plantex.in", slug: "plantex" },
  { name: "Univest", domain: "univest.in", slug: "univest" },
  { name: "Rusk media", domain: "ruskmedia.com", slug: "rusk-media" },
  { name: "Sadhna TV", domain: "sadhnatv.com", slug: "sadhna-tv" },
  { name: "Soul flower", domain: "soulflower.biz", slug: "soul-flower" },
  { name: "Blue tea", domain: "bluetea.co.in", slug: "blue-tea" },
  { name: "McDonald's", domain: "mcdonalds.com", slug: "mcdonalds" },
  { name: "Sunburn", domain: "sunburn.in", slug: "sunburn" },
  { name: "Team Innovation", domain: "teaminnovation.in", slug: "team-innovation" },
  { name: "Maddock", domain: "maddockfilms.com", slug: "maddock" },
  { name: "And TV", domain: "andtv.com", slug: "and-tv" },
  { name: "ZEE 5", domain: "zee5.com", slug: "zee5" },
  { name: "Instamart", domain: "swiggy.com", slug: "instamart" },
  { name: "Chinese Wok", domain: "chinesewok.in", slug: "chinese-wok" },
  { name: "Motion Class", domain: "motion.ac.in", slug: "motion-class" },
  { name: "iQOO", domain: "iqoo.com", slug: "iqoo" },
];

const creators = ["MrBeast", "Emma Chamberlain", "MKBHD", "Logan Paul", "KSI", "Charlie D'Amelio"];

function BrandLogo({ item }: { item: any }) {
  const [errorCount, setErrorCount] = useState(0);
  
  // Sequence of image URLs to try
  const sources = [
    `/images/brands/${item.slug}.png`, // 1. Priority: Local File
    `/images/brands/${item.slug}.svg`, // 2. Local SVG
    `https://logo.clearbit.com/${item.domain}`, // 3. Clearbit
    `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`, // 4. Favicon
  ];

  const handleLogoError = () => {
    setErrorCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-[2rem] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.3)] border border-white transition-all duration-500 overflow-hidden"
      >
        {errorCount < sources.length ? (
          <img 
            src={sources[errorCount]} 
            alt={item.name}
            className="w-full h-full object-contain p-4 transition-all duration-500"
            loading="lazy"
            onError={handleLogoError}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800">
            <div className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">{item.name[0]}</div>
            <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter mt-1">{item.name}</div>
          </div>
        )}
      </motion.div>
      <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-all">{item.name}</span>
    </div>
  );
}

export function Marquee({ type, dict }: { type: "brands" | "creators"; dict: any }) {
  const items = type === "brands" ? brands : creators;
  const repeatItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-24 bg-background overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 uppercase tracking-[0.3em] font-bold text-sm"
        >
          {type === "brands" ? "Trusted By Visionary Brands" : "Powering Top Digital Talent"}
        </motion.p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
           className="flex whitespace-nowrap items-center py-6"
           animate={{
            x: ["0%", "-50%"],
           }}
           transition={{
            repeat: Infinity,
            ease: "linear",
            duration: type === "brands" ? 100 : 30,
           }}
        >
          {repeatItems.map((item: any, index) => (
            <div 
              key={index}
              className="px-8 md:px-16 flex items-center justify-center group"
            >
              {type === "brands" ? (
                <BrandLogo item={item} />
              ) : (
                <h3 className="text-5xl md:text-8xl font-black font-heading tracking-tighter text-white/10 hover:text-white transition-all hover:scale-105 px-8 md:px-16 cursor-default">
                  {item}
                </h3>
              )}
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
