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
