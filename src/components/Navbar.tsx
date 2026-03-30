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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.nav.media, href: `/${locale}/media` },
    { name: dict.nav.studio, href: `/${locale}/studio` },
    { name: dict.nav.products, href: `/${locale}/products` },
    { name: dict.nav.creators, href: `/${locale}/creators` },
    { name: dict.nav.brands, href: `/${locale}/brands` },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className={`flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-3xl px-8 py-3 shadow-[0_0_30px_rgba(255,255,255,0.03)] border border-white/10" 
            : "bg-transparent px-4 py-2 border border-transparent"
        }`}>
          <Link href={`/${locale}`} className="text-xl md:text-2xl font-bold font-heading tracking-tighter text-white z-10 shrink-0">
            CURIOUS<span className="opacity-50">.</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 relative z-10" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => {
              const isActive = pathname.includes(link.href) && (link.href !== `/${locale}` || pathname === `/${locale}`);
              
              return (
                <div 
                  key={link.name}
                  className="relative px-4 py-2"
                  onMouseEnter={() => setHoveredLink(link.name)}
                >
                  <Link 
                    href={link.href}
                    className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-underline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>
          
          <div className="hidden md:flex items-center gap-4 z-10 shrink-0">
            <Link
              href={pathname.replace(`/${locale}`, `/${locale === 'en' ? 'hi' : 'en'}`)}
              className="px-3 py-1.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold uppercase"
            >
              {locale === 'en' ? 'HI' : 'EN'}
            </Link>
            <Link 
              href={`/${locale}/contact`}
              className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              {dict.nav.contact}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-10 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-3xl p-6 rounded-3xl border border-white/10 flex flex-col gap-2 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-50"
          >
            {navLinks.map((link) => {
               const isActive = pathname.includes(link.href) && (link.href !== `/${locale}` || pathname === `/${locale}`);
               return (
                 <Link 
                   key={link.name} 
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   className={`text-lg font-bold py-3 px-4 rounded-xl transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                 >
                   {link.name}
                 </Link>
               )
            })}
            <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
              <Link
                href={pathname.replace(`/${locale}`, `/${locale === 'en' ? 'hi' : 'en'}`)}
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-center rounded-xl border border-white/10 text-white/70 font-bold uppercase hover:bg-white/5"
              >
                {locale === 'en' ? 'हिन्दी' : 'English'}
              </Link>
              <Link 
                href={`/${locale}/contact`}
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-center rounded-xl bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
