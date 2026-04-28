"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <>
      {/* ── Contact Form Section ── */}
      <section className="py-24 md:py-32 relative z-10 bg-[#040D21] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-700/10 blur-[250px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/8 blur-[200px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-5/12 flex flex-col justify-center pt-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm mb-8 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-200">Contact Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black font-heading mb-5 tracking-tighter leading-[1.05] text-white">
                Have Questions?<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                  Contact Us Directly.
                </span>
              </h2>

              <p className="text-lg text-white/40 mb-12 font-medium leading-relaxed max-w-sm">
                Our team is ready to help you scale your digital presence. Reach out any time.
              </p>

              <div className="flex flex-col gap-4">
                <a href="mailto:hello@curiousmedia.com"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white/4 border border-white/8 hover:border-blue-400/35 hover:bg-blue-500/8 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/25 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.20)]">
                    <Mail className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Direct Email</p>
                    <p className="text-white font-bold text-base group-hover:text-blue-300 transition-colors">hello@curiousmedia.com</p>
                  </div>
                </a>

                <a href="tel:+919000000000"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white/4 border border-white/8 hover:border-blue-400/35 hover:bg-blue-500/8 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/25 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.20)]">
                    <Phone className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Direct Phone</p>
                    <p className="text-white font-bold text-base group-hover:text-blue-300 transition-colors">+91 90000 00000</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="w-full lg:w-7/12"
            >
              <div className="relative rounded-[2.5rem] p-8 md:p-12 border border-blue-400/12 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #071428 100%)", boxShadow: "0 30px 100px rgba(4,13,33,0.8)" }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/8 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <form className="relative z-10 flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35 pl-1">Name</label>
                      <input type="text" id="contact-name" placeholder="John Doe"
                        className="w-full bg-white/4 border border-white/8 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/6 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35 pl-1">Email</label>
                      <input type="email" id="contact-email" placeholder="john@example.com"
                        className="w-full bg-white/4 border border-white/8 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/6 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35 pl-1">Phone</label>
                      <input type="tel" id="contact-phone" placeholder="+91 90000 00000"
                        className="w-full bg-white/4 border border-white/8 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/6 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35 pl-1">Company / Website</label>
                      <input type="text" id="contact-company" placeholder="yourbrand.com"
                        className="w-full bg-white/4 border border-white/8 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/6 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35 pl-1">Query / Subject</label>
                    <select id="contact-subject"
                      className="w-full bg-white/4 border border-white/8 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/6 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#071428]">Select a topic...</option>
                      <option value="brand_deals" className="bg-[#071428]">Brand Deals &amp; Sponsorships</option>
                      <option value="content_monetization" className="bg-[#071428]">Content Monetization</option>
                      <option value="talent_management" className="bg-[#071428]">Talent Management</option>
                      <option value="general" className="bg-[#071428]">General Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/35 pl-1">Write a note</label>
                    <textarea id="contact-message" placeholder="Tell us about your goals..." rows={4}
                      className="w-full bg-white/4 border border-white/8 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/6 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] transition-all resize-none"
                    />
                  </div>

                  <button type="button" id="contact-submit"
                    className="group relative w-full flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-5 text-white font-black tracking-widest uppercase transition-all hover:scale-[1.02] mt-2 shadow-[0_0_40px_rgba(37,99,235,0.40)] hover:shadow-[0_0_60px_rgba(37,99,235,0.65)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 text-base md:text-lg">Submit Request</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Get In Touch + Socials ── */}
      <section className="py-20 md:py-28 relative z-10 bg-[#071428] border-t border-blue-400/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 blur-[200px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-14"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black font-heading mb-4 tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
              Get in touch.
            </h2>
            <p className="text-xl md:text-2xl text-white/40 font-medium max-w-lg mx-auto">
              But only if you&apos;re ready to turn clicks into clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex gap-4 items-center flex-wrap justify-center"
          >
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden relative group hover:shadow-[0_0_25px_rgba(221,42,123,0.35)] hover:border-pink-400/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 group-hover:opacity-20 transition-opacity" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ig-g)" strokeWidth="2" className="relative z-10"><defs><linearGradient id="ig-g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f58529"/><stop offset="50%" stopColor="#dd2a7b"/><stop offset="100%" stopColor="#8134af"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden relative group hover:shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:border-green-400/40">
              <div className="absolute inset-0 bg-[#25D366]/0 group-hover:bg-[#25D366]/15 transition-colors" />
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366" className="relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden relative group hover:shadow-[0_0_25px_rgba(10,102,194,0.40)] hover:border-blue-400/40">
              <div className="absolute inset-0 bg-[#0A66C2]/0 group-hover:bg-[#0A66C2]/15 transition-colors" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" className="relative z-10"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden relative group hover:shadow-[0_0_25px_rgba(24,119,242,0.40)] hover:border-blue-400/40">
              <div className="absolute inset-0 bg-[#1877F2]/0 group-hover:bg-[#1877F2]/15 transition-colors" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" className="relative z-10"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden relative group hover:shadow-[0_0_25px_rgba(255,0,0,0.30)] hover:border-red-400/40">
              <div className="absolute inset-0 bg-[#FF0000]/0 group-hover:bg-[#FF0000]/12 transition-colors" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000" className="relative z-10"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* X */}
            <a href="#" aria-label="X" className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center hover:scale-110 shadow-[0_5px_20px_rgba(255,255,255,0.15)] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,255,255,0.30)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000" className="relative z-10"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
