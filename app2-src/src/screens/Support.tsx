import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Support() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col px-4 py-6"
    >
      <h1 className="text-2xl font-bold text-brand-secondary mb-6">Support</h1>

      <div className="bg-brand-card rounded-2xl p-6 glow-border mb-6">
        <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mb-4 border border-brand-primary/50">
          <Mail className="w-6 h-6 text-brand-primary" />
        </div>
        <h2 className="text-lg font-bold text-brand-secondary mb-2">Need Help?</h2>
        <p className="text-sm text-brand-secondary/70 mb-6 leading-relaxed">
          Our dedicated support team is here for you. If you have any questions about your programs or need technical assistance, please reach out to us.
        </p>
        <a 
          href="mailto:support@gelatide.com"
          className="flex items-center justify-center gap-2 w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(232,160,180,0.3)]"
        >
          support@gelatide.com
        </a>
      </div>

      <div className="bg-brand-bg border border-brand-primary/20 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[100px] h-[100px] bg-brand-primary/5 blur-[40px] pointer-events-none" />
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-6 h-6 text-brand-primary" />
          <h2 className="text-lg font-bold text-brand-secondary">60-Day Guarantee</h2>
        </div>
        <p className="text-sm text-brand-secondary/70 leading-relaxed mb-4">
          You are fully protected by our 60-day money-back guarantee. We are committed to your transformation and satisfaction. If you are not completely thrilled with your results, simply email us and we'll issue a prompt refund.
        </p>
        <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest">
          <HeartHandshake className="w-4 h-4" />
          <span>Risk-Free Journey</span>
        </div>
      </div>

    </motion.div>
  );
}
