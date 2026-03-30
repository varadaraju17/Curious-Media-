"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity } from "lucide-react";

export function Analytics({ dict }: { dict: any }) {
  const bars = [40, 65, 45, 80, 55, 90, 100];

  return (
    <section className="py-32 md:py-48 relative z-10 bg-black border-t border-white/5">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/5 blur-[200px] rounded-full pointer-events-none mix-blend-screen mix-blend-plus-lighter"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 glass mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-white">Data-Driven Execution</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tighter leading-[0.9]">
                {dict.home?.analytics?.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-lg font-medium tracking-tight">
                {dict.home?.analytics?.subtitle}
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-white w-5 h-5 opacity-50" /> 
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Global Reach</p>
                  </div>
                  <h4 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">4.2B+</h4>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="text-white w-5 h-5 opacity-50" /> 
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Avg. ROI</p>
                  </div>
                  <h4 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">14.5x</h4>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="bg-black/80 backdrop-blur-3xl rounded-[40px] p-8 shadow-[0_20px_80px_rgba(255,255,255,0.04)] border border-white/10 relative group overflow-hidden"
             >
                {/* Internal Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

                <div className="flex justify-between items-end mb-12 pb-6 border-b border-white/10 relative z-10">
                   <div>
                      <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-2 line-through decoration-white/20">Performance Index</p>
                      <p className="text-4xl font-heading font-black tracking-tighter text-white">+1,240% <span className="text-white/50 text-sm tracking-normal font-sans ml-2">Δ Growth</span></p>
                   </div>
                   <div className="flex gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/90"></span>
                   </div>
                </div>

                {/* Animated Chart */}
                <div className="h-64 flex items-end justify-between gap-3 mt-auto relative z-10">
                   {bars.map((height, index) => (
                     <div key={index} className="w-full h-full relative group/bar flex items-end justify-center pb-0">
                        {/* Background guide rail */}
                        <div className="absolute bottom-0 w-full h-full bg-white/5 rounded-t-sm"></div>
                        
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                          className="absolute bottom-0 w-full bg-gradient-to-t from-white/10 via-white/50 to-white rounded-t-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover/bar:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white shadow-[0_0_10px_#fff]"></div>
                        </motion.div>
                     </div>
                   ))}
                </div>
                
                {/* Horizontal data lines overlay */}
                <div className="absolute bottom-[32px] left-8 right-8 h-[1px] bg-white/10 z-10 hidden sm:block"></div>
                <div className="absolute bottom-[108px] left-8 right-8 h-[1px] bg-white/10 z-10 hidden sm:block"></div>
                <div className="absolute bottom-[184px] left-8 right-8 h-[1px] bg-white/5 z-10 hidden sm:block text-[8px] text-white/30 text-right pr-2 uppercase">- Target -</div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
