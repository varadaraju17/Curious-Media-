"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
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
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white">Contact Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] mb-5 uppercase">
                Let&apos;s build something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">extraordinary.</span>
              </h2>

              <p className="text-base text-blue-800/65 mb-10 font-medium leading-relaxed max-w-sm">
                Our team is ready to help you scale your digital presence. Reach out any time — we respond within 24 hours.
              </p>

              {/* Contact Info Cards */}
              <div className="flex flex-col gap-4 mb-10">
                <a href="mailto:hello@curiousmedia.com"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-100
                    shadow-[0_2px_12px_rgba(11,46,168,0.05)]
                    hover:shadow-[0_8px_30px_rgba(11,46,168,0.12)] hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] transition-colors duration-300 shrink-0">
                    <Mail className="w-4 h-4 text-[#0B2EA8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-800/40 mb-0.5">Direct Email</p>
                    <p className="text-[#0B2EA8] font-bold text-sm">hello@curiousmedia.com</p>
                  </div>
                </a>

                <a href="tel:+919000000000"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-100
                    shadow-[0_2px_12px_rgba(11,46,168,0.05)]
                    hover:shadow-[0_8px_30px_rgba(11,46,168,0.12)] hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B2EA8] transition-colors duration-300 shrink-0">
                    <Phone className="w-4 h-4 text-[#0B2EA8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-800/40 mb-0.5">Direct Phone</p>
                    <p className="text-[#0B2EA8] font-bold text-sm">+91 90000 00000</p>
                  </div>
                </a>

                <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-100
                  shadow-[0_2px_12px_rgba(11,46,168,0.05)]"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0B2EA8]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-800/40 mb-0.5">Office</p>
                    <p className="text-[#0B2EA8] font-bold text-sm">New Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="rounded-2xl bg-[#F8FAFF] border border-blue-100 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-800/40 mb-4">Trusted by 29+ brands across India</p>
                <div className="flex items-center gap-3">
                  {["TVF", "Nykaa", "AstroTalk", "Lenskart", "ZEE5"].map((b) => (
                    <span key={b} className="text-[9px] font-black uppercase tracking-wider bg-white border border-blue-100 text-[#0B2EA8] px-2.5 py-1.5 rounded-full">
                      {b}
                    </span>
                  ))}
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
                  Send us a message
                </h3>

                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">Name</label>
                      <input type="text" id="contact-name" placeholder="John Doe"
                        className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">Email</label>
                      <input type="email" id="contact-email" placeholder="john@example.com"
                        className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">Phone</label>
                      <input type="tel" id="contact-phone" placeholder="+91 90000 00000"
                        className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">Company / Website</label>
                      <input type="text" id="contact-company" placeholder="yourbrand.com"
                        className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                          focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">Query / Subject</label>
                    <select id="contact-subject"
                      className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium
                        focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a topic...</option>
                      <option value="brand_deals">Brand Deals &amp; Sponsorships</option>
                      <option value="content_monetization">Content Monetization</option>
                      <option value="talent_management">Talent Management</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0B2EA8]">Write a note</label>
                    <textarea id="contact-message" placeholder="Tell us about your goals..." rows={4}
                      className="w-full bg-[#F8FAFF] border border-blue-100 rounded-2xl px-4 py-3.5 text-[#0B2EA8] text-sm font-medium placeholder:text-blue-800/25
                        focus:outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,46,168,0.08)] transition-all resize-none"
                    />
                  </div>

                  <button type="button" id="contact-submit"
                    className="group relative w-full flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 bg-[#0B2EA8] text-white font-black tracking-widest uppercase text-sm transition-all hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(11,46,168,0.35)] shadow-[0_4px_20px_rgba(11,46,168,0.25)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Submit Request</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black font-heading tracking-tighter leading-none text-white mb-4">
              Get in touch.
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-md mx-auto">
              Only if you&apos;re ready to turn clicks into clients.
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
                color: "hover:bg-gradient-to-br hover:from-[#f58529] hover:to-[#8134af] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
              },
              {
                label: "WhatsApp",
                color: "hover:bg-[#25D366] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
              },
              {
                label: "LinkedIn",
                color: "hover:bg-[#0A66C2] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              },
              {
                label: "YouTube",
                color: "hover:bg-[#FF0000] hover:border-transparent",
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
              },
              {
                label: "X",
                color: "hover:bg-white hover:text-[#0B2EA8] hover:border-white",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
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
