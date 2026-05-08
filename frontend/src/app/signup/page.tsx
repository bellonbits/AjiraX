import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative">
      {/* Back to Home Button */}
      <Link href="/" className="absolute top-10 left-10 z-50 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest bg-white py-3 px-6 rounded-full shadow-sm">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="bg-white w-full max-w-5xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto p-6">
          <div className="relative w-full h-full rounded-[30px] overflow-hidden">
            <Image 
              src="/ajirax_auth_surreal_desert_1778213910356.png" 
              alt="Auth Background" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <h1 className="text-3xl font-black text-slate-900 mb-2">Join AjiraX Today</h1>
            <p className="text-sm text-slate-400 font-medium mb-8">
              Already have an account? <Link href="/login" className="text-slate-900 font-bold underline">Sign In</Link>
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-riffic">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-slate-50 border border-slate-100 focus:ring-0 focus:border-indigo-500 rounded-xl px-4 py-3 font-medium text-sm placeholder:text-slate-300" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-riffic">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-slate-50 border border-slate-100 focus:ring-0 focus:border-indigo-500 rounded-xl px-4 py-3 font-medium text-sm placeholder:text-slate-300" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-riffic">Password</label>
                <input 
                  type="password" 
                  placeholder="Create a password" 
                  className="w-full bg-slate-50 border border-slate-100 focus:ring-0 focus:border-indigo-500 rounded-xl px-4 py-3 font-medium text-sm placeholder:text-slate-300" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <button type="button" className="py-3 px-4 rounded-xl border border-slate-100 hover:border-black transition-all text-xs font-bold text-slate-900 uppercase tracking-widest">Freelancer</button>
                 <button type="button" className="py-3 px-4 rounded-xl border border-slate-100 hover:border-black transition-all text-xs font-bold text-slate-900 uppercase tracking-widest">Client</button>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 mt-8">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
