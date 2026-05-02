"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 1 // Delay appearance slightly
      }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
    >
      <Link
        href="https://wa.me/919876543210" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Hover ripple effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-0 group-hover:scale-150 transform origin-center" style={{ transition: "all 0.5s ease-out" }} />
        
        {/* WhatsApp Official SVG Logo */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-9 md:h-9 fill-current relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.01 2.015A13.92 13.92 0 0 0 2.083 15.942c0 2.45.64 4.842 1.854 6.945L2 30l7.246-1.9c2.046 1.108 4.343 1.692 6.757 1.692h.006A13.926 13.926 0 0 0 29.93 15.86c0-3.72-1.448-7.218-4.08-9.852-2.632-2.634-6.13-4.085-9.84-4.085zM16.002 27.34h-.006c-2.073 0-4.103-.558-5.882-1.613l-.422-.25-4.37 1.147 1.168-4.258-.275-.436A11.535 11.535 0 0 1 4.41 15.934a11.565 11.565 0 0 1 11.593-11.58A11.558 11.558 0 0 1 27.595 15.94a11.566 11.566 0 0 1-11.593 11.4zM22.36 18.66c-.348-.175-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.175-.232.348-.9 1.133-1.103 1.365-.203.232-.406.26-.754.087-.348-.174-1.472-.543-2.804-1.73-1.036-.924-1.736-2.066-1.94-2.414-.203-.348-.022-.536.152-.71.157-.156.348-.406.522-.61.174-.202.232-.347.348-.58.116-.23.058-.435-.03-.61-.086-.174-.783-1.885-1.072-2.582-.283-.68-.568-.587-.783-.598-.203-.01-.435-.01-.667-.01s-.61.087-.93.435c-.32.348-1.218 1.19-1.218 2.9s1.248 3.364 1.42 3.595c.175.232 2.454 3.743 5.944 5.25.83.358 1.478.572 1.982.732.833.265 1.593.228 2.19.138.67-.1 2.062-.842 2.352-1.654.29-.812.29-1.508.203-1.654-.087-.145-.318-.232-.666-.406z"/>
        </svg>

        {/* Ping effect behind the button */}
        <span className="absolute -z-10 inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
      </Link>
    </motion.div>
  );
}
