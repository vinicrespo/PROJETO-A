import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Upsell1_19() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Inject Vturb Script for Upsell 1
    const vturbScript = document.createElement('script');
    vturbScript.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/69c9592f9ece9c59e26b6667/v4/player.js";
    vturbScript.async = true;
    document.head.appendChild(vturbScript);

    // Inject CashPay Script
    const kashpayScript = document.createElement('script');
    kashpayScript.src = "https://app.kashpay.com.br/scripts/upsell-processor.js";
    kashpayScript.async = true;
    document.head.appendChild(kashpayScript);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="bg-black font-sans antialiased min-h-screen flex flex-col pt-[72px]">
      {/* Header */}
      <header className={`bg-health-red text-white py-2 px-4 flex justify-between items-center fixed w-full z-50 shadow-md transition-all duration-300 top-0`}>
        <div className="flex-1"></div>
        <h1 className="text-2xl font-bold tracking-widest">HEALTH</h1>
        <div className="flex-1 flex justify-end">
          <button aria-label="Menu" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
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
      <main className="max-w-4xl mx-auto bg-black flex-1 w-full px-4 pt-12 pb-6 md:px-8">

        {/* Video Area */}
        <section className="mb-8 flex justify-center w-full">
          <div className="w-full max-w-[400px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-xl shadow-2xl overflow-hidden">
            <vturb-smartplayer id="vid-69c9592f9ece9c59e26b6667" style={{ display: 'block', margin: '0 auto', width: '100%', height: '100%' }}></vturb-smartplayer>
          </div>
        </section>


        {/* CashPay Checkout Button (Accept Upsell) */}
        <section className="text-center mb-12 w-full hide hide-upsell1">
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => {
                // @ts-ignore
                window.acceptUpsell('https://app.kashpay.com.br/u/2be33a0da5d2fa6f');
              }} 
              style={{
                fontFamily: "'Poppins'",
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '1.3',
                color: '#ffffff',
                backgroundColor: '#057932',
                border: 'none',
                borderRadius: '10px',
                padding: '13px 7%',
                cursor: 'pointer',
                textAlign: 'center',
                display: 'block',
                margin: 'auto'
              }}
            >
              Get Now
            </button>
            <Link 
              to="/19upsell2" 
              className="text-white text-sm hover:opacity-80 underline transition-opacity"
            >
              No, thanks!
            </Link>
          </div>
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
