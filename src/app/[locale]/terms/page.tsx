"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TermsPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">Legal Document</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-[#0A1A4E] uppercase mb-4 leading-none">
            Terms of Service
          </h1>

          <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
            <Calendar className="w-4 h-4 text-[#0B2EA8]" />
            <span>Last Updated: July 17, 2026</span>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 text-slate-600 font-medium leading-relaxed space-y-4">
            <p>
              Welcome to <strong className="text-[#0A1A4E]">Curious Media</strong>. These Terms of Service (“Terms”) govern your access to and use of the website located at{" "}
              <a href="https://curiousmedia.in/" target="_blank" rel="noopener noreferrer" className="text-[#0B2EA8] font-bold underline">https://curiousmedia.in/</a>{" "}
              (the “Website”) and any services, forms, or content offered by Curious Media (“Curious Media,” “we,” “us,” or “our”).
            </p>
            <p>
              By accessing or using the Website, submitting a form, or otherwise engaging with us, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
            </p>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-blue-100 shadow-[0_8px_30px_rgba(11,46,168,0.05)] text-slate-700 font-medium leading-relaxed space-y-10"
        >
          {/* 1. About Us */}
          <section>
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">1</span>
              About Us
            </h2>
            <p className="mb-3">
              Curious Media is a creative media and marketing company offering services including Influencer Marketing, Content Production, Digital Marketing, Brand Partnerships, PR &amp; Brand Awareness Campaigns, Community Building, Online Reputation Management, and Content Distribution.
            </p>
            <p>
              Any Services provided beyond browsing the Website—such as a campaign, brand partnership, or content engagement—will be governed by a separate written agreement, proposal, or statement of work between you (or your organization) and Curious Media. Where such an agreement conflicts with these Terms, the separate agreement will govern that engagement.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">2</span>
              Eligibility
            </h2>
            <p>
              The Website and Services are intended for business and professional audiences. By using the Website, you represent that you are at least 18 years of age and have the legal capacity to enter into these Terms, whether on your own behalf or on behalf of an organization you represent.
            </p>
          </section>

          {/* 3. Use of the Website */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">3</span>
              Use of the Website
            </h2>
            <p className="mb-4">
              You agree to use the Website only for lawful purposes and in a manner consistent with these Terms. In using the Website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Violate any applicable law, regulation, or third-party right;</li>
              <li>Submit false, misleading, or fraudulent information through any form on the Website;</li>
              <li>Attempt to gain unauthorized access to the Website, its systems, or related networks;</li>
              <li>Introduce viruses, malware, or other harmful code, or interfere with the Website’s normal operation;</li>
              <li>Scrape, harvest, or extract data from the Website using automated means without our prior written consent;</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
            </ul>
            <p className="mt-4">
              We reserve the right to restrict, suspend, or terminate your access to the Website, at our discretion, for any conduct that we believe violates these Terms or is otherwise harmful to us, other users, or third parties.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">4</span>
              Intellectual Property
            </h2>
            <p className="mb-3">
              Any trademarks, service marks, and logos displayed on the Website belong to Curious Media or the respective third parties who own them, and nothing on this Website should be construed as granting any license or right to use them without prior written permission.
            </p>
            <p>
              You may view and use the Website for your own personal or internal business reference. You may not reproduce, distribute, modify, publicly display, or create derivative works from any content on the Website without our prior written consent, except as permitted by applicable law.
            </p>
          </section>

          {/* 5. User Submissions */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">5</span>
              User Submissions
            </h2>
            <p className="mb-3">
              When you submit information, content, or materials to us through the Website (for example, via a contact or inquiry form), you represent that you have the right to submit such information and that it does not infringe upon or violate the rights of any third party.
            </p>
            <p className="mb-3">
              You grant Curious Media a non-exclusive, royalty-free license to use, store, and process such submissions solely for the purpose of responding to your inquiry, evaluating a potential engagement, or as otherwise described in our Privacy Policy.
            </p>
            <p>
              Please do not submit confidential or proprietary information through general website forms unless we have agreed in writing to receive it under specific confidentiality terms.
            </p>
          </section>

          {/* 6. Disclaimers */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">6</span>
              Disclaimers
            </h2>
            <p>
              The Website is provided on an “as-is” basis without warranties. We shall not be liable for direct, indirect, incidental, or consequential damages from your use of the Website.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">7</span>
              Limitation of Liability
            </h2>
            <p className="mb-3">
              To the maximum extent permitted under applicable law, Curious Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or in connection with your use of, or inability to use, the Website, even if we have been advised of the possibility of such damages.
            </p>
            <p>
              Nothing in these Terms shall be construed to limit or exclude liability that cannot be limited or excluded under applicable law.
            </p>
          </section>

          {/* 8. Indemnification */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">8</span>
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Curious Media, its officers, employees, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your misuse of the Website, your violation of these Terms, or your violation of any rights of a third party.
            </p>
          </section>

          {/* 9. Privacy */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">9</span>
              Privacy
            </h2>
            <p>
              Your use of the Website is also governed by our{" "}
              <Link href={`/${locale}/privacy`} className="text-[#0B2EA8] font-bold underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information in accordance with India’s Digital Personal Data Protection Act, 2023, and describes your rights in relation to your data.
            </p>
          </section>

          {/* 10. Termination */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">10</span>
              Termination
            </h2>
            <p>
              We may suspend or terminate your access to the Website at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to us or others.
            </p>
          </section>

          {/* 11. Changes to these Terms */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">11</span>
              Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time to reflect changes in our practices, services, or applicable law. Updates will be posted on this page with a revised “Last Updated” date. Your continued use of the Website after such changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* 12. Contact Information */}
          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-black font-heading text-[#0A1A4E] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0B2EA8] flex items-center justify-center text-xs font-black shrink-0">12</span>
              Contact Information
            </h2>
            <p className="mb-2">If you have questions or concerns about these Terms, please contact us:</p>
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-[#0B2EA8] font-bold text-sm">
              Curious Media &ndash; Email:{" "}
              <a href="mailto:info@curiousmedia.in" className="underline font-black">info@curiousmedia.in</a>
            </div>
          </section>

          {/* Acceptance Box */}
          <div className="mt-10 p-6 rounded-2xl bg-[#0A1A4E] text-white text-center">
            <p className="font-bold text-sm uppercase tracking-wide">
              Acceptance: By using this Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
