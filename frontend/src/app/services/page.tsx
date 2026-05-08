"use client";
import { useState, useEffect } from "react";
import AuthWrapper from "@/components/AuthWrapper";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { Search, Star, Home, Zap, Droplets, Sofa, Paintbrush, Hammer, Trees, Wrench, Loader2 } from "lucide-react";

interface Service {
  id: number;
  title: string;
  price: string;
  rating: number;
  reviews: number;
}

const CATEGORIES = [
  { label: "House section", icon: <Home className="w-3 h-3" /> },
  { label: "Carpentry", icon: <Hammer className="w-3 h-3" /> },
  { label: "Electrical", icon: <Zap className="w-3 h-3" /> },
  { label: "Plumbing", icon: <Droplets className="w-3 h-3" /> },
  { label: "Furniture", icon: <Sofa className="w-3 h-3" /> },
  { label: "Painting", icon: <Paintbrush className="w-3 h-3" /> },
  { label: "Assembling", icon: <Wrench className="w-3 h-3" /> },
  { label: "Landscaping", icon: <Trees className="w-3 h-3" /> }
];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/services");
        setServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <AuthWrapper activeTab="freelancers">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
        <Link href="/">Home</Link>
        <span className="text-slate-300">›</span>
        <span className="text-indigo-600">All Services</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Filter Sidebar */}
        <aside className="w-full lg:w-64 flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Filter</h3>
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-100 mb-8">
               <span className="text-xs font-medium text-slate-600">Accepting new customers</span>
               <div className="w-8 h-4 bg-orange-500 rounded-full relative"><div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" /></div>
            </div>

            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">All Categories</h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
               {CATEGORIES.map((cat, idx) => (
                 <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${idx === 0 ? 'border-orange-500' : 'border-slate-200'}`}>
                       {idx === 0 && <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />}
                    </div>
                    <div className="flex items-center gap-2">
                       <span className={idx === 0 ? 'text-orange-500' : 'text-slate-400'}>{cat.icon}</span>
                       <span className={`text-xs font-medium ${idx === 0 ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>{cat.label}</span>
                    </div>
                 </label>
               ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
             <div className="relative w-full sm:w-96">
                <input type="text" placeholder="Search" className="w-full bg-white border border-slate-100 rounded-xl px-10 py-3 text-sm font-medium" />
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
             </div>
             <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-400">Sort by:</span>
                <select className="flex-1 sm:flex-none bg-white border border-slate-100 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:ring-0">
                   <option>Highest Ratings</option>
                   <option>Most Booked</option>
                </select>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-8">Reliable home repair and maintenance services</h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
               <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Synchronizing services...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100 border-dashed">
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No services available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src="/service_design_thumbnail_1778193384509.png" 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2 h-12 line-clamp-2">{service.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                        <span className="text-xs font-bold text-slate-900">{service.rating}</span>
                        <span className="text-xs text-slate-400">({service.reviews} reviews)</span>
                    </div>
                    <p className="text-lg font-black text-slate-900 mb-6">{service.price}</p>
                    <button className="w-full py-3 bg-orange-100 text-orange-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
                        View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AuthWrapper>
  );
}
