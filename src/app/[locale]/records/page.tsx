"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Music } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function RecordsComingSoonPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isHindi = locale === "hi";

  return (
    <main className="flex-1 w-full bg-white relative overflow-hidden min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0A1A4E 1px, transparent 1px), linear-gradient(90deg, #0A1A4E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-bl from-blue-200/40 to-transparent blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-100/40 to-transparent blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 mb-12 shadow-sm"
        >
          <Music className="w-4 h-4 text-[#0B2EA8]" />
          <span className="text-xs font-black tracking-[0.25em] uppercase text-[#0B2EA8]">
            {isHindi ? "क्यूरियस रिकॉर्ड्स" : "Curious Records"}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 60, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3rem] sm:text-6xl md:text-6xl lg:text-[64px] font-black font-heading tracking-tighter leading-tight mb-8 uppercase"
        >
          {isHindi ? (
            <>
              <span className="text-[#0A1A4E]">जल्द </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500">आ रहा है।</span>
            </>
          ) : (
            <>
              <span className="text-[#0A1A4E]">COMING </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-500">SOON.</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-xl text-slate-500 max-w-4xl mx-auto mb-12 font-medium leading-relaxed"
        >
          {isHindi 
            ? "कुछ असाधारण तैयारी चल रही है। हम स्वतंत्र संगीत प्रकाशन और कलाकारों की खोज की अगली पीढ़ी का निर्माण कर रहे हैं।"
            : "Something legendary is in the works. We are building the next generation of independent music publishing and artist discovery."}
        </motion.p>

        {/* Poster Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-blue-100 shadow-[0_20px_60px_rgba(11,46,168,0.1)] mb-16"
        >
          <Image 
            src="/music_coming_soon_poster_1778925973281.webp" 
            alt={isHindi ? "जल्द आ रहा संगीत" : "Coming Soon Music"} 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            href={`/${locale}`}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0A1A4E] text-white font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_40px_rgba(10,26,78,0.2)]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
            <span className="relative z-10">
              {isHindi ? "मुख्य पृष्ठ पर वापस" : "Back to Home"}
            </span>
          </Link>
          
          <Link 
            href={`/${locale}/contact`}
            className="group relative inline-flex items-center gap-4 px-10 py-5 text-[#0A1A4E] font-black uppercase tracking-[0.2em] text-sm rounded-full border-2 border-[#0A1A4E] transition-all duration-500 hover:bg-[#0A1A4E] hover:text-white"
          >
            <span className="relative z-10">
              {isHindi ? "मुझे सूचित करें" : "Notify Me"}
            </span>
            <Clock className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
