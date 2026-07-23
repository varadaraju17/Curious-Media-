"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Locale } from "@/i18n/config";

interface NavProps {
  dict: any;
  locale: Locale;
}

export function Navbar({ dict, locale }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: dict.nav.media,
      href: `/${locale}/creators`,
      dropdown: [
        { name: dict.nav.creators || "Creators", href: `/${locale}/creators` },
        { name: dict.nav.brands   || "Brands",   href: `/${locale}/brands` },
      ],
    },
    { name: dict.nav.studio,                         href: `/${locale}/studio`   },
    { name: dict.nav.records || "Curious Music",   href: `/${locale}/records`  },
    { name: dict.nav.products,                       href: `/${locale}/products` },
    { name: dict.nav.about   || "About",             href: `/${locale}/about`    },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(11,46,168,0.06)] border-b border-blue-100/50 py-4" 
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="group relative z-10 shrink-0 flex items-center gap-2">
            <img src="/images/logo.webp" alt="Curious Media Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <span className="text-base md:text-lg font-black uppercase tracking-wider text-[#0A1A4E] group-hover:text-[#0B2EA8] transition-colors duration-300 font-heading">
              Curious Media
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 relative z-10" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => {
              const isChildActive = link.dropdown?.some(sub => pathname.includes(sub.href));
              const isActive = (link.href && pathname.includes(link.href) && (link.href !== `/${locale}` || pathname === `/${locale}`)) || isChildActive;
              const hasDropdown = !!link.dropdown;
              
              const content = (
                <>
                  {link.name}
                  {hasDropdown && (
                    <svg className="w-3 h-3 opacity-40 group-hover:opacity-80 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </>
              );

              return (
                <div
                  key={link.name}
                  className="relative px-4 py-2 group"
                  onMouseEnter={() => setHoveredLink(link.name)}
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={`relative z-10 text-[13px] md:text-sm font-bold tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                        isActive ? "text-[#0B2EA8]" : "text-slate-600 hover:text-[#0B2EA8]"
                      }`}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      className={`relative z-10 text-[13px] md:text-sm font-bold tracking-wide transition-colors duration-300 flex items-center gap-1.5 cursor-pointer ${
                        isActive ? "text-[#0B2EA8]" : "text-slate-600 hover:text-[#0B2EA8]"
                      }`}
                    >
                      {content}
                    </div>
                  )}

                  {isActive && (
                    <motion.div
                       layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0B2EA8] rounded-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {hasDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 border border-blue-100/60 shadow-[0_24px_48px_rgba(11,46,168,0.12)] min-w-[180px]">
                        {link.dropdown!.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:text-[#0B2EA8] hover:bg-blue-50/50 transition-all duration-200 group/sub"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/sub:bg-[#0B2EA8] transition-colors shrink-0" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3 z-10 shrink-0">
            <Link
              href={pathname.replace(`/${locale}`, `/${locale === 'en' ? 'hi' : 'en'}`)}
              className="px-4 py-2 rounded-full text-slate-600 hover:text-[#0B2EA8] hover:bg-blue-50 transition-all text-xs font-bold uppercase tracking-widest border border-slate-200"
            >
              {locale === 'en' ? 'हिन्दी' : 'English'}
            </Link>
            <Link
              href={`/${locale}/contact`}
              id="nav-contact-btn"
              className="group relative px-6 py-2.5 rounded-full text-white text-sm font-bold overflow-hidden transition-all duration-300 shadow-[0_4px_14px_rgba(11,46,168,0.2)] hover:shadow-[0_6px_20px_rgba(11,46,168,0.3)] hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] to-blue-500 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <span className="relative z-10">{dict.nav.contact}</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-btn"
            className="md:hidden text-blue-700 hover:text-[#0B2EA8] z-10 relative transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen
                ? <motion.div key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-6 h-6" /></motion.div>
                : <motion.div key="menu" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90,opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-6 h-6" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[80px] left-4 right-4 bg-white p-6 rounded-3xl border border-blue-100 flex flex-col gap-1 shadow-[0_12px_40px_rgba(11,46,168,0.1)] z-50"
          >
            {navLinks.map((link) => {
              const isChildActive = link.dropdown?.some(sub => pathname.includes(sub.href));
              const isActive = (link.href && pathname.includes(link.href)) || isChildActive;

              return (
                <div key={link.name}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-bold py-3 px-4 rounded-none transition-all flex items-center justify-between ${
                        isActive ? 'bg-blue-50 text-[#0B2EA8]' : 'text-slate-600 hover:text-[#0B2EA8] hover:bg-blue-50/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div
                      className={`text-base font-bold py-3 px-4 rounded-none transition-all flex items-center justify-between cursor-pointer ${
                        isActive ? 'bg-blue-50 text-[#0B2EA8]' : 'text-slate-600 hover:text-[#0B2EA8] hover:bg-blue-50/50'
                      }`}
                    >
                      {link.name}
                    </div>
                  )}
                  {link.dropdown && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-slate-100 pl-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-semibold py-2.5 px-3 rounded-none text-slate-600 hover:text-[#0B2EA8] hover:bg-blue-50/50 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex gap-3 mt-4 pt-4 border-t border-blue-100">
              <Link
                href={pathname.replace(`/${locale}`, `/${locale === 'en' ? 'hi' : 'en'}`)}
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-center rounded-full border border-blue-200 text-blue-700 font-bold uppercase hover:bg-blue-50 text-sm transition-all"
              >
                {locale === 'en' ? 'हिन्दी' : 'English'}
              </Link>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.45)]"
              >
                {dict.nav.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
