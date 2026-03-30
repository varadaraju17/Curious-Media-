"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Send, MessageCircle, MapPin, Mail, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      // NOTE: Replace with your actual EmailJS Service ID, Template ID, and Public Key
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      
      // Simulating network request for placeholder
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <main className="flex-1 w-full bg-black min-h-screen">
      <section className="pt-40 pb-20 px-4 md:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mb-12 md:mb-0"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                Let's Make <br/> <span className="text-gradient">History.</span>
              </h1>
              <p className="text-xl text-white/70">
                Whether you're a visionary brand looking for unmatched ROI, or an elite creator ready to conquer the internet. We're ready.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-3xl md:min-w-[400px]"
            >
              <h3 className="text-2xl font-bold font-heading mb-6">Direct Channels</h3>
              <div className="space-y-6">
                <a href="mailto:hello@curiousmedia.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                     <p className="text-sm uppercase tracking-wider font-bold mb-1">Email</p>
                     <p className="text-lg">hello@curiousmedia.com</p>
                  </div>
                </a>
                
                {/*  NOTE: Replace with your actual WhatsApp number e.g. https://wa.me/1234567890 */}
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                     <p className="text-sm uppercase tracking-wider font-bold mb-1">WhatsApp</p>
                     <p className="text-lg">Message via WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/70 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                     <p className="text-sm uppercase tracking-wider font-bold mb-1">HQ</p>
                     <p className="text-lg">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold font-heading mb-8">Send an Inquiry</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Full Name</label>
                  <input type="text" name="user_name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Email Address</label>
                  <input type="email" name="user_email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Company / Brand</label>
                  <input type="text" name="user_company" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors" placeholder="Optional" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Inquiry Type</label>
                  <select name="inquiry_type" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors appearance-none">
                    <option value="brand_deal">Brand Campaign</option>
                    <option value="talent">Talent Representation</option>
                    <option value="studio">Studio / Production</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Message</label>
                <textarea name="message" required rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading || success}
                className="w-full py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : success ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <><Send className="w-5 h-5"/> Send Inquiry</>}
              </button>
              {success && <p className="text-green-400 text-center text-sm mt-4 font-bold">Message sent successfully! We'll be in touch shortly.</p>}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
