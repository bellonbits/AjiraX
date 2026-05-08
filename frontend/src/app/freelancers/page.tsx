"use client";
import { useState, useEffect } from "react";
import AuthWrapper from "@/components/AuthWrapper";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { Eye, Briefcase, CheckCircle2, Calendar, ChevronRight, Linkedin, Loader2 } from "lucide-react";

interface Freelancer {
  id: number;
  name: string;
  role: string;
  company: string;
  logo: string;
  rating: number;
}

interface Stats {
  profile_views: number;
  applications_sent: number;
  completed_jobs: number;
  interviews: number;
}

export default function FindFreelancersPage() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      
      try {
        const [freelancersRes, statsRes] = await Promise.all([
          api.get("/freelancers"),
          token ? api.get("/users/me/stats") : Promise.resolve({ data: null })
        ]);
        setFreelancers(freelancersRes.data);
        setStats(statsRes.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthWrapper activeTab="freelancers">
      <header className="mb-10">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Marketplace Engine Live</p>
        <h1 className="text-3xl font-black text-slate-900">{isLoggedIn ? "Platform Analytics" : "Find Top Talent"}</h1>
      </header>

      {/* Stats Cards - Only visible if logged in */}
      {isLoggedIn && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Profile Viewed", count: stats?.profile_views || 0, icon: <Eye className="w-6 h-6" />, color: "blue" },
            { label: "Application Sent", count: stats?.applications_sent || 0, icon: <Briefcase className="w-6 h-6" />, color: "indigo" },
            { label: "Assessments Completed", count: stats?.completed_jobs || 0, icon: <CheckCircle2 className="w-6 h-6" />, color: "emerald" },
            { label: "Interview Schedule", count: stats?.interviews || 0, icon: <Calendar className="w-6 h-6" />, color: "purple" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-50 flex items-center justify-between group cursor-pointer hover:shadow-xl transition-all">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all text-slate-400 group-hover:text-indigo-600">
                     {stat.icon}
                  </div>
                  <div>
                     <p className="text-2xl font-black text-slate-900 leading-tight">{stat.count}</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase">{stat.label}</p>
                  </div>
               </div>
               <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
            </div>
          ))}
        </div>
      )}

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
           <h2 className="text-xl font-bold text-slate-900">Available Talent</h2>
           <Link href="#" className="text-xs font-bold text-slate-400 hover:text-indigo-600">View All</Link>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
             <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
             <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Connecting to Marketplace API...</p>
          </div>
        ) : freelancers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
             <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No active talent profiles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelancers.map(f => (
                <div key={f.id} className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-slate-50 relative">
                      <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${f.name}`} alt={f.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{f.name}</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-6">{f.role}</p>
                  
                  <div className="flex items-center gap-4 mb-8">
                      <div className="text-left">
                        <p className="text-[8px] text-slate-400 font-bold uppercase">Experience</p>
                        <p className="text-[10px] font-black text-slate-900">{f.company}</p>
                      </div>
                      <div className="text-slate-200">»</div>
                      <div className="text-left">
                        <p className="text-[8px] text-slate-400 font-bold uppercase">Rating</p>
                        <p className="text-[10px] font-black text-blue-600">{f.rating}/5</p>
                      </div>
                  </div>

                  <button className="w-full py-2.5 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                      <Linkedin className="w-3 h-3" />
                      View Profile
                  </button>
                </div>
            ))}
          </div>
        )}
      </section>
    </AuthWrapper>
  );
}
