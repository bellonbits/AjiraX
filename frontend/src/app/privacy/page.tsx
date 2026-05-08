import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
        <div className="bg-white p-10 rounded-[40px] shadow-sm prose prose-slate max-w-none">
          <p className="text-slate-500 font-medium leading-relaxed">
            Last updated: May 08, 2026
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 mb-6">
            We collect information you provide directly to us when you create an account, update your profile, or use our marketplace services. This includes your name, email address, phone number (for M-Pesa payments), and professional details.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 mb-6">
            We use the information we collect to provide, maintain, and improve our services, process transactions via M-Pesa, and communicate with you about your account and marketplace activity.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h2>
          <p className="text-slate-600 mb-6">
            We implement robust security measures to protect your data. All payment transactions are processed securely through the Safaricom Daraja API.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Your Rights</h2>
          <p className="text-slate-600 mb-6">
            You have the right to access, correct, or delete your personal information at any time through your account settings.
          </p>
        </div>
      </main>
    </div>
  );
}
