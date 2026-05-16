"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Video, PenTool, Mic, Users, Layout, Share2, Star, Quote, TrendingUp, Camera, Zap } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function StudioPage() {
  const { locale } = useParams();

  const services = [
    {
      title: "Ad Production",
      desc: "From big campaigns to quick-turn ads—we do it all. Flexible, scalable, and tailored to your brand—just like we’ve done for the leading name- Zomato.",
      icon: <Video className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Creative Direction",
      desc: "Don’t know where to start? We’ve got you. Our on-site creative experts shape your vision into content that performs.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Editing & Audio",
      desc: "Polished. Powerful. Platform-ready. End-to-end editing with revisions, sound design, and full rights—everything your content needs to stand out.",
      icon: <Mic className="w-6 h-6 text-white" />,
      gradient: "from-[#0B2EA8] to-blue-600"
    },
    {
      title: "Talent Hiring",
      desc: "The right faces for your brand. Access a curated network of creators and performers to bring your story to life.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Styled Sets",
      desc: "Every frame, on-brand. Thoughtfully designed sets with handpicked props to make your content visually stand out.",
      icon: <Layout className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-teal-400"
    },
    {
      title: "Social Media Management",
      desc: "Content is just the start—we make it grow. From posting to performance tracking, we manage your social presence to drive reach, engagement, and results.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-sky-500 to-blue-400"
    },
  ];

  const steps = [
    {
      step: "01",
      title: "SELECT A PACKAGE",
      desc: "Choose from flexible production packages tailored to your content, campaign, and growth goals.",
    },
    {
      step: "02",
      title: "BOOK YOUR SHOOT",
      desc: "Send us your product or brief, and our team handles everything—from creative direction to production.",
    },
    {
      step: "03",
      title: "WATCH YOUR CONTENT PERFORM",
      desc: "Receive platform-ready content designed to grab attention, drive engagement, and grow your brand.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO, TechNova",
      company: "TechNova",
      quote: "Curious Studio's ad production was seamless. They took our concept and delivered a high-converting masterpiece in record time.",
      rating: 5,
      gradient: "from-blue-600 to-sky-400",
      initials: "SJ",
      tagColor: "bg-blue-50 text-blue-700",
    },
    {
      name: "Marcus Aurelius",
      role: "Founder, Apex Brands",
      company: "Apex Brands",
      quote: "The set design and talent they sourced were absolutely phenomenal. It gave our brand an instant premium lift.",
      rating: 5,
      gradient: "from-indigo-600 to-blue-400",
      initials: "MA",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "Global Brands",
      quote: "Their social media management and editing team turns raw footage into viral gold. Simply the best production partner.",
      rating: 5,
      gradient: "from-sky-600 to-cyan-400",
      initials: "PS",
      tagColor: "bg-sky-50 text-sky-700",
    },
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80",
  ];

  const floatingCards = [
    {
      icon: <TrendingUp className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
      label: "Campaign ROI",
      value: "14.5×",
      valueColor: "text-[#0B2EA8]",
      delay: 0.55,
      pos: "left-0 sm:-left-6 top-8 sm:top-14",
      floatClass: "float-card",
    },
    {
      icon: <Camera className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      label: "Ad Films",
      value: "70+",
      valueColor: "text-violet-600",
      delay: 0.65,
      pos: "right-0 sm:-right-4 top-4 sm:top-8",
      floatClass: "float-card-slow",
    },
    {
      icon: <Zap className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-[#0B2EA8] to-blue-500",
      label: "Platform Reach",
      value: "100M+",
      valueColor: "text-[#0B2EA8]",
      delay: 0.75,
      pos: "left-0 sm:-left-6 bottom-8 sm:bottom-14",
      floatClass: "float-card",
    },
  ];

  return (
    <main className="flex-1 w-full bg-white relative overflow-x-hidden pt-24">
      
      {/* ─── HERO SECTION (Split Layout with Original Mobile Frame) ─── */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-white">
        
        {/* Animated Background from Home Page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
          <motion.div 
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)]"
            style={{
              backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.15] bg-[#3B82F6]"
            style={{ width: '45vw', height: '45vw', maxWidth: '600px', maxHeight: '600px', top: '-10%', left: '-10%' }}
            animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.12] bg-[#06B6D4]"
            style={{ width: '35vw', height: '35vw', maxWidth: '500px', maxHeight: '500px', top: '20%', right: '-5%' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 md:pt-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 mb-6 shadow-[0_2px_16px_rgba(11,46,168,0.10)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">Curious Studio</span>
              </motion.div>

              <h1 className="flex flex-col mb-6 w-full font-black font-heading leading-[0.9] tracking-tighter text-[50px] sm:text-[60px] md:text-[76px] lg:text-[84px] uppercase">
                <motion.span
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 pb-2 drop-shadow-sm"
                >
                  LET&apos;S CREATE CONTENT
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="block relative text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 w-fit pb-2"
                >
                  THAT MAKES PEOPLE BUY
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: [0.16,1,0.3,1] }}
                    className="absolute bottom-0 left-0 h-[5px] w-full origin-left rounded-full bg-gradient-to-r from-[#0B2EA8] via-cyan-400 to-sky-300"
                  />
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-2xl font-black text-[#0B2EA8] mb-8 tracking-tight uppercase"
              >
                The one stop shop for all your production needs!!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-white font-black uppercase text-sm tracking-widest overflow-hidden shadow-[0_8px_28px_rgba(11,46,168,0.30)] hover:shadow-[0_16px_48px_rgba(11,46,168,0.45)] hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] hover:bg-right-center transition-all duration-700 group-hover:bg-[position:100%]" />
                  <span className="relative z-10">Book Your Shoot</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Cinematic Studio Monitor UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center items-center relative py-14 perspective-[1200px]"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400/30 via-cyan-300/20 to-violet-400/20 blur-[80px]" />
              </div>

              {/* Floating Cards (Repositioned for horizontal layout) */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.65 }}
                  className={`absolute ${i === 0 ? '-left-8 -top-4' : i === 1 ? '-right-6 -bottom-6' : 'right-0 -top-10'} z-30 ${card.floatClass}`}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-[0_12px_40px_rgba(11,46,168,0.15)] px-4 py-3 flex items-center gap-3 min-w-[160px] transform hover:scale-105 transition-transform cursor-default">
                    <div className={`w-9 h-9 rounded-[14px] ${card.iconBg} flex items-center justify-center shrink-0 shadow-lg`}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{card.label}</p>
                      <p className={`text-sm font-black ${card.valueColor}`}>{card.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Cinematic 16:9 Studio Monitor */}
              <motion.div 
                animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="relative z-10 w-full max-w-[500px] transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow behind monitor */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 blur-xl opacity-40" />
                
                {/* Monitor Bezel */}
                <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_40px_100px_rgba(11,46,168,0.3)] p-3 overflow-hidden">
                  
                  {/* Top UI Bar */}
                  <div className="flex items-center justify-between mb-3 px-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.6)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-2 bg-black/20 rounded-full px-3 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">REC 00:04:23</span>
                    </div>
                  </div>

                  {/* 16:9 Video Area */}
                  <div className="aspect-video rounded-xl overflow-hidden relative bg-[#030918] group cursor-pointer border border-white/10 shadow-inner">
                    <video 
                      autoPlay loop muted playsInline 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                    >
                      <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-27158-large.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-500 border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <Play className="w-6 h-6 text-white ml-1 shadow-sm" />
                      </div>
                    </div>

                    {/* Bottom UI Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <div className="w-full">
                        <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden mb-2">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-1/3"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <div className="flex justify-between text-[8px] font-black text-white/70 uppercase tracking-widest">
                          <span>Studio Cut V1</span>
                          <span>4K Timeline</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-none bg-[#F8FAFF]">
        <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-16 rotate-180 bg-white">
          <path d="M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z" fill="#F8FAFF"/>
        </svg>
      </div>

      {/* ─── VIDEOGRAPHY & HORIZONTAL MOBILE SCREEN ─── */}
      <section className="py-8 md:py-10 bg-[#F8FAFF] relative overflow-hidden flex flex-col justify-center min-h-0 md:min-h-screen">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10 text-center flex-1 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8 shrink-0"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[50px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase mb-3 py-1">
              Videography
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">
              From full-scale ad films to high-ROI video creatives across Instagram, YouTube, TikTok, and social media management—we handle it all, start to finish, so you can focus on growing your brand and revenue.
            </p>
          </motion.div>

          {/* Horizontal Mobile Screen Device */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-3xl lg:max-w-4xl max-h-[30vh] md:max-h-[50vh] aspect-[19.5/9] rounded-[2rem] md:rounded-[3.5rem] border-[6px] md:border-[16px] border-[#1a1a2e] bg-[#1a1a2e] shadow-[0_40px_100px_rgba(11,46,168,0.25)] flex items-center justify-center shrink-0 mb-8"
          >
            {/* Dynamic Island (Horizontal Orientation - left side) */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2 w-[16px] md:w-[24px] h-[30%] bg-[#1a1a2e] rounded-full z-30 shadow-inner flex items-center justify-center">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#2a2a3e]" />
            </div>

            <div className="w-full h-full bg-black rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer">
              <video 
                autoPlay loop muted playsInline preload="auto"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 transition-all duration-500 flex items-center justify-center">
                 <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-75 md:scale-100 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] border border-white/40">
                   <Play className="w-6 h-6 md:w-10 md:h-10 text-white ml-1.5 md:ml-2" />
                 </div>
              </div>

              {/* Floating Tag inside screen */}
              <div className="absolute bottom-6 right-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 hidden md:block">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                   <p className="text-[10px] uppercase tracking-[0.2em] text-white font-black">Horizontal Mobile View</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-16 bg-[#F8FAFF]">
          <path d="M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-24 md:py-36 bg-white relative">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8] mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase mb-6 pb-2">
              Inside Curious Studio
            </h3>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
              Curious Studio sets a new benchmark in quality—every package is built to deliver excellence and includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(11,46,168,0.04)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.12)] transition-all duration-500 border border-slate-100 hover:border-blue-200 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md relative z-10`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black font-heading text-[#0A1A4E] mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 md:py-36 bg-[#0A1A4E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -ml-48 -mb-48" />
        
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400 mb-4">Process</h2>
            <h3 className="text-4xl md:text-5xl lg:text-[70px] font-black font-heading tracking-tighter text-white uppercase mb-6 leading-none">
              How It Works
            </h3>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-4xl mx-auto leading-relaxed">
              Your brand deserves high-performing content with thumb-stopping quality—built to stand out across every platform. Here's how we make it happen.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-y-1/2 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(6,182,212,0.15)] transition-all duration-300 group text-center flex flex-col items-center"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center font-black text-[#0A1A4E] text-2xl shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="mt-8">
                    <h4 className="text-2xl font-black font-heading text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                    <p className="text-white/70 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO (One Scroll, One Line with Random Photos) ─── */}
      <section className="py-10 md:py-14 bg-white relative">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8] mb-4">Our Work</h2>
              <h3 className="text-4xl md:text-6xl lg:text-[70px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase leading-none pb-2">
                Portfolio
              </h3>
            </div>
            <Link href="#" className="hidden md:inline-flex items-center gap-2 text-[#0B2EA8] font-black uppercase tracking-wider text-sm hover:gap-3 transition-all">
              View All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Full width scroll container */}
        <div className="w-full relative z-10">
          <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+1rem)] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {portfolioImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-none w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[650px] aspect-video bg-slate-100 rounded-[2rem] border border-slate-200 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(11,46,168,0.15)] transition-all duration-500 snap-center"
              >
                <img 
                  src={src} 
                  alt={`Portfolio Studio ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A4E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="w-16 h-16 rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 delay-100">
                    <Play className="w-6 h-6 text-[#0B2EA8] ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (Clean White/Blue Theme) ─── */}
      <section className="py-24 md:py-36 bg-[#F8FAFF] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-5"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">Words of Trust</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0A1A4E] uppercase"
            >
              Don't Just Take<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Our Word For It</span>
            </motion.h2>
          </div>
        </div>
        
        <div className="w-full relative z-10">
          <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-[#F8FAFF] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-[#F8FAFF] to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(idx * 0.1, 0.3), duration: 0.6, ease: "easeOut" }}
                className="flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] snap-center group relative flex flex-col bg-white backdrop-blur-md rounded-[32px] border border-blue-100/50 p-8 md:p-10 overflow-hidden
                  shadow-[0_8px_32px_rgba(11,46,168,0.04)]
                  hover:shadow-[0_24px_64px_rgba(11,46,168,0.12)]
                  hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />
                <div className="mb-6">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-[#0B2EA8]/80 text-lg md:text-xl italic leading-relaxed mb-auto grow font-medium tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 pt-6 border-t border-blue-50 flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#0B2EA8] font-black text-base leading-tight truncate tracking-tight">{t.name}</h4>
                    <p className="text-blue-600/60 text-xs font-bold uppercase tracking-wider mt-0.5 truncate">{t.role}</p>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${t.tagColor} border border-current/20 shrink-0`}>
                    ✓ Verified
                  </span>
                </div>
                <div className={`absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 blur-[40px] rounded-full transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
