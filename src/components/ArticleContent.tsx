import React, { useEffect } from 'react';
import { Article } from '../types';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  useEffect(() => {
    // Dynamically load VTurb script when component mounts
    // This fixes issues where the player sometimes fails to load because the DOM isn't ready
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a5a32828ff7d30fbc875ec3/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Optional: Cleanup script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <article className="w-full bg-white px-5 pt-6 pb-12 font-sans select-text">
      {/* Category Badge - DONALD TRUMP styled exactly as screenshot */}
      <div className="flex justify-center mb-4">
        <span className="bg-[#CC0000] text-white text-[11px] font-black tracking-wider px-3.5 py-1 uppercase rounded-sm">
          {article.category}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-[25px] font-extrabold text-gray-900 text-center leading-tight tracking-tight mb-5 font-serif font-black">
        {article.title}
      </h1>

      {/* Subheading / Summary */}
      <p className="text-[14px] text-gray-700 text-center leading-relaxed mb-6 font-medium">
        {article.subheading}
      </p>

      {/* Published Date Line (Only this author-related line is kept, centered) */}
      <div className="flex flex-col items-center justify-center mb-6 border-b border-gray-100 pb-5">
        <p className="text-[11px] text-gray-400 font-medium">
          {article.publishDate}
        </p>
      </div>

      {/* VTurb VSL Player */}
      <div className="w-full mt-4" dangerouslySetInnerHTML={{ __html: `<vturb-smartplayer id="vid-6a5a32828ff7d30fbc875ec3" style="display: block; margin: 0 auto; width: 100%; "><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 56.14583333333333% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>` }} />

      {/* Hidden Content triggered by VTurb (classe hide: vsl) */}
      <div className="vsl w-full mt-6 text-center">
        <a 
          href="https://bg.nexburn.store/dtc-d/?aff_id=8870" 
          className="inline-block w-[90%] max-w-sm bg-red-600 hover:bg-red-700 text-white font-extrabold text-[18px] py-4 rounded-lg shadow-xl animate-cta-pulse uppercase tracking-wide transition-all border-b-4 border-red-800"
        >
          CLAIM MY NEXBURN KIT
        </a>
      </div>
    </article>
  );
}
