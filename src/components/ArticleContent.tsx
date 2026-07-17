import React from 'react';
import { Article } from '../types';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
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

      {/* Space left intentionally for their upcoming horizontal VSL */}
      <div className="w-full border-t border-dashed border-gray-200 pt-8 mt-4 text-center text-gray-300 text-xs py-10 rounded-lg bg-slate-50 border-2 border-spacing-2">
        <span className="font-semibold block text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Espaço reservado para a VSL Horizontal</span>
        <span className="text-slate-400 block text-[11px]">Sua VSL horizontal aparecerá perfeitamente estruturada neste espaço.</span>
      </div>
    </article>
  );
}
