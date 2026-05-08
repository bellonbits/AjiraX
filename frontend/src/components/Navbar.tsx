import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-black tracking-tighter text-indigo-900">
          AJIRAX<span className="text-indigo-500">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contests" className="nav-link">Contests</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/jobs" className="nav-link">Find Jobs</Link>
          <Link href="/freelancers" className="nav-link">Find Freelancers</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-slate-600 font-semibold hover:text-indigo-600 px-4">Log In</Link>
        <Link href="/signup" className="bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-600 transition-all">Sign Up</Link>
      </div>
    </nav>
  );
}
