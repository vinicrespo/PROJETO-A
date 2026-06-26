import React from 'react';
import { Hand } from 'lucide-react';

export default function App() {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a399b9f1fa755ae788e3d32/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  
    const h = document.createElement("script");
    h.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    h.onload = () => {
      // @ts-ignore
      if (window.checkoutElements) {
        // @ts-ignore
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.head.appendChild(h);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white flex flex-col items-center pb-12">
      {/* Top Gradient Bar */}
      <div className="w-full h-8 bg-gradient-to-r from-purple-600 via-orange-400 to-red-400 flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)'
        }}></div>
        <div className="w-11/12 max-w-3xl h-3/4 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-600 relative overflow-hidden flex items-center shadow-sm">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #fff 10px, #fff 20px)'
          }}></div>
          <span className="absolute right-4 text-xs font-bold text-white shadow-sm z-10">89%</span>
        </div>
      </div>

      <div className="max-w-3xl w-full px-4 mt-10 flex flex-col items-center text-center">
        {/* Hand Icon */}
        <div className="mb-6">
          <Hand className="w-20 h-20 text-white fill-white border-white stroke-2" />
        </div>

        {/* Warning Text */}
        <h2 className="text-[#EA580C] text-lg md:text-xl font-bold uppercase mb-6 tracking-wide">
          STOP! IMPORTANT WARNING!!!
        </h2>

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase leading-tight mb-8">
          <span className="text-white">YOU </span>
          <span className="text-[#10B981]">WILL NOT HAVE</span>
          <span className="text-white"> THIS OPPORTUNITY </span>
          <br className="hidden md:block" />
          <span className="text-[#10B981]">IF YOU CLOSE THIS PAGE!</span>
        </h1>

        {/* VSL Video */}
        <div className="w-full mb-8">
          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-6a399b9f1fa755ae788e3d32" style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '800px'}}></vturb-smartplayer>
        </div>

        {/* Accept Button and Decline Link wrapped in the hide class */}
        <div className="up2 w-full flex flex-col items-center mb-6">
          <div id="hotmart-sales-funnel" className="w-full"></div>
        </div>
      </div>
    </div>
  );
}
