"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function StudioPage() {
  const projects = [
    { title: "Neon Nights", category: "Commercial Reel", color: "from-pink-500/20" },
    { title: "Velocity", category: "Automotive Ad", color: "from-blue-500/20" },
    { title: "Essence", category: "Fragrance Campaign", color: "from-yellow-500/20" },
    { title: "Echoes", category: "Music Video", color: "from-green-500/20" },
    { title: "Summit", category: "Documentary Short", color: "from-purple-500/20" },
    { title: "Lumina", category: "Tech Product Launch", color: "from-cyan-500/20" },
  ];

  return (
    <main className="flex-1 w-full bg-black">
      {/* Studio Hero */}
      <section className="relative pt-40 pb-32 px-4 md:px-8 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Abstract video or gradient placeholder */}
           <video 
              autoPlay loop muted playsInline 
              className="w-full h-full object-cover filter blur-3xl opacity-30"
           >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-27158-large.mp4" type="video/mp4" />
           </video>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-white/40 uppercase tracking-[0.3em] font-bold text-sm mb-4">Curious Studio</p>
            <h1 className="text-5xl md:text-8xl font-black font-heading mb-8 tracking-tighter leading-none">
              Cinematic <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Storytelling.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
              High-end production. Ads, brand reels, and original IP that define the state-of-the-art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reel Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="relative aspect-video rounded-3xl overflow-hidden glass group cursor-pointer">
            <video 
              autoPlay loop muted playsInline 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-27158-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-500">
               <div className="w-24 h-24 rounded-full glass flex items-center justify-center pl-2 scale-90 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                 <Play className="w-10 h-10 text-white" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-24 px-4 md:px-8 border-t border-white/5 bg-black">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <h2 className="text-4xl md:text-6xl font-bold font-heading">Featured Work</h2>
             <p className="text-white/50 text-lg mb-2">View Full Archive →</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/5] rounded-2xl overflow-hidden relative glass mb-6`}>
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                  <div className="absolute inset-0 bg-[#0f0f0f] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <span className="text-white/10 font-black text-6xl rotate-45">{i + 1}</span>
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4">
                       <Play className="w-5 h-5 text-white ml-1" />
                     </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-white/50">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
