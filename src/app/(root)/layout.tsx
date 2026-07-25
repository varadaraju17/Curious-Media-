import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "IWM0hpNQThS98yc-EEsMY-uh31tkiYeM6ONxkVai27Y",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="google-site-verification" content="IWM0hpNQThS98yc-EEsMY-uh31tkiYeM6ONxkVai27Y" />
      </head>
      <body>{children}</body>
    </html>
  );
}
