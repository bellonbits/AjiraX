import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Terms of Service</h1>
        <div className="bg-white p-10 rounded-[40px] shadow-sm prose prose-slate max-w-none">
          <p className="text-slate-500 font-medium leading-relaxed">
            Last updated: May 08, 2026
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-6">
            By accessing or using AjiraX, you agree to be bound by these Terms of Service and all applicable laws and regulations in Kenya.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Marketplace Conduct</h2>
          <p className="text-slate-600 mb-6">
            Users must act professionally and honestly. Any fraudulent activity, including payment bypass or platform circumvention, will lead to immediate account termination.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Payments & Escrow</h2>
          <p className="text-slate-600 mb-6">
            AjiraX uses a secure escrow system. Funds are released only upon successful completion and approval of work. All platform fees are non-refundable.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Dispute Resolution</h2>
          <p className="text-slate-600 mb-6">
            Any disputes between clients and freelancers will be mediated by the AjiraX support team. Our decision in such matters is final.
          </p>
        </div>
      </main>
    </div>
  );
}
