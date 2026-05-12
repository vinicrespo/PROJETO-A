import React, { useState } from 'react';
import { useAuth } from '../App';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingMessages = [
  "Verifying your purchase...",
  "Loading your programs...",
  "Almost ready..."
];

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setIsLoading(true);

    // Fake loading animation sequence
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < loadingMessages.length) {
        setLoadingStep(step);
      }
    }, 1000); // 1 second per message

    setTimeout(() => {
      clearInterval(interval);
      login(email.trim()); // Proceed to dashboard after 3 seconds total
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-brand-bg relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isLoading ? (
          <motion.div
            key="login-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center"
          >
            <div className="mb-10 flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-widest text-brand-secondary mb-2">GELATIDE</h1>
              <p className="text-brand-primary font-medium tracking-wide text-sm uppercase">Premium Programs</p>
            </div>

            <div className="w-full bg-brand-card p-6 rounded-2xl glow-border">
              <h2 className="text-xl font-semibold text-brand-secondary mb-1">Access Your Programs</h2>
              <p className="text-brand-secondary/60 text-sm mb-6">Enter the email you used at checkout</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-brand-secondary/80 ml-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-brand-bg border border-brand-card focus:border-brand-primary focus:glow-border-active rounded-xl px-4 py-3 text-brand-secondary placeholder-brand-secondary/30 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!email.trim() || !email.includes('@')}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(232,160,180,0.3)] mt-2"
                >
                  Access My Programs
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="loading-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <Loader2 className="w-12 h-12 text-brand-primary animate-spin" />
            <motion.p
              key={loadingStep} // Re-animate when text changes
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-secondary font-medium tracking-wide text-center h-6"
            >
              {loadingMessages[loadingStep]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
