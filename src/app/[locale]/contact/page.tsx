import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import ContactClient from "./ContactClient";

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return <ContactClient dict={dict} locale={locale} />;
}
