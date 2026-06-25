"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Quote, Trophy, Flame, Calendar, Award, ExternalLink, Users, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

function ClapperLogoIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sharp square speech bubble */}
      <path 
        d="M8 32H92V72H36L20 88L24 72H8V32Z" 
        fill="#0B2EA8" 
      />
      {/* Three white dots */}
      <circle cx="34" cy="52" r="5.5" fill="white" />
      <circle cx="50" cy="52" r="5.5" fill="white" />
      <circle cx="66" cy="52" r="5.5" fill="white" />
      
      {/* Clapperboard lid */}
      <g transform="translate(4, 0) rotate(-5 46 20)">
        <rect x="8" y="10" width="76" height="15" fill="black" />
        <path d="M18 10L26 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M36 10L44 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M56 10L64 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M74 10L82 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
      </g>
    </svg>
  );
}

function TravelingPinLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sharp square speech bubble with blue border */}
      <path 
        d="M8 32H92V72H36L20 88L24 72H8V32Z" 
        fill="white" 
        stroke="#0B2EA8"
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
      {/* Three blue dots inside speech bubble */}
      <circle cx="34" cy="52" r="5.5" fill="#0B2EA8" />
      <circle cx="50" cy="52" r="5.5" fill="#0B2EA8" />
      <circle cx="66" cy="52" r="5.5" fill="#0B2EA8" />
      
      {/* Clapperboard lid - blue with white stripes */}
      <g transform="translate(4, 0) rotate(-5 46 20)">
        <rect x="8" y="10" width="76" height="15" fill="#0B2EA8" />
        <path d="M18 10L26 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M36 10L44 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M56 10L64 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M74 10L82 25" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
      </g>
    </svg>
  );
}

function DropletPinLogo({ className = "w-12 h-14" }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      {/* Glowing droplet shape path */}
      <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_12px_rgba(14,165,233,0.5)]" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 115 C 40 95, 10 65, 10 40 A 40 40 0 1 1 90 40 C 90 65, 60 95, 50 115 Z"
          fill="#0A1A4E"
          stroke="#0ea5e9"
          strokeWidth="4"
        />
      </svg>
      {/* Round logo image container */}
      <div className="absolute top-[8%] left-[17.5%] w-[65%] h-[55%] rounded-full overflow-hidden bg-white flex items-center justify-center border border-[#0B2EA8]">
        <img src="/images/logo.png" alt="Curious Logo" className="w-[85%] h-[85%] object-contain" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { locale } = useParams();
  const isHindi = locale === "hi";

  const translate = (text: string) => {
    if (!isHindi) return text;
    const map: Record<string, string> = {
      // Timeline
      "A single desk, a shared vision, and a bold beginning. We took our first steps in Noida, driven by the belief that marketing should feel like culture, not ads.":
        "एक साझा मेज, एक साझा दृष्टिकोण और एक साहसी शुरुआत। हमने अपने पहले कदम नोएडा में रखे, इस विश्वास के साथ कि मार्केटिंग संस्कृति जैसी होनी चाहिए, विज्ञापनों जैसी नहीं।",
      "The internet noticed, and the industry followed. From orchestrating campaigns at Sunburn Festival to scaling our creator network, we proved our concept on the big stage.":
        "इंटरनेट ने हमें देखा, और उद्योग ने हमारा अनुसरण किया। सनबर्न फेस्टिवल में अभियानों को व्यवस्थित करने से लेकर हमारे क्रिएटर नेटवर्क को बढ़ाने तक, हमने बड़े मंच पर अपनी अवधारणा साबित की।",
      "The launch of Curious Studio. Partnering with TVF and digital giants, we expanded our creative force and scaled our team to reshape digital storytelling.":
        "क्यूरियस स्टूडियो का शुभारंभ। टीवीएफ (TVF) और डिजिटल दिग्गजों के साथ साझेदारी करते हुए, हमने अपनी रचनात्मक ताकत का विस्तार किया और डिजिटल कहानी को नया आकार देने के लिए अपनी टीम का विस्तार किया।",
      "Unlimiting creativity. Today, we are a scaling ecosystem of creators, brands, and modern campaigns, moving faster than the timeline itself.":
        "असीमित रचनात्मकता। आज, हम रचनाकारों, ब्रांडों और आधुनिक अभियानों का एक स्केलिंग इकोसिस्टम हैं, जो समयरेखा से भी तेजी से आगे बढ़ रहे हैं।",

      // Leaders quotes
      "Aanchal is the creative and operational force behind Curious. She oversees the overall execution of Curious Media, from creator management to studio strategy, ensuring every vertical runs with precision, intent, and heart.":
        "आंचल क्यूरियस के पीछे की रचनात्मक और परिचालन शक्ति हैं। वह क्रिएटर प्रबंधन से लेकर स्टूडियो रणनीति तक, क्यूरियस मीडिया के समग्र निष्पादन की देखरेख करती हैं, यह सुनिश्चित करते हुए कि हर वर्टिकल सटीकता, इरादे और दिल के साथ चले।",
      "Pushpraj is the commercial engine of Curious. He leads the revenue strategy, business development, and partnership deals, turning creative assets into sustainable, scalable business opportunities.":
        "पुष्पराज क्यूरियस के वाणिज्यिक इंजन हैं। वह राजस्व रणनीति, व्यवसाय विकास और साझेदारी सौदों का नेतृत्व करते हैं, रचनात्मक संपत्तियों को स्थायी, स्केलेबल व्यावसायिक अवसरों में बदलते हैं।",

      // Roles
      "Founder, Curious Media": "संस्थापक, क्यूरियस मीडिया",
      "Co-Founder, Curious Media": "सह-संस्थापक, क्यूरियस मीडिया"
    };
    return map[text] || text;
  };

  const [mounted, setMounted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showAwardImage, setShowAwardImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
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

  const journeyTimeline = [
    {
      year: "2023",
      image: "/images/about/about_timeline_2023.png",
      title: "THE SEED",
      subtitle: "ONE IDEA, ONE TABLE",
      desc: "A single desk, a shared vision, and a bold beginning. We took our first steps in Noida, driven by the belief that marketing should feel like culture, not ads.",
      milestones: ["Founded In Noida", "1 Shared Desk", "First Client Campaign"],
      stage: "01",
      metrics: { sys: "OK", speed: "N/A", coord: "STAGE_01" }
    },
    {
      year: "2024",
      image: "/images/about/about_timeline_2024.png",
      title: "THE SPARK",
      subtitle: "THE INTERNET NOTICED US",
      desc: "The internet noticed, and the industry followed. From orchestrating campaigns at Sunburn Festival to scaling our creator network, we proved our concept on the big stage.",
      milestones: ["Sunburn Festival", "Creator Network Expansion", "8+ Retainers"],
      stage: "02",
      metrics: { sys: "ACTIVE", speed: "120 KB/s", coord: "STAGE_02" }
    },
    {
      year: "2025",
      image: "/images/about/about_timeline_2025.png",
      title: "THE ACCELERATION",
      subtitle: "CURIOUS STUDIO LAUNCH",
      desc: "The launch of Curious Studio. Partnering with TVF and digital giants, we expanded our creative force and scaled our team to reshape digital storytelling.",
      milestones: ["Curious Studio Debut", "TVF Collabs", "15+ Core Members"],
      stage: "03",
      metrics: { sys: "SCALING", speed: "2.4 MB/s", coord: "STAGE_03" }
    },
    {
      year: "2026",
      image: "/images/about/about_timeline_2026.png",
      title: "THE HORIZON",
      subtitle: "UNLIMITING CREATIVITY",
      desc: "Unlimiting creativity. Today, we are a scaling ecosystem of creators, brands, and modern campaigns, moving faster than the timeline itself.",
      milestones: ["Relax... You Have Us", "Modern UI Overhaul", "Global Campaigns"],
      stage: "04",
      metrics: { sys: "MAXIMIZED", speed: "100 MB/s", coord: "STAGE_04" }
    }
  ];

  const selectMilestone = (index: number, stopAutoplay = false) => {
    setActiveIndex(index);
    setAutoplayProgress(0);
    if (stopAutoplay) {
      setIsPlaying(false);
    }
  };

  // Keyboard navigation controls
  useEffect(() => {
    if (!mounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        selectMilestone(activeIndex > 0 ? activeIndex - 1 : journeyTimeline.length - 1, false);
      } else if (e.key === "ArrowRight") {
        selectMilestone(activeIndex < journeyTimeline.length - 1 ? activeIndex + 1 : 0, false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted, activeIndex, journeyTimeline.length]);

  // Autoplay loop
  useEffect(() => {
    if (!mounted || !isPlaying || isHovered) return;
    
    // Reset progress to 0 when starting/resuming or changing active index
    setAutoplayProgress(0);
    
    const interval = 50; // ms
    const duration = 3000; // 3 seconds autoplay gap
    const totalSteps = duration / interval; // 60 steps
    const step = 100 / totalSteps; // ~1.67
    
    const timer = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((idx) => (idx + 1) % journeyTimeline.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [mounted, isPlaying, isHovered, activeIndex, journeyTimeline.length]);

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

  const leadership = [
    {
      name: "Aanchal Sharma",
      role: "Founder, Curious Media",
      image: "/images/avatars/aanchal.png",
      linkedin: "https://www.linkedin.com/in/aanchal-sharma-47b701375/",
      quote: "Aanchal is the creative and operational force behind Curious. She oversees the overall execution of Curious Media, from creator management to studio strategy, ensuring every vertical runs with precision, intent, and heart."
    },
    {
      name: "Pushpraj Singh",
      role: "Co-Founder, Curious Media",
      image: "/images/avatars/pushpraj.png",
      linkedin: "https://www.linkedin.com/in/iampushprajsingh/",
      quote: "Pushpraj is the commercial engine of Curious. He leads the revenue strategy, business development, and partnership deals, turning creative assets into sustainable, scalable business opportunities."
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
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">
                {isHindi ? "हमारे बारे में" : "About Us"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[85px] font-black font-heading tracking-tighter leading-[0.9] uppercase mb-8"
            >
              {isHindi ? (
                <>
                  हम बनाते हैं <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">आधुनिक</span> <br />
                  <span className="text-[#0A1A4E]">संस्कृति।</span>
                </>
              ) : (
                <>
                  WE SHAPE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">MODERN</span> <br />
                  <span className="text-[#0A1A4E]">CULTURE.</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-10"
            >
              {isHindi 
                ? "क्यूरियस मीडिया की शुरुआत एक साधारण विश्वास के साथ हुई थी: बेहतरीन मार्केटिंग विज्ञापन नहीं, बल्कि संस्कृति जैसी महसूस होनी चाहिए। रचनाकारों और कहानी कहने के प्रति उत्साही एक छोटी सी टीम के रूप में जो शुरू हुआ था, वह आज एक क्रिएटर-फर्स्ट मार्केटिंग कंपनी बन गया है जो ब्रांडों को बड़े पैमाने पर दर्शकों से जुड़ने में मदद करती है।"
                : "Curious Media started with a simple belief: great marketing should feel like culture, not advertising. What began as a small team passionate about creators and storytelling has grown into a creator-first marketing company helping brands connect with audiences at scale."}
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
                {isHindi ? "समयरेखा देखें" : "Explore Timeline"}
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

      <section 
        id="timeline" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[105vh] bg-[#f8fafc] border-y border-slate-100 py-16 md:py-24 overflow-hidden font-sans"
        style={{
          backgroundImage: "radial-gradient(rgba(11, 46, 168, 0.05) 1.2px, transparent 1.2px), linear-gradient(to right, rgba(11, 46, 168, 0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 46, 168, 0.01) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      >
        <style>{`
          @keyframes dashedFlow {
            to {
              stroke-dashoffset: -24;
            }
          }
          .dashed-center-line {
            animation: dashedFlow 0.9s linear infinite;
          }
          .flash-rec {
            animation: flash 1.5s infinite;
          }
          @keyframes flash {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-100/55 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-50/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1300px] relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B2EA8] font-mono block mb-3">
              {isHindi ? "[ हमारी विरासत ]" : "[ OUR LEGACY ]"}
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-[#0A1A4E] mb-4 leading-none">
              {isHindi ? (
                <>यहाँ से यात्रा <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">शुरू होती है</span></>
              ) : (
                <>HERE THE JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">BEGINS</span></>
              )}
            </h2>
            <p className="text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto mb-6">
              {isHindi 
                ? "एक छोटी सी कैफे बातचीत से शुरू होकर, क्यूरियस मीडिया एक साहसी रचनात्मक शक्ति बन गया जो ऑनलाइन कहानियों को गति देता है।"
                : "Born from a small café conversation, Curious Media grew into a bold creative force shaping how stories move online."}
            </p>
          </div>
          
             {/* Main Desktop/Tablet Grid & Mobile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
            
            {/* Left Column: Photo & Details (visible on all screens, flex layout on desktop/tablet) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#0B2EA8]/85 via-[#06143c]/95 to-[#020512]/98 p-8 md:p-10 border border-blue-500/30 backdrop-blur-xl shadow-[0_24px_80px_rgba(11,46,168,0.45)] shadow-cyan-500/5 rounded-[2.5rem] relative overflow-hidden h-full">
                
                {/* Glowing border sweep line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9]/65 to-transparent pointer-events-none" />

                {/* Cyber blueprint grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-45 pointer-events-none" />

                {/* Neon blue/cyan decorative corner indicators */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400/35 pointer-events-none" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400/35 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400/35 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400/35 pointer-events-none" />

                {/* Ambient card glows */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

                {/* Polaroid Photo on left (md:col-span-5) */}
                <div className="md:col-span-5 flex justify-center items-center relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`photo-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -15 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[240px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] border-2 border-cyan-400/30 bg-slate-950 relative group"
                    >
                      <img 
                        src={journeyTimeline[activeIndex].image} 
                        alt={`Curious Media in ${journeyTimeline[activeIndex].year}`} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 rounded-[2rem] opacity-95 group-hover:opacity-100"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Details on right (md:col-span-7) */}
                <div className="md:col-span-7 flex flex-col justify-center relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`info-${activeIndex}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full flex flex-col items-center text-center md:items-start md:text-left"
                    >
                      {/* Glowing Milestone Tag */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-[10px] font-black uppercase tracking-[0.2em] mb-4 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                        {isHindi ? "क्यूरियस मील का पत्थर" : "Curious Milestone"}
                      </div>
 
                      {/* Year with glowing gradient text */}
                      <h2 className="text-6xl md:text-7xl font-black font-heading bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent leading-none tracking-tighter mb-4 select-none drop-shadow-[0_0_20px_rgba(14,165,233,0.35)]">
                        {journeyTimeline[activeIndex].year}
                      </h2>
                      
                      <p className="text-slate-200 font-medium text-sm md:text-base leading-relaxed max-w-[420px]">
                        {translate(journeyTimeline[activeIndex].desc)}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Sleek bottom progress bar */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-950/50 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 transition-all duration-75 relative"
                      style={{ width: `${autoplayProgress}%` }}
                    >
                      {/* Glowing dot tip */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff] animate-pulse" />
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Right Column: Road Timeline (Vertical on desktop/tablet, transitions to horizontal selector on mobile) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center items-center">
              
              {/* Desktop Road Viewport (hidden on mobile) */}
              <div className="hidden lg:block relative w-full h-[580px] select-none">
                
                {/* SVG Vertical Highway & Blueprint Guidelines */}
                <div className="absolute inset-0 z-0">
                  <svg 
                    viewBox="0 0 200 600" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="roadGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0B2EA8" stopOpacity="0.4" />
                        <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.7" />
                        <stop offset="65%" stopColor="#0ea5e9" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#0B2EA8" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>

                    {/* Vertical Blueprint Guidelines */}
                    <line x1="30" y1="0" x2="30" y2="600" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />
                    <line x1="100" y1="0" x2="100" y2="600" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />
                    <line x1="170" y1="0" x2="170" y2="600" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />
                    
                    {/* Horizontal Blueprint Guidelines */}
                    <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />
                    <line x1="0" y1="220" x2="200" y2="220" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />
                    <line x1="0" y1="380" x2="200" y2="380" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />
                    <line x1="0" y1="540" x2="200" y2="540" stroke="rgba(11, 46, 168, 0.04)" strokeDasharray="4 4" />

                    {/* SVG Vector Path (Vertical curvy road) */}
                    <path 
                      d="M 100,60 C 20,130 10,180 30,220 C 60,280 140,320 170,380 C 190,420 180,480 100,540" 
                      stroke="url(#roadGradientVertical)" 
                      strokeWidth="36" 
                      strokeLinecap="square"
                      opacity="0.25"
                    />
                    <path 
                      d="M 100,60 C 20,130 10,180 30,220 C 60,280 140,320 170,380 C 190,420 180,480 100,540" 
                      stroke="#0A1A4E" 
                      strokeWidth="28" 
                      strokeLinecap="square"
                    />
                    <path 
                      d="M 100,60 C 20,130 10,180 30,220 C 60,280 140,320 170,380 C 190,420 180,480 100,540" 
                      stroke="#ffffff" 
                      strokeWidth="1.5" 
                      strokeLinecap="square"
                      strokeDasharray="8 8"
                      className="dashed-center-line"
                    />
                  </svg>
                </div>

                {/* Pins and Labels relative to vertical road */}
                {(() => {
                  const verticalPinPositions = [
                    { left: "50%", top: "10%", rotate: 0, year: "2023", labelAlign: "right" },
                    { left: "15%", top: "36.7%", rotate: 0, year: "2024", labelAlign: "left" },
                    { left: "85%", top: "63.3%", rotate: 0, year: "2025", labelAlign: "right" },
                    { left: "50%", top: "90%", rotate: 0, year: "2026", labelAlign: "left" },
                  ];
                  return (
                    <>
                      {/* Static Year Labels */}
                      {verticalPinPositions.map((pos, i) => {
                        const isActive = activeIndex === i;
                        return (
                          <div
                            key={`year-label-v-${i}`}
                            className="absolute pointer-events-auto cursor-pointer select-none z-10"
                            style={{ left: pos.left, top: pos.top }}
                            onMouseEnter={() => selectMilestone(i, false)}
                            onClick={() => selectMilestone(i, false)}
                          >
                            <span 
                              className={`absolute font-black font-mono text-xs tracking-wider px-3.5 py-1.5 rounded-full border shadow-lg transition-all duration-300 ${
                                pos.labelAlign === "left"
                                  ? "right-8 -translate-y-1/2"
                                  : "left-8 -translate-y-1/2"
                              } ${
                                isActive 
                                  ? "text-white bg-[#0B2EA8] border-[#0ea5e9] shadow-[#0ea5e9]/20 scale-110" 
                                  : "text-slate-500 bg-white border-slate-200 shadow-md hover:border-[#0ea5e9] hover:text-[#0B2EA8]"
                              }`}
                            >
                              {pos.year}
                            </span>
                          </div>
                        );
                      })}

                      {/* Inactive Pins */}
                      {verticalPinPositions.map((pos, i) => {
                        const isActive = activeIndex === i;
                        if (isActive) return null;
                        return (
                          <div
                            key={`static-pin-v-${i}`}
                            className="absolute z-10 cursor-pointer group pointer-events-auto"
                            style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
                            onMouseEnter={() => selectMilestone(i, false)}
                            onClick={() => selectMilestone(i, false)}
                          >
                            <div className="w-5 h-5 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                              <div className="w-2 h-2 bg-slate-400 group-hover:bg-[#0ea5e9] rounded-full" />
                            </div>
                          </div>
                        );
                      })}

                      {/* Active traveling pin logo */}
                      <motion.div
                        className="absolute z-20 flex flex-col items-center cursor-default pointer-events-auto"
                        animate={{
                          left: verticalPinPositions[activeIndex].left,
                          top: verticalPinPositions[activeIndex].top
                        }}
                        transition={{ type: "spring", stiffness: 90, damping: 15 }}
                      >
                        <div className="relative" style={{ transform: "translate(-50%, -95%)" }}>
                          <DropletPinLogo className="w-14 h-16" />
                          <div className="absolute inset-x-0 bottom-0 top-[30%] rounded-full border-2 border-cyan-400/40 opacity-40 animate-ping pointer-events-none" />
                        </div>
                      </motion.div>
                    </>
                  );
                })()}

              </div>

              {/* Mobile/Tablet Horizontal Selector (visible on lg:hidden, replacing SVG road) */}
              <div className="lg:hidden flex flex-col items-center mt-8 w-full max-w-[340px] mx-auto">
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8] font-mono mb-4">
                  {isHindi ? "मील का पत्थर चुनें" : "Select Milestone"}
                </span>
                <div className="relative w-full flex items-center justify-between px-2">
                  <div className="absolute left-6 right-6 h-[2px] bg-slate-800 top-1/2 -translate-y-1/2 z-0" />
                  {journeyTimeline.map((item, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <button
                        key={`mobile-tab-${i}`}
                        onClick={() => selectMilestone(i, false)}
                        className="relative z-10 flex flex-col items-center focus:outline-none"
                      >
                        <motion.div
                          animate={{
                            scale: isActive ? 1.2 : 1,
                            backgroundColor: isActive ? "#0B2EA8" : "#0f172a",
                            borderColor: isActive ? "#0ea5e9" : "#334155",
                          }}
                          className="w-8 h-8 rounded-full border bg-[#0f172a] flex items-center justify-center shadow-md transition-all duration-300"
                        >
                          {isActive ? (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          ) : (
                            <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                          )}
                        </motion.div>
                        <span className={`text-xs font-black mt-2 transition-colors duration-300 ${
                          isActive ? "text-cyan-400" : "text-slate-500"
                        }`}>
                          {item.year}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom controls removed for clean, automated, and road hover navigation */}

        </div>
      </section>

      {/* ─── MEET THE TEAM (LEADERSHIP BOARD - WHITE & BLUE) ─── */}
      <section className="py-20 md:py-24 bg-white text-[#0A1A4E] border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Users className="w-4 h-4 text-[#0B2EA8]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">
                {isHindi ? "नेतृत्व" : "Leadership"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">
                {isHindi ? "परिणामों के पीछे के लोग" : "The People Behind the Results"}
              </span>
            </h2>
            <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto">
              {isHindi 
                ? "भारत की सबसे तेजी से बढ़ती इन्फ्लुएंसर मार्केटिंग और क्रिएटर-नेतृत्व वाली विकास कंपनियों में से एक के पीछे की टीम।"
                : "The team behind one of India's fastest-growing influencer marketing and creator-led growth companies."}
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
                  {translate(leader.role)}
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
                <div className="relative w-full px-4 py-6 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 font-semibold text-sm leading-relaxed">
                  <Quote className="w-8 h-8 text-[#0B2EA8]/5 absolute top-2 left-2 pointer-events-none" />
                  {translate(leader.quote)}
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
              <span className="text-xs font-black tracking-[0.25em] uppercase text-sky-300">
                {isHindi ? "सम्मान" : "Accolades"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-widest leading-none mb-6">
              {isHindi ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
                  उद्योग से <br className="hidden md:inline" /> मान्यता
                </span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
                  RECOGNITION FROM <br className="hidden md:inline" /> THE INDUSTRY
                </span>
              )}
            </h2>
            <p className="text-base text-white/70 font-semibold leading-relaxed max-w-2xl mx-auto">
              {isHindi 
                ? "उन अभूतपूर्व विचारों और पुरस्कार विजेता रचनात्मक अभियानों का उत्सव मनाना जिन्होंने उद्योग का ध्यान आकर्षित किया।"
                : "Celebrating game-changing ideas and award-winning creative campaigns that captured the industry's attention."}
            </p>
          </div>

          {/* Awards Badge Circle Grid (Monk-E inspired style, keep one circle for now) */}
          <div className="flex justify-center items-center">
            <motion.div
              onMouseEnter={() => setShowAwardImage(true)}
              onMouseLeave={() => setShowAwardImage(false)}
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
                  <h4 className="text-xs font-black uppercase tracking-[0.25em] text-sky-400 mb-2">
                    {isHindi ? "विजेता" : "Winner"}
                  </h4>
                  <p className="text-xl md:text-2xl font-black font-heading leading-tight mb-2 uppercase text-white">
                    {isHindi ? "क्योरियस क्रिएटिव अवार्ड्स" : "Kyoorius Creative Awards"}
                  </p>
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300 font-heading mb-1">2026</span>
                  <p className="text-[10px] text-white/70 font-black uppercase tracking-wider">
                    {isHindi ? "सिक्को लीव // सोनी म्यूजिक" : "Sicko Leave // Sony Music"}
                  </p>
                  <span className="absolute bottom-5 text-[8px] font-black uppercase tracking-widest text-sky-300/60 animate-pulse">
                    {isHindi ? "देखने के लिए होवर या क्लिक करें" : "Hover or Click to View"}
                  </span>
                </div>

                {/* Back Side: Poster Image inside Circle */}
                <div 
                  className="absolute inset-0 rounded-full overflow-hidden border-2 border-sky-400 shadow-2xl bg-black"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <img src="/images/campaigns/sicko-leave.jpeg" alt="Sicko Leave Campaign" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col items-center justify-end pb-8 px-6 text-center">
                    <h4 className="text-sm font-black uppercase tracking-wider text-white">
                      {isHindi ? "सिक्को लीव कैंपेन" : "Sicko Leave Campaign"}
                    </h4>
                    <p className="text-[9px] font-black uppercase tracking-widest text-sky-300 mt-1">
                      {isHindi ? "सोनी म्यूजिक एंटरटेनमेंट" : "Sony Music Entertainment"}
                    </p>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/50 mt-3 border border-white/20 rounded-full px-2 py-0.5">
                      {isHindi ? "वापस पलटने के लिए होवर हटाएं" : "Hover out to flip back"}
                    </span>
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
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[1.25] mb-12">
                {isHindi ? (
                  <>
                    क्या आपमें वह बात <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">है जो चाहिए?</span>
                  </>
                ) : (
                  <>
                    Think you’ve got <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">what it takes?</span>
                  </>
                )}
              </h3>
              
              {/* Shimmer CTA Button */}
              <a
                href="https://www.linkedin.com/company/curiousmediaa/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-[#0A1A4E] font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden hover:scale-105 transition-all shadow-xl hover:shadow-[#0B2EA8]/30"
              >
                {/* White sliding shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#0B2EA8]/5 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">
                  {isHindi ? "टीम में शामिल हों" : "Join the team"}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
