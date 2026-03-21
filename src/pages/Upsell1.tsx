import React, { useState, useEffect } from 'react';

export default function Upsell1() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    // Inject Vturb Script (Placeholder for Upsell 1)
    const vturbScript = document.createElement('script');
    vturbScript.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/69ab3e0401dc41aee18ccb65/v4/player.js";
    vturbScript.async = true;
    document.head.appendChild(vturbScript);

    return () => {
      // Clean up script if necessary, though usually not needed for vturb
    };
  }, []);


  return (
    <div className="bg-white font-sans antialiased min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white flex-1 w-full px-4 pt-12 pb-6 md:px-8 shadow-sm">
        {/* Video Area */}
        <section className="mb-8 flex justify-center w-full">
          <div className="w-full max-w-[400px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-xl shadow-2xl overflow-hidden">
            <vturb-smartplayer id="vid-69ab3e0401dc41aee18ccb65" style={{ display: 'block', margin: '0 auto', width: '100%', height: '100%' }}></vturb-smartplayer>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center mb-12 flex justify-center w-full hide">
          <a href="https://pay.mycheckoutt.com/019cd95d-9142-7368-9e90-e657eda52f8d?ref=" className="bg-[#218838] hover:bg-[#1e7e34] text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-full shadow-lg uppercase tracking-wide transition-all duration-200 w-full sm:w-[90%] md:w-auto mx-auto animate-pulse-fast hover:scale-105 active:scale-95 border-b-4 border-[#1c7430]">
            Yes, I Want Instant Access
          </a>
        </section>

        {/* Note: Facebook comments and unnecessary sections removed for Upsell page as requested */}
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
