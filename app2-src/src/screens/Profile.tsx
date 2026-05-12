import React from 'react';
import { motion } from 'framer-motion';
import { User, LogOut, RotateCcw } from 'lucide-react';
import { useAuth } from '../App';

export default function Profile() {
  const { email, logout } = useAuth();

  const resetProgram = (program: number) => {
    if (confirm(`Are you sure you want to reset all progress for Program ${program}? This cannot be undone.`)) {
      if (program === 1) {
        localStorage.removeItem('app2_p1_day');
        localStorage.removeItem('app2_p1_streak');
        // Clear all p1 checks
        for (let i = 1; i <= 90; i++) localStorage.removeItem(`app2_p1_checks_${i}`);
      } else if (program === 2) {
        localStorage.removeItem('app2_p2_day');
        for (let i = 1; i <= 14; i++) localStorage.removeItem(`app2_p2_checks_${i}`);
      } else if (program === 3) {
        localStorage.removeItem('app2_p3_dayCounter');
        localStorage.removeItem('app2_p3_streak');
        localStorage.removeItem('app2_p3_checks');
        localStorage.removeItem('app2_p3_lastCompleteDate');
      }
      alert(`Program ${program} has been reset.`);
      window.location.reload();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col px-4 py-6"
    >
      <div className="flex items-center gap-4 mb-8 bg-brand-card p-5 rounded-2xl glow-border">
        <div className="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center border border-brand-primary/50">
          <User className="w-6 h-6 text-brand-primary" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-brand-secondary/50 uppercase tracking-widest mb-1">Logged In As</h2>
          <p className="text-brand-secondary font-medium">{email}</p>
        </div>
      </div>

      <h3 className="text-lg font-bold text-brand-secondary mb-4">Manage Progress</h3>
      
      <div className="flex flex-col gap-3 mb-8">
        <button onClick={() => resetProgram(1)} className="flex items-center justify-between bg-brand-card p-4 rounded-xl border border-brand-bg/50 hover:border-red-500/50 transition-colors group">
          <div className="text-left">
            <span className="text-sm font-bold text-brand-secondary block">Reset Program 1</span>
            <span className="text-xs text-brand-secondary/50">Menopause GLP-1 Override</span>
          </div>
          <RotateCcw className="w-5 h-5 text-brand-secondary/30 group-hover:text-red-500/80 transition-colors" />
        </button>

        <button onClick={() => resetProgram(2)} className="flex items-center justify-between bg-brand-card p-4 rounded-xl border border-brand-bg/50 hover:border-red-500/50 transition-colors group">
          <div className="text-left">
            <span className="text-sm font-bold text-brand-secondary block">Reset Program 2</span>
            <span className="text-xs text-brand-secondary/50">The 7x Gelatide Accelerator</span>
          </div>
          <RotateCcw className="w-5 h-5 text-brand-secondary/30 group-hover:text-red-500/80 transition-colors" />
        </button>

        <button onClick={() => resetProgram(3)} className="flex items-center justify-between bg-brand-card p-4 rounded-xl border border-brand-bg/50 hover:border-red-500/50 transition-colors group">
          <div className="text-left">
            <span className="text-sm font-bold text-brand-secondary block">Reset Program 3</span>
            <span className="text-xs text-brand-secondary/50">Daily Gelatide Checklist</span>
          </div>
          <RotateCcw className="w-5 h-5 text-brand-secondary/30 group-hover:text-red-500/80 transition-colors" />
        </button>
      </div>

      <button 
        onClick={logout}
        className="mt-auto w-full flex items-center justify-center gap-2 bg-brand-bg border border-brand-secondary/20 hover:bg-brand-card text-brand-secondary font-bold py-4 rounded-xl transition-all"
      >
        <LogOut className="w-5 h-5" />
        Log Out
      </button>

    </motion.div>
  );
}
