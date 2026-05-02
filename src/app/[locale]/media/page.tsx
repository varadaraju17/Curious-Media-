"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Star, Filter } from "lucide-react";

export default function MediaPage() {
  const services = [
    { name: "Social Media Strategy", desc: "Data-driven organic growth and engagement." },
    { name: "Brand Deals", desc: "Connecting visionary brands with perfect creative partners." },
    { name: "Influencer Marketing", desc: "End-to-end campaign management and reporting." },
    { name: "Events & Activations", desc: "On-ground and digital experiential activations." },
    { name: "Talent Acquisition", desc: "Scouting and managing elite digital talent." },
    { name: "Campaign Production", desc: "In-house creative engineering for top-tier campaigns." },
  ];

  const creators = [
    { name: "Sarah Jenkins", category: "Tech & Lifestyle", followers: "1.2M", rating: 4.9 },
    { name: "David Kim", category: "Gaming", followers: "3.4M", rating: 4.8 },
    { name: "Elena Rossi", category: "Fashion", followers: "800K", rating: 5.0 },
    { name: "Marcus Johnson", category: "Fitness", followers: "2.1M", rating: 4.7 },
  ];

  return (
    <main className="flex-1 w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 border-b border-blue-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Curious <span className="text-gradient">Media.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-800/70 max-w-3xl mx-auto mb-10"
          >
            We represent the new elite of digital storytellers and orchestrate campaigns that define internet culture.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-heading mb-12">Our Core Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 hover:bg-white/5 transition-colors group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-white/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Marketplace UI Mockup */}
      <section className="py-32 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4">Discover Talent</h2>
              <p className="text-white/60">Our proprietary marketplace algorithm.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative glass px-4 py-2 flex items-center gap-3 w-full sm:w-80">
                <Search className="w-5 h-5 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search creators, niches, platforms..." 
                  className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/40"
                  readOnly
                />
              </div>
              <button className="glass px-6 py-3 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <Filter className="w-5 h-5" /> Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator, i) => (
              <motion.div 
                key={creator.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <span className="absolute font-bold text-3xl font-heading opacity-50">{creator.name[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{creator.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-4">{creator.category}</p>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Global</span>
                    <span className="font-bold text-white">{creator.followers}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
              Explore All Creators
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 md:px-8 border-t border-white/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold font-heading mb-16">Campaign Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Nike x MrBeast</h3>
              <p className="text-white/60 mb-8 relative z-10">Global sneaker launch driving massive Gen-Z engagement.</p>
              <div className="flex gap-8 relative z-10">
                <div>
                  <p className="text-4xl font-black text-primary font-heading">45M+</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider">Impressions</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent font-heading">2.1M</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider">Engagement</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Spotify Unwrapped</h3>
              <p className="text-white/60 mb-8 relative z-10">Multi-creator amplification of the annual music wrap up.</p>
              <div className="flex gap-8 relative z-10">
                <div>
                  <p className="text-4xl font-black text-primary font-heading">120M</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider">Reach</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent font-heading">14%</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider">Conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
