import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "../globals.css";
import { locales, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curious Media | Where Brands Meet Creators",
  description: "Curious Media is a premium media-tech company bridging the gap between creators and visionary brands.",
  keywords: ["influencer marketing", "creator agency", "social media", "brands", "curious media"],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="font-sans bg-white text-[#0B2EA8] min-h-screen flex flex-col">
        <Providers>
          <Navbar dict={dict} locale={locale as Locale} />
          {props.children}
          <Footer dict={dict} locale={locale as Locale} />
        </Providers>
      </body>
    </html>
  );
}
