"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const STAR_COUNT = 5;

function TestimonialCard({
  t,
  idx,
  onOpenModal,
}: {
  t: any;
  idx: number;
  onOpenModal: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldTruncate = t.quote.length > 200;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-[28px] p-8 md:p-9 border-2 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden h-full min-h-[380px]"
      style={{
        borderColor: isHovered ? t.brandColor : `${t.brandColor}20`,
        boxShadow: isHovered ? `0 20px 50px ${t.brandColor}12` : '0 2px 24px rgba(0,0,0,0.02)'
      }}
    >
      {/* Subtle top brand color accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[4px] transition-opacity duration-500" 
        style={{
          background: t.brandColor,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Large editorial quote mark */}
      <span 
        className="absolute top-4 right-8 text-[64px] leading-none font-black select-none pointer-events-none transition-colors duration-500" 
        style={{
          color: isHovered ? `${t.brandColor}15` : '#F1F5F9'
        }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Star row */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: STAR_COUNT }).map((_, i) => (
          <Star 
            key={i} 
            className="w-3.5 h-3.5 transition-colors duration-500" 
            style={{
              fill: t.brandColor,
              stroke: t.brandColor
            }}
          />
        ))}
      </div>

      {/* Quote body */}
      <p className="relative text-slate-600 text-[15px] md:text-base leading-[1.75] font-medium flex-1">
        {shouldTruncate ? (
          <>
            &ldquo;{t.quote.substring(0, 200).trim()}&hellip;&rdquo;
            <button
              onClick={onOpenModal}
              className="ml-2 font-black text-[11px] uppercase tracking-[0.15em] hover:opacity-70 transition-opacity cursor-pointer inline-flex items-center"
              style={{ color: t.brandColor }}
            >
              Read more &rarr;
            </button>
          </>
        ) : (
          <>&ldquo;{t.quote}&rdquo;</>
        )}
      </p>

      {/* Divider */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-4">
          {/* Company logo enlarged */}
          <div 
            className="w-16 h-16 rounded-2xl border bg-slate-50 flex items-center justify-center p-2.5 shrink-0 shadow-sm transition-all duration-300"
            style={{
              borderColor: isHovered ? `${t.brandColor}40` : '#F1F5F9',
              backgroundColor: isHovered ? `${t.brandColor}05` : '#F8FAFC'
            }}
          >
            <img
              src={t.logo}
              alt={t.company}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Author info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[#0A1A4E] font-black text-sm uppercase tracking-wide leading-tight mb-0.5">
              {t.name}
            </h3>
            <p className="text-slate-500 text-[11px] font-semibold leading-snug line-clamp-2">
              {t.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials({ dict }: { dict: any }) {
  const isHindi = dict.testimonials.badge !== "Client Experiences";
  const [activeTestimonial, setActiveTestimonial] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (activeTestimonial) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveTestimonial(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeTestimonial]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 24 : 380;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const rawTestimonials = [
    {
      name: "Rahul",
      role: "Influencer Marketing Associate",
      company: "Univest",
      brandColor: "#0A5CFF", // Univest Blue
      quote:
        "Working with Curious Media has been a great experience for Univest. Their expertise in influencer marketing extends beyond creator sourcing...they focus on the right partnerships, seamless execution, and meaningful results. From influencer campaigns to LinkedIn initiatives, the team has consistently helped us enhance brand visibility and reach the right audience. Their responsiveness, transparency, and execution excellence make them a reliable growth partner.",
      logo: "/images/brands/univest.webp",
    },
    {
      name: "Shreya",
      role: "Influencer Marketing Manager",
      company: "Plix",
      brandColor: "#0FB45B", // Plix Green
      quote:
        "I recently started working with curious media for my influencer campaigns, it has been such a great experience overall, the creator pool that they offer is really good, execution is super smooth, i have all the updates on what's happening with the influencers that are onboarded. POC's are very helpful and always prompt when it comes to responses. This agency takes full accountabilities for all of the campaigns that they execute so i would love to work with them in the future as well.",
      logo: "/images/brands/plix.webp",
    },
    {
      name: "Amritansh",
      role: "Associate Producer — Leading New Ventures, IPs & Growth",
      company: "TVF",
      brandColor: "#F58220", // TVF Orange
      quote:
        "Working with Curious Media has been an absolute pleasure. Their team brings together deep expertise in digital marketing, creator partnerships, and content distribution making them a valuable partner for any organization looking to build meaningful audience engagement. What stands out most is their ability to combine creativity with execution. Whether it's influencer campaigns, content amplification, creator management, or digital brand building, Curious Media consistently delivers solutions that are strategic, data-driven, and impactful. It has been a pleasure working with Aanchal and Pushpraj. Their understanding of the digital and creator ecosystem, combined with their proactive approach and commitment to delivering results, makes Curious Media a valuable partner for brands.",
      logo: "/images/brands/tvf.webp",
    },
    {
      name: "Reneeta Choudhury",
      role: "Placement Head – Bennett University",
      company: "Bennett University",
      brandColor: "#003366", // Bennett Blue
      quote:
        "Bennett University has been associated with Curious Media for over a year, and our experience working with the team has been extremely positive. Curious Media provides meaningful learning opportunities and hands-on exposure to young talent, enabling students to gain valuable industry experience. We have consistently received encouraging feedback from our students regarding their engagement with the organization, and we appreciate Curious Media’s commitment to nurturing and empowering emerging professionals.",
      logo: "/images/avatars/Bennett.webp",
    },
    {
      name: "Shreya Baveja",
      role: "Social Media Associate",
      company: "Blue Tea",
      brandColor: "#0F52BA", // Blue Tea Blue
      quote:
        "Working with Curious Media over the past 6–7 months has been an incredible experience. Their team has consistently gone above and beyond to support us with our influencer marketing efforts no matter how challenging or last-minute the requirements have been. From handling unrealistic briefs with ease to ensuring timely execution, they've always delivered with professionalism and efficiency. What truly stands out is their attention to detail they've supported us through every minor aspect of influencer marketing making the entire process smooth and stress-free. Their proactive communication, reliability, and commitment to quality have made them a valuable extension of our team. It's been a pleasure collaborating with them and I look forward to continuing this partnership.",
      logo: "/images/bluetea.jpg",
    },
  ];

  const testimonials = rawTestimonials.map((t) => {
    if (!isHindi) return t;

    const nameMap: Record<string, string> = {
      Rahul: "राहुल",
      Shreya: "श्रेया",
      Amritansh: "अमृतांश",
      "Reneeta Choudhury": "रेणीता चौधरी",
      "Shreya Baveja": "श्रेया बवेजा",
    };
    const roleMap: Record<string, string> = {
      "Influencer Marketing Associate": "इन्फ्लुएंसर मार्केटिंग एसोसिएट",
      "Influencer Marketing Manager": "इन्फ्लुएंसर मार्केटिंग मैनेजर",
      "Associate Producer — Leading New Ventures, IPs & Growth":
        "एसोसिएट प्रोड्यूसर - न्यू वेंचर्स, आईपी और ग्रोथ प्रमुख",
      "Placement Head – Bennett University": "प्लेसमेंट हेड - बेनेट यूनिवर्सिटी",
      "Social Media Associate": "सोशल मीडिया एसोसिएट",
    };
    const quoteMap: Record<string, string> = {
      "Working with Curious Media has been a great experience for Univest. Their expertise in influencer marketing extends beyond creator sourcing...they focus on the right partnerships, seamless execution, and meaningful results. From influencer campaigns to LinkedIn initiatives, the team has consistently helped us enhance brand visibility and reach the right audience. Their responsiveness, transparency, and execution excellence make them a reliable growth partner.":
        "क्यूरियस मीडिया के साथ काम करना यूनिवेस्ट के लिए एक बेहतरीन अनुभव रहा है। इन्फ्लुएंसर मार्केटिंग में उनकी विशेषज्ञता केवल क्रिएटर खोजने तक ही सीमित नहीं है... वे सही पार्टनरशिप, सहज निष्पादन और सार्थक परिणामों पर ध्यान केंद्रित करते हैं। इन्फ्लुएंसर अभियानों से लेकर लिंक्डइन पहलों तक, टीम ने लगातार ब्रांड विजिबिलिटी बढ़ाने और सही दर्शकों तक पहुंचने में हमारी मदद की है। उनकी जवाबदेही, पारदर्शिता और निष्पादन उत्कृष्टता उन्हें एक विश्वसनीय विकास भागीदार बनाती है।",

      "I recently started working with curious media for my influencer campaigns, it has been such a great experience overall, the creator pool that they offer is really good, execution is super smooth, i have all the updates on what's happening with the influencers that are onboarded. POC's are very helpful and always prompt when it comes to responses. This agency takes full accountabilities for all of the campaigns that they execute so i would love to work with them in the future as well.":
        "मैंने हाल ही में अपने इन्फ्लुएंसर अभियानों के लिए क्यूरियस मीडिया के साथ काम करना शुरू किया है, यह कुल मिलाकर एक बहुत अच्छा अनुभव रहा है। वे जो क्रिएटर पूल प्रदान करते हैं वह वास्तव में बहुत अच्छा है, निष्पादन बेहद सहज है, और मेरे पास बोर्ड पर लिए गए इन्फ्लुएंसर्स के अपडेट रहते हैं। उनके संपर्क व्यक्ति बहुत मददगार हैं और प्रतिक्रियाओं के मामले में हमेशा तत्पर रहते हैं। यह एजेंसी अपने द्वारा निष्पादित सभी अभियानों के लिए पूर्ण जवाबदेही लेती है, इसलिए मैं भविष्य में भी उनके साथ काम करना पसंद करूंगी।",

      "Working with Curious Media has been an absolute pleasure. Their team brings together deep expertise in digital marketing, creator partnerships, and content distribution making them a valuable partner for any organization looking to build meaningful audience engagement. What stands out most is their ability to combine creativity with execution. Whether it's influencer campaigns, content amplification, creator management, or digital brand building, Curious Media consistently delivers solutions that are strategic, data-driven, and impactful. It has been a pleasure working with Aanchal and Pushpraj. Their understanding of the digital and creator ecosystem, combined with their proactive approach and commitment to delivering results, makes Curious Media a valuable partner for brands.":
        "क्यूरियस मीडिया के साथ काम करना बेहद खुशी की बात रही है। उनकी टीम डिजिटल मार्केटिंग, क्रिएटर पार्टनरशिप और कंटेंट डिस्ट्रीब्यूशन में गहरी विशेषज्ञता लाती है, जो उन्हें सार्थक दर्शक जुड़ाव बनाने के इच्छुक किसी भी संगठन के लिए एक मूल्यवान भागीदार बनाती है। जो बात सबसे अलग है वह है रचनात्मकता को निष्पादन के साथ संयोजित करने की उनकी क्षमता। चाहे वह इन्फ्लुएंसर अभियान हों, कंटेंट एम्प्लीफिकेशन, क्रिएटर प्रबंधन, या डिजिटल ब्रांड बिल्डिंग हो, क्यूरियस मीडिया लगातार ऐसे समाधान प्रदान करता है जो रणनीतिक, डेटा-संचालित और प्रभावशाली होते हैं। आंचल और पुष्पराज के साथ काम करना बहुत अच्छा रहा है। डिजिटल और क्रिएटर इकोसिस्टम की उनकी समझ, उनके सक्रिय दृष्टिकोण और परिणाम देने की प्रतिबद्धता के साथ मिलकर, क्यूरियस मीडिया को ब्रांडों के लिए एक मूल्यवान भागीदार बनाती है।",

      "Bennett University has been associated with Curious Media for over a year, and our experience working with the team has been extremely positive. Curious Media provides meaningful learning opportunities and hands-on exposure to young talent, enabling students to gain valuable industry experience. We have consistently received encouraging feedback from our students regarding their engagement with the organization, and we appreciate Curious Media’s commitment to nurturing and empowering emerging professionals.":
        "बेनेट यूनिवर्सिटी एक साल से अधिक समय से क्यूरियस मीडिया से जुड़ी हुई है, और टीम के साथ काम करने का हमारा अनुभव बेहद सकारात्मक रहा है। क्यूरियस मीडिया युवा प्रतिभाओं को सार्थक सीखने के अवसर और व्यावहारिक अनुभव प्रदान करता है, जिससे छात्रों को मूल्यवान उद्योग अनुभव प्राप्त करने में मदद मिलती है। हमें संगठन के साथ अपने जुड़ाव के संबंध में अपने छात्रों से लगातार उत्साहजनक प्रतिक्रिया मिली है, और हम उभरते पेशेवरों के पोषण और सशक्तीकरण के लिए क्यूरियस मीडिया की प्रतिबद्धता की सराहना करते हैं।",

      "Working with Curious Media over the past 6–7 months has been an incredible experience. Their team has consistently gone above and beyond to support us with our influencer marketing efforts no matter how challenging or last-minute the requirements have been. From handling unrealistic briefs with ease to ensuring timely execution, they've always delivered with professionalism and efficiency. What truly stands out is their attention to detail they've supported us through every minor aspect of influencer marketing making the entire process smooth and stress-free. Their proactive communication, reliability, and commitment to quality have made them a valuable extension of our team. It's been a pleasure collaborating with them and I look forward to continuing this partnership.":
        "पिछले 6-7 महीनों में क्यूरियस मीडिया के साथ काम करना एक अद्भुत अनुभव रहा है। उनकी टीम ने लगातार हमारी इन्फ्लुएंसर मार्केटिंग प्रयासों का समर्थन करने के लिए अपनी सीमाओं से परे जाकर काम किया है, चाहे आवश्यकताएं कितनी भी चुनौतीपूर्ण या अंतिम समय की क्यों न हों। अवास्तविक ब्रीफ को आसानी से संभालने से लेकर समय पर निष्पादन सुनिश्चित करने तक, उन्होंने हमेशा व्यावसायिकता और दक्षता के साथ परिणाम दिए हैं। जो बात वास्तव में सामने आती है वह है उनका विस्तार पर ध्यान - उन्होंने इन्फ्लुएंसर मार्केटिंग के हर छोटे पहलू के माध्यम से हमारा समर्थन किया है जिससे पूरी प्रक्रिया सहज और तनाव मुक्त हो गई है। उनके सक्रिय संचार, विश्वसनीयता और गुणवत्ता के प्रति प्रतिबद्धता ने उन्हें हमारी टीम का एक मूल्यवान विस्तार बना दिया है। उनके साथ सहयोग करना एक खुशी की बात रही है और मैं इस साझेदारी को जारी रखने के लिए उत्सुक हूं।",
    };

    return {
      ...t,
      name: nameMap[t.name] || t.name,
      role: roleMap[t.role] || t.role,
      quote: quoteMap[t.quote] || t.quote,
    };
  });

  return (
    <section className="py-28 md:py-40 bg-[#F8FAFF] relative overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(11,46,168,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large ambient glow blobs */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter leading-[0.95] text-[#0A1A4E] uppercase"
          >
            {dict.testimonials.title_1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-sky-400">
              {dict.testimonials.title_2}
            </span>
          </motion.h2>

          {/* Social proof mini-bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-blue-100 shadow-sm"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <span className="text-slate-700 text-xs font-bold">
              {isHindi ? "30+ ब्रांड भागीदारों द्वारा विश्वसनीय" : "Trusted by 30+ brand partners"}
            </span>
          </motion.div>
        </div>

        {/* ── Testimonials Carousel ── */}
        <div className="relative w-full">

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-none w-[88vw] sm:w-[52vw] lg:w-[calc((100%-4rem)/3)] snap-start">
                <TestimonialCard
                  t={t}
                  idx={idx}
                  onOpenModal={() => setActiveTestimonial(t)}
                />
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0B2EA8] shadow-lg hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0B2EA8] shadow-lg hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Full Quote Modal using React Portal ── */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeTestimonial && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveTestimonial(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 24 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-[32px] border-2 shadow-[0_25px_80px_rgba(0,0,0,0.4)] my-auto flex flex-col max-h-[85vh] overflow-hidden"
                style={{ borderColor: activeTestimonial.brandColor }}
              >
                {/* Top accent line matching brand color */}
                <div 
                  className="w-full h-1.5 shrink-0" 
                  style={{ backgroundColor: activeTestimonial.brandColor }}
                />

                {/* Modal Header Bar with Close Button */}
                <div className="p-5 sm:p-7 pb-4 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 relative bg-white">
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <div 
                      className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl border bg-slate-50 flex items-center justify-center p-2 shrink-0 shadow-xs"
                      style={{
                        borderColor: `${activeTestimonial.brandColor}30`,
                        backgroundColor: `${activeTestimonial.brandColor}08`
                      }}
                    >
                      <img
                        src={activeTestimonial.logo}
                        alt={activeTestimonial.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[#0A1A4E] font-black text-base sm:text-lg uppercase tracking-wide leading-tight mb-1 truncate">
                        {activeTestimonial.name}
                      </h3>
                      <p className="text-slate-500 text-xs font-semibold leading-snug line-clamp-2">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setActiveTestimonial(null)}
                    className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 hover:text-[#0B2EA8] hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer shrink-0 shadow-2xs"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Modal Content */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
                  {/* Stars colored by brand color */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: STAR_COUNT }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4" 
                        style={{
                          fill: activeTestimonial.brandColor,
                          stroke: activeTestimonial.brandColor
                        }}
                      />
                    ))}
                  </div>

                  {/* Full quote */}
                  <p className="text-slate-700 text-base sm:text-lg leading-[1.8] font-medium">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

