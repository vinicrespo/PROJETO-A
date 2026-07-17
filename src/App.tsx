import { useState } from 'react';

import FoxHeader from './components/FoxHeader';
import ArticleContent from './components/ArticleContent';

import { articles } from './data';

export default function App() {
  const [activeArticleId, setActiveArticleId] = useState<string>('election-intelligence');

  // Active article data (defaults to declassified election intelligence matching screenshot)
  const activeArticle = articles[activeArticleId] || articles['election-intelligence'];



  return (
    <div className="w-full min-h-screen flex flex-col bg-white relative">
        {/* FOX NEWS Sticky Header */}
        <FoxHeader />

        {/* Main Article Display Section */}
        <div className="flex-1 overflow-x-hidden">
          <ArticleContent article={activeArticle} />
        </div>


    </div>
  );
}
