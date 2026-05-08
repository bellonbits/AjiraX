import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/ajirax_hero_background_1778193104896.png" 
          alt="Hero Background" 
          fill 
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-3xl font-bebas tracking-widest text-indigo-900">
            AJIRAX
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/contests" className="nav-link font-riffic">Contests</Link>
            <Link href="/services" className="nav-link font-riffic">Services</Link>
            <Link href="/jobs" className="nav-link font-riffic">Find Jobs</Link>
            <Link href="/freelancers" className="nav-link font-riffic">Find Freelancers</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-slate-600 font-bold hover:text-indigo-600 px-4">Log In</Link>
          <Link href="/signup" className="bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-riffic shadow-lg shadow-indigo-200 hover:bg-indigo-600 transition-all">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bebas text-indigo-950 mb-6 tracking-tight leading-none">
          FUTURE OF <span className="text-indigo-500 font-signature normal-case px-4">Freelancing</span> IS HERE
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium font-riffic">
          The all-in-one marketplace for Africa's digital economy. Secure, fast, and powered by M-Pesa.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-2 flex items-center gap-2 mb-16 shadow-2xl shadow-indigo-100">
          <div className="flex-1 px-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="email" placeholder="Your Email address" className="bg-transparent border-none focus:ring-0 w-full text-slate-800 font-bold placeholder:text-slate-400 py-3" />
          </div>
          <button className="bg-indigo-500 text-white px-8 py-3 rounded-xl font-bebas tracking-widest text-lg hover:bg-indigo-600 transition-all">Get Started</button>
        </div>
        <p className="text-slate-400 text-sm font-bold mb-20 uppercase tracking-widest font-riffic">No credit card required.</p>

        {/* Decorative Element */}
        <div className="relative w-full max-w-4xl mx-auto h-[450px] mt-20">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          
          {/* Main Hero Visual - Using the generated image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
             <Image 
               src="/ajirax_hero_background_1778193104896.png" 
               alt="Freelancer Working" 
               fill 
               className="object-cover"
             />
          </div>
          
          {/* Card Overlays */}
          <div className="absolute -left-10 top-20 glass p-4 rounded-2xl shadow-2xl w-64 text-left animate-bounce-slow z-20">
             <div className="flex justify-between items-start mb-4">
                <div>
                   <h3 className="font-bebas text-lg text-slate-900 leading-tight">Sr. Product Designer</h3>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-riffic">Nairobi, Kenya</p>
                </div>
                <div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-500">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>
                </div>
             </div>
             <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-500 rounded-md">UI/UX designer</span>
                <span className="px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-500 rounded-md">UX research</span>
             </div>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">X</div>
                   <div>
                      <p className="text-[10px] font-bold text-slate-900 leading-tight">Safcom</p>
                      <p className="text-[10px] text-slate-400 font-medium">Nairobi, KE</p>
                   </div>
                </div>
                <button className="bg-indigo-500 text-white px-4 py-1.5 rounded-lg text-[10px] font-bebas tracking-widest">Apply</button>
             </div>
          </div>

          <div className="absolute -right-10 top-0 glass p-4 rounded-2xl shadow-2xl w-64 text-left animate-bounce-slow delay-150 z-20">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full relative overflow-hidden border-2 border-white">
                   <Image 
                     src="/freelancer_professional_1_1778193344806.png" 
                     alt="Udit" 
                     fill 
                     className="object-cover" 
                   />
                </div>
                <div>
                   <h3 className="font-bebas text-lg text-slate-900 leading-tight">David Kamau</h3>
                   <p className="text-[10px] text-slate-400 font-bold font-riffic">500+ Jobs done</p>
                </div>
             </div>
             <div className="space-y-3">
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 rounded bg-indigo-50 text-indigo-500 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg>
                   </div>
                   <p className="text-xs font-bold text-slate-700 font-riffic">Product Designer</p>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 rounded bg-indigo-50 text-indigo-500 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg>
                   </div>
                   <p className="text-xs font-bold text-slate-700 font-riffic">UI/UX designer</p>
                </div>
             </div>
          </div>
          
          <div className="absolute right-0 bottom-10 glass p-4 rounded-2xl shadow-2xl w-56 flex items-center gap-4 animate-bounce-slow delay-300 z-20">
             <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
             </div>
             <div className="text-left">
                <h3 className="font-bebas text-sm text-slate-900 leading-tight">Upload Portfolio</h3>
                <p className="text-[10px] text-slate-400 font-bold font-riffic">Showcase your best work</p>
             </div>
          </div>
        </div>
      </main>

      {/* Footer / Stats */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100 flex flex-wrap justify-center gap-20 relative z-10">
         <div className="text-center">
            <p className="text-5xl font-bebas text-indigo-950">10k+</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-riffic">Active Jobs</p>
         </div>
         <div className="text-center">
            <p className="text-5xl font-bebas text-indigo-950">50k+</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-riffic">Freelancers</p>
         </div>
         <div className="text-center">
            <p className="text-5xl font-bebas text-indigo-950">KES 500M</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-riffic">Paid out</p>
         </div>
      </div>
    </div>
  );
}
