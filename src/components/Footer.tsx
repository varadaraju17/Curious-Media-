"use client";

import Link from "next/link";
import { Locale } from "@/i18n/config";

interface FooterProps { dict: any; locale: Locale; }

export function Footer({ dict, locale }: FooterProps) {
  const links = {
    platform: [
      { href: `/${locale}/media`,    label: dict.nav.media },
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
              {["X", "IN", "IG", "YT"].map((s) => (
                <div key={s}
                  className="w-9 h-9 rounded-xl border border-blue-200 bg-white flex items-center justify-center
                    hover:bg-[#0B2EA8] hover:border-[#0B2EA8] hover:text-white
                    transition-all duration-300 cursor-pointer text-blue-500/60 font-black text-[9px] uppercase tracking-widest hover:scale-110"
                >
                  {s}
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
