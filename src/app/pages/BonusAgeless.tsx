import React, { useState } from 'react';
import { ChevronLeft, Droplets, Leaf, Shield, Sparkles, Coffee, Apple, CheckCircle } from 'lucide-react';

const protocols = [
    {
        id: 1,
        title: "The Turmeric Reset",
        focus: "Toxin Elimination",
        icon: Sparkles,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        benefits: "Rapidly flushes out neurotoxins accumulated from environmental exposure. Reduces systemic inflammation that blocks cognitive clarity.",
        ingredients: [
            "1 tsp organic turmeric powder",
            "A pinch of black pepper (activates curcumin)",
            "1/2 lemon squeezed",
            "Warm water"
        ],
        instructions: "Mix all ingredients in a warm glass of water. Drink first thing in the morning on an empty stomach for 5 consecutive days."
    },
    {
        id: 2,
        title: "The Chlorella Cleanse",
        focus: "Heavy Metal Detox",
        icon: Leaf,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        benefits: "Binds and pulls heavy metals (like mercury and lead) from the brain. Reverses years of slow neural degradation.",
        ingredients: [
            "5g organic cracked-cell wall chlorella powder",
            "1 cup filtered water or light juice"
        ],
        instructions: "Stir the powder into the liquid. Consume 30 minutes before your first meal. Continue for 5 days."
    },
    {
        id: 3,
        title: "The Ginger Immunity Boost",
        focus: "Cellular Inflammation",
        icon: Shield,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        benefits: "Stops the inflammatory cascades that cause 'brain fog' and sluggish recall. Fortifies the body's natural defense.",
        ingredients: [
            "1 inch fresh ginger root (grated)",
            "1 tsp raw honey",
            "Hot water"
        ],
        instructions: "Steep the grated ginger in hot water for 10 minutes. Strain, add honey, and drink before bed for 5 nights."
    },
    {
        id: 4,
        title: "The Lemon Detox Protocol",
        focus: "Cellular Renewal",
        icon: Droplets,
        color: "text-yellow-300",
        bg: "bg-yellow-300/10",
        border: "border-yellow-300/20",
        benefits: "Alkalizes the body and stimulates the liver to rapidly process dead cells and metabolic waste.",
        ingredients: [
            "1 whole organic lemon",
            "16oz room temperature water",
            "A pinch of Himalayan pink salt"
        ],
        instructions: "Squeeze the entire lemon into the water, add salt for electrolytes. Drink immediately upon waking."
    },
    {
        id: 5,
        title: "The Green Tea Brain Shield",
        focus: "Neuroprotection",
        icon: Coffee,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        benefits: "Floods the brain with EGCG antioxidants, protecting neurons from free radical damage and aging.",
        ingredients: [
            "1 high-quality Matcha green tea bag or 1 tsp powder",
            "Hot (not boiling) water"
        ],
        instructions: "Prepare the tea and consume in the early afternoon as a replacement for coffee. Use for 5 days to reset caffeine tolerance."
    },
    {
        id: 6,
        title: "The Blueberry Memory Protocol",
        focus: "Antioxidants",
        icon: Apple,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        benefits: "Concentrated anthocyanins specifically target memory centers in the hippocampus to enhance recall and spatial memory.",
        ingredients: [
            "1/2 cup wild blueberries (frozen is fine)",
            "1/4 cup walnuts"
        ],
        instructions: "Consume this exact combination as your primary mid-morning snack for 5 consecutive days. Do not mix with dairy."
    }
];

export default function BonusAgeless() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    if (selectedId !== null) {
        const protocol = protocols.find(p => p.id === selectedId)!;
        const Icon = protocol.icon;

        return (
            <div className="p-6 pt-8 max-w-md mx-auto animate-fade-in flex flex-col h-full min-h-[calc(100vh-80px)]">
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => setSelectedId(null)} className="p-2 bg-[#1A1F3C] rounded-full hover:bg-gray-800 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <div>
                        <h2 className="text-sm font-bold text-[#F59E0B] tracking-wide uppercase">Ageless Body</h2>
                        <h1 className="text-xl font-bold text-white">Protocol Details</h1>
                    </div>
                </div>

                <div className="bg-[#1A1F3C] p-6 rounded-2xl border border-[#2A3158] shadow-lg mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${protocol.bg} flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 ${protocol.color}`} />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{protocol.title}</h2>
                    <p className={`${protocol.color} font-semibold text-sm uppercase tracking-wider mb-6`}>{protocol.focus}</p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[#3B82F6]" /> Benefits
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{protocol.benefits}</p>
                        </div>

                        <div className="bg-[#0A0E27] p-4 rounded-xl border border-[#2A3158]">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#F59E0B]" /> Required Ingredients
                            </h3>
                            <ul className="space-y-2">
                                {protocol.ingredients.map((ing, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-[#3B82F6] mt-0.5">•</span> {ing}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#10B981]" /> 5-Day Instructions
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{protocol.instructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 pt-8 max-w-md mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">Ageless Body Perfect Health</h1>
                <p className="text-gray-400 text-sm px-4">5-Day Detox Protocols to Boost Your Brain and Immune System</p>
            </div>

            <div className="space-y-4">
                {protocols.map((protocol) => {
                    const Icon = protocol.icon;
                    return (
                        <button
                            key={protocol.id}
                            onClick={() => setSelectedId(protocol.id)}
                            className={`w-full bg-[#1A1F3C] border ${protocol.border} p-4 rounded-2xl flex items-center gap-4 text-left hover:border-[#3B82F6] transition-all group`}
                        >
                            <div className={`w-14 h-14 shrink-0 rounded-xl ${protocol.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                <Icon className={`w-6 h-6 ${protocol.color}`} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-base mb-1">{protocol.title}</h3>
                                <p className={`${protocol.color} text-xs uppercase tracking-wider font-semibold`}>{protocol.focus}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

// Temporary import for the CheckCircle icon missing at the top
