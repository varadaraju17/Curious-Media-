"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Video, PenTool, Mic, Users, Layout, Share2, Star, Quote } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function StudioPage() {
  const { locale } = useParams();

  const services = [
    {
      title: "Ad Production",
      desc: "From big campaigns to quick-turn ads—we do it all. Flexible, scalable, and tailored to your brand—just like we’ve done for the leading name- Zomato.",
      icon: <Video className="w-6 h-6 text-[#0B2EA8]" />,
    },
    {
      title: "Creative Direction",
      desc: "Don’t know where to start? We’ve got you. Our on-site creative experts shape your vision into content that performs.",
      icon: <PenTool className="w-6 h-6 text-[#0B2EA8]" />,
    },
    {
      title: "Editing & Audio",
      desc: "Polished. Powerful. Platform-ready. End-to-end editing with revisions, sound design, and full rights—everything your content needs to stand out.",
      icon: <Mic className="w-6 h-6 text-[#0B2EA8]" />,
    },
    {
      title: "Talent Hiring",
      desc: "The right faces for your brand. Access a curated network of creators and performers to bring your story to life.",
      icon: <Users className="w-6 h-6 text-[#0B2EA8]" />,
    },
    {
      title: "Styled Sets",
      desc: "Every frame, on-brand. Thoughtfully designed sets with handpicked props to make your content visually stand out.",
      icon: <Layout className="w-6 h-6 text-[#0B2EA8]" />,
    },
    {
      title: "Social Media Management",
      desc: "Content is just the start—we make it grow. From posting to performance tracking, we manage your social presence to drive reach, engagement, and results.",
      icon: <Share2 className="w-6 h-6 text-[#0B2EA8]" />,
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
      quote: "Curious Media completely transformed our creator monetization strategy. Their analytics and distribution network helped us 5X our engagement in just 3 months.",
      rating: 5,
      gradient: "from-blue-600 to-sky-400",
      initials: "SJ",
      tagColor: "bg-blue-50 text-blue-700",
    },
    {
      name: "Marcus Aurelius",
      role: "Lead Creator, MA Vlogs",
      company: "MA Vlogs",
      quote: "Before Curious, I didn't know how to scale beyond simple sponsorships. Now, I have a dedicated ecosystem that treats my brand like a real business.",
      rating: 5,
      gradient: "from-indigo-600 to-blue-400",
      initials: "MA",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
    {
      name: "Priya Sharma",
      role: "VP Marketing, Global Brands",
      company: "Global Brands",
      quote: "The sheer premium quality and seamless execution Curious brought to our campaign was unmatched. They handle creators with incredible precision and deliver beyond expectations.",
      rating: 5,
      gradient: "from-sky-600 to-cyan-400",
      initials: "PS",
      tagColor: "bg-sky-50 text-sky-700",
    },
  ];

  return (
    <main className="flex-1 w-full bg-white relative overflow-x-hidden pt-24">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Abstract Grid & Glow */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-blue-300/20 to-transparent blur-[150px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-300/20 to-transparent blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-200/50 mb-8 shadow-[0_8px_30px_rgba(11,46,168,0.06)]"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-3 h-3 rounded-full bg-blue-500 animate-ping opacity-50" />
                  <span className="relative w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Curious Studio</span>
              </motion.div>

              <h1 className="flex flex-col mb-6 w-full overflow-hidden gap-1 lg:gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 60, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[85px] font-black font-heading tracking-tighter leading-[0.85] text-[#0A1A4E] uppercase drop-shadow-sm"
                >
                  LET&apos;S CREATE CONTENT
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 60, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[85px] font-black font-heading tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 uppercase pb-4"
                >
                  THAT MAKES PEOPLE BUY
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-3xl font-bold text-[#0B2EA8] mb-6 tracking-tight"
              >
                The one stop shop for all your production needs!!
              </motion.p>
              

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative inline-flex items-center gap-4 px-10 py-5 text-white font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] bg-[#0A1A4E] shadow-[0_20px_40px_rgba(10,26,78,0.25)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.4)] hover:bg-[#0B2EA8]"
                >
                  <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-500">Book Your Shoot</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-[#0A1A4E] transition-all duration-500">
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Mobile Screen Video */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] mx-auto lg:ml-auto lg:mr-0 aspect-[9/19] rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-100 to-slate-200 shadow-2xl overflow-hidden shadow-[#0B2EA8]/10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-200 rounded-b-3xl z-20" />
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                <video 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-27158-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-2">
                      <Play className="w-3 h-3 text-cyan-300" />
                      <span className="text-[9px] font-black tracking-widest uppercase text-white">Video</span>
                    </div>
                    <p className="font-bold text-sm leading-tight">What we do in Studio</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VIDEOGRAPHY SECTION ─── */}
      <section className="py-24 md:py-36 bg-white relative border-t border-slate-100 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Video className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[70px] font-black font-heading tracking-tighter text-[#0A1A4E] uppercase mb-8">
              Videography
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 font-medium max-w-5xl mx-auto leading-relaxed">
              From full-scale ad films to high-ROI video creatives across Instagram, YouTube, TikTok, and social media management—we handle it all, start to finish, so you can focus on growing your brand and revenue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl mx-auto aspect-video rounded-[2rem] md:rounded-[3rem] p-3 md:p-5 bg-gradient-to-b from-slate-100 to-slate-200 shadow-[0_40px_100px_rgba(11,46,168,0.15)] overflow-hidden"
          >
            <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer">
              <video 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-27158-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-500 shadow-2xl border border-white/30">
                   <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-24 md:py-32 bg-slate-50/50 relative border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8] mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tighter text-[#0A1A4E] uppercase mb-6">
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
                className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(11,46,168,0.04)] hover:shadow-[0_20px_40px_rgba(11,46,168,0.08)] transition-all duration-500 border border-slate-100 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0B2EA8] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-[#0A1A4E] mb-3 group-hover:text-[#0B2EA8] transition-colors">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 md:py-32 bg-[#0A1A4E] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none -ml-48 -mb-48" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300 mb-4">How It Works</h2>
            <p className="text-xl md:text-3xl text-white font-medium max-w-4xl mx-auto leading-relaxed">
              Your brand deserves high-performing content with thumb-stopping quality—built to stand out across every platform. Here&apos;s how we make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-y-1/2" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0B2EA8] rounded-xl flex items-center justify-center font-black text-white text-xl border-4 border-[#0A1A4E] shadow-xl group-hover:scale-110 group-hover:bg-cyan-500 transition-all duration-300">
                  {step.step}
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl md:text-2xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-blue-200/70 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-[#0A1A4E] uppercase">
              Portfolio
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-[4/5] bg-slate-100 rounded-3xl border border-slate-200 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (Copied UI) ─── */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
          {/* Header */}
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
              transition={{ delay: 0.06 }}
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
            >
              Don't Just Take<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Our Word For It</span>
            </motion.h2>
          </div>
        </div>
        
        {/* Horizontal Scroll Testimonials */}
        <div className="w-full relative z-10">
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(idx * 0.1, 0.3), duration: 0.6, ease: "easeOut" }}
                className="flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] snap-center group relative flex flex-col bg-white/80 backdrop-blur-md rounded-[32px] border border-blue-100/50 p-8 md:p-10 overflow-hidden
                  shadow-[0_8px_32px_rgba(11,46,168,0.04)]
                  hover:shadow-[0_24px_64px_rgba(11,46,168,0.12)]
                  hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />

                {/* Quote icon */}
                <div className="mb-6">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-[#0B2EA8]/80 text-lg md:text-xl italic leading-relaxed mb-auto grow font-medium tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
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

                {/* Hover glow */}
                <div className={`absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 blur-[40px] rounded-full transition-opacity duration-500`} />
              </motion.div>
            ))}
            <div className="flex-none w-4 md:w-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
