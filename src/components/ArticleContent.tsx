import React, { useEffect } from 'react';
import { Article } from '../types';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a860ad9a3935d4b3a2faa92/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <article className="w-full bg-white px-5 pt-6 pb-12 font-sans select-text">

      {/* VTurb VSL Player */}
      <div className="w-full mt-4" dangerouslySetInnerHTML={{ __html: `<vturb-smartplayer id="vid-6a860ad9a3935d4b3a2faa92" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 125% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>` }} />

      {/* Pricing Cards */}
      <div className="vsl hide w-full mt-10 mb-8 flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto font-sans relative">
        
        {/* Card 1: Starter (Left) */}
        <div className="order-3 md:order-1 flex-1 flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-[340px] mx-auto">
          <div className="bg-[#D32F2F] text-white text-center py-2">
            <h2 className="text-sm font-normal uppercase tracking-widest">STARTER</h2>
          </div>
          <div className="p-5 text-center flex-grow flex flex-col">
            <h3 className="text-[28px] text-[#b71c1c] font-normal tracking-tight mb-1">2 BOTTLES</h3>
            <p className="text-xs text-gray-400 font-normal mb-4">60 Day Supply</p>
            
            <div className="relative h-40 flex items-center justify-center mb-4">
              <img src="/images/2.png" alt="2 Bottles" className="max-h-full object-contain" />
            </div>

            <div className="text-center mb-6">
              <span className="text-5xl font-normal text-[#D32F2F] tracking-tighter">$79</span>
              <span className="text-sm text-gray-500 font-normal">/Bottle</span>
            </div>

            <div className="border-t border-gray-100 mb-4 w-full"></div>

            <div className="text-left px-2 space-y-3 text-[13px] text-gray-500 font-normal mb-6 flex-grow">
              <p className="flex items-center"><span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#ef5350] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></span> FREE SHIPPING</p>
              <p className="flex items-center"><span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#ef5350] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></span> FAST SHIPPING</p>
              <p className="flex items-center"><span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#ef5350] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></span> FREE BONUSES</p>
            </div>

            <a href="https://bg.nexburn.store/dtc-d/?aff_id=8870" className="flex items-center justify-center w-full bg-gradient-to-b from-[#ffea00] to-[#ffc400] text-black font-black text-2xl py-3 rounded-lg shadow-md border border-[#fbc02d] hover:brightness-105 transition-all">
              <span className="mr-3 tracking-tighter">BUY NOW</span>
              <span className="flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#001529] text-[#ffea00] text-sm"><i className="fa-solid fa-cart-shopping"></i></span>
            </a>

            <div className="flex justify-center items-center gap-2 mt-3 text-2xl">
              <i className="fa-brands fa-cc-visa text-[#1a1f71]"></i>
              <i className="fa-brands fa-cc-mastercard text-[#ff5f00]"></i>
              <i className="fa-brands fa-cc-amex text-[#2b71b6]"></i>
              <i className="fa-brands fa-cc-paypal text-[#003087]"></i>
              <i className="fa-brands fa-cc-discover text-[#e55c20]"></i>
            </div>
            <p className="text-gray-400 text-xs mt-3 uppercase tracking-wider">Total: <span className="line-through">$358</span> <span className="text-[#D32F2F] font-bold">$158</span></p>
          </div>
        </div>

        {/* Card 2: Best Seller (Middle) */}
        <div className="order-1 md:order-2 flex-1 flex flex-col bg-[#fff8e1] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(211,47,47,0.15)] relative z-10 border border-[#ffe082] w-full max-w-[340px] mx-auto md:transform md:-translate-y-2">
          <div className="bg-gradient-to-b from-[#ffe082] to-[#ffca28] text-[#8d6e63] text-center py-2 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-widest">BEST SELLER</h2>
          </div>
          <div className="p-5 text-center flex-grow flex flex-col">
            <h3 className="text-[32px] text-black font-normal tracking-tight mb-1">6 BOTTLES</h3>
            <p className="text-xs text-gray-500 font-normal mb-4">180 Day Supply</p>
            
            <div className="relative h-44 flex items-center justify-center mb-4">
              <img src="/images/6.png" alt="6 Bottles" className="max-h-full object-contain" />
              
              {/* Save Badge */}
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-[#D32F2F] text-white rounded-full w-14 h-14 flex items-center justify-center text-center leading-[1.1] border-[2px] border-white shadow-md z-10" style={{clipPath: "polygon(50% 0%, 61% 11%, 76% 5%, 83% 19%, 98% 21%, 97% 37%, 100% 50%, 97% 63%, 98% 79%, 83% 81%, 76% 95%, 61% 89%, 50% 100%, 39% 89%, 24% 95%, 17% 81%, 2% 79%, 3% 63%, 0% 50%, 3% 37%, 2% 21%, 17% 19%, 24% 5%, 39% 11%)"}}>
                <span className="text-[9px] font-black tracking-tight">SAVE<br/>$780<br/>TODAY</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <span className="text-6xl font-normal text-[#D32F2F] tracking-tighter">$49</span>
              <span className="text-sm text-gray-600 font-normal">/Bottle</span>
            </div>

            <div className="border-t border-[#ffecb3] mb-4 w-full"></div>

            <div className="text-left px-2 space-y-2 text-[13px] text-gray-600 font-normal mb-6 flex-grow">
              <div className="bg-white rounded-md py-1.5 px-3 flex items-center shadow-sm">
                <span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#4caf50] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span> 60-DAY GUARANTEE
              </div>
              <div className="bg-white rounded-md py-1.5 px-3 flex items-center shadow-sm">
                <span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#4caf50] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span> FAST & FREE SHIPPING
              </div>
              <div className="bg-white rounded-md py-1.5 px-3 flex items-center shadow-sm">
                <span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#4caf50] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span> 3 FREE BONUSES!
              </div>
            </div>

            <a href="https://bg.nexburn.store/dtc-d/?aff_id=8870" className="flex items-center justify-center w-full bg-gradient-to-b from-[#ffea00] to-[#ffc400] text-black font-black text-[26px] py-4 rounded-lg shadow-lg border border-[#fbc02d] hover:brightness-105 transition-all">
              <span className="mr-3 tracking-tighter">BUY NOW</span>
              <span className="flex items-center justify-center min-w-[40px] w-10 h-10 rounded-full bg-[#001529] text-[#ffea00] text-lg"><i className="fa-solid fa-cart-shopping"></i></span>
            </a>

            <div className="flex justify-center items-center gap-2 mt-4 text-2xl">
              <i className="fa-brands fa-cc-visa text-[#1a1f71]"></i>
              <i className="fa-brands fa-cc-mastercard text-[#ff5f00]"></i>
              <i className="fa-brands fa-cc-amex text-[#2b71b6]"></i>
              <i className="fa-brands fa-cc-paypal text-[#003087]"></i>
              <i className="fa-brands fa-cc-discover text-[#e55c20]"></i>
            </div>
            <p className="text-gray-500 text-[13px] mt-3 uppercase tracking-wider">Total: <span className="line-through text-gray-400">$1074</span> <span className="text-[#D32F2F] font-bold">$294</span></p>
          </div>
        </div>

        {/* Card 3: Standard (Right) */}
        <div className="order-2 md:order-3 flex-1 flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100 w-full max-w-[340px] mx-auto">
          <div className="bg-[#D32F2F] text-white text-center py-2">
            <h2 className="text-sm font-normal uppercase tracking-widest">STANDARD</h2>
          </div>
          <div className="p-5 text-center flex-grow flex flex-col">
            <h3 className="text-[28px] text-[#b71c1c] font-normal tracking-tight mb-1">3 BOTTLES</h3>
            <p className="text-xs text-gray-400 font-normal mb-4">90 Day Supply</p>
            
            <div className="relative h-40 flex items-center justify-center mb-4">
              <img src="/images/3.png" alt="3 Bottles" className="max-h-full object-contain" />
              
              {/* Save Badge */}
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-[#D32F2F] text-white rounded-full w-12 h-12 flex items-center justify-center text-center leading-[1.1] border-[2px] border-white shadow-md z-10" style={{clipPath: "polygon(50% 0%, 61% 11%, 76% 5%, 83% 19%, 98% 21%, 97% 37%, 100% 50%, 97% 63%, 98% 79%, 83% 81%, 76% 95%, 61% 89%, 50% 100%, 39% 89%, 24% 95%, 17% 81%, 2% 79%, 3% 63%, 0% 50%, 3% 37%, 2% 21%, 17% 19%, 24% 5%, 39% 11%)"}}>
                <span className="text-[8px] font-black tracking-tight">SAVE<br/>$330<br/>TODAY</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <span className="text-5xl font-normal text-[#D32F2F] tracking-tighter">$69</span>
              <span className="text-sm text-gray-500 font-normal">/Bottle</span>
            </div>

            <div className="border-t border-gray-100 mb-4 w-full"></div>

            <div className="text-left px-2 space-y-3 text-[13px] text-gray-500 font-normal mb-6 flex-grow">
              <p className="flex items-center"><span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#4caf50] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span> 60-DAY GUARANTEE</p>
              <p className="flex items-center"><span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#ffb300] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span> FAST & FREE SHIPPING</p>
              <p className="flex items-center"><span className="flex items-center justify-center min-w-[16px] w-4 h-4 rounded-full bg-[#ffb300] text-white mr-3 text-[10px]"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span> 1 FREE BONUS!</p>
            </div>

            <a href="https://bg.nexburn.store/dtc-d/?aff_id=8870" className="flex items-center justify-center w-full bg-gradient-to-b from-[#ffea00] to-[#ffc400] text-black font-black text-2xl py-3 rounded-lg shadow-md border border-[#fbc02d] hover:brightness-105 transition-all">
              <span className="mr-3 tracking-tighter">BUY NOW</span>
              <span className="flex items-center justify-center min-w-[32px] w-8 h-8 rounded-full bg-[#001529] text-[#ffea00] text-sm"><i className="fa-solid fa-cart-shopping"></i></span>
            </a>

            <div className="flex justify-center items-center gap-2 mt-3 text-2xl">
              <i className="fa-brands fa-cc-visa text-[#1a1f71]"></i>
              <i className="fa-brands fa-cc-mastercard text-[#ff5f00]"></i>
              <i className="fa-brands fa-cc-amex text-[#2b71b6]"></i>
              <i className="fa-brands fa-cc-paypal text-[#003087]"></i>
              <i className="fa-brands fa-cc-discover text-[#e55c20]"></i>
            </div>
            <p className="text-gray-400 text-xs mt-3 uppercase tracking-wider">Total: <span className="line-through">$537</span> <span className="text-[#D32F2F] font-bold">$207</span></p>
          </div>
        </div>

      </div>

    </article>
  );
}
