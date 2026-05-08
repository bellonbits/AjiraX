"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-slate-900 text-white p-6 rounded-[30px] shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-white/10">
        <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shrink-0">
          <Cookie className="w-6 h-6" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-medium text-slate-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. 
            <Link href="/cookies" className="text-white underline ml-1 font-bold">Learn more</Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={acceptCookies}
            className="bg-white text-slate-900 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
          >
            Accept
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-3 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
