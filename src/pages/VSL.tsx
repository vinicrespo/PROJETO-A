import React, { useState, useEffect } from 'react';
import { Menu, Play, ThumbsUp, Heart } from 'lucide-react';
import moment from 'moment';

export default function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [minutesAgo, setMinutesAgo] = useState(30);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Set dynamic current date (e.g., 6 Mar)
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });
    setCurrentDate(`${day} ${month}`);

    // Update minutes every 60 seconds
    const intervalId = setInterval(() => {
      setMinutesAgo(prev => prev + 1);
    }, 60000);

    // Inject Vturb Script
    const vturbScript = document.createElement('script');
    vturbScript.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/69ab3e0401dc41aee18ccb65/v4/player.js";
    vturbScript.async = true;
    document.head.appendChild(vturbScript);

    const handleScroll = () => {
      // Hide banner when scrolled down, show when at top
      if (window.scrollY > 50) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-white font-sans antialiased min-h-screen flex flex-col pt-[72px]">
      {/* Header */}
      <header className={`bg-health-red text-white py-2 px-4 flex justify-between items-center fixed w-full z-50 shadow-md transition-all duration-300 top-0`}>
        <div className="flex-1"></div>
        <h1 className="text-2xl font-bold tracking-widest">HEALTH</h1>
        <div className="flex-1 flex justify-end">
          <button aria-label="Menu" className="p-1">
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Marquee Banner */}
      <div className={`bg-[#4a0404] py-1 overflow-hidden transition-all duration-300 fixed w-full z-40 ${showBanner ? 'opacity-100 top-[48px]' : 'opacity-0 top-0 pointer-events-none'}`}>
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider px-4">
            DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH
          </div>
          <div className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider px-4">
            DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH • DAILY UPDATES ON WELLNESS AND HEALTH
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white flex-1 w-full px-4 pt-6 pb-6 md:px-8 shadow-sm">
        {/* Author Info */}
        <section className="mb-6">
          <p className="font-bold text-sm">By Dr.</p>
          <p className="text-xs text-gray-500">
            Updated <span>{minutesAgo} minutes ago</span> - <span>{currentDate}</span>
          </p>
        </section>

        {/* Headline */}
        <section className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold leading-tight">
            <span className="text-health-red">This morning memory elixir is the great secret</span> by which the neurosurgeon, Dr. Daniel Amen, has been reversing several cases of Alzheimer's and dementia.
          </h2>
        </section>

        {/* Video Area */}
        <section className="mb-8 flex justify-center w-full">
          <div className="w-full max-w-[400px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-xl shadow-2xl overflow-hidden border-4 border-gray-200">
            <vturb-smartplayer id="vid-69ab3e0401dc41aee18ccb65" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center mb-12 flex justify-center w-full hide">
          <a href="https://pay.mycheckoutt.com/019cbe91-76e8-73e1-bac4-51146d60ae7a?ref=" className="bg-[#218838] hover:bg-[#1e7e34] text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-full shadow-lg uppercase tracking-wide transition-all duration-200 w-full sm:w-[90%] md:w-auto mx-auto animate-pulse-fast hover:scale-105 active:scale-95 border-b-4 border-[#1c7430]">
            Yes, I Want Instant Access
          </a>
        </section>

        {/* Comments Section */}
        <section className="border-t border-gray-200 pt-8 mb-12">
          <h4 className="text-lg font-bold mb-6 text-gray-700">369 Comments</h4>
          <div className="space-y-6">

            {/* Thread 1 */}
            <div className="relative">
              {/* Comment 1 (Main) */}
              <div className="flex gap-3 relative z-10">
                <img loading="lazy" alt="Samantha Anderson" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1 z-10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" />
                <div className="flex-1">
                  <div className="relative inline-block max-w-[85%] sm:max-w-full">
                    <div className="bg-[#f0f2f5] px-3 py-2 rounded-2xl">
                      <p className="font-bold text-[#385898] text-[13px] hover:underline cursor-pointer">Samantha Anderson</p>
                      <p className="text-[15px] leading-snug text-gray-800">Dr., it's been 15 consecutive days since I started, and I've already noticed a big improvement in my mental clarity and focus. I'll keep going because I'm feeling amazing! 🤩</p>
                    </div>
                    <div className="absolute -bottom-2.5 right-0 flex items-center bg-white px-[4px] py-[2px] shadow-sm rounded-full border border-gray-200 z-10 cursor-pointer">
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-[18px] h-[18px] bg-blue-500 rounded-full border-2 border-white p-0.5 object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white p-0.5 -ml-[6px] relative z-10 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                      <span className="text-[#65676B] text-[13px] ml-1 pr-1 font-normal">23</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs mt-1 ml-3 font-bold text-[#65676B] gap-3">
                    <button className="hover:underline">Like</button>
                    <button className="hover:underline">Reply</button>
                    <span className="font-normal">2h</span>
                  </div>
                </div>
              </div>

              {/* Replies Container */}
              <div className="relative mt-2">


                {/* Comment 2 (Reply to 1) */}
                <div className="flex gap-3 ml-12 relative z-10 pt-2 pb-2">



                  <img loading="lazy" alt="Jennifer Davis" className="w-8 h-8 rounded-full bg-gray-200 object-cover mt-1 z-10" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" />
                  <div className="flex-1">
                    <div className="relative inline-block max-w-[85%] sm:max-w-full">
                      <div className="bg-[#f0f2f5] px-3 py-2 rounded-2xl">
                        <p className="font-bold text-[#385898] text-[13px] hover:underline cursor-pointer">Jennifer Davis</p>
                        <p className="text-[15px] leading-snug text-gray-800">FINALLY, SOMEONE WHO DOESN'T BEAT AROUND THE BUSH TO ASK FOR MONEY IN THE END, THANK YOUUUU! I STARTED TODAY ��</p>
                      </div>
                      <div className="absolute -bottom-2.5 right-0 flex items-center bg-white px-[4px] py-[2px] shadow-sm rounded-full border border-gray-200 z-10 cursor-pointer">
                        <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-[18px] h-[18px] bg-blue-500 rounded-full border-2 border-white p-0.5 object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                        <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white p-0.5 -ml-[6px] relative z-10 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                        <span className="text-[#65676B] text-[13px] ml-1 pr-1 font-normal">17</span>
                      </div>
                    </div>
                    <div className="flex items-center text-xs mt-1 ml-3 font-bold text-[#65676B] gap-3">
                      <button className="hover:underline">Like</button>
                      <button className="hover:underline">Reply</button>
                      <span className="font-normal">35 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thread 2 */}
            <div className="relative">
              {/* Comment 3 (Main) */}
              <div className="flex gap-3 relative z-10">
                <img loading="lazy" alt="Tommy Thompson" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1 z-10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" />
                <div className="flex-1">
                  <div className="relative inline-block max-w-[85%] sm:max-w-full">
                    <div className="bg-[#f0f2f5] px-3 py-2 rounded-2xl">
                      <p className="font-bold text-[#385898] text-[13px] hover:underline cursor-pointer">Tommy Thompson</p>
                      <p className="text-[15px] leading-snug text-gray-800">You explain very well, it's what we, the laypeople, need. I'm going to start using this trick today itself.</p>
                    </div>
                    <div className="absolute -bottom-2.5 right-0 flex items-center bg-white px-[4px] py-[2px] shadow-sm rounded-full border border-gray-200 z-10 cursor-pointer">
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-[18px] h-[18px] bg-blue-500 rounded-full border-2 border-white p-0.5 object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white p-0.5 -ml-[6px] relative z-10 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                      <span className="text-[#65676B] text-[13px] ml-1 pr-1 font-normal">11</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs mt-1 ml-3 font-bold text-[#65676B] gap-3">
                    <button className="hover:underline">Like</button>
                    <button className="hover:underline">Reply</button>
                    <span className="font-normal">7 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thread 3 */}
            <div className="relative">
              {/* Comment 4 (Main) */}
              <div className="flex gap-3 relative z-10">
                <img loading="lazy" alt="Cora Martinez" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1 z-10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" />
                <div className="flex-1">
                  <div className="relative inline-block max-w-[85%] sm:max-w-full">
                    <div className="bg-[#f0f2f5] px-3 py-2 rounded-2xl">
                      <p className="font-bold text-[#385898] text-[13px] hover:underline cursor-pointer">Cora Martinez</p>
                      <p className="text-[15px] leading-snug text-gray-800">I've been applying these tips for 17 days now, and I've already noticed a significant improvement in my memory. I was even surprised by the results; it's impressive how some simple adjustments can make a difference! Loved it ❤️❤️❤️</p>
                    </div>
                    <div className="absolute -bottom-2.5 right-0 flex items-center bg-white px-[4px] py-[2px] shadow-sm rounded-full border border-gray-200 z-10 cursor-pointer">
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-[18px] h-[18px] bg-blue-500 rounded-full border-2 border-white p-0.5 object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white p-0.5 -ml-[6px] relative z-10 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                      <span className="text-[#65676B] text-[13px] ml-1 pr-1 font-normal">34</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs mt-1 ml-3 font-bold text-[#65676B] gap-3">
                    <button className="hover:underline">Like</button>
                    <button className="hover:underline">Reply</button>
                    <span className="font-normal">1h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thread 4 */}
            <div className="relative">
              {/* Comment 5 (Main) */}
              <div className="flex gap-3 relative z-10">
                <img loading="lazy" alt="Emily Johnson" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1 z-10" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" />
                <div className="flex-1">
                  <div className="relative inline-block max-w-[85%] sm:max-w-full">
                    <div className="bg-[#f0f2f5] px-3 py-2 rounded-2xl">
                      <p className="font-bold text-[#385898] text-[13px] hover:underline cursor-pointer">Emily Johnson</p>
                      <p className="text-[15px] leading-snug text-gray-800">Very well explained and straightforward video, no beating around the bush, congratulations Dr. 🤩</p>
                    </div>
                    <div className="absolute -bottom-2.5 right-0 flex items-center bg-white px-[4px] py-[2px] shadow-sm rounded-full border border-gray-200 z-10 cursor-pointer">
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-[18px] h-[18px] bg-blue-500 rounded-full border-2 border-white p-0.5 object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white p-0.5 -ml-[6px] relative z-10 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                      <span className="text-[#65676B] text-[13px] ml-1 pr-1 font-normal">54</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs mt-1 ml-3 font-bold text-[#65676B] gap-3">
                    <button className="hover:underline">Like</button>
                    <button className="hover:underline">Reply</button>
                    <span className="font-normal">1h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thread 5 */}
            <div className="relative">
              {/* Comment 6 (Main) */}
              <div className="flex gap-3 relative z-10">
                <img loading="lazy" alt="Lauren Brown" className="w-10 h-10 rounded-full bg-gray-200 object-cover mt-1 z-10" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop" />
                <div className="flex-1">
                  <div className="relative inline-block max-w-[85%] sm:max-w-full">
                    <div className="bg-[#f0f2f5] px-3 py-2 rounded-2xl">
                      <p className="font-bold text-[#385898] text-[13px] hover:underline cursor-pointer">Lauren Brown</p>
                      <p className="text-[15px] leading-snug text-gray-800">Dr., you've helped me a lot. A few years ago, I went through a difficult period and started looking for ways to improve my mind and well-being. I started applying your techniques 5 days ago, and I already feel like a different person – more energized, with greater mental clarity, and more desire to face the day. What a blessing!</p>
                    </div>
                    <div className="absolute -bottom-2.5 right-0 flex items-center bg-white px-[4px] py-[2px] shadow-sm rounded-full border border-gray-200 z-10 cursor-pointer">
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/like.svg" alt="Like" className="w-[18px] h-[18px] bg-blue-500 rounded-full border-2 border-white p-0.5 object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '👍'; }} />
                      <img loading="lazy" src="https://raw.githubusercontent.com/vinicrespo/PROJETO-A/main/love.svg" alt="Love" className="w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white p-0.5 -ml-[6px] relative z-10 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.textContent = '❤️'; }} />
                      <span className="text-[#65676B] text-[13px] ml-1 pr-1 font-normal">10</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs mt-1 ml-3 font-bold text-[#65676B] gap-3">
                    <button className="hover:underline">Like</button>
                    <button className="hover:underline">Reply</button>
                    <span className="font-normal">19 min</span>
                  </div>
                </div>
              </div>
            </div>
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
