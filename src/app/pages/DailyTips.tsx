import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Lightbulb, Zap, Brain, ChevronRight, Apple, Moon } from 'lucide-react';

const tips = [
    {
        dayFilter: 0, // General tip
        title: "Morning Hydration",
        icon: Zap,
        color: "text-[#3B82F6]",
        bg: "bg-[#3B82F6]/10",
        desc: "Drink 500ml of water immediately upon waking. Your brain shrinks overnight due to dehydration, slowing cognitive processing speed by up to 14%."
    },
    {
        dayFilter: 0,
        title: "The 20-20-20 Rule",
        icon: Brain,
        color: "text-[#10B981]",
        bg: "bg-[#10B981]/10",
        desc: "To prevent visual fatigue and mental fog from screen time, look at something 20 feet away for 20 seconds every 20 minutes."
    },
    {
        dayFilter: 0,
        title: "Strategic Caffeine",
        icon: Apple,
        color: "text-[#F59E0B]",
        bg: "bg-[#F59E0B]/10",
        desc: "Delay your first cup of coffee until 90 minutes after waking. This allows adenosine (the sleepiness molecule) to fully clear out naturally, preventing the afternoon crash."
    },
    {
        dayFilter: 0,
        title: "Blue Light Curfew",
        icon: Moon,
        color: "text-[#8B5CF6]",
        bg: "bg-[#8B5CF6]/10",
        desc: "Dim the screens 90 minutes before bed. Blue light destroys melatonin production, robbing you of the critical slow-wave sleep where the brain repairs itself."
    }
];

export default function DailyTips() {
    const { currentDay } = useProgress();

    // Dynamic progressive tip based on what Phase they are in
    const getPhaseMessage = () => {
        if (currentDay <= 30) {
            return "Phase 1: Your brain is currently flushing out neurotoxins. Focus heavily on hydration and early sleep.";
        } else if (currentDay <= 90) {
            return "Phase 2: Neural pathways are strengthening. Pair your daily sessions with DHA/EPA omega-3s for faster myelin sheath growth.";
        } else {
            return "Phase 3: Deep neuroprotection phase. Consistency is key now to make these new cognitive baselines permanent.";
        }
    };

    return (
        <div className="p-6 pt-10 flex flex-col gap-6 max-w-md mx-auto">
            <div className="text-center mb-2">
                <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">Daily Neuro Tips</h1>
                <p className="text-gray-400 text-sm">Actionable insights to maximize your results</p>
            </div>

            {/* Phase Status Banner */}
            <div className="bg-gradient-to-r from-[#1A1F3C] to-[#0A0E27] border border-[#2A3158] p-5 rounded-2xl flex items-start gap-4">
                <div className="bg-[#3B82F6]/20 p-2.5 rounded-xl shrink-0">
                    <Lightbulb className="w-6 h-6 text-[#3B82F6] animate-pulse" />
                </div>
                <div>
                    <h3 className="text-white font-bold mb-1">Your Phase Insight</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {getPhaseMessage()}
                    </p>
                </div>
            </div>

            {/* Tips List */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-white mb-2">Essential Protocol Hacks</h2>

                {tips.map((tip, index) => {
                    const Icon = tip.icon;
                    return (
                        <div
                            key={index}
                            className="bg-[#1A1F3C] border border-[#2A3158] p-4 rounded-xl flex gap-4 transition-all hover:border-[#3B82F6]"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${tip.bg}`}>
                                <Icon className={`w-6 h-6 ${tip.color}`} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-base mb-1">{tip.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {tip.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
