"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {children}
      <FloatingWhatsApp />
    </ReactLenis>
  );
}
