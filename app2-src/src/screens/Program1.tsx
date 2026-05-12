import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Circle, Flame, Droplets, Activity, Brain } from 'lucide-react';
import { program1Data } from '../data/program1Content';

export default function Program1() {
  const [currentDay, setCurrentDay] = useState(() => {
    const saved = localStorage.getItem('app2_p1_day');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [checkboxes, setCheckboxes] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(`app2_p1_checks_${currentDay}`);
    return saved ? JSON.parse(saved) : [false, false, false, false];
  });

  const [activeTab, setActiveTab] = useState<'GLP-1' | 'Estrogen' | 'Cortisol' | 'Insulin'>('GLP-1');

  useEffect(() => {
    const saved = localStorage.getItem(`app2_p1_checks_${currentDay}`);
    setCheckboxes(saved ? JSON.parse(saved) : [false, false, false, false]);
    setActiveTab(dayData.focusHormone as any);
  }, [currentDay]);

  const toggleCheck = (index: number) => {
    const newChecks = [...checkboxes];
    newChecks[index] = !newChecks[index];
    setCheckboxes(newChecks);
    localStorage.setItem(`app2_p1_checks_${currentDay}`, JSON.stringify(newChecks));
  };

  const completeDay = () => {
    if (currentDay < 90) {
      const nextDay = currentDay + 1;
      setCurrentDay(nextDay);
      localStorage.setItem('app2_p1_day', nextDay.toString());
      
      // Update streak
      const currentStreak = parseInt(localStorage.getItem('app2_p1_streak') || '0', 10);
      localStorage.setItem('app2_p1_streak', (currentStreak + 1).toString());
      window.scrollTo(0, 0);
    }
  };

  const dayData = program1Data[currentDay - 1];
  const progressPercent = (currentDay / 90) * 100;
  const streak = localStorage.getItem('app2_p1_streak') || '0';

  const tabs = [
    { id: 'GLP-1', icon: Flame },
    { id: 'Estrogen', icon: Droplets },
    { id: 'Cortisol', icon: Brain },
    { id: 'Insulin', icon: Activity },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col px-4 py-6"
    >
      {/* Top Progress Section */}
      <div className="bg-brand-card rounded-2xl p-5 mb-6 glow-border">
        <div className="flex justify-between items-end mb-2">
          <div>
            <h2 className="text-xl font-bold text-brand-secondary">Day {currentDay} of 90</h2>
            <p className="text-xs text-brand-primary uppercase tracking-wider mt-1">{dayData.phase}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-brand-primary">{streak}</div>
            <p className="text-[10px] text-brand-secondary/50 uppercase">Day Streak</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-brand-bg rounded-full overflow-hidden mt-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-brand-primary rounded-full shadow-[0_0_10px_rgba(232,160,180,0.8)]"
          />
        </div>
      </div>

      {/* Focus Hormone Tabs */}
      <div className="flex justify-between mb-6 bg-brand-card p-1 rounded-xl border border-brand-bg/50">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isTodayFocus = dayData.focusHormone === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex flex-col items-center py-2 rounded-lg transition-all relative ${
                isActive ? 'bg-brand-primary/10' : ''
              }`}
            >
              {isTodayFocus && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              )}
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'text-brand-primary' : 'text-brand-secondary/40'}`} />
              <span className={`text-[9px] font-semibold tracking-wider ${isActive ? 'text-brand-primary' : 'text-brand-secondary/40'}`}>
                {tab.id}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Today's Focus: {dayData.focusHormone}
        </span>
      </div>

      {/* Daily Content */}
      <div className="flex flex-col gap-4 mb-8">
        {[
          { title: "Morning Routine", content: dayData.morningAction },
          { title: "Midday Action", content: dayData.middayAction },
          { title: "Evening Routine", content: dayData.eveningAction },
          { title: "Food Guidance", content: dayData.foodGuidance },
        ].map((item, index) => (
          <div 
            key={index}
            onClick={() => toggleCheck(index)}
            className={`flex items-start gap-4 bg-brand-card p-4 rounded-xl border transition-all cursor-pointer ${
              checkboxes[index] ? 'border-brand-primary bg-brand-primary/5' : 'border-brand-bg/50'
            }`}
          >
            <div className="mt-0.5">
              {checkboxes[index] ? (
                <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              ) : (
                <Circle className="w-6 h-6 text-brand-secondary/30" />
              )}
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-secondary/50 uppercase tracking-widest mb-1">
                {item.title}
              </h4>
              <p className={`text-sm ${checkboxes[index] ? 'text-brand-secondary/70 line-through' : 'text-brand-secondary'}`}>
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Tip & Dr Oz */}
      <div className="bg-brand-bg border border-brand-primary/20 p-5 rounded-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary" />
        <h4 className="text-brand-primary font-bold text-sm mb-2">Today's Protocol Tip</h4>
        <p className="text-brand-secondary/80 text-sm mb-4">{dayData.dailyTip}</p>
        
        <div className="border-t border-brand-card pt-4 mt-2">
          <p className="text-xs text-brand-secondary/60 italic">"{dayData.drOzMessage}"</p>
          <p className="text-[10px] text-brand-primary font-bold mt-2 uppercase tracking-widest">— Dr. Oz</p>
        </div>
      </div>

      <button
        onClick={completeDay}
        disabled={!checkboxes.every(Boolean) || currentDay >= 90}
        className="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-50 disabled:bg-brand-card disabled:text-brand-secondary/50 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(232,160,180,0.2)] mb-8"
      >
        {currentDay >= 90 ? 'Program Complete!' : 'Mark Day Complete'}
        {currentDay < 90 && <ChevronRight className="w-5 h-5" />}
      </button>

    </motion.div>
  );
}
