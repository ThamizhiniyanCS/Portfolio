import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBarMobile from "@/components/NavBarMobile";


const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thamizhiniyan C S",
  description: "Penetration Tester | NextJS Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={josefin_sans.className}>
        <NavBar />
        <NavBarMobile />
        <div className="w-full">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}