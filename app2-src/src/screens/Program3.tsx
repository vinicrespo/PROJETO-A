import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Trophy, Flame } from 'lucide-react';
import { program3Tips, program3Messages } from '../data/programContent';

const CHECKLIST_ITEMS = [
  { id: 'm1', block: 'morning', label: 'Drink 16oz of water immediately after waking' },
  { id: 'm2', block: 'morning', label: 'Complete 3-minute morning ritual' },
  { id: 'm3', block: 'morning', label: 'Eat a protein-rich breakfast within 1 hour' },
  { id: 'm4', block: 'morning', label: 'Take morning supplements (if applicable)' },
  { id: 'm5', block: 'morning', label: '10-minute morning movement' },

  { id: 'd1', block: 'daytime', label: 'Eat largest meal between 12:00-2:00 PM' },
  { id: 'd2', block: 'daytime', label: '10-minute post-meal walk' },
  { id: 'd3', block: 'daytime', label: 'Drink at least 64oz of water before 6:00 PM' },
  { id: 'd4', block: 'daytime', label: 'Midday cortisol interrupt (2 minutes)' },
  { id: 'd5', block: 'daytime', label: 'Light afternoon snack only if needed' },

  { id: 'e1', block: 'evening', label: 'Last meal before 7:00 PM (light, protein + veg)' },
  { id: 'e2', block: 'evening', label: 'No food or drink (except water/tea) after 7:30 PM' },
  { id: 'e3', block: 'evening', label: 'Begin wind-down routine at 9:00 PM' },
  { id: 'e4', block: 'evening', label: 'Take Gelatide Method 8:30 PM' },
  { id: 'e5', block: 'evening', label: 'In bed by 10:00 PM with lights out' },
];

export default function Program3() {
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('app2_p3_checks');
    return saved ? JSON.parse(saved) : {};
  });

  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem('app2_p3_streak') || '0', 10);
  });

  const [dayCounter, setDayCounter] = useState(() => {
    return parseInt(localStorage.getItem('app2_p3_dayCounter') || '1', 10);
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleCheck = (id: string) => {
    const newChecks = { ...checkboxes, [id]: !checkboxes[id] };
    setCheckboxes(newChecks);
    localStorage.setItem('app2_p3_checks', JSON.stringify(newChecks));
  };

  const resetForTomorrow = () => {
    // If all checked, increase streak
    const allChecked = CHECKLIST_ITEMS.every(item => checkboxes[item.id]);
    if (allChecked) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('app2_p3_streak', newStreak.toString());
      localStorage.setItem('app2_p3_lastCompleteDate', new Date().toDateString());
    } else {
      setStreak(0);
      localStorage.setItem('app2_p3_streak', '0');
    }

    setDayCounter(prev => {
      const newCount = prev + 1;
      localStorage.setItem('app2_p3_dayCounter', newCount.toString());
      return newCount;
    });

    setCheckboxes({});
    localStorage.removeItem('app2_p3_checks');
    window.scrollTo(0, 0);
  };

  const completedCount = Object.values(checkboxes).filter(Boolean).length;
  const progressPercent = (completedCount / CHECKLIST_ITEMS.length) * 100;

  // Derive block visibility (simplified for demo: morning always visible, day after 11am, evening after 6pm)
  // To allow full interaction anytime, we can just highlight them instead, or respect strict visibility.
  // Using exact hours for visibility as requested.
  const hour = currentTime.getHours();
  const showDaytime = hour >= 11;
  const showEvening = hour >= 18;
  const showReset = hour >= 23 || hour < 4; // After 11 PM or early morning

  // Rotating tips based on day of month to ensure variety
  const tipIndex = (new Date().getDate() - 1) % 30;
  const tip = program3Tips[tipIndex];
  const message = program3Messages[tipIndex];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col px-4 py-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand-secondary">Daily Checklist</h1>
          <p className="text-sm text-brand-primary font-medium tracking-wide">
            Day {dayCounter} of your transformation
          </p>
        </div>
        
        {/* Streak Counter */}
        <div className="flex flex-col items-center justify-center bg-brand-primary/10 border border-brand-primary/20 rounded-xl px-3 py-2">
          <div className="flex items-center gap-1 text-brand-primary font-bold text-lg leading-none">
            <Flame className="w-4 h-4 fill-brand-primary" />
            {streak}
          </div>
          <span className="text-[9px] uppercase tracking-widest text-brand-secondary/60 mt-0.5">Day Streak</span>
        </div>
      </div>

      {/* Circular Progress & Achievements */}
      <div className="bg-brand-card rounded-2xl p-6 glow-border flex flex-col items-center mb-8 relative overflow-hidden">
        {/* Progress Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-brand-bg/50 stroke-current"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            />
            <circle
              className="text-brand-primary stroke-current"
              strokeWidth="8"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * progressPercent) / 100}
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-bold text-brand-secondary">{Math.round(progressPercent)}%</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-secondary/50">Complete</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex gap-2 w-full mt-2">
          <div className={`flex-1 flex flex-col items-center p-2 rounded-xl border ${streak >= 7 ? 'bg-brand-primary/20 border-brand-primary/50' : 'bg-brand-bg/50 border-brand-bg/50 opacity-50'}`}>
            <Trophy className={`w-5 h-5 mb-1 ${streak >= 7 ? 'text-brand-primary' : 'text-brand-secondary/50'}`} />
            <span className="text-[8px] text-center font-bold uppercase tracking-widest text-brand-secondary/80">Habit Locked In</span>
            <span className="text-[8px] text-brand-secondary/40">(7 Days)</span>
          </div>
          <div className={`flex-1 flex flex-col items-center p-2 rounded-xl border ${streak >= 30 ? 'bg-brand-primary/20 border-brand-primary/50' : 'bg-brand-bg/50 border-brand-bg/50 opacity-50'}`}>
            <Trophy className={`w-5 h-5 mb-1 ${streak >= 30 ? 'text-brand-primary' : 'text-brand-secondary/50'}`} />
            <span className="text-[8px] text-center font-bold uppercase tracking-widest text-brand-secondary/80">Mastery</span>
            <span className="text-[8px] text-brand-secondary/40">(30 Days)</span>
          </div>
        </div>
      </div>

      {/* Checklists */}
      <div className="flex flex-col gap-8 mb-8">
        
        {/* Morning Block */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest border-b border-brand-primary/20 pb-2">
            Morning Block <span className="text-[10px] text-brand-secondary/50 lowercase ml-2 font-normal">(Visible from 6:00 AM)</span>
          </h3>
          {CHECKLIST_ITEMS.filter(i => i.block === 'morning').map(item => (
            <ChecklistItem key={item.id} item={item} checked={!!checkboxes[item.id]} onToggle={() => toggleCheck(item.id)} />
          ))}
        </div>

        {/* Daytime Block */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest border-b border-brand-primary/20 pb-2 flex justify-between items-end">
            <span>Daytime Block</span>
            {!showDaytime && <span className="text-[10px] text-brand-secondary/50 lowercase font-normal mb-0.5">Unlocks at 11:00 AM</span>}
          </h3>
          <div className={`flex flex-col gap-3 transition-opacity duration-500 ${!showDaytime ? 'opacity-30 pointer-events-none blur-[1px]' : ''}`}>
            {CHECKLIST_ITEMS.filter(i => i.block === 'daytime').map(item => (
              <ChecklistItem key={item.id} item={item} checked={!!checkboxes[item.id]} onToggle={() => toggleCheck(item.id)} />
            ))}
          </div>
        </div>

        {/* Evening Block */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest border-b border-brand-primary/20 pb-2 flex justify-between items-end">
            <span>Evening Block</span>
            {!showEvening && <span className="text-[10px] text-brand-secondary/50 lowercase font-normal mb-0.5">Unlocks at 6:00 PM</span>}
          </h3>
          <div className={`flex flex-col gap-3 transition-opacity duration-500 ${!showEvening ? 'opacity-30 pointer-events-none blur-[1px]' : ''}`}>
            {CHECKLIST_ITEMS.filter(i => i.block === 'evening').map(item => (
              <ChecklistItem key={item.id} item={item} checked={!!checkboxes[item.id]} onToggle={() => toggleCheck(item.id)} />
            ))}
          </div>
        </div>

      </div>

      {showReset && (
        <button
          onClick={resetForTomorrow}
          className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl mb-8 shadow-[0_0_15px_rgba(232,160,180,0.3)] transition-all active:scale-[0.98]"
        >
          Reset for Tomorrow
        </button>
      )}

      {/* Rotating Content */}
      <div className="bg-brand-bg border border-brand-card rounded-2xl p-5 mb-8 flex flex-col gap-4">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-brand-primary shrink-0" />
          <div>
            <span className="text-[10px] uppercase font-bold text-brand-secondary/50 block mb-1">Quick Tip of the Day</span>
            <p className="text-sm text-brand-secondary font-medium">{tip}</p>
          </div>
        </div>
        <div className="h-px w-full bg-brand-card" />
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-primary block mb-2">Message from Dr. Oz</span>
          <p className="text-sm text-brand-secondary/80 italic">"{message}"</p>
        </div>
      </div>

    </motion.div>
  );
}

function ChecklistItem({ item, checked, onToggle }: { item: any, checked: boolean, onToggle: () => void }) {
  return (
    <div
      onClick={onToggle}
      className={`flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer relative overflow-hidden ${
        checked ? 'bg-brand-primary/10 border border-brand-primary/30' : 'bg-brand-card border border-transparent'
      }`}
    >
      {/* Background fill animation */}
      <motion.div 
        initial={false}
        animate={{ width: checked ? '100%' : '0%' }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full bg-brand-primary/5 pointer-events-none"
      />
      
      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors z-10 ${
        checked ? 'bg-brand-primary border-brand-primary' : 'border-brand-secondary/30 bg-brand-bg'
      }`}>
        {checked && <Check className="w-4 h-4 text-white" />}
      </div>
      <span className={`text-sm z-10 transition-colors ${checked ? 'text-brand-secondary/50 line-through' : 'text-brand-secondary'}`}>
        {item.label}
      </span>
    </div>
  );
}
