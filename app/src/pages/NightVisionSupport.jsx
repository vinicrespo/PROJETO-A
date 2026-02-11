import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function NightVisionSupport() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('glare');

    const tabs = [
        { id: 'glare', label: 'Glare Comfort' },
        { id: 'habits', label: 'Evening Habits' },
        { id: 'lighting', label: 'Lighting Setup' },
    ];

    return (
        <div className="min-h-screen bg-primary/5">
            <main className="max-w-4xl mx-auto px-6 py-10 mt-[60px]">
                <Button variant="ghost" size="sm" onClick={() => navigate('/app/home')} className="mb-6 pl-0">
                    ← Back to Home
                </Button>

                <section className="mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Night Vision Support</h1>
                    <p className="text-text-muted text-lg">
                        Strategies for evening comfort and optimal lighting in low-light conditions
                    </p>
                </section>

                {/* Tabs Navigation */}
                <div className="flex space-x-2 mb-8 border-b border-secondary overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-3 px-4 text-sm font-bold transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'text-primary border-b-2 border-accent'
                                    : 'text-text-muted hover:text-primary'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white p-8 rounded-xl border border-secondary shadow-sm min-h-[400px]">
                    {activeTab === 'glare' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-xl font-bold text-primary mb-4">Glare Comfort</h2>
                            <p className="text-text-body mb-4">
                                Glare is one of the most common causes of evening visual discomfort. It occurs when light reflects off surfaces or comes directly into your eyes, scattering and reducing contrast.
                            </p>
                            <h3 className="font-bold text-primary mt-6 mb-2">How to Manage Glare:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-text-body">
                                <li>Clean your glasses regularly—smudges scatter light significantly.</li>
                                <li>Use anti-reflective coatings on lenses if you wear glasses.</li>
                                <li>Adjust screen brightness to match your ambient lighting.</li>
                                <li>Avoid staring directly at oncoming headlights while driving; look slightly to the right shoulder.</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'habits' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-xl font-bold text-primary mb-4">Evening Habits</h2>
                            <p className="text-text-body mb-4">
                                Your evening routine significantly impacts your overall visual wellness. These habits help prepare your eyes for rest and recovery during sleep.
                            </p>
                            <div className="space-y-6 mt-6">
                                <div className="border-l-4 border-accent pl-4">
                                    <h4 className="font-bold text-primary">2 Hours Before Bed</h4>
                                    <p className="text-sm text-text-body">Begin dimming lights and switch devices to "Night Mode" (warm/red filters).</p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h4 className="font-bold text-primary">1 Hour Before Bed</h4>
                                    <p className="text-sm text-text-body">Stop all heavy screen use. Engage in listening to audiobooks or light stretching.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'lighting' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-xl font-bold text-primary mb-4">Lighting Setup</h2>
                            <p className="text-text-body mb-4">
                                Creating the right lighting environment is crucial for visual wellness and sleep quality. Your goal is to mimic the natural progression of sunset indoors.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-softBlue p-4 rounded-lg">
                                    <h4 className="font-bold text-primary mb-2">Task Lighting</h4>
                                    <p className="text-sm text-text-body">Use directed light for reading or cooking, rather than brightening the whole room.</p>
                                </div>
                                <div className="bg-softBlue p-4 rounded-lg">
                                    <h4 className="font-bold text-primary mb-2">Ambient Lighting</h4>
                                    <p className="text-sm text-text-body">Switch to warm-white bulbs (2700K or lower) in living areas for evening relaxation.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
}
