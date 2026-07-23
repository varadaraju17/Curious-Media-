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
    <main className="min-h-screen w-full bg-[#F8FAFF] relative overflow-x-hidden pt-24 pb-12 lg:pt-28 lg:pb-16 flex items-center justify-center">
      {/* ─── DYNAMIC BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
        <motion.div 
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)]"
          style={{
            backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M-200,600 C200,400 400,800 800,500 C1200,200 1400,400 1600,400"
            fill="none" stroke="#0B2EA8" strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
        </svg>

        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-cyan-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1320px] relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4 w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0B2EA8] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">{dict.contact.connect_badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black font-heading tracking-tighter leading-[0.9] text-[#0A1A4E] mb-3 uppercase">
              {dict.contact.get_in_touch_1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] via-blue-600 to-sky-400">
                {dict.contact.get_in_touch_2}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-bold mb-6 leading-snug italic max-w-md">
              {dict.contact.clicks_clients}
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <motion.a
                href="mailto:info@curiousmedia.in"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-blue-50/80 hover:border-blue-200 shadow-sm hover:shadow-md transition-all hover:translate-x-1"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B2EA8] shadow-sm group-hover:bg-[#0B2EA8] group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-[#0B2EA8] transition-colors">{dict.contact.direct_email}</p>
                  <p className="text-xs sm:text-sm font-black text-[#0A1A4E] leading-tight group-hover:text-[#0B2EA8] transition-colors">info@curiousmedia.in</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/918375070191"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-blue-50/80 hover:border-blue-200 shadow-sm hover:shadow-md transition-all hover:translate-x-1"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-[#0B2EA8] transition-colors">{dict.contact.whatsapp_phone}</p>
                  <p className="text-xs sm:text-sm font-black text-[#0A1A4E] leading-tight group-hover:text-[#0B2EA8] transition-colors">+91 83750 70191</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-blue-50/80 hover:border-blue-200 shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B2EA8] shadow-sm group-hover:bg-[#0B2EA8] group-hover:text-white transition-all duration-300 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">{dict.contact.operating_office}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-black text-[#0B2EA8] uppercase tracking-wide">Headquarters – Noida</p>
                      <p className="text-[11px] font-bold text-[#0A1A4E] leading-tight">Sector 63, Noida, UP, 201301</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#0B2EA8] uppercase tracking-wide">Mumbai Office</p>
                      <p className="text-[11px] font-bold text-[#0A1A4E] leading-tight">Wework Spectrum Tower, Malad West</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Instagram", href: "https://www.instagram.com/curiousmedia_official/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/curiousmediaa/" },
                { label: "WhatsApp", href: "https://wa.me/918375070191" }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:bg-[#0B2EA8] hover:text-white hover:border-[#0B2EA8] hover:scale-105 transition-all shadow-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Response badge */}
            <div className="absolute -top-3 -right-2 bg-gradient-to-tr from-[#0B2EA8] to-cyan-400 p-[1px] rounded-2xl shadow-md rotate-3 hover:rotate-0 transition-transform duration-300 hidden sm:block z-20">
              <div className="bg-[#0A1A4E] text-white px-3.5 py-1.5 rounded-[15px] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[9px] font-black tracking-widest uppercase">Response: &lt; 24h</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-blue-100/80 p-5 sm:p-7 shadow-[0_20px_60px_rgba(11,46,168,0.08)]">
              <h2 className="text-lg sm:text-xl font-black font-heading tracking-tight text-[#0A1A4E] mb-4 uppercase">{dict.contact.send_inquiry}</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1 group relative">
                    <label htmlFor="contact-name" className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-2.5">{dict.contact.name}</label>
                    <div className="relative">
                      <input 
                        id="contact-name"
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={dict.contact.fullname_placeholder} 
                        className={`w-full bg-white border rounded-xl px-4 py-2.5 outline-none focus:border-[#0B2EA8] transition-all font-semibold text-xs shadow-sm ${
                          errors.name ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-200/80 hover:border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-[9px] text-red-500 font-bold ml-2.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.name}
                      </span>
                    )}
                  </div>
                  
                  {/* Email Input */}
                  <div className="flex flex-col gap-1 group relative">
                    <label htmlFor="contact-email" className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-2.5">{dict.contact.email_label}</label>
                    <div className="relative">
                      <input 
                        id="contact-email"
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={dict.contact.email_placeholder} 
                        className={`w-full bg-white border rounded-xl px-4 py-2.5 outline-none focus:border-[#0B2EA8] transition-all font-semibold text-xs shadow-sm ${
                          errors.email ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-200/80 hover:border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-[9px] text-red-500 font-bold ml-2.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Phone Input */}
                  <div className="flex flex-col gap-1 group relative">
                    <label htmlFor="contact-phone" className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-2.5">{dict.contact.phone_label}</label>
                    <div className="relative">
                      <input 
                        id="contact-phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder={dict.contact.phone_placeholder} 
                        className={`w-full bg-white border rounded-xl px-4 py-2.5 outline-none focus:border-[#0B2EA8] transition-all font-semibold text-xs shadow-sm ${
                          errors.phone ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-200/80 hover:border-slate-300"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[9px] text-red-500 font-bold ml-2.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Company Input */}
                  <div className="flex flex-col gap-1 group relative">
                    <label htmlFor="contact-company" className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-2.5">{dict.contact.company_label}</label>
                    <div className="relative">
                      <input 
                        id="contact-company"
                        type="text" 
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={dict.contact.company_placeholder} 
                        className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-2.5 outline-none focus:border-[#0B2EA8] transition-all font-semibold text-xs shadow-sm hover:border-slate-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col gap-1 group relative">
                  <label htmlFor="contact-subject" className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-2.5">{dict.contact.subject_label}</label>
                  <div className="relative">
                    <select 
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      aria-label={dict.contact.subject_label}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-2.5 outline-none focus:border-[#0B2EA8] transition-all font-bold text-[#0A1A4E] text-xs shadow-sm appearance-none cursor-pointer pr-10 hover:border-slate-300"
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
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1 group relative">
                  <label htmlFor="contact-message" className="text-[9px] font-black uppercase tracking-widest text-[#0B2EA8]/80 ml-2.5">{dict.contact.message_label}</label>
                  <div className="relative">
                    <textarea 
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={3} 
                      placeholder={dict.contact.message_placeholder} 
                      className={`w-full bg-white border rounded-xl px-4 py-2.5 outline-none focus:border-[#0B2EA8] transition-all font-semibold text-xs shadow-sm resize-none ${
                        errors.message ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-slate-200/80 hover:border-slate-300"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <span className="text-[9px] text-red-500 font-bold ml-2.5 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="group relative w-full flex items-center justify-center gap-2 overflow-hidden rounded-full py-3.5 bg-[#0A1A4E] text-white font-black tracking-[0.2em] uppercase text-xs shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-85 mt-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] transition-all duration-700 group-hover:bg-[position:100%]" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? dict.contact.btn_sending : success ? dict.contact.btn_sent : dict.contact.btn_submit}
                    {!loading && !success && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
