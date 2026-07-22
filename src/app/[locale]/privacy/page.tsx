"use client";

import { motion } from "framer-motion";
import { Shield, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PrivacyPage() {
  const params = useParams();
  const locale = (params.locale as string) || "en";

  return (
    <main className="flex-1 w-full bg-[#F8FAFF] min-h-screen relative pt-28 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        
        {/* Back Link */}
        <Link 
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0B2EA8] hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-blue-100 shadow-[0_8px_30px_rgba(11,46,168,0.05)] mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2EA8] mb-6">
            <Shield className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">Privacy &amp; Data Protection</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-[#0A1A4E] uppercase mb-4 leading-none">
            Privacy Policy
          </h1>

          <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
            <Calendar className="w-4 h-4 text-[#0B2EA8]" />
            <span>Last Updated: July 15, 2026</span>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-blue-100 shadow-[0_8px_30px_rgba(11,46,168,0.05)] text-slate-700 font-medium leading-relaxed space-y-10"
        >
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">1</span>
              Introduction
            </h2>
            <p className="mb-3">
              Curious Media (&quot;Curious Media,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a creative media and marketing company offering services including Influencer Marketing, Content Production, Digital Marketing, Brand Partnerships, PR &amp; Brand Awareness Campaigns, Community Building, Online Reputation Management, and Content Distribution.
            </p>
            <p className="mb-3">
              This Privacy Policy explains how we collect, use, store, share, and protect personal information when you visit our website at{" "}
              <a href="https://curiousmedia.in/" target="_blank" rel="noopener noreferrer" className="text-[#0B2EA8] font-bold underline">https://curiousmedia.in/</a>{" "}
              (the &quot;Website&quot;), interact with our forms, or otherwise engage with us.
            </p>
            <p className="mb-3">
              This Policy has been prepared in accordance with India&apos;s Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;), and reflects global privacy best practices, including principles of transparency commonly associated with regulations such as the GDPR. We do not claim certification or formal compliance with any jurisdiction of law other than legally applicable to us.
            </p>
            <p>
              By using our website or submitting information through it, you agree to the practices described in this Policy. If you do not agree, please do not use our website or submit your information to us.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">2</span>
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600">
              <li>
                <strong className="text-[#0A1A4E]">Submitted Information:</strong> Information you provide directly, including identity details, contact details, profile information, Company Name / Website, Subject / Query, Message content communications through the Website (such as chat rooms, forums), and other demographic or personal data you voluntarily submit.
              </li>
              <li>
                <strong className="text-[#0A1A4E]">Aggregate Information:</strong> Automatically collected technical data including device information, IP address, browser type, operating system, usage patterns, cookies data, and location data.
              </li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">3</span>
              How We Use Your Information
            </h2>
            <p className="mb-3">We use the information collected for purposes including:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Personalize and enhance your overall user experience.</li>
              <li>Send important updates, promotional campaigns, contests, surveys, and service-related communications.</li>
              <li>Conduct market research, user insights, and customer behavior analysis to improve our products and services.</li>
              <li>Detect, investigate, and prevent fraud, security threats, and other unlawful activities.</li>
              <li>Maintain the security, performance, and smooth functioning of the Website and its services.</li>
            </ul>
            <p>
              We do not use your personal data for any purpose incompatible with the purpose for which it was originally collected, without seeking your fresh consent where required.
            </p>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">4</span>
              Legal Basis for Processing
            </h2>
            <p className="mb-3">Under the DPDP Act, we process personal data primarily on the basis of:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>
                <strong className="text-[#0A1A4E]">Your Consent:</strong> Provided when you submit the Contact Form or otherwise voluntarily share information with us; and
              </li>
              <li>
                <strong className="text-[#0A1A4E]">Legitimate Uses:</strong> Such as responding to a request you have initiated, or where processing is necessary for purposes specified under applicable law.
              </li>
            </ul>
            <p>
              Where we rely on consent, you have the right to withdraw it at any time, as described in Section 10 (User Rights). Withdrawal of consent will not affect the lawfulness of processing carried out before such withdrawal.
            </p>
          </section>

          {/* 5. Cookies & Tracking Technologies */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">5</span>
              Cookies &amp; Tracking Technologies
            </h2>
            <p className="mb-3">
              Our Website uses cookies for enhancing user experience, recognizing devices, and analytics. You can disable cookies via browser settings, though this may impact website functionality.
            </p>
            <p>
              You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the Website. Where required by law, we will seek your consent before deploying non-essential cookies.
            </p>
          </section>

          {/* 6. Sharing & Disclosure of Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">6</span>
              Sharing &amp; Disclosure of Information
            </h2>
            <p className="mb-3 font-bold text-[#0A1A4E]">Curious Media does not sell your personal information.</p>
            <p className="mb-3">We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>
                <strong className="text-[#0A1A4E]">Service Providers:</strong> With trusted vendors who support our operations (e.g., hosting providers, email service providers, analytics tools, CRM platforms), strictly for the purpose of providing services to us.
              </li>
              <li>
                <strong className="text-[#0A1A4E]">Business Partners:</strong> Where you have expressed interest in a collaboration, brand partnership, or influencer/PR engagement that requires limited data sharing with a relevant third party, with your knowledge.
              </li>
              <li>
                <strong className="text-[#0A1A4E]">Legal Requirements:</strong> Where disclosure is required by law, regulation, court order, or governmental authority.
              </li>
              <li>
                <strong className="text-[#0A1A4E]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where your data may be transferred as part of that transaction, subject to confidentiality obligations.
              </li>
            </ul>
            <p>
              We require all third parties who process data on our behalf to maintain appropriate confidentiality and security standards.
            </p>
          </section>

          {/* 7. Third-Party Services */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">7</span>
              Third-Party Services
            </h2>
            <p>
              Our Website may contain third-party links. We disclaim responsibility for third-party privacy practices and content. Users are advised to review third-party privacy policies separately.
            </p>
          </section>

          {/* 8. Data Security */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">8</span>
              Data Security
            </h2>
            <p className="mb-3">
              We implement reasonable technical and organizational measures designed to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include restricted access controls, secure hosting infrastructure, and periodic reviews of our data handling practices.
            </p>
            <p>
              However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* 9. Data Retention */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">9</span>
              Data Retention
            </h2>
            <p>
              Your data is retained as long as your account is active or necessary for providing services. We may retain certain data for legal compliance, dispute resolution, or fraud prevention.
            </p>
          </section>

          {/* 10. User Rights */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">10</span>
              User Rights
            </h2>
            <p className="mb-3">Subject to applicable law, including the DPDP Act, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li><strong className="text-[#0A1A4E]">Access</strong> the personal data we hold about you</li>
              <li><strong className="text-[#0A1A4E]">Correct or update</strong> inaccurate or incomplete personal data</li>
              <li><strong className="text-[#0A1A4E]">Withdraw Consent</strong> at any time, where processing is based on consent</li>
              <li><strong className="text-[#0A1A4E]">Request Erasure</strong> of your personal data, subject to legal or legitimate business retention requirements</li>
              <li><strong className="text-[#0A1A4E]">Grievance Redressal</strong>, by raising concerns with us using the contact details in Section 14</li>
              <li><strong className="text-[#0A1A4E]">Nominate an individual</strong> to exercise your rights on your behalf, in the event of your death or incapacity, as permitted under the DPDP Act</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details in Section 14. We will respond within a reasonable timeframe as required under applicable law.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">11</span>
              Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are intended for business and professional audiences and are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected personal data from a child without verifiable parental or guardian consent, we will take steps to delete such data promptly.
            </p>
          </section>

          {/* 12. International Data Transfers */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">12</span>
              International Data Transfers
            </h2>
            <p className="mb-3">
              As a media and marketing company that may work with partners, brands, and collaborators across geographies, your personal data may be processed or stored on servers located outside India, including through third-party service providers such as hosting or analytics platforms.
            </p>
            <p>
              Where such transfers occur, we take reasonable steps to ensure that your data continues to receive an appropriate standard of protection, consistent with the requirements of the DPDP Act and other applicable regulations.
            </p>
          </section>

          {/* 13. Changes to this Privacy Policy */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">13</span>
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this policy periodically. Updates will be prominently displayed. Continued usage indicates acceptance.
            </p>
          </section>

          {/* 14. Contact Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">14</span>
              Contact Information
            </h2>
            <p className="mb-2">If you have questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact us:</p>
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-[#0B2EA8] font-bold text-sm">
              Curious Media &ndash; Email:{" "}
              <a href="mailto:info@curiousmedia.in" className="underline font-black">info@curiousmedia.in</a>
            </div>
          </section>

          {/* Acceptance Box */}
          <div className="mt-10 p-6 rounded-2xl bg-[#0A1A4E] text-white text-center">
            <p className="font-bold text-sm uppercase tracking-wide">
              Acceptance: By using this Website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
