import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-4xl font-bebas tracking-widest mb-6 block">
              AJIRAX
            </Link>
            <p className="text-slate-400 font-riffic max-w-sm mb-8">
              Africa's premier freelancing marketplace. Connecting the brightest talent with the most ambitious companies across the continent.
            </p>
            <div className="flex gap-4">
               {[
                 { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
                 { name: "Linkedin", icon: <Linkedin className="w-5 h-5" /> },
                 { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
                 { name: "Facebook", icon: <Facebook className="w-5 h-5" /> }
               ].map(social => (
                 <div key={social.name} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-500 transition-all cursor-pointer text-slate-400 hover:text-white">
                    {social.icon}
                 </div>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bebas text-lg tracking-widest mb-6">Marketplace</h4>
            <ul className="space-y-4 font-riffic text-slate-400">
              <li><Link href="/freelancers" className="hover:text-white transition-colors">Find Freelancers</Link></li>
              <li><Link href="/jobs" className="hover:text-white transition-colors">Find Jobs</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Service Gigs</Link></li>
              <li><Link href="/contests" className="hover:text-white transition-colors">Creative Contests</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bebas text-lg tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 font-riffic text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-slate-500 text-xs font-bold uppercase tracking-widest font-riffic">
             © 2026 AJIRAX. All Rights Reserved. Made in Kenya 🇰🇪
           </p>
           <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-riffic">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
