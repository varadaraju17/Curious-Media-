"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3, Globe2, Zap, Rocket, Mail, Sparkles, Target, ZapIcon, Users, Award } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Marquee } from "@/components/sections/Marquee";

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

// No longer using CollabTabs

export default function BrandsPage() {
  const { locale } = useParams();
  const isHindi = locale === "hi";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const STATS = [
    { 
      label: isHindi ? "मासिक वितरित कुल दृश्य" : "Monthly Views Delivered", 
      num: 5, 
      suffix: "+", 
      unit: isHindi ? "बिलियन" : "Billion", 
      icon: <BarChart3 className="w-6 h-6" /> 
    },
    { 
      label: isHindi ? "वितरण नेटवर्क (संपूर्ण भारत)" : "Distribution Network PAN India", 
      num: 900, 
      suffix: "+", 
      unit: isHindi ? "मिलियन" : "Million", 
      icon: <Globe2 className="w-6 h-6" /> 
    },
    { 
      label: isHindi ? "इन्फ्लुएंसर्स नेटवर्क (संपूर्ण भारत)" : "Influencers Network Pan India", 
      num: 15000, 
      suffix: "+", 
      unit: "", 
      icon: <Users className="w-6 h-6" /> 
    },
  ];

  const COLLABS = [
    {
      id: 1,
      title: isHindi ? "मीम मार्केटिंग" : "Meme Marketing",
      subtitle: isHindi ? "ऐसे मीम्स जो दिमाग में घर कर जाते हैं।" : "Memes that live rent-free in minds.",
      desc: isHindi 
        ? "हम ऐसे मीम्स बनाते हैं जो तेजी से वायरल होते हैं, गहरा प्रभाव छोड़ते हैं और आपके दर्शकों के दिमाग में बने रहते हैं-हमारे वितरण इंजन के माध्यम से लाखों लोगों तक पहुंचाए जाते हैं।"
        : "We create memes that travel fast, hit hard, and stay in your audience’s mind-scaled across millions through our distribution engine.",
      metricLabelTop: isHindi ? "वितरण नेटवर्क" : "Distribution Network",
      metricStat: "900M+",
      metricLabelBottom: "",
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      id: 2,
      title: isHindi ? "इन्फ्लुएंसर मार्केटिंग" : "Influencer Marketing",
      subtitle: isHindi ? "सिर्फ क्रिएटर नहीं, बल्कि ग्रोथ पार्टनर।" : "Not just creators. Growth partners.",
      desc: isHindi 
        ? "हम आपके ब्रांड को उन क्रिएटर्स से जोड़ते हैं जो केवल बात नहीं करते-वे बड़े पैमाने पर प्रभावित करते हैं, जुड़ाव बनाते हैं और रूपांतरण लाते हैं।"
        : "We match your brand with creators who don’t just talk-they influence, engage, and convert at scale.",
      metricLabelTop: isHindi ? "इन्फ्लुएंसर नेटवर्क –" : "Influencer Network –",
      metricStat: "15k+",
      metricLabelBottom: isHindi ? "संपूर्ण भारत" : "Pan India",
      icon: <Users className="w-10 h-10" />
    },
    {
      id: 3,
      title: isHindi ? "कंटेंट मार्केटिंग" : "Content Marketing",
      subtitle: isHindi ? "सहज कहानी कहना जो आपके दर्शकों के साथ बनी रहती है।" : "Seamless storytelling that stays with your audience.",
      desc: isHindi 
        ? "हम अद्वितीय, प्लेटफ़ॉर्म-अनुकूल सामग्री तैयार करते हैं जो आपके ब्रांड को स्वाभाविक रूप से उन चीज़ों में मिला देती है जिन्हें लोग देखना पसंद करते हैं।"
        : "We craft unique, platform-native content that blends your brand naturally into what people love to watch.",
      metricLabelTop: isHindi ? "क्रिएटर रीच –" : "Creator Reach –",
      metricStat: "100M+",
      metricLabelBottom: isHindi ? "सब्सक्राइबर्स" : "Subscribers",
      icon: <Target className="w-10 h-10" />
    },
  ];

  return (
    <main className="flex-1 w-full bg-white min-h-screen relative overflow-x-hidden pt-24">
      
      {/* ─── HERO SECTION (SPLIT 2-COLUMN LUXURY BRAND MASTERSTAGE) ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white min-h-[calc(100vh-80px)] flex flex-col justify-between border-b border-slate-100">
        
        {/* Background Ambient Glow & Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute top-[-15%] left-[-5%] w-[850px] h-[850px] bg-gradient-to-br from-blue-400/15 via-cyan-300/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[750px] h-[750px] bg-gradient-to-tl from-sky-400/15 via-indigo-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
        </div>

        {/* Hero Content Container (Exact Copy Preserved) */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px] relative z-10 my-auto py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 sm:pt-10 lg:pt-12">
            
            {/* Left Column: Headline, Description & Campaign Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0B2EA8] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                  PAN-INDIA BRAND GROWTH AGENCY
                </span>
              </div>

              {/* EXACT ORIGINAL HEADLINE */}
              <h1 className="font-black font-heading leading-[0.93] tracking-[-0.03em] text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] xl:text-[68px] uppercase mb-6 flex flex-col gap-1">
                {(isHindi ? ["दिखें।", "सुने जाएं।", "याद रखे जाएं।"] : ["BE SEEN.", "BE HEARD.", "BE REMEMBERED."]).map((text, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className={
                      i === 0 
                        ? "text-[#0A1A4E]" 
                        : i === 1 
                        ? "text-[#0B2EA8]" 
                        : "relative text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-cyan-600 to-sky-400 w-fit pb-1"
                    }
                  >
                    {text}
                    {i === 2 && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="absolute bottom-0 left-0 h-[5px] w-full origin-left rounded-full bg-gradient-to-r from-[#0B2EA8] via-cyan-400 to-sky-300"
                      />
                    )}
                  </motion.span>
                ))}
              </h1>

              {/* EXACT ORIGINAL DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg text-slate-500 max-w-2xl mb-8 font-medium leading-relaxed"
              >
                {isHindi 
                  ? "हम तभी जीतते हैं जब आप जीतते हैं। हर अभियान को एक सांस्कृतिक घटना में बदलने के लिए भारत के सबसे बड़े वितरण नेटवर्क के साथ साझेदारी करें।"
                  : "We win when you win. Partner with India's largest distribution network to turn every campaign into a cultural phenomenon."}
              </motion.p>

              {/* Integrated Stat Bar (Official Brand Metrics) */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-xl mb-8 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(11,46,168,0.06)]">
                <div className="text-left border-r border-slate-100 pr-2">
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Campaign Reach</p>
                  <p className="text-sm sm:text-lg font-black text-[#0A1A4E]">500M+</p>
                </div>
                <div className="text-left border-r border-slate-100 pr-2 pl-1">
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Avg ROI Lift</p>
                  <p className="text-sm sm:text-lg font-black text-[#0B2EA8]">+145%</p>
                </div>
                <div className="text-left pl-1">
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Brand Retention</p>
                  <p className="text-sm sm:text-lg font-black text-cyan-600">98.4%</p>
                </div>
              </div>

              {/* EXACT ORIGINAL CTA BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-white font-black uppercase text-sm tracking-widest overflow-hidden shadow-[0_10px_32px_rgba(11,46,168,0.30)] hover:shadow-[0_18px_50px_rgba(11,46,168,0.45)] hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] hover:bg-right-center transition-all duration-700 group-hover:bg-[position:100%]" />
                  <span className="relative z-10">{isHindi ? "संपर्क में रहें" : "Get in touch"}</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

            </div>

            {/* Right Column: 3D Large Brand Campaign Showcase Stack */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-4 lg:py-6">
              
              {/* Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-300/20 to-sky-300/20 blur-[80px]" />
              </div>

              {/* Showcase Container with Blue-to-Sky-Blue Gradient Fill */}
              <div className="relative z-10 w-full max-w-[540px] rounded-[2.5rem] bg-gradient-to-br from-[#0B2EA8] via-[#0A1A4E] to-[#0284C7] border-2 border-sky-400/50 p-5 sm:p-6 shadow-[0_25px_70px_rgba(11,46,168,0.35)] flex flex-col gap-4 text-white">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-sky-400/30">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black shadow-md">
                      <Sparkles className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase tracking-tight">Campaign Performance</h4>
                      <p className="text-[10px] font-bold text-cyan-200/80 uppercase tracking-widest">Side-By-Side Showcase</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-black text-[9px] uppercase tracking-wider">
                    TOP 1%
                  </span>
                </div>

                {/* SIDE-BY-SIDE Campaign Poster Grid */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Side-by-Side Card 1: Nykaa Pink Sale */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-sky-400/40 shadow-md group transition-all duration-300 hover:shadow-xl hover:border-cyan-300 flex flex-col justify-between">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src="/images/posters/nykaa-pink-sale.webp" 
                        alt="Nykaa Pink Sale Campaign" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-cyan-500/80 backdrop-blur-md border border-cyan-300 text-white font-black text-[8px] uppercase tracking-wider">
                        +220% ROI
                      </div>
                      
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <p className="text-[8px] font-black uppercase tracking-widest text-cyan-300">Beauty</p>
                        <h5 className="text-xs font-black uppercase tracking-tight text-white leading-tight">Nykaa Pink Sale</h5>
                        <p className="text-xs font-black text-cyan-300 mt-0.5">85M+ <span className="text-[8px] font-bold text-slate-300 uppercase">Reach</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Side-by-Side Card 2: Travis Scott India Concert */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-sky-400/40 shadow-md group transition-all duration-300 hover:shadow-xl hover:border-cyan-300 flex flex-col justify-between">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src="/images/posters/travis-scott-india.webp" 
                        alt="Travis Scott India Campaign" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-cyan-500/80 backdrop-blur-md border border-cyan-300 text-white font-black text-[8px] uppercase tracking-wider">
                        VIRAL
                      </div>
                      
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <p className="text-[8px] font-black uppercase tracking-widest text-sky-300">Live Music</p>
                        <h5 className="text-xs font-black uppercase tracking-tight text-white leading-tight">Travis Scott</h5>
                        <p className="text-xs font-black text-sky-300 mt-0.5">150M+ <span className="text-[8px] font-bold text-slate-300 uppercase">Views</span></p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Trust Ribbon */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-300" />
                    <span className="text-xs font-black text-white uppercase tracking-tight">Enterprise Client Trust</span>
                  </div>
                  <span className="text-xs font-black text-cyan-300">50+ Brands</span>
                </div>

              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 animate-pulse">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-[0_12px_35px_rgba(11,46,168,0.15)] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-black shrink-0">
                    🏆
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Trusted Agency</p>
                    <p className="text-xs font-black text-slate-800">50+ Top Indian Brands</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Decorative Wave Divider */}
        <div className="w-full overflow-hidden leading-none -mt-2">
          <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-14">
            <path d="M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z" fill="#FFFFFF"/>
          </svg>
        </div>
      </section>

      {/* ─── BRAND MARQUEE ─── */}
      <section className="bg-white pb-32">
        <Marquee type="brands" dict={{ marquee: { brands_badge: "Trusted By", brands_title_1: "Leading", brands_title_2: "Companies" } }} />
      </section>

      {/* ─── SPOTTER-STYLE STATS SECTION ─── */}
      <section className="py-20 md:py-24 bg-[#0A1A4E] relative overflow-hidden flex items-center min-h-screen md:min-h-0">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none -ml-48 -mb-48" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-cyan-200">
                  {isHindi ? "प्रभाव का पैमाना" : "The Scale of Impact"}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter leading-[0.95] uppercase">
                {isHindi ? (
                  <>
                    <span className="text-white">परिणाम जिन्हें</span><br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-200">ब्रांड माप सकते हैं।</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Results That</span><br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-200">Brands Can Measure.</span>
                  </>
                )}
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <div className="space-y-4">
                <p className="text-blue-100 text-lg md:text-xl font-semibold leading-relaxed">
                  {isHindi 
                    ? "हम हर अभियान को इस रूप में देखते हैं कि हम इसे लक्षित दर्शकों के दिमाग में कैसे दर्ज कर सकते हैं..."
                    : "We see every campaign as how we can register this thing in the target audience's mind..."}
                </p>
                <p className="text-blue-200/60 text-base md:text-lg font-medium leading-relaxed">
                  {isHindi 
                    ? "कोई दिखावटी डेक नहीं। कोई अति-प्रतिबद्धता नहीं। हमारे नेटवर्क से वितरित केवल वास्तविक परिणाम।"
                    : "No fancy decks. No over-commitment. Just real results delivered from our network."}
                </p>
                <p className="text-blue-200/60 text-base md:text-lg font-medium leading-relaxed">
                  {isHindi 
                    ? "हम हमेशा हर उत्पाद और संदेश को इतनी सहजता से एकीकृत करने का प्रयास करते हैं ताकि वह बिल्कुल ऑर्गेनिक मार्केटिंग जैसा दिखे।"
                    : "We always try to integrate every product & messaging so smoothly so it looks like organic marketing."}
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-3 text-cyan-300 font-black uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all w-fit border-b border-cyan-300/40 hover:border-cyan-300 pb-1 mt-2"
              >
                {isHindi ? "संपर्क में रहें" : "Get in touch"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-10" />

          {/* Stat Cards - on dark bg */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { num: 5, suffix: "B+", label: isHindi ? "मासिक वितरित दृश्य" : "Monthly Views Delivered", tag: isHindi ? "मासिक पहुंच" : "Monthly Reach" },
              { num: 900, suffix: "M+", label: isHindi ? "मासिक वितरण पहुंच" : "Monthly Distribution Reach", tag: isHindi ? "अखिल भारतीय नेटवर्क" : "Pan India Network" },
              { num: 15, suffix: "K+", label: isHindi ? "सत्यापित क्रिएटर नेटवर्क" : "Verified Creator Network", tag: isHindi ? "संपूर्ण भारत" : "Pan India" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative rounded-[2rem] overflow-hidden bg-white/95 border-2 border-blue-200/50 backdrop-blur-xl shadow-2xl transition-all duration-300"
              >
                <div className="p-8 md:p-10 flex flex-col h-full justify-between min-h-[250px]">
                  {/* Top tag */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{item.tag}</span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B2EA8]">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hero Metric: Big stat */}
                  <div className="mb-2">
                    <p className="text-5xl md:text-6xl lg:text-5xl font-black font-heading tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400 pb-1">
                      <AnimatedNumber value={item.num} suffix={item.suffix} />
                    </p>
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base font-black text-[#0A1A4E] uppercase tracking-wide mt-auto pt-4 border-t border-slate-100">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── SPOTTER-STYLE WAYS TO COLLAB ─── */}
      <section className="py-24 md:py-40 bg-slate-50/50 border-t border-slate-100 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">

          {/* Sticky Left + Scrolling Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">

            {/* Left: Sticky Title */}
            <div className="md:sticky top-40 py-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 mb-8 shadow-sm">
                <ZapIcon className="w-4 h-4 text-[#0B2EA8]" />
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">
                  {isHindi ? "कार्यप्रणाली" : "Methodology"}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter leading-[0.95] uppercase">
                {isHindi ? (
                  <>सहयोग के <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500">तरीके।</span></>
                ) : (
                  <>WAYS TO <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500">COLLAB.</span></>
                )}
              </h2>
              <p className="mt-6 text-slate-500 text-lg md:text-2xl font-medium max-w-md leading-relaxed">
                {isHindi 
                  ? "ब्रांड की पहुंच बढ़ाने और रूपांतरण बढ़ाने के लिए डिज़ाइन किए गए तीन शक्तिशाली, एकीकृत तरीके।"
                  : "Three powerful, integrated methods designed to scale your brand reach and drive conversions."}
              </p>
            </div>

            {/* Right: Scrolling Cards */}
            <div className="flex flex-col py-10">
              {COLLABS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex gap-6 py-10 border-b border-slate-200 last:border-0 hover:pl-2 transition-all duration-300"
                >
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 group-hover:bg-[#0B2EA8] group-hover:border-[#0B2EA8] flex items-center justify-center transition-all duration-300 shadow-sm">
                      <span className="text-xs font-black text-slate-400 group-hover:text-white transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="w-px flex-1 bg-slate-200 group-hover:bg-blue-300 transition-colors duration-300 min-h-[3rem]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 pb-2 flex-1">
                    {/* Title + Subtitle */}
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#0A1A4E] uppercase tracking-tighter leading-none group-hover:text-[#0B2EA8] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-[#0B2EA8]/70 font-black text-[10px] uppercase tracking-[0.2em] mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    {/* Metric card + Read more */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 mt-2">
                      {/* Metric box */}
                      <div className="relative bg-white border border-slate-100 rounded-2xl px-6 py-4 self-start shadow-sm overflow-hidden group-hover:border-blue-100 transition-colors duration-300">
                        {/* Accent bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0B2EA8] to-cyan-400 rounded-l-2xl" />
                        {item.metricLabelTop && <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 block mb-1">{item.metricLabelTop}</span>}
                        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-cyan-500 leading-none block">{item.metricStat}</span>
                        {item.metricLabelBottom && <span className="text-[10px] font-bold text-slate-400 mt-1 block">{item.metricLabelBottom}</span>}
                      </div>

                      {/* Read more link */}
                      <Link
                        href={`/${locale}/contact`}
                        className="group/link inline-flex items-center gap-2 text-[#0B2EA8] font-black text-xs uppercase tracking-[0.25em] transition-all pb-1 border-b-2 border-[#0B2EA8]/20 hover:border-[#0B2EA8] hover:gap-4"
                      >
                        {isHindi ? "अधिक जानें" : "Know more"}
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL PREMIUM CTA ─── */}
      <section className="py-32 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[2.5rem] md:rounded-[3rem] bg-[#0A1A4E] relative overflow-hidden shadow-[0_40px_120px_rgba(10,26,78,0.35)]"
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
                  <h3 className="text-3xl md:text-5xl lg:text-[54px] font-black font-heading tracking-tighter leading-[0.88] uppercase">
                    {isHindi ? (
                      <>
                        <span className="text-white">अपने ब्रांड को</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">स्केल करने के लिए तैयार?</span>
                      </>
                    ) : (
                      <>
                        <span className="text-white">Ready to scale</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white">your brand?</span>
                      </>
                    )}
                  </h3>
                </div>
                <p className="text-blue-200/70 text-base md:text-lg font-medium max-w-sm leading-relaxed lg:text-right">
                  {isHindi 
                    ? "उद्योग के दिग्गजों में शामिल हों और आज ही हर अभियान को एक सांस्कृतिक घटना में बदलें।"
                    : "Join industry leaders and turn every campaign into a cultural phenomenon today."}
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
                    {isHindi ? "हमारे साथ साझेदारी करें" : "Partner With Us"}
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

