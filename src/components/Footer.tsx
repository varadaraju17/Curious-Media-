"use client";

import Link from "next/link";
import { Locale } from "@/i18n/config";

interface FooterProps {
  dict: any;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold font-heading mb-6">
              CURIOUS<span className="text-primary">.</span>
            </h2>
            <p className="text-white/60 max-w-sm mb-6">
              {dict.home.subtitle}
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white">X</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white">In</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white">Ig</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white text-gradient-primary">Platform</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href={`/${locale}/media`} className="text-white/60 hover:text-white transition-colors">{dict.nav.media}</Link></li>
              <li><Link href={`/${locale}/studio`} className="text-white/60 hover:text-white transition-colors">{dict.nav.studio}</Link></li>
              <li><Link href={`/${locale}/products`} className="text-white/60 hover:text-white transition-colors">{dict.nav.products}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white text-gradient-primary">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href={`/${locale}/about`} className="text-white/60 hover:text-white transition-colors">{dict.nav.about}</Link></li>
              <li><Link href={`/${locale}/creators`} className="text-white/60 hover:text-white transition-colors">{dict.nav.creators}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-white/60 hover:text-white transition-colors">{dict.nav.contact}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Curious Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
