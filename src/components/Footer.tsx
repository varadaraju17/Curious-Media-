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
      { href: `/${locale}/services`, label: dict.nav.services || "Our Services" },
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
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-4 group">
              <img src="/images/logo.webp" alt="Curious Media Logo" className="h-24 md:h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="text-lg md:text-xl font-black uppercase tracking-wider text-[#0A1A4E] group-hover:text-[#0B2EA8] transition-colors duration-300 font-heading">
                Curious Media
              </span>
            </Link>
            <p className="text-sm font-black text-[#0B2EA8] tracking-wider mb-3 font-heading uppercase italic">
              {dict.footer.tagline || "Relax...you have us"}
            </p>
            {dict.footer.subtitle && (
              <p className="text-blue-800/60 max-w-xs mb-8 text-sm font-medium leading-relaxed">
                {dict.footer.subtitle}
              </p>
            )}

            {/* Social mini buttons */}
            <div className="flex gap-2.5">
              {[
                { 
                  label: "Instagram", 
                  href: "https://www.instagram.com/curiousmedia_official/",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )
                },

                { 
                  label: "Linkedin", 
                  href: "https://www.linkedin.com/company/curiousmediaa/",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                    </svg>
                  )
                },
                { 
                  label: "Whatsapp", 
                  href: "https://wa.me/918375070191",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )
                }
              ].map((s) => (
                <a key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-none border border-blue-200 bg-white flex items-center justify-center
                    hover:bg-[#0B2EA8] hover:border-[#0B2EA8] hover:text-white
                    transition-all duration-300 cursor-pointer text-blue-500/60 hover:scale-110 shadow-sm"
                >
                  {s.icon}
                </a>
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
            <Link href={`/${locale}/privacy`} className="hover:text-[#0B2EA8] transition-colors">{dict.footer.privacy}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-[#0B2EA8] transition-colors">{dict.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
