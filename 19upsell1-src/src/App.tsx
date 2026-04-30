import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function App() {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/69f29b459ba103f8c5176522/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

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

          {/* VSL Player */}
          <div className="w-full mb-6">
            {/* @ts-ignore */}
            <vturb-smartplayer id="vid-69f29b459ba103f8c5176522" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer> 
          </div>

          {/* CTA Button & Decline Link */}
          <div className="w-full flex flex-col items-center justify-center mb-6">
            {/* @ts-ignore */}
            <button onClick={() => window.acceptUpsell('https://app.kashpay.com.br/u/5e07a86bd0caad95')} className="hide_19upsell1" style={{fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', lineHeight: '1.3', color: '#ffffff', backgroundColor: '#057932', border: 'none', borderRadius: '10px', padding: '13px 7%', cursor: 'pointer', textAlign: 'center', display: 'block', margin: 'auto', marginBottom: '16px'}}>
              Get Now
            </button>
            <a href="/19upsell2" className="hide_19upsell1 text-gray-400 hover:text-gray-600 underline text-sm font-medium transition-colors">
              No, thanks!
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
