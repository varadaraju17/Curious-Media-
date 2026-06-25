"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Locale } from "@/i18n/config";

interface ContactClientProps {
  dict: any;
  locale: Locale;
}

export default function ContactClient({ dict, locale }: ContactClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: dict.contact.opt_brand || "Brand Campaign",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = dict.contact.validation_name;
    }

    if (!formData.email.trim()) {
      tempErrors.email = dict.contact.validation_email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = dict.contact.validation_email;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      tempErrors.phone = dict.contact.validation_phone;
    } else if (cleanPhone.length !== 10) {
      tempErrors.phone = dict.contact.validation_phone;
    }

    if (!formData.message.trim()) {
      tempErrors.message = dict.contact.validation_message;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: dict.contact.opt_brand || "Brand Campaign",
        message: "",
      });
      setErrors({});
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen lg:h-screen w-full bg-[#F8FAFF] relative overflow-x-hidden lg:overflow-hidden pt-20 lg:pt-24 flex items-center justify-center">
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
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 py-6 lg:py-0 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4 w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0B2EA8] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">{dict.contact.connect_badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black font-heading tracking-tighter leading-[0.85] text-[#0A1A4E] mb-4 uppercase">
              {dict.contact.get_in_touch_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">
                {dict.contact.get_in_touch_2}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-500 font-bold mb-6 sm:mb-8 leading-tight italic max-w-md">
              {dict.contact.clicks_clients}
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: <Mail className="w-4 h-4" />, label: dict.contact.direct_email, val: "info@curiousmedia.in", href: "mailto:info@curiousmedia.in" },
                { icon: <MessageCircle className="w-4 h-4" />, label: dict.contact.whatsapp_phone, val: "+91 83750 70191", href: "https://wa.me/918375070191" },
                { icon: <MapPin className="w-4 h-4" />, label: dict.contact.operating_office, val: "Sector 63, Noida - 201301", href: "https://maps.google.com/?q=Sector+63,+Noida+-+201301" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.3 }}
                  className="group flex items-start gap-4 p-2 transition-all hover:translate-x-1.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-50 flex items-center justify-center text-[#0B2EA8] shadow-sm group-hover:bg-[#0B2EA8] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(11,46,168,0.15)] transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-[#0B2EA8] transition-colors duration-300">{item.label}</p>
                    <p className="text-xs sm:text-sm font-black text-[#0A1A4E] leading-tight max-w-sm md:max-w-md group-hover:text-[#0B2EA8] transition-colors duration-300">{item.val}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-2.5">
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
                  className="px-5 py-2 rounded-full bg-white/60 border border-slate-200/60 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:bg-[#0B2EA8] hover:text-white hover:border-[#0B2EA8] hover:scale-105 transition-all shadow-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            {/* response time floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-[#0B2EA8] to-cyan-400 p-[1px] rounded-2xl shadow-[0_12px_30px_rgba(11,46,168,0.15)] rotate-6 hover:rotate-0 transition-transform duration-500 hidden sm:block z-20">
              <div className="bg-[#0A1A4E] text-white px-4 py-2.5 rounded-[15px] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[9px] font-black tracking-widest uppercase">Response time: &lt; 24h</span>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-2xl rounded-3xl border border-white/60 p-6 md:p-8 shadow-[0_32px_100px_rgba(11,46,168,0.12),inset_0_2px_4px_rgba(255,255,255,0.4)]">
              <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight text-[#0A1A4E] mb-5 uppercase">{dict.contact.send_inquiry}</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5 group relative">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-3 transition-colors duration-300 group-focus-within:text-[#0B2EA8]">{dict.contact.name}</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={dict.contact.fullname_placeholder} 
                        className={`w-full bg-white/60 border rounded-2xl px-5 py-3 outline-none focus:bg-white focus:border-[#0B2EA8] transition-all font-semibold text-xs sm:text-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] ${
                          errors.name ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-100/80 hover:border-slate-200"
                        }`}
                      />
                      <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#0B2EA8] to-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                    </div>
                    {errors.name && (
                      <span className="text-[9px] text-red-500 font-bold ml-3 mt-0.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.name}
                      </span>
                    )}
                  </div>
                  
                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5 group relative">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-3 transition-colors duration-300 group-focus-within:text-[#0B2EA8]">{dict.contact.email_label}</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={dict.contact.email_placeholder} 
                        className={`w-full bg-white/60 border rounded-2xl px-5 py-3 outline-none focus:bg-white focus:border-[#0B2EA8] transition-all font-semibold text-xs sm:text-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] ${
                          errors.email ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-100/80 hover:border-slate-200"
                        }`}
                      />
                      <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#0B2EA8] to-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                    </div>
                    {errors.email && (
                      <span className="text-[9px] text-red-500 font-bold ml-3 mt-0.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5 group relative">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-3 transition-colors duration-300 group-focus-within:text-[#0B2EA8]">{dict.contact.phone_label}</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder={dict.contact.phone_placeholder} 
                        className={`w-full bg-white/60 border rounded-2xl px-5 py-3 outline-none focus:bg-white focus:border-[#0B2EA8] transition-all font-semibold text-xs sm:text-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] ${
                          errors.phone ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-100/80 hover:border-slate-200"
                        }`}
                      />
                      <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#0B2EA8] to-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                    </div>
                    {errors.phone && (
                      <span className="text-[9px] text-red-500 font-bold ml-3 mt-0.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Company Input */}
                  <div className="flex flex-col gap-1.5 group relative">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-3 transition-colors duration-300 group-focus-within:text-[#0B2EA8]">{dict.contact.company_label}</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={dict.contact.company_placeholder} 
                        className="w-full bg-white/60 border border-slate-100/80 rounded-2xl px-5 py-3 outline-none focus:bg-white focus:border-[#0B2EA8] transition-all font-semibold text-xs sm:text-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-200"
                      />
                      <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#0B2EA8] to-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                    </div>
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col gap-1.5 group relative">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-3 transition-colors duration-300 group-focus-within:text-[#0B2EA8]">{dict.contact.subject_label}</label>
                  <div className="relative">
                    <select 
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="w-full bg-white/60 border border-slate-100/80 rounded-2xl px-5 py-3 outline-none focus:bg-white focus:border-[#0B2EA8] transition-all font-bold text-[#0A1A4E] text-xs sm:text-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] appearance-none cursor-pointer pr-10 hover:border-slate-200"
                    >
                      <option value={dict.contact.opt_brand || "Brand Campaign"}>{dict.contact.opt_brand}</option>
                      <option value={dict.contact.opt_creator || "Creator Management"}>{dict.contact.opt_creator}</option>
                      <option value={dict.contact.opt_studio || "Studio Production"}>{dict.contact.opt_studio}</option>
                      <option value={dict.contact.opt_general || "General Inquiry"}>{dict.contact.opt_general}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4 stroke-current stroke-[2]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#0B2EA8] to-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5 group relative">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-3 transition-colors duration-300 group-focus-within:text-[#0B2EA8]">{dict.contact.message_label}</label>
                  <div className="relative">
                    <textarea 
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={2} 
                      placeholder={dict.contact.message_placeholder} 
                      className={`w-full bg-white/60 border rounded-2xl px-5 py-3 outline-none focus:bg-white focus:border-[#0B2EA8] transition-all font-semibold text-xs sm:text-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] resize-none ${
                        errors.message ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-100/80 hover:border-slate-200"
                      }`}
                    />
                    <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#0B2EA8] to-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
                  </div>
                  {errors.message && (
                    <span className="text-[9px] text-red-500 font-bold ml-3 mt-0.5 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="group relative w-full flex items-center justify-center gap-2.5 overflow-hidden rounded-full py-4 bg-[#0A1A4E] text-white font-black tracking-[0.2em] uppercase text-xs sm:text-sm shadow-[0_16px_36px_rgba(11,46,168,0.15)] hover:shadow-[0_20px_50px_rgba(11,46,168,0.3)] hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-85"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] transition-all duration-700 group-hover:bg-[position:100%]" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.4)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-2.5">
                    {loading ? dict.contact.btn_sending : success ? dict.contact.btn_sent : dict.contact.btn_submit}
                    {!loading && !success && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-40">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-12 sm:h-20">
          <path d="M0,64 C480,128 960,0 1440,64 L1440,120 L0,120 Z" fill="#F8FAFF"/>
        </svg>
      </div>
    </main>
  );
}
