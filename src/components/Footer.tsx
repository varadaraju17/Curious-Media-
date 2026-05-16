"use client";

import Link from "next/link";
import { Locale } from "@/i18n/config";

interface FooterProps { dict: any; locale: Locale; }

export function Footer({ dict, locale }: FooterProps) {
  const links = {
    platform: [
      { href: `/${locale}/creators`, label: dict.nav.media },
      { href: `/${locale}/studio`,   label: dict.nav.studio },
      { href: `/${locale}/records`,  label: dict.nav.records || "Curious Music" },
      { href: `/${locale}/products`, label: dict.nav.products },
    ],
    company: [
      { href: `/${locale}/about`,    label: dict.nav.about || "About Us" },
      { href: `/${locale}/creators`, label: dict.nav.creators || "Creators" },
      { href: `/${locale}/services`, label: "Our Services" },
      { href: `/${locale}/contact`,  label: dict.nav.contact },
    ],
  };

  return (
    <footer className="bg-[#F8FAFF] border-t border-blue-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,46,168,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(11,46,168,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-[#0B2EA8] mb-1">
              CURIOUS<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">.</span>
            </h2>
            <p className="text-[10px] mb-5 font-black uppercase tracking-[0.28em] text-blue-600/60">{dict.footer.tagline}</p>
            <p className="text-blue-800/60 max-w-xs mb-8 text-sm font-medium leading-relaxed">
              {dict.footer.subtitle}
            </p>

            {/* Social mini buttons */}
            <div className="flex gap-2.5">
              {[
                { 
                  label: "Twitter", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
                    </svg>
                  )
                },
                { 
                  label: "Linkedin", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                    </svg>
                  )
                },
                { 
                  label: "Instagram", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )
                },
                { 
                  label: "Youtube", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                },
              ].map((s) => (
                <div key={s.label}
                  className="w-10 h-10 rounded-xl border border-blue-200 bg-white flex items-center justify-center
                    hover:bg-[#0B2EA8] hover:border-[#0B2EA8] hover:text-white
                    transition-all duration-300 cursor-pointer text-blue-500/60 hover:scale-110 shadow-sm"
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h3 className="text-[10px] font-black tracking-[0.28em] uppercase mb-6 text-[#0B2EA8]">{dict.footer.platform}</h3>
            <ul className="flex flex-col gap-3">
              {links.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-blue-800/55 hover:text-[#0B2EA8] text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.28em] uppercase mb-6 text-[#0B2EA8]">{dict.footer.company}</h3>
            <ul className="flex flex-col gap-3">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-blue-800/55 hover:text-[#0B2EA8] text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row items-center justify-between text-blue-800/40 text-xs font-medium tracking-wide gap-4">
          <p>© {new Date().getFullYear()} Curious Media. {dict.footer.rights}</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#0B2EA8] transition-colors">{dict.footer.privacy}</Link>
            <Link href="#" className="hover:text-[#0B2EA8] transition-colors">{dict.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
