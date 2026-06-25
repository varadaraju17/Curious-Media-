"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Filter } from "lucide-react";
import { useParams } from "next/navigation";

export default function MediaPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isHindi = locale === "hi";

  const translate = (text: string) => {
    if (!isHindi) return text;
    const map: Record<string, string> = {
      "Curious": "क्यूरियस",
      "Media.": "मीडिया।",
      "We represent the new elite of digital storytellers and orchestrate campaigns that define internet culture.":
        "हम डिजिटल कहानीकारों के नए अभिजात वर्ग का प्रतिनिधित्व करते हैं और ऐसे अभियानों का आयोजन करते हैं जो इंटरनेट संस्कृति को परिभाषित करते हैं।",
      "Our Core Offerings": "हमारी मुख्य पेशकश",
      "Social Media Strategy": "सोशल मीडिया रणनीति",
      "Data-driven organic growth and engagement.": "डेटा-संचालित जैविक विकास और जुड़ाव।",
      "Brand Deals": "ब्रांड डील्स",
      "Connecting visionary brands with perfect creative partners.": "दूरदर्शी ब्रांडों को सही रचनात्मक भागीदारों के साथ जोड़ना।",
      "Influencer Marketing": "इन्फ्लुएंसर मार्केटिंग",
      "End-to-end campaign management and reporting.": "शुरुआत से अंत तक अभियान प्रबंधन और रिपोर्टिंग।",
      "Events & Activations": "इवेंट्स और एक्टिवेशन्स",
      "On-ground and digital experiential activations.": "ऑन-ग्राउंड और डिजिटल अनुभवात्मक एक्टिवेशन्स।",
      "Talent Acquisition": "टैलेंट एक्विजिशन",
      "Scouting and managing elite digital talent.": "अभिजात वर्ग के डिजिटल टैलेंट की खोज और प्रबंधन।",
      "Campaign Production": "अभियान निर्माण",
      "In-house creative engineering for top-tier campaigns.": "शीर्ष स्तर के अभियानों के लिए इन-हाउस रचनात्मक इंजीनियरिंग।",
      "Discover Talent": "टैलेंट खोजें",
      "Our proprietary marketplace algorithm.": "हमारा मालिकाना मार्केटप्लेस एल्गोरिथम।",
      "Search creators, niches, platforms...": "क्रिएटर्स, श्रेणियों, प्लेटफॉर्म्स खोजें...",
      "Filter": "फिल्टर",
      "Tech & Lifestyle": "टेक और लाइफस्टाइल",
      "Gaming": "गेमिंग",
      "Fashion": "फैशन",
      "Fitness": "फिटनेस",
      "Global": "वैश्विक",
      "Explore All Creators": "सभी क्रिएटर्स का अन्वेषण करें",
      "Campaign Case Studies": "अभियान केस स्टडीज",
      "Nike x MrBeast": "नाइकी x मिस्टरबीस्ट",
      "Global sneaker launch driving massive Gen-Z engagement.": "ग्लोबल स्नीकर लॉन्च जो बड़े पैमाने पर जेन-ज़ी जुड़ाव को संचालित करता है।",
      "Impressions": "इंप्रेशन्स",
      "Engagement": "जुड़ाव",
      "Spotify Unwrapped": "स्पॉटिफ़ाई अनरैप्ड",
      "Multi-creator amplification of the annual music wrap up.": "वार्षिक संगीत रैप अप का मल्टी-क्रिएटर प्रवर्धन।",
      "Reach": "पहुंच",
      "Conversion": "कनवर्जन",
    };
    return map[text] || text;
  };

  const services = [
    { name: "Social Media Strategy", desc: "Data-driven organic growth and engagement." },
    { name: "Brand Deals", desc: "Connecting visionary brands with perfect creative partners." },
    { name: "Influencer Marketing", desc: "End-to-end campaign management and reporting." },
    { name: "Events & Activations", desc: "On-ground and digital experiential activations." },
    { name: "Talent Acquisition", desc: "Scouting and managing elite digital talent." },
    { name: "Campaign Production", desc: "In-house creative engineering for top-tier campaigns." },
  ];

  const creators = [
    { name: "Sarah Jenkins", category: "Tech & Lifestyle", followers: "1.2M", rating: 4.9 },
    { name: "David Kim", category: "Gaming", followers: "3.4M", rating: 4.8 },
    { name: "Elena Rossi", category: "Fashion", followers: "800K", rating: 5.0 },
    { name: "Marcus Johnson", category: "Fitness", followers: "2.1M", rating: 4.7 },
  ];

  return (
    <main className="flex-1 w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 border-b border-blue-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0B2EA8]/5 blur-[150px] rounded-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            {translate("Curious")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400">{translate("Media.")}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-800/70 max-w-3xl mx-auto mb-10"
          >
            {translate("We represent the new elite of digital storytellers and orchestrate campaigns that define internet culture.")}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-heading mb-12 text-[#0A1A4E] uppercase">{translate("Our Core Offerings")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(11,46,168,0.03)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.1)] transition-all duration-500 group"
              >
                <h3 className="text-xl font-bold mb-3 text-[#0A1A4E] group-hover:text-[#0B2EA8] transition-colors">{translate(service.name)}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{translate(service.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Marketplace UI Mockup */}
      <section className="py-32 px-4 md:px-8 bg-[#F8FAFF] relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4 text-[#0A1A4E] uppercase">{translate("Discover Talent")}</h2>
              <p className="text-slate-500 font-medium">{translate("Our proprietary marketplace algorithm.")}</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative bg-white border border-slate-200 rounded-full px-5 py-3 flex items-center gap-3 w-full sm:w-80 shadow-sm">
                <Search className="w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder={translate("Search creators, niches, platforms...")} 
                  className="bg-transparent border-none outline-none text-slate-800 w-full placeholder:text-slate-400 text-sm font-medium"
                  readOnly
                />
              </div>
              <button className="bg-white border border-slate-200 rounded-full px-6 py-3 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-[#0A1A4E] font-black uppercase tracking-wider text-xs">
                <Filter className="w-4 h-4" /> {translate("Filter")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator, i) => (
              <motion.div 
                key={creator.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(11,46,168,0.03)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.1)] transition-all duration-500"
              >
                <div className="h-48 bg-[#F8FAFF] relative overflow-hidden flex items-center justify-center border-b border-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50"></div>
                  <span className="absolute font-black text-4xl font-heading text-[#0B2EA8]/30">{creator.name[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-[#0A1A4E]">{creator.name}</h3>
                  <p className="text-[#0B2EA8] text-sm font-black uppercase tracking-wider mb-4">{translate(creator.category)}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-slate-400"><MapPin className="w-4 h-4 text-[#0B2EA8]/70" /> {translate("Global")}</span>
                    <span className="font-bold text-[#0A1A4E]">{creator.followers}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-full bg-[#0A1A4E] text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-lg shadow-blue-900/10">
              {translate("Explore All Creators")}
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold font-heading mb-16 text-[#0A1A4E] uppercase">{translate("Campaign Case Studies")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#F8FAFF] border border-slate-100 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_8px_30px_rgba(11,46,168,0.03)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.1)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10 text-[#0A1A4E]">{translate("Nike x MrBeast")}</h3>
              <p className="text-slate-500 font-medium mb-8 relative z-10">{translate("Global sneaker launch driving massive Gen-Z engagement.")}</p>
              <div className="flex gap-8 relative z-10">
                <div>
                  <p className="text-4xl font-black text-[#0B2EA8] font-heading">45M+</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{translate("Impressions")}</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-sky-500 font-heading">2.1M</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{translate("Engagement")}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8FAFF] border border-slate-100 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_8px_30px_rgba(11,46,168,0.03)] hover:shadow-[0_20px_60px_rgba(11,46,168,0.1)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10 text-[#0A1A4E]">{translate("Spotify Unwrapped")}</h3>
              <p className="text-slate-500 font-medium mb-8 relative z-10">{translate("Multi-creator amplification of the annual music wrap up.")}</p>
              <div className="flex gap-8 relative z-10">
                <div>
                  <p className="text-4xl font-black text-[#0B2EA8] font-heading">120M</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{translate("Reach")}</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-sky-500 font-heading">14%</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{translate("Conversion")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
