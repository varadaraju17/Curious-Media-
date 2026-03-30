"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Story({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const words = dict.home.story.text.split(" ");

  return (
    <section ref={containerRef} className="py-32 md:py-64 relative z-10 bg-black overflow-hidden border-t border-white/5">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-white/5 blur-[200px] rounded-full pointer-events-none mix-blend-screen mix-blend-plus-lighter"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-7xl lg:text-[100px] font-black font-heading leading-[0.9] tracking-tighter flex flex-wrap gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-6">
          {words.map((word: string, i: number) => (
            <Word 
              key={i} 
              word={word} 
              i={i} 
              total={words.length} 
              progress={scrollYProgress} 
            />
          ))}
        </h2>
        
        {/* Trailing Minimalist line */}
        <div className="mt-32 w-full flex justify-center opacity-50">
          <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

function Word({ word, i, total, progress }: { word: string; i: number; total: number; progress: any }) {
  const start = i / total;
  const end = start + (1 / total);

  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const filter = useTransform(progress, [start, end], ["blur(8px)", "blur(0px)"]);

  return (
    <motion.span 
      style={{ opacity, filter }} 
      className="text-white will-change-[opacity,filter]"
    >
      {word}
    </motion.span>
  );
}
