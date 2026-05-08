"use client";
import { useState, useEffect } from "react";
import AuthWrapper from "@/components/AuthWrapper";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import { Search, Filter, Zap, Bookmark, Star, MapPin, Clock, BarChart3, Loader2 } from "lucide-react";

interface Job {
  id: number;
  company: string;
  title: string;
  level: string;
  location: string;
  match: string;
  salary: string;
  proposals: number;
  tags: string[];
}

export default function FindJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <AuthWrapper activeTab="jobs">
      {/* Header & Search */}
      <div className="bg-white rounded-3xl border border-slate-100 p-8 mb-10">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h1 className="text-3xl font-black text-slate-900">Explore Jobs</h1>
            <div className="flex gap-4">
               <div className="relative">
                  <input type="text" placeholder="Search.." className="bg-slate-50 border border-slate-100 rounded-xl px-10 py-3 w-64 font-medium" />
                  <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
               </div>
               <button className="bg-indigo-950 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold">
                  <Filter className="w-4 h-4" />
                  Filter <span className="bg-white text-indigo-950 w-5 h-5 rounded-full text-[10px] flex items-center justify-center">{jobs.length}</span>
               </button>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold border border-indigo-100 flex items-center gap-2">Design & Creative <span className="text-lg">×</span></button>
            <button className="px-4 py-2 bg-white border border-slate-100 text-slate-500 rounded-lg text-xs font-bold flex items-center gap-2">Experience Level</button>
            <button className="px-4 py-2 bg-white border border-slate-100 text-slate-500 rounded-lg text-xs font-bold flex items-center gap-2">Pay</button>
            <div className="flex-1" />
            <div className="flex items-center gap-3">
               <span className="text-xs font-bold text-slate-400">Smart Match</span>
               <div className="w-10 h-5 bg-indigo-950 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" /></div>
            </div>
          </div>
      </div>

      <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900">{jobs.length} Jobs Results</h2>
          <div className="flex gap-4">
            <div className="bg-white border border-slate-100 rounded-lg p-1 flex">
                <button className="px-4 py-1.5 bg-slate-50 rounded-md text-xs font-bold text-slate-900">List</button>
                <button className="px-4 py-1.5 text-xs font-bold text-slate-400">Board</button>
            </div>
            <button className="bg-white border border-slate-100 px-4 py-2 rounded-lg text-xs font-bold text-slate-900 flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                Saved Jobs
            </button>
          </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
           <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
           <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Connecting to backend...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
           <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No jobs found in database.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">{job.company}</span>
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white"><CheckCircle className="w-3 h-3" /></div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-indigo-50 text-indigo-500 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {job.match} Match
                    </span>
                  </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {job.level}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Active</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                  {job.tags?.map(tag => (
                    <span key={tag} className="bg-slate-50 text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded-lg">{tag}</span>
                  ))}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <p className="text-lg font-black text-slate-900">{job.salary}</p>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-3 h-3 text-slate-300" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{job.proposals} proposals</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AuthWrapper>
  );
}

function CheckCircle({ className }: { className?: string }) {
   return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
}
