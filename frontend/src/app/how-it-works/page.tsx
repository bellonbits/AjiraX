import Navbar from "@/components/Navbar";
import { Search, Zap, CheckCircle2, CreditCard } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { title: "Find Talent or Jobs", desc: "Browse our extensive marketplace of freelancers and job listings tailored for the African market.", icon: <Search /> },
    { title: "Connect & Hire", desc: "Use our real-time chat and secure bidding system to find the perfect match for your project.", icon: <Zap /> },
    { title: "Escrow Payment", desc: "Secure your funds with our M-Pesa integrated escrow system. Money is only released when work is approved.", icon: <CreditCard /> },
    { title: "Get Results", desc: "Collaborate, manage milestones, and receive high-quality work delivered on time.", icon: <CheckCircle2 /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black text-slate-900 mb-6">How AjiraX Works</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            A simple, secure, and transparent process for both clients and freelancers.
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
               {idx < steps.length - 1 && (
                 <div className="hidden md:block absolute top-12 left-full w-full border-t-2 border-dashed border-slate-200 -z-0" />
               )}
               <div className="bg-white p-8 rounded-[40px] shadow-sm relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-indigo-500 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-100">
                     <span className="[&>svg]:w-10 [&>svg]:h-10">{step.icon}</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black mb-6">
                     {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-20">
           <div className="flex-1">
              <h2 className="text-3xl font-black text-slate-900 mb-6">For Clients</h2>
              <ul className="space-y-4">
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                    <p className="text-slate-600 text-sm font-medium">Post jobs and receive competitive bids in minutes.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                    <p className="text-slate-600 text-sm font-medium">Browse verified freelancer portfolios and reviews.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                    <p className="text-slate-600 text-sm font-medium">Pay securely using M-Pesa STK push.</p>
                 </li>
              </ul>
           </div>
           <div className="w-px h-64 bg-slate-100 hidden md:block" />
           <div className="flex-1">
              <h2 className="text-3xl font-black text-slate-900 mb-6">For Freelancers</h2>
              <ul className="space-y-4">
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-indigo-500 w-5 h-5 shrink-0" />
                    <p className="text-slate-600 text-sm font-medium">Showcase your skills to a global audience.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-indigo-500 w-5 h-5 shrink-0" />
                    <p className="text-slate-600 text-sm font-medium">Withdraw earnings directly to your M-Pesa wallet.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-indigo-500 w-5 h-5 shrink-0" />
                    <p className="text-slate-600 text-sm font-medium">Build your reputation with verified client reviews.</p>
                 </li>
              </ul>
           </div>
        </div>
      </main>
    </div>
  );
}
