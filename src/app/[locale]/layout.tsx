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
  display: "optional",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "optional",
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
    ? "क्यूरियस मीडिया | भारत की #1 क्रिएटर मोनेटाइजेशन और ब्रांड ग्रोथ एजेंसी"
    : "Curious Media | India's #1 Creator Monetization & Brand Growth Agency";

  const description = isHindi
    ? "क्यूरियस मीडिया भारत की अग्रणी क्रिएटर मोनेटाइजेशन और इन्फ्लुएंसर मार्केटिंग एजेंसी है। हम ब्रांडों और क्रिएटर्स को जोड़कर 5B+ मासिक दृश्य और उच्च-ROI अभियान प्रदान करते हैं।"
    : "Curious Media is India's leading creator monetization and influencer marketing agency. Connecting top brands with creators to deliver 5B+ monthly views, viral campaigns, and scalable income.";

  return {
    title,
    description,
    keywords: [
      // Base Brand Terms
      "Curious Media",
      "Curious Media Official",
      "Curious Studios",
      "Curious Music",
      "Curious Media India",

      // Core Requested Keywords
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

      // City-Wise Variations: Influencer Marketing Agency
      "Best Influencer Marketing Agency in India",
      "Top Influencer Marketing Agency in India",
      "Best Influencer Marketing Agency in Mumbai",
      "Top Influencer Marketing Agency Mumbai",
      "Best Influencer Marketing Agency in Bangalore",
      "Best Influencer Marketing Agency in Bengaluru",
      "Top Influencer Marketing Agency Bangalore",
      "Best Influencer Marketing Agency in Delhi",
      "Top Influencer Marketing Agency Delhi NCR",
      "Best Influencer Marketing Agency in Delhi NCR",
      "Best Influencer Marketing Agency in Gurgaon",
      "Best Influencer Marketing Agency in Gurugram",
      "Best Influencer Marketing Agency in Noida",
      "Top Influencer Marketing Agency Noida",
      "Best Influencer Marketing Agency in Kolkata",
      "Top Influencer Marketing Agency Kolkata",
      "Best Influencer Marketing Agency in Chennai",
      "Top Influencer Marketing Agency Chennai",
      "Best Influencer Marketing Agency in Hyderabad",
      "Top Influencer Marketing Agency Hyderabad",
      "Best Influencer Marketing Agency in Pune",
      "Top Influencer Marketing Agency Pune",
      "Best Influencer Marketing Agency in Ahmedabad",
      "Top Influencer Marketing Agency Ahmedabad",

      // City-Wise Variations: YouTube & Instagram Influencer Marketing
      "YouTube Influencer Marketing Agency Mumbai",
      "YouTube Influencer Marketing Agency Delhi NCR",
      "YouTube Influencer Marketing Agency Noida",
      "YouTube Influencer Marketing Agency Bangalore",
      "Instagram Influencer Marketing Agency Mumbai",
      "Instagram Influencer Marketing Agency Delhi NCR",
      "Instagram Influencer Marketing Agency Noida",
      "Instagram Influencer Marketing Agency Bangalore",
      "LinkedIn Creator Marketing Agency Mumbai Bangalore",
      "Micro Influencer Marketing Agency Mumbai",
      "Micro Influencer Marketing Agency Delhi NCR Noida",
      "Micro Influencer Marketing Agency Bangalore",
      "Macro Influencer Marketing Agency India",

      // City-Wise Variations: Creator Economy & Monetization
      "Creator Management Agency India",
      "Creator Management Agency Mumbai",
      "Creator Management Agency Delhi NCR",
      "Creator Management Agency Noida",
      "Creator Management Agency Bangalore",
      "YouTube Creator Monetization Agency India",
      "YouTube Creator Monetization Agency Mumbai Noida",
      "Content Monetization Network India",
      "YouTube Channel Growth Agency Mumbai Delhi NCR",
      "Digital Rights Management DRM Agency India",
      "High CPM YouTube Strategy Agency India",

      // City-Wise Variations: Ad Production & Commercial Video Studios
      "Best Ad Production House in India",
      "Ad Production House Mumbai",
      "Ad Production House Delhi NCR",
      "Ad Production House Noida",
      "Ad Production House Bangalore",
      "Commercial Ad Production House Mumbai",
      "Commercial Ad Production House Noida Delhi",
      "Commercial Video Production Agency Mumbai",
      "Commercial Video Production Agency Noida Delhi",
      "Digital Video Production Agency Mumbai Bangalore",
      "High ROI Video Creatives Studio Mumbai Noida",

      // City-Wise Variations: Product Photography & Reels Production
      "Product Photoshoot Studio Mumbai",
      "Product Photoshoot Studio Noida Delhi",
      "Product Photoshoot Studio Bangalore",
      "Product Photoshoot Studio Pune",
      "F&B Product Photography Studio Mumbai Noida",
      "Reels and Shorts Production Agency Mumbai",
      "Reels and Shorts Production Agency Delhi NCR Noida",
      "Reels and Shorts Production Agency Bangalore",

      // City-Wise Variations: Brand Strategy, PR & Social Media Management
      "Brand Partnerships Agency Mumbai Delhi NCR",
      "Digital Brand Strategy Agency Mumbai Bangalore",
      "PR and Brand Awareness Agency Mumbai Delhi NCR",
      "Online Reputation Management ORM Agency Mumbai Noida",
      "Social Media Management Agency Mumbai",
      "Social Media Management Agency Delhi NCR Noida",
      "Social Media Management Agency Bangalore",
      "Social Media Management Agency Hyderabad Pune",
      "Gen-Z Growth Marketing Agency Mumbai Delhi NCR Noida",
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
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
        { url: "/icon.png", type: "image/png", sizes: "192x192" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Curious Media",
      images: [
        {
          url: `${baseUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: "Curious Media - Creator & Brand Management Agency",
        },
      ],
      locale: isHindi ? "hi_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/logo.png`],
      creator: "@curiousmedia",
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "IWM0hpNQThS98yc-EEsMY-uh31tkiYeM6ONxkVai27Y",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/images/hero-mobile-ui.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preload" href="/images/logo.png" as="image" type="image/png" />
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
