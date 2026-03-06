import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Lock, CheckCircle, ChevronLeft, ChevronRight, PlayCircle, Apple, Brain } from 'lucide-react';

export default function Program() {
    const { currentDay, completedDays, markDayComplete } = useProgress();
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    // Constants
    const TOTAL_DAYS = 180;
    const phases = [
        { title: "Phase 1 — Neural Cleanse", start: 1, end: 30, desc: "Activating Your Brain's Defense System" },
        { title: "Phase 2 — Neural Strengthening", start: 31, end: 90, desc: "Memory Recall and Pattern Recognition" },
        { title: "Phase 3 — Full Shield Protocol", start: 91, end: 180, desc: "Long-term Neuroprotection" }
    ];

    // Render Day Detail
    if (selectedDay !== null) {
        const isCompleted = completedDays.includes(selectedDay);

        return (
            <div className="p-6 pt-8 max-w-md mx-auto animate-fade-in flex flex-col h-full min-h-[calc(100vh-80px)]">
                {/* Detail Header */}
                <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setSelectedDay(null)} className="p-2 bg-[#1A1F3C] rounded-full hover:bg-gray-800 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <div>
                        <h2 className="text-sm font-bold text-[#F59E0B] tracking-wide uppercase">NeuroLock Protocol</h2>
                        <h1 className="text-xl font-bold text-white">Day {selectedDay} Session</h1>
                    </div>
                </div>

                {/* Dynamic Content Generation based on day */}
                <div className="flex-1 space-y-6">
                    {/* Cognitive Exercise */}
                    <div className="bg-[#1A1F3C] p-5 rounded-2xl border border-[#2A3158] shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-[#3B82F6]/20 p-2 rounded-lg">
                                <Brain className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <h3 className="font-bold text-white text-base">Cognitive Activation</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {selectedDay <= 30
                                ? "Today we focus on clearing mental fog. Spend 5 minutes visualizing a complex object in your mind, rotating it and recalling specific details without breaking focus."
                                : "Pattern recognition drill: Memorize a sequence of 10 random words. Wait 5 minutes, then attempt to write them all down perfectly."}
                        </p>
                        <div className="flex items-center gap-2 text-[#3B82F6] text-xs font-semibold bg-[#3B82F6]/10 w-fit px-3 py-1.5 rounded-full">
                            <PlayCircle className="w-4 h-4" />
                            <span>Estimated time: ~10 minutes</span>
                        </div>
                    </div>

                    {/* Dietary Trigger */}
                    <div className="bg-[#1A1F3C] p-5 rounded-2xl border border-[#2A3158] shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-[#10B981]/20 p-2 rounded-lg">
                                <Apple className="w-5 h-5 text-[#10B981]" />
                            </div>
                            <h3 className="font-bold text-white text-base">Dietary Trigger</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Incorporate 1 tablespoon of raw organic coconut oil or MCT oil into your morning routine today. The medium-chain triglycerides provide instant clean ketone energy specifically for the brain.
                        </p>
                    </div>

                    {/* Daily Practice */}
                    <div className="bg-[#1A1F3C] p-5 rounded-2xl border border-[#2A3158] shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-[#F59E0B]/20 p-2 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                            </div>
                            <h3 className="font-bold text-white text-base">Daily Practice</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Perform 4 cycles of Box Breathing (4 seconds inhale, 4 hold, 4 exhale, 4 hold). This rapidly decreases cortisol levels, allowing optimal hippocampal function for memory retention.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 mb-4 space-y-4">
                    <button
                        onClick={() => {
                            markDayComplete(selectedDay);
                            setSelectedDay(null);
                        }}
                        disabled={isCompleted}
                        className={`w-full font-bold py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2
              ${isCompleted
                                ? 'bg-[#10B981] text-white opacity-80 cursor-default'
                                : 'bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:scale-[1.02] active:scale-95 text-white'}`}
                    >
                        {isCompleted ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                Session Completed
                            </>
                        ) : (
                            "Mark as Complete"
                        )}
                    </button>

                    <div className="flex justify-between gap-4">
                        <button
                            onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
                            disabled={selectedDay === 1}
                            className="flex-1 bg-[#1A1F3C] border border-[#2A3158] text-white py-3 rounded-xl disabled:opacity-50 flex items-center justify-center gap-1 text-sm font-semibold hover:bg-[#2A3158] transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" /> Previous
                        </button>
                        <button
                            onClick={() => setSelectedDay(Math.min(TOTAL_DAYS, selectedDay + 1))}
                            disabled={selectedDay === TOTAL_DAYS || selectedDay >= currentDay}
                            className="flex-1 bg-[#1A1F3C] border border-[#2A3158] text-white py-3 rounded-xl disabled:opacity-50 flex items-center justify-center gap-1 text-sm font-semibold hover:bg-[#2A3158] transition-colors"
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Render Master List
    return (
        <div className="p-4 pt-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold tracking-tight mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NeuroLock Protocol
            </h1>

            <div className="space-y-8">
                {phases.map((phase, idx) => {
                    const isPhaseLocked = currentDay < phase.start;

                    return (
                        <div key={idx} className={`space-y-4 ${isPhaseLocked ? 'opacity-60' : ''}`}>
                            <div className="sticky top-0 bg-[#0A0E27]/90 backdrop-blur-md z-10 py-2 border-b border-[#2A3158]">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    {isPhaseLocked && <Lock className="w-4 h-4 text-gray-500" />}
                                    {phase.title}
                                </h2>
                                <p className="text-xs text-[#3B82F6] uppercase tracking-wider font-semibold mt-1">{phase.desc}</p>
                            </div>

                            <div className="grid grid-cols-5 gap-2">
                                {Array.from({ length: phase.end - phase.start + 1 }).map((_, i) => {
                                    const dayNum = phase.start + i;
                                    const isLocked = dayNum > currentDay;
                                    const isCompleted = completedDays.includes(dayNum);
                                    const isToday = dayNum === currentDay;

                                    return (
                                        <button
                                            key={dayNum}
                                            disabled={isLocked}
                                            onClick={() => setSelectedDay(dayNum)}
                                            className={`
                        aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-bold transition-all relative
                        ${isCompleted ? 'bg-[#10B981]/20 border border-[#10B981] text-[#10B981]'
                                                    : isToday ? 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] transform scale-105 z-10'
                                                        : isLocked ? 'bg-[#1A1F3C] border border-[#2A3158] text-gray-500 cursor-not-allowed'
                                                            : 'bg-[#1A1F3C] border border-[#2A3158] text-white hover:border-[#3B82F6]'}
                      `}
                                        >
                                            {isLocked ? (
                                                <Lock className="w-4 h-4" />
                                            ) : (
                                                <span>{dayNum}</span>
                                            )}

                                            {isCompleted && (
                                                <CheckCircle className="w-3 h-3 absolute top-1 right-1" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
