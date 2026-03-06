import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { PlayCircle, Gift, TrendingUp, Sparkles, ChevronRight, BrainCircuit } from 'lucide-react';

const quotes = [
    "The brain you build today is the mind you'll have tomorrow.",
    "Neuroplasticity means you are never stuck. Rewire your reality.",
    "Every small habit forms a new neural pathway toward clarity.",
    "Protect your mind; it's the engine of your longevity.",
    "Clarity is not found—it is cultivated daily."
];

export default function Dashboard() {
    const { currentDay, completedDays } = useProgress();
    const navigate = useNavigate();

    const progressPercentage = Math.round((completedDays.length / 180) * 100);
    const randomQuote = quotes[currentDay % quotes.length];

    return (
        <div className="p-6 pt-10 flex flex-col gap-6 max-w-md mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Welcome back!
                </h1>
                <p className="text-gray-400 text-sm">Your brain restoration journey continues.</p>
            </div>

            {/* Main Tracker Card */}
            <div className="bg-[#1A1F3C] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#2A3158] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <BrainCircuit className="w-24 h-24 text-[#3B82F6]" />
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-wider mb-1">Current Progress</p>
                            <h2 className="text-3xl font-bold text-white">Day {currentDay} <span className="text-lg text-gray-500 font-normal">of 180</span></h2>
                        </div>
                        <span className="text-2xl font-bold text-[#F59E0B]">{progressPercentage}%</span>
                    </div>

                    <div className="w-full h-2 bg-[#0A0E27] rounded-full overflow-hidden mb-6">
                        <div
                            className="h-full bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>

                    <button
                        onClick={() => navigate('/app/program')}
                        className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
                    >
                        <PlayCircle className="w-5 h-5" />
                        Start Today's Session
                    </button>
                </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-[#1A1F3C] to-[#0A0E27] rounded-xl p-5 border border-[#2A3158] flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#F59E0B] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300 italic leading-relaxed">"{randomQuote}"</p>
            </div>

            {/* Quick Access Grid */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-white">Quick Access</h3>
                <div className="grid grid-cols-2 gap-4">

                    <button onClick={() => navigate('/app/program')} className="bg-[#1A1F3C] border border-[#2A3158] hover:border-[#3B82F6] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6]/20 transition-colors">
                            <PlayCircle className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                        <span className="font-semibold text-sm">My Program</span>
                    </button>

                    <button onClick={() => navigate('/app/progress')} className="bg-[#1A1F3C] border border-[#2A3158] hover:border-[#F59E0B] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
                            <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
                        </div>
                        <span className="font-semibold text-sm">My Progress</span>
                    </button>

                    <button onClick={() => navigate('/app/bonuses/ageless')} className="bg-[#1A1F3C] border border-[#2A3158] hover:border-[#10B981] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                            <Gift className="w-6 h-6 text-[#10B981]" />
                        </div>
                        <span className="font-semibold text-sm line-clamp-2">Bonus 1:<br />Ageless Body</span>
                    </button>

                    <button onClick={() => navigate('/app/bonuses/biohacking')} className="bg-[#1A1F3C] border border-[#2A3158] hover:border-[#8B5CF6] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-colors">
                            <Gift className="w-6 h-6 text-[#8B5CF6]" />
                        </div>
                        <span className="font-semibold text-sm line-clamp-2">Bonus 2:<br />Biohacking</span>
                    </button>

                </div>
            </div>

            {/* Resume Banner */}
            <div onClick={() => navigate('/app/program')} className="bg-gradient-to-r from-[#2A3158] to-[#1A1F3C] rounded-xl p-4 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity mt-2">
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">NeuroLock Protocol</h4>
                    <p className="text-xs text-gray-400">Continue from where you left off</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

        </div>
    );
}
