import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Flame, Calendar, Trophy, Share2 } from 'lucide-react';

export default function Progress() {
    const { currentDay, completedDays, streak } = useProgress();
    const totalDays = 180;

    const handleShare = () => {
        // Generate native share if available (Mobile), or visual copy
        if (navigator.share) {
            navigator.share({
                title: 'Neuromax Challenge',
                text: `I've completed ${completedDays.length} days of the 180-day Neuromax Brain Restoration Program! Current streak: ${streak} days 🔥`,
                url: window.location.origin
            }).catch(console.error);
        } else {
            alert(`I've completed ${completedDays.length} days of the 180-day Neuromax Brain Restoration Program!`);
        }
    };

    return (
        <div className="p-6 pt-10 flex flex-col gap-8 max-w-md mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">Your Journey</h1>
                <p className="text-gray-400 text-sm">Every completed session rewires your brain</p>
            </div>

            {/* Stats Board */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#1A1F3C] to-[#0A0E27] border border-[#2A3158] rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-10">
                        <Trophy className="w-16 h-16 text-white" />
                    </div>
                    <Calendar className="w-8 h-8 text-[#3B82F6] mb-3" />
                    <h2 className="text-3xl font-bold text-white mb-1">{completedDays.length}</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Days Completed</p>
                </div>

                <div className="bg-gradient-to-br from-[#1A1F3C] to-[#0A0E27] border border-[#2A3158] rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-10">
                        <Flame className="w-16 h-16 text-white" />
                    </div>
                    <Flame className="w-8 h-8 text-[#F59E0B] mb-3" />
                    <h2 className="text-3xl font-bold text-white mb-1">{streak}</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Day Streak</p>
                </div>
            </div>

            {/* 180 Day Visual Timeline Grid */}
            <div className="bg-[#1A1F3C] border border-[#2A3158] rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-white">180-Day Tracker</h3>
                    <span className="text-[#3B82F6] font-bold text-sm">{Math.round((completedDays.length / totalDays) * 100)}%</span>
                </div>

                {/* Render 180 tiny boxes */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(12px,1fr))] gap-1.5">
                    {Array.from({ length: totalDays }).map((_, i) => {
                        const dayNum = i + 1;
                        const isCompleted = completedDays.includes(dayNum);
                        const isToday = dayNum === currentDay;

                        let bgColor = "bg-[#0A0E27]"; // Upcoming / Grey
                        if (isCompleted) bgColor = "bg-[#10B981]"; // Done
                        else if (isToday) bgColor = "bg-[#3B82F6] animate-pulse"; // Today

                        return (
                            <div
                                key={dayNum}
                                className={`w-full aspect-square rounded-[3px] ${bgColor} transition-colors`}
                                title={`Day ${dayNum}`}
                            ></div>
                        );
                    })}
                </div>

                <div className="flex justify-between items-center mt-6 text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] bg-[#10B981]"></div> Done</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] bg-[#3B82F6]"></div> Today</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-[3px] bg-[#0A0E27]"></div> Locked</div>
                </div>
            </div>

            {/* Share Button */}
            <button
                onClick={handleShare}
                className="w-full bg-[#1A1F3C] border border-[#3B82F6] hover:bg-[#3B82F6]/10 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
            >
                <Share2 className="w-5 h-5" />
                Share My Progress
            </button>

        </div>
    );
}
