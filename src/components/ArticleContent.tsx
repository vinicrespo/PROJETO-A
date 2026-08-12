import React, { useEffect, useState } from 'react';
import { Article } from '../types';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const [publishDate, setPublishDate] = useState(article.publishDate);

  useEffect(() => {
    // Dynamically calculate publish date: 3 hours ago from current user's local time
    const d = new Date();
    d.setHours(d.getHours() - 3);

    const formatted = new Intl.DateTimeFormat('en-US', {
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric', 
      minute: '2-digit', 
      timeZoneName: 'short'
    }).format(d);

    // Format output to match "Published August 12, 2026 11:17am EDT"
    const finalStr = "Published " + formatted.replace(' at ', ' ').replace(' AM', 'am').replace(' PM', 'pm');
    setPublishDate(finalStr);


    // Dynamically load VTurb script when component mounts
    // This fixes issues where the player sometimes fails to load because the DOM isn't ready
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a7c9e6fdcba282513bfcbef/v4/player.js";
    script.async = true;
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.head.appendChild(script);
    }
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
