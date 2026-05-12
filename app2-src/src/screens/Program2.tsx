import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Circle, Sun, Clock, Moon } from 'lucide-react';
import { program2Data } from '../data/programContent';

export default function Program2() {
  const [currentDay, setCurrentDay] = useState(() => {
    const saved = localStorage.getItem('app2_p2_day');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [checkboxes, setCheckboxes] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(`app2_p2_checks_${currentDay}`);
    return saved ? JSON.parse(saved) : [false, false, false];
  });

  useEffect(() => {
    const saved = localStorage.getItem(`app2_p2_checks_${currentDay}`);
    setCheckboxes(saved ? JSON.parse(saved) : [false, false, false]);
  }, [currentDay]);

  const toggleCheck = (index: number) => {
    const newChecks = [...checkboxes];
    newChecks[index] = !newChecks[index];
    setCheckboxes(newChecks);
    localStorage.setItem(`app2_p2_checks_${currentDay}`, JSON.stringify(newChecks));
  };

  const completeDay = () => {
    if (currentDay < 14) {
      const nextDay = currentDay + 1;
      setCurrentDay(nextDay);
      localStorage.setItem('app2_p2_day', nextDay.toString());
      window.scrollTo(0, 0);
    }
  };

  const dayData = program2Data[currentDay - 1];
  const progressPercent = (currentDay / 14) * 100;

  const windows = [
    {
      title: 'Morning Activation',
      time: '6:00 - 7:30 AM',
      icon: Sun,
      what: 'Peak cortisol receptivity to GLP-1 stimulation',
      protocol: '60s activation drink + 60s movement sequence + 60s breathing pattern',
      why: 'Opens GLP-1 receptors at maximum sensitivity'
    },
    {
      title: 'Midday Amplification',
      time: '12:30 - 2:00 PM',
      icon: Clock,
      what: 'Peak insulin sensitivity meets digestive activity',
      protocol: 'Meal pairing technique + 10m post-meal walk + thermogenic spice',
      why: 'Multiplies GLP-1 release after main meal'
    },
    {
      title: 'Evening Lock-In',
      time: '8:30 - 10:00 PM',
      icon: Moon,
      what: '90-minute pre-sleep maximum GLP-1 receptivity',
      protocol: 'Gelatide timing precision + cortisol shutdown + thermal prep',
      why: 'Locks in fat burning for 8 hours of sleep'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col px-4 py-6"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-brand-secondary mb-1">The 7x Gelatide Accelerator</h1>
        <p className="text-brand-primary text-sm font-semibold tracking-wide">Day {currentDay} of 14</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-brand-card rounded-full overflow-hidden mb-8">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-brand-primary rounded-full shadow-[0_0_10px_rgba(232,160,180,0.8)]"
        />
      </div>

      {/* Daily Focus Info */}
      <div className="bg-brand-card rounded-2xl p-5 mb-8 border border-brand-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 blur-[30px] rounded-full pointer-events-none" />
        <h3 className="text-xs text-brand-secondary/50 uppercase tracking-widest font-bold mb-1">Today's Focus</h3>
        <p className="text-brand-secondary font-medium mb-4">{dayData.focus}</p>
        
        <h3 className="text-xs text-brand-secondary/50 uppercase tracking-widest font-bold mb-1">Adjustment</h3>
        <p className="text-brand-primary text-sm mb-4">{dayData.adjustment}</p>

        <div className="bg-brand-bg rounded-xl p-3 border border-brand-card">
          <p className="text-xs text-brand-secondary/80 italic">"{dayData.tip}"</p>
        </div>
      </div>

      <h2 className="text-lg font-bold text-brand-secondary mb-4">The Three Hormonal Windows</h2>

      {/* Windows Cards */}
      <div className="flex flex-col gap-4 mb-8">
        {windows.map((win, index) => {
          const Icon = win.icon;
          const isChecked = checkboxes[index];
          return (
            <div 
              key={index}
              onClick={() => toggleCheck(index)}
              className={`bg-brand-card rounded-2xl p-5 border transition-all cursor-pointer ${
                isChecked ? 'border-brand-primary bg-brand-primary/5' : 'border-brand-bg/50 glow-border'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isChecked ? 'bg-brand-primary text-brand-bg' : 'bg-brand-bg text-brand-primary'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-secondary text-sm">{win.title}</h3>
                    <p className="text-brand-primary text-xs tracking-wider">{win.time}</p>
                  </div>
                </div>
                <div>
                  {isChecked ? (
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-brand-secondary/30" />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary/50 block mb-0.5">What it is</span>
                  <p className="text-xs text-brand-secondary/80">{win.what}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary/50 block mb-0.5">Exact Protocol</span>
                  <p className="text-xs text-brand-secondary font-medium">{win.protocol}</p>
                </div>
                <div className="bg-brand-bg/50 p-2 rounded-lg">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary block mb-0.5">Why it works</span>
                  <p className="text-xs text-brand-secondary/70">{win.why}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={completeDay}
        disabled={!checkboxes.every(Boolean) || currentDay >= 14}
        className="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-50 disabled:bg-brand-card disabled:text-brand-secondary/50 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(232,160,180,0.2)] mb-8"
      >
        {currentDay >= 14 ? 'Accelerator Complete!' : 'Mark Day Complete'}
        {currentDay < 14 && <ChevronRight className="w-5 h-5" />}
      </button>
    </motion.div>
  );
}
