"use client";

import Link from "next/link";
import { Locale } from "@/i18n/config";

interface FooterProps {
  dict: any;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-[#030A18] pt-24 pb-12 relative overflow-hidden border-t border-blue-400/10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      {/* Glow blobs */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-800/8 blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-900/8 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand */}
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-2 tracking-tighter text-white">
              CURIOUS<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-300">.</span>
            </h2>
            <p className="text-[10px] mb-8 font-black uppercase tracking-[0.25em] text-blue-400/70">Grow Faster. Earn Smarter.</p>
            <p className="text-white/35 max-w-sm mb-10 text-sm font-medium leading-relaxed">
              {dict.home?.subtitle || "A premium media-tech platform empowering digital storytelling and powerful collaborations."}
            </p>
            <div className="flex gap-3">
              {["X", "IN", "IG", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-10 h-10 rounded-xl border border-blue-400/15 bg-blue-500/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:border-blue-500/50 transition-all duration-300 cursor-pointer text-blue-400/50 hover:text-white font-bold text-[10px] uppercase tracking-widest hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h3 className="text-[10px] font-black tracking-[0.25em] uppercase mb-8 text-blue-400/40">Platform</h3>
            <ul className="flex flex-col gap-4">
              {[
                { href: `/${locale}/media`,    label: "Curious Media" },
                { href: `/${locale}/studio`,   label: "Curious Studios" },
                { href: `/${locale}/records`,  label: "Curious Records" },
                { href: `/${locale}/products`, label: "Curious Products" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/35 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-blue-400 to-sky-300 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.25em] uppercase mb-8 text-blue-400/40">Company</h3>
            <ul className="flex flex-col gap-4">
              {[
                { href: `/${locale}/about`,    label: "About Us" },
                { href: `/${locale}/creators`, label: "Creators" },
                { href: `/en/services`,        label: "Our Services" },
                { href: `/${locale}/contact`,  label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/35 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-blue-400 to-sky-300 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center justify-between text-white/20 text-xs font-medium tracking-wide gap-4">
          <p>© {new Date().getFullYear()} Curious Media. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
