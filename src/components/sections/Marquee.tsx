"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";
import Image from "next/image";

// New Brand Data with Logo URLs
const brands = [
  { name: "Astrotalk", domain: "astrotalk.com" },
  { name: "Nykaa", domain: "nykaa.com" },
  { name: "TVF", domain: "theviralfever.com" },
  { name: "Tira", domain: "tirabeauty.com" },
  { name: "Girliyapa", domain: "girliyapa.com" },
  { name: "Viacom 18", domain: "viacom18.com" },
  { name: "Plix", domain: "plixlife.com" },
  { name: "Lenskart", domain: "lenskart.com" },
  { name: "Wellbeing Nutrition", domain: "wellbeingnutrition.com" },
  { name: "Zouk", domain: "zouk.co.in" },
  { name: "Rapido", domain: "rapido.bike" },
  { name: "Quack quack", domain: "quackquack.in" },
  { name: "Himalaya", domain: "himalayawellness.com" },
  { name: "Plantex", domain: "plantex.in" },
  { name: "Univest", domain: "univest.in" },
  { name: "Rusk media", domain: "ruskmedia.com" },
  { name: "Sadhna TV", domain: "sadhna.com" },
  { name: "Soul flower", domain: "soulflower.biz" },
  { name: "Blue tea", domain: "bluetea.co.in" },
  { name: "McDonald's", domain: "mcdonalds.com" },
  { name: "Sunburn", domain: "sunburn.in" },
  { name: "Team Innovation", domain: "teaminnovation.in" },
  { name: "Maddock", domain: "maddockfilms.com" },
  { name: "And TV", domain: "andtv.com" },
  { name: "ZEE 5", domain: "zee5.com" },
  { name: "Instamart", domain: "swiggy.com" },
  { name: "Chinese Wok", domain: "chinesewok.in" },
  { name: "Motion Class", domain: "motion.ac.in" },
  { name: "iQOO", domain: "iqoo.com" },
];

const creators = ["MrBeast", "Emma Chamberlain", "MKBHD", "Logan Paul", "KSI", "Charlie D'Amelio"];

export function Marquee({ type, dict }: { type: "brands" | "creators"; dict: any }) {
  const items = type === "brands" ? brands : creators;
  const repeatItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-20 bg-background overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-sm">
          {type === "brands" ? "Trusted By Visionary Brands" : "Powering Top Digital Talent"}
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div
           className="flex whitespace-nowrap items-center"
           animate={{
            x: ["0%", "-50%"],
           }}
           transition={{
            repeat: Infinity,
            ease: "linear",
            duration: type === "brands" ? 60 : 30, // Slower for more brands
           }}
        >
          {repeatItems.map((item: any, index) => (
            <div 
              key={index}
              className="px-8 md:px-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group/item"
            >
              {type === "brands" ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 group-hover/item:border-blue-500/20 group-hover/item:bg-blue-500/5 transition-all duration-500 overflow-hidden">
                    <img 
                      src={`https://logo.clearbit.com/${item.domain}`} 
                      alt={item.name}
                      className="max-w-[60%] max-h-[60%] object-contain filter brightness-0 invert opacity-80 group-hover/item:opacity-100 transition-opacity"
                      onError={(e) => {
                        (e.target as any).style.display = 'none';
                        const parent = (e.target as any).parentElement;
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center font-black text-xl md:text-2xl text-white/20 bg-gradient-to-br from-blue-500/10 to-transparent';
                        fallback.innerText = item.name[0];
                        parent.appendChild(fallback);
                      }}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/20 group-hover/item:text-blue-400/60 transition-colors">{item.name}</span>
                </div>
              ) : (
                <h3 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                  {item}
                </h3>
              )}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
