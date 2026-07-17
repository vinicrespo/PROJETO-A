import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import FoxHeader from './components/FoxHeader';
import ArticleContent from './components/ArticleContent';
import WatchLiveModal from './components/WatchLiveModal';
import MenuDrawer from './components/MenuDrawer';
import { articles } from './data';

export default function App() {
  const [activeArticleId, setActiveArticleId] = useState<string>('election-intelligence');
  const [isWatchTVOpen, setIsWatchTVOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active article data (defaults to declassified election intelligence matching screenshot)
  const activeArticle = articles[activeArticleId] || articles['election-intelligence'];

  // Handle drawer category selection
  const handleSelectCategory = (categoryName: string) => {
    // Find the first article that fits this category
    const found = Object.values(articles).find(
      (art) => art.category === categoryName
    );
    if (found) {
      setActiveArticleId(found.id);
    } else {
      alert(`Nenhum artigo disponível no momento para a categoria: ${categoryName}.`);
    }
  };

  return (
    <PhoneFrame>
      <div className="w-full min-h-full flex flex-col bg-white relative">
        {/* FOX NEWS Sticky Header */}
        <FoxHeader 
          onWatchTVClick={() => setIsWatchTVOpen(true)}
          onMenuClick={() => setIsMenuOpen(true)}
        />

        {/* Main Article Display Section */}
        <div className="flex-1 overflow-x-hidden">
          <ArticleContent article={activeArticle} />
        </div>

        {/* Watch TV / Live Video Overlay Player */}
        {isWatchTVOpen && (
          <WatchLiveModal onClose={() => setIsWatchTVOpen(false)} />
        )}

        {/* Categories Menu Drawer */}
        <MenuDrawer 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onSelectCategory={handleSelectCategory}
        />
      </div>
    </PhoneFrame>
  );
}
