"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mic, Music, Star, ArrowRight, Play, Headphones, Radio, TrendingUp, Globe, Users } from "lucide-react";

const ARTISTS = [
  { name: "Aryan Verma", genre: "Hip-Hop / Rap", streams: "48M+", status: "Signed" },
  { name: "Priya Nair",  genre: "Indie Pop",     streams: "22M+", status: "Signed" },
  { name: "The Drifts",  genre: "Alt Rock",       streams: "31M+", status: "Signed" },
  { name: "Riya Sen",    genre: "R&B / Soul",     streams: "17M+", status: "Emerging" },
  { name: "Karan Das",   genre: "EDM / Electronic",streams: "62M+", status: "Signed" },
  { name: "Nova Bloom",  genre: "Ambient / Lo-fi", streams: "9M+",  status: "Emerging" },
];

const SERVICES = [
  {
    icon: <Mic className="w-6 h-6 text-violet-300 relative z-10" />,
    title: "Artist Discovery",
    desc: "We find raw talent across India and the world through our data-driven scouting network and dedicated A&R team.",
  },
  {
    icon: <Music className="w-6 h-6 text-fuchsia-300 relative z-10" />,
    title: "Record Production",
    desc: "State-of-the-art studio sessions, beatmakers, and world-class producers to shape your signature sound.",
  },
  {
    icon: <Radio className="w-6 h-6 text-pink-300 relative z-10" />,
    title: "Distribution",
    desc: "Global distribution across Spotify, Apple Music, JioSaavn, YouTube Music, and 150+ DSPs on day one.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-violet-300 relative z-10" />,
    title: "Marketing & Promotion",
    desc: "Data-led playlist pitching, social campaigns, and influencer rollouts that turn releases into chart moments.",
  },
  {
    icon: <Globe className="w-6 h-6 text-fuchsia-300 relative z-10" />,
    title: "Sync Licensing",
    desc: "Placing your music in films, ads, OTT series, and brand campaigns for lasting royalty income.",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-300 relative z-10" />,
    title: "Artist Management",
    desc: "360° career management — from brand deals and tours to public relations and fanbase building.",
  },
];

const STATS = [
  { value: "120+", label: "Artists Signed" },
  { value: "2B+",  label: "Total Streams" },
  { value: "40+",  label: "Chart Hits" },
  { value: "150+", label: "DSP Partners" },
];

export default function CuriousRecordsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B2EA8] overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(124,58,237,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60"></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-fuchsia-600/25 to-violet-900/5 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-pink-600/10 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(192,38,211,0.2)]"
          >
            <Headphones className="w-3.5 h-3.5 text-fuchsia-300" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-fuchsia-200">Curious Music</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black font-heading tracking-tighter leading-[0.88] mb-8"
          >
            <span className="text-white">Discovering Talent.</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-300 to-pink-400">
              Building Artists.
            </span><br />
            <span className="text-white/80">Creating Stars.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Curious Music is India's boldest independent music label — forging the next generation of artists through creative freedom, world-class production, and global reach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/en/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-8 py-4 text-white font-black text-base tracking-wide shadow-[0_0_35px_rgba(124,58,237,0.55)] hover:shadow-[0_0_55px_rgba(192,38,211,0.7)] hover:scale-105 transition-all duration-300"
            >
              Submit Your Music
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group inline-flex items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-500/5 backdrop-blur-sm px-8 py-4 text-white font-bold hover:border-violet-400/60 hover:bg-violet-500/12 transition-all duration-300">
              <Play className="w-4 h-4 fill-white" />
              Listen to Our Artists
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-16 border-y border-violet-500/10 bg-[#0E0E1A]/50">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300 mb-2">{s.value}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-violet-700/8 blur-[200px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-400/20 bg-violet-500/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-200">Full-Spectrum Label</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter mb-6 text-white">
              Everything Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-300 to-pink-400">
                Music Career Needs.
              </span>
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">From the recording booth to the billboard — we handle every step of your journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 rounded-[2rem] bg-[#0E0E1A] border border-violet-500/10 hover:border-violet-400/30 hover:bg-violet-600/5 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_10px_40px_rgba(8,8,16,0.7)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-12 h-12 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:border-violet-400/40 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed font-medium">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR ARTISTS ── */}
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-violet-500/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-800/8 blur-[200px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 backdrop-blur-md mb-6">
              <Star className="w-3 h-3 text-fuchsia-300" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-fuchsia-200">Our Roster</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-white mb-4">
              Artists We <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-400">Believe In.</span>
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto">A curated roster of boundary-pushing musicians, each with a unique voice.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTISTS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-[#0E0E1A] border border-violet-500/10 hover:border-violet-400/30 hover:bg-violet-600/5 transition-all duration-400 cursor-pointer"
              >
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_30px_rgba(192,38,211,0.4)] transition-shadow">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-base truncate">{a.name}</p>
                  <p className="text-violet-300/60 text-xs font-medium mt-0.5">{a.genre}</p>
                  <p className="text-white/30 text-xs mt-1">{a.streams} streams</p>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shrink-0 ${
                  a.status === "Signed"
                    ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                    : "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/15"
                }`}>
                  {a.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-violet-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(124,58,237,0.15),transparent)] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-[900px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tighter mb-6 text-white leading-tight">
              Ready to Make <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-300 to-pink-400">
                Your Mark?
              </span>
            </h2>
            <p className="text-white/45 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              We&apos;re always listening. Submit your demo and let&apos;s build something extraordinary together.
            </p>
            <Link href="/en/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-10 py-5 text-white font-black text-lg tracking-wide shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_rgba(192,38,211,0.7)] hover:scale-105 transition-all duration-300"
            >
              Submit Your Demo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
