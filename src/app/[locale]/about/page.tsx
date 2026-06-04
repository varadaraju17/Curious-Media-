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
  const [showAwardImage, setShowAwardImage] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, [activePhoto, mounted]);

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
    { url: "/images/campaigns/image5.jpeg" },
  ];

  const journeyTimeline = [
    {
      year: "2023",
      image: "/images/about/about_timeline_2023.png",
      desc: "One idea. One table. One bold beginning."
    },
    {
      year: "2024",
      image: "/images/about/about_timeline_2024.png",
      desc: "The internet noticed us. Sunburn trusted us."
    },
    {
      year: "2025",
      image: "/images/about/about_timeline_2025.png",
      desc: "From launching Curious Studio to collaborating with TVF and internet giants — 2025 changed our scale forever."
    },
    {
      year: "2026",
      image: "/images/about/about_timeline_2026.png",
      desc: "The journey is growing faster than the timeline itself."
    }
  ];

  const leadership = [
    {
      name: "Aanchal Sharma",
      role: "Founder, Curious Media",
      image: "/images/avatars/aanchal.png",
      linkedin: "https://www.linkedin.com/in/aanchal-sharma-47b701375/",
      quote: "Every campaign starts with one question: how do we create something people will actually remember?"
    },
    {
      name: "Pushpraj Singh",
      role: "Co-Founder, Curious Media",
      image: "/images/avatars/pushpraj.png",
      linkedin: "https://www.linkedin.com/in/iampushprajsingh/",
      quote: "We believe the best campaigns feel natural to audiences while delivering measurable results for brands."
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
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">About Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[85px] font-black font-heading tracking-tighter leading-[0.9] uppercase mb-8"
            >
              WE SHAPE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">MODERN</span> <br />
              <span className="text-[#0A1A4E]">CULTURE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-10"
            >
              Curious Media started with a simple belief: great marketing should feel like culture, not advertising. What began as a small team passionate about creators and storytelling has grown into a creator-first marketing company helping brands connect with audiences at scale.
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
            
            {/* Gallery Viewport (Bundle of Cards Stack) */}
            <div className="relative w-full aspect-[16/10] mb-8 select-none">
              {galleryPhotos.map((photo, i) => {
                // Calculate the relative index in the stack
                const relativeIndex = (i - activePhoto + galleryPhotos.length) % galleryPhotos.length;
                const isTop = relativeIndex === 0;

                return (
                  <motion.div
                    key={i}
                    style={{
                      transformOrigin: "bottom center",
                    }}
                    animate={{
                      scale: isTop ? 1 : 1 - relativeIndex * 0.05,
                      y: relativeIndex * 14,
                      rotate: isTop ? 0 : (relativeIndex % 2 === 0 ? -3 : 3) * relativeIndex,
                      opacity: relativeIndex > 2 ? 0 : 1,
                      zIndex: galleryPhotos.length - relativeIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    onClick={() => {
                      setActivePhoto((prev) => (prev + 1) % galleryPhotos.length);
                    }}
                    className="absolute inset-0 rounded-3xl overflow-hidden cursor-pointer shadow-2xl border bg-white border-slate-100/50 hover:scale-[1.01] transition-transform duration-300"
                  >
                    <img
                      src={photo.url}
                      alt="Curious Gallery Stack Item"
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    
                    {/* Visual stack shadows */}
                    <div className="absolute inset-0 bg-[#0A1A4E]/[0.02] pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─── ABOUT THE JOURNEY (TIMELINE - WORLD'S BEST & PREMIUM DESIGN) ─── */}
      <section id="timeline" className="py-20 md:py-28 bg-white relative border-t border-slate-100 overflow-hidden">
        
        {/* Abstract Background Design Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/35 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-cyan-100/25 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-36">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Calendar className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading text-[#0A1A4E] uppercase tracking-tighter mb-4 leading-none">
              Here the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">journey begins</span>
            </h2>
            <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto">
              Born from a small café conversation, Curious Media grew into a bold creative force shaping how stories move online.
            </p>
          </div>

          {/* World-Class Stepped Interactive Timeline Deck */}
          <div className="relative max-w-6xl mx-auto min-h-[640px] hidden lg:flex items-center">
            
            {/* Absolute Horizontal Laser Connector Track */}
            <div className="absolute top-1/2 left-[5%] right-[5%] h-1 bg-gradient-to-r from-blue-300 via-[#0B2EA8] to-sky-400 -translate-y-1/2 rounded-full" />

            <div className="grid grid-cols-4 gap-6 w-full relative z-10">
              {journeyTimeline.map((item, i) => {
                const isTop = i % 2 === 0;
                return (
                  <div key={i} className="flex flex-col items-center relative justify-center min-h-[580px]">
                    {/* Dot on the central line */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#0B2EA8] z-20 shadow-[0_0_12px_rgba(11,46,168,0.4)]" />

                    {isTop ? (
                      <div className="absolute bottom-1/2 flex flex-col items-center mb-6 w-full">
                        <motion.div 
                          whileHover={{ y: -6, scale: 1.03 }}
                          className="bg-white rounded-3xl border-2 border-slate-100 shadow-[0_15px_45px_rgba(11,46,168,0.08)] p-5 w-full hover:border-sky-400 transition-all duration-300"
                        >
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                            <img src={item.image} alt={item.year} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-2xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400 block mb-1">{item.year}</span>
                          <p className="text-slate-600 font-semibold text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                        <div className="w-0.5 h-12 bg-gradient-to-b from-[#0B2EA8]/30 to-[#0B2EA8] mt-4" />
                      </div>
                    ) : (
                      <div className="absolute top-1/2 flex flex-col items-center mt-6 w-full">
                        <div className="w-0.5 h-12 bg-gradient-to-b from-[#0B2EA8] to-[#0B2EA8]/30 mb-4" />
                        <motion.div 
                          whileHover={{ y: 6, scale: 1.03 }}
                          className="bg-white rounded-3xl border-2 border-slate-100 shadow-[0_15px_45px_rgba(11,46,168,0.08)] p-5 w-full hover:border-sky-400 transition-all duration-300"
                        >
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                            <img src={item.image} alt={item.year} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-2xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400 block mb-1">{item.year}</span>
                          <p className="text-slate-600 font-semibold text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="relative max-w-lg mx-auto py-8 lg:hidden flex flex-col gap-8">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-[#0B2EA8] to-sky-400 rounded-full" />

            {journeyTimeline.map((item, i) => (
              <div key={i} className="flex gap-8 relative pl-12">
                {/* Dot */}
                <div className="absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#0B2EA8] z-20 shadow-[0_0_8px_rgba(11,46,168,0.4)]" />

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl border-2 border-slate-100 shadow-[0_10px_30px_rgba(10,26,78,0.06)] p-5 w-full hover:border-sky-400 transition-all duration-300"
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                    <img src={item.image} alt={item.year} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-2xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400 block mb-1">{item.year}</span>
                  <p className="text-slate-600 font-semibold text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── MEET THE TEAM (LEADERSHIP BOARD - WHITE & BLUE) ─── */}
      <section className="py-20 md:py-24 bg-white text-[#0A1A4E] border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Users className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">The People Behind the Results</span>
            </h2>
            <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto">
              The team behind one of India&apos;s fastest-growing influencer marketing and creator-led growth companies.
            </p>
          </div>

          {/* Premium Leaders Board Grid (Square Photos & LinkedIn Buttons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[2.5rem] border-2 border-slate-100/60 p-6 md:p-10 shadow-[0_20px_50px_rgba(11,46,168,0.06)] hover:border-sky-400 hover:shadow-[0_30px_70px_rgba(11,46,168,0.12)] transition-all duration-500 flex flex-col items-center text-center group"
              >
                {/* 1. Photo in small square frame */}
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] overflow-hidden mb-6 border-4 border-slate-50 shadow-xl group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>

                {/* 2. Name (Gradient Text) */}
                <h3 className="text-2xl md:text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-500 leading-tight mb-1">
                  {leader.name}
                </h3>

                {/* 3. Title */}
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                  {leader.role}
                </span>

                {/* 4. LinkedIn Button - below the profile name */}
                <a 
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0B2EA8] to-sky-500 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 mb-6 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95 hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>

                {/* 5. Message */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#0B2EA8] to-sky-400 rounded-full mb-6" />
                <div className="relative w-full px-4 py-6 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 font-semibold text-sm leading-relaxed italic">
                  <Quote className="w-8 h-8 text-[#0B2EA8]/5 absolute top-2 left-2 pointer-events-none" />
                  &ldquo;{leader.quote}&rdquo;
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── RECOGNITIONS FROM THE INDUSTRY (KYOORIUS 2026 SPOTLIGHT AWARD - BLUE TO SKYBLUE GRADIENT BG) ─── */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#0B2EA8] via-[#0A1A4E] to-sky-900 text-white relative overflow-hidden">
        {/* Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
              <Award className="w-4 h-4 text-sky-300" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-sky-300">Accolades</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-widest leading-none mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
                RECOGNITION FROM <br className="hidden md:inline" /> THE INDUSTRY
              </span>
            </h2>
            <p className="text-base text-white/70 font-semibold leading-relaxed max-w-2xl mx-auto">
              Celebrating game-changing ideas and award-winning creative campaigns that captured the industry&apos;s attention.
            </p>
          </div>

          {/* Awards Badge Circle Grid (Monk-E inspired style, keep one circle for now) */}
          <div className="flex justify-center items-center">
            <motion.div
              onClick={() => setShowAwardImage(!showAwardImage)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative group cursor-pointer select-none"
              style={{ perspective: 1000 }}
            >
              {/* Outer spinning border ring */}
              <div className="absolute inset-[-16px] rounded-full border-2 border-dashed border-sky-300/40 group-hover:rotate-180 transition-transform duration-[12000ms] ease-linear" />
              
              {/* Inner glowing circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 blur-2xl opacity-25 group-hover:opacity-45 transition-opacity duration-500" />
              
              {/* 3D Flip Container */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: showAwardImage ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Front Side: Kyoorius Text Detail Stamp */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0B2EA8]/80 to-[#0A1A4E]/90 border-2 border-white/20 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center p-8"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Trophy className="w-12 h-12 text-sky-300 mb-4 group-hover:animate-bounce" />
                  <h4 className="text-xs font-black uppercase tracking-[0.25em] text-sky-400 mb-2">Winner</h4>
                  <p className="text-xl md:text-2xl font-black font-heading leading-tight mb-2 uppercase text-white">Kyoorius Creative Awards</p>
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300 font-heading mb-1">2026</span>
                  <p className="text-[10px] text-white/70 font-black uppercase tracking-wider">Sicko Leave // Sony Music</p>
                  <span className="absolute bottom-5 text-[8px] font-black uppercase tracking-widest text-sky-300/60 animate-pulse">Click to View Visual</span>
                </div>

                {/* Back Side: Poster Image inside Circle */}
                <div 
                  className="absolute inset-0 rounded-full overflow-hidden border-2 border-sky-400 shadow-2xl bg-black"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <img src="/images/campaigns/sicko-leave.jpeg" alt="Sicko Leave Campaign" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col items-center justify-end pb-8 px-6 text-center">
                    <h4 className="text-sm font-black uppercase tracking-wider text-white">Sicko Leave Campaign</h4>
                    <p className="text-[9px] font-black uppercase tracking-widest text-sky-300 mt-1">Sony Music Entertainment</p>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/50 mt-3 border border-white/20 rounded-full px-2 py-0.5">Click to flip back</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── PREMIUM FINAL CTA (WORLD'S BEST COSMIC SHIMMER OVERLAY - JOIN THE TEAM) ─── */}
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
              <span className="text-4xl md:text-5xl mb-6 block">🎯</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-none mb-6">
                Think you’ve got <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">what it takes?</span>
              </h3>
              <p className="text-blue-100/70 text-base md:text-lg font-semibold mb-12 leading-relaxed">
                We&apos;re always looking for amazing people to join our journey.
              </p>
              
              {/* Shimmer CTA Button */}
              <Link
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-[#0A1A4E] font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden hover:scale-105 transition-all shadow-xl hover:shadow-[#0B2EA8]/30"
              >
                {/* White sliding shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#0B2EA8]/5 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Join the team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
