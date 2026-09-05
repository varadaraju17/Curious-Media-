import { getDictionary } from "@/i18n/dictionaries";
import { Locale, locales } from "@/i18n/config";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { BrandWin } from "@/components/sections/BrandWin";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Divisions } from "@/components/sections/Divisions";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

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
