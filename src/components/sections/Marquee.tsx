"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";

/* ─── BRAND DATA ─── */
const brands = [
  { name: "Astrotalk",           domain: "astrotalk.com",          slug: "astrotalk" },
  { name: "Nykaa",               domain: "nykaa.com",              slug: "nykaa" },
  { name: "TVF",                 domain: "theviralfever.com",      slug: "tvf" },
  { name: "Tira",                domain: "tirabeauty.com",         slug: "tira" },
  { name: "Girliyapa",           domain: "girliyapa.com",          slug: "girliyapa" },
  { name: "Viacom 18",           domain: "viacom18.com",           slug: "viacom18" },
  { name: "Plix",                domain: "plixlife.com",           slug: "plix" },
  { name: "Lenskart",            domain: "lenskart.com",           slug: "lenskart" },
  { name: "Wellbeing Nutrition", domain: "wellbeingnutrition.com", slug: "wellbeing-nutrition" },
  { name: "Zouk",                domain: "zouk.co.in",             slug: "zouk" },
  { name: "Rapido",              domain: "rapido.bike",            slug: "rapido" },
  { name: "QuackQuack",          domain: "quackquack.in",          slug: "quackquack" },
  { name: "Himalaya",            domain: "himalaya.com",           slug: "himalaya" },
  { name: "Plantex",             domain: "plantex.in",             slug: "plantex" },
  { name: "Univest",             domain: "univest.in",             slug: "univest" },
  { name: "Rusk Media",          domain: "ruskmedia.com",          slug: "rusk-media" },
  { name: "Sadhna TV",           domain: "sadhnatv.com",           slug: "sadhna-tv" },
  { name: "Soul Flower",         domain: "soulflower.biz",         slug: "soul-flower" },
  { name: "Blue Tea",            domain: "bluetea.co.in",          slug: "blue-tea" },
  { name: "McDonald's",          domain: "mcdonalds.com",          slug: "mcdonalds" },
  { name: "Sunburn",             domain: "sunburn.in",             slug: "sunburn" },
  { name: "Team Innovation",     domain: "teaminnovation.in",      slug: "team-innovation" },
  { name: "Maddock Films",       domain: "maddockfilms.com",       slug: "maddock" },
  { name: "And TV",              domain: "andtv.com",              slug: "and-tv" },
  { name: "ZEE 5",               domain: "zee5.com",               slug: "zee5" },
  { name: "Swiggy Instamart",    domain: "swiggy.com",             slug: "instamart" },
  { name: "Chinese Wok",         domain: "chinesewok.in",          slug: "chinese-wok" },
  { name: "Motion Class",        domain: "motion.ac.in",           slug: "motion-class" },
  { name: "iQOO",                domain: "iqoo.com",               slug: "iqoo" },
];

const contentPartners = [
  { name: "TVF",                    domain: "theviralfever.com",   slug: "tvf" },
  { name: "Balaji Telefilms",       domain: "balajitelefilms.com", slug: "balaji-telefilms" },
  { name: "Yuvaa",                  domain: "yuvaa.co.in",         slug: "yuvaa" },
  { name: "Content Ka Keeda",       domain: "graphy.com",          slug: "content-ka-keeda" },
  { name: "Rajat Pawar",            domain: "youtube.com",         slug: "rajat-pawar" },
  { name: "Real Hit",               domain: "realhit.in",          slug: "real-hit" },
  { name: "Balaji Motion Pictures", domain: "balajitelefilms.com", slug: "balaji-motion-pictures" },
];

function BrandLogo({ item, type, size = "md" }: { item: { name: string; domain: string; slug: string }; type: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const [err, setErr] = useState(0);
  const srcs = [
    `/images/${type}/${item.slug}.png`,
    `/images/${type}/${item.slug}.svg`,
    `/images/brands/${item.slug}.webp`,
    `https://logo.clearbit.com/${item.domain}`,
    `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`,
  ];
  const sizeMap = { 
    sm: "w-14 h-14 md:w-18 md:h-18", 
    md: "w-16 h-16 md:w-24 md:h-24", 
    lg: "w-20 h-20 md:w-28 md:h-28",
    xl: "w-24 h-24 md:w-36 md:h-36"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="group flex flex-col items-center gap-2.5 px-2 md:px-3 relative shrink-0"
      title={item.name}
    >
      <div className={`${sizeMap[size]} relative flex items-center justify-center rounded-[2rem] overflow-hidden shrink-0
        bg-white border border-blue-100
        shadow-[0_4px_20px_rgba(11,46,168,0.06)]
        group-hover:shadow-[0_12px_40px_rgba(11,46,168,0.16)] group-hover:border-blue-300
        transition-all duration-400`}
      >
        {err < srcs.length ? (
          <img src={srcs[err]} alt="" aria-hidden="true"
            className="w-full h-full object-contain p-2 select-none transition-transform duration-400 group-hover:scale-110"
            loading="lazy" onError={() => setErr(p => p + 1)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
            <span className="text-2xl font-black text-white select-none">{item.name[0]}</span>
          </div>
        )}
      </div>
      <span className={`font-bold tracking-[0.15em] uppercase text-blue-800/50 group-hover:text-[#0B2EA8] transition-colors duration-300 text-center leading-tight
        ${size === "xl" ? "text-[10px] md:text-[11px] max-w-[120px]" : "text-[9px] max-w-[80px]"}`}
      >
        {item.name}
      </span>
    </motion.div>
  );
}

interface MarqueeProps { type: "brands" | "content"; dict: any; title?: string; }

export function Marquee({ type, dict, title }: MarqueeProps) {
  const isBrands = type === "brands";
  const items    = isBrands ? brands : contentPartners;
  const rowA     = isBrands ? items.slice(0, Math.ceil(items.length / 2)) : items;
  const rowB     = isBrands ? items.slice(Math.ceil(items.length / 2))    : [];
  const stripA   = [...rowA, ...rowA];
  const stripB   = [...rowB, ...rowB];

  return (
    <section
      aria-label={`${isBrands ? "Trusted By Visionary Brands" : "Trusted by the Best in Content"} - Curious Media`}
      className="relative bg-white overflow-hidden py-12 md:py-16"
    >
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(11,46,168,0.04),transparent)] pointer-events-none" />

      {/* SEO */}
      <div className="sr-only">
        <h2>{isBrands ? "Best Social Media Marketing Company in Delhi, Mumbai, Bangalore, Hyderabad, Chennai - Curious Media" : "India's Premium Content Partnership Network"}</h2>
        <ul>{items.map(i => <li key={i.slug}>{i.name}</li>)}</ul>
      </div>

      {/* ══ HEADER ══ */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 mb-14 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-5"
            >
              {isBrands
                ? <TrendingUp className="w-3.5 h-3.5 text-[#0B2EA8]" />
                : <Users className="w-3.5 h-3.5 text-[#0B2EA8]" />}
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                {isBrands ? dict.marquee.brands_badge : dict.marquee.content_badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-6xl lg:text-[68px] font-black font-heading tracking-tighter leading-[0.95] text-[#0B2EA8] uppercase"
              aria-hidden="true"
            >
              {isBrands ? (
                <>{dict.marquee.brands_title_1}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">{dict.marquee.brands_title_2}</span>
                </>
              ) : (
                <>{dict.marquee.content_title_1}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">{dict.marquee.content_title_2}</span>
                </>
              )}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-3 shrink-0"
          >
            <p
              className="text-sm md:text-base text-blue-800/65 font-medium max-w-sm md:text-right leading-relaxed [&_strong]:text-[#0B2EA8] [&_strong]:font-bold"
              dangerouslySetInnerHTML={{
                __html: isBrands
                  ? "<strong>India's Leading Influencer Marketing Agency for Creator Partnerships,</strong> Brand Campaigns, and Measurable Growth."
                  : "Trusted by top content creators and media brands to manage content libraries, optimize distribution, and unlock new revenue opportunities.",
              }}
            />
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl md:text-4xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-blue-500">
                {isBrands ? "30+" : "70+"}
              </span>
              <span className="text-xs font-bold text-blue-800/50 uppercase tracking-widest">
                {isBrands ? "Brand Partners" : "Content Partners"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══ LOGO STRIPS ══ */}
      {!isBrands ? (
        <div className="container mx-auto px-4 md:px-8 max-w-[1250px] relative z-10 py-6" aria-hidden="true">
          <div className="flex flex-row flex-nowrap items-center justify-start md:justify-center gap-6 md:gap-14 overflow-x-auto md:overflow-x-visible max-w-full pb-4 scrollbar-none">
            {items.map((item) => (
              <BrandLogo key={item.slug} item={item} type="content-partners" size="xl" />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col gap-6 md:gap-8" aria-hidden="true">
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Strip A - left to right */}
          <div className="flex overflow-x-hidden py-4">
            <motion.div
              className="flex items-start"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
              style={{ width: "max-content" }}
            >
              {stripA.map((item, idx) => (
                <BrandLogo key={`a-${item.slug}-${idx}`} item={item} type={type} size="md" />
              ))}
            </motion.div>
          </div>

          {/* Strip B - right to left */}
          {stripB.length > 0 && (
            <div className="flex overflow-x-hidden py-4">
              <motion.div
                className="flex items-start"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 65 }}
                style={{ width: "max-content" }}
              >
                {stripB.map((item, idx) => (
                  <BrandLogo key={`b-${item.slug}-${idx}`} item={item} type={type} size="md" />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
