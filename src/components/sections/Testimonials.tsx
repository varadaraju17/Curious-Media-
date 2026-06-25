"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

function TestimonialCard({ t, idx, isHindi }: { t: any; idx: number; isHindi: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = t.quote.length > 150;

  return (
    <motion.div
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
      <div className="mb-auto grow">
        <p className={`text-[#0B2EA8]/80 text-lg md:text-xl italic leading-relaxed font-medium tracking-tight ${!isExpanded && shouldTruncate ? "line-clamp-4" : ""}`}>
          &ldquo;{t.quote}&rdquo;
        </p>
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#0B2EA8] font-bold text-sm mt-3 hover:opacity-70 transition-opacity"
          >
            {isExpanded 
              ? (t.readLessLabel || "Read less") 
              : (t.readMoreLabel || "Read more")
            }
          </button>
        )}
      </div>

      {/* Author */}
      <div className="mt-8 pt-6 border-t border-blue-50 flex items-center gap-4 relative z-10">
        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-sm shrink-0`}>
          {t.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[#0B2EA8] font-black text-base leading-tight truncate tracking-tight">{t.name}</h4>
          <p className="text-blue-600/60 text-xs font-bold uppercase tracking-wider mt-0.5 truncate">{t.role}</p>
        </div>
        <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${t.tagColor} border border-current/20 shrink-0`}>
          {t.verifiedLabel || "✓ Verified"}
        </span>
      </div>

      {/* Hover glow */}
      <div className={`absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 blur-[40px] rounded-full transition-opacity duration-500 pointer-events-none`} />
    </motion.div>
  );
}

export function Testimonials({ dict }: { dict: any }) {
  const isHindi = dict.testimonials.badge !== "Client Experiences";
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 16 : 420;
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 1 : 2;
      const amount = direction === "left" ? -cardWidth * count : cardWidth * count;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const rawTestimonials = [
    {
      name: "Rahul",
      role: "Influencer Marketing Associate, Univest",
      company: "Univest",
      quote: "Working with Curious Media has been a great experience for Univest. Their expertise in influencer marketing extends beyond creator sourcing...they focus on the right partnerships, seamless execution, and meaningful results. From influencer campaigns to LinkedIn initiatives, the team has consistently helped us enhance brand visibility and reach the right audience. Their responsiveness, transparency, and execution excellence make them a reliable growth partner.",
      rating: 5,
      gradient: "from-blue-600 to-sky-400",
      initials: "R",
      tagColor: "bg-blue-50 text-blue-700",
    },
    {
      name: "Shreya",
      role: "Influencer Marketing Manager, Plix",
      company: "Plix",
      quote: "I recently started working with curious media for my influencer campaigns, it has been such a great experience overall, the creator pool that they offer is really good, execution is super smooth, i have all the updates on what's happening with the influencers that are onboarded. POC's are very helpful and always prompt when it comes to responses. This agency takes full accountabilities for all of the campaigns that they execute so i would love to work with them in the future as well.",
      rating: 5,
      gradient: "from-indigo-600 to-blue-400",
      initials: "S",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
    {
      name: "Amritansh",
      role: "Associate Producer - Leading New Ventures, IPs & Growth",
      company: "",
      quote: "Working with Curious Media has been an absolute pleasure. Their team brings together deep expertise in digital marketing, creator partnerships, and content distribution making them a valuable partner for any organization looking to build meaningful audience engagement. What stands out most is their ability to combine creativity with execution. Whether it's influencer campaigns, content amplification, creator management, or digital brand building, Curious Media consistently delivers solutions that are strategic, data-driven, and impactful. It has been a pleasure working with Aanchal and Pushpraj. Their understanding of the digital and creator ecosystem, combined with their proactive approach and commitment to delivering results, makes Curious Media a valuable partner for brands.",
      rating: 5,
      gradient: "from-sky-600 to-cyan-400",
      initials: "A",
      tagColor: "bg-sky-50 text-sky-700",
    },
  ];

  const testimonials = rawTestimonials.map(t => {
    if (!isHindi) return t;
    
    const nameMap: Record<string, string> = { 
      "Rahul": "राहुल", 
      "Shreya": "श्रेया", 
      "Amritansh": "अमृतांश" 
    };
    const initialsMap: Record<string, string> = { 
      "R": "आर", 
      "S": "एस", 
      "A": "ए" 
    };
    const roleMap: Record<string, string> = {
      "Influencer Marketing Associate, Univest": "इन्फ्लुएंसर मार्केटिंग एसोसिएट, यूनिवेस्ट",
      "Influencer Marketing Manager, Plix": "इन्फ्लुएंसर मार्केटिंग मैनेजर, प्लिक्स",
      "Associate Producer - Leading New Ventures, IPs & Growth": "एसोसिएट प्रोड्यूसर - न्यू वेंचर्स, आईपी और ग्रोथ प्रमुख"
    };
    const quoteMap: Record<string, string> = {
      "Working with Curious Media has been a great experience for Univest. Their expertise in influencer marketing extends beyond creator sourcing...they focus on the right partnerships, seamless execution, and meaningful results. From influencer campaigns to LinkedIn initiatives, the team has consistently helped us enhance brand visibility and reach the right audience. Their responsiveness, transparency, and execution excellence make them a reliable growth partner.":
        "क्यूरियस मीडिया के साथ काम करना यूनिवेस्ट के लिए एक बेहतरीन अनुभव रहा है। इन्फ्लुएंसर मार्केटिंग में उनकी विशेषज्ञता केवल क्रिएटर खोजने तक ही सीमित नहीं है... वे सही पार्टनरशिप, सहज निष्पादन और सार्थक परिणामों पर ध्यान केंद्रित करते हैं। इन्फ्लुएंसर अभियानों से लेकर लिंक्डइन पहलों तक, टीम ने लगातार ब्रांड विजिबिलिटी बढ़ाने और सही दर्शकों तक पहुंचने में हमारी मदद की है। उनकी जवाबदेही, पारदर्शिता और निष्पादन उत्कृष्टता उन्हें एक विश्वसनीय विकास भागीदार बनाती है।",
      
      "I recently started working with curious media for my influencer campaigns, it has been such a great experience overall, the creator pool that they offer is really good, execution is super smooth, i have all the updates on what's happening with the influencers that are onboarded. POC's are very helpful and always prompt when it comes to responses. This agency takes full accountabilities for all of the campaigns that they execute so i would love to work with them in the future as well.":
        "मैंने हाल ही में अपने इन्फ्लुएंसर अभियानों के लिए क्यूरियस मीडिया के साथ काम करना शुरू किया है, यह कुल मिलाकर एक बहुत अच्छा अनुभव रहा है। वे जो क्रिएटर पूल प्रदान करते हैं वह वास्तव में बहुत अच्छा है, निष्पादन बेहद सहज है, और मेरे पास बोर्ड पर लिए गए इन्फ्लुएंसर्स के अपडेट रहते हैं। उनके संपर्क व्यक्ति बहुत मददगार हैं और प्रतिक्रियाओं के मामले में हमेशा तत्पर रहते हैं। यह एजेंसी अपने द्वारा निष्पादित सभी अभियानों के लिए पूर्ण जवाबदेही लेती है, इसलिए मैं भविष्य में भी उनके साथ काम करना पसंद करूंगी।",
      
      "Working with Curious Media has been an absolute pleasure. Their team brings together deep expertise in digital marketing, creator partnerships, and content distribution making them a valuable partner for any organization looking to build meaningful audience engagement. What stands out most is their ability to combine creativity with execution. Whether it's influencer campaigns, content amplification, creator management, or digital brand building, Curious Media consistently delivers solutions that are strategic, data-driven, and impactful. It has been a pleasure working with Aanchal and Pushpraj. Their understanding of the digital and creator ecosystem, combined with their proactive approach and commitment to delivering results, makes Curious Media a valuable partner for brands.":
        "क्यूरियस मीडिया के साथ काम करना बेहद खुशी की बात रही है। उनकी टीम डिजिटल मार्केटिंग, क्रिएटर पार्टनरशिप और कंटेंट डिस्ट्रीब्यूशन में गहरी विशेषज्ञता लाती है, जो उन्हें सार्थक दर्शक जुड़ाव बनाने के इच्छुक किसी भी संगठन के लिए एक मूल्यवान भागीदार बनाती है। जो बात सबसे अलग है वह है रचनात्मकता को निष्पादन के साथ संयोजित करने की उनकी क्षमता। चाहे वह इन्फ्लुएंसर अभियान हों, कंटेंट एम्प्लीफिकेशन, क्रिएटर प्रबंधन, या डिजिटल ब्रांड बिल्डिंग हो, क्यूरियस मीडिया लगातार ऐसे समाधान प्रदान करता है जो रणनीतिक, डेटा-संचालित और प्रभावशाली होते हैं। आंचल और पुष्पराज के साथ काम करना बहुत अच्छा रहा है। डिजिटल और क्रिएटर इकोसिस्टम की उनकी समझ, उनके सक्रिय दृष्टिकोण और परिणाम देने की प्रतिबद्धता के साथ मिलकर, क्यूरियस मीडिया को ब्रांडों के लिए एक मूल्यवान भागीदार बनाती है।"
    };

    return {
      ...t,
      name: nameMap[t.name] || t.name,
      initials: initialsMap[t.initials] || t.initials,
      role: roleMap[t.role] || t.role,
      quote: quoteMap[t.quote] || t.quote,
      verifiedLabel: "✓ सत्यापित",
      readMoreLabel: "और पढ़ें",
      readLessLabel: "कम पढ़ें"
    };
  });

  return (
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
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.testimonials.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
          >
            {dict.testimonials.title_1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">{dict.testimonials.title_2}</span>
          </motion.h2>
        </div>

        </div>
      {/* Horizontal Scroll Testimonials */}
      <div className="w-full relative z-10">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-8 xl:px-[calc((100%-1400px)/2+2rem)] pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} t={t} idx={idx} isHindi={isHindi} />
          ))}
          <div className="flex-none w-4 md:w-8" />
        </div>

        {/* Desktop Navigation Arrows — overlaid */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white border border-blue-100 items-center justify-center text-[#0B2EA8] shadow-2xl hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Previous Testimonials"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white border border-blue-100 items-center justify-center text-[#0B2EA8] shadow-2xl hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Next Testimonials"
        >
          <ArrowRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Mobile Navigation Arrows — bottom pill bar */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-2 pb-2">
          <button
            onClick={() => scroll("left")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2EA8] text-white shadow-lg active:scale-95 transition-all duration-200"
            aria-label="Previous Testimonials"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">Prev</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2EA8] text-white shadow-lg active:scale-95 transition-all duration-200"
            aria-label="Next Testimonials"
          >
            <span className="text-xs font-black uppercase tracking-widest">Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
