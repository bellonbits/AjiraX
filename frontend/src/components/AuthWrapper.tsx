"use client";
import { useState, useEffect } from "react";
import DashboardShell from "@/components/DashboardShell";
import Navbar from "@/components/Navbar";

interface AuthWrapperProps {
  children: React.ReactNode;
  activeTab: string;
}

export default function AuthWrapper({ children, activeTab }: AuthWrapperProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setLoading(false);
  }, []);

  if (loading) return null;

  if (isLoggedIn) {
    return (
      <DashboardShell activeTab={activeTab}>
        {children}
      </DashboardShell>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}
