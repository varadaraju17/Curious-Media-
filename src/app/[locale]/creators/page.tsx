"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

const CREATORS = [
  { id: 1, name: "David Kim", category: "Gaming", followers: "3.4M", image: "D", stats: { avgViews: "1.2M", er: "8.4%" } },
  { id: 2, name: "Sarah Jenkins", category: "Lifestyle", followers: "1.2M", image: "S", stats: { avgViews: "800K", er: "12.1%" } },
  { id: 3, name: "Marcus Johnson", category: "Fitness", followers: "2.1M", image: "M", stats: { avgViews: "2M", er: "9.5%" } },
  { id: 4, name: "Elena Rossi", category: "Fashion", followers: "800K", image: "E", stats: { avgViews: "400K", er: "15.2%" } },
  { id: 5, name: "James Chen", category: "Tech", followers: "5.5M", image: "J", stats: { avgViews: "3.1M", er: "6.8%" } },
  { id: 6, name: "Aisha Patel", category: "Education", followers: "900K", image: "A", stats: { avgViews: "300K", er: "11.0%" } },
];

const CATEGORIES = ["All", "Gaming", "Lifestyle", "Fitness", "Fashion", "Tech", "Education"];

export default function CreatorsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedCreator, setSelectedCreator] = useState<typeof CREATORS[0] | null>(null);

  const filteredCreators = filter === "All" 
    ? CREATORS 
    : CREATORS.filter(c => c.category === filter);

  return (
    <main className="flex-1 w-full bg-black min-h-screen relative">
      <section className="pt-32 pb-20 px-4 md:px-8 border-b border-white/5 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Our <span className="text-gradient">Roster.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-16"
          >
            Explore the top 1% of digital talent. Filter by niche, audience size, and performance metrics.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? "bg-primary text-white" 
                    : "glass text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCreators.map((creator) => (
                <motion.div
                  key={creator.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedCreator(creator)}
                  className="glass-panel rounded-3xl overflow-hidden cursor-pointer group hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(139,92,246,0.2)] hover:border-accent/40 transition-all duration-500 text-left border border-white/5"
                >
                  <div className="aspect-[4/3] bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-700"></div>
                    <span className="text-8xl font-black font-heading opacity-10 text-white group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">{creator.image}</span>
                  </div>
                  <div className="p-8 relative bg-gradient-to-b from-transparent to-black/50">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">{creator.name}</h3>
                    <p className="text-accent font-bold text-sm mb-6 tracking-wide uppercase">{creator.category}</p>
                    <div className="flex justify-between items-center text-white/60 text-sm border-t border-white/5 pt-4">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Global</span>
                      <span className="text-white font-black text-lg">{creator.followers} <span className="text-white/40 text-xs font-normal">FANS</span></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCreator && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCreator(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedCreator(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/3 bg-white/5 flex items-center justify-center p-12 relative min-h-[300px]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                 <span className="text-9xl font-black font-heading opacity-50 text-white">{selectedCreator.image}</span>
              </div>
              
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30 w-max">
                  {selectedCreator.category}
                </div>
                <h2 className="text-4xl md:text-5xl font-black font-heading mb-2">{selectedCreator.name}</h2>
                <div className="flex items-center gap-4 text-white/50 mb-8 border-b border-white/10 pb-8">
                   <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                     YouTube
                   </div>
                   <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                     Instagram
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-wider font-bold mb-1">Total Reach</p>
                    <p className="text-4xl font-black font-heading text-white">{selectedCreator.followers}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-wider font-bold mb-1">Avg. Views</p>
                    <p className="text-4xl font-black font-heading text-white">{selectedCreator.stats.avgViews}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-wider font-bold mb-1">Engagement</p>
                    <p className="text-4xl font-black font-heading text-accent">{selectedCreator.stats.er}</p>
                  </div>
                </div>

                <button className="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors mt-auto">
                  Inquire for Campaign
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
