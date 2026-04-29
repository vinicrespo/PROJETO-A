import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function App() {
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Mobile-first specific container */}
      <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen pb-8">
        
        {/* Header - TODAY Fake Logo */}
        <header className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <div className="flex flex-col w-40">
            <svg viewBox="0 0 200 45" className="w-full h-auto">
              {/* Outer Arch */}
              <path d="M 10 40 A 22 22 0 0 1 54 40" fill="none" stroke="#DE4A09" strokeWidth="6.5" />
              {/* Middle Arch */}
              <path d="M 19 40 A 13 13 0 0 1 45 40" fill="none" stroke="#DE4A09" strokeWidth="6.5" />
              {/* Inner Solid Semi-circle */}
              <path d="M 28 40 A 4 4 0 0 1 36 40 Z" fill="#DE4A09" />
              <text x="62" y="40" fontSize="34" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="start" fill="#000" letterSpacing="-1px">
                 TODAY
              </text>
            </svg>
          </div>
          <button aria-label="Search" className="p-1">
            <Search className="w-6 h-6 text-gray-800" />
          </button>
        </header>

        <main className="px-4 py-4">

          {/* VSL Placeholder (Moldura) */}
          <div className="w-full mb-6 flex justify-center items-center bg-gray-200 aspect-video rounded-md border-2 border-dashed border-gray-400">
            <span className="text-gray-500 font-semibold">VSL Placeholder</span>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center mb-6">
            <a href="https://checkout.kashpay.com.br/checkout/checkout-1777486759071" className="hide_19upsell1 bg-[#22c55e] hover:bg-[#16a34a] text-white text-2xl font-black py-4 px-8 rounded-full w-full max-w-[400px] text-center shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-1 transition-all duration-200 uppercase tracking-wide border-b-4 border-[#15803d] active:border-b-0 active:translate-y-0">
              Get Now
            </a>
          </div>

          {/* Notifications / Tags Area */}
          <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-2">
             <div className="flex items-center gap-2 text-[#4b4f56] mb-3">
                 <Bell className="w-5 h-5" />
                 <span className="text-[15px]">Stay updated with TODAY's health reports</span>
             </div>
             <div className="flex flex-wrap items-center justify-center gap-2">
                 <span className="bg-[#f0f2f5] text-[#1c1e21] px-3 py-1.5 rounded-full text-sm font-semibold">
                    #NaturalRemedies
                 </span>
                 <span className="bg-[#f0f2f5] text-[#1c1e21] px-3 py-1.5 rounded-full text-sm font-semibold">
                    #HealthBreakthrough
                 </span>
                 <span className="bg-[#f0f2f5] text-[#1c1e21] px-3 py-1.5 rounded-full text-sm font-semibold">
                    #TODAYExclusive
                 </span>
             </div>
          </div>

        </main>
      </div>
    </div>
  );
}
