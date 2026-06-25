"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Video, PenTool, Mic, Users, Layout, Share2, Star, Quote, TrendingUp, Camera, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

function PortfolioCard({ src, alt, fallbackSrc, onSelect }: { src: string; alt: string; fallbackSrc: string; onSelect: () => void }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onSelect}
      className="flex-none w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[460px] aspect-[4/3] bg-white border border-[#0B2EA8]/10 overflow-hidden relative group cursor-pointer shadow-[0_12px_36px_rgba(11,46,168,0.04)] hover:shadow-[0_30px_70px_rgba(11,46,168,0.15)] transition-all duration-500 rounded-none snap-center"
    >
      {/* Image */}
      <img 
        src={imgSrc} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
      />
      
      {/* Premium Minimal Overlay & Icon */}
      <div className="absolute inset-0 bg-[#0A1A4E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        {/* Sleek Minimalist White Circle with magnifying/plus icon */}
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-none border border-white/30 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
          <svg className="w-6 h-6 text-white stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

const segments = [
  {
    id: "fb_products",
    name: "F&B Products Shoots",
    images: Array.from({ length: 8 }, (_, idx) => ({
      src: `/images/studio/fb_products/img${idx + 1}.jpg`,
      fallback: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
      ][idx],
      alt: `F&B Shoot #${idx + 1}`
    }))
  },
  {
    id: "lifestyle",
    name: "Lifestyle Portrait Shoot",
    images: Array.from({ length: 8 }, (_, idx) => ({
      src: `/images/studio/lifestyle/img${idx + 1}.jpg`,
      fallback: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      ][idx],
      alt: `Lifestyle Portrait #${idx + 1}`
    }))
  },
  {
    id: "product_photos",
    name: "Product Photoshoot",
    images: Array.from({ length: 7 }, (_, idx) => ({
      src: `/images/studio/product_photos/img${idx + 1}.jpg`,
      fallback: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      ][idx],
      alt: `Product Shoot #${idx + 1}`
    }))
  }
];

export default function StudioPage() {
  const { locale } = useParams();
  const isHindi = locale === "hi";

  const translate = (text: string) => {
    if (!isHindi) return text;
    const map: Record<string, string> = {
      // General Header / Badges / Buttons
      "Curious Studios": "क्यूरियस स्टूडियो",
      "LET'S CREATE CONTENT": "आइए ऐसा कंटेंट बनाएं",
      "THAT MAKES PEOPLE BUY": "जो लोगों को खरीदने पर मजबूर करे",
      "The one stop shop for all your production needs!!": "आपकी सभी प्रोडक्शन आवश्यकताओं के लिए वन-स्टॉप शॉप!!",
      "Book Your Shoot": "अपना शूट बुक करें",
      
      // Videography Section
      "Videography": "वीडियोग्राफी",
      "From full-scale ad films to high-ROI video creatives across Instagram, YouTube, TikTok, and social media management—we handle it all, start to finish, so you can focus on growing your brand and revenue.":
        "इंस्टाग्राम, यूट्यूब, टिकटॉक और सोशल मीडिया प्रबंधन पर पूर्ण पैमाने की विज्ञापन फिल्मों से लेकर उच्च-आरओआई वीडियो क्रिएटिव तक—हम शुरुआत से अंत तक सब कुछ संभालते हैं, ताकि आप अपने ब्रांड और राजस्व को बढ़ाने पर ध्यान केंद्रित कर सकें।",
      "Horizontal Mobile View": "क्षैतिज मोबाइल दृश्य",
      
      // What We Do
      "What We Do": "हम क्या करते हैं",
      "Inside Curious Studios": "क्यूरियस स्टूडियो के भीतर",
      "Curious Studios sets a new benchmark in quality—every package is built to deliver excellence and includes:":
        "क्यूरियस स्टूडियो गुणवत्ता में एक नया मानदंड स्थापित करता है—प्रत्येक पैकेज उत्कृष्टता प्रदान करने के लिए बनाया गया है और इसमें शामिल हैं:",

      // Services Titles
      "Ad Production": "विज्ञापन निर्माण",
      "Creative Direction": "रचनात्मक दिशा",
      "Editing & Audio": "संपादन और ऑडियो",
      "Talent Hiring": "टैलेंट हायरिंग",
      "Styled Sets": "स्टाइल्ड सेट्स",
      "Social Media Management": "सोशल मीडिया मैनेजमेंट",

      // Services Descriptions
      "From big campaigns to quick-turn ads—we do it all. Flexible, scalable, and tailored to your brand—just like we’ve done for the leading name- Zomato.":
        "बड़े अभियानों से लेकर त्वरित विज्ञापनों तक—हम सब कुछ करते हैं। लचीला, स्केलेबल और आपके ब्रांड के अनुकूल—ठीक वैसे ही जैसे हमने प्रमुख नाम- ज़ोमैटो के लिए किया है।",
      "Don’t know where to start? We’ve got you. Our on-site creative experts shape your vision into content that performs.":
        "पता नहीं कहाँ से शुरू करें? हम आपके साथ हैं। हमारे ऑन-साइट रचनात्मक विशेषज्ञ आपके दृष्टिकोण को ऐसे कंटेंट में ढालते हैं जो प्रदर्शन करता है।",
      "Polished. Powerful. Platform-ready. End-to-end editing with revisions, sound design, and full rights—everything your content needs to stand out.":
        "पॉलिश्ड। शक्तिशाली। प्लेटफॉर्म-रेडी। संशोधनों, ध्वनि डिजाइन और पूर्ण अधिकारों के साथ एंड-टू-एंड संपादन—वह सब कुछ जो आपके कंटेंट को अलग दिखाने के लिए चाहिए।",
      "The right faces for your brand. Access a curated network of creators and performers to bring your story to life.":
        "आपके ब्रांड के लिए सही चेहरे। अपनी कहानी को जीवंत करने के लिए रचनाकारों और कलाकारों के एक क्यूरेटेड नेटवर्क तक पहुँचें।",
      "Every frame, on-brand. Thoughtfully designed sets with handpicked props to make your content visually stand out.":
        "हर फ्रेम, ऑन-ब्रांड। आपके कंटेंट को विज़ुअली अलग दिखाने के लिए चुनिंदा प्रॉप्स के साथ सोच-समझकर डिज़ाइन किए गए सेट्स।",
      "Content is just the start—we make it grow. From posting to performance tracking, we manage your social presence to drive reach, engagement, and results.":
        "कंटेंट तो बस शुरुआत है—हम इसे बढ़ाते हैं। पोस्टिंग से लेकर परफॉर्मेंस ट्रैकिंग तक, हम रीच, जुड़ाव और परिणाम लाने के लिए आपकी सोशल उपस्थिति का प्रबंधन करते हैं।",

      // How It Works
      "Process": "प्रक्रिया",
      "How It Works": "यह कैसे काम करता है",
      "Your brand deserves high-performing content with thumb-stopping quality—built to stand out across every platform. Here's how we make it happen.":
        "आपका ब्रांड थंब-स्टॉपिंग गुणवत्ता के साथ उच्च प्रदर्शन करने वाले कंटेंट का हकदार है—हर प्लेटफॉर्म पर अलग दिखने के लिए बनाया गया है। यहां बताया गया है कि हम इसे कैसे संभव बनाते हैं।",
      "SELECT A PACKAGE": "एक पैकेज चुनें",
      "Choose from flexible production packages tailored to your content, campaign, and growth goals.":
        "अपने कंटेंट, अभियान और विकास लक्ष्यों के अनुरूप लचीले प्रोडक्शन पैकेजों में से चुनें।",
      "BOOK YOUR SHOOT": "अपना शूट बुक करें",
      "Send us your product or brief, and our team handles everything—from creative direction to production.":
        "हमें अपना उत्पाद या ब्रीफ भेजें, और हमारी टीम रचनात्मक दिशा से लेकर प्रोडक्शन तक सब कुछ संभालती है।",
      "WATCH YOUR CONTENT PERFORM": "अपने कंटेंट का प्रदर्शन देखें",
      "Receive platform-ready content designed to grab attention, drive engagement, and grow your brand.":
        "ध्यान आकर्षित करने, जुड़ाव बढ़ाने और आपके ब्रांड को विकसित करने के लिए डिज़ाइन किया गया प्लेटफॉर्म-रेडी कंटेंट प्राप्त करें।",

      // Portfolio
      "Our Work": "हमारा काम",
      "Portfolio": "पोर्टफोलियो",
      "Start Your Project": "अपना प्रोजेक्ट शुरू करें",
      "Photos": "तस्वीरें",
      "F&B Products Shoots": "F&B प्रोडक्ट्स शूट",
      "Lifestyle Portrait Shoot": "लाइफस्टाइल पोर्ट्रेट शूट",
      "Product Photoshoot": "प्रोडक्ट फोटोशूट",
      
      // Floating metrics
      "Campaign ROI": "कैंपेन आरओआई (ROI)",
      "Ad Films": "विज्ञापन फिल्में",
      "Platform Reach": "प्लेटफॉर्म रीच",
    };
    return map[text] || text;
  };

  const [activeTab, setActiveTab] = useState("fb_products");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const rowRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    fb_products: useRef<HTMLDivElement>(null),
    lifestyle: useRef<HTMLDivElement>(null),
    product_photos: useRef<HTMLDivElement>(null),
  };

  const scrollRow = (id: string, direction: "left" | "right") => {
    const el = rowRefs[id]?.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.75;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const services = [
    {
      title: "Ad Production",
      desc: "From big campaigns to quick-turn ads—we do it all. Flexible, scalable, and tailored to your brand—just like we’ve done for the leading name- Zomato.",
      icon: <Video className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Creative Direction",
      desc: "Don’t know where to start? We’ve got you. Our on-site creative experts shape your vision into content that performs.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Editing & Audio",
      desc: "Polished. Powerful. Platform-ready. End-to-end editing with revisions, sound design, and full rights—everything your content needs to stand out.",
      icon: <Mic className="w-6 h-6 text-white" />,
      gradient: "from-[#0B2EA8] to-blue-600"
    },
    {
      title: "Talent Hiring",
      desc: "The right faces for your brand. Access a curated network of creators and performers to bring your story to life.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Styled Sets",
      desc: "Every frame, on-brand. Thoughtfully designed sets with handpicked props to make your content visually stand out.",
      icon: <Layout className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-teal-400"
    },
    {
      title: "Social Media Management",
      desc: "Content is just the start—we make it grow. From posting to performance tracking, we manage your social presence to drive reach, engagement, and results.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-sky-500 to-blue-400"
    },
  ];

  const steps = [
    {
      step: "01",
      title: "SELECT A PACKAGE",
      desc: "Choose from flexible production packages tailored to your content, campaign, and growth goals.",
    },
    {
      step: "02",
      title: "BOOK YOUR SHOOT",
      desc: "Send us your product or brief, and our team handles everything—from creative direction to production.",
    },
    {
      step: "03",
      title: "WATCH YOUR CONTENT PERFORM",
      desc: "Receive platform-ready content designed to grab attention, drive engagement, and grow your brand.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO, TechNova",
      company: "TechNova",
      quote: "Curious Studios's ad production was seamless. They took our concept and delivered a high-converting masterpiece in record time.",
      rating: 5,
      gradient: "from-blue-600 to-sky-400",
      initials: "SJ",
      tagColor: "bg-blue-50 text-blue-700",
    },
    {
      name: "Marcus Aurelius",
      role: "Founder, Apex Brands",
      company: "Apex Brands",
      quote: "The set design and talent they sourced were absolutely phenomenal. It gave our brand an instant premium lift.",
      rating: 5,
      gradient: "from-indigo-600 to-blue-400",
      initials: "MA",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "Global Brands",
      quote: "Their social media management and editing team turns raw footage into viral gold. Simply the best production partner.",
      rating: 5,
      gradient: "from-sky-600 to-cyan-400",
      initials: "PS",
      tagColor: "bg-sky-50 text-sky-700",
    },
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80",
  ];

  const floatingCards = [
    {
      icon: <TrendingUp className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
      label: "Campaign ROI",
      value: "14.5×",
      valueColor: "text-[#0B2EA8]",
      delay: 0.55,
      pos: "left-[-40px] sm:left-[-70px] top-[15%]",
      floatClass: "float-card",
    },
    {
      icon: <Camera className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      label: "Ad Films",
      value: "70+",
      valueColor: "text-violet-600",
      delay: 0.65,
      pos: "right-[-30px] sm:right-[-60px] top-[45%]",
      floatClass: "float-card-slow",
    },
    {
      icon: <Zap className="w-4 h-4 text-white" />,
      iconBg: "bg-gradient-to-br from-[#0B2EA8] to-blue-500",
      label: "Platform Reach",
      value: "100M+",
      valueColor: "text-[#0B2EA8]",
      delay: 0.75,
      pos: "left-[-30px] sm:left-[-60px] bottom-[15%]",
      floatClass: "float-card",
    },
  ];

  return (
    <main className="flex-1 w-full bg-white relative overflow-x-hidden pt-24">
      
      {/* ─── HERO SECTION (Split Layout with Original Mobile Frame) ─── */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-white">
        
        {/* Animated Background from Home Page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
          <motion.div 
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)]"
            style={{
              backgroundImage: "linear-gradient(rgba(11,46,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,46,168,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.15] bg-[#3B82F6]"
            style={{ width: '45vw', height: '45vw', maxWidth: '600px', maxHeight: '600px', top: '-10%', left: '-10%' }}
            animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.12] bg-[#06B6D4]"
            style={{ width: '35vw', height: '35vw', maxWidth: '500px', maxHeight: '500px', top: '20%', right: '-5%' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 md:pt-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 mb-6 shadow-[0_2px_16px_rgba(11,46,168,0.10)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0B2EA8]">{translate("Curious Studios")}</span>
              </motion.div>

              <h1 className="flex flex-col mb-6 w-full font-black font-heading leading-[0.9] tracking-tighter text-[50px] sm:text-[60px] md:text-[76px] lg:text-[84px] uppercase">
                <motion.span
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 pb-2 drop-shadow-sm"
                >
                  {translate("LET'S CREATE CONTENT")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="block relative text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 w-fit pb-2"
                >
                  {translate("THAT MAKES PEOPLE BUY")}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: [0.16,1,0.3,1] }}
                    className="absolute bottom-0 left-0 h-[5px] w-full origin-left rounded-full bg-gradient-to-r from-[#0B2EA8] via-cyan-400 to-sky-300"
                  />
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-2xl font-black text-[#0B2EA8] mb-8 tracking-tight uppercase"
              >
                {translate("The one stop shop for all your production needs!!")}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link 
                  href={`/${locale}/contact`}
                  className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-white font-black uppercase text-sm tracking-widest overflow-hidden shadow-[0_8px_28px_rgba(11,46,168,0.30)] hover:shadow-[0_16px_48px_rgba(11,46,168,0.45)] hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2EA8] via-blue-500 to-[#0B2EA8] bg-[size:200%] hover:bg-right-center transition-all duration-700 group-hover:bg-[position:100%]" />
                  <span className="relative z-10">{translate("Book Your Shoot")}</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Cinematic Pure Viewport Glass UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center items-center relative py-14 perspective-[1200px]"
            >
              {/* Brand Cohesive Aura Glow (Royal Blue / Sky Blue Blur) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-500/15 via-[#0B2EA8]/10 to-cyan-300/10 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
              </div>

              {/* Master Console Viewport (Frosted White Crystal Bezel with 3D Hover Tilt - Pure Video Display) */}
              <motion.div 
                whileHover={{ rotateY: -8, rotateX: 6, scale: 1.03 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 0.5, ease: "easeOut" },
                  rotateX: { duration: 0.5, ease: "easeOut" },
                  scale: { duration: 0.5, ease: "easeOut" }
                }}
                className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] aspect-[9/16] max-h-[75vh] p-3 rounded-[2.5rem] border border-white/60 hover:border-[#0B2EA8]/35 bg-white/30 backdrop-blur-2xl shadow-[0_30px_70px_rgba(11,46,168,0.15),0_0_20px_rgba(11,46,168,0.04),inset_0_2px_4px_rgba(255,255,255,0.4)] overflow-hidden transition-all duration-500 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                
                {/* CINEMATIC PURE VIDEO FIELD (Framed with crisp matching borders) */}
                <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-[#F8FAFF] border border-[#0B2EA8]/10 shadow-[inset_0_1px_4px_rgba(11,46,168,0.06)]">
                  
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-95 transition-transform duration-[1200ms] group-hover:scale-[1.03] will-change-transform transform-gpu"
                  >
                    <source 
                      src="/videos/studio-hero.mp4" 
                      type="video/mp4" 
                    />
                  </video>

                </div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-none bg-[#F8FAFF]">
        <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-16 rotate-180 bg-white">
          <path d="M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z" fill="#F8FAFF"/>
        </svg>
      </div>

      {/* ─── VIDEOGRAPHY & HORIZONTAL MOBILE SCREEN ─── */}
      <section className="py-8 md:py-10 bg-[#F8FAFF] relative overflow-hidden flex flex-col justify-center min-h-0 md:min-h-screen">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10 text-center flex-1 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8 shrink-0"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[50px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase mb-3 py-1">
              {translate("Videography")}
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">
              {translate("From full-scale ad films to high-ROI video creatives across Instagram, YouTube, TikTok, and social media management—we handle it all, start to finish, so you can focus on growing your brand and revenue.")}
            </p>
          </motion.div>

          {/* Horizontal Mobile Screen Device */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-3xl lg:max-w-4xl max-h-[30vh] md:max-h-[50vh] aspect-[19.5/9] rounded-[2rem] md:rounded-[3.5rem] border-[6px] md:border-[16px] border-[#1a1a2e] bg-[#1a1a2e] shadow-[0_40px_100px_rgba(11,46,168,0.25)] flex items-center justify-center shrink-0 mb-8"
          >
            {/* Dynamic Island (Horizontal Orientation - left side) */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2 w-[16px] md:w-[24px] h-[30%] bg-[#1a1a2e] rounded-full z-30 shadow-inner flex items-center justify-center">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#2a2a3e]" />
            </div>

            <div className="w-full h-full bg-black rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer">
              {/* Video removed temporarily */}


              {/* Floating Tag inside screen */}
              <div className="absolute bottom-6 right-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 hidden md:block">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white font-black">{translate("Horizontal Mobile View")}</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-16 bg-[#F8FAFF]">
          <path d="M0,26 C360,52 1080,0 1440,26 L1440,52 L0,52 Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-24 md:py-36 bg-white relative">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8] mb-4">{translate("What We Do")}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase mb-6 pb-2">
              {translate("Inside Curious Studios")}
            </h3>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
              {translate("Curious Studios sets a new benchmark in quality—every package is built to deliver excellence and includes:")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(11,46,168,0.04)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.12)] transition-all duration-500 border border-slate-100 hover:border-blue-200 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md relative z-10`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black font-heading text-[#0A1A4E] mb-4 relative z-10">{translate(item.title)}</h4>
                <p className="text-slate-500 font-medium leading-relaxed relative z-10">
                  {translate(item.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 md:py-36 bg-[#0A1A4E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -ml-48 -mb-48" />
        
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400 mb-4">{translate("Process")}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-[70px] font-black font-heading tracking-tighter text-white uppercase mb-6 leading-none">
              {translate("How It Works")}
            </h3>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-4xl mx-auto leading-relaxed">
              {translate("Your brand deserves high-performing content with thumb-stopping quality—built to stand out across every platform. Here's how we make it happen.")}
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-y-1/2 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative bg-white rounded-3xl p-10 border-2 border-sky-400 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_70px_rgba(56,189,248,0.25)] transition-all duration-300 group text-center flex flex-col items-center hover:scale-[1.02]"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-sky-400 via-blue-500 to-[#0B2EA8] rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-[0_8px_20px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="mt-8">
                    <h4 className="text-2xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-500 mb-4 uppercase tracking-tight">
                      {translate(step.title)}
                    </h4>
                    <p className="text-slate-600 font-semibold leading-relaxed">
                      {translate(step.desc)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO (Three Horizontal Scroll lines, one for each segment) ─── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0B2EA8] mb-4">{translate("Our Work")}</h2>
              <h3 className="text-4xl md:text-6xl lg:text-[70px] font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A4E] via-blue-600 to-sky-400 uppercase leading-none pb-2">
                {translate("Portfolio")}
              </h3>
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2.5 px-6 py-3 rounded-none bg-[#0A1A4E] text-white font-black uppercase tracking-wider text-xs hover:bg-[#0B2EA8] hover:scale-105 transition-all duration-300 shadow-md">
              {translate("Start Your Project")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Three Lines/Rows, one by one */}
          <div className="flex flex-col gap-20 md:gap-28">
            {segments.map((seg) => (
              <div key={seg.id} className="relative w-full border-b border-slate-100/80 pb-16 last:border-b-0 last:pb-0">
                
                {/* Segment Title & Controls */}
                <div className="px-1 mb-8 flex items-center justify-between">
                  <div className="flex items-baseline gap-4">
                    <h4 className="text-2xl md:text-3xl font-black font-heading text-[#0A1A4E] uppercase tracking-tight">
                      {translate(seg.name)}
                    </h4>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0B2EA8] bg-blue-50 px-2.5 py-1 border border-blue-100/30">
                      {seg.images.length} {translate("Photos")}
                    </span>
                  </div>

                  {/* Desktop Navigation — pill buttons */}
                  <div className="hidden md:flex items-center gap-3">
                    <button
                      onClick={() => scrollRow(seg.id, "left")}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#0B2EA8] font-black text-xs uppercase tracking-widest shadow-md hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200 group"
                      aria-label="Scroll Left"
                    >
                      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                      Prev
                    </button>
                    <button
                      onClick={() => scrollRow(seg.id, "right")}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B2EA8] text-white font-black text-xs uppercase tracking-widest shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
                      aria-label="Scroll Right"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="w-full relative">
                  {/* Left & Right gradient overlays for smooth fade effect */}
                  <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#F8FAFF] via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#F8FAFF] via-transparent to-transparent z-10 pointer-events-none" />

                  <div 
                    ref={rowRefs[seg.id] as any}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  >
                    {seg.images.map((img, i) => (
                      <PortfolioCard
                        key={`${seg.id}-card-${i}`}
                        src={img.src}
                        fallbackSrc={img.fallback}
                        alt={img.alt}
                        onSelect={() => setSelectedImage(img.src)}
                      />
                    ))}
                    <div className="flex-none w-12" /> {/* Right spacer */}
                  </div>
                </div>

                {/* Mobile Navigation — pill bar below each row */}
                <div className="md:hidden flex items-center justify-center gap-3 mt-4">
                  <button
                    onClick={() => scrollRow(seg.id, "left")}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-blue-100 text-[#0B2EA8] font-black text-xs uppercase tracking-widest shadow-md active:scale-95 transition-all duration-200"
                    aria-label="Scroll Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>
                  <button
                    onClick={() => scrollRow(seg.id, "right")}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2EA8] text-white font-black text-xs uppercase tracking-widest shadow-md active:scale-95 transition-all duration-200"
                    aria-label="Scroll Right"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─── LIGHTBOX MODAL ─── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button (Square Design) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors rounded-none"
              aria-label="Close Lightbox"
            >
              <svg className="w-6 h-6 stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image display */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-5xl max-h-[85vh] aspect-auto overflow-hidden border border-white/10 bg-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Portfolio Work"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
