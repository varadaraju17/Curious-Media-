import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "../globals.css";
import { locales, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B2EA8",
};

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const isHindi = locale === "hi";
  const baseUrl = "https://curiousmedia.in";

  const title = isHindi
    ? "क्यूरियस मीडिया | भारत की अग्रणी क्रिएटर-नेतृत्व वाली विकास एजेंसी"
    : "Curious Media | Where Visionary Brands Meet Creators";

  const description = isHindi
    ? "क्यूरियस मीडिया एक प्रमुख मीडिया-टेक प्लेटफ़ॉर्म है जो इन्फ्लुएंसर मार्केटिंग, कंटेंट प्रोडक्शन और ब्रांड विकास को नया आकार देता है।"
    : "Curious Media is a premium media-tech platform empowering digital storytelling, influencer marketing, ad production, and strategic brand partnerships.";

  return {
    title,
    description,
    keywords: [
      "Curious Media",
      "Curious Media Official",
      "Curious Studios",
      "Curious Music",
      "Curious Media India",
      "Influencer Marketing Agency",
      "Best Influencer Marketing Agency India",
      "Top Influencer Marketing Agency Noida Mumbai",
      "Influencer Marketing Platform",
      "Influencer Campaign Management",
      "YouTube Influencer Marketing Agency",
      "Instagram Influencer Marketing",
      "LinkedIn Creator Marketing",
      "Micro Influencer Marketing India",
      "Macro Influencer Campaign",
      "Regional Creator Marketing",
      "Creator Economy Agency India",
      "YouTube Creator Monetization",
      "Content Monetization Network",
      "YouTube Channel Growth Agency",
      "Digital Rights Management for Creators",
      "High CPM YouTube Strategy",
      "Ad Production House Noida Mumbai",
      "Commercial Ad Production",
      "Digital Video Production Agency",
      "High ROI Video Creatives",
      "Creative Direction & Set Design",
      "Product Photoshoot Studio",
      "F&B Product Photography",
      "Reels and Shorts Production Agency",
      "Brand Partnerships Agency",
      "Brand Deals for Influencers",
      "Digital Brand Strategy",
      "PR and Brand Awareness Campaigns",
      "Online Reputation Management ORM",
      "Social Media Management Agency",
      "Gen-Z Growth Marketing Agency India",
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        hi: `${baseUrl}/hi`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Curious Media",
      images: [
        {
          url: `${baseUrl}/images/logo.webp`,
          width: 1200,
          height: 630,
          alt: "Curious Media Logo",
        },
      ],
      locale: isHindi ? "hi_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/logo.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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
    <html lang={locale} className={`${inter.variable} ${outfit.variable} antialiased`} data-scroll-behavior="smooth">
      <head>
        <JsonLd locale={locale} />
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" />
      </head>
      <body className="font-sans bg-white text-[#0B2EA8] min-h-screen flex flex-col">
        <Providers>
          <Navbar dict={dict} locale={locale as Locale} />
          <main id="main-content" className="flex-1">
            {props.children}
          </main>
          <Footer dict={dict} locale={locale as Locale} />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
