import Navbar from "@/components/Navbar";
import { Search, MessageCircle, Mail, Phone, BookOpen, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { title: "Getting Started", count: 12, icon: <BookOpen className="w-5 h-5" /> },
  { title: "Payments & Escrow", count: 8, icon: <ChevronRight className="w-5 h-5" /> },
  { title: "Finding Work", count: 15, icon: <Search className="w-5 h-5" /> },
  { title: "Hiring Talent", count: 10, icon: <ChevronRight className="w-5 h-5" /> },
  { title: "Account Settings", count: 6, icon: <ChevronRight className="w-5 h-5" /> },
  { title: "Policy & Safety", count: 9, icon: <ChevronRight className="w-5 h-5" /> }
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black text-slate-900 mb-8">How can we help?</h1>
          <div className="max-w-2xl mx-auto relative group">
             <input 
               type="text" 
               placeholder="Search for articles, guides..." 
               className="w-full bg-white border border-slate-100 rounded-[30px] px-16 py-6 text-lg font-medium shadow-2xl shadow-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
             />
             <Search className="w-6 h-6 text-slate-300 absolute left-6 top-1/2 -translate-y-1/2 group-focus-within:text-indigo-500 transition-colors" />
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex items-center justify-between border border-transparent hover:border-indigo-100">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                     {cat.icon}
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{cat.count} Articles</p>
                  </div>
               </div>
               <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-indigo-500" />
            </div>
          ))}
        </div>

        <section className="grid md:grid-cols-2 gap-10">
           <div className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-50">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Contact Support</h2>
              <div className="space-y-8">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                       <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Chat</p>
                       <p className="text-lg font-bold text-slate-900">Average response: 5 mins</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Support</p>
                       <p className="text-lg font-bold text-slate-900">support@ajirax.com</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center">
                       <Phone className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone Support</p>
                       <p className="text-lg font-bold text-slate-900">+254 700 000 000</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 p-12 rounded-[50px] text-white flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6">AjiraX for Business</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Looking for enterprise-grade solutions and dedicated account management? Our business support team is here to help you scale your projects.
              </p>
              <button className="bg-indigo-500 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-900/50">
                 Talk to Sales
              </button>
           </div>
        </section>
      </main>
    </div>
  );
}
