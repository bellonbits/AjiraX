import type { Metadata } from "next";
import { Inter, Outfit, Bebas_Neue, Fredoka, Dancing_Script } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const signature = Dancing_Script({ subsets: ["latin"], variable: "--font-signature" });

export const metadata: Metadata = {
  title: "AjiraX | Africa's Premier Freelancing Marketplace",
  description: "Connect with top Kenyan and African talent. Bidding, Gigs, and Contests with secure M-Pesa escrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${bebas.variable} ${fredoka.variable} ${signature.variable} font-sans bg-white text-slate-900`}>
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
