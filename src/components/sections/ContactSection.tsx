"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactSection({ dict }: { dict: any }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "brand_deals",
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
        subject: "brand_deals",
        message: "",
      });
      setErrors({});
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };
  return (
    <>
      {/* ── Contact Form Section ── */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-5/12 flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B2EA8] mb-6 w-fit">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">{dict.contact.badge}</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] mb-5 uppercase">
                {dict.contact.title_1}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">{dict.contact.title_2}</span>
              </h2>

              <p className="text-base text-blue-800/65 mb-10 font-medium leading-relaxed max-w-sm">
                {dict.contact.description}
              </p>

              {/* Contact Info Cards */}
              <div className="flex flex-col gap-4 mb-10">
                <a href="mailto:info@curiousmedia.in"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-100
                    shadow-[0_2px_12px_rgba(11,46,168,0.05)]
                    hover:shadow-[0_8px_30px_rgba(11,46,168,0.12)] hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] transition-colors duration-300 shrink-0">
                    <Mail className="w-4 h-4 text-[#0B2EA8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-800/40 mb-0.5">{dict.contact.direct_email}</p>
                    <p className="text-[#0B2EA8] font-bold text-sm">info@curiousmedia.in</p>
                  </div>
                </a>

                <a href="https://wa.me/918375070191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-100
                    shadow-[0_2px_12px_rgba(11,46,168,0.05)]
                    hover:shadow-[0_8px_30px_rgba(11,46,168,0.12)] hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] transition-colors duration-300 shrink-0">
                    <Phone className="w-4 h-4 text-[#0B2EA8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-800/40 mb-0.5">{dict.contact.whatsapp_phone}</p>
                    <p className="text-[#0B2EA8] font-bold text-sm">+91 83750 70191</p>
                  </div>
                </a>

                <div
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-blue-100
                    shadow-[0_2px_12px_rgba(11,46,168,0.05)]
                    hover:shadow-[0_8px_30px_rgba(11,46,168,0.12)] hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] transition-colors duration-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#0B2EA8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-800/40 mb-1">{dict.contact.operating_office}</p>
                    <div className="flex flex-col gap-2.5">
                      <div>
                        <p className="text-xs font-black text-[#0B2EA8] uppercase tracking-wide">Headquarters – Noida Office</p>
                        <p className="text-[#0A1A4E] font-bold text-xs leading-snug">Sector 63, Noida, Uttar Pradesh, 201301</p>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#0B2EA8] uppercase tracking-wide">Mumbai Office</p>
                        <p className="text-[#0A1A4E] font-bold text-xs leading-snug">Wework Spectrum Tower, Malad West, Mumbai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white rounded-3xl border border-blue-100 p-8 md:p-10
                shadow-[0_8px_40px_rgba(11,46,168,0.08)]"
              >
                <h3 className="text-xl font-black font-heading tracking-tight text-[#0B2EA8] mb-7">
                  {dict.contact.send_message}
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="sec-contact-name" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">{dict.contact.name}</label>
                      <input 
                        id="sec-contact-name"
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={dict.contact.fullname_placeholder}
                        className={`w-full bg-[#F8FAFF] border rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all ${
                            errors.name ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-blue-100"
                          }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-bold ml-2">{errors.name}</span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="sec-contact-email" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">{dict.contact.email_label}</label>
                      <input 
                        id="sec-contact-email"
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={dict.contact.email_placeholder}
                        className={`w-full bg-[#F8FAFF] border rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all ${
                            errors.email ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-blue-100"
                          }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-bold ml-2">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="sec-contact-phone" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">{dict.contact.phone_label}</label>
                      <input 
                        id="sec-contact-phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder={dict.contact.phone_placeholder}
                        className={`w-full bg-[#F8FAFF] border rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all ${
                            errors.phone ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-blue-100"
                          }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 font-bold ml-2">{errors.phone}</span>
                      )}
                    </div>

                    {/* Company Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="sec-contact-company" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">{dict.contact.company_label}</label>
                      <input 
                        id="sec-contact-company"
                        type="text" 
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={dict.contact.company_placeholder}
                        className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="sec-contact-subject" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">{dict.contact.subject_label}</label>
                    <select 
                      id="sec-contact-subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      aria-label={dict.contact.subject_label}
                      className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium
                        focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all appearance-none cursor-pointer"
                    >
                      <option value="brand_deals">{dict.contact.opt_brand_deal}</option>
                      <option value="content_monetization">{dict.contact.opt_content_mon}</option>
                      <option value="talent_management">{dict.contact.opt_talent_mgt}</option>
                      <option value="general">{dict.contact.opt_general}</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="sec-contact-message" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">{dict.contact.message_label}</label>
                    <textarea 
                      id="sec-contact-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={dict.contact.message_placeholder} 
                      rows={4}
                      className={`w-full bg-[#F8FAFF] border rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                        focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all resize-none ${
                          errors.message ? "border-red-500 bg-red-50/10 focus:border-red-500" : "border-blue-100"
                        }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-bold ml-2">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 bg-[#0B2EA8] text-white font-black tracking-widest uppercase text-sm transition-all hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(11,46,168,0.35)] shadow-[0_4px_20px_rgba(11,46,168,0.25)] disabled:opacity-80"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      {loading ? dict.contact.btn_sending : success ? dict.contact.btn_sent : dict.contact.btn_submit_req}
                      {!loading && !success && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Get In Touch + Socials ── */}
      <section className="py-20 md:py-28 bg-[#0B2EA8] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/8 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-5xl lg:text-[64px] font-black font-heading tracking-tighter leading-none text-white mb-4">
              {dict.contact.get_in_touch}
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-md mx-auto">
              {dict.contact.clicks_clients}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex gap-4 items-center flex-wrap justify-center"
          >
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/curiousmedia_official/",
                color: "hover:bg-gradient-to-br hover:from-[#f58529] hover:to-[#8134af] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
              },

              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/curiousmediaa/",
                color: "hover:bg-[#0A66C2] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/918375070191",
                color: "hover:bg-[#25D366] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white
                  hover:scale-110 hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                  transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
