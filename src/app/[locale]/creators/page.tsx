"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { 
  X, 
  MapPin, 
  Search, 
  Filter, 
  Camera, 
  Play, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Mail,
  HelpCircle,
  Zap,
  Rocket,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const CREATORS_DATA = [
  { name: "Content Ka Keeda", slug: "content-ka-keeda", domain: "graphy.com" },
  { name: "Devika Gupta", slug: "devika-gupta", domain: "youtube.com" },
  { name: "Rajat Pawar", slug: "rajat-pawar", domain: "youtube.com" },
  { name: "Bala JI Motion Picture", slug: "balaji-motion-pictures", domain: "balajitelefilms.com" },
  { name: "Bala JI Tele Films", slug: "balaji-telefilms", domain: "balajitelefilms.com" },
  { name: "TVF", slug: "tvf", domain: "theviralfever.com" },
  { name: "Girliyapa", slug: "girliyapa", domain: "girliyapa.com" },
  { name: "Timeliner", slug: "timeliner", domain: "thetimeliner.com" },
  { name: "TSP", slug: "tsp", domain: "thescreenpatti.com" },
  { name: "Realhit", slug: "real-hit", domain: "realhit.in" },
  { name: "Katting", slug: "katting", domain: "katting.com" },
  { name: "The Blunt", slug: "the-blunt", domain: "theblunt.in" },
  { name: "Shushant Sinha", slug: "shushant-sinha", domain: "shushantsinha.com" },
  { name: "Rohita Bamola", slug: "rohita-bamola", domain: "youtube.com" },
  { name: "YUVA", slug: "yuvaa", domain: "yuvaa.co.in" },
  { name: "Content Cube", slug: "content-cube", domain: "contentcube.in" },
  { name: "Defence Detective", slug: "defence-detective", domain: "youtube.com" },
  { name: "Hasley", slug: "hasley", domain: "hasleyindia.com" },
  { name: "Skull Tales", slug: "skull-tales", domain: "youtube.com" },
  { name: "Lifeadda", slug: "lifeadda", domain: "lifeadda.in" },
  { name: "Ironman", slug: "ironman", domain: "ironman.com" },
  { name: "Nagina Sethi", slug: "nagina-sethi", domain: "youtube.com" },
  { name: "Sadhna TV", slug: "sadhna-tv", domain: "sadhnatv.com" },
  { name: "Experiment King", slug: "experiment-king", domain: "experimentking.in" },
  { name: "Khooni Monday", slug: "khooni-monday", domain: "khoonimonday.com" },
  { name: "Scary Pumpkin", slug: "scary-pumpkin", domain: "youtube.com" },
  { name: "Tarun Sharma", slug: "tarun-sharma", domain: "youtube.com" },
  { name: "Aayu and Anu", slug: "aayu-and-anu", domain: "aayuandanu.com" },
  { name: "DD Reacts", slug: "dd-reacts", domain: "youtube.com" },
  { name: "Shorts Ka Keeda", slug: "shorts-ka-keeda", domain: "youtube.com" },
  { name: "Shirin Sewani", slug: "shirin-sewani", domain: "shirinsewani.com" }
];

function CreatorLogoCard({ creator }: { creator: typeof CREATORS_DATA[0] }) {
  const [err, setErr] = useState(0);
  const srcs = [
    `/images/content/${creator.slug}.png`,
    `/images/content/${creator.slug}.svg`,
    `/images/brands/${creator.slug}.png`,
    `https://logo.clearbit.com/${creator.domain}`,
    `https://www.google.com/s2/favicons?domain=${creator.domain}&sz=128`,
  ];

  return (
    <motion.div
      whileHover={{ scale: 0.98, y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative h-[340px] w-[75vw] sm:w-[260px] md:w-[280px] lg:w-[22.5vw] shrink-0 rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(11,46,168,0.12)] bg-white border border-slate-100 flex flex-col mx-2 md:mx-3 cursor-pointer"
    >
      {/* Image Section - Slightly Zoomed Out (Contain) */}
      <div className="relative flex-1 bg-[#F8FAFC] overflow-hidden group-hover:bg-blue-50/50 transition-colors duration-500">
        {err < srcs.length ? (
          <img 
            src={srcs[err]} 
            alt={creator.name} 
            className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
            onError={() => setErr(p => p + 1)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#0A1A4E] font-black text-6xl uppercase tracking-tighter bg-gradient-to-br from-blue-50 to-slate-100">
            {creator.name.substring(0, 2)}
          </div>
        )}
      </div>

      {/* Spotter-Inspired Clean Content Area */}
      <div className="bg-white p-5 md:p-6 flex items-center justify-between z-30 shrink-0 relative overflow-hidden group-hover:bg-[#0B2EA8] transition-colors duration-500">
        <div className="flex flex-col z-10 relative">
          <h3 className="text-xl md:text-2xl font-black text-[#0A1A4E] group-hover:text-white uppercase tracking-tight leading-none transition-colors duration-500 line-clamp-1">
            {creator.name}
          </h3>
        </div>
        <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 group-hover:bg-white/20 text-[#0A1A4E] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg] relative z-10">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}

const WORKFLOW = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Transparent Terms",
    desc: "We evaluate your content’s potential and structure a straightforward partnership. No hidden clauses. No ownership transfer. Your channel stays entirely yours."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Enhanced Monetization",
    desc: "We go beyond basic revenue—unlocking higher CPMs, smarter distribution, and premium brand opportunities to maximize your earnings."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Room to Grow",
    desc: "Over 90% of creators choose to continue with us. Because we don’t just scale content—we grow with you."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Our Involvement",
    desc: "You stay fully in control of your content and creative direction. We focus only on making it earn more."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Already Signed?",
    desc: "No problem. We handle content monetization while your brand deals continue seamlessly with your existing agency."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Simple Revenue Share",
    desc: "We earn only when you earn. A simple, fixed share applies only to the revenue we help generate—nothing more."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Direct Payouts",
    desc: "All earnings come directly to you. Our share is settled monthly through a clean, transparent invoicing process."
  }
];

const FAQS = [
  {
    q: "Are Shorts creators eligible?",
    a: "We love Shorts—but strong long-form YouTube content is essential for our partnerships."
  },
  {
    q: "What about podcasters or Twitch streamers?",
    a: "Absolutely. If you have strong YouTube viewership alongside it, you’re a great fit."
  },
  {
    q: "Which content verticals do you work with?",
    a: "Almost all. From lifestyle to gaming, food to education—if it works on YouTube, we’re in."
  },
  {
    q: "Do creators need rights to their content?",
    a: "Yes, creators must own all rights to their content."
  },
  {
    q: "Not sure if your channel fits?",
    a: "Send it over. We’ll take a look and give you an honest assessment."
  }
];

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 3,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Intl.NumberFormat('en-IN').format(Math.floor(latest))}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

function WorkflowSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
      {/* Left Column: Sticky Title */}
      <div className="md:sticky top-40 py-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 mb-8 shadow-sm">
          <Zap className="w-4 h-4 text-[#0B2EA8]" />
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">The Process</span>
        </div>
        <h2 className="text-4xl md:text-7xl lg:text-[100px] font-black font-heading tracking-tighter leading-[0.85] uppercase">
          HOW IT <br className="hidden lg:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 pb-2">WORKS.</span>
        </h2>
        <p className="mt-6 md:mt-8 text-slate-500 text-lg md:text-2xl font-medium max-w-md leading-relaxed">
          A straightforward partnership designed for maximum growth and complete transparency.
        </p>
      </div>

      {/* Right Column: Vertical List of Steps */}
      <div className="flex flex-col py-10">
        {WORKFLOW.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col gap-4 py-12 border-b border-slate-100 last:border-0"
          >
            <h3 className="text-3xl md:text-4xl font-black text-[#0A1A4E] uppercase tracking-tighter leading-none group-hover:text-[#0B2EA8] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-slate-500 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {FAQS.map((faq, i) => (
        <motion.div 
          key={i} 
          initial={false}
          className={`border-2 rounded-[2rem] bg-white overflow-hidden transition-all duration-300 ${
            openIndex === i 
              ? 'border-[#0B2EA8] shadow-[0_15px_50px_rgba(11,46,168,0.12)] scale-[1.01]' 
              : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50/50'
          }`}
        >
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="text-xl md:text-2xl font-black text-[#0A1A4E] pr-8">{faq.q}</span>
            <span className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
              openIndex === i 
                ? "bg-[#0A1A4E] text-white rotate-45 shadow-lg shadow-blue-900/20" 
                : "bg-blue-50 text-[#0B2EA8] hover:bg-blue-100"
            }`}>
              <X className={`w-6 h-6 transition-transform duration-500 ${openIndex === i ? "" : "rotate-45"}`} />
            </span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="p-6 md:p-8 pt-0 text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function CreatorsPage() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isHovered = false;
    let isTouching = false;
    let currentScroll = scrollContainer.scrollLeft;

    const playScroll = () => {
      if (!isHovered && !isTouching) {
        currentScroll += 1.5; 
        
        if (currentScroll >= scrollContainer.scrollWidth / 2) {
          currentScroll = 0;
        }
        scrollContainer.scrollLeft = currentScroll;
      } else {
        currentScroll = scrollContainer.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(playScroll);
    };

    animationFrameId = requestAnimationFrame(playScroll);

    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;
    const handleTouchStart = () => isTouching = true;
    const handleTouchEnd = () => isTouching = false;
    const handleScroll = () => {
      if (isHovered || isTouching) {
        currentScroll = scrollContainer.scrollLeft;
      }
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <main className="flex-1 w-full bg-white min-h-screen relative overflow-x-hidden pt-24">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Abstract Grid & Glow */}
          <motion.div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 20%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 20%, transparent 100%)"
            }}
          />
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-400/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-300/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200 mb-12 shadow-[0_8px_16px_rgba(11,46,168,0.06)]"
            >
              <TrendingUp className="w-5 h-5 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Creator Capital & Growth</span>
            </motion.div>

            <h1 className="flex flex-col gap-1 md:gap-2 mb-8 md:mb-12 w-full overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-7xl md:text-8xl lg:text-[130px] font-black font-heading tracking-tighter leading-[0.85] text-[#0A1A4E] uppercase drop-shadow-sm"
              >
                WE EARN
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-7xl md:text-8xl lg:text-[130px] font-black font-heading tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 uppercase pb-4"
              >
                WHEN YOU EARN.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto mb-16 font-medium leading-relaxed"
            >
              Curious Media unlocks the full monetization potential of your content library <br className="hidden md:block"/> across platforms, powered by Asia&apos;s largest distribution network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-4 px-14 py-7 text-white font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all hover:scale-[1.03] shadow-[0_15px_30px_rgba(11,46,168,0.30)] hover:shadow-[0_20px_40px_rgba(11,46,168,0.45)] bg-[#0B2EA8]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] hover:bg-right-center transition-all duration-700 group-hover:bg-[position:100%]" />
                <span className="relative z-10">Partner With Us</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CREATORS POSTER GALLERY ─── */}
      <section className="py-32 bg-slate-50/80 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-24 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-6 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B2EA8] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B2EA8]">Our Partners</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tighter text-[#0A1A4E] leading-[0.9] uppercase mt-2">
                Trusted by 30+ <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">Leading Creators.</span>
              </h2>
            </div>
            <div className="text-slate-500 font-bold text-lg max-w-sm md:text-right leading-relaxed">
              Join the elite network of digital creators maximizing their content's potential across platforms.
            </div>
          </div>
        </div>

        {/* Interactive Auto-Marquee Strip */}
        <div className="relative w-full pb-8">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-16 pt-8 px-4"
          >
            <div className="flex w-max pr-8 gap-4">
              {[...CREATORS_DATA, ...CREATORS_DATA].map((creator, i) => (
                <div key={`${creator.slug}-${i}`}>
                  <CreatorLogoCard creator={creator} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVENUE IMPACT SECTION ─── */}
      <section className="py-40 px-4 md:px-8 relative bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-10 shadow-sm">
                  <BarChart3 className="w-4 h-4 text-[#0B2EA8]" />
                  <span className="text-xs font-black tracking-[0.2em] uppercase text-[#0B2EA8]">Total Impact Generated</span>
                </div>

                <div className="relative mb-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                  <h2 className="text-4xl sm:text-6xl md:text-[120px] lg:text-[180px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] to-sky-400 leading-none drop-shadow-sm py-2">
                    1,00,00,00,000
                  </h2>
                  <span className="text-3xl md:text-6xl lg:text-8xl font-black text-[#0B2EA8]">Rs</span>
                </div>
                
                <p className="text-xl md:text-4xl text-slate-400 font-bold max-w-4xl mx-auto leading-tight mb-16 md:mb-24 uppercase tracking-tighter">
                  Through intelligent monetization across platforms and formats for creators and IP owners.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full max-w-5xl mx-auto">
                  <div className="flex flex-col items-center justify-center gap-4 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm">
                    <span className="text-6xl md:text-[120px] font-black font-heading text-[#0A1A4E] leading-none">
                      <AnimatedNumber value={70} suffix="+" />
                    </span>
                    <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8]">
                      Active Channels
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm">
                    <span className="text-6xl md:text-[120px] font-black font-heading text-[#0A1A4E] leading-none">
                      <AnimatedNumber value={30} suffix="+" />
                    </span>
                    <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8]">
                      Global Platforms
                    </span>
                  </div>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ─── STICKY EDITORIAL LAYOUT: HOW IT WORKS ─── */}
      <section className="py-24 md:py-40 px-4 md:px-8 bg-slate-50/50 border-t border-slate-100 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <WorkflowSteps />
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-32 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="w-20 h-20 mx-auto rounded-[2rem] bg-gradient-to-br from-[#0A1A4E] to-[#0B2EA8] flex items-center justify-center shadow-[0_20px_40px_rgba(11,46,168,0.2)] mb-8">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tighter mb-6 text-[#0A1A4E] leading-none uppercase">
              Who We Work With
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-10">
              Got questions about eligibility? Here is everything you need to know about partnering with us.
            </p>
          </div>

          <FAQAccordion />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-40 p-10 md:p-16 lg:p-24 rounded-[3rem] md:rounded-[5rem] bg-gradient-to-br from-[#0A1A4E] via-[#0B2EA8] to-blue-900 text-white relative overflow-hidden shadow-[0_40px_100px_rgba(11,46,168,0.3)] border border-blue-400/20"
          >
            {/* Animated Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-[120px] animate-pulse duration-[10000ms]"></div>
              <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse duration-[7000ms]"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Text Side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-black tracking-[0.25em] uppercase text-blue-50">Partner With Us</span>
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-[90px] font-black font-heading mb-8 tracking-tighter leading-[0.9] uppercase text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                  Ready to unlock <br className="hidden md:block"/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-sky-200">your potential?</span>
                </h3>
                <p className="text-blue-100/90 text-lg md:text-2xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Join India&apos;s leading creators and maximize the value of your content library today.
                </p>
              </div>

              {/* Action Buttons Side */}
              <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mr-0">
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative flex items-center justify-between w-full p-8 rounded-3xl bg-white text-[#0A1A4E] hover:bg-blue-50 transition-all duration-500 shadow-xl hover:scale-[1.03]"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-2xl md:text-3xl uppercase tracking-tight mb-1">Get In Touch</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Start a conversation</span>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-blue-100 text-[#0B2EA8] flex items-center justify-center group-hover:bg-[#0B2EA8] group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <a 
                  href="mailto:info@curiousmedia.in"
                  className="group flex items-center gap-6 w-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-blue-200 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-blue-200/70 uppercase tracking-widest mb-1">Email Us Directly</span>
                    <span className="font-bold text-xl md:text-2xl text-white break-all">info@curiousmedia.in</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
