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
  { name: "Girliyapa", domain: "theviralfever.com" }, // Using TVF domain for Girliyapa
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
  { name: "Sadhna TV", domain: "sadhnatv.com" },
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
    <section className="py-32 bg-background overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <p className="text-white/60 uppercase tracking-[0.3em] font-bold text-sm">
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
            duration: type === "brands" ? 100 : 30, // Much slower for impact
           }}
        >
          {repeatItems.map((item: any, index) => (
            <div 
              key={index}
              className="px-12 md:px-20 flex items-center justify-center transition-all duration-500 group/item"
            >
              {type === "brands" ? (
                <div className="flex flex-col items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white transition-all duration-500 overflow-hidden"
                  >
                    <img 
                      src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`} 
                      alt={item.name}
                      className="max-w-[85%] max-h-[85%] object-contain grayscale opacity-80 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as any).style.display = 'none';
                        const parent = (e.target as any).parentElement;
                        if (parent.querySelector('.custom-fallback')) return;
                        const fallback = document.createElement('div');
                        fallback.className = 'custom-fallback w-full h-full flex flex-col items-center justify-center text-center p-2';
                        fallback.innerHTML = `
                          <div class="text-3xl md:text-5xl font-black text-blue-600 mb-1">${item.name[0]}</div>
                          <div class="text-[8px] md:text-[10px] font-bold text-blue-400 opacity-50 uppercase tracking-tighter">${item.name}</div>
                        `;
                        parent.appendChild(fallback);
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-white/40 group-hover/item:text-white group-hover/item:scale-110 transition-all">{item.name}</span>
                </div>
              ) : (
                <h3 className="text-5xl md:text-8xl font-black font-heading tracking-tighter text-white/50 hover:text-white transition-all hover:scale-105 px-8 md:px-16">
                  {item}
                </h3>
              )}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
