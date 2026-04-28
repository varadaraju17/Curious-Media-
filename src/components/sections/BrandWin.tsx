"use client";

import { motion } from "framer-motion";

const commitments = [
  { text: "Reach.", highlight: "WE Commit" },
  { text: "Engagement.", highlight: "WE Commit" },
  { text: "Viewership.", highlight: "WE Commit" },
];

export function BrandWin() {
  return (
    <section className="py-24 md:py-40 bg-[#040D21] relative overflow-hidden flex items-center justify-center">
      {/* ── Background Elements ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-500/5 rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full overflow-hidden max-w-[1400px]">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,1)]" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-200">
              Our Promise
            </span>
          </div>
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] font-black text-white tracking-tighter leading-none">
            How Brands Win.
          </h3>
        </motion.div>

        {/* ── Single Line Typography Layout ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full border-y border-white/10 relative">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group relative flex-1 flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 w-full cursor-default"
            >
              {/* Vertical Dividers (Desktop) */}
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent pointer-events-none" />
              )}
              {/* Horizontal Dividers (Mobile) */}
              {index !== 0 && (
                <div className="block lg:hidden absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent pointer-events-none" />
              )}

              {/* Hover Backlight */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.03] transition-colors duration-500 pointer-events-none" />

              {/* Top Label */}
              <span className="text-[10px] md:text-xs font-bold text-blue-400/50 tracking-[0.3em] uppercase mb-4 md:mb-6 group-hover:text-blue-300 transition-colors duration-500">
                {item.highlight}
              </span>

              {/* Massive Single-Line Text */}
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[80px] font-black text-white tracking-tighter leading-none transition-all duration-500 group-hover:scale-105 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-blue-200 drop-shadow-[0_0_0_rgba(0,0,0,0)] group-hover:drop-shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
