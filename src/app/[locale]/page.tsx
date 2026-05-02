import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Divisions } from "@/components/sections/Divisions";
import { Marquee } from "@/components/sections/Marquee";
import { BrandWin } from "@/components/sections/BrandWin";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <Marquee type="brands" dict={dict} />
      <Divisions dict={dict} locale={locale} />
      <Marquee type="content" dict={dict} title={dict.marquee.content_partners} />
      <BrandWin dict={dict} />
      <CaseStudies dict={dict} />
      <Testimonials dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
