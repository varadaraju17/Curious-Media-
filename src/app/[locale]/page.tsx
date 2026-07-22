import { getDictionary } from "@/i18n/dictionaries";
import { Locale, locales } from "@/i18n/config";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import dynamic from "next/dynamic";

const BrandWin = dynamic(() => import("@/components/sections/BrandWin").then(mod => mod.BrandWin), { ssr: true });
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies").then(mod => mod.CaseStudies), { ssr: true });
const Divisions = dynamic(() => import("@/components/sections/Divisions").then(mod => mod.Divisions), { ssr: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection), { ssr: true });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <Marquee type="brands" dict={dict} />
      <Marquee type="content" dict={dict} title={dict.marquee.content_partners} />
      <BrandWin dict={dict} />
      <CaseStudies dict={dict} />
      <Divisions dict={dict} locale={locale} />
      <Testimonials dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
