import Link from "next/link";

export default function FreelancerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 p-6 flex flex-col">
        <Link href="/" className="text-2xl font-black tracking-tighter text-indigo-900 mb-12">
          AJIRAX<span className="text-indigo-500">.</span>
        </Link>
        
        <nav className="space-y-2 flex-1">
          {["Overview", "My Jobs", "Messages", "Wallet", "Settings"].map(item => (
            <button key={item} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${item === 'Overview' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              {item}
            </button>
          ))}
        </nav>
        
        <div className="pt-6 border-t border-slate-100">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full" />
              <div>
                <p className="text-sm font-bold text-slate-900">David K.</p>
                <p className="text-[10px] text-slate-400 font-medium">Freelancer</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <header className="flex justify-between items-center mb-12">
           <h1 className="text-3xl font-black text-indigo-950">Freelancer Dashboard</h1>
           <div className="flex gap-4">
              <button className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              </button>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
           <div className="glass p-8 rounded-3xl">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Wallet Balance</p>
              <h2 className="text-4xl font-black text-indigo-950 mb-4">KES 12,450.00</h2>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-indigo-100">Withdraw to M-Pesa</button>
           </div>
           <div className="glass p-8 rounded-3xl">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Active Jobs</p>
              <h2 className="text-4xl font-black text-indigo-950">04</h2>
           </div>
           <div className="glass p-8 rounded-3xl">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Completed</p>
              <h2 className="text-4xl font-black text-indigo-950">128</h2>
           </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
           <h3 className="text-xl font-black text-indigo-950 mb-6">Recent Projects</h3>
           <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl" />
                      <div>
                         <p className="font-bold text-slate-900">E-commerce API Integration</p>
                         <p className="text-xs text-slate-400">Milestone 2 in progress</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="font-black text-indigo-950">KES 5,000</p>
                      <p className="text-[10px] text-indigo-500 font-bold uppercase">Escrow Held</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}
