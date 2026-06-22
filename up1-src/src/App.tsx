import React from 'react';

export default function App() {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a3989e31fa755ae788e2f71/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white flex flex-col items-center pb-12">
      {/* Top Banner */}
      <div className="w-full bg-[#B91C1C] py-3 px-4 text-center">
        <h1 className="text-sm md:text-lg font-bold">
          <span className="text-[#FBBF24]">WARNING:</span> <span className="text-white">YOUR PURCHASE IS NOT COMPLETE YET!</span>
        </h1>
      </div>

      <div className="max-w-3xl w-full px-4 mt-8 flex flex-col items-center text-center">
        {/* Subtext */}
        <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
          You will see this page only once (and forever). Watch the video below and pay close attention to the revelation I have to share with you...
        </p>

        {/* Important section */}
        <div className="mb-8">
          <h2 className="text-[#EF4444] text-xl font-bold mb-2">IMPORTANT :</h2>
          <p className="text-white font-semibold text-sm md:text-base">
            If you close this page or click the "back" button on your browser, your purchase may present problems.
          </p>
        </div>

        {/* VSL Video */}
        <div className="w-full mb-6">
          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-6a3989e31fa755ae788e2f71" style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '800px'}}></vturb-smartplayer>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-[600px] mb-6">
          <div className="w-full bg-gray-800 h-3 mb-1">
            <div className="bg-[#10B981] h-3" style={{width: '99%'}}></div>
          </div>
          <p className="text-gray-400 text-xs text-center">99%</p>
        </div>

        {/* Accept Button */}
        <div className="w-full flex justify-center mb-4">
          <a href="#" className="vsl bg-[#15803d] hover:bg-[#16a34a] text-white text-lg md:text-xl font-bold py-4 px-8 rounded w-full max-w-[400px] text-center transition-all duration-200 uppercase tracking-wide">
            Accept Offer
          </a>
        </div>

        {/* Decline Link */}
        <a href="/up2" className="vsl text-gray-500 hover:text-gray-300 text-sm underline mt-2">
          No, Thanks!
        </a>
      </div>
    </div>
  );
}
