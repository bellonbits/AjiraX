import Navbar from "@/components/Navbar";
import { ShieldCheck, Lock, Eye, AlertTriangle } from "lucide-react";

export default function TrustSafety() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black text-slate-900 mb-6">Trust & Safety</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Your security is our top priority. Learn how we keep AjiraX safe for everyone.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-50">
             <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-4">Verified Profiles</h3>
             <p className="text-slate-500 leading-relaxed">
               We verify freelancer identities and portfolios to ensure you're working with real professionals. Look for the blue checkmark for extra assurance.
             </p>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-50">
             <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <Lock className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-4">Secure Escrow</h3>
             <p className="text-slate-500 leading-relaxed">
               Our M-Pesa integrated escrow system holds payments until work is approved, protecting both clients from non-delivery and freelancers from non-payment.
             </p>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-50">
             <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-4">Transparent Reviews</h3>
             <p className="text-slate-500 leading-relaxed">
               Every project ends with a mutual review. These verified ratings build a history of trust that helps users make informed hiring decisions.
             </p>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-50">
             <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8">
                <AlertTriangle className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-4">Dispute Resolution</h3>
             <p className="text-slate-500 leading-relaxed">
               In the rare case of a disagreement, our dedicated support team is here to mediate and ensure a fair outcome for both parties.
             </p>
          </div>
        </div>

        <div className="bg-indigo-950 p-16 rounded-[50px] text-center">
           <h2 className="text-3xl font-black text-white mb-6">Report an Issue</h2>
           <p className="text-indigo-200 mb-10 max-w-xl mx-auto">
             Seen something suspicious? Help us keep AjiraX safe by reporting any policy violations or fraudulent activity.
           </p>
           <button className="bg-indigo-500 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-indigo-900/50 hover:bg-indigo-600 transition-all">
              Contact Safety Team
           </button>
        </div>
      </main>
    </div>
  );
}
