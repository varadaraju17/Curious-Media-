"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  { name: "Balaji Telefilms",       domain: "balajitelefilms.com", slug: "balaji-telefilms" },
  { name: "Balaji Motion Pictures", domain: "balajitelefilms.com", slug: "balaji-motion-pictures" },
  { name: "Rajat Pawar",            domain: "youtube.com",         slug: "rajat-pawar" },
  { name: "Yuvaa",                  domain: "yuvaa.co.in",         slug: "yuvaa" },
  { name: "Real Hit",               domain: "realhit.in",          slug: "real-hit" },
  { name: "Content Ka Keeda",       domain: "graphy.com",          slug: "content-ka-keeda" },
];

/* ─── LOGO CARD ─── */
function BrandLogo({
  item,
  type,
  size = "md",
}: {
  item: { name: string; domain: string; slug: string };
  type: string;
  size?: "sm" | "md" | "lg";
}) {
  const [err, setErr] = useState(0);
  const srcs = [
    `/images/${type}/${item.slug}.png`,
    `/images/${type}/${item.slug}.svg`,
    `/images/brands/${item.slug}.png`,
    `https://logo.clearbit.com/${item.domain}`,
    `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`,
  ];

  const sizeMap = {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-20 h-20 md:w-28 md:h-28",
    lg: "w-24 h-24 md:w-36 md:h-36",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 50, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex flex-col items-center gap-3 px-3 md:px-5 relative"
      title={item.name}
    >
      {/* Floating Glow Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/0 blur-[30px] rounded-full group-hover:bg-blue-400/40 transition-colors duration-500 -z-10 pointer-events-none" />

      {/* Logo tile */}
      <div
        className={`${sizeMap[size]} relative flex items-center justify-center rounded-[1.5rem] overflow-hidden shrink-0
          bg-white/95 backdrop-blur-md border border-white/60
          shadow-[0_8px_30px_rgba(4,13,33,0.5),inset_0_2px_10px_rgba(255,255,255,0.8)]
          group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.4),0_0_0_2px_rgba(96,165,250,0.6)]
          transition-all duration-500`}
      >
        {err < srcs.length ? (
          <img
            src={srcs[err]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain p-4 select-none relative z-10 transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setErr(p => p + 1)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
            <span className="text-3xl font-black text-white select-none" aria-hidden="true">
              {item.name[0]}
            </span>
          </div>
        )}
      </div>

      {/* Name label */}
      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase leading-tight text-center
        text-white/20 group-hover:text-white transition-colors duration-400
        max-w-[72px] md:max-w-[112px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 absolute -bottom-8">
        {item.name}
      </span>
    </motion.div>
  );
}

/* ─── MARQUEE COMPONENT ─── */
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
      aria-label={`${isBrands ? "Trusted By Visionary Brands" : "Trusted by the Best in Content"} — Curious Media`}
      className="relative bg-[#040D21] border-y border-blue-400/10 overflow-hidden py-24 md:py-32"
    >
      {/* ── Background Giant Typography ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] flex items-center justify-center">
        <h2 className="text-[20vw] font-black font-heading tracking-tighter whitespace-nowrap text-white">
          {isBrands ? "BRANDS BRANDS" : "STUDIOS STUDIOS"}
        </h2>
      </div>

      {/* Background glow lines */}
      <div className="absolute top-1/4 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* ── Screen-reader SEO text ── */}
      <div className="sr-only">
        <h2>
          {isBrands
            ? "Best Social Media Marketing Company in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad — Curious Media"
            : "India's Premium Content Partnership Network — Top Digital Studios and Creator Collectives"}
        </h2>
        <ul>{items.map(i => <li key={i.slug}>{i.name}</li>)}</ul>
      </div>

      {/* ══ CONTENT HEADER ══ */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 mb-16 md:mb-24 text-center flex flex-col items-center">
        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-400/25 bg-blue-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.15)] mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,1)]" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-200">
            {isBrands ? "Brand Partners" : "Content Partners"}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-[70px] font-black font-heading tracking-tighter leading-[1.05] text-white max-w-4xl"
          aria-hidden="true"
        >
          {isBrands ? (
            <>
              Trusted by the world&apos;s <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                most visionary brands.
              </span>
            </>
          ) : (
            <>
              We partner with the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
                best in content.
              </span>
            </>
          )}
        </motion.h2>

        {/* SEO / Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-lg text-white/45 leading-relaxed font-medium mt-6 max-w-3xl
            [&_strong]:text-blue-300 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{
            __html: isBrands
              ? "The most trusted <strong>influencer marketing agency</strong> in <strong>Delhi, Mumbai, Bangalore, Hyderabad &amp; all metro cities</strong> — delivering guaranteed viewership and real ROI for India's biggest brands."
              : "We co-create and amplify content with India's top digital studios — delivering <strong>branded entertainment</strong> that reaches <strong>millions of engaged viewers</strong> across every platform.",
          }}
        />

        {/* Statistics count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-baseline gap-2"
        >
          <span className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            {isBrands ? "29+" : "6+"}
          </span>
          <span className="text-xs md:text-sm font-bold text-white/35 uppercase tracking-widest">
            {isBrands ? "Brand Partners" : "Studio Partners"}
          </span>
        </motion.div>
      </div>

      {/* ══ LOGO STRIP(S) ══ */}
      <div className="relative z-10 flex flex-col gap-8 md:gap-12" aria-hidden="true">

        {/* Glass Ribbon Backdrop */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[180px] md:h-[220px] bg-white/[0.02] backdrop-blur-[2px] border-y border-white/5 pointer-events-none" />

        {/* Row A — left to right */}
        <div className="relative flex overflow-x-hidden pt-8">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: isBrands ? 60 : 40 }}
            style={{ width: "max-content" }}
          >
            {stripA.map((item, idx) => (
              <BrandLogo key={`a-${item.slug}-${idx}`} item={item} type={type} size={isBrands ? "md" : "lg"} />
            ))}
          </motion.div>
        </div>

        {/* Row B — right to left (brands only) */}
        {isBrands && stripB.length > 0 && (
          <div className="relative flex overflow-x-hidden pb-8">
            <motion.div
              className="flex items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
              style={{ width: "max-content" }}
            >
              {stripB.map((item, idx) => (
                <BrandLogo key={`b-${item.slug}-${idx}`} item={item} type={type} size="md" />
              ))}
            </motion.div>
          </div>
        )}

        {/* Edge fades for seamless infinite scroll */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#040D21] via-[#040D21]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#040D21] via-[#040D21]/80 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
