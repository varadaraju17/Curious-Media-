"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Alexandra Reed", role: "Founder & CEO", image: "A" },
    { name: "Michael Chen", role: "Head of Studio", image: "M" },
    { name: "Sophia Martinez", role: "VP of Talent", image: "S" },
    { name: "James Wilson", role: "Chief Product Officer", image: "J" },
    { name: "Emily Clark", role: "Brand Director", image: "E" },
    { name: "David Osei", role: "Technical Lead", image: "D" },
  ];

  return (
    <main className="flex-1 w-full bg-black">
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 md:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-primary uppercase tracking-[0.2em] font-bold text-sm mb-4">Our Story</p>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                 We engineer <br/> <span className="text-gradient">culture.</span>
              </h1>
            </div>
            <div className="text-xl text-white/70 space-y-6">
              <p>Founded in 2024, Curious Media was born from a simple thesis: the creator economy requires enterprise-grade infrastructure.</p>
              <p>We are a hybrid team of media executives, cinematic directors, and software engineers building the ultimate ecosystem for top digital talent and visionary brands.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 px-4 md:px-8 bg-black">
        <div className="container mx-auto max-w-6xl text-center">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-heading font-black max-w-4xl mx-auto leading-tight"
           >
             "To elevate the art of digital storytelling by removing friction between raw talent and global scale."
           </motion.h2>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 md:px-8 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4">The Architects</h2>
              <p className="text-white/50 text-xl max-w-xl">Meet the leadership team driving Curious Media forward.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
               Join our team <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl group cursor-pointer"
              >
                <div className="aspect-square bg-white/5 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                  <span className="text-7xl font-black font-heading opacity-20 text-white">{member.image}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-white/50 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
          
          <button className="md:hidden mt-12 flex items-center gap-2 text-primary font-bold hover:text-white transition-colors mx-auto">
             Join our team <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
