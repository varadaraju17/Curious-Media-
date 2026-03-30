"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n/config";

// Placeholder data for the marquee
const brands = ["Nike", "Spotify", "Netflix", "Sony", "Apple", "L'Oreal", "Samsung", "BMW"];
const creators = ["MrBeast", "Emma Chamberlain", "MKBHD", "Logan Paul", "KSI", "Charlie D'Amelio"];

export function Marquee({ type, dict }: { type: "brands" | "creators"; dict: any }) {
  const items = type === "brands" ? brands : creators;
  const repeatItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-20 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-sm">
          {type === "brands" ? "Trusted By Visionary Brands" : "Powering Top Digital Talent"}
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div
           className="flex whitespace-nowrap"
           animate={{
            x: ["0%", "-50%"],
           }}
           transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // seconds for full scroll
           }}
        >
          {repeatItems.map((item, index) => (
            <div 
              key={index}
              className="px-12 md:px-24 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                {item}
              </h3>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
