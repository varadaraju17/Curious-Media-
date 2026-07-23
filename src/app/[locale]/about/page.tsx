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
        <img src="/images/logo.webp" alt="Curious Logo" className="w-[85%] h-[85%] object-contain" />
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

  const selectMilestone = (index: number, scrollIntoView = true) => {
    setActiveIndex(index);
    setAutoplayProgress(0);
    setIsPlaying(false);
    if (scrollIntoView) {
      const el = document.getElementById("timeline-row-" + index);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  // Keyboard navigation controls
  useEffect(() => {
    if (!mounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        selectMilestone(activeIndex > 0 ? activeIndex - 1 : journeyTimeline.length - 1, true);
      } else if (e.key === "ArrowRight") {
        selectMilestone(activeIndex < journeyTimeline.length - 1 ? activeIndex + 1 : 0, true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted, activeIndex, journeyTimeline.length]);

  // Scroll Spy to automatically activate milestones as user scrolls
  useEffect(() => {
    if (!mounted) return;

    const handleScrollSpy = () => {
      const threshold = window.innerHeight * 0.45; // 45% from top of viewport
      let activeIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < journeyTimeline.length; i++) {
        const el = document.getElementById("timeline-row-" + i);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - threshold);
          if (rect.top < threshold + 150 && distance < minDistance) {
            minDistance = distance;
            activeIdx = i;
          }
        }
      }

      // Only update if index has changed and timeline section is visible
      const timelineSection = document.getElementById("timeline");
      if (timelineSection) {
        const secRect = timelineSection.getBoundingClientRect();
        if (secRect.top < window.innerHeight && secRect.bottom > 0) {
          setActiveIndex(activeIdx);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // Run once on load

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [mounted, journeyTimeline.length]);

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
              className="text-5xl md:text-5xl lg:text-[60px] font-black font-heading tracking-tighter leading-[0.9] uppercase mb-8"
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
        className="relative py-24 md:py-36 bg-white border-y border-slate-100 overflow-hidden"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1100px] relative z-10">

          {/* Section Header */}
          <div className="text-center mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-5"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">
                {isHindi ? "हमारी विरासत" : "Our Legacy"}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
            >
              {isHindi ? "यहाँ से यात्रा" : "HERE THE"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">
                {isHindi ? "शुरू होती है" : "JOURNEY BEGINS"}
              </span>
            </motion.h2>
          </div>

          {/* Vertical Timeline */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* Center vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden md:block" />

            <div className="flex flex-col gap-0">
              {journeyTimeline.map((item, i) => {
                const isLeft = i % 2 === 0;   // 2023 left, 2025 left
                const isActive = activeIndex === i;

                return (
                  <div
                    id={"timeline-row-" + i}
                    key={item.year}
                    className="relative"
                  >
                    {/* Desktop layout — alternating sides */}
                    <div className="hidden md:grid grid-cols-2 gap-0 items-start min-h-[380px]">

                      {/* LEFT SIDE */}
                      <div className="flex justify-end pr-8 md:pr-12 py-10">
                        {isLeft ? (
                          /* Year label on left side */
                          <button
                            onClick={() => selectMilestone(i, true)}
                            className="group flex flex-col items-end gap-2 focus:outline-none"
                          >
                            <span className={`font-black font-heading tracking-tighter transition-all duration-300 leading-none select-none ${
                              isActive
                                ? "text-[52px] md:text-[54px] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400"
                                : "text-[56px] md:text-[52px] text-[#0A1A4E]/20 group-hover:text-[#0A1A4E]/40"
                            }`}>
                              {item.year}
                            </span>
                            {!isActive && (
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2EA8]/40 group-hover:text-[#0B2EA8]/70 transition-colors">
                                {isHindi ? "क्लिक करें" : "Click to view"}
                              </span>
                            )}
                          </button>
                        ) : (
                          /* Timeline Card always rendered for layout stability, animated with opacity/scale */
                          <motion.div
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1 : 0.96,
                              y: isActive ? 0 : 15,
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className={`w-full max-w-[420px] rounded-[2rem] bg-white border border-slate-100 p-6 shadow-[0_20px_50px_rgba(11,46,168,0.06)] flex flex-col gap-4 text-left ${
                              isActive ? "pointer-events-auto" : "pointer-events-none"
                            }`}
                          >
                            {/* Photo */}
                            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                              <img
                                src={item.image}
                                alt={`Curious Media ${item.year}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                                }}
                              />
                            </div>
                            {/* Details */}
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                                {item.subtitle}
                              </span>
                              <h4 className="text-xl font-black text-[#0A1A4E] uppercase tracking-tight">
                                {item.title}
                              </h4>
                              <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                                {translate(item.desc)}
                              </p>
                              {/* Milestones list */}
                              <div className="flex flex-wrap gap-2 mt-3">
                                {item.milestones.map((ms, idx) => (
                                  <span 
                                    key={idx} 
                                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-50 text-[#0B2EA8] border border-blue-100/30"
                                  >
                                    {ms}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Center dot: Vertically anchored relative to year label center */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-[84px] -translate-y-1/2 z-10">
                        <motion.div
                          animate={{
                            scale: isActive ? 1.4 : 1,
                            backgroundColor: isActive ? "#0B2EA8" : "#CBD5E1",
                          }}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-400"
                        />
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-[#0B2EA8]/30 animate-ping" />
                        )}
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="flex justify-start pl-8 md:pl-12 py-10">
                        {!isLeft ? (
                          /* Year label on right side */
                          <button
                            onClick={() => selectMilestone(i, true)}
                            className="group flex flex-col items-start gap-2 focus:outline-none"
                          >
                            <span className={`font-black font-heading tracking-tighter transition-all duration-300 leading-none select-none ${
                              isActive
                                ? "text-[52px] md:text-[54px] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400"
                                : "text-[56px] md:text-[52px] text-[#0A1A4E]/20 group-hover:text-[#0A1A4E]/40"
                            }`}>
                              {item.year}
                            </span>
                            {!isActive && (
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2EA8]/40 group-hover:text-[#0B2EA8]/70 transition-colors">
                                {isHindi ? "क्लिक करें" : "Click to view"}
                              </span>
                            )}
                          </button>
                        ) : (
                          /* Timeline Card always rendered for layout stability, animated with opacity/scale */
                          <motion.div
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1 : 0.96,
                              y: isActive ? 0 : 15,
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className={`w-full max-w-[420px] rounded-[2rem] bg-white border border-slate-100 p-6 shadow-[0_20px_50px_rgba(11,46,168,0.06)] flex flex-col gap-4 text-left ${
                              isActive ? "pointer-events-auto" : "pointer-events-none"
                            }`}
                          >
                            {/* Photo */}
                            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                              <img
                                src={item.image}
                                alt={`Curious Media ${item.year}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                                }}
                              />
                            </div>
                            {/* Details */}
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                                {item.subtitle}
                              </span>
                              <h4 className="text-xl font-black text-[#0A1A4E] uppercase tracking-tight">
                                {item.title}
                              </h4>
                              <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                                {translate(item.desc)}
                              </p>
                              {/* Milestones list */}
                              <div className="flex flex-wrap gap-2 mt-3">
                                {item.milestones.map((ms, idx) => (
                                  <span 
                                    key={idx} 
                                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-50 text-[#0B2EA8] border border-blue-100/30"
                                  >
                                    {ms}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Mobile layout - stacked single column with opacity transition, no layout shift */}
                    <div className="md:hidden flex flex-col items-center py-6 gap-4">
                      <button
                        onClick={() => selectMilestone(i, true)}
                        className="focus:outline-none"
                      >
                        <span className={`font-black font-heading tracking-tighter transition-all duration-300 leading-none block text-center ${
                          isActive
                            ? "text-[64px] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400"
                            : "text-[48px] text-[#0A1A4E]/25"
                        }`}>
                          {item.year}
                        </span>
                      </button>

                      {/* Mobile: vertical connector dot */}
                      <div className="relative">
                        <motion.div
                          animate={{ scale: isActive ? 1.3 : 1, backgroundColor: isActive ? "#0B2EA8" : "#CBD5E1" }}
                          className="w-3 h-3 rounded-full border-2 border-white shadow"
                        />
                      </div>

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                          scale: isActive ? 1 : 0.97,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <div className={`w-full rounded-[2rem] bg-white border p-5 shadow-md flex flex-col gap-4 text-left transition-all duration-300 ${
                          isActive ? "border-blue-200 shadow-blue-100/40 shadow-xl" : "border-slate-100"
                        }`}>
                          {/* Photo */}
                          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                            <img
                              src={item.image}
                              alt={`Curious Media ${item.year}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                  e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                              }}
                            />
                          </div>
                          {/* Details */}
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                              {item.subtitle}
                            </span>
                            <h4 className="text-lg font-black text-[#0A1A4E] uppercase tracking-tight">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                              {translate(item.desc)}
                            </p>
                            {/* Milestones list */}
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {item.milestones.map((ms, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-[#0B2EA8] border border-blue-100/30"
                                >
                                  {ms}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mobile vertical line connector */}
                      {i < journeyTimeline.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-blue-200 to-transparent" />
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
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
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">
                {isHindi ? "नेतृत्व" : "Leadership"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tighter mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">
                {isHindi ? "क्यूरियस के पीछे के दिमागों से मिलें" : "MEET THE MINDS BEHIND CURIOUS"}
              </span>
            </h2>
            <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto">
              {isHindi 
                ? "क्यूरियस मीडिया के विज़न, संस्कृति और विकास को आगे बढ़ाने वाले दूरदर्शी।"
                : "The visionaries driving Curious Media's vision, culture, and growth."}
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
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[1.25] mb-12">
                {isHindi ? (
                  <>
                    आपकी अगली बड़ी चाल <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">यहाँ से शुरू होती है</span>
                  </>
                ) : (
                  <>
                    Your Next Big Move <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">Starts Here</span>
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
