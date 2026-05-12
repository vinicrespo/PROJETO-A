import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const programs = [
  {
    id: 'program1',
    title: 'Menopause GLP-1 Override',
    subtitle: 'Complete 90-day hormone transformation for women over 40',
    tag: '90-DAY PROGRAM',
    path: '/program1'
  },
  {
    id: 'program2',
    title: 'The 7x Gelatide Accelerator',
    subtitle: 'Accelerate your Gelatide results up to 7 times faster',
    tag: 'RAPID PROTOCOL',
    path: '/program2'
  },
  {
    id: 'program3',
    title: 'Daily Gelatide Checklist',
    subtitle: 'Your simple daily routine to make Gelatide automatic in 7 days',
    tag: 'DAILY TOOL',
    path: '/program3'
  }
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col px-4 py-6"
    >
      {/* Welcome Section */}
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="text-2xl font-bold text-brand-secondary">Welcome back</h2>
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full px-3 py-1 w-max">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-xs font-semibold text-brand-primary tracking-wide">3 Programs Active</span>
        </div>
      </div>

      {/* Program Cards */}
      <div className="flex flex-col gap-5">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-brand-card rounded-2xl p-5 glow-border flex flex-col gap-4 relative overflow-hidden"
          >
            {/* Card Background Glow */}
            <div className="absolute top-[-50px] right-[-50px] w-[100px] h-[100px] bg-brand-primary/10 blur-[40px] pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[10px] font-bold text-brand-primary tracking-widest uppercase">
                {program.tag}
              </span>
              <h3 className="text-xl font-bold text-brand-secondary leading-tight">
                {program.title}
              </h3>
              <p className="text-sm text-brand-secondary/70 leading-relaxed">
                {program.subtitle}
              </p>
            </div>

            <button
              onClick={() => navigate(program.path)}
              className="mt-2 flex items-center justify-between bg-brand-primary text-white font-semibold px-4 py-3 rounded-xl hover:bg-brand-primary/90 transition-colors group"
            >
              <span>Open Program</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Guarantee Badge */}
      <div className="mt-10 mb-4 flex items-center justify-center gap-2 text-brand-secondary/50 text-xs">
        <ShieldCheck className="w-4 h-4 text-brand-primary/70" />
        <span>Protected by our 60-Day Guarantee</span>
      </div>
    </motion.div>
  );
}
