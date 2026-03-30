"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRANDS = [
  { id: 1, name: "Nike", industry: "Apparel", logo: "N" },
  { id: 2, name: "Spotify", industry: "Tech", logo: "S" },
  { id: 3, name: "Netflix", industry: "Entertainment", logo: "N" },
  { id: 4, name: "BMW", industry: "Automotive", logo: "B" },
  { id: 5, name: "L'Oreal", industry: "Beauty", logo: "L" },
  { id: 6, name: "Samsung", industry: "Tech", logo: "S" },
  { id: 7, name: "Red Bull", industry: "Beverage", logo: "R" },
  { id: 8, name: "Sony", industry: "Entertainment", logo: "S" },
];

const INDUSTRIES = ["All", "Tech", "Apparel", "Entertainment", "Automotive", "Beauty", "Beverage"];

export default function BrandsPage() {
  const [filter, setFilter] = useState("All");

  const filteredBrands = filter === "All" 
    ? BRANDS 
    : BRANDS.filter(b => b.industry === filter);

  return (
    <main className="flex-1 w-full bg-black min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-8 border-b border-white/5">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Trusted <span className="text-gradient">Partners.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-16"
          >
            We partner with the world's most visionary brands to craft campaigns that cut through the noise.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === ind 
                    ? "bg-white text-black" 
                    : "glass text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            <AnimatePresence>
              {filteredBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-video glass-panel border border-white/5 rounded-3xl flex flex-col items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:from-white group-hover:to-white/80 transition-all relative z-10">
                    {brand.name}
                  </span>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors relative z-10">{brand.industry}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* Testimonials */}
      <section className="py-32 px-4 md:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
           <div className="glass p-12 md:p-20 rounded-3xl relative">
              <div className="text-[120px] font-heading leading-none text-white/5 absolute top-4 left-8">"</div>
              <p className="text-2xl md:text-4xl font-heading leading-tight mb-8 relative z-10">
                Curious Media didn't just understand our brand—they anticipated culture. The campaign generated the highest ROI we've seen in the creator space.
              </p>
              <div className="flex items-center justify-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-white/10"></div>
                 <div className="text-left">
                    <p className="font-bold">VP of Global Marketing</p>
                    <p className="text-white/50 text-sm">Fortune 500 Tech Brand</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
