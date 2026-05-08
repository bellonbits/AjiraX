"use client";
import AuthWrapper from "@/components/AuthWrapper";
import { Filter, Clock, Award, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import api from "@/lib/api";

interface Contest {
  id: number;
  title: string;
  description: string;
  days_left: number;
  logo_letter: string;
}

export default function ContestsPage() {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await api.get("/contests");
        setContests(response.data);
      } catch (error) {
        console.error("Failed to fetch contests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContests();
  }, []);

  return (
    <AuthWrapper activeTab="contests">
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tighter">AWARDS</h1>
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">May - June</p>
        </div>
        <button className="bg-white border border-slate-100 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-400 flex items-center gap-2 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
           <Filter className="w-4 h-4" />
           Filters
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
           <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
           <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading competitions...</p>
        </div>
      ) : contests.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
           <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No active contests found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contests.map((contest) => (
            <div key={contest.id} className="bg-white p-10 rounded-[40px] border border-slate-50 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group">
               <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black text-slate-200">{contest.logo_letter}</span>
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{contest.title}</h3>
               <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 max-w-xs">
                 {contest.description}
               </p>
               <button className="w-full py-4 bg-indigo-50 text-indigo-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all mb-6">
                 Contest
               </button>
               <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  <Clock className="w-3 h-3" />
                  {contest.days_left} Days Left
               </div>
            </div>
          ))}
        </div>
      )}
    </AuthWrapper>
  );
}
