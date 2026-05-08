import Navbar from "@/components/Navbar";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Cookie Policy</h1>
        <div className="bg-white p-10 rounded-[40px] shadow-sm prose prose-slate max-w-none">
          <p className="text-slate-500 font-medium leading-relaxed">
            Last updated: May 08, 2026
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. What are Cookies?</h2>
          <p className="text-slate-600 mb-6">
            Cookies are small text files stored on your device to help websites recognize you and remember your preferences.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="text-slate-600 mb-6">
            We use essential cookies for authentication and security. We also use analytical cookies to understand how users interact with AjiraX and to improve our platform experience.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Managing Cookies</h2>
          <p className="text-slate-600 mb-6">
            You can choose to disable cookies through your browser settings, but please note that some features of AjiraX may not function correctly without them.
          </p>
        </div>
      </main>
    </div>
  );
}
