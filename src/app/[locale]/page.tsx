import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Divisions } from "@/components/sections/Divisions";
import { Marquee } from "@/components/sections/Marquee";
import { Analytics } from "@/components/sections/Analytics";
import { CTASection } from "@/components/sections/CTASection";

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <Analytics dict={dict} />
      <Divisions dict={dict} locale={locale} />
      <Marquee type="brands" dict={dict} />
      <Marquee type="creators" dict={dict} />
      <CTASection dict={dict} locale={locale} />
    </>
  );
}
