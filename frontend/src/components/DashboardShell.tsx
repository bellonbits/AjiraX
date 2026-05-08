"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import { LayoutDashboard, MessageSquare, FileText, Search, Users, User, Zap, Loader2, Bell, Settings, LogOut } from "lucide-react";

interface UserProfile {
  id: number;
  full_name: string;
  role: string;
  profile_image: string;
  available: boolean;
  skills: string[];
  experience: { role: string; company: string; color: string }[];
}

interface DashboardShellProps {
  children: React.ReactNode;
  activeTab: string;
}

export default function DashboardShell({ children, activeTab }: DashboardShellProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/users/me");
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-100 p-6 flex flex-col gap-8 hidden lg:flex sticky top-0 h-screen">
         <div className="flex items-center gap-2 text-indigo-600 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200 flex items-center justify-center">
               <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bebas tracking-widest text-slate-900">AJIRAX</span>
         </div>

         <nav className="flex flex-col gap-2">
            {[
              { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, active: activeTab === "dashboard", href: "/freelancers" },
              { label: "Messages", icon: <MessageSquare className="w-4 h-4" />, active: activeTab === "messages" },
              { label: "My Applications", icon: <FileText className="w-4 h-4" />, active: activeTab === "applications" },
              { label: "Find Jobs", icon: <Search className="w-4 h-4" />, active: activeTab === "jobs", href: "/jobs" },
              { label: "Find Freelancers", icon: <Users className="w-4 h-4" />, active: activeTab === "freelancers", href: "/freelancers" },
              { label: "My Public Profile", icon: <User className="w-4 h-4" />, active: activeTab === "profile" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href || "#"} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${item.active ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}>
                 <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                 </div>
              </Link>
            ))}
         </nav>

         <div className="mt-auto flex flex-col gap-4">
            <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-rose-500 font-bold text-sm transition-all">
               <LogOut className="w-4 h-4" />
               Logout
            </button>
            <div className="bg-slate-900 p-6 rounded-[30px] text-center relative overflow-hidden text-white">
               <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 border-4 border-white/20 overflow-hidden relative">
                     <Image src={profile?.profile_image || "https://api.dicebear.com/7.x/avataaars/svg?seed=User"} alt="Profile" fill className="object-cover" />
                  </div>
                  <p className="text-xs font-black text-indigo-400 mb-2">Pro Member</p>
                  <p className="text-lg font-black mb-1">Live Account</p>
                  <button className="w-full bg-white text-slate-900 py-3 rounded-xl text-xs font-bold shadow-xl mt-4">Settings</button>
               </div>
            </div>
         </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Dashboard Header - Replaces the public Navbar */}
        <header className="bg-white border-b border-slate-100 px-10 py-6 flex items-center justify-between sticky top-0 z-30">
           <div className="relative w-96 group">
              <input type="text" placeholder="Search for jobs, skills, or people..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-10 py-2.5 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all" />
              <Search className="w-4 h-4 text-slate-300 absolute left-3 top-3 group-focus-within:text-indigo-500 transition-colors" />
           </div>
           <div className="flex items-center gap-6">
              <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-all">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
              </button>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-all">
                 <Settings className="w-5 h-5" />
              </button>
              <div className="h-8 w-px bg-slate-100 mx-2" />
              <div className="flex items-center gap-3">
                 <div className="text-right hidden md:block">
                    <p className="text-xs font-black text-slate-900 leading-tight">{profile?.full_name?.split(' ')[0] || "User"}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Premium</p>
                 </div>
                 <div className="w-10 h-10 rounded-xl border-2 border-indigo-50 overflow-hidden relative shadow-sm">
                    <Image src={profile?.profile_image || "https://api.dicebear.com/7.x/avataaars/svg?seed=User"} alt="Profile" fill className="object-cover" />
                 </div>
              </div>
           </div>
        </header>
        
        <div className="flex-1 flex gap-10 p-10 overflow-auto">
          {/* Main Content Area */}
          <div className="flex-1">
             {children}
          </div>

          {/* Right Sidebar - Profile Info (Persistent) */}
          <aside className="w-80 flex flex-col gap-8 hidden xl:flex sticky top-0 h-fit">
             <div className="bg-white p-8 rounded-[40px] border border-slate-50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-10 -mt-10" />
                
                {loading ? (
                   <div className="flex flex-col items-center justify-center py-20">
                      <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loading Profile...</p>
                   </div>
                ) : (
                   <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 relative">
                         <Image src={profile?.profile_image || "/freelancer_professional_1_1778193344806.png"} alt="Profile" fill className="object-cover" />
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mb-1">{profile?.full_name || "New User"}</h3>
                      <p className="text-xs text-slate-400 font-bold mb-6">{profile?.role || "Digital Professional"}</p>
                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 flex items-center gap-2 hover:bg-indigo-700 transition-all">
                         <FileText className="w-4 h-4" />
                         Edit Profile
                      </button>
                   </div>
                )}

                <div className="mt-10 space-y-8">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Availability</h4>
                         <Zap className="w-3 h-3 text-slate-300" />
                      </div>
                      <div className={`${profile?.available ? 'bg-emerald-500 shadow-emerald-100' : 'bg-slate-400 shadow-slate-100'} text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 text-[10px] font-bold shadow-lg`}>
                         <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                         {profile?.available ? 'Available For Work' : 'Currently Busy'}
                      </div>
                   </div>

                   <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex justify-between items-center">
                         Recent Activity
                         <Zap className="w-3 h-3 text-slate-300" />
                      </h4>
                      <div className="space-y-6">
                         {profile?.experience?.map((exp, idx) => (
                           <div key={idx} className="flex gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs ${exp.color}`}>
                                 {exp.role[0]}
                              </div>
                              <div>
                                 <p className="text-[11px] font-black text-slate-900">{exp.role}</p>
                                 <p className="text-[9px] font-bold text-slate-400">{exp.company}</p>
                              </div>
                           </div>
                         )) || (
                           <p className="text-[10px] text-slate-400 font-medium italic">No recent activity found.</p>
                         )}
                      </div>
                   </div>

                   <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Skills</h4>
                      <div className="flex flex-wrap gap-2 mb-8">
                         {profile?.skills?.map(skill => (
                            <span key={skill} className="px-3 py-1.5 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-lg">{skill}</span>
                         )) || (
                            <span className="text-[10px] text-slate-300 italic">Add skills to your profile</span>
                         )}
                      </div>
                      
                      <button 
                        onClick={() => {
                          if(confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                            alert("Account deletion request sent to backend.");
                          }
                        }}
                        className="w-full py-3 px-4 border border-rose-100 text-rose-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-50 transition-all flex items-center justify-center gap-2"
                      >
                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                         Delete Account
                      </button>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
