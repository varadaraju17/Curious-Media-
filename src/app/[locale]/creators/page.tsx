"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Rocket
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
      whileHover={{ y: -15, scale: 1.03 }}
      className="relative h-[450px] w-[360px] shrink-0 rounded-none overflow-hidden group shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:shadow-[0_40px_80px_rgba(11,46,168,0.3)] transition-all duration-500 border-[8px] border-white bg-slate-50 snap-center"
    >
      {/* Dynamic Background that activates on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-100/50 group-hover:to-indigo-100/50 transition-colors duration-700" />
      
      {/* Decorative Corner Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-200/0 group-hover:border-[#0B2EA8]/20 transition-all duration-700" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-200/0 group-hover:border-[#0B2EA8]/20 transition-all duration-700" />

      {/* Background Image / Logo */}
      <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
        {err < srcs.length ? (
          <img 
            src={srcs[err]} 
            alt={creator.name} 
            className="w-full h-full object-contain filter grayscale-[20%] group-hover:grayscale-0 group-hover:drop-shadow-[0_20px_30px_rgba(11,46,168,0.4)] transition-all duration-700 group-hover:scale-110"
            onError={() => setErr(p => p + 1)}
          />
        ) : (
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-white text-[#0B2EA8] font-black text-5xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-100 group-hover:scale-110 transition-transform duration-500">
            {creator.name[0]}
          </div>
        )}
      </div>

      {/* Premium Floating Name Badge */}
      <div className="absolute bottom-6 left-6 right-6 z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <div className="bg-[#0A1A4E] backdrop-blur-xl border border-white/10 p-5 shadow-2xl flex items-center justify-between rounded-sm">
          <motion.span 
            className="text-lg font-black text-white uppercase tracking-widest leading-none truncate"
          >
            {creator.name}
          </motion.span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const WORKFLOW = [
  {
    title: "Transparent Terms",
    desc: "We evaluate your content’s potential and structure a straightforward partnership. No hidden clauses. No ownership transfer. Your channel stays entirely yours."
  },
  {
    title: "Enhanced Monetization",
    desc: "We go beyond basic revenue—unlocking higher CPMs, smarter distribution, and premium brand opportunities to maximize your earnings."
  },
  {
    title: "Room to grow",
    desc: "Over 90% of creators choose to continue with us. Because we don’t just scale content—we grow with you."
  },
  {
    title: "Our involvement",
    desc: "You stay fully in control of your content and creative direction. We focus only on making it earn more."
  },
  {
    title: "Already signed with an agency?",
    desc: "No problem. We handle content monetization while your brand deals continue seamlessly."
  },
  {
    title: "Simple revenue share",
    desc: "We earn only when you earn. A simple, fixed share applies only to the revenue we help generate—nothing more."
  },
  {
    title: "Who will receive the revenue",
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
    a: "Send it over. We’ll take a look."
  }
];

export default function CreatorsPage() {
  const { locale } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex-1 w-full bg-white min-h-screen relative overflow-x-hidden">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
          <motion.div 
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-30"
            style={{
              backgroundImage: "linear-gradient(rgba(11,46,168,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full mix-blend-multiply animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/30 blur-[140px] rounded-full mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#0B2EA8]" />
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-[#0B2EA8]">Creator Capital</span>
            </motion.div>

            <h1 className="flex flex-col gap-2 md:gap-4 mb-10">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-[110px] font-black font-heading tracking-tighter leading-none text-[#0A1A4E] uppercase"
              >
                WE EARN
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-[110px] font-black font-heading tracking-tighter leading-none text-shimmer uppercase"
              >
                WHEN YOU EARN
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
            >
              Curious Media unlocks the full monetization potential of your content library—across platforms, formats, and revenue streams—powered by Asia&apos;s largest distribution network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#0A1A4E] text-white font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_12px_40px_rgba(10,26,78,0.25)]"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CREATORS POSTER GALLERY ─── */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16">
          <div className="text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B2EA8] mb-4"
            >
              Our Partners
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-[#0A1A4E]">
              Trusted by 30+ Leading <br/> Creators & IP Owners
            </h2>
          </div>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-12 select-none group relative px-4 md:px-8 snap-x snap-mandatory scroll-smooth pb-16 pt-8">
           {CREATORS_DATA.map((creator, i) => (
             <CreatorLogoCard key={i} creator={creator} />
           ))}
        </div>
      </section>

      {/* ─── REVENUE IMPACT SECTION ─── */}
      <section className="py-32 px-4 md:px-8 relative bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="glass-panel p-12 md:p-24 text-center relative overflow-hidden border-blue-100 shadow-[0_20px_60px_rgba(11,46,168,0.05)] rounded-[3rem]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-emerald-600">Total Impact Generated</span>
                </div>

                <h2 className="text-6xl md:text-[120px] font-black font-heading tracking-tighter text-[#0A1A4E] mb-8 leading-none">
                  1,00,00,00,000 <span className="text-[#0B2EA8]">Rs</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed mb-12">
                  Through monetization across platforms and formats for creators and IP owners.
                </p>
                
                <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12"></div>
                
                <div className="flex flex-col items-center justify-center gap-2">
                   <span className="text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] to-[#0B2EA8]">70+</span>
                   <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">From Active Channels</span>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ─── STICKY EDITORIAL LAYOUT: HOW IT WORKS ─── */}
      <section className="py-32 px-4 md:px-8 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                  <Zap className="w-4 h-4 text-[#0B2EA8]" />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">The Process</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter mb-6 text-[#0A1A4E] leading-none">
                  HOW IT <br/> WORKS.
                </h2>
                <p className="text-slate-500 text-xl font-medium max-w-sm mb-10">
                  A straightforward partnership designed for maximum growth and complete transparency.
                </p>
                <Link 
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-3 text-[#0B2EA8] font-black uppercase tracking-widest text-sm hover:gap-5 transition-all"
                >
                  Start Your Journey <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {WORKFLOW.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-panel p-8 md:p-12 group hover:border-[#0B2EA8]/30 transition-all duration-500 bg-white"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-[#0B2EA8] font-black text-2xl group-hover:bg-[#0B2EA8] group-hover:text-white transition-colors duration-500">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#0A1A4E] mb-3">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY EDITORIAL LAYOUT: FAQ ─── */}
      <section className="py-32 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="w-16 h-16 rounded-3xl bg-[#0A1A4E] flex items-center justify-center shadow-2xl shadow-blue-900/20 mb-8">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter mb-6 text-[#0A1A4E] leading-none uppercase">
                  Who We <br/> Work With
                </h2>
                <p className="text-slate-500 text-xl font-medium max-w-sm mb-10">
                  Got questions about eligibility? Here is everything you need to know about partnering with us.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group p-8 md:p-10 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/50 transition-all cursor-default"
                >
                  <h3 className="text-xl md:text-2xl font-black text-[#0A1A4E] mb-4 flex items-center gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-300 group-hover:bg-[#0B2EA8] transition-colors shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-500 font-bold leading-relaxed pl-6 text-lg">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* ─── FINAL PREMIUM CTA ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-16 lg:p-24 rounded-[3rem] bg-[#0A1A4E] text-white relative overflow-hidden shadow-[0_20px_80px_rgba(10,26,78,0.3)] border border-blue-900/50"
          >
            {/* Background Orbs & Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48 mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48"></div>
            
            {/* Floating Graphic Accents */}
            <div className="absolute top-12 left-12 animate-pulse">
              <div className="w-3 h-3 rounded-full bg-blue-400/50"></div>
            </div>
            <div className="absolute bottom-24 right-24">
              <Rocket className="w-32 h-32 text-white/5 -rotate-12" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Text Side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-100">Partner With Us</span>
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-6 tracking-tighter leading-none">
                  Ready to unlock <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">your potential?</span>
                </h3>
                <p className="text-blue-200/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Join India&apos;s leading creators and maximize the value of your content library today.
                </p>
              </div>

              {/* Action Buttons Side */}
              <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mr-0">
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative flex items-center justify-between w-full p-6 rounded-2xl bg-white text-[#0A1A4E] hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-2xl uppercase tracking-tight">Get In Touch</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Start a conversation</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] group-hover:text-white transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>

                <a 
                  href="mailto:info@curiousmedia.in"
                  className="group flex items-center gap-6 w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-blue-200/70 uppercase tracking-widest">Email Us Directly</span>
                    <span className="font-bold text-xl text-white">info@curiousmedia.in</span>
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
