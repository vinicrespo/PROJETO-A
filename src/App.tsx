import React, { useState, useEffect } from 'react';
import { Menu, Play, ThumbsUp, Heart } from 'lucide-react';
import moment from 'moment';

export default function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 font-sans antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-health-red text-white py-2 px-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex-1"></div>
        <h1 className="text-2xl font-bold tracking-widest">HEALTH</h1>
        <div className="flex-1 flex justify-end">
          <button aria-label="Menu" className="p-1">
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Marquee */}
      <div className={`bg-health-red border-t border-white/20 py-1 overflow-hidden transition-all duration-300 fixed top-[48px] w-full z-40 ${showBanner ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="animate-marquee text-[10px] md:text-xs text-white font-bold uppercase tracking-wider">
          DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white flex-1 w-full px-4 py-6 md:px-8 shadow-sm">
        {/* Author Info */}
        <section className="mb-6">
          <p className="font-bold text-sm">By Dr.</p>
          <p className="text-xs text-gray-500">
            Updated <span>30 minutes ago</span> - <span>{currentDate}</span>
          </p>
        </section>

        {/* Headline */}
        <section className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold leading-tight">
            <span className="text-health-red">This morning memory elixir is the great secret</span> by which the neurosurgeon, Dr. Daniel Amen, has been reversing several cases of Alzheimer's and dementia.
          </h2>
        </section>

        {/* Video Area */}
        <section className="mb-8">
          <div className="video-placeholder rounded shadow-2xl overflow-hidden border-4 border-gray-200 group cursor-pointer">
            <img
              alt="Video Presentation"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5DuvQujY-gBX4pYkM3PHCnwzZFbBTkLnRPnO4Zj2vN9XSPy9Tux2xAAoj6n7_o0mdDRoGYnF4ppiLI1WTd_IU0yRi0I1TDvJwS92Xj9xkFp3ZKC8nKzXyx-mnF9qRCCDyLFSDcyB9isnS7rmemyBljG7En_Q4xBOkBQiMksvllgCm-0Kz8g4N4L6Tz8QvD7aLjD5PmlCIiqtog4ZBDHAQLlchiF6iZ3TI6dabwdLfSDU4nBmQ9VkmCWvEdW7YHu8Mon7_kGMVD6-G"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
              <div className="w-20 h-20 bg-health-red rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play className="h-10 w-10 text-white fill-current ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center mb-12 flex justify-center w-full">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-full shadow-lg uppercase tracking-wide transition-all duration-200 w-full sm:w-[90%] md:w-auto mx-auto animate-pulse-fast hover:scale-105 active:scale-95">
            Adicionar ao carrinho
          </button>
        </section>

        {/* Comments Section */}
        <section className="border-t border-gray-200 pt-8 mb-12">
          <h4 className="text-lg font-bold mb-6 text-gray-700">369 Comments</h4>
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="flex gap-3">
              <img alt="Samantha Anderson" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                  <p className="font-bold text-[#385898] text-sm hover:underline cursor-pointer">Samantha Anderson</p>
                  <p className="text-[15px] leading-snug mt-1 text-gray-800">Dr., it's been 15 consecutive days since I started, and I've already noticed a big improvement in my mental clarity and focus. I'll keep going because I'm feeling amazing! 🤩</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-1 ml-2 font-bold text-gray-500">
                  <div className="flex gap-3">
                    <button className="hover:underline">Like</button>
                    <span>·</span>
                    <button className="hover:underline">Reply</button>
                    <span>·</span>
                    <span className="font-normal text-gray-400">2h</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-full border border-gray-100">
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-4 h-4 bg-blue-500 rounded-full p-0.5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-4 h-4 bg-red-500 rounded-full p-0.5 -ml-1" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                    <span className="text-gray-500 ml-1 font-normal">23</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-3 ml-12">
              <img alt="Jennifer Davis" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                  <p className="font-bold text-[#385898] text-sm hover:underline cursor-pointer">Jennifer Davis</p>
                  <p className="text-[15px] leading-snug mt-1 text-gray-800">FINALLY, SOMEONE WHO DOESN'T BEAT AROUND THE BUSH TO ASK FOR MONEY IN THE END, THANK YOUUUU! I STARTED TODAY 🤍</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-1 ml-2 font-bold text-gray-500">
                  <div className="flex gap-3">
                    <button className="hover:underline">Like</button>
                    <span>·</span>
                    <button className="hover:underline">Reply</button>
                    <span>·</span>
                    <span className="font-normal text-gray-400">35 min</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-full border border-gray-100">
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-4 h-4 bg-blue-500 rounded-full p-0.5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-4 h-4 bg-red-500 rounded-full p-0.5 -ml-1" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                    <span className="text-gray-500 ml-1 font-normal">17</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="flex gap-3">
              <img alt="Tommy Thompson" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                  <p className="font-bold text-[#385898] text-sm hover:underline cursor-pointer">Tommy Thompson</p>
                  <p className="text-[15px] leading-snug mt-1 text-gray-800">You explain very well, it's what we, the laypeople, need. I'm going to start using this trick today itself.</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-1 ml-2 font-bold text-gray-500">
                  <div className="flex gap-3">
                    <button className="hover:underline">Like</button>
                    <span>·</span>
                    <button className="hover:underline">Reply</button>
                    <span>·</span>
                    <span className="font-normal text-gray-400">7 min</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-full border border-gray-100">
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-4 h-4 bg-blue-500 rounded-full p-0.5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-4 h-4 bg-red-500 rounded-full p-0.5 -ml-1" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                    <span className="text-gray-500 ml-1 font-normal">11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 4 */}
            <div className="flex gap-3">
              <img alt="Cora Martinez" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                  <p className="font-bold text-[#385898] text-sm hover:underline cursor-pointer">Cora Martinez</p>
                  <p className="text-[15px] leading-snug mt-1 text-gray-800">I've been applying these tips for 17 days now, and I've already noticed a significant improvement in my memory. I was even surprised by the results; it's impressive how some simple adjustments can make a difference! Loved it ❤️❤️❤️</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-1 ml-2 font-bold text-gray-500">
                  <div className="flex gap-3">
                    <button className="hover:underline">Like</button>
                    <span>·</span>
                    <button className="hover:underline">Reply</button>
                    <span>·</span>
                    <span className="font-normal text-gray-400">1h</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-full border border-gray-100">
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-4 h-4 bg-blue-500 rounded-full p-0.5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-4 h-4 bg-red-500 rounded-full p-0.5 -ml-1" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                    <span className="text-gray-500 ml-1 font-normal">34</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 5 */}
            <div className="flex gap-3">
              <img alt="Emily Johnson" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                  <p className="font-bold text-[#385898] text-sm hover:underline cursor-pointer">Emily Johnson</p>
                  <p className="text-[15px] leading-snug mt-1 text-gray-800">Very well explained and straightforward video, no beating around the bush, congratulations Dr. 🤩</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-1 ml-2 font-bold text-gray-500">
                  <div className="flex gap-3">
                    <button className="hover:underline">Like</button>
                    <span>·</span>
                    <button className="hover:underline">Reply</button>
                    <span>·</span>
                    <span className="font-normal text-gray-400">1h</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-full border border-gray-100">
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-4 h-4 bg-blue-500 rounded-full p-0.5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-4 h-4 bg-red-500 rounded-full p-0.5 -ml-1" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                    <span className="text-gray-500 ml-1 font-normal">54</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 6 */}
            <div className="flex gap-3">
              <img alt="Lauren Brown" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop" />
              <div className="flex-1">
                <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                  <p className="font-bold text-[#385898] text-sm hover:underline cursor-pointer">Lauren Brown</p>
                  <p className="text-[15px] leading-snug mt-1 text-gray-800">Dr., you've helped me a lot. A few years ago, I went through a difficult period and started looking for ways to improve my mind and well-being. I started applying your techniques 5 days ago, and I already feel like a different person – more energized, with greater mental clarity, and more desire to face the day. What a blessing!</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-1 ml-2 font-bold text-gray-500">
                  <div className="flex gap-3">
                    <button className="hover:underline">Like</button>
                    <span>·</span>
                    <button className="hover:underline">Reply</button>
                    <span>·</span>
                    <span className="font-normal text-gray-400">19 min</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-full border border-gray-100">
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-4 h-4 bg-blue-500 rounded-full p-0.5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                    <img src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-4 h-4 bg-red-500 rounded-full p-0.5 -ml-1" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                    <span className="text-gray-500 ml-1 font-normal">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-bold">This post is no longer receiving comments!</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-health-red text-white py-12 px-4 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <nav className="flex gap-8 mb-8 text-sm font-bold">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:underline">Privacy Policy</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:underline">Terms of Use</button>
          </nav>
          <p className="text-xs opacity-80">2026. All rights reserved.</p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700 text-sm">
              <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
              <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
              <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            </div>
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Terms of Use</h2>
            <div className="space-y-4 text-gray-700 text-sm">
              <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
              <p>The materials contained in this website are protected by applicable copyright and trademark law.</p>
              <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
              <p>We may revise these terms of use for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
            </div>
            <button
              onClick={() => setIsTermsOpen(false)}
              className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
