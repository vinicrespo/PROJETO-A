import React, { useEffect } from 'react';
import { Article } from '../types';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a7c9e6fdcba282513bfcbef/v4/player.js";
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
      <div className="w-full mt-4" dangerouslySetInnerHTML={{ __html: `<vturb-smartplayer id="vid-6a7c9e6fdcba282513bfcbef" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 125% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>` }} />

      {/* Pricing Cards */}
      <div className="w-full mt-8 flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto font-sans">
        
        {/* Card 1: Basic Offer (Left Desktop, Bottom Mobile) */}
        <div className="order-3 md:order-1 flex-1 flex flex-col bg-white border-2 border-orange-400 rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 text-center flex-grow">
            <p className="italic text-gray-700 font-serif">Basic Offer</p>
            <h3 className="text-2xl font-black text-pink-500 tracking-tight">2 BOTTLES</h3>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-wide">60 Day Supply</p>
            <div className="py-4">
              <img src="/images/2.png" alt="2 Bottles of Lipo Jelly" className="w-48 mx-auto object-contain" />
            </div>
            <div className="text-center mt-2">
              <div className="flex items-start justify-center text-orange-500 font-black">
                <span className="text-2xl mt-2">$</span>
                <span className="text-6xl tracking-tighter">79</span>
              </div>
              <p className="text-xs text-orange-400 uppercase font-bold mt-1 tracking-widest">Per Bottle</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mx-4"></div>
            <div className="text-left px-4 space-y-2 text-sm font-bold">
              <p className="text-orange-500"><i className="fa-solid fa-circle-check mr-2"></i>YOU SAVE $140!</p>
              <p className="text-pink-600"><i className="fa-solid fa-circle-check mr-2"></i>90 DAYS GUARANTEE</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mx-4"></div>
            <div className="text-center mb-4">
              <p className="text-gray-800 font-bold text-lg">Total: <span className="line-through text-gray-400 font-normal">$298</span> <span className="text-pink-600 font-black">$158</span></p>
              <p className="text-gray-800 font-bold mt-1">+ <span className="text-orange-500">$9.99</span> SHIPPING</p>
            </div>
          </div>
          <a href="https://bg.nexburn.store/dtc-d/?aff_id=8870" className="block w-full bg-orange-400 hover:bg-orange-500 text-white font-black text-xl py-4 text-center transition-colors">
            <i className="fa-solid fa-cart-shopping mr-2"></i> BUY NOW
          </a>
        </div>

        {/* Card 2: Best Offer (Middle Desktop, Top Mobile) */}
        <div className="order-1 md:order-2 flex-[1.1] flex flex-col bg-white border-[3px] border-pink-500 rounded-xl overflow-hidden shadow-2xl relative z-10 transform md:-translate-y-4">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center py-2">
            <h2 className="text-2xl font-black uppercase tracking-widest">Best Offer!</h2>
          </div>
          <div className="p-4 text-center flex-grow">
            <div className="flex justify-center items-center gap-1 mb-2">
              <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
              <span className="font-bold text-pink-500 uppercase tracking-widest text-xs">Today with Jenna & Friends</span>
            </div>
            <h3 className="text-3xl font-black text-pink-500 tracking-tight">6 BOTTLES</h3>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-wide">180 Day Supply</p>
            <div className="py-2">
              <img src="/images/6.png" alt="6 Bottles of Lipo Jelly" className="w-56 mx-auto object-contain" />
            </div>
            <div className="text-center mt-2">
              <div className="flex items-start justify-center text-pink-500 font-black">
                <span className="text-2xl mt-2">$</span>
                <span className="text-7xl tracking-tighter">49</span>
              </div>
              <p className="text-xs text-pink-400 uppercase font-bold mt-1 tracking-widest">Per Bottle</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mx-4"></div>
            <div className="text-left px-4 space-y-2 text-sm font-bold">
              <p className="text-orange-500"><i className="fa-solid fa-circle-check mr-2"></i>YOU SAVE $600!</p>
              <p className="text-pink-600"><i className="fa-solid fa-circle-check mr-2"></i>50% DISCOUNT</p>
              <p className="text-pink-600"><i className="fa-solid fa-circle-check mr-2"></i>90 DAYS GUARANTEE</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mx-4"></div>
            <div className="text-center mb-4">
              <p className="text-gray-800 font-bold text-lg">Total: <span className="line-through text-gray-400 font-normal">$894</span> <span className="text-pink-600 font-black">$294</span></p>
              <p className="text-gray-800 font-bold mt-1">+ <span className="text-orange-500">FREE</span> SHIPPING</p>
            </div>
          </div>
          <a href="https://bg.nexburn.store/dtc-d/?aff_id=8870" className="block w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-black text-2xl py-5 text-center transition-colors">
            <i className="fa-solid fa-cart-shopping mr-2"></i> BUY NOW
          </a>
        </div>

        {/* Card 3: Most Popular (Right Desktop, Middle Mobile) */}
        <div className="order-2 md:order-3 flex-1 flex flex-col bg-white border-2 border-pink-500 rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 text-center flex-grow">
            <p className="italic text-gray-700 font-serif">Most Popular</p>
            <h3 className="text-2xl font-black text-pink-500 tracking-tight">3 BOTTLES</h3>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-wide">90 Day Supply</p>
            <div className="py-4">
              <img src="/images/3.png" alt="3 Bottles of Lipo Jelly" className="w-48 mx-auto object-contain" />
            </div>
            <div className="text-center mt-2">
              <div className="flex items-start justify-center text-orange-500 font-black">
                <span className="text-2xl mt-2">$</span>
                <span className="text-7xl tracking-tighter">69</span>
              </div>
              <p className="text-xs text-pink-400 uppercase font-bold mt-1 tracking-widest">Per Bottle</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mx-4"></div>
            <div className="text-left px-4 space-y-2 text-sm font-bold">
              <p className="text-orange-500"><i className="fa-solid fa-circle-check mr-2"></i>YOU SAVE $240!</p>
              <p className="text-pink-600"><i className="fa-solid fa-circle-check mr-2"></i>90 DAYS GUARANTEE</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-4 mx-4"></div>
            <div className="text-center mb-4">
              <p className="text-gray-800 font-bold text-lg">Total: <span className="line-through text-gray-400 font-normal">$447</span> <span className="text-pink-600 font-black">$207</span></p>
              <p className="text-gray-800 font-bold mt-1">+ <span className="text-orange-500">FREE</span> SHIPPING</p>
            </div>
          </div>
          <a href="https://bg.nexburn.store/dtc-d/?aff_id=8870" className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-xl py-4 text-center transition-colors">
            <i className="fa-solid fa-cart-shopping mr-2"></i> BUY NOW
          </a>
        </div>

      </div>

    </article>
  );
}
