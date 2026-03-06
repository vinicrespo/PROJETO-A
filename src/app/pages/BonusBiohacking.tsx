import React, { useState } from 'react';
import { ChevronLeft, Zap, Moon, Sun, Wind, Brain, Activity, Battery, Coffee, Shield, Flame, ActivitySquare, Target, HeartPulse, Fingerprint, Eye, Thermometer, Droplets, Waves, Timer, Hash, Leaf } from 'lucide-react';

const lessons = [
    {
        id: 1, title: "The 10-3-2-1-0 Sleep Formula", icon: Moon, desc: "A definitive evening protocol for deep restorative REM and slow-wave sleep.",
        science: "Sleep relies on the cessation of stimulant intake and the cooldown of brainwave activity. Evening light suppression triggers melatonin release.",
        action: "10 hours before bed: no caffeine. 3 hours: no heavy meals. 2 hours: no work. 1 hour: no screens. 0: hit snooze."
    },
    {
        id: 2, title: "Morning Sun Exposure", icon: Sun, desc: "Setting your circadian rhythm to maximize daytime cortisol and evening melatonin.",
        science: "Lux receptors in the retina signal the SCN (suprachiasmatic nucleus) to release a healthy pulse of cortisol, starting the 14-hour countdown to melatonin secretion.",
        action: "Get 15 minutes of direct sunlight in your eyes (no sunglasses/windows) within 30 minutes of waking up."
    },
    {
        id: 3, title: "Cold Water Immersion", icon: Thermometer, desc: "Triggering norepinephrine and dopamine for sustained, all-day mental clarity.",
        science: "Acute cold stress releases norepinephrine by up to 500% and dopamine by 250%, increasing alertness and significantly improving immune function.",
        action: "End your daily shower with 1 to 3 minutes of the coldest water possible. Breath through the shock."
    },
    {
        id: 4, title: "Box Breathing Technique", icon: Wind, desc: "Hacking the autonomic nervous system to kill anxiety in 4 minutes.",
        science: "Conscious control of the diaphragm down-regulates the sympathetic nervous system (fight-or-flight) and engages the parasympathetic (rest-and-digest).",
        action: "Inhale for 4 seconds, hold for 4, exhale for 4, hold empty for 4. Repeat for 5 minutes."
    },
    {
        id: 5, title: "16/8 Intermittent Fasting", icon: Timer, desc: "Unlocking autophagy: how your brain cleans out dead cells.",
        science: "After 14 hours of fasting, ketone production begins and autophagy initiates, clearing out amyloid beta plaques associated with cognitive decline.",
        action: "Consume all your daily calories within an 8-hour window (e.g., 12PM to 8PM)."
    },
    {
        id: 6, title: "Dopamine Detox", icon: Brain, desc: "Resetting your reward pathways to find pleasure in difficult, meaningful tasks.",
        science: "Constant high-dopamine activities (social media, sugar) down-regulate D2 receptors, stripping your motivation for normal tasks.",
        action: "Dedicate one day per week to avoiding all cheap dopamine: no scrolling, no sugar, no TV."
    },
    {
        id: 7, title: "The Pomodoro Flow State", icon: Activity, desc: "Training your attention span for deep, uninterrupted work.",
        science: "The brain operates optimally in 'ultradian rhythms' lasting roughly 90 minutes, but beginners need shorter resistance training for focus.",
        action: "Work for 25 minutes with absolutely zero distractions, followed by a 5-minute break. Repeat."
    },
    {
        id: 8, title: "Zone 2 Cardio Protocols", icon: HeartPulse, desc: "Building mitochondrial density for limitless physical and mental energy.",
        science: "Keeping heart rate at 60-70% of max stimulates the creation of new mitochondria, the cellular powerhouses.",
        action: "Brisk walk, light jog, or cycle for 45 minutes where you can still barely maintain a conversation."
    },
    {
        id: 9, title: "Earthing / Grounding", icon: Waves, desc: "Using the Earth's negative charge to neutralize free radicals.",
        science: "Direct contact with the Earth allows free electrons to enter the body, neutralizing positively charged free radicals and reducing inflammation.",
        action: "Walk barefoot on natural grass, dirt, or sand for 15 minutes daily."
    },
    {
        id: 10, title: "Adaptogenic Herbs", icon: Leaf, desc: "Modifying your cortisol response with ancient natural compounds.",
        science: "Adaptogens like Ashwagandha and Rhodiola blunt the adrenal response to stress, lowering overall systemic cortisol.",
        action: "Incorporate 500mg of KSM-66 Ashwagandha into your daily routine during periods of high stress."
    },
    {
        id: 11, title: "Blue Light Blocking", icon: Eye, desc: "Preventing digital screens from destroying your sleep architecture.",
        science: "Blue light (400-490nm) destroys circulating melatonin on contact, tricking the brain into thinking it is peak daytime.",
        action: "Wear amber-tinted blue light blocking glasses 2 hours before bed."
    },
    {
        id: 12, title: "Nootropic Coffee Hacks", icon: Coffee, desc: "Eliminating the caffeine crash with L-Theanine and healthy fats.",
        science: "L-Theanine (an amino acid from green tea) crosses the blood-brain barrier to increase alpha brain waves, smoothing out caffeine jitters.",
        action: "Take 200mg of L-Theanine with your morning coffee, or add 1 tsp of grass-fed butter."
    },
    {
        id: 13, title: "Binaural Beats", icon: Fingerprint, desc: "Forcing your brain into specific neural wave states using pure frequency.",
        science: "Playing two slightly different frequencies in each ear causes the brain to generate a third 'phantom' frequency, matching the difference (e.g., Alpha or Theta).",
        action: "Listen to 40Hz binaural beats with stereo headphones during intensely focused work."
    },
    {
        id: 14, title: "Mouth Taping at Night", icon: Shield, desc: "Forcing nasal breathing to increase nitric oxide and oxygenation.",
        science: "Nasal breathing releases nitric oxide, a vasodilator that increases oxygen absorption in the lungs by 10-20% compared to mouth breathing.",
        action: "Place a tiny piece of porous surgical tape vertically over your lips before sleep."
    },
    {
        id: 15, title: "Sauna Hyperthermic Conditioning", icon: Flame, desc: "Releasing heat-shock proteins for whole-body cellular repair.",
        science: "Heat stress triggers the release of Heat Shock Proteins (HSPs) which repair damaged proteins and prevent neurodegenerative diseases.",
        action: "Spend 20 minutes in a hot sauna (170°F+) 2-3 times per week."
    },
    {
        id: 16, title: "Hydration with Minerals", icon: Droplets, desc: "Why pure water isn't enough to hydrate your cells and brain.",
        science: "Without sodium, potassium, and magnesium, water cannot effectively cross cell membranes, leading to cellular dehydration despite drinking a lot.",
        action: "Add a pinch of Celtic or Himalayan sea salt to your first glass of water every morning."
    },
    {
        id: 17, title: "Peripheral Vision Activation", icon: Eye, desc: "How to instantly turn off the 'fight or flight' response.",
        science: "Focal (foveal) vision is linked to sympathetic arousal. Dilating your gaze to include your periphery activates the parasympathetic calming response.",
        action: "When stressed, look straight ahead but actively notice everything in the far corners of your vision for 30 seconds."
    },
    {
        id: 18, title: "Contrast Therapy", icon: ActivitySquare, desc: "Vascular gymnastics to pump nutrients deep into your tissues.",
        science: "Alternating heat (vasodilation) and cold (vasoconstriction) creates a pumping action in the vascular system, flushing out lactic acid and metabolic waste.",
        action: "In the shower, alternate 3 minutes of hot water with 1 minute of cold water. Repeat 3 times."
    },
    {
        id: 19, title: "The 80% Rule (Hara Hachi Bu)", icon: Target, desc: "The Okinawan secret to longevity and avoiding post-meal brain fog.",
        science: "Digestion requires massive amounts of blood and energy. Overeating diverts resources away from the brain, causing acute cognitive decline.",
        action: "Stop eating when you feel 80% full. Wait 20 minutes; the satiety signals will catch up."
    },
    {
        id: 20, title: "Glucose Spikes Management", icon: Zap, desc: "Flattening the curve to stop the deadly sugar-crash cycle.",
        science: "High glycemic foods spike insulin, followed by a reactive hypoglycemic crash that kills energy and destroys focus.",
        action: "Start your meals with vegetables/fiber, then protein/fat, and eat your carbs last."
    }
];

export default function BonusBiohacking() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    if (selectedId !== null) {
        const lesson = lessons.find(l => l.id === selectedId)!;
        const Icon = lesson.icon;

        return (
            <div className="p-6 pt-8 max-w-md mx-auto animate-fade-in flex flex-col h-full min-h-[calc(100vh-80px)]">
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => setSelectedId(null)} className="p-2 bg-[#1A1F3C] rounded-full hover:bg-gray-800 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <div>
                        <h2 className="text-sm font-bold text-[#3B82F6] tracking-wide uppercase">Biohacking Secrets</h2>
                        <h1 className="text-xl font-bold text-white">Technique #{lesson.id}</h1>
                    </div>
                </div>

                <div className="bg-[#1A1F3C] p-6 rounded-2xl border border-[#2A3158] shadow-lg mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[#3B82F6]" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-6">{lesson.title}</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[#3B82F6] font-bold mb-3 flex items-center gap-2 uppercase tracking-wide text-sm">
                                The Concept
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed">{lesson.desc}</p>
                        </div>

                        <div className="bg-[#0A0E27] p-5 rounded-xl border border-[#2A3158]">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Brain className="w-4 h-4 text-white" /> The Science Behind It
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{lesson.science}</p>
                        </div>

                        <div>
                            <h3 className="text-[#F59E0B] font-bold mb-3 flex items-center gap-2 uppercase tracking-wide text-sm">
                                Action Protocol
                            </h3>
                            <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 p-5 rounded-xl">
                                <p className="text-white text-base font-medium leading-relaxed">{lesson.action}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 pt-8 max-w-md mx-auto pb-6">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">Biohacking Secrets</h1>
                <p className="text-gray-400 text-sm px-4">20 Techniques to Optimize Your Mind, Energy and Performance</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {lessons.map((lesson) => {
                    const Icon = lesson.icon;
                    return (
                        <button
                            key={lesson.id}
                            onClick={() => setSelectedId(lesson.id)}
                            className="bg-[#1A1F3C] border border-[#2A3158] hover:border-[#3B82F6] p-4 rounded-2xl flex flex-col items-start gap-4 text-left transition-all group shadow-sm"
                        >
                            <div className="flex justify-between w-full items-start">
                                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-[#3B82F6]" />
                                </div>
                                <span className="text-xs font-bold text-gray-500">#{lesson.id}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm leading-snug line-clamp-3">{lesson.title}</h3>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
