"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3, Globe2, Zap, Rocket, Mail, Sparkles, Target, ZapIcon, Users } from "lucide-react";
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
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-48 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Abstract Grid & Glow */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-blue-300/20 to-transparent blur-[150px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-300/20 to-transparent blur-[150px] rounded-full pointer-events-none" />
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
                <span className="absolute w-3 h-3 rounded-full bg-blue-500 animate-ping opacity-50" />
                <span className="relative w-2 h-2 rounded-full bg-blue-600" />
              </div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">
                {isHindi ? "ब्रांड्स और एजेंसियां" : "Brands & Agencies"}
              </span>
            </motion.div>

            <h1 className="flex flex-col mb-10 w-full overflow-hidden gap-2 lg:gap-4">
              {(isHindi ? ["दिखें।", "सुने जाएं।", "याद रखे जाएं।"] : ["BE SEEN.", "BE HEARD.", "BE REMEMBERED."]).map((text, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: i * 0.35, 
                    duration: 0.8, 
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="text-[3.5rem] sm:text-6xl md:text-5xl lg:text-[68px] font-black font-heading tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-[#0B2EA8] to-sky-400 uppercase drop-shadow-sm pb-2"
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto mb-16 font-medium leading-relaxed"
            >
              {isHindi 
                ? "हम तभी जीतते हैं जब आप जीतते हैं। हर अभियान को एक सांस्कृतिक घटना में बदलने के लिए भारत के सबसे बड़े वितरण नेटवर्क के साथ साझेदारी करें।"
                : "We win when you win. Partner with India's largest distribution network to turn every campaign into a cultural phenomenon."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-4 px-12 py-6 text-white font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] bg-[#0A1A4E] shadow-[0_20px_40px_rgba(10,26,78,0.25)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.4)] hover:bg-[#0B2EA8]"
              >
                <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-500">
                  {isHindi ? "संपर्क में रहें" : "Get in touch"}
                </span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-[#0A1A4E] transition-all duration-500">
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          </div>
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
              <h2 className="text-4xl md:text-5xl lg:text-[50px] font-black font-heading tracking-tight leading-[0.95] uppercase">
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
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black font-heading tracking-tighter leading-[0.85] uppercase">
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

