import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black text-slate-900 mb-6">Empowering Africa's <br />Digital Workforce</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            AjiraX is more than a marketplace. We're a bridge connecting world-class talent from Kenya and across Africa with global opportunities.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10 mb-32">
          <div className="bg-white p-10 rounded-[40px] shadow-sm text-center">
             <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <Users className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-4">50k+ Freelancers</h3>
             <p className="text-slate-500 text-sm leading-relaxed">A diverse pool of experts in design, development, and digital marketing.</p>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-sm text-center">
             <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-rose-600">
                <Globe className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-4">Pan-African Reach</h3>
             <p className="text-slate-500 text-sm leading-relaxed">Headquartered in Nairobi, serving clients and talent across the entire continent.</p>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-sm text-center">
             <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600">
                <Award className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-4">M-Pesa Secure</h3>
             <p className="text-slate-500 text-sm leading-relaxed">Seamless, secure local payments through the world's most successful mobile money platform.</p>
          </div>
        </div>

        <section className="bg-slate-900 rounded-[50px] p-20 text-white flex flex-col md:flex-row items-center gap-20">
           <div className="flex-1">
              <h2 className="text-4xl font-black mb-8">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                To create 1 million digital jobs for African youth by 2030. We believe talent is distributed equally, but opportunity is not. AjiraX is here to change that narrative by providing a secure, transparent, and high-quality marketplace for everyone.
              </p>
              <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-200 transition-all">
                 Join our team
              </button>
           </div>
           <div className="flex-1 relative h-[400px] w-full rounded-[40px] overflow-hidden">
              <Image 
                src="/ajirax_hero_background_1778193104896.png" 
                alt="Team working" 
                fill 
                className="object-cover opacity-50"
              />
           </div>
        </section>
      </main>
    </div>
  );
}
