"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Send, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen w-full bg-white relative overflow-hidden pt-24">
      
      {/* ─── DYNAMIC BACKGROUND (HOME PAGE HERO STYLE) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
        {/* Dynamic Panning Grid */}
        <motion.div 
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          style={{
            backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Abstract Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M-200,600 C200,400 400,800 800,500 C1200,200 1400,400 1600,400"
            fill="none" stroke="#0B2EA8" strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
        </svg>

        {/* Cinematic Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-8 w-fit shadow-[0_8px_30px_rgba(11,46,168,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">Let&apos;s Connect</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black font-heading tracking-tighter leading-[0.85] text-[#0A1A4E] mb-6 uppercase">
              Get in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-cyan-400">touch.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-bold mb-10 leading-tight italic max-w-md">
              Only if you&apos;re ready to turn <span className="text-[#0B2EA8] not-italic">clicks into clients.</span>
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", val: "info@curiousmedia.in", href: "mailto:info@curiousmedia.in" },
                { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", val: "+91 83750 70191", href: "https://wa.me/918375070191" },
                { icon: <MapPin className="w-5 h-5" />, label: "Operating Office", val: "Office 305, 3rd Floor, VDS Building, H-159, Sector-63, Noida - 201301", href: "https://maps.google.com/?q=Office+305,+3rd+Floor,+VDS+Building,+H-159,+Sector-63,+Noida+-+201301" },
                { icon: <MapPin className="w-5 h-5" />, label: "Registered Address", val: "M-153, MP Enclave, Near Shastri Nagar, Ghaziabad, UP – 201002", href: "https://maps.google.com/?q=M-153,+MP+Enclave,+Near+Shastri+Nagar,+Ghaziabad,+Uttar+Pradesh+-+201002" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  className="group flex items-start gap-5 p-2 transition-all hover:translate-x-2"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#0B2EA8] shadow-sm group-hover:bg-[#0B2EA8] group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="text-sm font-black text-[#0A1A4E] leading-snug max-w-sm md:max-w-md">{item.val}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/curiousmedia_official/" },
                { label: "Facebook", href: "https://www.facebook.com/share/1cN9eyhvx2/?mibextid=wwXIfr" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/curiousmediaa/" },
                { label: "WhatsApp", href: "https://wa.me/918375070191" }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-[#0B2EA8] hover:text-white hover:border-[#0B2EA8] transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white/70 backdrop-blur-2xl rounded-[3rem] border border-blue-50 p-8 md:p-14 shadow-[0_40px_100px_rgba(11,46,168,0.12)]">
              <h3 className="text-2xl font-black font-heading tracking-tight text-[#0A1A4E] mb-8 uppercase">Send an Inquiry</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8] ml-4">Name</label>
                    <input type="text" required placeholder="Full Name" className="bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0B2EA8] transition-all font-bold text-sm shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8] ml-4">Email</label>
                    <input type="email" required placeholder="Email Address" className="bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0B2EA8] transition-all font-bold text-sm shadow-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8] ml-4">Subject</label>
                  <select className="bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0B2EA8] transition-all font-bold text-sm shadow-sm appearance-none cursor-pointer">
                    <option>Brand Campaign</option>
                    <option>Creator Management</option>
                    <option>Studio Production</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8] ml-4">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your goals..." className="bg-white border border-slate-100 rounded-3xl px-6 py-5 outline-none focus:border-[#0B2EA8] transition-all font-bold text-sm shadow-sm resize-none" />
                </div>

                <button type="submit" disabled={loading} className="group relative w-full flex items-center justify-center gap-3 overflow-hidden rounded-full py-6 bg-[#0A1A4E] text-white font-black tracking-[0.2em] uppercase text-sm shadow-[0_20px_40px_rgba(11,46,168,0.25)] hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] group-hover:bg-right-center transition-all duration-700" />
                  <span className="relative z-10 flex items-center gap-3">
                    {loading ? "Sending..." : success ? "Message Sent!" : "Submit Inquiry"}
                    {!loading && !success && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-40">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-24">
          <path d="M0,64 C480,128 960,0 1440,64 L1440,120 L0,120 Z" fill="#F8FAFF"/>
        </svg>
      </div>
    </main>
  );
}
