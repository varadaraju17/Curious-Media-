"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Quote, Trophy, Flame, Calendar, Award, ExternalLink, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AboutPage() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollWidth > target.clientWidth) {
      const percent = (target.scrollLeft / (target.scrollWidth - target.clientWidth)) * 100;
      setScrollPercent(percent);
    }
  };

  if (!mounted) return null;

  const galleryPhotos = [
    { url: "/images/campaigns/image1.jpeg" },
    { url: "/images/campaigns/image2.jpeg" },
    { url: "/images/campaigns/image3.jpeg" },
    { url: "/images/campaigns/image4.jpeg" },
  ];

  const journeyTimeline = [
    {
      year: "2023",
      tagline: "One idea. One table. One bold beginning.",
      desc: "Curious Media started as a simple cafe conversation between visionaries who wanted to disrupt the agency landscape. With no initial funding but limitless passion, we built our first foundation card by card."
    },
    {
      year: "2024",
      tagline: "The internet noticed us. Sunburn trusted us.",
      desc: "Our breakthrough year. We scaled our influencer distribution engine PAN India, catching the eye of global promoters and securing the digital mandate for India's biggest music festival: Sunburn."
    },
    {
      year: "2025",
      tagline: "Launching Curious Studio & TVF Collabs",
      desc: "From starting our own state-of-the-art production powerhouse, Curious Studio, to collaborating with content legends like TVF and major internet platforms—2025 permanently changed our scale."
    },
    {
      year: "2026",
      tagline: "Growing faster than the timeline itself.",
      desc: "Now, as an industry pioneer driving high-impact campaigns, Curious Media continues to break barriers, clinching the prestigious Kyoorius Marketing Award 2026."
    }
  ];

  const leadership = [
    {
      name: "Aanchal Sharma",
      role: "Founder — Curious Media",
      image: "/images/avatars/aanchal.png",
      quote: "Curious Media started with nothing fancy — just big ideas, endless conversations, and the hunger to create work people actually remember. Today, every campaign, creator, and project reflects the same energy we started with — raw ambition, creative instinct, and the belief that we’re building something much bigger than an agency."
    },
    {
      name: "Pushpraj Singh",
      role: "Co-Founder — Curious Media",
      image: "/images/avatars/pushpraj.png",
      quote: "Curious Media was built with the vision of turning creativity into real business impact. From our first partnerships to working with some of the biggest names in the creator space, every step has been about growth, trust, and scale. For me, this journey is about building something that lasts — a company that understands culture and shapes what comes next."
    }
  ];

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = 400;
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex-1 w-full bg-white text-[#0A1A4E] overflow-hidden pt-24 font-sans">
      
      {/* ─── HERO & CURIOUS GALLERY SECTION (White/Royal Blue Aesthetic) ─── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50/40 via-white to-white">
        
        {/* Glow Effects (Light Blue) */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Hero Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#0B2EA8] animate-pulse" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">About the Journey</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[85px] font-black font-heading tracking-tighter leading-[0.9] uppercase mb-8"
            >
              WE TURN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">IDEAS INTO</span> <br />
              <span className="text-[#0A1A4E]">INFLUENCE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-10"
            >
              Born from a small café conversation, Curious Media grew into a bold creative force shaping how stories move online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="#timeline"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0A1A4E] text-white font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(10,26,78,0.15)]"
              >
                Explore Timeline
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right: Interactive 3D Photo Stack ("Curious Gallery") */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl flex flex-col items-center">
            
            {/* Gallery Viewport */}
            <div className="relative w-full aspect-[16/10] bg-slate-50 rounded-3xl border border-slate-100 shadow-2xl overflow-hidden mb-8">
              
              {/* Main Active Image with transitions (TEXT AND GRADIENTS REMOVED - PHOTOS ONLY) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={galleryPhotos[activePhoto].url}
                    alt="Curious Gallery Highlight"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Decorative 3D Depth Card (Peeking Card behind active) */}
              <div className="absolute inset-0 rounded-3xl border border-[#0B2EA8]/5 pointer-events-none z-20" />
            </div>

            {/* Scrolling Horizontal Thumbnails Row */}
            <div className="w-full">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 text-center lg:text-left">
                Click to Swap Memories ({galleryPhotos.length} Photos)
              </p>
              
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                {galleryPhotos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`relative shrink-0 w-24 aspect-[16/10] rounded-xl overflow-hidden border transition-all duration-300 ${
                      activePhoto === i
                        ? "border-[#0B2EA8] ring-2 ring-[#0B2EA8]/20 scale-95"
                        : "border-slate-200 opacity-60 hover:opacity-100 hover:scale-95"
                    }`}
                  >
                    <img src={photo.url} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0A1A4E]/10" />
                    <span className="absolute top-1.5 right-1.5 text-[8px] font-black text-white bg-black/60 px-1 rounded-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── ABOUT THE JOURNEY (TIMELINE - WORLD'S BEST & PREMIUM DESIGN) ─── */}
      <section id="timeline" className="py-28 md:py-40 bg-slate-50 relative border-t border-slate-100 overflow-hidden">
        
        {/* Abstract Background Design Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/35 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-cyan-100/25 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Calendar className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[72px] font-black font-heading text-[#0A1A4E] uppercase tracking-tighter mb-6 leading-none">
              THE JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">SO FAR.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              How a single cafe conversation between dreamers evolved into one of India&apos;s fastest-growing digital and creative forces.
            </p>
          </div>

          {/* World-Class Stepped Interactive Timeline Deck */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Absolute Horizontal Laser Connector Track (Solid premium connection) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-blue-200 via-[#0B2EA8] to-cyan-300 pointer-events-none hidden lg:block shadow-[0_0_8px_rgba(11,46,168,0.2)]" />

            {/* Grid display that fits beautifully in one view on desktop, and lists nicely on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
              {journeyTimeline.map((item, index) => {
                // Customized tag colors & symbols to look ultra-elite
                const badges = [
                  { label: "01 / THE FOUNDING", color: "text-blue-600 bg-blue-50 border-blue-100" },
                  { label: "02 / BREAKTHROUGH", color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
                  { label: "03 / THE STUDIO", color: "text-violet-600 bg-violet-50 border-violet-100" },
                  { label: "04 / PRESTIGE", color: "text-cyan-600 bg-cyan-50 border-cyan-100" }
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col pt-16 relative"
                  >
                    {/* Stepped Interactive 3D Node Marker */}
                    <div className="absolute top-0 left-8 lg:left-1/2 lg:-translate-x-1/2 z-20 flex flex-col items-center">
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B2EA8] via-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-lg shadow-[0_8px_20px_rgba(11,46,168,0.25)] border-2 border-white cursor-pointer relative"
                      >
                        <span className="relative z-10 font-heading">{item.year}</span>
                        {/* Dynamic glow aura */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0B2EA8] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none -z-10" />
                      </motion.div>
                      {/* Vertical line indicator linking node to card */}
                      <div className="w-0.5 h-10 bg-gradient-to-b from-[#0B2EA8]/60 to-transparent" />
                    </div>

                    {/* Elite Frosted White Crystal Glass Card */}
                    <div className="bg-white/40 border border-white/60 hover:border-[#0B2EA8]/35 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_15px_45px_rgba(11,46,168,0.02)] hover:shadow-[0_30px_70px_rgba(11,46,168,0.12)] hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between min-h-[340px] relative overflow-hidden group/card transform-gpu">
                      
                      {/* Enormous Watermark outline year backing */}
                      <span className="text-[110px] font-black text-[#0B2EA8]/[0.03] group-hover/card:text-[#0B2EA8]/[0.06] select-none absolute bottom-[-40px] right-[-10px] font-heading leading-none z-0 pointer-events-none transition-colors duration-500">
                        {item.year}
                      </span>

                      {/* Micro gradient line accent */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-cyan-400 opacity-30 group-hover/card:opacity-100 transition-all duration-500" />
                      
                      <div className="relative z-10">
                        {/* Milestone Step Tag */}
                        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest mb-6 shadow-sm ${badges[index].color}`}>
                          {badges[index].label}
                        </div>

                        {/* Heading */}
                        <h3 className="text-xl font-black text-[#0A1A4E] leading-tight mb-4 group-hover/card:text-[#0B2EA8] transition-colors duration-300">
                          {item.tagline}
                        </h3>

                        {/* Description Paragraph */}
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Footer Technical Blueprint Mark */}
                      <div className="relative z-10 text-[9px] font-black uppercase text-slate-400 tracking-[0.25em] pt-4 mt-6 border-t border-slate-100/80">
                        Curious.co // {item.year}
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─── MEET THE TEAM (LEADERSHIP BOARD - WHITE & BLUE) ─── */}
      <section className="py-24 md:py-36 bg-white text-[#0A1A4E] border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Users className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading text-[#0A1A4E] uppercase tracking-tighter mb-4 leading-none">
              MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-blue-600">TEAM.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium italic">
              Driving the creative engine and business impact of Curious Media.
            </p>
          </div>

          {/* Premium Leaders Board Grid (Frosted Glass and Hover Glows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/30 border border-white/60 hover:border-blue-300/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 shadow-[0_15px_45px_rgba(11,46,168,0.02)] hover:shadow-[0_30px_70px_rgba(11,46,168,0.1)] transition-all duration-500 flex flex-col justify-between group transform-gpu"
              >
                <div>
                  
                  {/* Photo container with black-and-white to color transition and scaling */}
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 border border-slate-100/80 bg-slate-50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-all duration-[800ms] filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity duration-500" />
                  </div>

                  {/* Leader details */}
                  <h3 className="text-2xl md:text-3xl font-black text-[#0A1A4E] tracking-tight leading-none group-hover:text-[#0B2EA8] transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-[9px] font-black uppercase tracking-wider text-[#0B2EA8] mt-3 mb-6">
                    {leader.role}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-200/60 mb-6" />

                  {/* Bio quote */}
                  <div className="relative pl-6">
                    <Quote className="absolute left-0 top-0.5 w-4 h-4 text-[#0B2EA8]/30 group-hover:text-[#0B2EA8]/60 transition-colors duration-300 animate-pulse" />
                    <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed italic">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── RECOGNITIONS FROM THE INDUSTRY (KYOORIUS 2026 SPOTLIGHT AWARD) ─── */}
      <section className="py-28 md:py-40 bg-slate-50 text-[#0A1A4E] border-t border-slate-100 relative">
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Award className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Accolades</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading text-[#0A1A4E] uppercase tracking-tighter mb-6 leading-none">
              RECOGNITION FROM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-blue-600">THE INDUSTRY.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Celebrating game-changing ideas and award-winning creative campaigns that captured the internet&apos;s attention.
            </p>
          </div>

          {/* Improved Accolades: Single-Screen Dual-Column Spotlight Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Accolades Metadata */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10"
              >
                {/* Award Trophy Emblem with Ring animation */}
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-blue-50 border border-blue-100/80 shadow-sm" />
                  <Trophy className="w-9 h-9 text-[#0B2EA8] relative z-10 animate-bounce" style={{ animationDuration: "3s" }} />
                </div>

                {/* Award Meta Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase text-[#0B2EA8] tracking-widest mb-6 shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  Kyoorius Creative Award 2026 Winner
                </div>

                {/* Spotlight Titles */}
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1A4E] uppercase tracking-tighter leading-none mb-3">
                  Sicko Leave
                </h4>
                
                <p className="text-xl font-bold text-blue-600/80 tracking-wide mb-6">
                  Sony Music Entertainment India
                </p>

                <p className="text-slate-500 font-semibold leading-relaxed mb-8 max-w-lg">
                  Celebrating game-changing, award-winning creative campaigns that capture the internet&apos;s attention. This landmark campaign set new benchmarks for brand integration and digital storytelling.
                </p>

                {/* Link button to official Kyoorius entry */}
                <a
                  href="https://winners.kyoorius.com/winners/2026/kca/13687-sicko-leave/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-[#0A1A4E] text-white font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:bg-[#0B2EA8] hover:shadow-[0_10px_25px_rgba(11,46,168,0.2)]"
                >
                  <span>View Official Entry</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </motion.div>

              {/* Right Column: Premium Campaign Poster Frame (Custom Photo Place) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5 flex justify-center items-center relative"
              >
                {/* Back decorative glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 via-[#0B2EA8]/5 to-cyan-300/10 blur-[80px]" />
                </div>

                {/* 📸 [PHOTO CONFIGURATION] - PLACE SICKO LEAVE PHOTO AT: public/images/campaigns/sicko-leave.jpeg 📸 */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: -4, rotateX: 3 }}
                  className="relative w-full max-w-[340px] aspect-[4/5] p-3 rounded-[2rem] border border-white/60 bg-white/30 backdrop-blur-2xl shadow-[0_30px_60px_rgba(11,46,168,0.08),inset_0_2px_4px_rgba(255,255,255,0.4)] overflow-hidden transition-all duration-500"
                >
                  <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative bg-[#090b11] border border-slate-200/50 flex items-center justify-center">
                    {/* 1. Blurred background backing (fills the aspect ratio box beautifully) */}
                    <img
                      src="/images/campaigns/sicko-leave.jpeg"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/campaigns/image1.jpeg";
                      }}
                    />

                    {/* 2. Foreground crisp object-contain image (never cropped, fits 100% perfectly) */}
                    <img
                      src="/images/campaigns/sicko-leave.jpeg"
                      alt="Sicko Leave Campaign Poster"
                      className="relative z-10 w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/campaigns/image1.jpeg";
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── PREMIUM FINAL CTA (WORLD'S BEST COSMIC SHIMMER OVERLAY) ─── */}
      <section className="py-28 md:py-36 px-4 md:px-8 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] bg-gradient-to-br from-[#0A1A4E] via-[#0B2EA8] to-indigo-950 border border-white/10 relative overflow-hidden shadow-[0_30px_90px_rgba(11,46,168,0.25)] px-8 py-20 md:p-24 text-center group/cta"
          >
            {/* Ambient sliding nebula particles (Background Animations) */}
            <motion.div 
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-400/20 blur-[100px] pointer-events-none"
              animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none"
              animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Subtle alignment blueprint grid layout */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <Flame className="w-12 h-12 text-cyan-400 mb-8 animate-bounce" />
              <h3 className="text-4xl md:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-none mb-6">
                Ready to turn <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">Your ideas into influence?</span>
              </h3>
              <p className="text-blue-100/70 text-base md:text-lg font-semibold mb-12 leading-relaxed">
                Join forces with India&apos;s most ambitious creator agency and let&apos;s build campaigns the internet will actually remember.
              </p>
              
              {/* Shimmer CTA Button */}
              <Link
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-[#0A1A4E] font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden hover:scale-105 transition-all shadow-xl hover:shadow-[#0B2EA8]/30"
              >
                {/* White sliding shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#0B2EA8]/5 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Let&apos;s Collab</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
