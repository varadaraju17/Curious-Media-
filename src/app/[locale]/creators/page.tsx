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
  { name: "TVF", slug: "tvf", domain: "theviralfever.com" },
  { name: "Timeliners", slug: "timeliner", domain: "thetimeliner.com" },
  { name: "TSP", slug: "tsp", domain: "thescreenpatti.com" },
  { name: "Girliyapa", slug: "girliyapa", domain: "girliyapa.com" },
  { name: "Realhit", slug: "real-hit", domain: "realhit.in" },
  { name: "Kutingg", slug: "katting", domain: "katting.com" },
  { name: "Yuvaa", slug: "yuvaa", domain: "yuvaa.co.in" },
  { name: "Content Ka Keeda", slug: "content-ka-keeda", domain: "graphy.com" },
  { name: "Devika Gupta", slug: "devika-gupta", domain: "youtube.com" },
  { name: "Rajat Pawar", slug: "rajat-pawar", domain: "youtube.com" },
  { name: "Bala JI Motion Picture", slug: "balaji-motion-pictures", domain: "balajitelefilms.com" },
  { name: "Bala JI Tele Films", slug: "balaji-telefilms", domain: "balajitelefilms.com" },
  { name: "The Blunt", slug: "the-blunt", domain: "theblunt.in" },
  { name: "Rohit Bamola", slug: "rohita-bamola", domain: "youtube.com" },
  { name: "Defence detective", slug: "defence-detective", domain: "youtube.com" },
  { name: "Hasley", slug: "hasley", domain: "hasleyindia.com" },
  { name: "Skull Tales", slug: "skull-tales", domain: "youtube.com" },
  { name: "Lifeada", slug: "lifeadda", domain: "lifeadda.in" },
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
    `/images/brands/${creator.slug}.webp`,
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

      <div className="bg-white p-5 md:p-6 flex items-center justify-center z-30 shrink-0 relative overflow-hidden group-hover:bg-[#0B2EA8] transition-colors duration-500">
        <div className="flex flex-col z-10 relative">
          <h3 className="text-xl md:text-2xl font-black text-[#0A1A4E] group-hover:text-white uppercase tracking-tight leading-none transition-colors duration-500 text-center">
            {creator.name}
          </h3>
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
    desc: "We go beyond basic revenue-unlocking higher CPMs, smarter distribution, and premium brand opportunities to maximize your earnings."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Room to Grow",
    desc: "Over 90% of creators choose to continue with us. Because we don’t just scale content-we grow with you."
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
    desc: "We earn only when you earn. A simple, fixed share applies only to the revenue we help generate-nothing more."
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
    a: "We love Shorts-but strong long-form YouTube content is essential for our partnerships."
  },
  {
    q: "What about podcasters or Twitch streamers?",
    a: "Absolutely. If you have strong YouTube viewership alongside it, you’re a great fit."
  },
  {
    q: "Which content verticals do you work with?",
    a: "Almost all. From lifestyle to gaming, food to education-if it works on YouTube, we’re in."
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
  const { locale } = useParams();
  const isHindi = locale === "hi";

  const workflowData = WORKFLOW.map(item => {
    if (!isHindi) return item;
    const titleMap: Record<string, string> = {
      "Transparent Terms": "पारदर्शी शर्तें",
      "Enhanced Monetization": "बेहतर मुद्रीकरण (Monetization)",
      "Room to Grow": "विकास की गुंजाइश",
      "Our Involvement": "हमारी भागीदारी",
      "Already Signed?": "पहले से हस्ताक्षरित?",
      "Simple Revenue Share": "सरल राजस्व साझाकरण",
      "Direct Payouts": "सीधा भुगतान"
    };
    const descMap: Record<string, string> = {
      "We evaluate your content’s potential and structure a straightforward partnership. No hidden clauses. No ownership transfer. Your channel stays entirely yours.":
        "हम आपकी सामग्री की क्षमता का मूल्यांकन करते हैं और एक सीधी साझेदारी की संरचना करते हैं। कोई छिपी हुई शर्तें नहीं। कोई स्वामित्व हस्तांतरण नहीं। आपका चैनल पूरी तरह से आपका रहेगा।",
      "We go beyond basic revenue-unlocking higher CPMs, smarter distribution, and premium brand opportunities to maximize your earnings.":
        "हम बुनियादी राजस्व से आगे बढ़ते हैं-आपकी कमाई को अधिकतम करने के लिए उच्च CPM, स्मार्ट वितरण और प्रीमियम ब्रांड के अवसरों को अनलॉक करते हैं।",
      "Over 90% of creators choose to continue with us. Because we don’t just scale content-we grow with you.":
        "90% से अधिक क्रिएटर हमारे साथ बने रहना चुनते हैं। क्योंकि हम केवल सामग्री का पैमाना नहीं बढ़ाते-हम आपके साथ बढ़ते हैं।",
      "You stay fully in control of your content and creative direction. We focus only on making it earn more.":
        "आप अपनी सामग्री और रचनात्मक दिशा पर पूरी तरह से नियंत्रण रखते हैं। हम केवल इसे अधिक कमाई करने पर ध्यान केंद्रित करते हैं।",
      "No problem. We handle content monetization while your brand deals continue seamlessly with your existing agency.":
        "कोई बात नहीं। हम कंटेंट मुद्रीकरण को संभालते हैं जबकि आपके ब्रांड सौदे आपकी मौजूदा एजेंसी के साथ निर्बाध रूप से चलते रहते हैं।",
      "We earn only when you earn. A simple, fixed share applies only to the revenue we help generate-nothing more.":
        "हम तभी कमाते हैं जब आप कमाते हैं। एक सरल, निश्चित हिस्सा केवल उसी राजस्व पर लागू होता है जिसे हम उत्पन्न करने में मदद करते हैं-और कुछ नहीं।",
      "All earnings come directly to you. Our share is settled monthly through a clean, transparent invoicing process.":
        "सभी कमाई सीधे आपके पास आती है। हमारा हिस्सा मासिक रूप से एक साफ, पारदर्शी चालान प्रक्रिया के माध्यम से तय किया जाता है।"
    };
    return {
      ...item,
      title: titleMap[item.title] || item.title,
      desc: descMap[item.desc] || item.desc
    };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
      {/* Left Column: Sticky Title */}
      <div className="md:sticky top-40 py-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 mb-8 shadow-sm">
          <Zap className="w-4 h-4 text-[#0B2EA8]" />
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">
            {isHindi ? "प्रक्रिया" : "The Process"}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black font-heading tracking-tighter leading-[0.85] uppercase">
          {isHindi ? (
            <>यह कैसे <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 pb-2">काम करता है।</span></>
          ) : (
            <>HOW IT <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500 pb-2">WORKS.</span></>
          )}
        </h2>
        <p className="mt-6 md:mt-8 text-slate-500 text-lg md:text-2xl font-medium max-w-md leading-relaxed">
          {isHindi 
            ? "अधिकतम वृद्धि और पूर्ण पारदर्शिता के लिए बनाई गई एक सीधी साझेदारी।"
            : "A straightforward partnership designed for maximum growth and complete transparency."}
        </p>
 
        {/* Step counter pill */}
        <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-blue-50 border border-blue-100">
          <span className="text-3xl font-black text-[#0B2EA8] leading-none">{workflowData.length}</span>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B2EA8]/70">
            {isHindi ? <>साझेदारी<br/>के कदम</> : <>Partnership<br/>Steps</>}
          </span>
        </div>
      </div>
 
      {/* Right Column: Vertical List of Steps */}
      <div className="flex flex-col py-10">
        {workflowData.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group flex gap-6 py-10 border-b border-slate-100 last:border-0 hover:pl-2 transition-all duration-300"
          >
            {/* Step number */}
            <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
              <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#0B2EA8] flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-black text-slate-400 group-hover:text-white transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="w-px flex-1 bg-slate-100 group-hover:bg-blue-200 transition-colors duration-300 min-h-[2rem]" />
            </div>
 
            {/* Content */}
            <div className="flex flex-col gap-3 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-[#0B2EA8] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0A1A4E] uppercase tracking-tight leading-none group-hover:text-[#0B2EA8] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  const { locale } = useParams();
  const isHindi = locale === "hi";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsData = FAQS.map(item => {
    if (!isHindi) return item;
    const qMap: Record<string, string> = {
      "Are Shorts creators eligible?": "क्या शॉर्ट्स क्रिएटर योग्य हैं?",
      "What about podcasters or Twitch streamers?": "पॉडकास्टर्स या ट्विच स्ट्रीमर्स के बारे में क्या?",
      "Which content verticals do you work with?": "आप किन कंटेंट वर्टिकल के साथ काम करते हैं?",
      "Do creators need rights to their content?": "क्या क्रिएटर्स को अपनी सामग्री के अधिकारों की आवश्यकता है?",
      "Not sure if your channel fits?": "यकीन नहीं है कि आपका चैनल फिट बैठता है?"
    };
    const aMap: Record<string, string> = {
      "We love Shorts-but strong long-form YouTube content is essential for our partnerships.":
        "हमें शॉर्ट्स पसंद हैं-लेकिन हमारी साझेदारी के लिए मजबूत लॉन्ग-फॉर्म यूट्यूब सामग्री आवश्यक है।",
      "Absolutely. If you have strong YouTube viewership alongside it, you’re a great fit.":
        "बिल्कुल। यदि आपके पास इसके साथ मजबूत यूट्यूब व्यूअरशिप है, तो आप एक बेहतरीन फिट हैं।",
      "Almost all. From lifestyle to gaming, food to education-if it works on YouTube, we’re in.":
        "लगभग सभी। लाइफस्थल से लेकर गेमिंग, फूड से लेकर एजुकेशन तक-अगर यह यूट्यूब पर चलता है, तो हम साथ हैं।",
      "Yes, creators must own all rights to their content.":
        "हाँ, रचनाकारों के पास अपनी सामग्री के सभी अधिकार होने चाहिए।",
      "Send it over. We’ll take a look and give you an honest assessment.":
        "इसे भेजें। हम एक नज़र डालेंगे और आपको एक ईमानदार मूल्यांकन देंगे।"
    };
    return {
      ...item,
      q: qMap[item.q] || item.q,
      a: aMap[item.a] || item.a
    };
  });

  return (
    <div className="max-w-4xl mx-auto">
      {faqsData.map((faq, i) => (
        <motion.div 
          key={i} 
          initial={false}
          className={`border-b transition-all duration-300 ${
            i === 0 ? 'border-t border-slate-100' : 'border-slate-100'
          }`}
        >
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full py-7 md:py-8 flex items-center justify-between text-left focus:outline-none gap-6 group"
          >
            <div className="flex items-center gap-4">
              <span className={`text-xs font-black tabular-nums shrink-0 transition-colors duration-300 ${
                openIndex === i ? 'text-[#0B2EA8]' : 'text-slate-300 group-hover:text-slate-400'
              }`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={`text-xl md:text-2xl font-black transition-colors duration-300 ${
                openIndex === i ? 'text-[#0B2EA8]' : 'text-[#0A1A4E] group-hover:text-[#0B2EA8]'
              }`}>{faq.q}</span>
            </div>
            <span className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 ${
              openIndex === i 
                ? 'bg-[#0B2EA8] text-white rotate-45' 
                : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#0B2EA8]'
            }`}>
              <X className="w-5 h-5" />
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
                <div className="pl-10 pb-8 pr-16">
                  <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed border-l-2 border-[#0B2EA8] pl-5">
                    {faq.a}
                  </p>
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
  const isHindi = locale === "hi";
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
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-48 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Enhanced Grid & Glow */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-bl from-blue-400/20 to-transparent blur-[150px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute top-[20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-300/20 to-transparent blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-200/50 mb-12 shadow-[0_8px_30px_rgba(11,46,168,0.06)]"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-50" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">
                {isHindi ? "क्रिएटर कैपिटल और ग्रोथ" : "Creator Capital & Growth"}
              </span>
            </motion.div>

            <h1 className="flex flex-col mb-10 w-full overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[3.5rem] sm:text-5xl md:text-6xl lg:text-[60px] font-black font-heading tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase pb-2 drop-shadow-sm"
              >
                {isHindi ? "हमारी कमाई" : "WE EARN"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[3.5rem] sm:text-5xl md:text-6xl lg:text-[60px] font-black font-heading tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase pb-4"
              >
                {isHindi ? "आपकी कमाई के साथ है।" : "WHEN YOU EARN."}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto mb-16 font-medium leading-relaxed"
            >
              {isHindi 
                ? "क्यूरियस मीडिया आपके कंटेंट लाइब्रेरी की मुद्रीकरण (Monetization) क्षमता को सभी प्लेटफॉर्मों पर खोलता है, जो कि एशिया के सबसे बड़े वितरण नेटवर्क द्वारा संचालित है।"
                : "Curious Media unlocks the full monetization potential of your content library across platforms, powered by Asia's largest distribution network."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-4 px-12 py-6 text-white font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] bg-[#0A1A4E] shadow-[0_20px_40px_rgba(10,26,78,0.25)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.4)] hover:bg-[#0B2EA8]"
              >
                <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-500">
                  {isHindi ? "हमारे भागीदार बनें" : "Partner With Us"}
                </span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-[#0A1A4E] transition-all duration-500">
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                </div>
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
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B2EA8]">
                  {isHindi ? "हमारे भागीदार" : "Our Partners"}
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black font-heading tracking-tighter text-[#0A1A4E] leading-[0.9] uppercase mt-2">
                {isHindi ? (
                  <>50+ प्रमुख क्रिएटर्स <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">द्वारा विश्वसनीय।</span></>
                ) : (
                  <>Trusted by 50+ <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">Leading Creators.</span></>
                )}
              </h2>
            </div>
            <div className="text-slate-500 font-bold text-lg max-w-sm md:text-right leading-relaxed">
              {isHindi 
                ? "प्लेटफ़ॉर्म पर अपनी सामग्री की क्षमता को अधिकतम करने वाले डिजिटल क्रिएटर्स के विशिष्ट नेटवर्क में शामिल हों।"
                : "Join the elite network of digital creators maximizing their content's potential across platforms."}
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
      <section className="py-24 md:py-32 relative bg-[#0A1A4E] overflow-hidden min-h-screen flex items-center">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none -ml-48 -mb-48" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-start w-full">
            {/* Top Section: Large Number (1st element) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full mb-8"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white/40 block mb-2 uppercase tracking-tight">₹</span>
              <h2 className="text-[2.8rem] xs:text-[3.8rem] sm:text-[5.8rem] md:text-[7.5rem] lg:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase flex items-center flex-wrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-400">
                  {isHindi ? "10 लाख" : "1 Million"}
                </span>
                <span className="text-cyan-400 ml-3">+</span>
              </h2>
            </motion.div>

            {/* Divider Line (2nd element) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-full h-px bg-white/15 mb-10 origin-left"
            />

            {/* Bottom Section: Split Content (3rd & 4th elements) */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl text-left"
              >
                <p className="text-lg md:text-2xl text-white font-black leading-tight uppercase tracking-tight">
                  {isHindi 
                    ? "क्रिएटर और आईपी ओनर के लिए सभी प्लेटफॉर्मों और प्रारूपों में मुद्रीकरण (Monetization) के माध्यम से।"
                    : "THROUGH MONETIZATION ACROSS PLATFORMS AND FORMATS FOR CREATOR AND IP OWNER."}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start md:items-end shrink-0"
              >
                <div className="text-6xl md:text-6xl lg:text-[64px] font-black text-white leading-none mb-2">
                  <AnimatedNumber value={70} suffix="+" />
                </div>
                <span className="text-sm md:text-base font-black text-cyan-400/80 uppercase tracking-[0.3em]">
                  {isHindi ? "चैनल्स से" : "From channels"}
                </span>
              </motion.div>
            </div>
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
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-5xl font-black font-heading tracking-tighter text-[#0A1A4E] leading-none uppercase">
                {isHindi ? (
                  <>हम किसके <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">साथ काम करते हैं</span></>
                ) : (
                  <>Who We <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500">Work With</span></>
                )}
              </h2>
            </div>
            <p className="text-slate-500 text-xl font-medium max-w-sm leading-relaxed">
              {isHindi 
                ? "पात्रता के बारे में प्रश्न हैं? हमारे साथ साझेदारी करने के बारे में वह सब कुछ जो आपको जानना आवश्यक है।"
                : "Got questions about eligibility? Everything you need to know about partnering with us."}
            </p>
          </div>

          <FAQAccordion />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 rounded-[2.5rem] md:rounded-[3rem] bg-[#0A1A4E] relative overflow-hidden shadow-[0_40px_120px_rgba(10,26,78,0.35)]"
          >
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-30%] right-[-10%] w-[900px] h-[900px] bg-blue-500/20 rounded-full blur-[130px]" />
              <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-cyan-400/15 rounded-full blur-[130px]" />
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
            </div>

            {/* Top strip: headline */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16 pt-10 md:pt-14 pb-8 border-b border-white/10">
              <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-black tracking-[0.2em] uppercase text-emerald-200">
                      {isHindi ? "अभी ऑनबोर्डिंग चालू है" : "Now Onboarding"}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl lg:text-[54px] font-black font-heading tracking-normal md:tracking-wide leading-tight md:leading-[1.15] uppercase">
                    {isHindi ? (
                      <>
                        <span className="text-white">अपनी क्षमता को</span><br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">अनलॉक करने के लिए तैयार?</span>
                      </>
                    ) : (
                      <>
                        <span className="text-white">Ready to unlock</span><br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">your potential?</span>
                      </>
                    )}
                  </h3>
                </div>
                <p className="text-blue-200/70 text-base md:text-lg font-medium max-w-sm leading-relaxed lg:text-right">
                  {isHindi 
                    ? "भारत के अग्रणी रचनाकारों में शामिल हों और आज ही अपने कंटेंट लाइब्रेरी के मूल्य को अधिकतम करें।"
                    : "Join India's leading creators and maximize the value of your content library today."}
                </p>
              </div>
            </div>

            {/* Bottom grid: action tiles */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Primary CTA */}
              <Link
                href={`/${locale}/contact`}
                className="group col-span-1 md:col-span-2 flex items-center justify-between p-6 rounded-2xl bg-white text-[#0A1A4E] hover:bg-blue-50 transition-all duration-500 hover:scale-[1.02] shadow-[0_0_60px_rgba(255,255,255,0.08)]"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0B2EA8]/60">
                    {isHindi ? "बातचीत शुरू करें" : "Start a conversation"}
                  </span>
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    {isHindi ? "संपर्क में रहें" : "Get In Touch"}
                  </span>
                </div>
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#0B2EA8]/10 flex items-center justify-center text-[#0B2EA8] group-hover:bg-[#0B2EA8] group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
 
              {/* Email CTA */}
              <a
                href="mailto:info@curiousmedia.in"
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform duration-300 mb-4">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-300/60 mb-1">
                    {isHindi ? "हमें सीधे ईमेल करें" : "Email Us Directly"}
                  </p>
                  <p className="font-bold text-base text-white break-all leading-tight">info@curiousmedia.in</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
